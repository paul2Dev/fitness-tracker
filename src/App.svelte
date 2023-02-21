<script>
  import Library from './components/Library.svelte';
  import CreateWorkout from './components/CreateWorkout.svelte';  
  import LogWorkout from './components/LogWorkout.svelte';

  let activeTab = CreateWorkout;
</script>

<main>
  <nav class="container mx-auto flex items-center justify-center bg-teal-600 p-6">
    <a href="#" on:click={() => (activeTab = CreateWorkout)} class="text-white font-medium hover:text-orange-200 {activeTab === CreateWorkout ? 'text-orange-200' : ''} ">Create Workout</a>
    <a href="#" on:click={() => (activeTab = LogWorkout)} class="ml-6 text-white font-medium hover:text-orange-200 {activeTab === LogWorkout ? 'text-orange-200' : ''} ">Log Workout</a>
    <a href="#" on:click={() => (activeTab = Library)} class="ml-6 text-white font-medium hover:text-orange-200 {activeTab === Library ? 'text-orange-200' : ''}">Library</a>
  </nav>

  <div class="container mx-auto flex justify-center py-10 bg-orange-100">
    <div class="w-full p-6"><svelte:component this={activeTab} /></div>
  </div>
  
</main>


