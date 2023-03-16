// only for the first drum
// document.querySelector("button").addEventListener("click",handleClick);

//anonymous function
//input1,input2
// document.querySelector("button").addEventListener("click",function(){
// console.log("I got clicked");
// }
// the first input specifies that what event it should listen to and second specifies what 
// it should do once the event gets clicked.


// what this line of code does is it finds the first button in our document,which is w drum 
// button and then it adds a event listener to that button so that it listens for clicks that
//happen on that button and when it does it runs the code inside the function handleClick.
// and that should send us an alert I got clicked.

// IMPORTANT->WE ARE NOT USING () AFTER THE FUNCTION HANDLECLICK TO CALL IT BECOZ:-
// what happens is that our code will run and run until it hits the script tag and then it'll
// go and find the index.js file and it'll run this line of code and if we add the parentheses
// here ("click",handleClick()) then this is a straight up method call and it will call that
// method straight awaywhen it's adding the event listener.But we want it to trigger when the 
// click happens. so instead of calling the function as we would we are passing it as an input
// so that means we're waiting for the click event to happen before we call the handleclick
// function. It is an idea of passing a function as an input so that it can be called at a
//  later time.

// detecting buttonpress
// for all the drums
 var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
    //  it will look through the document and grab all the elements that have a class of drum.
    // so that basically gets us all of the buttons that have class of drum.Now the next thing we
    // do is we loop through all of these elements starting from when i is equal to 0 and we add
    // the event listener to it ,then to second button and so on... 
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {

        //console.log(this);
        // this will return the particular button (drum) object that triggered the event by 
        // simply console logging this

        // console.log(this.innerHTML);
        // this will return the particular letter on which we have clicked

        //    this will change the color of the letter clicked
        // console.log(this.style.color="white");
        var buttonInnerHTML = this.innerHTML;
       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
    }
    );

}
// detecting keyboard press
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            //it is a method (function) that will play a sound.
            // HTMLMEDIAELEMENT.PLAY() IS A METHOD 
            tom1.play();
            // it is a constructor function
            // what it does is it creates a new variable audio then it seems to create some sort 
            // of new audio object and it specifies the name of the sound file.
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        
        default:
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    }
}

function buttonAnimation(currentKey)
{
// when we need to access a particular class we write
// document.querySelector(".w");
// here we'll have to write
var activeButton=document.querySelector("."+ currentKey);
activeButton.classList.add("pressed");
// now in order to create an animation out of it we should remove the added class so that it 
// appears like an animaion
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);

}