// net salary calculator

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//function to calculate paye

function calculatePaye(annualSalary){
    let tax = 0;
    if(annualSalary <= 288000){
        tax = 0.10 * annualSalary;
    }else if(annualSalary <= 388000){
        tax = 28800 + (annualSalary -288000) *0.25;
    }else if(annualSalary <=6000000){
        tax = 28800 + 25000 + (annualSalary - 388000) *0.30;
    }else if(annualSalary <=9600000){
        tax = 28800 + 25000 + 630000 + (annualSalary - 6000000) *0.325;
    }else{
        tax = 28800 + 25000 + 630000 + 1170000 + (annualSalary - 9600000) *0.35;
    }
    //returning monthly paye
    return tax / 12;
}

//function to calculate NHIF deduction
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 43999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    // For 100,000 and above
    return 1700; 
}

//function to calculate NSSF dduction
function calculateNSSF(grossSalary) {
    const tier1Limit = 7000; // Updated for February 2024
    const tier2Limit = 36000;

    const tier1Contribution = Math.min(grossSalary, tier1Limit) * 0.06;
    const tier2Contribution = Math.max(0, Math.min(grossSalary - tier1Limit, tier2Limit - tier1Limit)) * 0.06;

    return tier1Contribution + tier2Contribution;
}

//function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const annualSalary = grossSalary * 12;

    const paye = calculatePAYE(annualSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const netSalary = grossSalary - (paye + nhif + nssf);
    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
    };
}

//testing the function
const basicSalary = 60000;
const benefits = 20000;

const netSalaryData = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", netSalaryData.grossSalary);
console.log("Paye:", netSalaryData.paye);