import { writable, get } from "svelte/store";

let defaultMuscleGroup =  [
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
];

defaultMuscleGroup = JSON.parse(localStorage.getItem("muscleGroups")) || defaultMuscleGroup;

const muscleGroups = writable(defaultMuscleGroup);

let defaultExercises = [
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
];

defaultExercises = JSON.parse(localStorage.getItem("exercises")) || defaultExercises;

const exercises = writable(defaultExercises);

exercises.subscribe((value) =>
    localStorage.setItem('exercises', JSON.stringify(value))
);

let defaultWorkouts = [
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
];

defaultWorkouts = JSON.parse(localStorage.getItem("workouts")) || defaultWorkouts;

const workouts = writable(defaultWorkouts);

workouts.subscribe((value) =>
    localStorage.setItem('workouts', JSON.stringify(value))
);

let defaultWorkoutsLog = [
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
    {
        id: crypto.randomUUID(),
        description: "Chest Day with some extra stuff on day 3",
        created_at: new Date(),
        workoutId: '',
        name: "Chest Day 3",
        exercises: [
            {
                exerciseID: get(exercises).find((exercise) => exercise.name === "Bench Press").id,
                sets: 5,
                reps: 15,
                startWeight: 50,
                endWeight: 100,
                incrementBy: 10,
                notes: "I felt really good on day 3",
                restTime: 2,
            },
            {
                exerciseID: get(exercises).find((exercise) => exercise.name === "Incline Bench Press").id,
                sets: 6,
                reps: 12,
                startWeight: 50,
                endWeight: 100,
                incrementBy: 10,
                notes: "I felt really good on day 3",
                restTime: 2,
            },
        ],
    },
];

defaultWorkoutsLog = JSON.parse(localStorage.getItem("workoutsLog")) || defaultWorkoutsLog;

const workoutsLog = writable(defaultWorkoutsLog);

workoutsLog.subscribe((value) =>
    localStorage.setItem('workoutsLog', JSON.stringify(value))
);

let defaultProfile = {
        id: crypto.randomUUID(),
        age: 37,
        height: 180,
        weight: 76,
        gender: 'male',
        created_at: new Date(),
    };

defaultProfile = JSON.parse(localStorage.getItem("profile")) || defaultProfile;

const profile = writable(defaultProfile);

profile.subscribe((value) =>
    localStorage.setItem('profile', JSON.stringify(value))
);

let defaultProfileLog = [
    {
        id: crypto.randomUUID(),
        age: 37,
        height: 180,
        weight: 76,
        gender: 'male',
        created_at: new Date(),
    },
];

defaultProfileLog = JSON.parse(localStorage.getItem("profileLog")) || defaultProfileLog;

const profileLog = writable(defaultProfileLog);

profileLog.subscribe((value) =>
    localStorage.setItem('profileLog', JSON.stringify(value))
);

export { muscleGroups, exercises, workouts, workoutsLog, profile, profileLog};