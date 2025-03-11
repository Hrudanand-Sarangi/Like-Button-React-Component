# React + Vite

# ❤️ Like Button React Component

This project is a simple React component demonstrating the use of **state** and **props**. It includes a heart symbol that changes color when clicked, along with a counter that tracks the number of times it has been clicked.

## 🚀 Features
- Clickable **heart** symbol ❤️
- **State management** using React's `useState`
- **color change** on click & it will track  **counter**(number of likes)

## 🛠️ Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/like-button-app.git
   cd like-button-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## 📌 Code Explanation

### 1️⃣ The LikeButton Component:
```jsx
import React, { useState } from "react";

export default function LikeButton() {
    const [liked, setLiked] = useState
