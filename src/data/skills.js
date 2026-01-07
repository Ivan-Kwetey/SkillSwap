import { v4 as uuidv4 } from "uuid";

const users = [
  {
    rating: 4.6,
    bio: "Full-stack developer and mentor, passionate about teaching web tech.",
    skills: [
      {
        name: "Frontend Web Development",
        category: "Software Engineering",
        modes: ["Online", "In-Person"],
      },
      {
        name: "UI Performance Optimization",
        category: "Software Engineering",
        modes: ["Online"],
      },
      {
        name: "React.js",
        category: "Software Engineering",
        modes: ["Online", "In-Person"],
      },
    ],
  },
  {

    rating: 4.4,
    bio: "UX designer focused on user-centered experiences for web and mobile apps.",
    skills: [
      { name: "UX Design", category: "Design", modes: ["Online", "In-Person"] },
      { name: "Design Systems", category: "Design", modes: ["Online"] },
    ],
  },
  {
    rating: 3.6,
    bio: "Data analyst and Python instructor helping beginners turn data into insights.",
    skills: [
      {
        name: "Data Analysis with Python",
        category: "Data Science",
        modes: ["Online"],
      },
      {
        name: "Data Visualization",
        category: "Data Science",
        modes: ["Online", "In-Person"],
      },
    ],
  },
  {
    rating: 4.7,
    bio: "Master woodworker teaching traditional and modern techniques.",
    skills: [
      { name: "Woodworking", category: "Crafts", modes: ["In-Person"] },
      {
        name: "Furniture Design",
        category: "Crafts",
        modes: ["Online", "In-Person"],
      },
    ],
  },
  {
    rating: 3.7,
    bio: "Professional painter sharing techniques in oil painting and sketching.",
    skills: [
      {
        name: "Oil Painting",
        category: "Arts & Illustration",
        modes: ["In-Person"],
      },
      {
        name: "Sketching Fundamentals",
        category: "Arts & Illustration",
        modes: ["Online"],
      },
    ],
  },
  {
    rating: 4.3,
    bio: "Engineer specialized in mechanical design and 3D modeling.",
    skills: [
      {
        name: "Mechanical Design",
        category: "Engineering",
        modes: ["In-Person"],
      },
      {
        name: "CAD Modeling",
        category: "Engineering",
        modes: ["Online", "In-Person"],
      },
    ],
  },
  {
    rating: 3.3,
    bio: "Backend developer building scalable APIs and databases.",
    skills: [
      {
        name: "Backend API Development",
        category: "Software Engineering",
        modes: ["Online", "In-Person"],
      },
      {
        name: "Database Modeling",
        category: "Software Engineering",
        modes: ["Online"],
      },
    ],
  },
  {
    rating: 3.1,
    bio: "Digital illustrator and character designer with focus on storytelling.",
    skills: [
      {
        name: "Illustration",
        category: "Arts & Illustration",
        modes: ["Online", "In-Person"],
      },
      {
        name: "Character Design",
        category: "Arts & Illustration",
        modes: ["Online"],
      },
    ],
  },
  {
    rating: 3.9,
    bio: "Video editor and motion graphics artist for media projects.",
    skills: [
      {
        name: "Video Editing",
        category: "Media & Production",
        modes: ["Online", "In-Person"],
      },
      {
        name: "Motion Graphics",
        category: "Media & Production",
        modes: ["Online"],
      },
    ],
  },
  {

    rating: 3.8,
    bio: "Language tutor helping students improve French and academic writing.",
    skills: [
      {
        name: "French Language Tutoring",
        category: "Education",
        modes: ["Online", "In-Person"],
      },
      { name: "Academic Writing", category: "Education", modes: ["Online"] },
    ],
  },
  {
    rating: 3.5,
    bio: "Full-stack developer and Python enthusiast, teaching programming and web apps.",
    skills: [
      {
        name: "Python Programming",
        category: "Software Engineering",
        modes: ["Online", "In-Person"],
      },
      {
        name: "Django Web Development",
        category: "Software Engineering",
        modes: ["Online"],
      },
    ],
  },
  {
    rating: 3.7,
    bio: "Graphic designer creating visual identities for digital and print media.",
    skills: [
      {
        name: "Graphic Design",
        category: "Design",
        modes: ["Online", "In-Person"],
      },
      { name: "Branding", category: "Design", modes: ["Online"] },
    ],
  },
  {
    rating: 4.7,
    bio: "Creative coder and interaction designer with focus on animations.",
    skills: [
      {
        name: "Interactive Design",
        category: "Design",
        modes: ["Online", "In-Person"],
      },
      { name: "Animation", category: "Media & Production", modes: ["Online"] },
    ],
  },
  {

    rating: 3.2,
    bio: "Engineer specializing in renewable energy and sustainable design.",
    skills: [
      {
        name: "Renewable Energy Systems",
        category: "Engineering",
        modes: ["In-Person"],
      },
      {
        name: "Sustainable Design",
        category: "Engineering",
        modes: ["Online"],
      },
    ],
  },
  {
    rating: 2.7,
    bio: "Craftsman teaching woodworking and artisanal furniture techniques.",
    skills: [
      { name: "Woodworking", category: "Crafts", modes: ["In-Person"] },
      {
        name: "Furniture Making",
        category: "Crafts",
        modes: ["Online", "In-Person"],
      },
    ],
  },
  {
    rating: 4.7,
    bio: "Visual artist and illustrator specializing in comics and digital art.",
    skills: [
      {
        name: "Digital Illustration",
        category: "Arts & Illustration",
        modes: ["Online", "In-Person"],
      },
      {
        name: "Comics Drawing",
        category: "Arts & Illustration",
        modes: ["Online"],
      },
    ],
  },
  {
    rating: 4.9,
    bio: "Educator teaching coding and app development to young professionals.",
    skills: [
      {
        name: "Mobile App Development",
        category: "Software Engineering",
        modes: ["Online", "In-Person"],
      },
      {
        name: "JavaScript Programming",
        category: "Software Engineering",
        modes: ["Online"],
      },
    ],
  },
  {

    rating: 4.6,
    bio: "Video editor and motion graphics creator for digital media.",
    skills: [
      {
        name: "Video Editing",
        category: "Media & Production",
        modes: ["Online", "In-Person"],
      },
      {
        name: "Motion Graphics",
        category: "Media & Production",
        modes: ["Online"],
      },
    ],
  },
  {
    rating: 4.4,
    bio: "Language tutor helping students improve English and academic writing skills.",
    skills: [
      {
        name: "English Tutoring",
        category: "Education",
        modes: ["Online", "In-Person"],
      },
      { name: "Academic Writing", category: "Education", modes: ["Online"] },
    ],
  },
];

export default users;
