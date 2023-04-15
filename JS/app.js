`use strict`;
//constructor function ----------------------------------------------------------------------
let allEmployee = [];

let form = document.getElementById('formid');
form.addEventListener('submit', addNewEmployee);


function Employee(fullName, department, level, imageURL, ) {
    this.employeeId = generateEmpId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = calculateSalary();

    allEmployee.push(this);
}

function generateEmpId() {
    let i = 0;
    for (let i = 0; i < allEmployee.length; i++)

        return allEmployee[i].employeeId = Math.floor(Math.random() * 9000) + 1000;

}
//Calculate salary---------------------------------------------------------------------------------
function calculateSalary() {
    let i = 0;
    for (let i = 0; i < allEmployee.length; i++) {

        if (allEmployee[i].level == "Senior") {

            allEmployee[i].salary = randomNumberForSalary(1500, 2000);//random salary
            allEmployee[i].salary = allEmployee[i].salary - (allEmployee[i].salary * 0.075);//net salary
        }
        if (allEmployee[i].level == "Mid-Senior") {

            allEmployee[i].salary = randomNumberForSalary(1000, 1500);
            allEmployee[i].salary = allEmployee[i].salary - (allEmployee[i].salary * 0.075);
        }
        if (allEmployee[i].level == "Junior") {

            allEmployee[i].salary = randomNumberForSalary(500, 1000);
            allEmployee[i].salary = allEmployee[i].salary - (allEmployee[i].salary * 0.075);
        }
        return allEmployee[i].salary;
    }
} console.log(allEmployee.salary);

function randomNumberForSalary(min, max) {
    let i = 0;
    for (let i = 0; i < allEmployee.length; i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    }}
// //Render function-----------------------------------------------------------------------------------------
function render() {
    const container = document.getElementById('container')  // Parent

    const divEl = document.createElement('div');
    container.appendChild(divEl);
    divEl.classList.add("card");

    getEmployee()

    if (allEmployee == null) {
        allEmployee = [];
    }

    for (let i = 0; i < allEmployee.length; i++) {

        const imgEl = new Image(200, 200);
        divEl.appendChild(imgEl);
        imgEl.src = allEmployee[i].imageURL || `./Assest/${allEmployee[i].fullName}.png`;

        const h1El = document.createElement('h1');
        h1El.textContent = `Name: ${allEmployee[i].fullName}- ID:  ${generateEmpId(allEmployee[i].employeeId)}`;
        divEl.appendChild(h1El);


        const depEl = document.createElement(`h3`);
        depEl.textContent = `Department: ${allEmployee[i].department}`
        divEl.appendChild(depEl);

        const levelEl = document.createElement(`h3`);
        levelEl.textContent = `Level: ${allEmployee[i].level}`;
        divEl.appendChild(levelEl);

        const pE1 = document.createElement('p');
        pE1.textContent = `Salary:  ${calculateSalary(allEmployee[i].salary)}`;
        divEl.appendChild(pE1);
    }


}

///Events-------------------------------------------------------------------------
function addNewEmployee(event) {
    // event.preventDefault();

    let fullName = event.target.fname.value;
    let imageURL = event.target.imageURL.value;
    let department = event.target.dep.value;
    let level = event.target.level.value;

    let newEmployee = new Employee(fullName, department, level, imageURL);


    let jsonArr = JSON.stringify(allEmployee);
    localStorage.setItem('allEmployee', jsonArr);

    console.log('allEmployee', allEmployee); //just for tseting
    console.log('JSON Array', jsonArr);      //just for tseting

    newEmployee.calculateSalary();
    newEmployee.generateEmpId();
    // newEmployee.render();
    calculateSalary();
    generateEmpId();
}

function getEmployee() {
    let jsonArr = localStorage.getItem('allEmployee');
    let dataFromStorage = JSON.parse(jsonArr);
    console.log(dataFromStorage);
    allEmployee = dataFromStorage;
}

getEmployee();
render();
calculateSalary();
generateEmpId();

console.log(generateEmpId());
console.log(allEmployee);
console.log(calculateSalary());
// function Employee() {}
// //thats for me -----------------------------------------------------------------------------------
// gazi.render();
// lana.render();
// tamara.render();
// safi.render();
// omar.render();
// rana.render();
// hadi.render();
// console.log(gazi);
// console.log(lana);
// console.log(tamara);
// console.log(safi);
// console.log(omar);
// console.log(rana);
// console.log(hadi);

// lana.salary();
// tamara.salary();
// safi.salary();
// omar.salary();
// rana.salary();
// hadi.salary();
// gazi.salary();
// console.log("gazi random salary is:"+ gazi.salary());
// console.log("safi random salary is:"+ safi.salary());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Employees avr---------------------------------------------------------------------------------
// const gazi = new Employee(1000,"Gazi","Samer","Administration","Senior");
// const lana = new Employee(1001,"Lana","Ali","Finance","Senior");
// const tamara = new Employee(1002,"Tamara","Ayoub","Marketing","Senior");
// const safi = new Employee(1003,"Safi","Walid","Administration","Mid-Senior");
// const omar = new Employee(1004,"Omar","Zaid","Development","Senior");
// const rana = new Employee(1005,"Rana","Saleh","Development","Junior");
// const hadi = new Employee(1006,"Hadi","Ahmad","Finance","Mid-Senior");
//Prototype function-----------------------------------------------------------------------------
// Employee.prototype.salary = function(){
//     if (this.level == "Senior"){
//     let minSalary = 1500;
//     let maxSalary = 2000;
//     let taxPercent = 7.5;
//     const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
//     const taxAmount = (randomSalary * taxPercent) / 100;
//     const netSalary = randomSalary - taxAmount;
// return netSalary ;
//     }
//     else if (this.level == "Mid-Senior"){
//         let minSalary = 1000;
//         let maxSalary = 1500;
//         let taxPercent = 7.5;
//         const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
//         const taxAmount = (randomSalary * taxPercent) / 100;
//         const netSalary = randomSalary - taxAmount;
//     return netSalary ;
//         }
//         else {
//             let minSalary = 500;
//             let maxSalary = 1000;
//             let taxPercent = 7.5;
//             const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
//             const taxAmount = (randomSalary * taxPercent) / 100;
//             const netSalary = randomSalary - taxAmount;
//         return netSalary ;  
//         }
// }