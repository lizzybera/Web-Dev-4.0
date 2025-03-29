const sentence = "The quick brown fox jumps over the lazy dog";

const Brown = sentence.slice(10, 15).toUpperCase()
const removeLazy = sentence.replace("lazy", "").replace("dog", Brown)
console.log(1, removeLazy);

const email = "Student.Name@SchoolDomain.com";

const domain = email.slice(12, email.length).toLowerCase()
const userName = email.slice(0, 12).toUpperCase()
const newEmail = userName.concat(domain)
console.log(2, newEmail);

const messyString = " Too many spaces here. ";
const triming = messyString.trim()
const stringLenght = triming.length
const stringSub = triming.substring(5, stringLenght-5)

console.log(3, stringSub);

const phrase = "I like to code in JavaScript. JavaScript is fun!";

const replacing = phrase.replace("JavaScript", "JS").toUpperCase().replaceAll("JAVASCRIPT", "JS" ).substring(10, 31)

console.log(4, replacing);

const text = "Programming is highly rewarding";

const retrieve = text.charAt(10).charCodeAt()
const replacingG = text.replaceAll("g", retrieve).slice(8, 29)

console.log(5, replacingG);

const firstName = "Jane"; const middleName = "Marie"; const lastName = "Smith";

const concatNames = firstName.concat(" ").concat(middleName).concat(" ").concat(lastName).toUpperCase()

const indexFind = concatNames.indexOf("M")
const replacingMarie = concatNames.replace("MARIE", "ANN")

console.log(6, replacingMarie);

const statement = "JavaScript is a versatile and popular programming language";

const statswith = statement.startsWith("JavaScript")
const endsWith = statement.endsWith("language")
const replaceVersatile = statement.replace("versatile", "powerful").toLowerCase()

console.log(7, replaceVersatile);

const description = "Backend development involves working with databases, servers, and APIs";

const extracting = description.slice(-28, description.length).toLowerCase().split(",").join("&")

console.log(8, extracting);

const announcement = "Join the new online coding bootcamp now";

// const splittingLength = announcement.split("").length
// const splittingLength2 = announcement.split("").join(",")

// console.log(9, )

const feedback = "This course is simply amazing. This course is simply comprehensive."

let replacingCourse = feedback.replaceAll("course", "program").toUpperCase().slice(5, 56).split(" ")

console.log(10, replacingCourse);
