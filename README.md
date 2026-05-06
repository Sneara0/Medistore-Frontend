# 🏥 MediStore — Multi-Role Pharmacy Management System

> A secure and efficient platform designed to manage pharmacy operations, inventory, and sales with dedicated roles for Customers, Sellers, and Administrators.

---

## 📌 Problem Statement
Traditional pharmacy management often struggles with inventory tracking, unauthorized access to sensitive data, and a lack of clear distinction between user roles. MediStore solves this by providing a structured environment for managing medicines, orders, and users.

## 💡 Solution Overview
Built with **Next.js** and **Prisma**, MediStore implements a robust **Role-Based Access Control (RBAC)** system. It ensures that customers can browse and buy, sellers can manage stock, and admins can oversee the entire operation through a centralized dashboard.

## 🛠️ Tech Stack

| Category | Tools |
| :--- | :--- |
| **Framework** | `Next.js (App Router)` • `TypeScript` |
| **Database** | `PostgreSQL` • `Prisma ORM` |
| **Styling** | `Tailwind CSS` • `Shadcn UI` |
| **Auth** | `Next-Auth` / `JWT` |

## ✨ Key Features
- **🔐 Multi-Role Access (RBAC):** Distinct dashboards for Customer, Seller, and Admin.
- **📦 Inventory Management:** Sellers can add, update, and track medicine stock levels.
- **🛒 Seamless Checkout:** Integrated cart and order processing for customers.
- **📊 Admin Insights:** Comprehensive oversight of users, medicines, and transaction history.
- **🚀 Server-Side Rendering:** Optimized performance using Next.js Server Components.

## 📸 Project Preview
<p align="center">
  <img src="আপনার-ছবির-লিঙ্ক-এখানে" width="90%" alt="MediStore Preview" />
</p>

## Installation ⚙️

Clone the repo and install dependencies:

```bash
git clone [https://github.com/Sneara0/Medistore-Frontend.git](https://github.com/Sneara0/Medistore-Frontend.git)
cd Medistore-Frontend
npm install
DATABASE_URL="your_postgresql_url"
NEXTAUTH_SECRET="your_secret_key"
NEXT_PUBLIC_API_URL="your_backend_api_url"
