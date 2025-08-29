
// Declaring variables using different keywords
let currentTheme = 'light';
const themeButton = document.getElementById('theme-button');
const mainHeading = document.getElementById('main-heading');
var statusMessage = document.getElementById('status-message');

// A conditional statement to check the initial theme
if (currentTheme === 'light') {
    console.log("The page is currently in light mode.");
} else {
    console.log("The page is currently in dark mode.");
}

// Function to generate a greeting based on the current time
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
        return "Good Morning! ☀️";
    } else if (hour < 18) {
        return "Good Afternoon! 👋";
    } else {
        return "Good Evening! 🌙";
    }
}

// Function to toggle the theme of the page
function toggleTheme() {
    // DOM Interaction #1: Toggling a class on the body
    document.body.classList.toggle('dark-theme');
    
    // Update the heading text based on the new theme
    if (document.body.classList.contains('dark-theme')) {
        mainHeading.textContent = "Night Mode Activated! 🌙";
        statusMessage.textContent = "You've switched to the dark side!";
        console.log("Theme switched to dark.");
    } else {
        mainHeading.textContent = "Hello, World! ✨";
        statusMessage.textContent = "Back to the light!";
        console.log("Theme switched to light.");
    }
}


// For Loop: Used to iterate a fixed number of times
console.log("Counting to 5 with a for loop:");
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

// Array of users
const users = ["Alice", "Bob", "Charlie", "Diana"];
const userList = document.getElementById('user-list');

// For...of Loop: Used to iterate over the elements of an array
console.log("\nListing users with a for...of loop:");
for (const user of users) {
    // DOM Interaction #2: Creating and appending new elements
    const listItem = document.createElement('li');
    listItem.textContent = user;
    userList.appendChild(listItem);
    console.log(user);
}

// DOM Interaction #3: Adding an event listener to the button
themeButton.addEventListener('click', toggleTheme);

// DOM Interaction #4: Changing text content dynamically
mainHeading.textContent = getGreeting();
