function createEmployeeRecord(employeeRecord){
    const employee = {
 //first element populates firstName 0
    firstName: employeeRecord[0],
//second element populates familyName 1
    familyName: employeeRecord[1],
//third element populates title 2
    title: employeeRecord[2],
//fourth element populates payPerHour 3
    payPerHour: employeeRecord[3],
//initializes a field, timeInEvents, to hold an empty Array
    timeInEvents: [],
//initializes a field, timeOutEvents, to hold an empty Array
    timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employeeRecords){
    const recordsArray = employeeRecords.map(employee => createEmployeeRecord(employee))
    return recordsArray
}

function createTimeInEvent (date){
    const timeIn = {
        type: 'TimeIn',
        date: date.split(' ')[0],
        hour: parseInt(date.split(' ')[1])
    }
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent (date){
    const timeOut = {
        type: 'TimeOut',
        date: date.split(' ')[0],
        hour: parseInt(date.split(' ')[1])
    }
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate (date) {
    const dateComparisonIn = this.timeInEvents.filter(timeInEvent => timeInEvent.date === date)
    const timeInHrs = dateComparisonIn[0].hour
    const dateComparisonOut = this.timeOutEvents.filter(timeOutEvent => timeOutEvent.date === date)
    const timeOutHrs = dateComparisonOut[0].hour

   const hrsWorked = (timeOutHrs - timeInHrs)/100
   return hrsWorked
}

function wagesEarnedOnDate (date) {
    const payRate = this.payPerHour
    const wagesEarned = hoursWorkedOnDate.call(this, date) * payRate
    return wagesEarned
}

// function allWagesFor (employeeRecord) {
//     const allDates = employeeRecord.timeInEvents.map(timeInEvent => timeInEvent.date)
//     const allWages = allDates.map(date => wagesEarnedOnDate(employeeRecord, date))
//     const sumAllWages = allWages.reduce((a,b) => a+b)
//     return sumAllWages
// }

function findEmployeeByFirstName(collection, firstNameString){
    const filtEmployees = collection.filter(employee => employee.firstName === firstNameString)
    return filtEmployees[0]
}


function calculatePayroll(employeeRecords) {
    const allWagesEmployee = employeeRecords.map(employee => allWagesFor.call(employee))
    const sumAllEmployeeWages = allWagesEmployee.reduce((a,b) => a+b)
    return sumAllEmployeeWages
}







/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

