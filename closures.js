const outerFunction = () => {
    let outerVariable = 'I am from outer function';

    let count = 2;
    const innerFunction = () => {
        console.log(count++)
        console.log(outerVariable); // Accesses outerVariable from outerFunction
        console.log('-------------------END----')
    }

    return innerFunction;
}

const innerFunc = outerFunction();
// innerFunc(); // Output: I am from outer function
// innerFunc();

// innerFunc();

// -----------------------------------------------------------

function makeMultiplier(multiplier) {
    console.log("multiplier", multiplier)
    return function (number) {
        console.log("number", number)
        return number * multiplier;
    };
}

// const multiplyByTwo = makeMultiplier(2);
// console.log(multiplyByTwo(100)); // Output: 10

// const multiplyByTen = makeMultiplier(10);
// console.log(multiplyByTen(5)); // Output: 50


function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: (amount) => {
            balance += amount;
            console.log(`Deposited: $${amount}. New Balance: $${balance}`);
        },
        withdraw: (amount)=> {
            if (amount > balance) {
                console.log(`Insufficient funds! Balance: $${balance}`);
                return;
            }
            balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${balance}`);
        },
        getBalance:()=> {
            console.log(`Current Balance: $${balance}`);
            return balance;
        }
    };
}

let bankAccount = createBankAccount(1000);
bankAccount.deposit(1000); 
bankAccount.withdraw(500); 
bankAccount.getBalance(); 


