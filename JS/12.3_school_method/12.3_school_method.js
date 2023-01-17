const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};

const findPerson = (personType, id) => {
    return school[personType].find((person) => person.id === id);
};

const assignStudent = (id, subject) => {
    const teacher = school.teachers.find(
        (teacher) =>
            teacher.capacityLeft > 0 &&
            teacher.subjects.some((subj) => subj === subject)
    );
    if (!teacher) {
        console.log(`Sorry, no available teachers for ${subject} left`);
        return;
    }
    const student = findPerson("students", id);
    if (!student) {
        console.log("Sorry, a student not found");
        return;
    }
    if (teacher.students.includes(student.id)) {
        console.log(
            `Student id ${student.id} is already assigned to teacher ${teacher.id} for subject ${subject}`
        );
        return;
    }
    teacher.students.push(id);
    teacher.capacityLeft = teacher.capacityLeft - 1;
    console.log(
        `Student id ${student.id} added to teacher ${teacher.id} for subject ${subject}`
    );
};
assignStudent(11, "biology");
assignStudent(11, "biology");
assignStudent(13, "front-end development");
assignStudent(14, "biology");

const assignTeachersSubject = (id, subject) => {
    const teacher = findPerson("teachers", id);
    if (!teacher) {
        console.log("Sorry, a teacher not found");
        return;
    }
    if (teacher.subjects.includes(subject)) {
        console.log(
            `Teacher id ${id} is already assigned for subject ${subject}`
        );
        return;
    }
    teacher.subjects.push(subject);
    console.log(`Teacher id ${id} assigned for subject ${subject}`);
};
assignTeachersSubject(2, "front-end development");
assignStudent(13, "front-end development");
assignStudent(13, "front-end development");
assignStudent(11, "front-end development");
assignStudent(10, "front-end development");

console.log(school.teachers);
