<script>
    import { exercises } from '../store/stores.js';
    import { onMount } from 'svelte';
    
    import { FloatingLabelInput, Button, Select } from 'flowbite-svelte';
    import Datepicker from 'flowbite-datepicker/Datepicker';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';


    let datepicker;

    onMount(() => {
        datepicker = new Datepicker(document.getElementById('datepicker'), {
            format: 'dd/mm/yyyy',
        }); 
    });

    let formValues = {
        name: '',
        description: '',
        created_at: '',
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
    let nextId = 1;

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
        console.log(formValues);
    }

</script>

<div class="bg-white p-6 rounded-lg shadow-md">
    <form on:submit|preventDefault={saveWorkout}>
        <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
                <FloatingLabelInput  size="small" bind:value={formValues.name} style="outlined" type="text" id="workout_name" label="Workout Name" required />
            </div>
            <div>
                <FloatingLabelInput  size="small" bind:value={formValues.description} style="outlined" type="text" id="workout_description" label="Workout Description" required />
            </div>
            <div>
                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input bind:value={formValues.created_at}  id="datepicker"  type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
                  </div>
            </div>
        </div>

        <Table>
            <TableBody class="divide-y">
            {#each formValues.exercises as exercise, i}
              <TableBodyRow>
                <TableBodyCell><Select size="md" items={selectExercises} bind:value="{exercise.exerciseID}" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.sets} style="outlined" type="text" label="Sets" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.reps} style="outlined" type="text" label="Reps" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.startWeight} style="outlined" type="text" label="Start Weight" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.endWeight} style="outlined" type="text" label="End Weight" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.incrementBy} style="outlined" type="text" label="Increment By" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.restTime} style="outlined" type="text" label="Rest Time" required /></TableBodyCell>
                <TableBodyCell><FloatingLabelInput  size="small" bind:value={exercise.notes} style="outlined" type="text" label="Notes" required /></TableBodyCell>
                <TableBodyCell><Button color="red" size="xs" on:click={() => removeLine(i)}>delete</Button></TableBodyCell>
              </TableBodyRow>
            {/each}
            </TableBody>
        </Table>

        <Button on:click={addLine}>add exercise</Button>
        <Button type="submit">Submit</Button>
    </form>

    
</div>