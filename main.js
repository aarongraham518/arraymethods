const companies = [
    {name: "Company one", category: "Finance", start: 1981, end: 2003},
    {name: "Company two", category: "Retail", start: 1992, end: 2008},
    {name: "Company three", category: "Auto", start: 1999, end: 2007},
    {name: "Company four", category: "Retail", start: 1989, end: 2010},
    {name: "Company five", category: "Technology", start: 2009, end: 2014},
    {name: "Company six", category: "Finance", start: 1987, end: 2010},
    {name: "Company seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//old way
// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

//forEach can take in...(company, index ,companies)
// companies.forEach(function(company){
//     console.log(company.name);
// });

//filter
/* all of the ages over 21 years old*/
//old way
// let canDrink = [];
// for(let i=0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink);

//Actual filter method
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });

//filter method with arrow function and 1!!!! line of code
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

//Filter "retail companies"
// const retailCompanies = companies.filter(function(retail){
//     if(retail.category.toLowerCase() === 'retail'){
//         return true;
//     }
// });

// const retailCompanies = companies.filter(retail => retail.category.toLowerCase() === 'retail');
// console.log(retailCompanies);

//All the companies who have started in the 1980's
// const eightiesCompanies = companies.filter(function(eightComps){
//     if((eightComps.start >= 1980) && (eightComps.start <= 1989)){
//         return true;
//     }
// });

// const eightiesCompanies = companies.filter(eightComps => (eightComps.start >= 1980) && (eightComps.start <= 1989))
// console.log(eightiesCompanies);

//Lets get all of the companies that have lasted 10 or more years
// const tenYear = companies.filter(tenYearComp =>
//     ((tenYearComp.end) - (tenYearComp.start) >= 10));

// console.log(tenYear);
//map
//Grab all of the company names and create own array
// const companyNames = companies.map(function(company){
//     return company.name
// });

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

//shorthand arrow function version
// const testMap = companies.map(company =>
//     `${company.name} [${company.start} - ${company.end}]`);

// console.log(testMap);

//get the squareroot of ages
// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

//ages array times 2
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesTimesTwo);

//Square ages array, them mulitiply by 2
// const squareTimesTwo = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);

// console.log(squareTimesTwo);

//sort
//sort companies by start year (with two params)
// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });

//arrow function shortener
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

//sort ages array from loweset to highest
// const sortedAges = ages.sort((a, b) => a - b); //a - b for asc, b-a for dsc
// console.log(sortedAges);

//reduce

//Lets first add the ages array numbers together
// let ageSum = 0;

// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);  //<- 0 is the starting value for total var

//arrow function
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//get total years for all companies
// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// }, 0);

// const totalYears = companies.reduce((total, company) =>
// total + company.end - company.start, 0)
// console.log(totalYears);

//Combine Methods