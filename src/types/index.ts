export interface Subject {
  code: string;
  title: string;
  credits: string;
}

export interface Student {
  id: string;
  studentId: string;
  name: string;
  initials: string;
  avatarColor: string;
  department: string;
  departmentSlug: string;
  studyYear: string;
  yearNumber: number;
  email: string;
  enrolled: string;
  status: string;
  about: string;
  academicStanding: string;
  specialization: string;
  specializationSlug: string;
  trackFocus: string;
  systemRecordId: string;
  lastValidated: string;
  enrolledSubjects: Subject[];
}

export interface Specialization {
  slug: string;
  name: string;
  trackCode: string;
  description: string;
  academicLead: string;
  primaryLab: string;
  totalEnrollment: string;
  curriculumCycle: string;
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconType: "terminal" | "design" | "chart";
  specializationsCount: number;
  enrolledStudentsCount: number;
  specializations: Specialization[];
}
