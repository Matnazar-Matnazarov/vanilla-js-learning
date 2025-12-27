/**
 * GAME ENGINE - Polymorphism bilan Oddiy O'yin Tizimi
 * 
 * Bu loyiha Polymorphism prinsiplaridan foydalanib o'yin tizimini yaratadi
 */

// ============================================
// 1. Base Class - GameObject
// ============================================

class GameObject {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visible = true;
        this.active = true;
    }
    
    // Polymorphism - har bir class o'z versiyasini yozadi
    update() {
        // Base implementation - override qilinadi
    }
    
    render() {
        // Base implementation - override qilinadi
        return `Rendering at (${this.x}, ${this.y})`;
    }
    
    // Collision detection
    collidesWith(other) {
        return (
            this.x < other.x + other.width &&
            this.x + this.width > other.x &&
            this.y < other.y + other.height &&
            this.y + this.height > other.y
        );
    }
    
    getInfo() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            visible: this.visible,
            active: this.active
        };
    }
}

// ============================================
// 2. Player Class - Polymorphism
// ============================================

class Player extends GameObject {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.speed = 5;
        this.health = 100;
        this.score = 0;
        this.direction = "right";
    }
    
    // Polymorphism - update metodini override qilish
    update(keys) {
        if (!this.active) return;
        
        if (keys.ArrowLeft) {
            this.x -= this.speed;
            this.direction = "left";
        }
        if (keys.ArrowRight) {
            this.x += this.speed;
            this.direction = "right";
        }
        if (keys.ArrowUp) {
            this.y -= this.speed;
        }
        if (keys.ArrowDown) {
            this.y += this.speed;
        }
    }
    
    // Polymorphism - render metodini override qilish
    render() {
        return `Player at (${this.x}, ${this.y}) facing ${this.direction} - Health: ${this.health} - Score: ${this.score}`;
    }
    
    takeDamage(amount) {
        this.health = Math.max(0, this.health - amount);
        if (this.health === 0) {
            this.active = false;
        }
    }
    
    heal(amount) {
        this.health = Math.min(100, this.health + amount);
    }
    
    addScore(points) {
        this.score += points;
    }
}

// ============================================
// 3. Enemy Class - Polymorphism
// ============================================

class Enemy extends GameObject {
    constructor(x, y, width, height, speed = 2) {
        super(x, y, width, height);
        this.speed = speed;
        this.health = 50;
        this.damage = 10;
    }
    
    // Polymorphism - update metodini override qilish
    update(player) {
        if (!this.active) return;
        
        // Player'ga qarab harakat qilish (simple AI)
        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
            this.x += (dx / distance) * this.speed;
            this.y += (dy / distance) * this.speed;
        }
    }
    
    // Polymorphism - render metodini override qilish
    render() {
        return `Enemy at (${this.x}, ${this.y}) - Health: ${this.health}`;
    }
    
    takeDamage(amount) {
        this.health -= amount;
        if (this.health <= 0) {
            this.active = false;
            this.visible = false;
        }
    }
    
    attack(player) {
        if (this.collidesWith(player)) {
            player.takeDamage(this.damage);
            return true;
        }
        return false;
    }
}

// ============================================
// 4. Collectible Class - Polymorphism
// ============================================

class Collectible extends GameObject {
    constructor(x, y, width, height, type = "coin") {
        super(x, y, width, height);
        this.type = type; // coin, health, powerup
        this.value = this.getTypeValue();
        this.collected = false;
    }
    
    getTypeValue() {
        const values = {
            coin: 10,
            health: 25,
            powerup: 50
        };
        return values[this.type] || 10;
    }
    
    // Polymorphism - update metodini override qilish
    update(player) {
        if (this.collected) return;
        
        if (this.collidesWith(player)) {
            this.collect(player);
        }
    }
    
    // Polymorphism - render metodini override qilish
    render() {
        if (this.collected) {
            return `Collected ${this.type} at (${this.x}, ${this.y})`;
        }
        return `${this.type} at (${this.x}, ${this.y}) - Value: ${this.value}`;
    }
    
    collect(player) {
        if (this.collected) return;
        
        this.collected = true;
        this.visible = false;
        this.active = false;
        
        switch (this.type) {
            case "coin":
                player.addScore(this.value);
                break;
            case "health":
                player.heal(this.value);
                break;
            case "powerup":
                player.addScore(this.value);
                player.speed += 1;
                break;
        }
    }
}

// ============================================
// 5. Game Engine Class
// ============================================

class GameEngine {
    constructor() {
        this.gameObjects = [];
        this.player = null;
        this.isRunning = false;
        this.score = 0;
        this.level = 1;
    }
    
    // Player qo'shish
    addPlayer(x, y, width, height) {
        this.player = new Player(x, y, width, height);
        this.gameObjects.push(this.player);
        return this.player;
    }
    
    // GameObject qo'shish
    addGameObject(gameObject) {
        if (gameObject instanceof GameObject) {
            this.gameObjects.push(gameObject);
            return gameObject;
        }
        throw new Error("Invalid game object");
    }
    
    // Enemy qo'shish
    addEnemy(x, y, width, height, speed = 2) {
        const enemy = new Enemy(x, y, width, height, speed);
        this.addGameObject(enemy);
        return enemy;
    }
    
    // Collectible qo'shish
    addCollectible(x, y, width, height, type = "coin") {
        const collectible = new Collectible(x, y, width, height, type);
        this.addGameObject(collectible);
        return collectible;
    }
    
    // Update - barcha object'larni yangilash (Polymorphism)
    update(keys) {
        if (!this.isRunning || !this.player) return;
        
        // Player'ni yangilash
        this.player.update(keys);
        
        // Barcha object'larni yangilash (Polymorphism)
        for (const obj of this.gameObjects) {
            if (obj instanceof Enemy) {
                obj.update(this.player);
                obj.attack(this.player);
            } else if (obj instanceof Collectible) {
                obj.update(this.player);
            }
        }
        
        // O'chirilgan object'larni olib tashlash
        this.gameObjects = this.gameObjects.filter(obj => obj.active);
    }
    
    // Render - barcha object'larni ko'rsatish (Polymorphism)
    render() {
        if (!this.isRunning) return [];
        
        return this.gameObjects
            .filter(obj => obj.visible)
            .map(obj => obj.render()); // Polymorphism - har bir class o'z render metodini ishlatadi
    }
    
    // O'yinni boshlash
    start() {
        this.isRunning = true;
    }
    
    // O'yinni to'xtatish
    stop() {
        this.isRunning = false;
    }
    
    // O'yin holati
    getGameState() {
        if (!this.player) {
            return { status: "no_player" };
        }
        
        if (!this.player.active) {
            return {
                status: "game_over",
                score: this.player.score,
                level: this.level
            };
        }
        
        return {
            status: this.isRunning ? "running" : "paused",
            player: this.player.getInfo(),
            score: this.player.score,
            level: this.level,
            objectsCount: this.gameObjects.length
        };
    }
}

// ============================================
// 6. Export
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GameObject,
        Player,
        Enemy,
        Collectible,
        GameEngine
    };
}

if (typeof window !== 'undefined') {
    window.GameEngine = {
        GameObject,
        Player,
        Enemy,
        Collectible,
        GameEngine
    };
}

