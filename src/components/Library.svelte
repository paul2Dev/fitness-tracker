<script>
  import Utils from '../lib/utils.js';
  import { Modal, Input, Select, Button } from 'flowbite-svelte'
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
  import { muscleGroups, exercises } from '../store/stores.js';

  let defaultModal = false;
  let modalTitle = 'Video';
  let modalContent = '';
  let searchTerm = '';

  const formValues = {
    name: '',
    muscleGroup: '',
    videoUrl: ''
  };

  $: filteredExercises = $exercises.filter(
    (exercise) => exercise.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  function saveExercise() {

    if(!formValues.name || !formValues.muscleGroup) {
      alert('Please fill out all fields');
      return;
    }

    if(formValues.videoUrl && !Utils.getYoutubeVideoId(formValues.videoUrl)) {
      alert('Please enter a valid YouTube URL');
      return;
    }

    exercises.update(exercises => {
      exercises.push({
        id: crypto.randomUUID(),
        name: formValues.name,
        muscleGroup: formValues.muscleGroup,
        videoUrl: formValues.videoUrl,
        created_at: new Date().toISOString()
      });
      return exercises;
    });

    formValues.name = '';
    formValues.muscleGroup = '';
    formValues.videoUrl = '';
  };

  function showVideo(event) {
    defaultModal = true;
    const videoId = Utils.getYoutubeVideoId(event.target.href);
    modalTitle = event.target.title;
    modalContent = `<iframe width="560" height="315" 
                      src="https://www.youtube.com/embed/${videoId}" 
                      frameborder="0" 
                      allow="accelerometer; 
                      autoplay; 
                      clipboard-write; 
                      encrypted-media; 
                      gyroscope; 
                      picture-in-picture" 
                      allowfullscreen>
                    </iframe>`;
  }
</script>

<div class="bg-white p-6 rounded-lg shadow-md">
    <form class="flex flex-col md:flex-row gap-2" on:submit|preventDefault={saveExercise}>
      <Input bind:value={formValues.name} type="text" id="exercise_name" placeholder="Exercise Name" required />
      <Select items={$muscleGroups} bind:value="{formValues.muscleGroup}" required />
      <Input bind:value={formValues.videoUrl} type="text" id="video_url" placeholder="Video URL" />
      <Button gradient color="tealToLime" type="submit">add</Button>
    </form>

    <TableSearch  placeholder="Search by exercise name" hoverable={true} bind:inputValue={searchTerm}>
      <TableHead>
        <TableHeadCell>Exercise Name</TableHeadCell>
        <TableHeadCell>Target Muscle Group</TableHeadCell>
        <TableHeadCell>Video URL</TableHeadCell>
      </TableHead>
      <TableBody class="divide-y">
        {#each filteredExercises as exercise}
          <TableBodyRow>
            <TableBodyCell>{exercise.name}</TableBodyCell>
            <TableBodyCell>{$muscleGroups.find(group => group.value === exercise.muscleGroup).name}</TableBodyCell>
            <TableBodyCell>{#if 'videoUrl' in exercise} <a on:click|preventDefault={showVideo} title="{exercise.name}" href="{exercise.videoUrl}" target="_blank" rel="noreferrer">{exercise.videoUrl}</a> {/if}</TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </TableSearch>
</div>

<Modal title="{modalTitle}" bind:open={defaultModal} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    {@html modalContent}
  </p>
</Modal>