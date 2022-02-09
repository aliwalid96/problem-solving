"use strict";

// 1) ---------------------
//
//  using the (objLat) function; return the formatted text based on the provided object as the example:
//  let obj = {
//      firstName: 'Jaber',
//      lastName: 'Saleh',
//      age: 67,
//      hobby: 'Gaming and Sleeping'
//  }
//   ===>
//   'my name is Jaber Saleh I am 67 YO, and I love Gaming and Sleeping.'

//  Note that:
//  1- The text template is 'my name is ** ** I am ** YO, and I love **.'
//  2- The first letters of the firstName and lastName should be capital letter

// ------------------------

const objLat = (data) => {
    let firstName = data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1);
    let lastName = data.lastName.charAt(0).toUpperCase() + data.lastName.slice(1);

    let age = data.age;
    let hobby = data.hobby;
    // capitalizing :console.log(str.charAt(0).toUpperCase() + str.slice(1));
    //const combine = `${str1} ${str2}`;
    return `my name is ${firstName} ${lastName} I am ${age} YO, and I love ${hobby}.`;
    // write your code here
};



// 2) ---------------------
//
//  Rekey is receiving info about applicants for his startup company (as array of objects), containing first name,
//  last name, age and technology they know.
//  Rekey only cares about the full name and the technology if the applicant have more than one year of Experience
//
//  Reformat the array of objects that you are receiving by returning a new array of objects that contain only
//  fullName and tech if the applicant has more than one year of Experience

// EX:
// let cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 7,
//         tech: "Java"
//     }
// ]
//
//   ===>

//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS" 
//     },
//     {
//         fullName: "Shira",
//         tech: ".Net"
//     },
//     {
//         fullName: "Isabella",
//         tech: "Java"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name

// ------------------------




const cvFormatter = (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].yearsOfExperience > 1) {
            let obj = {};
            let firstName="";
            let lastName="";
            if(arr[i].firstName!=null){
                 firstName = arr[i].firstName;
            }
            if(arr[i].lastName!=null){
                 lastName =" "+ arr[i].lastName;
            }
            
            
            obj["fullName"] = firstName+lastName;
            obj["tech"] = arr[i].tech;
            newArray.push(obj);
        }
    }
    return newArray;
};










// 3) ---------------------
//
//  Rekey wants to get statistic about the applicants
//  using the array of object you will be getting, return an object that has the following properties
//
// let result = {
//     python_Devs: 0,
//     javaScript_Devs: 0,
//     dotNet_Devs: 0,
//     java_Devs: 0,
//     totalApplicants: 0,
//     rejectedApplicants: 0,
// }
//
// and fill it up based on the results

//  Note that:
//  1- rejectedApplicants are applications that has both the names empty or null and whoever have less than one year of Experience

// ------------------------
const applicationsStatics = (arr) => {
    const result = {
        python_Devs: 0,
        javaScript_Devs: 0,
        dotNet_Devs: 0,
        java_Devs: 0,
        totalApplicants: arr.length,
        rejectedApplicants: 0,
      };
      arr.forEach((applicant) => {
        if (applicant.tech == "Java"){
            result.java_Devs++;
        } 
        if (applicant.tech == "JS"){
            result.javaScript_Devs++;
        } 
        if (applicant.tech == ".Net"){
            result.dotNet_Devs++;
        } 
        if (applicant.tech == "Python"){
            result.python_Devs++;
        } 
        if (applicant.firstName == "" && applicant.lastName == ""){
          result.rejectedApplicants++;
        }
        if (applicant.firstName == null && applicant.lastName == null ){
            result.rejectedApplicants++;
          }
          
        if (applicant.yearsOfExperience <= 1){
            result.rejectedApplicants++;
        } 
      });
      return result;
};

// 4) ---------------------
//
//  A Certain School principal wants to calculate the average score of each class in each grade in the school
//  so he requested a programmer to solve this issue for him instead of doing it again every time
//
//  given the school data, calculate the average score of the students of each class in each grade
//  then change the avg value for the class
//  EX:

let data = {
    SchoolName: "David Academy",
    Capacity: 1000,
    grades: [
        {
            grade: "First",
            numberOFClasses: 3,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70
                    ]
                },
            ]
        },
        {
            grade: "Second",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60,
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70
                    ]
                },
            ]
        },
        {
            grade: "Third",
            numberOFClasses: 2,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42
                    ]
                },
            ]
        },
        {
            grade: "Forth",
            numberOFClasses: 4,
            classes: [
                {
                    avg: 0,
                    classNumber: "01",
                    classScores: [
                        63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52
                    ]
                },
                {
                    avg: 0,
                    classNumber: "02",
                    classScores: [
                        100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49
                    ]
                },
                {
                    avg: 0,
                    classNumber: "03",
                    classScores: [
                        97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87
                    ]
                },
                {
                    avg: 0,
                    classNumber: "04",
                    classScores: [
                        64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72
                    ]
                },
            ]
        },
    ],
};

//  Note that:
//  1- This is not the exact data you will be getting every time and the solution should be dynamic
//  2- You need to round the average to the nearest lower number 
// dddddddd

const classesAvg = (data) => {
    for (let i = 0; i < data.grades.length; i++) {
        for (let j = 0; j < data.grades[i].classes.length; j++) {
          let sum = 0;
          data.grades[i].classes[j].avg;
          for (let k = 0; k < data.grades[i].classes[j].classScores.length; k++) {
            sum += data.grades[i].classes[j].classScores[k];
          }
          data.grades[i].classes[j].avg = Math.floor(
            sum / data.grades[i].classes[j].classScores.length
          );
        }
      }
      return data;



};

module.exports = { objLat, cvFormatter, applicationsStatics, classesAvg };