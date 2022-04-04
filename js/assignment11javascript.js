window.addEventListener("keydown", function(event) {
  const p = document.createElement("p");
  if (event.keyCode === 13) {
  p.textContent = `they got toad!`;
  document.getElementById("output").appendChild(p);
}}, true);


  const form = document.getElementById('jokes');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  alert(`thanks!`)
  form.reset();
});


  //var name = document.getElementById("myName").value;
  //alert("Name: "+ name);


//KeyboardEvent: key='${event.key}' | code='${event.code}'
// document.addEventListener('keydown', event => {
  // if (event.code === 'Space') {
  //console.log('Space pressed');
  //  alert("it got toad!");
  //}
//})

//document.body.onkeyup = function('keydown'){
  //  if(keyCode == 32){
  //   alert("it got toad!");
  //  }
//}

//window.onkeypress = function('keydown') {
  //    if (event.which == 32) {
      //  alert(event.code + "it got toad!" + event.which);
//}
