import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const addStoryBtn = document.getElementById("addStoryBtn");
const storyTitle = document.getElementById("storyTitle");
const storyDesc = document.getElementById("storyDesc");
const storiesList = document.getElementById("storiesList");

// Add a story to Firestore
addStoryBtn.addEventListener("click", async () => {
  const title = storyTitle.value.trim();
  const desc = storyDesc.value.trim();
  if (!title) return alert("Title is required!");

  await addDoc(collection(db, "stories"), {
    title,
    description: desc,
    status: "draft",  // can change to "published" later
    createdAt: new Date()
  });

  storyTitle.value = "";
  storyDesc.value = "";

  loadStories();
});

// Load stories from Firestore
async function loadStories() {
  storiesList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "stories"));
  querySnapshot.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = `${doc.data().title} - ${doc.data().status}`;
    storiesList.appendChild(li);
  });
}

// Initial load
loadStories();