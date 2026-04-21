# 🧠 Brainly Saver Extension

A lightweight Chrome Extension that lets you **save YouTube videos and Twitter posts directly to your Brainly (Second Brain) app** — without switching tabs.

---

## 🚀 What is this?

**Brainly Saver** is a browser extension built to make content saving effortless.

Instead of:

* copying links ❌
* opening your app ❌
* pasting manually ❌

You can now:

* click the extension ✅
* add a title ✅
* save instantly ✅

---

## 🎯 Purpose

This extension is designed to work with the **Brainly Web App** (your second brain project).

It helps you:

* 📌 Save useful YouTube videos
* 🐦 Save important Twitter posts
* 🧠 Organize knowledge in one place

---

## ⚡ Features

* One-click content saving
* Works on:

  * YouTube video pages
  * Twitter/X post pages
* Custom title input before saving
* Clean and minimal UI
* Direct integration with backend API



---

## 📦 Installation (Step-by-Step)

### 🔧 Enable Developer Mode

1. Open Chrome
2. Go to:

```text
chrome://extensions
```

3. Turn ON **Developer Mode** (top right corner)

---

### 📂 Load Extension

1. Click **"Load unpacked"**
2. Select the folder:

```text
brainly-extension/
```

3. Extension will be added to Chrome

---

## 🧪 How to Use

### ✅ Step 1 — Login via Extension

* Open the extension popup
* Enter your Brainly credentials
* Click **Login**

---

### ✅ Step 2 — Save Content

#### ▶️ YouTube

* Open any YouTube video
* Click the extension
* Enter a **title**
* Click **Save**

#### 🐦 Twitter (X)

* Open any tweet page
* Click the extension
* Enter a **title**
* Click **Save**

---

### ❌ Unsupported Pages

If you're not on:

* YouTube video page
* Twitter post page

👉 The extension will show:

> "Saving not supported on this page"

---

## 🔐 Authentication

* Uses JWT-based authentication
* Token stored securely in browser storage
* Login required only once

---

## ⚠️ Limitations

* Works only on:

  * YouTube video pages (not homepage)
  * Twitter post URLs (not feed)
* Requires backend to be running

---

## 🌐 Backend Requirement

Make sure your backend is deployed and accessible:

```env
https://your-backend-url.com
```

---

## 📁 Project Structure

```text
brainly-extension/
│── manifest.json
│── popup.html
│── popup.js
│── logo.png
```

---

## 🎨 UI Overview

* Minimal popup interface
* Title input field
* Save button
* Login support
* Error handling messages

---

## 🚀 Future Improvements

* Support for more platforms (LinkedIn, Reddit, etc.)
* Auto-detect content metadata
* Better UI/UX animations
* Sync with user dashboard in real-time

---

## 👨‍💻 Author

Built by **Harsh**

---

## ⭐ Support

If you like this project:

* Star the repo ⭐
* Share with others 🚀

---

## 📌 Final Note

This extension turns your browser into a **knowledge collection tool** — making your Brainly app truly powerful.


## 📄 License

This project is licensed under the MIT License.
