const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee
}
updateEmployeeWithKeyAndValue()

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const deletedEmployee = { ...employee };
    deletedEmployee[key] = value;
    delete deletedEmployee.name;
    return deletedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
}