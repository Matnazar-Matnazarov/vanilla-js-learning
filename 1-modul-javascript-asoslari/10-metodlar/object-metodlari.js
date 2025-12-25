
// OBJECT METODLARI


/**
 * Object metodlari - obyektlar bilan ishlash uchun ishlatiladi
 * Object static metodlari va instance metodlari mavjud
 */


// 1. Object.keys() - Kalitlarni olish

let person = {
  name: "Matnazar",
  age: 25,
  city: "Toshkent"
};

let keys = Object.keys(person);
console.log("Object.keys():", keys); // ["name", "age", "city"]


// 2. Object.values() - Qiymatlarni olish

let values = Object.values(person);
console.log("Object.values():", values); // ["Matnazar", 25, "Toshkent"]


// 3. Object.entries() - Kalit-qiymat juftliklarini olish

let entries = Object.entries(person);
console.log("Object.entries():", entries);
// [["name", "Matnazar"], ["age", 25], ["city", "Toshkent"]]

// Array'dan object yaratish
let entriesArray = [["name", "John"], ["age", 30]];
let obj = Object.fromEntries(entriesArray);
console.log("Object.fromEntries():", obj); // {name: "John", age: 30}


// 4. Object.assign() - Object'larni birlashtirish

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = Object.assign({}, obj1, obj2);
console.log("Object.assign():", merged); // {a: 1, b: 2, c: 3, d: 4}

// Spread operator (ES6)
let merged2 = { ...obj1, ...obj2 };
console.log("Spread operator:", merged2); // {a: 1, b: 2, c: 3, d: 4}


// 5. Object.freeze() - Object'ni muzlatish

let frozen = { name: "Test" };
Object.freeze(frozen);
frozen.name = "Changed"; // O'zgarmaydi
console.log("Frozen object:", frozen.name); // "Test"


// 6. Object.seal() - Object'ni muhrlash

let sealed = { name: "Test" };
Object.seal(sealed);
sealed.name = "Changed"; // O'zgaradi
sealed.age = 25; // Qo'shilmaydi
console.log("Sealed object:", sealed); // {name: "Changed"}


// 7. Object.hasOwnProperty() - Xususiyat bor-yo'qligini tekshirish

let obj3 = { name: "John", age: 30 };
console.log("hasOwnProperty('name'):", obj3.hasOwnProperty("name")); // true
console.log("hasOwnProperty('city'):", obj3.hasOwnProperty("city")); // false

// ES6+ usul
console.log("'name' in obj3:", "name" in obj3); // true
console.log("Object.hasOwn(obj3, 'name'):", Object.hasOwn(obj3, "name")); // true


// 8. Object.defineProperty() - Xususiyat yaratish

let obj4 = {};
Object.defineProperty(obj4, "name", {
  value: "Matnazar",
  writable: true,
  enumerable: true,
  configurable: true
});
console.log("defineProperty:", obj4.name); // "Matnazar"

// Getter va Setter
let obj5 = {
  _age: 25,
  get age() {
    return this._age;
  },
  set age(value) {
    if (value > 0) {
      this._age = value;
    }
  }
};
obj5.age = 30;
console.log("Getter/Setter:", obj5.age); // 30


// 9. Object.create() - Prototype bilan object yaratish

let parent = { name: "Parent" };
let child = Object.create(parent);
child.age = 25;
console.log("Object.create():", child.name); // "Parent" (prototype'dan)
console.log("Child:", child); // {age: 25}


// 10. Object.is() - Qiymatlarni taqqoslash

console.log("Object.is(5, 5):", Object.is(5, 5)); // true
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true
console.log("NaN === NaN:", NaN === NaN); // false
console.log("Object.is(+0, -0):", Object.is(+0, -0)); // false


// 11. Object.getOwnPropertyNames() - Barcha xususiyatlarni olish

let obj6 = { a: 1, b: 2 };
Object.defineProperty(obj6, "c", {
  value: 3,
  enumerable: false
});
console.log("Object.keys():", Object.keys(obj6)); // ["a", "b"]
console.log("getOwnPropertyNames():", Object.getOwnPropertyNames(obj6)); // ["a", "b", "c"]


// 12. Object.getPrototypeOf() va Object.setPrototypeOf()

let obj7 = { name: "Test" };
let prototype = Object.getPrototypeOf(obj7);
console.log("Prototype:", prototype); // Object.prototype


// 13. Amaliy misollar


// Object'ni nusxalash (deep copy)
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
let original = { name: "John", age: 30, city: { name: "Toshkent" } };
let copy = deepCopy(original);
console.log("Deep copy:", copy);

// Object'ni tekshirish
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log("Bo'sh object:", isEmpty({})); // true
console.log("To'ldirilgan object:", isEmpty({ name: "Test" })); // false

// Object'ni filter qilish
function filterObject(obj, predicate) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => predicate(key, value))
  );
}
let data = { a: 1, b: 2, c: 3, d: 4 };
let filtered = filterObject(data, (key, value) => value > 2);
console.log("Filtered object:", filtered); // {c: 3, d: 4}

// Object'ni map qilish
function mapObject(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value)])
  );
}
let numbers = { a: 1, b: 2, c: 3 };
let doubled = mapObject(numbers, x => x * 2);
console.log("Mapped object:", doubled); // {a: 2, b: 4, c: 6}

