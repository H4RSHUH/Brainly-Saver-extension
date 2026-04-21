const BACKEND_URL = "https://brainly-teqr.onrender.com";

const loginSection = document.getElementById("loginSection");
const appSection = document.getElementById("appSection");
const warning = document.getElementById("warning");
const noteTitle = document.getElementById("noteTitle");

// 🔐 Check login
chrome.storage.local.get(["token"], (res) => {
  if (res.token) {
    showApp();
  }
});

// 🔑 Login
document.getElementById("loginBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${BACKEND_URL}/api/v1/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (!data.token) {
    alert("Login failed");
    return;
  }

  chrome.storage.local.set({ token: data.token });
  showApp();
});

// 🚀 Save content
document.getElementById("saveBtn").addEventListener("click", async () => {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  const tab = tabs[0];
  if (!tab || !tab.url) return;

  const url = tab.url;
  let type = "";

  // detect platform
  // 🎯 strict detection
    if (url.includes("youtube.com/watch")) {
    type = "youtube";
    } 
    else if (
    (url.includes("twitter.com") || url.includes("x.com")) &&
    url.includes("/status/")
    ) {
    type = "twitter";
    } 
    else {
    alert("❌ Only YouTube videos & Tweets are supported");
    return;
    }

  const title = noteTitle.value;

  if (!title) {
    alert("Please enter a title");
    return;
  }

  chrome.storage.local.get(["token"], async (res) => {
    const token = res.token;

    if (!token) {
      alert("Please login first!");
      return;
    }

    try {
      await fetch(`${BACKEND_URL}/api/v1/content`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({
          title,
          link: url,
          type
        })
      });

      alert("Saved successfully!");
      noteTitle.value = "";
    } catch (err) {
      alert("Error saving content");
    }
  });
});

// 🚪 Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  chrome.storage.local.remove("token");
  loginSection.style.display = "block";
  appSection.style.display = "none";
});

// 🧠 UI Setup
function showApp() {
  loginSection.style.display = "none";
  appSection.style.display = "block";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    if (!tab || !tab.url) return;

    const url = tab.url;

    // Always show input ONLY for supported platforms
    if (
      url.includes("youtube.com") ||
      url.includes("twitter.com") ||
      url.includes("x.com")
    ) {
      noteTitle.style.display = "block";
      warning.innerText = "Enter a title before saving";
    } else {
      noteTitle.style.display = "none";
      warning.innerText = "❌ Only YouTube & Twitter supported";
    }
  });
}