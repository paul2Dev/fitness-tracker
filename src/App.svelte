<script>
  import Workout from './components/Workout.svelte';
  import Calendar from './components/Calendar.svelte';
  import Library from './components/Library.svelte';

  let activeTab = Workout;
</script>

<main>
  <nav class="container mx-auto flex items-center justify-center bg-teal-600 p-6">
    <a href="#" on:click={() => (activeTab = Workout)} class="text-white font-medium hover:text-orange-200 {activeTab === Workout ? 'text-orange-200' : ''} ">Workout</a>
    <a href="#" on:click={() => (activeTab = Calendar)} class="ml-6 text-white font-medium hover:text-orange-200 {activeTab === Calendar ? 'text-orange-200' : ''}">Calendar</a>
    <a href="#" on:click={() => (activeTab = Library)} class="ml-6 text-white font-medium hover:text-orange-200 {activeTab === Library ? 'text-orange-200' : ''}">Library</a>
  </nav>

  <div class="container mx-auto h-screen flex justify-center py-10 bg-orange-100">
    <div class="w-full p-6"><svelte:component this={activeTab} /></div>
    
  </div>
  
</main>


