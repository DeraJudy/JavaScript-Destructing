const students = [
    {
        id: 1,
        name: 'Alice',
        scores: { math: 85, english: 90, science: 78 },
        address: { city: 'Lagos', state: 'Lagos', country: 'Nigeria' }
    },
    {
        id: 2,
        name: 'Bob',
        scores: { math: 92, english: 81, science: 85 },
        address: { city: 'Abuja', state: 'FCT', country: 'Nigeria' }
    },
    {
        id: 3,
        name: 'Charlie',
        scores: { math: 88, english: 75, science: 92 },
        address: { city: 'Ibadan', state: 'Oyo', country: 'Nigeria' }
    }
];

// Task 1: Extract Student Data
// Destructure the name and scores of each student.
// Destructure the math and english scores from the scores object.
// Destructure the city and country from the address object.
// Task 2: Display Student Information
// Write a function displayStudentInfo that takes a student object and logs the following 
// information:

// Student Name
// Math Score
// English Score
// City
// Country
// Task 3: Bonus Task
// Calculate the average score of all students in math and english and log the result.

// Function to display student information
function displayStudentInfo(student) {
    const { 
        name, 
        scores: { math, english }, 
        address: { city, country } 
    } = student;

    console.log(`Name: ${name}`);
    console.log(`Math Score: ${math}`);
    console.log(`English Score: ${english}`);
    console.log(`City: ${city}`);
    console.log(`Country: ${country}`);
    console.log(''); // Empty line for better readability
}

// Loop through the students array and call displayStudentInfo for each student
students.forEach(displayStudentInfo);

// Bonus Task: Calculate and log the average math and english scores for all students
let totalMathScore = 0;
let totalEnglishScore = 0;
const numberOfStudents = students.length;

students.forEach(({ scores: { math, english } }) => {
    totalMathScore += math;
    totalEnglishScore += english;
});

const averageMathScore = totalMathScore / numberOfStudents;
const averageEnglishScore = totalEnglishScore / numberOfStudents;

console.log(`Average Math Score: ${averageMathScore.toFixed(2)}`);
console.log(`Average English Score: ${averageEnglishScore.toFixed(2)}`);


