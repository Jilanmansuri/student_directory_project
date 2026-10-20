import { Student } from "@/types";

export const students: Student[] = [
  {
    id: "stu-1042",
    studentId: "STU-1042",
    name: "Aarav Mehta",
    initials: "AM",
    avatarColor: "blue",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "3rd Year (Junior)",
    yearNumber: 3,
    email: "aarav.mehta@campus.edu",
    enrolled: "Fall 2022",
    status: "Active Student",
    about:
      "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    academicStanding: "3rd Year Undergraduate",
    specialization: "Web Development",
    specializationSlug: "web-development",
    trackFocus: "Full-Stack Architecture",
    systemRecordId: "0948-CS-AM",
    lastValidated: "Oct 24, 2024",
    enrolledSubjects: [
      {
        code: "CS-301",
        title: "Distributed Systems & Microservices",
        credits: "4.0 Credits",
      },
      {
        code: "CS-340",
        title: "Web Application Architecture",
        credits: "4.0 Credits",
      },
      {
        code: "CS-280",
        title: "Algorithms & Complexity",
        credits: "3.5 Credits",
      },
    ],
  },
  {
    id: "stu-1089",
    studentId: "STU-1089",
    name: "Elena Rostova",
    initials: "ER",
    avatarColor: "purple",
    department: "Design",
    departmentSlug: "design",
    studyYear: "2nd Year",
    yearNumber: 2,
    email: "elena.rostova@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Elena explores the intersection of cognitive psychology and digital interfaces. She is currently researching design accessibility patterns for neurodiverse users.",
    academicStanding: "2nd Year Undergraduate",
    specialization: "UI/UX Design",
    specializationSlug: "ui-ux-design",
    trackFocus: "Visual Systems",
    systemRecordId: "1089-DS-ER",
    lastValidated: "Oct 24, 2024",
    enrolledSubjects: [
      {
        code: "DS-210",
        title: "Interaction Design Studio",
        credits: "4.0 Credits",
      },
      {
        code: "DS-240",
        title: "Visual Typography & Hierarchy",
        credits: "3.0 Credits",
      },
      {
        code: "DS-180",
        title: "Design Research Methodologies",
        credits: "3.5 Credits",
      },
    ],
  },
  {
    id: "stu-1120",
    studentId: "STU-1120",
    name: "Marcus Chen",
    initials: "MC",
    avatarColor: "orange",
    department: "Business",
    departmentSlug: "business",
    studyYear: "4th Year",
    yearNumber: 4,
    email: "marcus.chen@campus.edu",
    enrolled: "Fall 2021",
    status: "Active Student",
    about:
      "Marcus is an honors finance student interested in algorithmic trading and sustainable venture capital. He co-leads the student investment portfolio fund.",
    academicStanding: "4th Year Undergraduate",
    specialization: "Finance & Analytics",
    specializationSlug: "finance-analytics",
    trackFocus: "Quantitative Modeling",
    systemRecordId: "1120-BS-MC",
    lastValidated: "Oct 24, 2024",
    enrolledSubjects: [
      {
        code: "BS-402",
        title: "Advanced Corporate Finance",
        credits: "4.0 Credits",
      },
      {
        code: "BS-450",
        title: "Venture Capital & Private Equity",
        credits: "3.5 Credits",
      },
      {
        code: "BS-380",
        title: "Financial Econometrics",
        credits: "4.0 Credits",
      },
    ],
  },
  {
    id: "stu-1155",
    studentId: "STU-1155",
    name: "Priya Sharma",
    initials: "PS",
    avatarColor: "blue",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "1st Year",
    yearNumber: 1,
    email: "priya.sharma@campus.edu",
    enrolled: "Fall 2024",
    status: "Active Student",
    about:
      "Priya is passionate about modern web technologies and frontend state management. She enjoys building interactive components and exploring design systems.",
    academicStanding: "1st Year Undergraduate",
    specialization: "Web Development",
    specializationSlug: "web-development",
    trackFocus: "Reactive UI Design",
    systemRecordId: "1155-CS-PS",
    lastValidated: "Oct 24, 2024",
    enrolledSubjects: [
      {
        code: "CS-101",
        title: "Introduction to Programming",
        credits: "4.0 Credits",
      },
      {
        code: "CS-120",
        title: "Discrete Structures",
        credits: "3.5 Credits",
      },
      {
        code: "CS-140",
        title: "Web Development Foundations",
        credits: "3.0 Credits",
      },
    ],
  },
  {
    id: "stu-1201",
    studentId: "STU-1201",
    name: "Lucas Dubois",
    initials: "LD",
    avatarColor: "rose",
    department: "Design",
    departmentSlug: "design",
    studyYear: "3rd Year",
    yearNumber: 3,
    email: "lucas.dubois@campus.edu",
    enrolled: "Fall 2022",
    status: "Active Student",
    about:
      "Lucas combines digital 3D prototyping with physical computing. He spends his free time in the makerspace fabricating custom ergonomic hardware.",
    academicStanding: "3rd Year Undergraduate",
    specialization: "Industrial Design",
    specializationSlug: "industrial-design",
    trackFocus: "Ergonomics & Prototyping",
    systemRecordId: "1201-DS-LD",
    lastValidated: "Oct 24, 2024",
    enrolledSubjects: [
      {
        code: "DS-320",
        title: "3D Rapid Prototyping",
        credits: "4.0 Credits",
      },
      {
        code: "DS-350",
        title: "Human Factors in Design",
        credits: "3.5 Credits",
      },
      {
        code: "DS-310",
        title: "Sustainable Materials Workshop",
        credits: "3.0 Credits",
      },
    ],
  },
  {
    id: "stu-1244",
    studentId: "STU-1244",
    name: "Maya Lin",
    initials: "ML",
    avatarColor: "indigo",
    department: "Business",
    departmentSlug: "business",
    studyYear: "2nd Year",
    yearNumber: 2,
    email: "maya.lin@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Maya focuses on startup ecosystems, product marketing, and international business strategy. She actively organizes campus hackathons and pitch competitions.",
    academicStanding: "2nd Year Undergraduate",
    specialization: "Strategic Management",
    specializationSlug: "strategic-management",
    trackFocus: "Tech Entrepreneurship",
    systemRecordId: "1244-BS-ML",
    lastValidated: "Oct 24, 2024",
    enrolledSubjects: [
      {
        code: "BS-210",
        title: "Principles of Marketing",
        credits: "3.5 Credits",
      },
      {
        code: "BS-240",
        title: "Organizational Behavior",
        credits: "3.0 Credits",
      },
      {
        code: "BS-260",
        title: "Managerial Accounting",
        credits: "4.0 Credits",
      },
    ],
  },
  {
    id: "stu-1310",
    studentId: "STU-1310",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    avatarColor: "blue",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "4th Year",
    yearNumber: 4,
    email: "tariq.almansoor@campus.edu",
    enrolled: "Fall 2021",
    status: "Active Student",
    about:
      "Tariq specializes in high-throughput network architectures, GraphQL federation, and serverless compute pipelines. He has previously interned at cloud infrastructure firms.",
    academicStanding: "4th Year Undergraduate",
    specialization: "Web Development",
    specializationSlug: "web-development",
    trackFocus: "Distributed Web Systems",
    systemRecordId: "1310-CS-TA",
    lastValidated: "Oct 24, 2024",
    enrolledSubjects: [
      {
        code: "CS-420",
        title: "Distributed Database Systems",
        credits: "4.0 Credits",
      },
      {
        code: "CS-450",
        title: "Cloud Native Engineering",
        credits: "4.0 Credits",
      },
      {
        code: "CS-490",
        title: "Senior Capstone Project",
        credits: "4.0 Credits",
      },
    ],
  },
  {
    id: "stu-1388",
    studentId: "STU-1388",
    name: "Sophia Müller",
    initials: "SM",
    avatarColor: "blue",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "2nd Year",
    yearNumber: 2,
    email: "sophia.mueller@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Sophia is passionate about service workers, offline-first client architecture, and responsive web performance optimization.",
    academicStanding: "2nd Year Undergraduate",
    specialization: "Web Development",
    specializationSlug: "web-development",
    trackFocus: "Progressive Web Apps",
    systemRecordId: "1388-CS-SM",
    lastValidated: "Oct 24, 2024",
    enrolledSubjects: [
      {
        code: "CS-230",
        title: "Computer Systems & Architecture",
        credits: "4.0 Credits",
      },
      {
        code: "CS-250",
        title: "Client-Side Web Architecture",
        credits: "3.5 Credits",
      },
      {
        code: "CS-210",
        title: "Data Structures & Analysis",
        credits: "4.0 Credits",
      },
    ],
  },
];

export function getStudentById(id: string): Student | undefined {
  const normalized = id.toLowerCase();
  return students.find(
    (s) => s.id.toLowerCase() === normalized || s.studentId.toLowerCase() === normalized
  );
}

export function getStudentsByDepartment(departmentSlug: string): Student[] {
  return students.filter(
    (s) => s.departmentSlug.toLowerCase() === departmentSlug.toLowerCase()
  );
}

export function getStudentsBySpecialization(specSlug: string): Student[] {
  return students.filter(
    (s) => s.specializationSlug.toLowerCase() === specSlug.toLowerCase()
  );
}
