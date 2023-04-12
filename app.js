`use strict`;
//constructor function ----------------------------------------------------------------------
let allEmployee = []; 
let form = document.getElementById('formid');
form.addEventListener('submit', addNewEmployee);


function Employee(employeeID,fullName,department,level,imageURL){
this.employeeID = employeeID;
this.fullName = fullName;
this.department = department;
this.level = level;
this.imageURL = `./Assest/${this.fullName}.png`;

}

// //Render function-----------------------------------------------------------------------------------------
Employee.prototype.render= function(){
    const container = document.getElementById('container')  // Parent

    const divEl = document.createElement('div');
    container.appendChild(divEl);
    divEl.classList.add("card");

    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.src = this.imageURL;

    const h1El = document.createElement('h1');
    h1El.textContent = `Name: ${this.fullName}`;
    divEl.appendChild(h1El);

    const originalIdEl = document.createElement('h2');
    originalIdEl.textContent =`ID: ${this.employeeID}`
    divEl.appendChild(originalIdEl);

    const depEl = document.createElement(`h3`);
    depEl.textContent = `Department: ${this.department}`
    divEl.appendChild(depEl);

    const levelEl = document.createElement(`h3`);
    levelEl.textContent = `Level: ${this.level}`;
    divEl.appendChild(levelEl);

    

}

function addNewEmployee(event){
    event.preventDefault();
    
    let fullName = event.target.fname.value;
    let employeeID = event.target.employeeid.value;
    let imageURL = event.target.imageURL.value;
    let department = event.target.dep.value;
    let level = event.target.level.value;

    let newEmployee = new Employee(employeeID,fullName,department,level, imageURL );

    // newEmployee.generateEmployeeID();
    newEmployee.render()
}
console.log(allEmployee);



// function Employee() {}

// Employee.prototype.generateEmployeeID = function() {
//   let id = '';
//   const characters = '0123456789';
//   const charactersLength = characters.length;
  
//   for (let i = 0; i < 4; i++) {
//     id += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
  
//   return id;
// }
// const employeeID = this.generateEmployeeID();
// console.log(employeeID);




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