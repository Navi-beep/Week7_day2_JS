/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/


function toCelcius(fahrenheit){
let celcius = (fahrenheit - 32 ) *5/9;
return celcius;
}

console.log(toCelcius(212));








// im getting stuck with this one//
/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
}

   change_password(current_password, new_password){
        if (current_password === this.password){
            this.password = new_password;
            console.log("Your password has been changed")
            
        }
        else {
            console.log("Your password does not match, please try again.")
        }
            }
}

newUser = new User("Peanut", "seed123")
newUser.change_password("seed123", "millet123")


/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

   // function squareNeg(squareNegatives){
   //     let squareNegative = [];
   //     for (let n of squareNegatives){
   //         if (n<0){
   //             squareNegative.push(n**2);
   //         return squareNegative
   //         }
  //      }
  //  }

 //   var squareNegatives = [-10, -3, 4, -2, 8, 9, -3];
//    squareNegatives.forEach(n => console.log(n ** 2));


 //let newSquare = []
 //for ()

var squareNegativeo = [-10, -3, 4, -2, 8, 9, -3];

function squareNeg(array) {
    return array.filter(n => n < 0).map(i => i **2)       
}

console.log(squareNeg(squareNegativeo));


