<script>
    import Workout from "./Workout.svelte";
    import WorkoutsList from "./WorkoutsList.svelte";
</script>

<div class="grid grid-cols-3 gap-2">
    <div class="col-span-2">
        <Workout logWorkout={false}/>
    </div>
    <div>
        <WorkoutsList />
    </div>
</div>

