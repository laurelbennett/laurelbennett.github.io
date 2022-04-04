function buttonClicked () {
  document.getElementById('button-1').classList.toggle('is-red');
}

function myFunction() {
  document.getElementById("demo").style.color = "red";
}

function windowLoaded() {
  document.getElementById('button-1').addEventListener('click', buttonClicked);
}

function windowLoaded() {
  document.getElementbyId('button-2').addEventListener('mousemove', onmousemove);
}

window.onload = windowLoaded;




const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}

//document.addEventListener('keyup', event => {
//  if (event.code === 'Space') {
  //  console.log('Space pressed');
  }
})

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      const name = prompt('Enter a new name');
      para.textContent = `Player 1: ${name}`;
    }
}
