import { Department } from "@/types";

export const departments: Department[] = [
  {
    id: "cs",
    name: "Computer Science",
    slug: "computer-science",
    iconType: "terminal",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializationsCount: 4,
    enrolledStudentsCount: 320,
    specializations: [
      {
        slug: "web-development",
        name: "Web Development",
        trackCode: "CS-SPEC-04",
        description:
          "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
        academicLead: "Prof. Elena Vance",
        primaryLab: "Turing Hall 408",
        totalEnrollment: "4 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "artificial-intelligence",
        name: "Artificial Intelligence",
        trackCode: "CS-SPEC-01",
        description:
          "Machine learning, neural architectures, computer vision, and cognitive systems engineering.",
        academicLead: "Dr. Andrew Ng",
        primaryLab: "Von Neumann Lab 302",
        totalEnrollment: "8 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "cloud-architecture",
        name: "Cloud Architecture",
        trackCode: "CS-SPEC-02",
        description:
          "Distributed infrastructure, container orchestration, scalable microservices, and serverless compute pipelines.",
        academicLead: "Prof. Sandra Lee",
        primaryLab: "Hopper Hall 210",
        totalEnrollment: "6 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "cybersecurity",
        name: "Cybersecurity & Cryptography",
        trackCode: "CS-SPEC-03",
        description:
          "Network defense, zero-trust architectures, protocol security, and threat modeling.",
        academicLead: "Dr. Kevin Flynn",
        primaryLab: "Shannon Hall 105",
        totalEnrollment: "5 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
    ],
  },
  {
    id: "ds",
    name: "Design",
    slug: "design",
    iconType: "design",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializationsCount: 3,
    enrolledStudentsCount: 185,
    specializations: [
      {
        slug: "ui-ux-design",
        name: "UI/UX Design",
        trackCode: "DS-SPEC-01",
        description:
          "Human-computer interaction, wireframing, usability heuristics, and accessible multi-platform design systems.",
        academicLead: "Dr. Marcus Sterling",
        primaryLab: "Bauhaus Studio 204",
        totalEnrollment: "2 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "industrial-design",
        name: "Industrial Design",
        trackCode: "DS-SPEC-02",
        description:
          "Physical product ergonomics, rapid additive manufacturing, material science, and sensory design.",
        academicLead: "Prof. Chloe Aris",
        primaryLab: "Makerspace Studio 112",
        totalEnrollment: "3 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "visual-communication",
        name: "Visual Communication",
        trackCode: "DS-SPEC-03",
        description:
          "Brand narrative, expressive typography, information design, and dynamic digital media.",
        academicLead: "Prof. Julian Thorne",
        primaryLab: "Rams Media Lab 301",
        totalEnrollment: "4 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
    ],
  },
  {
    id: "bs",
    name: "Business",
    slug: "business",
    iconType: "chart",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializationsCount: 3,
    enrolledStudentsCount: 240,
    specializations: [
      {
        slug: "finance-analytics",
        name: "Finance & Analytics",
        trackCode: "BS-SPEC-02",
        description:
          "Quantitative portfolio modeling, corporate valuation, econometric forecasting, and financial markets.",
        academicLead: "Prof. Robert Vance",
        primaryLab: "Morgan Suite 102",
        totalEnrollment: "2 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "strategic-management",
        name: "Strategic Management",
        trackCode: "BS-SPEC-01",
        description:
          "Venture incubation, corporate strategy, competitive dynamics, and organizational scale.",
        academicLead: "Dr. Alistair Finch",
        primaryLab: "Executive Suite 410",
        totalEnrollment: "3 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "digital-marketing",
        name: "Digital Marketing & Growth",
        trackCode: "BS-SPEC-03",
        description:
          "Customer acquisition modeling, brand equity, behavioral economics, and retention analytics.",
        academicLead: "Prof. Laura Jensen",
        primaryLab: "Innovation Lab 205",
        totalEnrollment: "3 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
    ],
  },
];

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug.toLowerCase() === slug.toLowerCase());
}

export function getSpecialization(
  deptSlug: string,
  specSlug: string
) {
  const dept = getDepartmentBySlug(deptSlug);
  if (!dept) return undefined;
  const spec = dept.specializations.find(
    (s) => s.slug.toLowerCase() === specSlug.toLowerCase()
  );
  if (!spec) return undefined;
  return { department: dept, specialization: spec };
}
