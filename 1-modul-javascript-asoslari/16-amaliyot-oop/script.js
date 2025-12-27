/**
 * DARS 16: AMALIYOT. OOP - ASOSIY SCRIPT
 * 
 * Bu script barcha amaliy loyihalarni birlashtiradi
 */

console.log("============================================");
console.log("DARS 16: AMALIYOT. OOP");
console.log("============================================\n");

// ============================================
// 1. TODO APP DEMO
// ============================================

function demonstrateTodoApp() {
    console.log("=== 1. TODO APP DEMO ===\n");
    
    const todoManager = new TodoManager();
    
    // Todo'lar qo'shish
    todoManager.addTodo("JavaScript o'rganish", "OOP mavzusini o'rganish", "high");
    todoManager.addTodo("Loyiha yaratish", "Todo app yaratish", "medium");
    todoManager.addTodo("Kod yozish", "Clean code prinsiplariga rioya qilish", "high");
    todoManager.addTodo("Test qilish", "Kodlarni test qilish", "low");
    
    // Todo'ni bajarish
    const todo1 = todoManager.getTodo(1);
    if (todo1) {
        todo1.complete();
        console.log("✅ Todo bajarildi:", todo1.title);
    }
    
    // Statistikalar
    const stats = todoManager.getStatistics();
    console.log("\n📊 Statistikalar:");
    console.log("Jami:", stats.total);
    console.log("Bajarilgan:", stats.completed);
    console.log("Bajarilmagan:", stats.incomplete);
    console.log("Foiz:", stats.completionRate + "%");
    
    // Filtrlangan todo'lar
    todoManager.setFilter("priority", "high");
    const highPriorityTodos = todoManager.getFilteredTodos();
    console.log("\n🔥 Yuqori prioritetli todo'lar:", highPriorityTodos.length);
    
    return todoManager;
}

// ============================================
// 2. LIBRARY SYSTEM DEMO
// ============================================

function demonstrateLibrarySystem() {
    console.log("\n=== 2. LIBRARY SYSTEM DEMO ===\n");
    
    const library = new LibraryManager();
    
    // Kitoblar qo'shish
    const book1 = new Book(0, "JavaScript: The Good Parts", "Douglas Crockford", 2008, "978-0596517748", 176);
    const book2 = new Book(0, "Clean Code", "Robert C. Martin", 2008, "978-0132350884", 464);
    const magazine1 = new Magazine(0, "JavaScript Monthly", "Tech Publications", 2024, 12, "Tech Media");
    const dvd1 = new DVD(0, "The Matrix", "Wachowski Brothers", 1999, 136, "Sci-Fi");
    
    library.addItem(book1);
    library.addItem(book2);
    library.addItem(magazine1);
    library.addItem(dvd1);
    
    // Kitobni ijaraga berish
    library.borrowItem(1, "Matnazar");
    console.log("📚 Kitob ijaraga berildi:", book1.title);
    
    // Statistikalar
    const stats = library.getStatistics();
    console.log("\n📊 Kutubxona statistikasi:");
    console.log("Jami:", stats.total);
    console.log("Mavjud:", stats.available);
    console.log("Ijara:", stats.borrowed);
    console.log("Kitoblar:", stats.byType.book);
    console.log("Jurnallar:", stats.byType.magazine);
    console.log("DVD:", stats.byType.dvd);
    
    return library;
}

// ============================================
// 3. E-COMMERCE DEMO
// ============================================

function demonstrateECommerce() {
    console.log("\n=== 3. E-COMMERCE DEMO ===\n");
    
    // Mahsulotlar yaratish
    const product1 = new Product(1, "Laptop", 1000, 10, "Electronics");
    const product2 = new Product(2, "Mouse", 25, 50, "Accessories");
    const product3 = new Product(3, "Keyboard", 75, 30, "Accessories");
    
    // Chegirma qo'llash
    product1.applyDiscount(10);
    console.log("💰 Mahsulot 1:", product1.name);
    console.log("   Original narx:", product1.price);
    console.log("   Chegirma:", product1.discount + "%");
    console.log("   Final narx:", product1.getFinalPrice());
    
    // Savat yaratish
    const cart = new ShoppingCart("customer123");
    cart.addItem(product1, 1);
    cart.addItem(product2, 2);
    cart.addItem(product3, 1);
    
    console.log("\n🛒 Savat:");
    console.log("Itemlar soni:", cart.getItemCount());
    console.log("Umumiy narx:", cart.getTotalPrice());
    
    // Buyurtma yaratish
    const order = new Order(1, cart, "Toshkent shahri, Chilonzor tumani");
    order.process();
    
    console.log("\n📦 Buyurtma:");
    console.log("ID:", order.id);
    console.log("Status:", order.status);
    console.log("Umumiy narx:", order.totalPrice);
    
    return { product1, cart, order };
}

// ============================================
// 4. GAME ENGINE DEMO
// ============================================

function demonstrateGameEngine() {
    console.log("\n=== 4. GAME ENGINE DEMO ===\n");
    
    const game = new GameEngine();
    
    // Player qo'shish
    const player = game.addPlayer(100, 100, 50, 50);
    console.log("🎮 Player yaratildi:", player.render());
    
    // Dushmanlar qo'shish
    const enemy1 = game.addEnemy(200, 200, 40, 40, 2);
    const enemy2 = game.addEnemy(300, 300, 40, 40, 3);
    console.log("👾 Dushmanlar yaratildi:", game.gameObjects.filter(obj => obj instanceof Enemy).length);
    
    // Collectible'lar qo'shish
    game.addCollectible(150, 150, 20, 20, "coin");
    game.addCollectible(250, 250, 20, 20, "health");
    game.addCollectible(350, 350, 20, 20, "powerup");
    console.log("💎 Collectible'lar yaratildi:", game.gameObjects.filter(obj => obj instanceof Collectible).length);
    
    // O'yinni boshlash
    game.start();
    
    // O'yin holati
    const gameState = game.getGameState();
    console.log("\n🎯 O'yin holati:");
    console.log("Status:", gameState.status);
    console.log("Score:", gameState.score);
    console.log("Level:", gameState.level);
    console.log("Objects:", gameState.objectsCount);
    
    return game;
}

// ============================================
// 5. BARCHA DEMO'LARNI ISHGA TUSHIRISH
// ============================================

window.onload = function() {
    console.log("🚀 Barcha loyihalar yuklanmoqda...\n");
    
    // Script'lar yuklangandan keyin demo'larni ishga tushirish
    setTimeout(() => {
        try {
            demonstrateTodoApp();
            demonstrateLibrarySystem();
            demonstrateECommerce();
            demonstrateGameEngine();
            
            console.log("\n============================================");
            console.log("✅ Barcha demo'lar muvaffaqiyatli ishladi!");
            console.log("============================================");
        } catch (error) {
            console.error("❌ Xato:", error.message);
            console.log("\n⚠️ Iltimos, barcha script fayllarini yuklang!");
        }
    }, 500);
};

