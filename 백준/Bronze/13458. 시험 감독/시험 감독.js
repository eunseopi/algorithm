const fs = require("fs");
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const testPlace = Number(input[0]);
const students = input[1].split(" ").map(Number);
const [b, c] = input[2].split(" ").map(Number);

let totalSupervisor = 0;

for (let i = 0; i < testPlace; i++) {
    totalSupervisor += 1;

    if (students[i] > b) {
        const remainingStudents = students[i] - b;
        const depSupervisor = Math.ceil(remainingStudents / c);
        totalSupervisor += depSupervisor;
    }
}

console.log(totalSupervisor);
