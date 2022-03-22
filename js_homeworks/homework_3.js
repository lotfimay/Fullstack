// Exercice 1:
// Write a JavaScript program that compare two objects 
// to determine if the first one contains equivalent 
// property values to the second one.

function compare(person1,person2){
    let result = true;
    let values = [];
    Object.keys(person2).forEach((key) => {
        values.push(person2[key]);
    });
    Object.keys(person1).forEach((key) => {
          let tmp = person1[key];
          if(values.indexOf(tmp) == -1){
              result = false;
          }
    });
    return result;
}
const person = {
    name : 'Lotfi',
    age : 20 , 
    entreprises : 'Google'
}

const person2 = {
    name : 'Lotfi',
    age : 20 ,
    entre : 'Google',
    test : 'Test'
}
console.log(compare(person,person2));



//  Exercice 2:
// Write a JavaScript function to find the common elements from two arrays
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2"] 

function difference(arr1,arr2){
    let result = [];
    arr1.forEach((element) => {
        if(arr2.indexOf(element) != -1){
            if(result.indexOf(element) == -1){
            result.push(element);
            }
        }
    });
    return result;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));