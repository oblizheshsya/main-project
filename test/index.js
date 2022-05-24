const recipeMenuButton = document.querySelector(".dropdownMenuButton")
const dropDownMenu = document.querySelector(".dropDownMenu")
const dropdownMenuContainer = document.querySelector(".dropdownMenuContainer")

dropdownMenuContainer.addEventListener("mouseover", showRecipeMenu)
dropdownMenuContainer.addEventListener("mouseout", closeRecipeMenu)

function showRecipeMenu(){
    dropDownMenu.classList.remove("close")
    dropDownMenu.classList.add("open")
}
 
function closeRecipeMenu(){
    dropDownMenu.classList.remove("open")
    dropDownMenu.classList.add("close")
}

const answers = document.querySelectorAll(".answer")
const resultButton = document.querySelector(".result-btn")
const returnButtons = document.querySelectorAll(".return-btn")
let sum = 0;

answers.forEach(e => e.addEventListener("click", () => {
    const name = e.children[0].attributes.name.nodeValue
    answers.forEach(e => {
        if(e.children[0].attributes.name.nodeValue === name){
            e.children[0].attributes.checked.nodeValue = ""
            e.classList.remove("ch")
        }
    })
    e.children[0].attributes.checked.nodeValue = "checked"
    e.classList.add("ch")
}))

const page = document.querySelector(".main")
const good = document.querySelector(".good")
const bad = document.querySelector(".bad")
const middle = document.querySelector(".middle")
console.log(page)

resultButton.addEventListener("click", () => {
    answers.forEach(e => {
        if(e.children[0].attributes.checked.nodeValue === "checked"){
            sum += +e.children[0].attributes.value.nodeValue
        }
    })
    page.classList.add("none")
    if(sum < 19){
        bad.classList.remove("none")
    }
    if(sum >= 19 && sum <= 30){
        middle.classList.remove("none")
    }
    if(sum > 30){
        good.classList.remove("none")
    }
})

returnButtons.forEach(e => e.addEventListener("click", () => {
    document.location.reload()
})
)
