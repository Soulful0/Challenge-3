// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];

  while (
    confirm(
      "Do you have an employee you would like to add to the employee roster?"
    )
  ) {
    const employee = {
      firstName: "",
      lastName: "",
      salary: "",
    };

    employee.firstName = prompt("Enter first name");
    employee.lastName = prompt("Enter last name");
    employee.salary = prompt("Please enter their salary");

    employeesArray.push(employee);
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum += Number(employeesArray[i].salary);
  }
  const averageSalary = sum / employeesArray.length;
  console.log(`Average Salary: ${averageSalary}`);
  return averageSalary;
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  employeesArray.length === 0 && console.log("No employees in array");

  if (employeesArray.length > 0) {
    const employeeNumber = Math.floor(Math.random() * employeesArray.length);
    const getRandomEmployee = employeesArray[employeeNumber];
    const fullName = `${getRandomEmployee.firstName} ${getRandomEmployee.lastName}`;
    console.log(`Random Employees Information: ${fullName}`);
  }
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
