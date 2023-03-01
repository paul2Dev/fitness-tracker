<script>
    import { profile, profileLog } from "../store/stores.js";
    import { Timeline, TimelineItem } from "flowbite-svelte";
    import { FloatingLabelInput, Button, Select, Heading } from "flowbite-svelte";
    import { get } from "svelte/store";

    let formValues = {
        id: crypto.randomUUID(),
        age: $profile.age,
        height: $profile.height,
        weight: $profile.weight,
        gender: $profile.gender,
        created_at: new Date()
    };

    let gender = [
        {value:"male", name: "Male"},
        {value:"female", name: "Female"},
    ];

    function removeProfileLog(event) {
      if (confirm("are you sure you want to delete profile log from " + event.target.dataset.profileDate + " ?") == true) {
        profileLog.update(profileLog => profileLog.filter(profile => profile.id !== event.target.dataset.profileId));
      }
    }

    function saveProfile() {
        if (confirm("Update profile?") == true) { 
            profile.set(formValues);
            profileLog.update(profileLog => [...profileLog, formValues]);
        }
    }

</script>

<div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
    <div class="lg:col-span-2">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <Heading tag="h4" class="mb-4" color="text-gray-700">My profile</Heading>
            <form on:submit|preventDefault={saveProfile}>
                <div class="grid md:grid-cols-4 gap-2 mb-4">
                    <div>
                        <Select size="md" items={gender} bind:value="{formValues.gender}"  placeholder="Select gender" />
                    </div>
                    <div>
                        <FloatingLabelInput  size="small" bind:value={formValues.age} style="outlined" type="text" id="profile_age" label="age" required />
                    </div>
                    <div>
                        <FloatingLabelInput  size="small" bind:value={formValues.height} style="outlined" type="text" id="profile_height" label="height(cm)" required />
                    </div>
                    <div>
                        <FloatingLabelInput  size="small" bind:value={formValues.weight} style="outlined" type="text" id="profile_weight" label="weight(kg)" required />
                    </div>
                </div>
                <Button type="submit" size="xs" color="dark">save profile</Button>
            </form>
        </div>
    </div>
    <div>
        <div class="bg-white p-6 rounded-lg shadow-md">
            <Heading tag="h4" class="mb-4" color="text-gray-700">Logs</Heading>
            <Timeline>
                {#each $profileLog.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) as profile}
                <TimelineItem title="" date="Updated profile on {new Date(profile.created_at).toLocaleString('en-us',{month:'short', year:'numeric', day:'numeric'})}">
                  <svelte:fragment slot="icon">
                      <div class="flex items-center">
                        <div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                  </svelte:fragment>
                  <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <b>Height:</b> {profile.height}cm <br />
                    <b>Weight:</b> {profile.weight}kg <br />
                      <a href="#" on:click|preventDefault={removeProfileLog} 
                          data-profile-id="{profile.id}"
                          data-profile-date="{new Date(profile.created_at).toLocaleString('en-us',{month:'short', year:'numeric', day:'numeric'})}" 
                          class="text-red-400 hover:text-red-600">delete</a>
                  </p>
                </TimelineItem>
                {/each}
              </Timeline>
        </div>
    </div>
</div>
