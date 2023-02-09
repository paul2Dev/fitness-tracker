<script>
  import Utils from '../lib/utils.js';
  import { Modal, FloatingLabelInput, Select, Button, Helper } from 'flowbite-svelte'
  import { TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
  import { muscleGroups, exercises } from '../store/stores.js';

  let defaultModal = false;
  let modalTitle = 'Video';
  let modalContent = '';
  let searchTerm = '';
  let errors = {};

  const formValues = {
    name: '',
    muscleGroup: '',
    videoUrl: ''
  };

  $: filteredExercises = $exercises.filter(
    (exercise) => exercise.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  function saveExercise() {

    errors = {
      name: '',
      videoUrl: ''
    };

    const exerciceExists = $exercises.find(exercise => exercise.name === formValues.name);

    if(exerciceExists && exerciceExists.muscleGroup === formValues.muscleGroup) {
      errors.name = 'Exercise already exists';
    }

    if(!formValues.name || !formValues.muscleGroup) {
      errors.name = 'Please fill out all fields';
    }

    if(formValues.videoUrl && !Utils.getYoutubeVideoId(formValues.videoUrl)) {
      errors.videoUrl = 'Please enter a valid YouTube URL';
    }

    if(errors.name || errors.videoUrl) {
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
    <form class="grid gap-2 items-end w-full md:grid-cols-7" on:submit|preventDefault={saveExercise}>
      <div class="col-span-2">
        {#if errors.name}
          <Helper color="red" class="mb-2"><span class="font-medium">Oh, snapp!</span> {errors.name}</Helper>
        {/if}
        <FloatingLabelInput  size="small" bind:value={formValues.name} style="outlined" type="text" id="exercise_name" label="Exercise Name" required />
      </div>

      <div class="col-span-2">
        {#if errors.videoUrl}
          <Helper color="red" class="mb-2"><span class="font-medium">Oh, snapp!</span> {errors.videoUrl}</Helper>
        {/if}
        <FloatingLabelInput size="small" bind:value={formValues.videoUrl} style="outlined"type="text" id="video_url" label="Video URL" />
      </div>

      <div class="col-span-2">
        <Select size="md" items={$muscleGroups} bind:value="{formValues.muscleGroup}" required />
      </div>

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