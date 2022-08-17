let display = document.getElementById('display');

// getting all of our buttons now, and converting it into
// an array with Array.from to cross check if this is working, we use console.log()

let buttons = Array.from(document.getElementsByClassName("button"));

// mapping through our buttons array and applying a click eventListener every buttons
// all we are doing here by putting all the consoles in the addEventListener before the switch statement is to see the element we clicked on in our console
/* console.log("clicked");
console.log(e);
console.log(e.target);
console.log(e.target.innerText);*/


// We set some cases for our calculators switch statement
// the first case is to clear the screen and leave nothing then when 'C' is clicked
//  we used break; so we would not display the 'C' or the "←"
// the 2nd case we added is to do backspace(delete last character) when we click on "←" and to only do this if
// any character is detected in the screen
// the 3rd case we added is for our equal to sign. note that: JavaScript has an in-built function called eval
// that will take a string as a parameter and then calculate it like it would be a javaScript code for us rather than having to write cases for all signs
// we added break; in the eval function cse to get rid of = after we have gotten our final answer


// we are done with our calculator but let's give user more amazing experience 
// by adding inalid expressions and avoiding errors in our console
// we want to make it that if user enters -/=(which is an invalid expression) we
// want to tell them that their expression is invalid, to do this, let us use a try catch Error
// eval executes any type of javaScript.. so for learning you should use it but avoid it for applications with real users
//  a big failure with eval is if we try out 22(3), this can be evaluated with mathematics
// but users will get our try catch error because eval cannot exectue 229(3)



buttons.map( button => {
    button.addEventListener("click", (e) => {
    //    Let us now write a switch statement that will check for the innerText
    switch(e.target.innerText){
        case 'C':
            display.innerText = '';
            break;
        case  '←':
            if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
            }
            break;
        case '=':
           try{
            display.innerText = eval(display.innerText);
           } catch{
            display.innerText = "This is an error, please try again"
           }
            break;
        default:
            display.innerText += e.target.innerText;
    } /* with this now, when we click on any button in our browser, we see it printed */
    });
});