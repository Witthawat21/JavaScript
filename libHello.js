const person = {
    name: 'Arnirach',
    weight: 85
}

function sayHello() {
    console.log("Hello World");
}

function cube(x) {
    return x * x * x;
}

const add = (a, b) => a + b;  // แก้ชื่อ parameter จาก 'd' เป็น 'b'

const status = true;

module.exports = { person, sayHello, cube, add, status };
