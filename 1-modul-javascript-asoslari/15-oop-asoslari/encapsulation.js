/**
 * ENCAPSULATION - Ma'lumotlarni yashirish
 * 
 * Encapsulation - ma'lumotlarni to'g'ridan-to'g'ri kirishdan himoya qilish
 * Faqat metodlar orqali ma'lumotlarga kirish mumkin
 */


// 1. Private Fields (ES2022) - Eng yaxshi usul


class BankAccount {
    // Private fields - # bilan belgilanadi
    #balance = 0;
    #pin = null;
    #transactionHistory = [];
    
    constructor(initialBalance = 0, pin) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.#balance = initialBalance;
        this.#pin = pin;
    }
    
    // Public metod - deposit
    deposit(amount, pin) {
        if (!this.#validatePin(pin)) {
            return "Xato: PIN noto'g'ri";
        }
        
        if (amount <= 0) {
            return "Xato: Miqdor musbat bo'lishi kerak";
        }
        
        this.#balance += amount;
        this.#recordTransaction("deposit", amount);
        return `Deposit qilindi: ${amount}. Yangi balans: ${this.#balance}`;
    }
    
    // Public metod - withdraw
    withdraw(amount, pin) {
        if (!this.#validatePin(pin)) {
            return "Xato: PIN noto'g'ri";
        }
        
        if (amount <= 0) {
            return "Xato: Miqdor musbat bo'lishi kerak";
        }
        
        if (amount > this.#balance) {
            return "Xato: Balans yetarli emas";
        }
        
        this.#balance -= amount;
        this.#recordTransaction("withdraw", amount);
        return `Yechib olindi: ${amount}. Qolgan balans: ${this.#balance}`;
    }
    
    // Public metod - balance olish
    getBalance(pin) {
        if (!this.#validatePin(pin)) {
            return "Xato: PIN noto'g'ri";
        }
        return this.#balance;
    }
    
    // Public metod - transaction history
    getHistory(pin) {
        if (!this.#validatePin(pin)) {
            return "Xato: PIN noto'g'ri";
        }
        return [...this.#transactionHistory]; // Nusxa qaytarish
    }
    
    // Private metod - PIN tekshirish
    #validatePin(pin) {
        return pin === this.#pin;
    }
    
    // Private metod - transaction yozish
    #recordTransaction(type, amount) {
        this.#transactionHistory.push({
            type,
            amount,
            balance: this.#balance,
            timestamp: new Date().toISOString()
        });
    }
}

const account = new BankAccount(1000, "1234");
console.log("Deposit:", account.deposit(500, "1234"));
console.log("Withdraw:", account.withdraw(200, "1234"));
console.log("Balance:", account.getBalance("1234"));
console.log("History:", account.getHistory("1234"));


// 2. Getter va Setter bilan Encapsulation


class User {
    constructor(username, email) {
        // Private convention - _ bilan boshlash
        this._username = username;
        this._email = email;
        this._role = "user";
        this._createdAt = new Date();
    }
    
    // Getter - username olish
    get username() {
        return this._username;
    }
    
    // Setter - username o'rnatish (validation bilan)
    set username(value) {
        const trimmed = value.trim();
        if (trimmed.length < 3) {
            throw new Error("Username kamida 3 belgi bo'lishi kerak");
        }
        if (trimmed.length > 20) {
            throw new Error("Username 20 belgidan oshmasligi kerak");
        }
        this._username = trimmed;
    }
    
    // Getter - email
    get email() {
        return this._email;
    }
    
    // Setter - email (validation)
    set email(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error("Email noto'g'ri format");
        }
        this._email = value.toLowerCase();
    }
    
    // Getter - role (read-only)
    get role() {
        return this._role;
    }
    
    // Setter yo'q - faqat metod orqali o'zgartirish mumkin
    setRole(newRole) {
        const allowedRoles = ["user", "admin", "moderator"];
        if (allowedRoles.includes(newRole)) {
            this._role = newRole;
            return true;
        }
        return false;
    }
    
    get createdAt() {
        return this._createdAt;
    }
    
    getInfo() {
        return {
            username: this.username,
            email: this.email,
            role: this.role,
            createdAt: this.createdAt
        };
    }
}

const user = new User("matnazar", "matnazar@example.com");
console.log("User info:", user.getInfo());

try {
    user.username = "ali";
    console.log("New username:", user.username);
    
    user.email = "NEWEMAIL@EXAMPLE.COM";
    console.log("New email:", user.email);
    
    user.setRole("admin");
    console.log("New role:", user.role);
} catch (error) {
    console.error("Error:", error.message);
}


// 3. Closure bilan Encapsulation (Eski usul)


function createCounter(initialValue = 0) {
    // Closure - count o'zgaruvchisi yashirin
    let count = initialValue;
    
    return {
        // Public metodlar
        increment: function(step = 1) {
            count += step;
            return count;
        },
        
        decrement: function(step = 1) {
            count -= step;
            return count;
        },
        
        getCount: function() {
            return count;
        },
        
        reset: function() {
            count = initialValue;
            return count;
        }
    };
}

const counter = createCounter(10);
console.log("Initial:", counter.getCount());
console.log("Increment:", counter.increment(5));
console.log("Decrement:", counter.decrement(3));
console.log("Current:", counter.getCount());
console.log("Reset:", counter.reset());


// 4. Module Pattern - IIFE bilan


const Calculator = (function() {
    // Private o'zgaruvchilar
    let result = 0;
    let history = [];
    
    // Private funksiya
    function recordOperation(operation, value) {
        history.push({
            operation,
            value,
            result: result,
            timestamp: new Date()
        });
    }
    
    // Public API
    return {
        add: function(num) {
            result += num;
            recordOperation("add", num);
            return this; // Chaining uchun
        },
        
        subtract: function(num) {
            result -= num;
            recordOperation("subtract", num);
            return this;
        },
        
        multiply: function(num) {
            result *= num;
            recordOperation("multiply", num);
            return this;
        },
        
        divide: function(num) {
            if (num === 0) {
                throw new Error("Division by zero");
            }
            result /= num;
            recordOperation("divide", num);
            return this;
        },
        
        getResult: function() {
            return result;
        },
        
        getHistory: function() {
            return [...history]; // Nusxa qaytarish
        },
        
        reset: function() {
            result = 0;
            history = [];
            return this;
        }
    };
})();

Calculator.add(10).multiply(2).subtract(5).divide(3);
console.log("Calculator result:", Calculator.getResult());
console.log("Calculator history:", Calculator.getHistory());
