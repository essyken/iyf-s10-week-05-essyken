// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Create Todo Element
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = todo.id;

    if (todo.completed) {
        li.classList.add("completed");
    }

    li.innerHTML = `
        <span class="toggle">${todo.text}</span>
        <button class="delete">X</button>
    `;

    return li;
}

// Render Todos
function renderTodos() {
    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });

    updateStats();
}

// Add Todo
function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    renderTodos();
}

// Toggle Todo
function toggleTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
    }
}

// Delete Todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// Update Stats
function updateStats() {
    const activeCount = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
}

// Filter Todos
function filterTodos(filter) {
    currentFilter = filter;
    renderTodos();
}

// Event Listeners

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text) {
        addTodo(text);
        input.value = "";
    }
});

todoList.addEventListener("click", function(event) {
    const target = event.target;
    const item = target.closest(".todo-item");

    if (!item) return;

    const id = parseInt(item.dataset.id);

    if (target.classList.contains("toggle")) {
        toggleTodo(id);
    } else if (target.classList.contains("delete")) {
        deleteTodo(id);
    }
});

filters.forEach(filter => {
    filter.addEventListener("click", function() {
        filterTodos(this.dataset.filter);
    });
});

clearCompletedBtn.addEventListener("click", function() {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

// Initial render
renderTodos();