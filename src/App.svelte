<script>
  import Workout from './components/Workout.svelte';
  import Calendar from './components/Calendar.svelte';
  import Library from './components/Library.svelte';

  let activeTab = Workout;
</script>

<main>
<button on:click={() => (activeTab = Workout)}>Workout</button>
<button on:click={() => (activeTab = Calendar)}>Calendar</button>
<button on:click={() => (activeTab = Library)}>Library</button>

<svelte:component this={activeTab} />

</main>


