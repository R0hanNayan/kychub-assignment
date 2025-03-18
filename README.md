# KycHub Front End Assignment

## 🚀 Overview
This project is a **React-based** web application that provides a **Product Details Table** and a **Compare Products Page** using **Ant Design**. Users can view product details, compare multiple products side-by-side, and interact with a responsive UI.

## 🏗 Features
- **Navbar & Sidebar Navigation**
  - Navbar with a logo and user profile picture.
  - Sidebar with navigation links to:
    - **Product Details Page** (default landing page)
    - **Compare Products Page**
- **Product Details Table**
  - Fetches data from [DummyJSON API](https://dummyjson.com/products).
  - Displays key product attributes in a paginated and sortable table.
  - "Compare" button to add products to the comparison list.
  - Highlights attributes of compared products.
  - Disables "Compare" button for already added products.
- **Compare Products Page**
  - Displays a **side-by-side product comparison table**.
  - Includes attributes such as **Title, Description, Price, Discount %, Brand, Category, and Image**.
  - Option to remove products from comparison.
  - "Add More" button opens a **modal** to select more products for comparison (max 4 at a time).
  - Prevents adding duplicate products.
- **Routing & Deployment**
  - Implemented using **React Router** for smooth navigation.
  - Hosted on **Vercel**

## 🛠 Tech Stack
- **Frontend:** React.js, Ant Design
- **State Management:** React Hooks (useState, useEffect, useContext)
- **Routing:** React Router
- **Deployment:** Netlify / Heroku


## 🚀 Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/R0hanNayan/kychub-assignment.git
   cd kyc-hub-frontend
   ```
2. **Install dependencies**
  ```sh
  npm install
  ```
3. **Run the development server**
  ```sh
  npm start
  ```
