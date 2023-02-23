<script>
    import { workouts, exercises, workoutsLog } from '../store/stores.js';
    import { Timeline, TimelineItem, Modal } from 'flowbite-svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { get } from "svelte/store";

    let defaultModal = false;
    let modalTitle = '';
    let currentWorkout = null;

    function showWorkoutDetails(event) {
      defaultModal = true;

      if(event.target.dataset.workoutId != '') {
        currentWorkout = $workouts.find(workout => workout.id === event.target.dataset.workoutId);
      }

      modalTitle = currentWorkout.name;
    }

    function removeWorkoutLog(event) {
      if (confirm("are you sure you want to delete " + event.target.dataset.workoutName + " ?") == true) {
        workouts.update(workouts => workouts.filter(workout => workout.id !== event.target.dataset.workoutId));
        workoutsLog.update(workoutsLog => workoutsLog.filter(workoutLog => workoutLog.workoutId !== event.target.dataset.workoutId));
      }
    }
</script>

<div class="bg-white p-6 rounded-lg shadow-md">
    <Timeline>
      {#each $workouts as workout}
      <TimelineItem title="" date="{workout.name}">
        <svelte:fragment slot="icon">
            <div class="flex items-center">
              <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
        </svelte:fragment>
        <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
          <a href="#" on:click|preventDefault={showWorkoutDetails} 
              data-workout-id="{workout.id}"
              class="text-teal-600 hover:text-teal-800">details</a> -
  
            <a href="#" on:click|preventDefault={removeWorkoutLog} 
                data-workout-id="{workout.id}"
                data-workout-name="{workout.name}" 
                class="text-red-400 hover:text-red-600">delete</a>
        </p>
      </TimelineItem>
      {/each}
    </Timeline>
  
    <Modal title="{modalTitle}" bind:open={defaultModal} placement="top-center" autoclose>
      {#if currentWorkout.exercises.length > 0}
      <Table>
        <TableHead>
          <TableHeadCell>Exercise</TableHeadCell>
          <TableHeadCell>Sets</TableHeadCell>
          <TableHeadCell>Reps</TableHeadCell>
          <TableHeadCell>Start Weight</TableHeadCell>
          <TableHeadCell>End Weight</TableHeadCell>
          <TableHeadCell>Increment Weight By</TableHeadCell>
          <TableHeadCell>Rest Time</TableHeadCell>
          <TableHeadCell>Notes</TableHeadCell>
        </TableHead>
        <TableBody class="divide-y">
          {#each currentWorkout.exercises as currentExercise}
          <TableBodyRow>
            <TableBodyCell>{get(exercises).find((exercise) => exercise.id === currentExercise.exerciseID).name}</TableBodyCell>
            <TableBodyCell>{currentExercise.sets}</TableBodyCell>
            <TableBodyCell>{currentExercise.reps}</TableBodyCell>
            <TableBodyCell>{currentExercise.startWeight}</TableBodyCell>
            <TableBodyCell>{currentExercise.endWeight}</TableBodyCell>
            <TableBodyCell>{currentExercise.incrementBy}</TableBodyCell>
            <TableBodyCell>{currentExercise.restTime}</TableBodyCell>
            <TableBodyCell>{currentExercise.notes}</TableBodyCell>
          </TableBodyRow>
          {/each}
        </TableBody>
      </Table>
      {/if}
    </Modal>
  </div>