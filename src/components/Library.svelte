<script>
  import Utils from '../lib/utils.js';
  import { Modal, FloatingLabelInput, Select, Button, Helper, Heading } from 'flowbite-svelte'
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
        created_at: new Date()
      });
      return exercises;
    });

    formValues.name = '';
    formValues.muscleGroup = '';
    formValues.videoUrl = '';
  };

  function showVideo(event) {
    event.preventDefault();
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

  function deleteExercise(event) {
    event.preventDefault();
    if (confirm("are you sure you want to delete " + event.target.dataset.exerciseName+ " exercise ?") == true) {
      exercises.update(exercises => {
        return exercises.filter(exercise => exercise.id !== event.target.dataset.id);
      });
    }
  }
</script>

<div class="bg-white p-6 rounded-lg shadow-md">
    <Heading tag="h4" class="mb-4" color="text-gray-700">Exercises library</Heading>
    <form on:submit|preventDefault={saveExercise}>
      <div class="grid gap-2 md:grid-cols-3 mb-4">
        <div>
          {#if errors.name}
            <Helper color="red" class="mb-2"><span class="font-medium">Oh, snapp!</span> {errors.name}</Helper>
          {/if}
          <FloatingLabelInput  size="small" bind:value={formValues.name} style="outlined" type="text" id="exercise_name" label="Exercise Name" required />
        </div>

        <div>
          {#if errors.videoUrl}
            <Helper color="red" class="mb-2"><span class="font-medium">Oh, snapp!</span> {errors.videoUrl}</Helper>
          {/if}
          <FloatingLabelInput size="small" bind:value={formValues.videoUrl} style="outlined"type="text" id="video_url" label="Youtube video url" />
        </div>

        <div>
          <Select size="md" items={$muscleGroups} bind:value="{formValues.muscleGroup}" required />
        </div>
      </div>
      <Button size="xs" color="dark" type="submit">save exercise</Button>
    </form>

    <TableSearch  placeholder="Search by exercise name" hoverable={true} bind:inputValue={searchTerm}>
      <TableHead>
        <TableHeadCell>Exercise Name</TableHeadCell>
        <TableHeadCell>Target Muscle Group</TableHeadCell>
        <TableHeadCell>Video URL</TableHeadCell>
        <TableHeadCell>Actions</TableHeadCell>
      </TableHead>
      <TableBody class="divide-y">
        {#each filteredExercises.sort((a, b) => b.created_at - a.created_at) as exercise}
          <TableBodyRow>
            <TableBodyCell>{exercise.name}</TableBodyCell>
            <TableBodyCell>{$muscleGroups.find(group => group.value === exercise.muscleGroup).name}</TableBodyCell>
            <TableBodyCell>{#if 'videoUrl' in exercise} <a on:click={showVideo} title="{exercise.name}" href="{exercise.videoUrl}" target="_blank" rel="noreferrer">{exercise.videoUrl}</a> {/if}</TableBodyCell>
            <TableBodyCell>
              {#if 'videoUrl' in exercise}
              <a href="{exercise.videoUrl}" on:click={showVideo} 
              class="text-teal-600 hover:text-teal-800">view</a> -
              {/if}
  
              <a href="{exercise.videoUrl}" on:click={deleteExercise}
                data-id="{exercise.id}" 
                data-exercise-name={exercise.name}
                class="text-red-400 hover:text-red-600">delete</a>

            </TableBodyCell>
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