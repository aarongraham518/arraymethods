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

const ages = [33,12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

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

const canDrink = ages.filter(function(age){
    
});

//map

//sort

//reduce

