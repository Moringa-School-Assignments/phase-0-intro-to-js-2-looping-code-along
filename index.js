// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"];
let events = "surprise";
function writeCards(){
    let messages = [];
    // map updated and unique messages to the messages array
    names.map(name=> messages[names.indexOf(name)] = `Thank you, ${names[names.indexOf(name)]}, for the wonderful ${events} gift!`)
    return messages;
}
function countDown(number){
    number = 10;
    while(number >= 0){
        console.log(number)
        number --;
    }
}

// console.log(countDown())