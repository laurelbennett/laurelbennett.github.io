let myVariable;
myVariable = 'laurel';

let myVariable2 = 'peter';
myVariable = 'celine';

let myVariable ='bob'; //Strings

letmyNumber = 3; //Numbers

let myBoolean = true; //booleans
let myBoolean = false;

let myArray = [1, 'bob' true]; //arrays \
let myObject = document.querySelector('p');

//operators

6 + 9; //addition
'Hello' +'World' //string addition

myNumber === 4;
!(myNumber === 3);
myVariable !== 3;

//conditionals

let iceCream = 'chocolate';

//if whatever in parenthesis is true, do alert. if not, do else
if(iceCream === 'chocolate') {
  alert('what pops up if it is true');
} else {
  alert('what happens if it is false')
}

//event Event Listener

document.querySelector('html').addEventListener('click',
function() {
  alert('this is what happens when you click');
});
