var firstName = "John";
var lastName = "Doe";
var active = true;
var age = 43;
var ageString = "43";

if(age < 20){
    console.log("John is very young");
} else if (age > 20 && age < 50){
    console.log("John is middle aged");
} else{
    console.log("John is enjoying the twilight of his life");
}

console.log(age == ageString);
console.log(age === ageString);

var max = 5;