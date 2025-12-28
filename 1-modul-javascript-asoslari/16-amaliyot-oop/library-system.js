/**
 * LIBRARY SYSTEM - Inheritance bilan Kutubxona Tizimi
 * 
 * Bu loyiha Inheritance prinsiplaridan foydalanib kutubxona tizimini yaratadi
 */


// 1. Base Class - Item


class LibraryItem {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
        this.borrowedBy = null;
        this.borrowedDate = null;
    }
    
    // Item'ni ijaraga berish
    borrow(borrowerName) {
        if (this.isAvailable) {
            this.isAvailable = false;
            this.borrowedBy = borrowerName;
            this.borrowedDate = new Date();
            return true;
        }
        return false;
    }
    
    // Item'ni qaytarish
    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            const borrower = this.borrowedBy;
            this.borrowedBy = null;
            this.borrowedDate = null;
            return borrower;
        }
        return null;
    }
    
    // Ma'lumotlarni olish
    getInfo() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            year: this.year,
            isAvailable: this.isAvailable,
            borrowedBy: this.borrowedBy,
            borrowedDate: this.borrowedDate
        };
    }
}


// 2. Book Class - Inheritance


class Book extends LibraryItem {
    constructor(id, title, author, year, isbn, pages) {
        super(id, title, author, year);
        this.isbn = isbn;
        this.pages = pages;
        this.type = "book";
    }
    
    // Book ma'lumotlarini olish
    getInfo() {
        return {
            ...super.getInfo(),
            isbn: this.isbn,
            pages: this.pages,
            type: this.type
        };
    }
    
    // Reading time hisoblash (o'rtacha 200 soat/soat)
    getReadingTime() {
        const hours = Math.ceil(this.pages / 200);
        return `${hours} soat`;
    }
}


// 3. Magazine Class - Inheritance


class Magazine extends LibraryItem {
    constructor(id, title, author, year, issueNumber, publisher) {
        super(id, title, author, year);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
        this.type = "magazine";
    }
    
    getInfo() {
        return {
            ...super.getInfo(),
            issueNumber: this.issueNumber,
            publisher: this.publisher,
            type: this.type
        };
    }
}


// 4. DVD Class - Inheritance


class DVD extends LibraryItem {
    constructor(id, title, director, year, duration, genre) {
        super(id, title, director, year);
        this.director = director;
        this.duration = duration; // minutlarda
        this.genre = genre;
        this.type = "dvd";
    }
    
    getInfo() {
        return {
            ...super.getInfo(),
            director: this.director,
            duration: this.duration,
            genre: this.genre,
            type: this.type
        };
    }
    
    // Duration'ni format qilish
    getFormattedDuration() {
        const hours = Math.floor(this.duration / 60);
        const minutes = this.duration % 60;
        return `${hours}:${minutes.toString().padStart(2, '0')}`;
    }
}


// 5. Library Manager Class


class LibraryManager {
    constructor() {
        this.items = [];
        this.nextId = 1;
    }
    
    // Item qo'shish
    addItem(item) {
        if (item instanceof LibraryItem) {
            item.id = this.nextId++;
            this.items.push(item);
            return item;
        }
        throw new Error("Invalid library item");
    }
    
    // Item'ni topish
    getItem(id) {
        return this.items.find(item => item.id === id) || null;
    }
    
    // Barcha item'larni olish
    getAllItems() {
        return [...this.items];
    }
    
    // Mavjud item'larni olish
    getAvailableItems() {
        return this.items.filter(item => item.isAvailable);
    }
    
    // Ijaraga olingan item'larni olish
    getBorrowedItems() {
        return this.items.filter(item => !item.isAvailable);
    }
    
    // Type bo'yicha filtrlash
    getItemsByType(type) {
        return this.items.filter(item => item.type === type);
    }
    
    // Item'ni ijaraga berish
    borrowItem(id, borrowerName) {
        const item = this.getItem(id);
        if (item) {
            return item.borrow(borrowerName);
        }
        return false;
    }
    
    // Item'ni qaytarish
    returnItem(id) {
        const item = this.getItem(id);
        if (item) {
            return item.returnItem();
        }
        return null;
    }
    
    // Statistikalar
    getStatistics() {
        const total = this.items.length;
        const available = this.getAvailableItems().length;
        const borrowed = this.getBorrowedItems().length;
        
        const byType = {
            book: this.getItemsByType("book").length,
            magazine: this.getItemsByType("magazine").length,
            dvd: this.getItemsByType("dvd").length
        };
        
        return {
            total,
            available,
            borrowed,
            byType
        };
    }
    
    // Item'ni o'chirish
    removeItem(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            return this.items.splice(index, 1)[0];
        }
        return null;
    }
}


// 6. Export va Test


if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LibraryItem,
        Book,
        Magazine,
        DVD,
        LibraryManager
    };
}

if (typeof window !== 'undefined') {
    window.LibrarySystem = {
        LibraryItem,
        Book,
        Magazine,
        DVD,
        LibraryManager
    };
}

