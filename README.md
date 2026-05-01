# 🎓 Online Course Cart Application

A simple and user-friendly online course browsing and cart system built with **Next.js (App Router), TypeScript, Redux Toolkit, and Tailwind CSS**.

This project was developed as part of the **Nexist Fullstack Support Engineer technical assessment**. The main goal was to solve a real user problem where cart items disappear after page refresh and improve the overall user experience.

Users can browse courses, add them to a cart, remove selections, and keep their cart data saved even after refreshing the page.

The focus of this project is to make the cart behavior reliable, predictable, and easy to understand, especially for non-technical users.

---
>***This project was built based on a real-world scenario provided in the **NEXIST** technical assessment.***
---

## 🚀 Features

- Browse available online courses
- Add courses to the cart
- Remove courses from the cart
- Persist cart data after page refresh
- Prevent duplicate course selection
- Show clear visual feedback for added courses
- Display total selected courses and total price
- Clear cart with confirmation

## 🔗 Live Demo

### 🎥 Video Explanation

[Watch Loom Video](https://www.loom.com/share/c07faf21e7634986b2863ce7e09a6249)

This video explains the problem, solution approach, and user experience improvements step by step.

### ✅ Improved Version

[View Improved Version](https://nexist-cart-assessment.vercel.app/)

### ⚠️ Problematic Version

[View Problematic Version](https://nexist-cart-problem-scenario.vercel.app/)

The problematic version shows the original issue where cart items disappear after refreshing the page.

## 🧩 Problem Statement

A user reported:

> “When I refresh the page, my selected items disappear. Also, I don’t understand how to use the feature properly.”

## ⚠️ Key Issues

- Cart data was not persistent and got lost after refresh  
- Cart state was stored only in memory (Redux)  
- Users lost selected items after page reload  
- UI did not clearly indicate what was happening  
- Lack of feedback after user actions  
- Duplicate item handling needed improvement


---

## ✅ Solution Overview

The solution focuses on two main areas:

- Fixing cart data persistence  
- Improving user experience


## 🔄 Fixing Cart Data Loss

Previously, cart data was stored only in Redux state, which resets on page refresh.

To fix this:

- Cart data is saved in **localStorage**  
- Saved data is loaded when the application starts  
- Redux state is updated using the stored data  

This ensures users do not lose their selected items after refreshing the page.

### ⚙️ How It Works

1. User adds a course  
2. Cart updates in Redux  
3. Data is saved to localStorage  
4. User refreshes the page  
5. Data is loaded from localStorage  
6. Cart is restored

## 🔒 Duplicate Prevention

To prevent adding the same item multiple times:

- Disabled the **Add to Cart** button for already added items  
- Checked existing item IDs in Redux state before adding  

**Why this matters?**

- Prevents duplicate entries in the cart  
- Keeps cart data clean and consistent  
- Improves user experience by avoiding confusion


## 🎨 User Experience Improvements

- Clear empty cart message to guide users  
- Visual feedback for actions (button state, toast notifications)  
- Cart summary showing total items and total price  
- Confirmation before clearing the cart  
- Improved layout and overall UI clarity

---
## 🧠 Design Decisions

### 1. Storing Only Course IDs in Cart

- Stored only **course IDs** instead of full objects  
- Derived full course details from the main data source  

**Why?**

- Avoids duplicating data  
- Keeps localStorage lightweight  
- Simplifies state management  
- Makes the system more scalable  

### 2. Using Redux Toolkit

- Used **Redux Toolkit** for centralized state management  

**Why?**

- Provides predictable state updates  
- Makes cart state easier to manage across components  
- Improves maintainability  

### 3. Using localStorage for Persistence

- Used **localStorage** instead of backend storage  

**Why?**

- Simple and quick to implement  
- No backend required for this use case  
- Suitable for small-scale applications  
---
## 🛠️ Tech Stack

**Frontend**
- Next.js  
- React  
- TypeScript  

**State Management**
- Redux Toolkit  

**Styling**
- Tailwind CSS  

**Storage**
- localStorage

## 📁 Folder Structure

```bash
.
├── public/                    # Static assets (images, etc.)

├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── globals.css
│   │   ├── icon.png
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Cart.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   └── ProductList.tsx
│   │
│   ├── data/                  # Static product data
│   │   └── products.ts
│   │
│   ├── providers/             # Global providers (Redux)
│   │   └── ReduxProvider.tsx
│   │
│   ├── redux/                 # Redux store & features
│   │   ├── features/
│   │   │   └── cart/
│   │   │       └── cartSlice.ts
│   │   └── store.ts
│   │
│   └── types/                 # TypeScript types
│       └── product.ts
│
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
└── README.md

```

---

## 🧪 End-to-End Testing

Tested the application from a real user perspective.

### Issue 1: Cart Data Loss
- Problem: Cart items disappeared after refresh  
- Fix: Implemented localStorage persistence  

### Issue 2: Duplicate Item Attempt
- Problem: Users could try adding the same course multiple times  
- Fix: Disabled button + added state-level validation  

### Issue 3: Empty Cart Confusion
- Problem: Empty cart was unclear  
- Fix: Added a clear empty state message  

These improvements ensure a smoother and more understandable user experience.

---

## 🔄 User Flow

- User browses available courses  
- Adds a course to the cart  
- Sees instant feedback  
- Views selected courses in the cart  
- Refreshes the page without losing data  
- Removes or clears courses when needed

## 👀 For Non-Technical Users

This application is designed to be simple and easy to use.

Users don’t need to understand how the system works internally.  
They can just:

- Click "Add to Cart" to select a course  
- See confirmation instantly after adding  
- View all selected courses in one place  
- Refresh the page without losing anything  
- Remove or clear items anytime  

Everything works in a straightforward and predictable way, so users always know what is happening.

## 🚀 Future Improvements

- Add course search and filtering  
- Add authentication system  
- Sync cart with backend  
- Improve animations and interactions

---

## 👤 Author

**Nazmun Nahar Moon**

- GitHub: https://github.com/NaharMoon  
- LinkedIn: https://www.linkedin.com/in/nahar-moon  
