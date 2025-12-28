/**
 * TODO APP - OOP bilan Todo List Loyihasi
 * 
 * Bu loyiha OOP prinsiplaridan foydalanib professional todo list yaratadi
 */


// 1. Todo Item Class


class TodoItem {
    constructor(id, title, description = "", priority = "medium") {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority; // low, medium, high
        this.completed = false;
        this.createdAt = new Date();
        this.completedAt = null;
    }
    
    // Todo'ni bajarilgan deb belgilash
    complete() {
        this.completed = true;
        this.completedAt = new Date();
    }
    
    // Todo'ni qayta ochish
    uncomplete() {
        this.completed = false;
        this.completedAt = null;
    }
    
    // Todo'ni yangilash
    update(title, description, priority) {
        if (title) this.title = title;
        if (description !== undefined) this.description = description;
        if (priority) this.priority = priority;
    }
    
    // Todo ma'lumotlarini olish
    getInfo() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            priority: this.priority,
            completed: this.completed,
            createdAt: this.createdAt,
            completedAt: this.completedAt
        };
    }
    
    // Priority rangini olish
    getPriorityColor() {
        const colors = {
            low: "#4CAF50",
            medium: "#FF9800",
            high: "#F44336"
        };
        return colors[this.priority] || colors.medium;
    }
}


// 2. Todo Manager Class


class TodoManager {
    constructor() {
        this.todos = [];
        this.nextId = 1;
        this.filters = {
            showCompleted: true,
            showIncomplete: true,
            priority: null
        };
    }
    
    // Yangi todo qo'shish
    addTodo(title, description = "", priority = "medium") {
        if (!title || title.trim().length === 0) {
            throw new Error("Todo title bo'sh bo'lishi mumkin emas");
        }
        
        const todo = new TodoItem(this.nextId++, title.trim(), description, priority);
        this.todos.push(todo);
        return todo;
    }
    
    // Todo'ni o'chirish
    deleteTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            const deleted = this.todos.splice(index, 1)[0];
            return deleted;
        }
        return null;
    }
    
    // Todo'ni topish
    getTodo(id) {
        return this.todos.find(todo => todo.id === id) || null;
    }
    
    // Barcha todo'larni olish
    getAllTodos() {
        return [...this.todos];
    }
    
    // Filtrlangan todo'larni olish
    getFilteredTodos() {
        return this.todos.filter(todo => {
            // Completed filter
            if (!this.filters.showCompleted && todo.completed) return false;
            if (!this.filters.showIncomplete && !todo.completed) return false;
            
            // Priority filter
            if (this.filters.priority && todo.priority !== this.filters.priority) {
                return false;
            }
            
            return true;
        });
    }
    
    // Filter sozlash
    setFilter(key, value) {
        if (key in this.filters) {
            this.filters[key] = value;
        }
    }
    
    // Barcha filterlarni qaytarish
    resetFilters() {
        this.filters = {
            showCompleted: true,
            showIncomplete: true,
            priority: null
        };
    }
    
    // Statistikalar
    getStatistics() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const incomplete = total - completed;
        
        const byPriority = {
            low: this.todos.filter(t => t.priority === "low").length,
            medium: this.todos.filter(t => t.priority === "medium").length,
            high: this.todos.filter(t => t.priority === "high").length
        };
        
        return {
            total,
            completed,
            incomplete,
            completionRate: total > 0 ? ((completed / total) * 100).toFixed(1) : 0,
            byPriority
        };
    }
    
    // Barcha todo'larni o'chirish
    clearAll() {
        this.todos = [];
    }
    
    // Bajarilgan todo'larni o'chirish
    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}


// 3. Export va Test


// Test qilish
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TodoItem, TodoManager };
}

// Browser uchun
if (typeof window !== 'undefined') {
    window.TodoApp = { TodoItem, TodoManager };
}

