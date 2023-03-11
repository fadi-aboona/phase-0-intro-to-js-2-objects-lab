// Write your solution in this file!

const employee = {
    name: "fadi",
    streetAddress: "323" 
}



function updateEmployeeWithKeyAndValue(employee, key, value) {
    return{
        ...employee,
        [key]: value,
    };
}



function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value;
    return employee
}



function deleteFromEmployeeByKey(employee, name, value) {
    const obj1 = {
        ...employee
    }
    delete obj1[name]
    return obj1 
}


function destructivelyDeleteFromEmployeeByKey(employee, name, value) {
    delete employee[name]
    return employee
    
}