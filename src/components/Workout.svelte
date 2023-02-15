<script>
    import { exercises, workouts } from '../store/stores.js';
    import { DateInput } from 'date-picker-svelte'
    import { FloatingLabelInput, Button, Select, Label } from 'flowbite-svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow } from 'flowbite-svelte';

    function initFormValues() {
        return {
            id: crypto.randomUUID(),
            name: '',
            description: '',
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
    
    let formValues = initFormValues();
    let nextId = 1;

    $: selectWorkouts = $workouts.filter((workout) => workout.value = workout.id);
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
            workouts.update(workouts => {
                workouts.push(formValues);
                return workouts;
            });

            formValues = initFormValues();
        } 
    }

</script>
<div class="bg-white p-6 rounded-lg shadow-md">
    <form on:submit|preventDefault={saveWorkout}>
        <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
                
                <Label>Select an workout
                    <Select size="md" items={selectWorkouts} bind:value="{formValues.id}" required />
                </Label>
            </div>
            <div>
                <FloatingLabelInput  size="small" bind:value={formValues.description} style="outlined" type="text" id="workout_description" label="Description" required />
            </div>
            <div>
                <DateInput bind:value={formValues.created_at} format="dd/MM/yyyy" />
            </div>
        </div>

        <div>
            <FloatingLabelInput  size="small" bind:value={formValues.name} style="outlined" type="text" id="workout_name" label="Workout Name" required />
        </div>
        <Table>
            <TableBody>
            {#each formValues.exercises as exercise, i}
              <TableBodyRow>
                <TableBodyCell><Select size="md" items={selectExercises} bind:value="{exercise.exerciseID}" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.sets} style="outlined" type="text" label="Sets" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.reps} style="outlined" type="text" label="Reps" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.startWeight} style="outlined" type="text" label="Start Weight" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.endWeight} style="outlined" type="text" label="End Weight" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.incrementBy} style="outlined" type="text" label="Increment By" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.restTime} style="outlined" type="text" label="Rest Time" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.notes} style="outlined" type="text" label="Notes" /></TableBodyCell>
                <TableBodyCell><Button color="red" size="xs" on:click={() => removeLine(i)}>delete</Button></TableBodyCell>
              </TableBodyRow>
            {/each}
            </TableBody>
        </Table>

        <Button on:click={addLine} size="xs" color="dark">add exercise</Button>
        <Button type="submit" size="xs" color="dark">save workout</Button>
    </form>

    
</div>