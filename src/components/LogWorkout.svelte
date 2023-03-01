<script>
    import Workout from "./Workout.svelte";
    import Calendar from "./Calendar.svelte";
</script>

<div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
    <div class="lg:col-span-2">
        <Workout logWorkout={true} headingText="Log workout" />
    </div>
    <div>
        <Calendar/>
    </div>
</div>

