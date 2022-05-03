const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
var a = document.createElement('a');
const storyText = ":insertx:";
var newStory = storyText;
const insertX = ["'Cold Heart'-Elton John & Dua Lipa","'A Public Affair' -Jessica Simpson","'Dancing In the Moonlight' -King Harvest","'The Spins' - Mac Miller","'Sir Duke', -Stevie Wonder","'Island In the Sun' -Weezer","'I Wish' -Skee Lo","'Here Comes the Sun' -The Beatles","'Brown Eyed Girl' -Van Morrison","'Walking On Sunshine' -Katrina and the Waves","'Baby Girl' -Disco Lines","'Levitating' -Dua Lipa","'Pocketful of Sunshine' -Natasha Bedingfield","'Upside Down' -Jack Johnson","'Put Your Records On' -Ritt Momney","'Perfect Day' -Hoku","'Kiss Me More' -Doja Cat feat. SZA","'Friday' -Riton & Nightcrawlers","'Peanut Butter Jelly' -Galantis","'Run-Around' -Blues Traveler"];



let xItem = randomValueFromArray(insertX);

newStory = newStory.replace(":insertx:",xItem);



randomize.addEventListener('click', result);


function result() {


  if(document.getElementById("uk").checked) {
    const weight = Math.round(0.0714*300)+ " stone";
    const temperature =  Math.round(((94-32)*5)/9)+ " centigrade";
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);

}


  story.textContent = newStory;
  story.style.visibility = 'visible';
}
