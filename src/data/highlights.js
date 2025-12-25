import musicVideo from "../assets/videos/music.mp4";
import cookingVideo from "../assets/videos/cooking.mp4";
import photographyVideo from "../assets/videos/photography.mp4";
import sculptingVideo from "../assets/videos/sculpting.mp4";
import stylistVideo from "../assets/videos/stylist.mp4";
import swimmingVideo from "../assets/videos/swimming.mp4";
import jamesAvatar from "../assets/avatars/james.jpg";
import carolineAvatar from "../assets/avatars/caroline.jpg";
import chelseaAvatar from "../assets/avatars/chelsea.jpg";
import samuelAvatar from "../assets/avatars/samuel.jpg";
import wendyAvatar from "../assets/avatars/wendy.jpg";
import alexAvatar from "../assets/avatars/alex.jpg";

export const highlights = [
  {
    id: crypto.randomUUID(),
    videoUrl: musicVideo,
    tags: ["music", "piano"],
    user: {
      name: "James",
      avatar: jamesAvatar,
      location: {
        city: "Wichita",
        state: "WA",
      },
    },
  },
  {
    id: crypto.randomUUID(),
    videoUrl: sculptingVideo,
    tags: ["tooling", "modelling", "stone", "sculpting"],
    name: "Jim",
    user: {
      name: "Samuel",
      avatar: samuelAvatar,
      location: {
        city: "Albany",
        state: "NY",
      },
    },
  },
  {
    id: crypto.randomUUID(),
    videoUrl: photographyVideo,
    tags: ["editing", "studio", "lighting", "photography"],
    user: {
      name: "Chelsea",
      avatar: chelseaAvatar,
      location: {
        city: "Seattle",
        state: "WA",
      },
    },
  },
  {
    id: crypto.randomUUID(),
    videoUrl: cookingVideo,
    tags: ["cooking", "kitchen", "spice"],
    user: {
      name: "Alex",
      avatar: alexAvatar,
      location: {
        city: "Miami",
        state: "FL",
      },
    },
  },
  {
    id: crypto.randomUUID(),
    videoUrl: stylistVideo,
    tags: ["braiding", "haircuts", "styling"],
    user: {
      name: "Caroline",
      avatar: carolineAvatar,
      location: {
        city: "Denver",
        state: "CO",
      },
    },
  },
  {
    id: crypto.randomUUID(),
    videoUrl: swimmingVideo,
    tags: ["swimming", "breathing", "water"],
    user: {
      name: "Wendy",
      avatar: wendyAvatar,
      location: "Atlanta",
      state: "GA",
    },
  },
];
