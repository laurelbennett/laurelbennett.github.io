const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const xItem = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const yItem = ["the soup kitchen", "Disneyland", "the White House"];
const zItem = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    console.log(p.replace('Bob', customName.value))
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(0.0714 'stone');
    const temperature =  Math.round(((94-32)*5)/9)'centigrade');
    console.log(p.replace('300', weight))
    console.log(p.replace('94', temperature))
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
// assignment
const newStory = document.storyText('newstory')

var xItem = randomValueFromArray(newStory)
var yItem = randomValueFromArray(newStory)
var zItem = randomValueFromArray(newStory)
