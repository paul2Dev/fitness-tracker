<script>
    import Workout from "./Workout.svelte";
    import Calendar from "./Calendar.svelte";
</script>

<div class="grid grid-cols-3 gap-2">
    <div class="col-span-2">
        <Workout logWorkout={true} />
    </div>
    <div>
        <Calendar/>
    </div>
</div>
