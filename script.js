/* before starting the log message app, we need to check if the input is valid, in means
   that a string is given, otherwise it will give a fault message, and you have to try it again */
const userInput = input => {
    let userName = input
    if (typeof userName === "string" || userName instanceof String) {
        console.log("Hello" + ' ' + userName)
    } else {
        return "Invalid input"
    }
};
userInput("Emmanuel");

/* now that is done, we will add some messages and make them random, so everytime an user 
   logs something, a message out of that pool will appear to them.
   */
let user = "Pengu";
const randomLog = Math.floor(Math.random() * 5);
let message = "";

switch (randomLog){
    case 0:
        message = "I can give you a lot of penguins" + " " + user;
        break;
    case 1:
        message = "I can give you a lot of panda\'s" + " " + user;
        break;
    case 2:
        message = "I can give you some puppies" + " " + user;
        break;
    case 3:
        message = "I can give you some nacho\'s" +  " " + user;
        break;
    case 4:
        message = "Do you want beer, I have plenty" + " " + user + "!";
}
console.log(`As you noticed: ${message}`);
/* this outputs a different message very time you log in and refresh the page, you can 
you can make it as complex as possible, by adding a for loop, with array.length, and adding
filter, slice, and other functions into it, so you can actually change words into the message! */