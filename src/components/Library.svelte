<script>
  import { muscleGroups, exercises } from '../store/stores.js';
</script>

<div class="bg-white p-6 rounded-lg shadow-md">
    <form class="flex flex-col md:flex-row">
      <input type="text" class="shadow-sm p-2 rounded-lg border border-teal-600 mb-2 md:mb-0 md:mr-2 w-full md:w-1/3" placeholder="Exercise Name">
      <select class="shadow-sm p-2 rounded-lg border border-teal-600 mb-2 md:mb-0 md:mr-2 w-full md:w-1/3">
        <option value="">All Muscle Groups</option>
        {#each $muscleGroups as muscleGroup, index}
          <option value={muscleGroup.id}>{muscleGroup.name}</option>
        {/each}
      </select>
      <input type="text" class="shadow-sm p-2 rounded-lg border border-teal-600 mb-2 md:mb-0 md:mr-2 w-full md:w-1/3" placeholder="Video URL">
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
            {#each $exercises as exercise, index}
              <tr>
                <td class="p-2 border border-teal-600">{exercise.name}</td>
                <td class="p-2 border border-teal-600">{$muscleGroups.find(group => group.id === exercise.muscleGroup).name}</td>
                <td class="p-2 border border-teal-600">{#if 'videoUrl' in exercise} <a href="{exercise.videoUrl}" target="_blank">{exercise.videoUrl}</a> {/if}</td>
              </tr>
            {/each}
            

        </tbody>
    </table>
</div>