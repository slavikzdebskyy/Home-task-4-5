/**
 * Реалізуйте клас Worker(Працівник), який буде мати такі властивості: 
 * firstName(ім'я), secondName(прізвище), 
 * rate(ставка за день роботи), days(кількість відпрацьованих днів). 
 * Також клас повинен мати метод getSalary(), 
 * який буде виводити зарплату працівника. 
 * Зарплата - це множення ставки rate на кількість відпрацьованих днів days.
 */

// your logic here ......


// Ось так повинен працювати наш клас:
const worker = new Worker('Ivan', 'Ivanov', 10, 31);

console.log(worker.name); // виведе 'Ivan'
console.log(worker.surname); //виведе 'Ivanov'
console.log(worker.rate); //виведе 10
console.log(worker.days); //виведе 31
console.log(worker.getSalary()); //виведе 310 - тобто 10*31