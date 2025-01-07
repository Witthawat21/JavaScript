function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

// Try.. Catch
console.log("\n********************Try..Catch*************\n");

try {
    criticalCode();  // เรียกใช้ criticalCode ที่จะโยน exception
    console.log("Got an error");  // บรรทัดนี้จะไม่ทำงานหากมีการโยน exception
} catch (ex) {
    logError(ex);  // ถ้ามี exception จะไปที่ catch และแสดงผลที่ logError
}

console.log("Throwing in Try..Catch");
try{
    throw "Ab exceotion that is thown every time";

}catch (ex) {
    console.log("Got ab error");
    logError(ex);
}

console.log("\n****************Try...Catch..Finally**********\n");

try {
    criticalCode();
}catch (ex) {
    
}
