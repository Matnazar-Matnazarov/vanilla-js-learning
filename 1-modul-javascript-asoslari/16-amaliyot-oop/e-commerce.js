/**
 * E-COMMERCE SYSTEM - Encapsulation bilan Onlayn Do'kon
 * 
 * Bu loyiha Encapsulation prinsiplaridan foydalanib e-commerce tizimini yaratadi
 */

// ============================================
// 1. Product Class - Encapsulation
// ============================================

class Product {
    #id;
    #name;
    #price;
    #stock;
    #category;
    #discount = 0;
    
    constructor(id, name, price, stock, category) {
        if (!name || name.trim().length === 0) {
            throw new Error("Product name is required");
        }
        if (price < 0) {
            throw new Error("Price cannot be negative");
        }
        if (stock < 0) {
            throw new Error("Stock cannot be negative");
        }
        
        this.#id = id;
        this.#name = name.trim();
        this.#price = price;
        this.#stock = stock;
        this.#category = category;
    }
    
    // Getters
    get id() {
        return this.#id;
    }
    
    get name() {
        return this.#name;
    }
    
    get price() {
        return this.#price;
    }
    
    get stock() {
        return this.#stock;
    }
    
    get category() {
        return this.#category;
    }
    
    get discount() {
        return this.#discount;
    }
    
    // Setters with validation
    set price(value) {
        if (value < 0) {
            throw new Error("Price cannot be negative");
        }
        this.#price = value;
    }
    
    set stock(value) {
        if (value < 0) {
            throw new Error("Stock cannot be negative");
        }
        this.#stock = value;
    }
    
    set discount(value) {
        if (value < 0 || value > 100) {
            throw new Error("Discount must be between 0 and 100");
        }
        this.#discount = value;
    }
    
    // Methods
    applyDiscount(percent) {
        this.discount = percent;
    }
    
    removeDiscount() {
        this.discount = 0;
    }
    
    getFinalPrice() {
        return this.#price * (1 - this.#discount / 100);
    }
    
    decreaseStock(quantity) {
        if (quantity > 0 && quantity <= this.#stock) {
            this.#stock -= quantity;
            return true;
        }
        return false;
    }
    
    increaseStock(quantity) {
        if (quantity > 0) {
            this.#stock += quantity;
            return true;
        }
        return false;
    }
    
    isInStock() {
        return this.#stock > 0;
    }
    
    getInfo() {
        return {
            id: this.#id,
            name: this.#name,
            originalPrice: this.#price,
            discount: this.#discount,
            finalPrice: this.getFinalPrice(),
            stock: this.#stock,
            category: this.#category,
            inStock: this.isInStock()
        };
    }
}

// ============================================
// 2. Cart Item Class
// ============================================

class CartItem {
    #product;
    #quantity;
    
    constructor(product, quantity = 1) {
        if (!(product instanceof Product)) {
            throw new Error("Invalid product");
        }
        if (quantity < 1) {
            throw new Error("Quantity must be at least 1");
        }
        if (quantity > product.stock) {
            throw new Error("Insufficient stock");
        }
        
        this.#product = product;
        this.#quantity = quantity;
    }
    
    get product() {
        return this.#product;
    }
    
    get quantity() {
        return this.#quantity;
    }
    
    set quantity(value) {
        if (value < 1) {
            throw new Error("Quantity must be at least 1");
        }
        if (value > this.#product.stock) {
            throw new Error("Insufficient stock");
        }
        this.#quantity = value;
    }
    
    getTotalPrice() {
        return this.#product.getFinalPrice() * this.#quantity;
    }
    
    getInfo() {
        return {
            product: this.#product.getInfo(),
            quantity: this.#quantity,
            totalPrice: this.getTotalPrice()
        };
    }
}

// ============================================
// 3. Shopping Cart Class
// ============================================

class ShoppingCart {
    #items = [];
    #customerId = null;
    
    constructor(customerId = null) {
        this.#customerId = customerId;
    }
    
    // Item qo'shish
    addItem(product, quantity = 1) {
        const existingItem = this.#items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            const newQuantity = existingItem.quantity + quantity;
            if (newQuantity > product.stock) {
                throw new Error("Insufficient stock");
            }
            existingItem.quantity = newQuantity;
        } else {
            this.#items.push(new CartItem(product, quantity));
        }
        
        return this;
    }
    
    // Item'ni o'chirish
    removeItem(productId) {
        const index = this.#items.findIndex(item => item.product.id === productId);
        if (index !== -1) {
            return this.#items.splice(index, 1)[0];
        }
        return null;
    }
    
    // Quantity o'zgartirish
    updateQuantity(productId, quantity) {
        const item = this.#items.find(item => item.product.id === productId);
        if (item) {
            item.quantity = quantity;
            return true;
        }
        return false;
    }
    
    // Barcha item'larni olish
    getItems() {
        return [...this.#items];
    }
    
    // Umumiy narx
    getTotalPrice() {
        return this.#items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
    
    // Itemlar soni
    getItemCount() {
        return this.#items.reduce((count, item) => count + item.quantity, 0);
    }
    
    // Savatni tozalash
    clear() {
        this.#items = [];
    }
    
    // Ma'lumotlarni olish
    getInfo() {
        return {
            customerId: this.#customerId,
            items: this.#items.map(item => item.getInfo()),
            itemCount: this.getItemCount(),
            totalPrice: this.getTotalPrice()
        };
    }
}

// ============================================
// 4. Order Class
// ============================================

class Order {
    #id;
    #cart;
    #status = "pending";
    #createdAt;
    #shippingAddress;
    
    constructor(id, cart, shippingAddress) {
        if (!(cart instanceof ShoppingCart)) {
            throw new Error("Invalid cart");
        }
        if (cart.getItemCount() === 0) {
            throw new Error("Cart is empty");
        }
        
        this.#id = id;
        this.#cart = cart;
        this.#shippingAddress = shippingAddress;
        this.#createdAt = new Date();
    }
    
    get id() {
        return this.#id;
    }
    
    get status() {
        return this.#status;
    }
    
    get createdAt() {
        return this.#createdAt;
    }
    
    get totalPrice() {
        return this.#cart.getTotalPrice();
    }
    
    // Status o'zgartirish
    setStatus(status) {
        const validStatuses = ["pending", "processing", "shipped", "delivered", "cancelled"];
        if (validStatuses.includes(status)) {
            this.#status = status;
            return true;
        }
        return false;
    }
    
    // Order'ni bajarish (stock'ni kamaytirish)
    process() {
        if (this.#status !== "pending") {
            return false;
        }
        
        const items = this.#cart.getItems();
        for (const item of items) {
            if (!item.product.decreaseStock(item.quantity)) {
                throw new Error(`Insufficient stock for ${item.product.name}`);
            }
        }
        
        this.setStatus("processing");
        return true;
    }
    
    getInfo() {
        return {
            id: this.#id,
            status: this.#status,
            createdAt: this.#createdAt,
            shippingAddress: this.#shippingAddress,
            totalPrice: this.totalPrice,
            items: this.#cart.getItems().map(item => item.getInfo())
        };
    }
}

// ============================================
// 5. Export
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Product,
        CartItem,
        ShoppingCart,
        Order
    };
}

if (typeof window !== 'undefined') {
    window.ECommerce = {
        Product,
        CartItem,
        ShoppingCart,
        Order
    };
}

