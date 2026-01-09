import { v4 as uuidv4 } from "uuid";

const users = [
  {
    id: uuidv4(),
    rating: 4.6,
    bio: "Full-stack developer and mentor, passionate about teaching web tech.",
    about:
      "I’m a full-stack developer with over 8 years of experience building modern web applications using React, Node.js, and cloud-based services. I love mentoring developers who are early in their careers and helping them understand not just how to code, but why things work the way they do. My sessions are practical, project-focused, and tailored to real-world scenarios.",
    dateJoined: "2024-09-12",
    skills: [
      { name: "Frontend Web Development", category: "Software Engineering", modes: ["Online", "In-Person"] },
      { name: "UI Performance Optimization", category: "Software Engineering", modes: ["Online"] },
      { name: "React.js", category: "Software Engineering", modes: ["Online", "In-Person"] },
    ],
    wants: ["UI/UX Design", "Python Programming"],
    completedSwaps: [
      { id: 1, title: "React Advanced Patterns with Jason", completedAt: "2025-12-20" },
      { id: 2, title: "Frontend Performance Review", completedAt: "2025-11-15" },
    ],
  },
  {
    id: uuidv4(),
    rating: 4.4,
    bio: "UX designer focused on user-centered experiences for web and mobile apps.",
    about:
      "I’m a UX designer who believes great design starts with empathy. I specialize in translating complex ideas into intuitive user experiences for both web and mobile products. I enjoy collaborating with developers and product managers, and I often help teams improve usability, accessibility, and consistency through design systems.",
    dateJoined: "2025-01-03",
    skills: [
      { name: "UX Design", category: "Design", modes: ["Online", "In-Person"] },
      { name: "Design Systems", category: "Design", modes: ["Online"] },
    ],
    wants: ["React.js", "User Research"],
    completedSwaps: [
      { id: 1, title: "UX Design Critique", completedAt: "2025-10-12" },
      { id: 2, title: "Design System Workshop", completedAt: "2025-09-20" },
    ],
  },
  {
    id: uuidv4(),
    rating: 3.6,
    bio: "Data analyst and Python instructor helping beginners turn data into insights.",
    about:
      "I help beginners and non-technical professionals learn how to analyze and visualize data using Python. My approach focuses on real datasets, practical examples, and building confidence step by step. Whether you’re preparing for a job transition or improving your analytical skills, I aim to make data approachable and useful.",
    dateJoined: "2024-11-21",
    skills: [
      { name: "Data Analysis with Python", category: "Data Science", modes: ["Online"] },
      { name: "Data Visualization", category: "Data Science", modes: ["Online", "In-Person"] },
    ],
    wants: ["Dashboard Design", "Design"],
    completedSwaps: [
      { id: 1, title: "Python for Data Analysis", completedAt: "2025-08-10" },
    ],
  },
  {
    id: uuidv4(),
    rating: 4.7,
    bio: "Master woodworker teaching traditional and modern techniques.",
    about:
      "I’ve spent over 20 years working with wood, from traditional hand tools to modern furniture-making techniques. I enjoy teaching both beginners and experienced makers how to design, build, and finish quality pieces. My sessions emphasize craftsmanship, safety, and understanding materials.",
    dateJoined: "2025-02-15",
    skills: [
      { name: "Woodworking", category: "Crafts", modes: ["In-Person"] },
      { name: "Furniture Design", category: "Crafts", modes: ["Online", "In-Person"] },
    ],
    wants: ["Carpentry Techniques", "Joinery"],
    completedSwaps: [
      { id: 1, title: "Custom Chair Build", completedAt: "2025-10-05" },
    ],
  },
  {
    id: uuidv4(),
    rating: 3.7,
    bio: "Professional painter sharing techniques in oil painting and sketching.",
    about:
      "I’m a professional painter with a background in fine arts and years of studio practice. I focus on oil painting, composition, and developing a strong visual foundation. I enjoy helping artists improve their technique, confidence, and creative process through structured lessons and critiques.",
    dateJoined: "2024-12-01",
    skills: [
      { name: "Oil Painting", category: "Arts & Illustration", modes: ["In-Person"] },
      { name: "Sketching Fundamentals", category: "Arts & Illustration", modes: ["Online"] },
    ],
    wants: ["Watercolor Techniques", "Figure Drawing"],
    completedSwaps: [
      { id: 1, title: "Oil Painting Workshop", completedAt: "2025-09-18" },
    ],
  },
  {
    id: uuidv4(),
    rating: 4.3,
    bio: "Engineer specialized in mechanical design and 3D modeling.",
    about:
      "I’m a mechanical engineer with experience in product development, prototyping, and CAD modeling. I enjoy teaching practical design principles, from concept sketches to manufacturable assemblies. My goal is to help learners bridge the gap between theory and real-world engineering work.",
    dateJoined: "2025-03-10",
    skills: [
      { name: "Mechanical Design", category: "Engineering", modes: ["In-Person"] },
      { name: "CAD Modeling", category: "Engineering", modes: ["Online", "In-Person"] },
    ],
    wants: ["3D Printing", "Robotics"],
    completedSwaps: [
      { id: 1, title: "CAD Assembly Training", completedAt: "2025-08-22" },
    ],
  },
  {
    id: uuidv4(),
    rating: 3.3,
    bio: "Backend developer building scalable APIs and databases.",
    about:
      "I focus on designing and building scalable backend systems using modern frameworks and databases. I enjoy discussing architecture decisions, performance optimization, and best practices for maintainable APIs. I’m especially interested in helping frontend developers understand backend fundamentals.",
    dateJoined: "2024-10-05",
    skills: [
      { name: "Backend API Development", category: "Software Engineering", modes: ["Online", "In-Person"] },
      { name: "Database Modeling", category: "Software Engineering", modes: ["Online"] },
    ],
    wants: ["DevOps", "Cloud Architecture"],
    completedSwaps: [
      { id: 1, title: "REST API Optimization", completedAt: "2025-07-14" },
    ],
  },
  {
    id: uuidv4(),
    rating: 3.1,
    bio: "Digital illustrator and character designer with focus on storytelling.",
    about:
      "I create digital illustrations and character designs with a strong emphasis on storytelling and personality. I enjoy helping artists develop their own style, improve anatomy, and communicate emotion through visuals. My sessions often include live sketching and feedback.",
    dateJoined: "2024-11-18",
    skills: [
      { name: "Illustration", category: "Arts & Illustration", modes: ["Online", "In-Person"] },
      { name: "Character Design", category: "Arts & Illustration", modes: ["Online"] },
    ],
    wants: ["Comic Art", "Animation Basics"],
    completedSwaps: [
      { id: 1, title: "Character Sketch Session", completedAt: "2025-06-30" },
    ],
  },
  {
    id: uuidv4(),
    rating: 3.9,
    bio: "Video editor and motion graphics artist for media projects.",
    about:
      "I work as a video editor and motion graphics artist on short films, commercials, and online content. I enjoy teaching editing workflows, storytelling through motion, and efficient production techniques. My goal is to help creators elevate the quality of their video work.",
    dateJoined: "2025-04-12",
    skills: [
      { name: "Video Editing", category: "Media & Production", modes: ["Online", "In-Person"] },
      { name: "Motion Graphics", category: "Media & Production", modes: ["Online"] },
    ],
    wants: ["3D Animation", "Color Grading"],
    completedSwaps: [
      { id: 1, title: "Video Editing Deep Dive", completedAt: "2025-10-01" },
    ],
  },
  {
    id: uuidv4(),
    rating: 3.8,
    bio: "Language tutor helping students improve French and academic writing.",
    about:
      "I’m a language tutor specializing in French conversation, grammar, and academic writing. I work with students from diverse backgrounds and adapt lessons to individual goals, whether that’s exam preparation, professional communication, or everyday fluency.",
    dateJoined: "2024-12-20",
    skills: [
      { name: "French Language Tutoring", category: "Education", modes: ["Online", "In-Person"] },
      { name: "Academic Writing", category: "Education", modes: ["Online"] },
    ],
    wants: ["English Tutoring", "Essay Editing"],
    completedSwaps: [
      { id: 1, title: "French Conversation Practice", completedAt: "2025-09-05" },
    ],
  },
];

export default users;
