const company = [
    {
        name: "Tech Innovators Inc.",
        location: "San Francisco",
        departments: [
            {
                name: "Engineering",
                manager: "Alice Johnson",
                staff: [
                    { name: "Bob Smith", position: "Developer" },
                    { name: "Emily Davis", position: "Junior Developer" },
                ],
            },
            {
                name: "Marketing",
                manager: "Michael Brown",
                staff: [
                    { name: "Sara Lee", position: "Specialist" },
                    { name: "Tom Wilson", position: "Strategist" },
                ],
            },
        ],
    },
    {
        name: "Creative Solutions LLC",
        location: "New York",
        departments: [
            {
                name: "Design",
                manager: "Karen White",
                staff: [
                    { name: "Leo Carter", position: "Designer" },
                    { name: "Nina Patel", position: "UI/UX Designer" },
                ],
            },
            {
                name: "Sales",
                manager: "James Green",
                staff: [
                    { name: "Olivia Turner", position: "Executive" },
                    { name: "Ethan Harris", position: "Manager" },
                ],
            },
        ],
    },
];

const duplicate = [...company]
console.log(1, duplicate);

const manager = duplicate.map((el => {
    return el.departments
})).flat().map((el) => {
    return el.manager
}).join(", ")

console.log("");
console.log(2, manager);

const noOfStaffs = duplicate.map((el) => el.departments).flat().map((el) => {
    return el.staff
}).flat().length

console.log("");
console.log(3, noOfStaffs, "staffs");

const managerGreen = duplicate.filter((el) => {
    return el.name === "Creative Solutions LLC"
}).flatMap((el) => {
    return el.departments
}).map((el) => {
    return el.manager
}).every((el) => {
    return el.includes("Green")
})

console.log(" ");
console.log(4, managerGreen);