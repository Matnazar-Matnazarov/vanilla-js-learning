// Encapsulation - Ma'lumotlarni yashirish

// Private fields (ES2022)
class BankAccount {
    #balance = 0;
    #pin = null;
    
    constructor(initialBalance, pin) {
        this.#balance = initialBalance;
        this.#pin = pin;
    }
    
    deposit(amount, pin) {
        if (this.#validatePin(pin)) {
            if (amount > 0) {
                this.#balance += amount;
                return `Deposit qilindi: ${amount}. Yangi balans: ${this.#balance}`;
            }
        }
        return "Xato: PIN noto'g'ri yoki miqdor noto'g'ri";
    }
    
    withdraw(amount, pin) {
        if (this.#validatePin(pin)) {
            if (amount > 0 && amount <= this.#balance) {
                this.#balance -= amount;
                return `Yechib olindi: ${amount}. Qolgan balans: ${this.#balance}`;
            }
            return "Xato: Balans yetarli emas";
        }
        return "Xato: PIN noto'g'ri";
    }
    
    getBalance(pin) {
        if (this.#validatePin(pin)) {
            return this.#balance;
        }
        return "Xato: PIN noto'g'ri";
    }
    
    #validatePin(pin) {
        return pin === this.#pin;
    }
}

let account = new BankAccount(1000, "1234");
console.log("Deposit:", account.deposit(500, "1234"));
console.log("Withdraw:", account.withdraw(200, "1234"));
console.log("Balance:", account.getBalance("1234"));

// Getter va Setter bilan encapsulation
class User {
    constructor(username, email) {
        this._username = username;
        this._email = email;
        this._role = "user";
    }
    
    get username() {
        return this._username;
    }
    
    set username(value) {
        if (value.length >= 3) {
            this._username = value;
        } else {
            console.log("Username kamida 3 belgi bo'lishi kerak");
        }
    }
    
    get email() {
        return this._email;
    }
    
    set email(value) {
        if (value.includes("@")) {
            this._email = value;
        } else {
            console.log("Email noto'g'ri format");
        }
    }
    
    get role() {
        return this._role;
    }
    
    setRole(newRole) {
        if (["user", "admin", "moderator"].includes(newRole)) {
            this._role = newRole;
        }
    }
}

let user = new User("matnazar", "matnazar@example.com");
console.log("Username:", user.username);
user.username = "ali";
console.log("New username:", user.username);
user.username = "ab";
user.setRole("admin");
console.log("Role:", user.role);

// Closure bilan encapsulation (eski usul)
function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

let counter = createCounter();
console.log("Increment:", counter.increment());
console.log("Increment:", counter.increment());
console.log("Decrement:", counter.decrement());
console.log("Count:", counter.getCount());

// Module pattern
let Calculator = (function() {
    let result = 0;
    
    return {
        add: function(num) {
            result += num;
            return this;
        },
        subtract: function(num) {
            result -= num;
            return this;
        },
        multiply: function(num) {
            result *= num;
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

Calculator.add(10).multiply(2).subtract(5);
console.log("Calculator result:", Calculator.getResult());

