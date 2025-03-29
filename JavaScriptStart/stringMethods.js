let school = "Gettyversity "
let moreString = "is a nice school"
// length - 1
// index - 0

console.log(school.length, "length");
console.log(school.charAt(5), "charAt");
console.log(school.at(-3), "at");
console.log(school[4], "property access");
console.log(school.slice(5,12), "slice");
// console.log(school.substring(5,11), "substring");
// console.log(school.substr(0, 3), substr);
console.log(school.toLowerCase(), "lowercase");
console.log(school.toUpperCase(), "uppercase");
console.log(school.concat(moreString), "concat");
let trimmed = school.trim()
console.log(trimmed.length, "trim");
console.log("😒".repeat(5), "repeat");
let pin = "4444rrrr"
console.log("⭐".repeat(pin.length), "Isaac's pin");
console.log(school.replace("Getty", "Hello"), "replace");
console.log(school.split("e"), "split");
console.log(school.indexOf("t"), "indexOf");
console.log(school.lastIndexOf("t"), "lastIndexOf");
console.log(school.includes("Getty"), "includes");
