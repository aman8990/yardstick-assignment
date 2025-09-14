# 🗒️ Yardstick-Assignment(Notes App)

A modern, full-featured notes platform built with Next.js 15, offering secure user authentication, role-based access control, and streamlined administration. Only admins can add new users, while both admins and users can access, create, update, and delete notes within their own company’s workspace.

## 🚀 Live Demo

🔗 [Live Site](https://yardstick-assignment-tau.vercel.app/)

---

## ✋🏽 My Approach  

- 📅 **Supabase Database**: Leveraged Supabase as the primary database solution.  
- 📝 **Notes Table**: Enables users to perform CRUD operations restricted to notes within their own company.  
- 👥 **Users Table**: Stores company information and userId, with userId referencing `auth.users` for authentication.  
- 💵 **Premium Table**: Automatically populated with companies upon successful premium purchase via Stripe webhook.  
- 💳 **Payments Table**: Records payment transaction details, also handled through Stripe webhooks.

---

## 🛠️ Tech Stack

### Frontend:
- **Next.js 15 (App Router)**
- **React 19**
- **Tailwind CSS**

### Backend:
- **Next.js API Routes and Next.js Actions**
- **Supabase**

### Auth & Payments:
- **Supabase Auth(auth.users table used)**
- **Stripe (Client-side + Webhook integration)**

### Tools & Utilities:
- **Axios** – API requests    
- **React Icons** – Icon library  
- **React Hook Form** – Form management  
- **React Hot Toast** – Toast notifications

---

## 📂 Project Structure

```bash
project/
  ├── middleware.js        # Middleware for route protection (auth guard)

  app/
    ├── api/               # API endpoints (checkout, paymentInfo, webhook etc.)
    ├── _actions/          # Next.js Server Actions (login, notes, newUser, createPremium etc.)
    ├── _context/          # React Contexts (Toast context)
    ├── _components/       # Reusable UI components (buttons, input, header etc.)
    ├── _hooks/            # Custom hooks (useSession)
    ├── _libs/             # Core libraries (adminClient, server, middleware etc.)
    ├── (site)/            # App Homepage(Login Page)
    ├── notes/             # All Notes Page
    ├── addNewUser/        # Add New User Page (only accessibler to admins from resp. company)
    ├── upgrade/           # Upgrade Plan Page
    ├── account/           # User Info Page 
    ├── layout.js          # Root layout for the app
    ├── globals.css        # Global Tailwind styles
    └── not-found.js       # Custom 404 error page
```

---


# 🧪 Getting Started

Follow these steps to set up the project locally.

## 1. Clone the Repository

```bash
git clone https://github.com/aman8990/yardstick-assignment.git
cd yardstick-assignment
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Set Up Environment Variables

```bash

NEXT_PUBLIC_SUPABASE_URL=supabase_projecturl

NEXT_PUBLIC_SUPABASE_ANON_KEY=supabase_anon_key

NEXT_PUBLIC_SUPABASE_SERVICE_ROLE=aupabase_service_role_key

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_key

PROJECT_URL=project_url

```

## 4. Start Development Server

```bash
npm run dev
```

---
