import { writable } from "svelte/store";

const muscleGroups = writable([
    {
        value: 1,
        name: "Chest",
    },
    {
        value: 2,
        name: "Back",
    },
    {
        value: 3,
        name: "Shoulders",
    },
    {
        value: 4,
        name: "Biceps",
    },
    {
        value: 5,
        name: "Triceps",
    },
    {
        value: 6,
        name: "Abs",
    },
    {
        value: 7,
        name: "Legs",
    },
    {
        value: 8,
        name: "Calves",
    },
]);

const exercises = writable([
    {
        id: crypto.randomUUID(),
        name: "Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=rT7DgCr-3pg',
        created_at: new Date().toISOString()
        
    },
    {
        id: crypto.randomUUID(),
        name: "Incline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=SrqOu55lrYU',
        created_at: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        name: "Decline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=SrqOu55lrYU',
        created_at: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        name: "Dumbbell Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=VmB1G1K7v94',
        created_at: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        name: "Dumbbell Incline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=8iPEnn-ltC8',
        created_at: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        name: "Dumbbell Decline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=Pf1nDoqx_1A',
        created_at: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        name: "Dumbbell Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=eozdVDA78K0',
        created_at: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        name: "Incline Dumbbell Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=bDaIL_zKbGs',
        created_at: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        name: "Decline Dumbbell Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=ilcbmIoz9S4',
        created_at: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        name: "Cable Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=Iwe6AmxVf7o',
        created_at: new Date().toISOString()
    },
]);


export { muscleGroups, exercises };