<script>
    import { workouts } from '../store/stores.js';
    import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
</script>

<Timeline>
    {#each $workouts as workout}
    <TimelineItem title="{workout.name}" date="{workout.created_at.toLocaleString('en-us',{month:'short', year:'numeric', day:'numeric'})}">
      <p class="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
        {workout.description}
      </p>
      <Button size="xs" color="dark">workout details</Button>
    </TimelineItem>
    {/each}
  </Timeline>
