<script>
    import { workouts, exercises, muscleGroups } from '../store/stores.js';
    import { Timeline, TimelineItem, Button, Modal } from 'flowbite-svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { get } from "svelte/store";

    let defaultModal = false;
    let modalTitle = '';
    let modalContent = '';
    let currentWorkout = null;

    function showWorkoutDetails(event) {
      defaultModal = true;
      currentWorkout = $workouts.find(workout => workout.id === event.target.dataset.workout);
      modalTitle = currentWorkout.created_at.toLocaleString('en-us',{month:'short', year:'numeric', day:'numeric'}) + ' - ' + currentWorkout.name;
      modalContent = currentWorkout.description;
    }
</script>

<Timeline>
    {#each $workouts as workout}
    <TimelineItem title="{workout.name}" date="{workout.created_at.toLocaleString('en-us',{month:'short', year:'numeric', day:'numeric'})}">
      <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
        {workout.description}
      </p>
      <Button on:click={showWorkoutDetails} data-workout="{workout.id}" size="xs" color="dark">workout details</Button>
    </TimelineItem>
    {/each}
  </Timeline>

  <Modal title="{modalTitle}" bind:open={defaultModal} autoclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      {@html modalContent}
    </p>
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
