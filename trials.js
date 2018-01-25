"use strict";

// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
    ['home', '510-867-5309'],
    ['mobile', '415-555-1212'],
    ['business','415-123-4567']]);

// Add some phone numbers to our map

phoneNumbers.set('Google', '503-123-1234');

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information

function accountInfo(accountHolder, accountNumber, businessName) {
    // Prints account information.

    console.log(`Account Holder Name: ${accountHolder}`);
    console.log(`Account Holder # ${accountNumber}`);
    console.log(`Business Name: ${businessName}`);

}


// Add function to print all addresses, including a header

function showAddresses(addresses) {
    // Shows all addresses.
    console.log("Addresses:");

    for (let address of addresses) {
        console.log(address);
    }

}


// Add function to print phone types and numbers

function showPhone(phoneNumbers) {
    // Shows all numbers.
    console.log("Phone Numbers:");

    for (let [type, number] of phoneNumbers) {
        console.log(`${type}: ${number}`);
    }
}


// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions

let transactions = new Map([
    ['May-2', '-500'],
    ['May-13', '+1200'],
    ['May-15', '-100'],
    ['May-21', '-359'],
    ['May-29', '+2200']]);


// Add function to add transactions

function addTransaction(date, amt) {
    // Takes a date and amount and stores it as a transaction.

    transactions.set(date, amt);
}

// Add function to show balance status

function showBalanceStatus(balance) {
    // Displays balance. Warns user if balance is low or overdrawn.

    console.log(`Balance: ${balance}`);

    if (balance < 0) {
        console.log("YOU ARE OVERDRAWN");
    } else if (balance < 20) {
        console.log("Warning: You are close to zero balance.");
    } else {
        console.log("Thank you for your business!");
    }

}


// Add function to show transactions

function showTransactions(transactions, balance) {
    // Displays how user's balance changes for every withdrawal/deposit.
    console.log(`Starting balance: ${balance}`);

    let transactionType;

    for (let [date, amt] of transactions) {
        if (amt[0] === '-') {
            transactionType = 'withdrawal';
            balance -= Number(amt.slice(1));
        } else {
            transactionType = 'deposit';
            balance += Number(amt.slice(1));
        }

        console.log(`${date}: ${transactionType} ${amt} | balance: ${balance}`);

        if (balance < 0 && transactionType === 'withdrawal')  {
            balance -= 25;
            console.log("Warning: Your balance has fallen below zero.");
            console.log("A $25 fee has been charged to your account.");
            console.log(`Your new balance is: ${balance}`);
        }
    }
}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info (?????????)

let customerInfo = {
    "accountHolder": accountHolder,
    "accountNumber": accountNumber,
    "businessName": businessName,
    "addresses": addresses,
    "phoneNumbers": phoneNumbers,
    "transactions": transactions,
    "startingBalance": 26000
};


// Function to add customer attributes

function addProperties(customerInfo, melon='Canteloupe', numPets=0) {
    //
    customerInfo.faveMelon = melon;
    customerInfo.pets = numPets;
}

// ///////////////////////////////////////////////////////
// Getting a Business Loan

// conditional for customerInfo.faveMelon === 'Casaba' OR the pet thing
// preferredCustomer var we can set to True or False ^^^^^^^^

// 3 tiers of income, < 100,000 ; 8%, 5% if PC
// 100,000 - 200,000 ; 7%, 4% if PC
// > 200,000, 4%


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week


// Add a function for weekly hours






