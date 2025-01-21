function countAnimals(txt) {
    const animals = ["dog", "cat", "bat", "cock", "cow", "pig", "fox", "ant", "bird", "lion", "wolf", 
                     "deer", "bear", "frog", "hen", "mole", "duck", "goat"];
    let count = 0;

    while (txt.length > 0) {
        let found = false;
        for (let animal of animals) {
            if (txt.startsWith(animal)) {
                count++;
                txt = txt.slice(animal.length);
                found = true;
                break;
            }
        }
        if (!found) break;
    }

    return count;
}

// ตัวอย่างการเรียกใช้งาน
console.log(countAnimals("goatcode")); // 2
console.log(countAnimals("cockdogwdufbir")); // 4
console.log(countAnimals("dogdodogdogdog")); // 5
