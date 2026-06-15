# CHAMP AI 🎓 — AI Course Builder

> Create professional courses in minutes, not months — powered by AI

![CHAMP AI Banner](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## 🔗 Live Demo
**[👉 Try it live](https://ai-course-builder-gamma.vercel.app)**

---

## 📌 What is CHAMP AI?

CHAMP AI is a full-stack AI-powered web application that generates complete, structured courses on any topic in minutes. Simply enter a topic, and the AI creates a full course with chapters, detailed content, and curated YouTube videos — all saved to your personal dashboard.

---

## ✨ Features

- 🤖 **AI Course Generation** — Enter any topic and get a fully structured course instantly
- 📚 **Chapter Content** — Each chapter has detailed explanations and code examples
- 🎥 **YouTube Integration** — Automatically finds and attaches relevant videos to each chapter
- 🔐 **Authentication** — Secure sign-in with Google via Clerk
- 💾 **Personal Dashboard** — All your courses saved and accessible anytime
- 📱 **Responsive Design** — Works beautifully on desktop and mobile
- ⚡ **Fast & Free** — Built on free-tier services, no credit card required

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | Full-stack framework (frontend + backend) |
| **React** | UI components |
| **TailwindCSS** | Styling |
| **Clerk** | Authentication (Google login) |
| **Groq API (Llama 3.3)** | AI course generation |
| **YouTube Data API v3** | Video integration per chapter |
| **Drizzle ORM** | Database queries |
| **Neon (PostgreSQL)** | Cloud database |
| **Vercel** | Deployment & hosting |

---

## 🏗️ Architecture

```
User Input (Topic + Level)
        ↓
Clerk Authentication
        ↓
Groq AI (Llama 3.3-70b)
        ↓
Structured JSON Course Layout
        ↓
Chapter Content Generation (AI)
        ↓
YouTube API (Video per chapter)
        ↓
Neon PostgreSQL (Save to DB)
        ↓
Dashboard (Display courses)
```

---

## 📂 Project Structure

```
├── app/
│   ├── (auth)/          # Sign-in & Sign-up pages
│   ├── dashboard/       # User dashboard
│   ├── create-course/   # Course creation flow
│   └── course/          # Course viewer
├── configs/
│   ├── AiModel.js       # Groq AI integration
│   ├── db.js            # Database connection
│   └── schema.js        # Database schema
├── components/          # Reusable UI components
└── public/              # Static assets
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/sumanthkanupuri24-cloud/ai-course-builder.git
cd ai-course-builder

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your API keys (see below)

# Push database schema
npm run db:push

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file with the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key
YOUTUBE_API_KEY=your_youtube_api_key
NEXT_PUBLIC_DB_CONNECTION_STRING=your_neon_connection_string
```

### API Keys Required
| Service | Get it at |
|---------|-----------|
| Clerk | [clerk.com](https://clerk.com) |
| Groq | [console.groq.com](https://console.groq.com) |
| YouTube Data API | [console.cloud.google.com](https://console.cloud.google.com) |
| Neon Database | [neon.tech](https://neon.tech) |

---

## 📸 Screenshots

### Landing Page
> Clean, professional landing page with AI-powered course creation

### Dashboard
> Personal dashboard showing all your generated courses

### Course Creation
> AI generates complete course structure with chapters and durations

### Course Viewer
> Chapter-by-chapter view with YouTube videos and detailed content

---

## 🧠 Key Learnings

Building this project taught me:

- **Prompt Engineering** — Structuring AI prompts to return predictable JSON output
- **Full-Stack Development** — Combining frontend, backend, AI, and database in one project
- **API Integration** — Working with Groq, YouTube, and Clerk APIs simultaneously
- **Database Design** — Designing schemas with Drizzle ORM and PostgreSQL
- **Authentication** — Implementing secure auth with protected routes and per-user data

---

## 🙌 Credits

- Base project inspired by [varun442/AI-Course-Generator](https://github.com/varun442/AI-Course-Generator)
- AI powered by [Groq](https://groq.com) (Llama 3.3-70b)
- Deployed on [Vercel](https://vercel.com)

---

## 📄 License

MIT License — feel free to use this project for learning and portfolio purposes.

---

<p align="center">Built with ❤️ by <a href="https://github.com/sumanthkanupuri24-cloud">Sumanth Kanupuri</a></p>
