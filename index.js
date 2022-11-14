
const characters = ["A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V",
"W","X","Y","Z","a","b","c","d","e","f","g","h","i"
 ,"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];``

let emptyBtnOne=document.getElementById("empty-btn-1");
let btn=document.getElementById ('generate');
let firstSpace=document.getElementById("empty-button-1")
let secondSpace=document.getElementById('empty-button-2')

btn.addEventListener('click', function(){
  let randomPassword=""
  let randomPasswordTwo=""
  for(let i=0; i<15; i++){
    randomPassword+=characters[getRandomPassword()]
    randomPasswordTwo+=characters[getRandomPassword()]
  }
  firstSpace.textContent=randomPassword
  secondSpace.textContent=randomPasswordTwo

})

function getRandomPassword(){
  return Math.floor(Math.random()*characters.length)
}
