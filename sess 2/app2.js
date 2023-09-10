// --BAI 2--

let student = [
{

    name: "NVA",
    age: 16,
    course: ["mindx 01", "mindx 02", "mindx 03"]
},

{

    name: "NVB",
    age: 18,
    course: ["mindx 01", "mindx 02", "mindx 04"]
},

{

    name: "NVC",
    age: 17,
    course: ["mindx 01", "mindx 03", "mindx 04"]
},

{

    name: "NVD",
    age: 15,
    course: ["mindx 01", "mindx 02", "mindx 03"]
},
]

let input = prompt("Age? (NUMBERS ONLY)")
if (input =="16") {
    console.log(student[1])
} else if (input == "17") {
    console.log(student[2])
} else if (input == "18") {
    console.log(student[3])
} else if (input == "15") {
    console.log(student[4])
} else {
    alert("Invalid, please try again") 
};


function findStudentsByCourse(courseCode) {
    let foundStudents = [];

    for (let i = 0; i < student.length; i++) {
        if (student[i].course.includes(courseCode)) {
            foundStudents.push(student[i].name);
        }
    }

    return foundStudents;
}

let courseCode = prompt('Mindx class (EX: mindx 01, mindx 02)   ');
let matchingStudents = findStudentsByCourse(courseCode.toLowerCase());

if (matchingStudents.length > 0) {
    for (let i = 0; i < matchingStudents.length; i++) {
        console.log(matchingStudents[i]);
    }
} else {
    console.log("Invalid");
}



// --BAI 2--