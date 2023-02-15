import { writable, get } from "svelte/store";

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
        created_at: new Date()
        
    },
    {
        id: crypto.randomUUID(),
        name: "Incline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=SrqOu55lrYU',
        created_at: new Date()
    },
    {
        id: crypto.randomUUID(),
        name: "Decline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=SrqOu55lrYU',
        created_at: new Date()
    },
    {
        id: crypto.randomUUID(),
        name: "Dumbbell Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=VmB1G1K7v94',
        created_at: new Date()
    },
    {
        id: crypto.randomUUID(),
        name: "Dumbbell Incline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=8iPEnn-ltC8',
        created_at: new Date()
    },
    {
        id: crypto.randomUUID(),
        name: "Dumbbell Decline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=Pf1nDoqx_1A',
        created_at: new Date()
    },
    {
        id: crypto.randomUUID(),
        name: "Dumbbell Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=eozdVDA78K0',
        created_at: new Date()
    },
    {
        id: crypto.randomUUID(),
        name: "Incline Dumbbell Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=bDaIL_zKbGs',
        created_at: new Date()
    },
    {
        id: crypto.randomUUID(),
        name: "Decline Dumbbell Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=ilcbmIoz9S4',
        created_at: new Date()
    },
    {
        id: crypto.randomUUID(),
        name: "Cable Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=Iwe6AmxVf7o',
        created_at: new Date()
    },
]);

const workouts = writable([
    {
        id: crypto.randomUUID(),
        name: "Chest Day",
        exercises: [
            {
                exerciseID: get(exercises).find((exercise) => exercise.name === "Bench Press").id,
                sets: 4,
                reps: 15,
                startWeight: 50,
                endWeight: 70,
                incrementBy: 5,
                restTime: 2,
                notes: "high reps today",
            },
            {
                exerciseID: get(exercises).find((exercise) => exercise.name === "Incline Bench Press").id,
                sets: 4,
                reps: 15,
                startWeight: 50,
                endWeight: 70,
                incrementBy: 5,
                restTime: 2,
                notes: "high reps today",
            },
        ],
    },

    {
        id: crypto.randomUUID(),
        name: "Chest Day 2",
        exercises: [
            {
                exerciseID: get(exercises).find((exercise) => exercise.name === "Bench Press").id,
                sets: 3,
                reps: 10,
                startWeight: 50,
                endWeight: 100,
                incrementBy: 10,
                notes: "I felt really good today",
                restTime: 2,
            },
            {
                exerciseID: get(exercises).find((exercise) => exercise.name === "Incline Bench Press").id,
                sets: 3,
                reps: 10,
                startWeight: 50,
                endWeight: 100,
                incrementBy: 10,
                notes: "I felt really good today",
                restTime: 2,
            },
        ],
    },
]);

const workoutsLog = writable([
    {
        id: crypto.randomUUID(),
        description: "Chest Day with some extra stuff",
        created_at: new Date(),
        workoutId: get(workouts).find((workout) => workout.name === "Chest Day").id,
    },
    {
        id: crypto.randomUUID(),
        description: "Chest Day with some extra stuff on day 2",
        created_at: new Date(),
        workoutId: get(workouts).find((workout) => workout.name === "Chest Day 2").id,
    },
]);


export { muscleGroups, exercises, workouts, workoutsLog};