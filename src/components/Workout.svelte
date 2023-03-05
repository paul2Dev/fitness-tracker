<script>
    import { exercises, workouts, workoutsLog } from '../store/stores.js';
    import { DateInput } from 'date-picker-svelte'
    import { FloatingLabelInput, Button, Select, Heading } from 'flowbite-svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow } from 'flowbite-svelte';

    export let logWorkout;
    let newWorkout = true;

    export let headingText = 'Create workout';

    function removeNewWorkout() {
        newWorkout = (formValues.workoutId !== '') ? false : true;
    }

    function initFormValues() {
        let values = {};
        if(logWorkout === true) {
            values = {
                id: crypto.randomUUID(),
                name: '',
                description: '',
                created_at: new Date(),
                workoutId: '',
                exercises: [
                    {
                        id: 0,
                        exerciseID: '',
                        sets: '',
                        reps: '',
                        startWeight: '',
                        endWeight: '',
                        incrementBy: '',
                        restTime: '',
                        notes: ''
                    }
                ]
            };
        } else {
            values = {
                id: crypto.randomUUID(),
                name: '',
                created_at: new Date(),
                exercises: [
                    {
                        id: 0,
                        exerciseID: '',
                        sets: '',
                        reps: '',
                        startWeight: '',
                        endWeight: '',
                        incrementBy: '',
                        restTime: '',
                        notes: ''
                    }
                ]
            };
        }
        return values;
    }
    
    let formValues = initFormValues();
    let nextId = 1;

    let selectWorkoutsOptions = $workouts.filter((workout) => workout.value = workout.id);

    $: selectWorkouts = [...selectWorkoutsOptions, {id: '', name: 'New Workout', value: ''}];
    $: selectExercises = $exercises.filter((exercise) => exercise.value = exercise.id);

    function addLine() {
        formValues.exercises = [...formValues.exercises, {
            id: nextId++,
            exerciseID: '',
            sets: '',
            reps: '',
            startWeight: '',
            endWeight: '',
            incrementBy: '',
            restTime: '',
            notes: ''
        }];
    }

    function removeLine(index) {
        formValues.exercises = [...formValues.exercises.slice(0, index), ...formValues.exercises.slice(index + 1)];
    }

    function saveWorkout() {
        if (confirm("Finished workout?") == true) {
            if(logWorkout === true) {
                //push into workoutLog
                workoutsLog.update(workoutsLog => {
                    workoutsLog.push(formValues);
                    return workoutsLog;
                });
                console.log($workoutsLog);
            } else {
                //push into workout
                workouts.update(workouts => {
                    workouts.push(formValues);
                    return workouts;
                });
                console.log($workouts);
            }
            
            formValues = initFormValues();
        } 
    }

</script>
<div class="bg-white p-6 rounded-lg shadow-md">
    <Heading tag="h4" class="mb-4" color="text-gray-700">{headingText}</Heading>
    <form on:submit|preventDefault={saveWorkout}>
        {#if logWorkout === true}  
        <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
                <Select size="md" items={selectWorkouts} bind:value="{formValues.workoutId}" on:change={removeNewWorkout}  placeholder="Select workout" />
            </div>
            <div>
                <FloatingLabelInput  size="small" bind:value={formValues.description} style="outlined" type="text" id="workout_description" label="Description" required />
            </div>
            <div>
                <DateInput bind:value={formValues.created_at} format="dd/MM/yyyy" />
            </div>
        </div>
        {/if}

        {#if newWorkout === true}
        <div>
            <FloatingLabelInput class="mb-6" size="small" bind:value={formValues.name} style="outlined" type="text" id="workout_name" label="Workout Name" required />
        </div>

        <div>
            {#each formValues.exercises as exercise, i}
                <div class="grid gap-6 mb-2 lg:grid-cols-4">
                    <div>
                        <Select size="md" items={selectExercises} bind:value="{exercise.exerciseID}" required />
                    </div>
                    <div>
                        <FloatingLabelInput  size="small" bind:value={exercise.sets} style="outlined" type="text" label="Sets" required />
                    </div>
                    <div>
                        <FloatingLabelInput  size="small" bind:value={exercise.reps} style="outlined" type="text" label="Reps" required />
                    </div>
                    <div>
                        <FloatingLabelInput  size="small" bind:value={exercise.startWeight} style="outlined" type="text" label="Start Weight" required />
                    </div>
                </div>
                <div class="grid gap-6 lg:grid-cols-4">
                    <div>
                        <FloatingLabelInput  size="small" bind:value={exercise.endWeight} style="outlined" type="text" label="End Weight" required />
                    </div>
                    <div>
                        <FloatingLabelInput  size="small" bind:value={exercise.incrementBy} style="outlined" type="text" label="Increment By" required />
                    </div>
                    <div>
                        <FloatingLabelInput  size="small" bind:value={exercise.restTime} style="outlined" type="text" label="Rest Time" required />
                    </div>
                    <div>
                        <FloatingLabelInput  size="small" bind:value={exercise.notes} style="outlined" type="text" label="Notes" />
                    </div>
                </div>
                <div class="text-center my-2">
                    <a href="#" on:click={() => removeLine(i)}
                        class="text-red-400 hover:text-red-600">delete row</a>
                </div>
            {/each}
        </div>
        
        <Button on:click={addLine} size="xs" color="dark">add exercise</Button>
        {/if}
        <Button type="submit" size="xs" color="dark">save workout</Button>
    </form>
</div>