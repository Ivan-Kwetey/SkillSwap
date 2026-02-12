# SkillSwap

SkillSwap is a peer-to-peer platform that helps people exchange skills instead of money. Users can browse profiles, discover complementary skills, and send skill swap requests — all centered around a clear, human-first core flow.  
This repository currently focuses on the **frontend MVP**, designed to validate the experience, core interactions, and value proposition before introducing a backend.

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
- Filter and search by skills and location  
- Send and cancel skill swap requests (simulated)  
- Local state reflects request status, pending actions, and disabled states  

### Not Included (Yet)

- Authentication  
- Real messaging or notifications  
- Persistent backend data  

---

## Simulated Backend Strategy

To mimic real-world behavior in a frontend-only environment, SkillSwap uses:

- **Random User API** for realistic profiles (names, photos, locations)  
- Static skill data for offerings and wants  
- Local state to track interactions (e.g., sent requests)  
- Optimistic UI patterns for instant feedback  

This approach allows testing:

- Core flows  
- UX clarity  
- Filtering and search logic  
- Edge cases and error handling  

---

## Core Features

### 1. Browse Skills

- Grid/list of user cards  
- Skill tags showing offerings and wants  
- Ratings and short bios for quick scanning  
- Pagination for large user sets  

### 2. Profile View

- Expanded bio and skill details  
- Skills offered vs skills requested  
- Call-to-action for sending a swap request  
- Pending and sent request indicators  

### 3. Skill Swap Request Flow

- Request Swap / Cancel buttons  
- Confirmation feedback via UI state  
- Disabled repeat actions once a request is sent  

### 4. Filtering & Search

- Search by skill name or user location  
- Filter by offered skills, categories, modes, or locations  
- Fast, responsive UI updates  

---

## APIs & Data Strategy

### Random User API — Profile Generation

Used to generate realistic user profiles with:

- Names  
- Photos  
- Location data  

This makes the interface feel human and avoids abstract placeholders, while allowing realistic UI testing.

### JSONPlaceholder — Simulated Requests

Used to simulate sending and canceling skill swap requests:

- `POST` to create a request  
- `DELETE` to cancel a request  

Supports realistic request states:

- Pending  
- Success  
- Disabled repeat actions  

---

## Tech Stack

- React  
- CSS / Modular styling  

Backend, authentication, and database will be added later.

---

## Future Enhancements

- Authentication & user accounts  
- Real-time messaging  
- Persistent skill swap requests  
- Notifications  
- Scheduling & availability  
- Reputation and trust signals  
- Dynamic backend integration  

---

## Status

**In Progress — Frontend MVP**  
Active


## Link ( https://skillswap-frontend-api.vercel.app )

SkillSwap — Learn together. Grow together.

## Video walkthrough link (https://www.loom.com/share/9535d4d37fe34f07a2226d31901060d0)
