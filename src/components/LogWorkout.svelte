<script>
    import Workout from "./Workout.svelte";
    import Calendar from "./Calendar.svelte";
</script>

<div class="grid grid-cols-3 gap-2">
    <div class="col-span-2">
        add fields for statistics like: calories burned, training time, weight, body fat, and page for profile target goals.
        <Workout logWorkout={true} headingText="Log workout" />
    </div>
    <div>
        <Calendar/>
    </div>
</div>
