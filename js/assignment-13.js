const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var newStory = storyText;
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

//let newStory = newStory.replace((":insertx:",xItem));
//let newStory = newStory.replace(":inserty:",yItem);
//let newStory = newStory.replace(":insertz:",zItem);
newStory = newStory.replace(":insertx:",xItem);
newStory = newStory.replace(":inserty:",yItem);
newStory = newStory.replace(":insertz:",zItem);


randomize.addEventListener('click', result);


function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
    newStory = newStory.replace(":insertx:",xItem);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(0.0714*300)+ " stone";
    const temperature =  Math.round(((94-32)*5)/9)+ " centigrade";
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
