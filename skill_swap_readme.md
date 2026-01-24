# SkillSwap

SkillSwap is a peer-to-peer platform that helps people exchange skills instead of money. Users can browse profiles, discover complementary skills, and send skill swap requests — all centered around a clear, human-first core flow.

This repository currently focuses on the **frontend MVP**, designed to validate the experience, core interactions, and value proposition before introducing a real backend.

---

## Core Idea

**Give a skill. Get a skill.**  
SkillSwap enables people to:
- Offer skills they already have
- Request skills they want to learn
- Connect through simple, intentional exchanges

No complicated marketplaces. No transactions. Just skill-for-skill.

---

## Product Goals

- Make skill swapping feel **simple, trustworthy, and human**
- Emphasize clarity over feature bloat
- Validate the core user flow with a frontend-only MVP
- Design for scalability once a backend is introduced

---

## MVP Scope (Frontend Only)

This MVP simulates real-world interactions without a live backend.

### Included

- Browse skill profiles
- View detailed user profiles
- Filter and search by skills
- Send a skill swap request (simulated)
- Add a skill swap member (simulated)
- Clear feedback states (success, pending, disabled actions)

### Not Included (Yet)

- Authentication
- Real messaging or notifications
- Payments or scheduling
- Persistent backend data

---

## Simulated Backend Strategy

To mimic real-world behavior in a frontend-only environment, SkillSwap uses:

- **Static mock data** for users and skills
- **Local state** to track interactions (e.g. sent requests)
- **Disabled or conditional UI states** to reflect real constraints
- **Optimistic UI patterns** (actions feel instant, even if simulated)

This approach allows us to test:
- Core flows
- UX clarity
- Information hierarchy
- Edge cases

---

## Core Features

### 1. Browse Skills
- Grid/list of user cards
- Skill tags with clear offerings and wants
- Ratings and short bios for quick scanning

### 2. Profile View
- Expanded bio and skill details
- Skills offered vs skills requested
- Call-to-action for sending a swap request

### 3. Skill Swap Request Flow
- Clear entry point ("Request Swap")
- Confirmation feedback
- Disabled repeat actions once a request is sent

### 4. Filtering & Search
- Search by skill name
- Filter by offered or wanted skills
- Fast, responsive UI updates

---

## APIs & Data Strategy

SkillSwap’s frontend MVP integrates lightweight public APIs to simulate realistic, production-like behavior without a full backend.

### Random User API — Profile Generation
We use the **Random User API** to dynamically generate realistic user profiles.

This API provides:
- Real human profile photos
- Names
- Location data

Example usage:
- Fetching multiple users at once
- Mapping API responses into SkillSwap’s internal user model

**Why this decision**
- Profiles feel immediately human and trustworthy
- Avoids abstract placeholders or avatars
- Simulates real social-product constraints
- Enables realistic UI testing (loading states, errors, empty states)

The frontend treats this API as if it were a real user service, making it easy to replace with a custom backend later.

---

### JSONPlaceholder — Simulated Skill Swap Requests
To simulate sending and canceling skill swap requests, we use **JSONPlaceholder**, a fake online REST API.

Used for:
- Sending a skill swap request (POST)
- Canceling a request (DELETE)

**Why JSONPlaceholder**
- Mimics real network behavior
- Supports realistic request/response flows
- Allows optimistic UI patterns
- No backend setup required

This enables us to design and validate request states such as:
- Pending
- Success
- Disabled repeat actions

---

### Frontend-First Architecture
All API interactions are abstracted behind service functions, allowing:
- Easy replacement with a real backend
- Clear separation of concerns
- Scalable architecture beyond the MVP

---

## Tech Stack

- **React**
- **CSS / Modular styling**
- **Local mock data**
- **UUIDs for simulated entities**

(Backend, auth, and database to be added later.)

---

## Project Structure (High-Level)

```
/src
  /components
  /pages
  /data
  /styles
```

- `components/` – Reusable UI building blocks
- `pages/` – Main routes (Browse, Profile, etc.)
- `data/` – Mock users and skills
- `styles/` – Global and scoped styles

---

## Why Frontend-Only?

This MVP is intentionally frontend-focused to:
- Iterate fast
- Validate UX decisions early
- Avoid premature backend complexity
- Build confidence in the core concept

The UI is designed so backend integration later will feel additive, not disruptive.

---

## 🔮 Future Enhancements

- Authentication & user accounts
- Real-time messaging
- Persistent skill swap requests
- Notifications
- Scheduling & availability
- Reputation and trust signals

---

## Status

🟡 **In Progress — Frontend MVP**  
Actively iterating on UX, structure, and interaction clarity.

---

## Contributing

This project is currently exploratory and design-led. Contributions, ideas, and feedback are welcome.

---

## 📄 License

MIT License

---

SkillSwap — Learn together. Grow together.

