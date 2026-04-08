# 🚀 Cloud File Upload & Secure Sharing System

A production-inspired backend system that enables **secure, scalable, and temporary file sharing** using cloud-native architecture.

---

## 🔥 Overview

This project demonstrates how modern applications handle file uploads **without routing files through the backend server**, ensuring:

* ⚡ High performance
* 🔒 Secure access
* 📈 Scalability

Instead of uploading files directly to the backend, the system uses **AWS S3 pre-signed URLs** for efficient and secure file handling.

---

## 🧠 Architecture

```
Client → Backend (Node.js API)
        → Generates Pre-Signed URL
        → Client uploads directly to AWS S3
        → Backend generates temporary download URL
```

---

## ✨ Features

* 🔐 Secure file upload using **AWS S3**
* ⚡ Direct upload (no backend load)
* ⏱️ Temporary download links (auto-expiry)
* 📁 Unique file naming system
* 🛡️ No sensitive credentials exposed to client
* ♻️ Lifecycle-ready (auto deletion support)

---

## 🛠️ Tech Stack

| Technology | Purpose                  |
| ---------- | ------------------------ |
| Node.js    | Backend runtime          |
| Express.js | API handling             |
| AWS S3     | Cloud storage            |
| AWS SDK v3 | Secure cloud integration |
| Postman    | API testing              |

---

## 📡 API Endpoints

### 🔹 Generate Upload URL

```http
GET /upload-url
```

**Response:**

```json
{
  "uploadUrl": "https://...",
  "fileName": "uploads/xxxx.jpg"
}
```

---

### 🔹 Generate Download URL

```http
GET /download-url?fileName=uploads/xxxx.jpg
```

**Response:**

```json
{
  "downloadUrl": "https://..."
}
```

---

## ⚙️ How It Works

1. Client requests upload URL
2. Backend generates **pre-signed S3 URL**
3. Client uploads file directly to S3
4. Backend generates secure download link
5. Link expires after defined time

---

## 🔐 Security Highlights

* No direct file handling on backend
* Temporary access via signed URLs
* Credentials stored securely in `.env`
* Prevents unauthorized file access

---

## 📸 Screenshots

> Add here:

* Upload success (200 OK)
* S3 bucket file view
* Download link working

---

## ⚠️ Environment Variables

Create a `.env` file:

```env
ACCESS_KEY=your_access_key
SECRET_KEY=your_secret_key
BUCKET_NAME=your_bucket_name
```

---

## 🚀 Run Locally

```bash
npm install
node index.js
```

---

## 💡 Key Learnings

* Pre-signed URL workflow
* Secure cloud file handling
* Backend optimization techniques
* AWS S3 integration

---

## 📌 Future Improvements

* Authentication (JWT)
* File type validation
* Upload size limits
* UI frontend integration
* Deployment (EC2 / Render)

---

## 👨‍💻 Author

**Vinay Rai**

---

## ⭐ Final Note

This project reflects a **real-world backend pattern used in scalable systems**, focusing on performance, security, and cloud best practices.
