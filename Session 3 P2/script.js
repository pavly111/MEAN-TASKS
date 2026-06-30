
// 🔹 Step 1: Create a Base Class for All School Members
// Define a general class named Person.

// 👤 This class should contain:
// Common properties: name, email, ID
// A method that each school role will customize later
// Use private fields for email and ID
// Provide getters and setters with validation logic for these private fields


class Person {
  #email;
  #id;

  constructor(name, email, id) {
    this.name = name;
    this.setEmail(email);
    this.setId(id);
  }

  getEmail() {
    return this.#email;
  }

  setEmail(email) {
    if (typeof email === 'string' && email.includes('@')) {
      this.#email = email;
    } else {
      throw new Error('Invalid email format');
    }
  }

  getId() {
    return this.#id;
  }

  setId(id) {
    if (typeof id === 'string' && id.trim() !== '') {
      this.#id = id;
    } else {
      throw new Error('ID must be a non-empty string');
    }
  }

  roleDescription() {
    return 'This is a general person.';
  }
}

// 🔹 Step 2: Create the Principal Role
// This class should inherit from the Person class.

// 🧑‍🏫 Principal Responsibilities:
// Can add new members (Teachers or Students)
// Can remove members
// Can list all school members
// Overrides the shared method to describe principal-specific behavior


class Principal extends Person {
  constructor(name, email, id) {
    super(name, email, id);
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
  }

  removeMember(member) {
    const index = this.members.indexOf(member);
    if (index > -1) {
      this.members.splice(index, 1);
    } else {
      console.log('Member not found');
    }   
  } 

  listMembers() {
    console.log('===============Members============');
    this.members.forEach(member => {
      console.log(`ID: ${member.id}`);
      console.log(`Name: ${member.name}`);
      console.log(`Email: ${member.email}`);
      console.log(`Role: ${member.roleDescription()}`);
      console.log('-----------------------------------');
    });
  } 
  roleDescription() {
    return 'This is the principal of the school.';
  }
}

// 🔹 Step 3: Create the Teacher Role
// This class should also inherit from the Person class.

// 📘 Teacher Responsibilities:
// Has a subject they teach
// Can grade students (store student name and grade)
// Can list all graded students
// Overrides the shared method to describe teacher behavior


class Teacher extends Person {
  constructor(name, email, id, subject) {
    super(name, email, id);
    this.subject = subject;
  }

  gradeStudent(studentName, grade) {
    if (!this.gradedStudents) {
      this.gradedStudents = [];
    }
    this.gradedStudents.push({ studentName, grade });   
  } 

  listGradedStudents() {
    console.log('===============Graded Students============');
    this.gradedStudents.forEach(student => {
      console.log(`Name: ${student.studentName}`);
      console.log(`Grade: ${student.grade}`);
      console.log('-----------------------------------');
    });
  } 
  roleDescription() {
    return 'This is a teacher.';
  }
}


// 🔹 Step 4: Create the Student Role
// This class should inherit from the Person class.

// 🧑‍🎓 Student Responsibilities:
// Can enroll in a subject
// Can view all enrolled subjects
// Overrides the shared method to describe student activity


class Student extends Person {
  constructor(name, email, id) {
    super(name, email, id);
    this.enrolledSubjects = [];
  }

  enrollSubject(subject) {
    this.enrolledSubjects.push(subject);    
  } 

  listEnrolledSubjects() {
    console.log('===============Enrolled Subjects============');
    this.enrolledSubjects.forEach(subject => {
      console.log(`Subject: ${subject}`);
      console.log('-----------------------------------');
    });
  } 
  roleDescription() {
    return 'This is a student.';
  }
}



// 🔹 Step 5: Create and Use Objects
// 🎯 Actions to Simulate:
// Create instances of Principal, Teacher, and Student
// Principal adds members (Teachers, Students)
// Teacher grades a student
// Student enrolls in subjects
// Store all members in an array and loop through them to call a shared method like describeRole()


const principal = new Principal('John Doe', 'john.doe@school.com', 'PRINC001');
const teacher = new Teacher('Jane Smith', 'jane.smith@school.com', 'TEACH001', 'Math');
const student = new Student('Alice Johnson', 'alice.johnson@school.com', 'STUD001');
const student2 = new Student('Bob Brown', 'bob.brown@school.com', 'STUD002');
const student3 = new Student('Charlie Davis', 'charlie.davis@school.com', 'STUD003');
const student4 = new Student('Diana Evans', 'diana.evans@school.com', 'STUD004');
const teacher2 = new Teacher('Emily White', 'emily.white@school.com', 'TEACH002', 'Science');

principal.addMember(teacher);
principal.addMember(student);
principal.addMember(student2);
principal.addMember(student3);
principal.addMember(student4);
principal.addMember(teacher2);

teacher.gradeStudent('Alice Johnson', 'A');
teacher.gradeStudent('Bob Brown', 'B');
teacher.gradeStudent('Charlie Davis', 'C');
teacher.gradeStudent('Diana Evans', 'D');
teacher.gradeStudent('Emily White', 'A');

student.enrollSubject('Math');
student.enrollSubject('Science');
student.enrollSubject('History');

student2.enrollSubject('Math');
student2.enrollSubject('Science');
student2.enrollSubject('History');

student3.enrollSubject('Math');
student3.enrollSubject('Science');
student3.enrollSubject('History');

student4.enrollSubject('Math');
student4.enrollSubject('Science');
student4.enrollSubject('History');

student5.enrollSubject('Math');
student5.enrollSubject('Science');
student5.enrollSubject('History');

principal.describeRole();

principal.listMembers();
teacher.listGradedStudents();
student.listEnrolledSubjects();
student2.listEnrolledSubjects();
student3.listEnrolledSubjects();
student4.listEnrolledSubjects();
student5.listEnrolledSubjects();
teacher2.listGradedStudents();
