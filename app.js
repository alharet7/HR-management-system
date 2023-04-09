`use strict`;
//constructor function ----------------------------------------------------------------------
function Employee(employeeID,firstName,lastName,department,level,salary){
this.employeeID = employeeID;
this.firstName = firstName;
this.lastName = lastName;
this.department = department;
this.level = level;
this.imageURL = `./Assest/${this.firstName}.png`;
}
//Employees avr---------------------------------------------------------------------------------
const gazi = new Employee(1000,"Gazi","Samer","Administration","Senior");
const lana = new Employee(1001,"Lana","Ali","Finance","Senior");
const tamara = new Employee(1002,"Tamara","Ayoub","Marketing","Senior");
const safi = new Employee(1003,"Safi","Walid","Administration","Mid-Senior");
const omar = new Employee(1004,"Omar","Zaid","Development","Senior");
const rana = new Employee(1005,"Rana","Saleh","Development","Junior");
const hadi = new Employee(1006,"Hadi","Ahmad","Finance","Mid-Senior");
//Prototype function-----------------------------------------------------------------------------
Employee.prototype.salary = function(){
    if (this.level == "Senior"){
    let minSalary = 1500;
    let maxSalary = 2000;
    let taxPercent = 7.5;
    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    const taxAmount = (randomSalary * taxPercent) / 100;
    const netSalary = randomSalary - taxAmount;
return netSalary ;
    }
    else if (this.level == "Mid-Senior"){
        let minSalary = 1000;
        let maxSalary = 1500;
        let taxPercent = 7.5;
        const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        const taxAmount = (randomSalary * taxPercent) / 100;
        const netSalary = randomSalary - taxAmount;
    return netSalary ;
        }
        else {
            let minSalary = 500;
            let maxSalary = 1000;
            let taxPercent = 7.5;
            const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
            const taxAmount = (randomSalary * taxPercent) / 100;
            const netSalary = randomSalary - taxAmount;
        return netSalary ;  
        }
}
//Render function-----------------------------------------------------------------------------------------
Employee.prototype.render= function(){
    document.write(`<h1> ${this.firstName}'s  Net Salary is ${gazi.salary()} </h1>`)
}
Employee.prototype.render= function(){
    document.write(`<h1> ${this.firstName}'s  Net Salary is ${rana.salary()} </h1>`)
}

gazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();














//thats for me -----------------------------------------------------------------------------------
console.log(gazi);
console.log(lana);
console.log(tamara);
console.log(safi);
console.log(omar);
console.log(rana);
console.log(hadi);
gazi.render();
lana.salary();
tamara.salary();
safi.salary();
omar.salary();
rana.salary();
hadi.salary();
gazi.salary();
console.log("gazi random salary is:"+ gazi.salary());
console.log("safi random salary is:"+ safi.salary());