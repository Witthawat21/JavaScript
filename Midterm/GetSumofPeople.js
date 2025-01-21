function getBudgets(people) {
    return people.reduce((total, person) => total + person.budget, 0); // รวมค่า budget ทั้งหมด
}

// ตัวอย่างการใช้งาน
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
])); // 65700

console.log(getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
])); // 62600
