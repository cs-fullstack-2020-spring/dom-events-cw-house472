// Create a simple grid system as seen in the attached picture. Put a button called "1" in your main section and another button called "2" in your sidebar section. Put the number 0 in your header. If you click the #1 button the title in your header should change to "1" and the background to blue. If you click the #2 button the title in your header should change to "2" and the background to red. Use classlist to change the background.
console.log("here we go")
let btnOne = document.querySelector("#btnOne")
let btnTwo = document.querySelector("#btnTwo")
// let header = document.querySelector("header")
btnOne.addEventListener("click", chgOnclk)
function chgOnclk(event){
    header.innerText = "One" // not sure why you are able to access this element without explicitly selecting it
    
}
btnOne.addEventListener("click",chgclrclk) 
function chgclrclk(event){
    header.classList.add("bluebackground") // one function can run multiple actions
}
btnTwo.addEventListener("click", chgbtntwo)
function chgbtntwo(event){
    header.innerText = "Two"
}

// header.classList.add("bluebackground")
