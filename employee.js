const employees = [
    {
        id: 1,
        name: 'John Doe',
        position: 'Software Engineer',
        salary: 90000,
        department: 'Engineering'
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Project Manager',
        salary: 105000,
        department: 'Management'
    },
    {
        id: 3,
        name: 'Emily Johnson',
        position: 'UX Designer',
        salary: 75000,
        department: 'Design'
    },
    {
        id: 4,
        name: 'Michael Brown',
        position: 'DevOps Engineer',
        salary: 95000,
        department: 'Engineering'
    }
];


function displayEmployeeInfo(employee) {
    const {
        name,
        position,
        salary,
        department
    } = employee;

    const [firstName, LastName] = name.split(' ');

    console.log(`First Name : ${firstName}`);
    console.log(`Last Name : ${LastName}`);
    console.log(`Job Position : ${position}`);
    console.log(`Salary : $${salary}`);
    console.log(`Department : ${department}`);
    console.log('');
}

employees.forEach(displayEmployeeInfo);

const totalPayroll= employees.reduce((sum, { salary }) => sum + salary, 0);
const averageSalary = totalPayroll/ employees.length;

console.log(`Total Salary: $${totalPayroll}`);
console.log(`Average Salary: $${averageSalary.toFixed(2)}`);

// Bonus Task 2: Find the highest-paid employee
const highestPaidEmployee = employees.reduce((highest, employee) => 
    (employee.salary > highest.salary ? employee : highest), employees[0]);

console.log(`Highest Paid Employee: ${highestPaidEmployee.name} with a salary of $${highestPaidEmployee.salary}`);