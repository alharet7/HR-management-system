'use strict';


let jsonArr = localStorage.getItem('allEmployee');
let data = JSON.parse(jsonArr);
let allEmployee = data;
let tableEl = document.getElementById("table");

function render() {

    let tableEl = document.getElementById("table");

    if (allEmployee == null) {
        allEmployee = [];
    }

    let thEl = document.createElement('tr');
    tableEl.appendChild(thEl);

    let tdEl1 = document.createElement('th');
    tdEl1.textContent = "Department Name";
    thEl.appendChild(tdEl1);

    let tdEl2 = document.createElement('th');
    tdEl2.textContent = "Number of employees";
    thEl.appendChild(tdEl2);

    let tdEl3 = document.createElement('th');
    tdEl3.textContent = "Average Salary";
    thEl.appendChild(tdEl3);

    let tdEl4 = document.createElement('th');
    tdEl4.textContent = "Total salary";
    thEl.appendChild(tdEl4);

    let departments = ["administration", "marketing", "development", "finance"];

    for (let i = 0; i < departments.length; i++) {
        let trEl1 = document.createElement('tr');
        tableEl.appendChild(trEl1);

        let tdEl1 = document.createElement('td');
        tdEl1.textContent = departments[i];
        trEl1.appendChild(tdEl1);


        let tdEl2 = document.createElement('td');
        tdEl2.textContent = claculateNumberOfEmps(departments[i]);
        trEl1.appendChild(tdEl2);

        let tdEl3 = document.createElement('td');
        tdEl3.textContent = claculateAvgSalary(departments[i]);
        trEl1.appendChild(tdEl3);

        let tdEl4 = document.createElement('td');
        tdEl4.textContent = calculateTheTotal(departments[i]);
        trEl1.appendChild(tdEl4);
    }
    //---------------------------Footer Row--------------------------
    let footerFr1 = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent = "Total =";
    footerFr1.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = "Total employees";
    footerFr1.appendChild(td2);


    let td3 = document.createElement('td');
    td3.textContent = " Avg salary for all departments";
    footerFr1.appendChild(td3);

    let td4 = document.createElement('td');
    td4.textContent = "Total salary for all departments";
    footerFr1.appendChild(td4);

    tableEl.appendChild(footerFr1);
    footerFr1.classList = 'footerFirstRow';

//----------------------Footer Info Row-------------------------------
let footerRow = document.createElement('tr');

  let t1 = document.createElement('td');

  footerRow.appendChild(t1);

  let totalEmployee = document.createElement('td');
  totalEmployee.textContent = allEmployee.length;
  footerRow.appendChild(totalEmployee);


  let avgSalary = document.createElement('td');
  avgSalary.textContent = allDepartementsAvg();
  footerRow.appendChild(avgSalary);

  let totalSalary = document.createElement('td');
  totalSalary.textContent = allDepartmentsTotal();
  footerRow.appendChild(totalSalary);

  tableEl.appendChild(footerRow);


}


function claculateNumberOfEmps(department) {
    let numOfEmps = 0;

    for (let i = 0; i < allEmployee.length; i++) {
        if (allEmployee[i].department === department) {
            numOfEmps++;
        }
    }

    return numOfEmps;
}

function claculateAvgSalary(department) {

    let totalSalary = 0;
    let numOfEmps = 0;

    for (let i = 0; i < allEmployee.length; i++) {
        if (allEmployee[i].department === department) {
            totalSalary += allEmployee[i].salary;
            numOfEmps++;
        }
    }

    let avgSalary = totalSalary / numOfEmps;

    if (isNaN(avgSalary)) {
        return 0;
    } else
        return Math.ceil(avgSalary);
}

function calculateTheTotal(department) {
    let departmentTotalSalary = {
        "administration": 0,
        "marketing": 0,
        "development": 0,
        "finance": 0
    };

    for (let i = 0; i < allEmployee.length; i++) {
        if (allEmployee[i].department === department) {

            departmentTotalSalary[department] += allEmployee[i].salary;
        }
    }

    return Math.ceil(departmentTotalSalary[department]);
}
function allDepartementsAvg() {
    let totalSalary = 0;
  
  
    for (let i = 0; i < allEmployee.length; i++) {
  
      totalSalary += allEmployee[i].salary;
  
  
    }
  
    let avgSalary = totalSalary / allEmployee.length;
    if (isNaN(avgSalary)) {
        return 0;
    } else
    return Math.ceil(avgSalary);
  }
  
  function allDepartmentsTotal() {
    let totalSalary = 0;
  
  
    for (let i = 0; i < allEmployee.length; i++) {
  
      totalSalary += allEmployee[i].salary;
  
  
    }
  
    return Math.ceil(totalSalary);
  }
render();