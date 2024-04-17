import {
    renderingTrending,
    renderingMyPosts,
} from "./modules/renderingPosts.js";
import { posts } from "./modules/posts.js";
import {
    registration,
    login,
    addNewPost,
    logout,
    loginStatusIsValid,
} from "./modules/eventHandling.js";

document.addEventListener("DOMContentLoaded", async () => {
    const backendUrl = `http://localhost:10000`;

    const localToken = localStorage.getItem("token");
    const account_id = await loginStatusIsValid(localToken, backendUrl);

    const trending = new posts(backendUrl, "/posts/trending");
    const myPosts = new posts(backendUrl, `/posts/account/${account_id}`);

    renderingTrending(trending);
    renderingMyPosts(myPosts);
    registration(backendUrl);
    login(backendUrl);
    addNewPost(backendUrl);
    logout();
});

document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        toggleCategory(button);
        updateConfirmButton();
    });
});

function toggleCategory(button) {
    button.classList.toggle('active');
}

function updateConfirmButton() {
    const buttons = document.querySelectorAll('.category-button');
    const confirmButton = document.getElementById('confirmSelection');
    const isActive = Array.from(buttons).some(button => button.classList.contains('active'));

    confirmButton.disabled = !isActive;
    confirmButton.classList.toggle('enabled', isActive);
    confirmButton.classList.toggle('disabled', !isActive);
}

function confirmSelection() {
    if (!document.getElementById('confirmSelection').classList.contains('disabled')) {
        alert('Selection confirmed!');
    }
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    alert('Search for: ' + searchTerm);
}
