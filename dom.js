// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

//practice-select these elements
//h1 element
consth1 = document.querySelector("h1");
console.log("h1 element:", h1);

//All elements with class "content"
const contentElements = document.querySelectorAll(".content");
console.log("Elements with class 'content':", contentElements);

// The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("Form with id 'contact-form':", contactForm);

// The email input
const email Input = document.querySelector("#contact-form input[name='email']");
console.log("Email input:", emailInput);

// all list items in the nav
const navItems = document.querySelectorAll(".nav-link");
console.log("List items in nav:", navItems);

//The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First .nav-link:", firstNavLink);

//The last paragraph
const lastParagraph = document.querySelector("p:last-of-type");
console.log("Last paragraph:", lastParagraph);

//Traversing the DOM 
//DOM navigation

constnav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);          // header

// Children
console.log(nav.children);               // HTMLCollection
console.log(nav.firstElementChild);      // ul
console.log(nav.lastElementChild);       // ul

// Siblings
constarticle = document.querySelector("article");
console.log(article.nextElementSibling);     // section
console.log(article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");  // all links inside nav
console.log(navLinks);

//Practice task
//Select the header, then navigate to the nav inside it
const headerElement = document.querySelector("header");
const navInsideHeader = headerElement.querySelector("nav");
console.log("Nav inside header:", navInsideHeader); 

//Select the first nav-link, then get its parent li
const firstNavLink2 = document.querySelector(".nav-link");
const parentLi = firstNavLink2.parentElement;
console.log("Parent li of first nav-link:", parentLi);

//Select the article, then get its next sibling (section)
const articleElement = document.querySelector("article");
const nextSibling = articleElement.nextElementSibling;
console.log("Next sibling of article:", nextSibling);

//Select the ul, then get all its child li elements
const ulElement = document.querySelector("nav ul");
const liElements = ulElement.children;
console.log("Child li elements of ul:", liElements);

//Start from the footer and navigate up to the body
const footerElement = document.querySelector("footer");
const bodyElement = footerElement.parentElement;
console.log("Body element from footer:", bodyElement);

//Modifying Content
// exercise 1-text content
const h1 = document.querySelector("h1");

// Reading text
console.log(h1.textContent);     // Includes hidden text
console.log(h1.innerText);       // Only visible text

// Modifying text
h1.textContent = "New Title";

//Exercise 2: HTML Content
constarticle = document.querySelector("article");

// Reading HTML
console.log(article.innerHTML);

// Modifying HTML (careful with security!)
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Safer: textContent (escapes HTML)
const userInput = "<script>alert('hack!')</script>";
article.textContent = userInput;  // Displays as text, not executed

//Exercise 3: Attributes
const link = document.querySelector(".nav-link");

// Get attribute
console.log(link.getAttribute("href"));
console.log(link.href);  // Property access

// Set attribute
link.setAttribute("href", "https://example.com");
link.href = "https://example.com";  // Same result

// Check attribute
console.log(link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes
// <element data-id="123" data-category="tech">
const element = document.querySelector("[data-id]");
console.log(element.dataset.id);        // "123"
console.log(element.dataset.category);  // "tech"
element.dataset.newAttr = "value";      // Creates data-new-attr

//Exercise 4: Styles
const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles (use classes instead when possible!)
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

//Task 9.4: Adding & Removing Elements 
//Exercise 1: Creating Elements
// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
const article = document.querySelector("article");
article.appendChild(newParagraph);  // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);  // Add before first p

// Modern insertion methods
article.prepend(newParagraph);         // First child
article.append(newParagraph);          // Last child
firstParagraph.before(newParagraph);   // Before sibling
firstParagraph.after(newParagraph);    // After sibling

//Exercise 2: Removing Elements
// Remove an element
const footer = document.querySelector("footer");
footer.remove();

// Remove child
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

// Clear all children
article.innerHTML = "";  // Simple but rebuilds DOM
// OR
while (article.firstChild) {
    article.removeChild(article.firstChild);
}

//cloning elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

//Build: Create a function that adds a new nav item dynamically:
function addNavItem(text, href) {
    // Create li with a.nav-link inside
      // Add to the nav list
 }

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

//Task 10.2: The Event Object
//Using Event Properties
ocument.addEventListener("click", function(event) {
    // The element that was clicked
    console.log("Target:", event.target);
    
    // The element the listener is attached to
    console.log("Current Target:", event.currentTarget);
    
    // Event type
    console.log("Type:", event.type);
    
    // Mouse position
    console.log("Position:", event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop propagation (bubbling)
    event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);       // "a", "Enter", "Escape"
    console.log("Code:", event.code);     // "KeyA", "Enter", "Escape"
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});


//Keyboard shortcuts
// Select the form and inputs
const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input");

// Listen for keydown on the whole document
document.addEventListener("keydown", function (e) {

    // Ctrl + S → Show alert and prevent browser save dialog
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault(); // stops browser "Save Page"
        alert("Saved!");
    }

    // Escape → Clear all form inputs
    if (e.key === "Escape") {
        inputs.forEach(input => {
            input.value = "";
        });
    }

    // Ctrl + Enter → Submit form
    if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault(); // optional (prevents unexpected behavior)
        form.submit(); // triggers form submission
    }

});

//Task 10.3: Event Bubbling & Delegation
//Exercise 1: Understanding Bubbling
<div id="grandparent">  
    Grandparent
    <div id="parent">
        Parent
        <div id="child">
            Child
        </div>
    </div>
</div>

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Click on Child - what order do the logs appear?
// Answer: Child → Parent → Grandparent (bubbling up)

//Exercise 2: Event Delegation
// BAD: Adding listeners to each item
const items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
// Problem: New items won't have the listener!

// GOOD: Delegate to parent
document.querySelector("ul").addEventListener("click", function(event) {
    // Check if clicked element is an li
    if (event.target.matches("li")) {
        handleClick(event);
    }
    
    // Or check for a class
    if (event.target.classList.contains("item")) {
        handleClick(event);
    }
});

//Build: Delegated Task List Create a task list where:
    //Clicking a task toggles "completed" class
   // Clicking a delete button removes the item
    //New tasks can be added
    //Use ONE event listener on the parent ul
const taskList = document.getElementById("task-list");
const addBtn = document.getElementById("add-task");
const input = document.getElementById("task-input");


// Add new task
addBtn.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    taskList.appendChild(li);
    input.value = "";
});


// ONE event listener on parent (event delegation)
taskList.addEventListener("click", function (e) {

    // If delete button clicked
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }

    // If task text clicked → toggle completed
    if (e.target.classList.contains("task-text")) {
        e.target.classList.toggle("completed");
    }

});

//Task 10.4: Form Handling
//Exercise: Complete Form Validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Real-time validation
nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop form from submitting
    
    // Get all form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log("Form data:", data);
    
    // Validate all fields
    if (isValid(data)) {
        // Submit via fetch or show success
        showSuccess("Form submitted successfully!");
        form.reset();
    }
});

function showError(input, message) {
    // Add error styling and message
    input.classList.add("error");
    // Create or update error message element
}

function clearError(input) {
    input.classList.remove("error");
    // Remove error message
}

//Mini-Project: Interactive To-Do List
//Build a fully functional to-do list application.