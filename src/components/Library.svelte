<script>
  import { Modal } from 'flowbite-svelte'
  import Utils from '../lib/utils.js';
  import { muscleGroups, exercises } from '../store/stores.js';

  let defaultModal = false;
  let modalTitle = 'Video';
  let modalContent = '';

  const formValues = {
    name: '',
    muscleGroup: '',
    videoUrl: ''
  };

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
    <form class="flex flex-col md:flex-row" on:submit|preventDefault={saveExercise}>
      <input bind:value={formValues.name} type="text" class="shadow-sm p-2 rounded-lg border border-teal-600 mb-2 md:mb-0 md:mr-2 w-full md:w-1/3" placeholder="Exercise Name">
      <select bind:value="{formValues.muscleGroup}" class="shadow-sm p-2 rounded-lg border border-teal-600 mb-2 md:mb-0 md:mr-2 w-full md:w-1/3">
        <option value="">All Muscle Groups</option>
        {#each $muscleGroups as muscleGroup, index}
          <option value={muscleGroup.id}>{muscleGroup.name}</option>
        {/each}
      </select>
      <input bind:value="{formValues.videoUrl}" type="text" class="shadow-sm p-2 rounded-lg border border-teal-600 mb-2 md:mb-0 md:mr-2 w-full md:w-1/3" placeholder="Video URL">
      <button class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        submit
      </button>
    </form>
    <table class="mt-6 w-full">
      <thead>
        <tr>
            <th class="p-2 border border-teal-600 bg-orange-100 text-left text-teal-600">Exercise Name</th>
            <th class="p-2 border border-teal-600 bg-orange-100 text-left text-teal-600">Target Muscle Group</th>  
            <th class="p-2 border border-teal-600 bg-orange-100 text-left text-teal-600">Video URL</th>
        </tr>
      </thead>
        <tbody>
            {#each $exercises.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()) as exercise, index}
              <tr>
                <td class="p-2 border border-teal-600">{exercise.name}</td>
                <td class="p-2 border border-teal-600">{$muscleGroups.find(group => group.id === exercise.muscleGroup).name}</td>
                <td class="p-2 border border-teal-600">{#if 'videoUrl' in exercise} <a on:click|preventDefault={showVideo} title="{exercise.name}" href="{exercise.videoUrl}" target="_blank" rel="noreferrer">{exercise.videoUrl}</a> {/if}</td>
              </tr>
            {/each}
        </tbody>
    </table>
</div>

<Modal title="{modalTitle}" bind:open={defaultModal} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    {@html modalContent}
  </p>
</Modal>