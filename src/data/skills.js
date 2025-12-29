import { v4 as uuidv4 } from "uuid";

const users = [
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Keanu Jackson",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Keanu Jackson"
    },
    location: "New York",
    bio: "Full-stack developer and mentor, passionate about teaching web technologies.",
    skills: [
      { name: "Frontend Web Development", category: "Software Engineering", modes: ["Online","In-Person"] },
      { name: "UI Performance Optimization", category: "Software Engineering", modes: ["Online"] },
      { name: "React.js", category: "Software Engineering", modes: ["Online","In-Person"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Mara Laurent",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Mara Laurent"
    },
    location: "Paris",
    bio: "UX designer focused on user-centered experiences for web and mobile apps.",
    skills: [
      { name: "UX Design", category: "Design", modes: ["Online","In-Person"] },
      { name: "Design Systems", category: "Design", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Luis Calderon",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Luis Calderon"
    },
    location: "San Francisco",
    bio: "Data analyst and Python instructor helping beginners turn data into insights.",
    skills: [
      { name: "Data Analysis with Python", category: "Data Science", modes: ["Online"] },
      { name: "Data Visualization", category: "Data Science", modes: ["Online","In-Person"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Hiro Tanaka",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Hiro Tanaka"
    },
    location: "Tokyo",
    bio: "Master woodworker teaching traditional and modern techniques.",
    skills: [
      { name: "Woodworking", category: "Crafts", modes: ["In-Person"] },
      { name: "Furniture Design", category: "Crafts", modes: ["Online","In-Person"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Elena Rossi",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Elena Rossi"
    },
    location: "Florence",
    bio: "Professional painter sharing techniques in oil painting and sketching.",
    skills: [
      { name: "Oil Painting", category: "Arts & Illustration", modes: ["In-Person"] },
      { name: "Sketching Fundamentals", category: "Arts & Illustration", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "David Kovacs",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=David Kovacs"
    },
    location: "Budapest",
    bio: "Engineer specialized in mechanical design and 3D modeling.",
    skills: [
      { name: "Mechanical Design", category: "Engineering", modes: ["In-Person"] },
      { name: "CAD Modeling", category: "Engineering", modes: ["Online","In-Person"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Noah Brooks",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Noah Brooks"
    },
    location: "Austin",
    bio: "Backend developer building scalable APIs and databases.",
    skills: [
      { name: "Backend API Development", category: "Software Engineering", modes: ["Online","In-Person"] },
      { name: "Database Modeling", category: "Software Engineering", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Sofia Moreno",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sofia Moreno"
    },
    location: "Madrid",
    bio: "Digital illustrator and character designer with focus on storytelling.",
    skills: [
      { name: "Illustration", category: "Arts & Illustration", modes: ["Online","In-Person"] },
      { name: "Character Design", category: "Arts & Illustration", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Tomasz Nowak",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Tomasz Nowak"
    },
    location: "Kraków",
    bio: "Video editor and motion graphics artist for media projects.",
    skills: [
      { name: "Video Editing", category: "Media & Production", modes: ["Online","In-Person"] },
      { name: "Motion Graphics", category: "Media & Production", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Yara Haddad",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Yara Haddad"
    },
    location: "Cairo",
    bio: "Language tutor helping students improve French and academic writing.",
    skills: [
      { name: "French Language Tutoring", category: "Education", modes: ["Online","In-Person"] },
      { name: "Academic Writing", category: "Education", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Mateo Ibanez",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Mateo Ibanez"
    },
    location: "Buenos Aires",
    bio: "Full-stack developer and Python enthusiast, teaching programming and web apps.",
    skills: [
      { name: "Python Programming", category: "Software Engineering", modes: ["Online","In-Person"] },
      { name: "Django Web Development", category: "Software Engineering", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Chen Wei",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Chen Wei"
    },
    location: "Shanghai",
    bio: "Graphic designer creating visual identities for digital and print media.",
    skills: [
      { name: "Graphic Design", category: "Design", modes: ["Online","In-Person"] },
      { name: "Branding", category: "Design", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Hanna Muller",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Hanna Muller"
    },
    location: "Berlin",
    bio: "Creative coder and interaction designer with focus on animations.",
    skills: [
      { name: "Interactive Design", category: "Design", modes: ["Online","In-Person"] },
      { name: "Animation", category: "Media & Production", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Samuel Okoye",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Samuel Okoye"
    },
    location: "Lagos",
    bio: "Engineer specializing in renewable energy and sustainable design.",
    skills: [
      { name: "Renewable Energy Systems", category: "Engineering", modes: ["In-Person"] },
      { name: "Sustainable Design", category: "Engineering", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Lucas Pereira",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Lucas Pereira"
    },
    location: "São Paulo",
    bio: "Craftsman teaching woodworking and artisanal furniture techniques.",
    skills: [
      { name: "Woodworking", category: "Crafts", modes: ["In-Person"] },
      { name: "Furniture Making", category: "Crafts", modes: ["Online","In-Person"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Nina Petrova",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Nina Petrova"
    },
    location: "Moscow",
    bio: "Visual artist and illustrator specializing in comics and digital art.",
    skills: [
      { name: "Digital Illustration", category: "Arts & Illustration", modes: ["Online","In-Person"] },
      { name: "Comics Drawing", category: "Arts & Illustration", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Arjun Malik",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Arjun Malik"
    },
    location: "Mumbai",
    bio: "Educator teaching coding and app development to young professionals.",
    skills: [
      { name: "Mobile App Development", category: "Software Engineering", modes: ["Online","In-Person"] },
      { name: "JavaScript Programming", category: "Software Engineering", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Emre Kaya",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Emre Kaya"
    },
    location: "Istanbul",
    bio: "Video editor and motion graphics creator for digital media.",
    skills: [
      { name: "Video Editing", category: "Media & Production", modes: ["Online","In-Person"] },
      { name: "Motion Graphics", category: "Media & Production", modes: ["Online"] }
    ]
  },
  {
    id: uuidv4(),
    user: {
      id: uuidv4(),
      name: "Rachel Cooper",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rachel Cooper"
    },
    location: "Toronto",
    bio: "Language tutor helping students improve English and academic writing skills.",
    skills: [
      { name: "English Tutoring", category: "Education", modes: ["Online","In-Person"] },
      { name: "Academic Writing", category: "Education", modes: ["Online"] }
    ]
  }
];

export default users;
