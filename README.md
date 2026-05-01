# 🛒 Product Cart Application

A clean and user-focused product cart application built with **Next.js (App Router), TypeScript, and Redux Toolkit**.

This project was developed as part of a technical assessment to solve a real user problem, **"cart data disappearing after page refresh"**. The solution ensures reliable state persistence using **localStorage**, prevents duplicate product entries, and improves usability through clear feedback and intuitive UI behavior.

The goal is to make the cart **consistent, reliable, and easy to understand for non-technical users**.

## 🚀 Features

- Browse products easily  
- Add items to cart  
- Remove items from cart  
- Cart data persists after page refresh  
- View total items and total price  
- Clear cart with confirmation  
- Visual feedback for user actions (button state & notifications)


## 🧩 Problem Statement

A user reported:

> “When I refresh the page, my selected items disappear. Also, I don’t understand how to use the feature properly.”

### Key Issues

- Cart data was not persistent and got lost after refresh  
- The user interface did not provide enough guidance or feedback


## ✅ Solution Approach

To address the issues, I focused on two key areas: data persistence and user experience.

### ✔️ Fixing Cart Data Loss

- Stored cart data in **localStorage**  
- Synced Redux state with localStorage  
- Loaded saved cart data when the app initializes  

This ensures that users do not lose their cart items after refreshing the page.

---

### ✔️ Improving User Experience

- Added a clear empty cart message  
- Provided visual feedback for actions (button state & notifications)  
- Displayed cart summary (total items and price)  
- Added confirmation before clearing the cart  

These improvements make the application more intuitive and user-friendly.

---

## 🧠 Design Decisions

- Stored only **product IDs** in the cart instead of full product objects  
- Derived complete product details from the main product list  

**Why this approach?**

- Avoids duplicating data in storage  
- Keeps localStorage lightweight and efficient  
- Makes state management simpler and cleaner  
- Improves scalability for larger datasets  

---

- Used **Redux Toolkit** for centralized state management  

**Why Redux?**

- Provides predictable state updates  
- Makes cart state easier to manage across components  
- Improves maintainability as the app grows  

---

- Used **localStorage** for persistence instead of backend storage  

**Why localStorage?**

- Simple and quick to implement  
- No backend required for this use case  
- Sufficient for small-scale applications

---

## 🔒 Duplicate Product Prevention

To prevent adding the same product multiple times:

- Disabled the "Add to Cart" button for already added items  
- Checked existing product IDs in Redux state before adding  

**Why this matters?**

- Prevents duplicate entries in the cart  
- Keeps cart data clean and consistent  
- Improves user experience by avoiding confusion  


## 🛠️ Tech Stack

**Frontend:**  
- Next.js  
- React.js  
- TypeScript  

**State Management:**  
- Redux Toolkit  

**Styling:**  
- Tailwind CSS  

**Storage:**  
- localStorage


## 📁 Project Structure

```bash
.
├── public/
│
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/             # UI components
│   │   ├── Cart.tsx
│   │   └── ProductList.tsx
│   │
│   ├── data/                   # Static product data
│   │   └── products.ts
│   │
│   ├── providers/              # Redux provider setup
│   │   └── ReduxProvider.tsx
│   │
│   ├── redux/                  # Redux store & features
│   │   ├── features/
│   │   └── store.ts
│   │
│   ├── types/                  # TypeScript types
│   │   └── product.ts
│
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── README.md

```
---
## ⚙️ Installation & Setup


### 1. Clone the repository
```bash
git clone https://github.com/NaharMoon/NEXIST-cart-assessment.git
cd NEXIST-cart-assessment
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

## 🔄 How It Works

1. User adds a product → Redux state updates  
2. Updated cart data is saved to **localStorage**  
3. On page reload → data is retrieved from localStorage  
4. Redux store is rehydrated with saved cart data  

This ensures that the cart remains consistent even after refreshing the page.

---

## 🧪 End-to-End Testing & Observations

Tested the application from a real user perspective and identified the following:

### ✔️ Issue 1: Duplicate Add Attempt
- Users could try adding the same item multiple times  
- **Fix:** Disabled the button and added state-level validation  

### ✔️ Issue 2: Empty Cart Confusion
- Users were unsure what to do when the cart was empty  
- **Fix:** Added a clear empty cart message with guidance  

These improvements ensure a smoother and more intuitive user experience.

## 🎯 User Experience Highlights

- Clear empty cart message to guide users  
- Instant visual feedback on actions (button state & notifications)  
- Disabled state for already added items  
- Cart summary showing total items and total price  
- Confirmation prompt before clearing the cart  

These improvements make the application more intuitive and user-friendly.

---

## 👤 How a Non-Technical User Uses This

- Browse products and click "Add to Cart"  
- See instant feedback when an item is added  
- View selected items in the cart section  
- Refresh the page without losing cart data  
- Remove items easily when needed  

The application is designed to be simple and self-explanatory, even for non-technical users.

## 📌 Future Improvements

- Add quantity control for each product  
- Sync cart with backend for logged-in users  
- Implement authentication system  
- Add product filtering and search functionality  
- Improve animations and overall UI interactions

## 📷 Demo
<!--### 🔗 Live Demo-->

- [Live Site](https://nexist-cart-assessment.vercel.app/)
<!--_Add screenshots or a short screen recording of the application here_-->

<!-- Example:
![App Screenshot](./screenshots/demo.png)
-->

## 🙌 Author

**Nazmun Nahar Moon**  
Full-Stack Developer (MERN) 

- GitHub: https://github.com/NaharMoon  
- LinkedIn: https://www.linkedin.com/in/nahar-moon  
