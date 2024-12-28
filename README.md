# 🌟 **ShortifyPro: Generate Short URLs**

Welcome to **ShortifyPro**, the ultimate URL shortener! 🚀  
With an intuitive interface and robust features, ShortifyPro lets users create short, shareable URLs while tracking their click statistics.  

---

## ✨ **Features**

- 🔗 **Shorten long URLs** quickly and effortlessly.  
- 📊 **Track click statistics** for every URL.  
- 🔒 **User Authentication** to securely manage URLs.  
- 🎨 **Modern, responsive, and user-friendly UI**.  

---

## 🚀 **Getting Started**

Follow these steps to set up **ShortifyPro** on your local machine:  

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/TOHIDKHAN4844/ShortifyPro-Generate-Short-URL.git
```

### 2️⃣ **Navigate to the Project Directory**
```bash
cd ShortifyPro-Generate-Short-URL
```

### 3️⃣ **Install Dependencies**
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 4️⃣ **Set Up Environment Variables**
Create a `.env` file in the root directory and configure the following:
```env
MONGO_URI=mongodb://127.0.0.1:27017/shortifypro
PORT=8001
JWT_SECRET=your_jwt_secret_key
```

### 5️⃣ **Start the Server**
```bash
npm start
```

### 6️⃣ **Open in Your Browser**
Access the application at:
```bash
http://localhost:8001
```

---

## 📁 **Project Structure**

```
ShortifyPro-Generate-Short-URL/
├── controllers/         # Application logic for URLs and users
│   ├── url.js
│   └── user.js
├── middleware/          # Authentication middleware
│   └── auth.js
├── models/              # Database models
│   ├── url.js
│   └── user.js
├── routes/              # Application routes
│   ├── staticRouter.js
│   ├── url.js
│   └── user.js
├── service/             # Reusable service logic
│   └── auth.js
├── views/               # EJS templates for the frontend
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
├── node_modules/        # Project dependencies
├── connect.js           # MongoDB connection setup
├── index.js             # Main server entry point
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Dependency lock file
└── README.md            # Project documentation
```

---

## 📋 **Key API Endpoints**

| HTTP Method | Endpoint           | Description                         |
|-------------|--------------------|-------------------------------------|
| `POST`      | `/url`             | Generate a short URL                |
| `GET`       | `/url/:shortId`    | Redirect to the original URL        |
| `GET`       | `/`                | Home page with URL statistics       |
| `POST`      | `/user/login`      | User login                          |
| `POST`      | `/user/signup`     | User signup                         |

---

## 🛠️ **Technologies Used**

- **Node.js**: Backend runtime.
- **Express.js**: Framework for server-side routing.
- **EJS**: Templating engine for dynamic HTML pages.
- **MongoDB**: Database for storing URLs and user data.
- **JWT**: Secure user authentication with tokens.
- **CSS3**: Styling for a responsive and modern interface.

---

## 🎯 **Prerequisites**

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (running locally or on a cloud service)

---

## ✍️ **How to Contribute**

We ❤️ contributions! Follow these steps to contribute:

1. **Fork the Repository**
   ```bash
   git fork https://github.com/TOHIDKHAN4844/ShortifyPro-Generate-Short-URL.git
   ```

2. **Create a New Branch**
   ```bash
   git checkout -b feature-name
   ```

3. **Make Changes and Commit**
   ```bash
   git commit -m "Add: Your feature description"
   ```

4. **Push to Your Branch**
   ```bash
   git push origin feature-name
   ```

5. **Submit a Pull Request**
   Open a pull request on the main repository and wait for feedback. 🎉

---

## 🛡️ **Troubleshooting**

- If you encounter issues, ensure all dependencies are installed by running:
  ```bash
  npm install
  ```

- Double-check that you are running the server on the correct port: **8001**.

---

## 🌟 **Show Your Support**

If you find **ShortifyPro** helpful, please ⭐ the repository and share it with others! 😊

---

## 🤝 **Connect With Me**

- **GitHub**: [TOHIDKHAN4844](https://www.github.com/TOHIDKHAN4844)
- **LinkedIn**: [Tohid Khan](https://www.linkedin.com/in/tohid-khan-937509258/)

---

## 🛡️ **Made with ❤️ by Tohid Khan**
