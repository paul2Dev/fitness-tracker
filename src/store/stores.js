import { writable } from "svelte/store";

const muscleGroups = writable([
    {
        id: 1,
        name: "Chest",
    },
    {
        id: 2,
        name: "Back",
    },
    {
        id: 3,
        name: "Shoulders",
    },
    {
        id: 4,
        name: "Biceps",
    },
    {
        id: 5,
        name: "Triceps",
    },
    {
        id: 6,
        name: "Abs",
    },
    {
        id: 7,
        name: "Legs",
    },
    {
        id: 8,
        name: "Calves",
    },
]);

const exercises = writable([
    {
        id: 1,
        name: "Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=rT7DgCr-3pg'
    },
    {
        id: 2,
        name: "Incline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=SrqOu55lrYU'
    },
    {
        id: 3,
        name: "Decline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=SrqOu55lrYU'
    },
    {
        id: 4,
        name: "Dumbbell Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=VmB1G1K7v94'
    },
    {
        id: 5,
        name: "Dumbbell Incline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=8iPEnn-ltC8'
    },
    {
        id: 6,
        name: "Dumbbell Decline Bench Press",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=Pf1nDoqx_1A'
    },
    {
        id: 7,
        name: "Dumbbell Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=eozdVDA78K0'
    },
    {
        id: 8,
        name: "Incline Dumbbell Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=bDaIL_zKbGs'
    },
    {
        id: 9,
        name: "Decline Dumbbell Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=ilcbmIoz9S4'
    },
    {
        id: 10,
        name: "Cable Fly",
        muscleGroup: 1,
        videoUrl: 'https://www.youtube.com/watch?v=Iwe6AmxVf7o'
    },
    {
        id: 11,
        name: "Incline Cable Fly",
        muscleGroup: 1,
    },
    {
        id: 12,
        name: "Decline Cable Fly",
        muscleGroup: 1,
    },
    {
        id: 13,
        name: "Push Up",
        muscleGroup: 1,
    },
    {
        id: 14,
        name: "Incline Push Up",
        muscleGroup: 1,
    },
    {
        id: 15,
        name: "Decline Push Up",
        muscleGroup: 1,
    },
    {
        id: 16,
        name: "Pull Up",
        muscleGroup: 2,
    },
    {
        id: 17,
        name: "Wide Grip Pull Up",
        muscleGroup: 2,
    },
    {
        id: 18,
        name: "Close Grip Pull Up",
        muscleGroup: 2,
    },
    {
        id: 19,
        name: "Chin Up",
        muscleGroup: 2,
    },
    {
        id: 20,
        name: "Wide Grip Chin Up",
        muscleGroup: 2,
    },
    {
        id: 21,
        name: "Close Grip Chin Up",
        muscleGroup: 2,
    },
    {
        id: 22,
        name: "Lat Pulldown",
        muscleGroup: 2,
    },
    {
        id: 23,
        name: "Wide Grip Lat Pulldown",
        muscleGroup: 2,
    },
    {
        id: 24,
        name: "Close Grip Lat Pulldown",
        muscleGroup: 2,
    },
    {
        id: 25,
        name: "Seated Row",
        muscleGroup: 2,
    },
    {
        id: 26,
        name: "Wide Grip Seated Row",
        muscleGroup: 2,
    },
    {
        id: 27,
        name: "Close Grip Seated Row",
        muscleGroup: 2,
    },
    {
        id: 28,
        name: "Bent Over Row",
        muscleGroup: 2,
    },
    {
        id: 29,
        name: "Wide Grip Bent Over Row",
        muscleGroup: 2,
    },
    {
        id: 30,
        name: "Close Grip Bent Over Row",
        muscleGroup: 2,
    },
    {
        id: 31,
        name: "Dumbbell Row",
        muscleGroup: 2,
    },
    {
        id: 32,
        name: "Wide Grip Dumbbell Row",
        muscleGroup: 2,
    },
    {
        id: 33,
        name: "Close Grip Dumbbell Row",
        muscleGroup: 2,
    },
    {
        id: 34,
        name: "Cable Row",
        muscleGroup: 2,
    },
    {
        id: 35,
        name: "Wide Grip Cable Row",
        muscleGroup: 2,
    },
    {
        id: 36,
        name: "Close Grip Cable Row",
        muscleGroup: 2,
    },
    {
        id: 37,
        name: "Barbell Shrug",
        muscleGroup: 2,
    },
    {
        id: 38,
        name: "Dumbbell Shrug",
        muscleGroup: 2,
    },
    {
        id: 39,
        name: "Cable Shrug",
        muscleGroup: 2,
    },
    {
        id: 40,
        name: "Barbell Shoulder Press",
        muscleGroup: 3,
    },
    {
        id: 41,
        name: "Dumbbell Shoulder Press",
        muscleGroup: 3,
    },
    {
        id: 42,
        name: "Cable Shoulder Press",
        muscleGroup: 3,
    },
    {
        id: 43,
        name: "Barbell Front Raise",
        muscleGroup: 3,
    },
    {
        id: 44,
        name: "Dumbbell Front Raise",
        muscleGroup: 3,
    },
    {
        id: 45,
        name: "Cable Front Raise",
        muscleGroup: 3,
    },
    {
        id: 46,
        name: "Barbell Lateral Raise",
        muscleGroup: 3,
    },
    {
        id: 47,
        name: "Dumbbell Lateral Raise",
        muscleGroup: 3,
    },
    {
        id: 48,
        name: "Cable Lateral Raise",
        muscleGroup: 3,
    },
    {
        id: 49,
        name: "Barbell Rear Delt Raise",
        muscleGroup: 3,
    },
    {
        id: 50,
        name: "Dumbbell Rear Delt Raise",
        muscleGroup: 3,
    },
    {
        id: 51,
        name: "Cable Rear Delt Raise",
        muscleGroup: 3,
    },
    {
        id: 52,
        name: "Barbell Upright Row",
        muscleGroup: 3,
    },
    {
        id: 53,
        name: "Dumbbell Upright Row",
        muscleGroup: 3,
    },
    {
        id: 54,
        name: "Cable Upright Row",
        muscleGroup: 3,
    },
    {
        id: 55,
        name: "Barbell Curl",
        muscleGroup: 4,
    },
    {
        id: 56,
        name: "Dumbbell Curl",
        muscleGroup: 4,
    },
    {
        id: 57,
        name: "Cable Curl",
        muscleGroup: 4,
    },
    {
        id: 58,
        name: "Barbell Hammer Curl",
        muscleGroup: 4,
    },
    {
        id: 59,
        name: "Dumbbell Hammer Curl",
        muscleGroup: 4,
    },
    {
        id: 60,
        name: "Cable Hammer Curl",
        muscleGroup: 4,
    },
    {
        id: 61,
        name: "Barbell Preacher Curl",
        muscleGroup: 4,
    },
    {
        id: 62,
        name: "Dumbbell Preacher Curl",
        muscleGroup: 4,
    },
    {
        id: 63,
        name: "Cable Preacher Curl",
        muscleGroup: 4,
    },
    {
        id: 64,
        name: "Barbell Tricep Extension",
        muscleGroup: 5,
    },
    {
        id: 65,
        name: "Dumbbell Tricep Extension",
        muscleGroup: 5,
    },
    {
        id: 66,
        name: "Cable Tricep Extension",
        muscleGroup: 5,
    },
    {
        id: 67,
        name: "Barbell Skull Crusher",
        muscleGroup: 5,
    },
    {
        id: 68,
        name: "Dumbbell Skull Crusher",
        muscleGroup: 5,
    },
    {
        id: 69,
        name: "Cable Skull Crusher",
        muscleGroup: 5,
    },
    {
        id: 70,
        name: "Barbell Overhead Tricep Extension",
        muscleGroup: 5,
    },
    {
        id: 71,
        name: "Dumbbell Overhead Tricep Extension",
        muscleGroup: 5,
    },
    {
        id: 72,
        name: "Cable Overhead Tricep Extension",
        muscleGroup: 5,
    },
    {
        id: 73,
        name: "Ab Crunch Machine",
        muscleGroup: 6,
    },
    {
        id: 74,
        name: "Abs Rollout",
        muscleGroup: 6,
    },
    {
        id: 75,
        name: "Abs Rollout with Weight",
        muscleGroup: 6,
    },
    {
        id: 76,
        name: "Abs Rollout with Weight and Resistance Bands",
        muscleGroup: 6,
    },
    {
        id: 77,
        name: "Abs Rollout with Resistance Bands",
        muscleGroup: 6,
    },
    {
        id: 78,
        name: "Barbell Squat",
        muscleGroup: 7,
    },
    {
        id: 79,
        name: "Dumbbell Squat",
        muscleGroup: 7,
    },
    {
        id: 80,
        name: "Cable Squat",
        muscleGroup: 7,
    },
    {
        id: 81,
        name: "Barbell Front Squat",
        muscleGroup: 7,
    },
    {
        id: 82,
        name: "Dumbbell Front Squat",
        muscleGroup: 7,
    },
    {
        id: 83,
        name: "Cable Front Squat",
        muscleGroup: 7,
    },
    {
        id: 84,
        name: "Barbell Lunge",
        muscleGroup: 7,
    },
    {
        id: 85,
        name: "Dumbbell Lunge",
        muscleGroup: 7,
    },
    {
        id: 86,
        name: "Cable Lunge",
        muscleGroup: 7,
    },
    {
        id: 87,
        name: "Barbell Deadlift",
        muscleGroup: 7,
    },
    {
        id: 88,
        name: "Dumbbell Deadlift",
        muscleGroup: 7,
    },
    {
        id: 89,
        name: "Cable Deadlift",
        muscleGroup: 7,
    },
    {
        id: 90,
        name: "Barbell Romanian Deadlift",
        muscleGroup: 7,
    },
    {
        id: 91,
        name: "Dumbbell Romanian Deadlift",
        muscleGroup: 7,
    },
    {
        id: 92,
        name: "Cable Romanian Deadlift",
        muscleGroup: 7,
    },
    {
        id: 93,
        name: "Barbell Hip Thrust",
        muscleGroup: 7,
    },
    {
        id: 94,
        name: "Dumbbell Hip Thrust",
        muscleGroup: 7,
    },
    {
        id: 95,
        name: "Cable Hip Thrust",
        muscleGroup: 7,
    },
    {
        id: 96,
        name: "Barbell Calf Raise",
        muscleGroup: 8,
    },
    {
        id: 97,
        name: "Dumbbell Calf Raise",
        muscleGroup: 8,
    },
    {
        id: 98,
        name: "Cable Calf Raise",
        muscleGroup: 8,
    },
    {
        id: 99,
        name: "Barbell Donkey Calf Raise",
        muscleGroup: 8,
    },
    {
        id: 100,
        name: "Dumbbell Donkey Calf Raise",
        muscleGroup: 8,
    },
    {
        id: 101,
        name: "Cable Donkey Calf Raise",
        muscleGroup: 8,
    },
    {
        id: 102,
        name: "Barbell Standing Calf Raise",
        muscleGroup: 8,
    },
    {
        id: 103,
        name: "Dumbbell Standing Calf Raise",
        muscleGroup: 8,
    },
    {
        id: 104,
        name: "Cable Standing Calf Raise",
        muscleGroup: 8,
    },  
]);


export { muscleGroups, exercises };