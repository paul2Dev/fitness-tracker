<script>
    import Workout from "./Workout.svelte";
    import WorkoutsList from "./WorkoutsList.svelte";
</script>

<div class="grid grid-cols-1 gap-2 md:grid-cols-3">
    <div class="md:col-span-2">
        <Workout logWorkout={false}/>
    </div>
    <div>
        <WorkoutsList />
    </div>
</div>
