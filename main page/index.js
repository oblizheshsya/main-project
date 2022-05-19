const recipeMenuButton = document.querySelector(".dropdownMenuButton")
const dropDownMenu = document.querySelector(".dropDownMenu")
const dropdownMenuContainer = document.querySelector(".dropdownMenuContainer")

dropdownMenuContainer.addEventListener("click",() => {
    if(dropDownMenu.classList.contains("close")){
        dropDownMenu.classList.remove("close")
        dropDownMenu.classList.add("open")
    }else{
        dropDownMenu.classList.remove("open")
        dropDownMenu.classList.add("close")
    }
})


const monday = `
<div class="dishes-item monday">
<img class="dishes-item_img" src="./img/пн.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Понедельник</div>
    <ul>
        <li><a href="../recipes/Белоснежка/index.html">Салат “Белоснежка” (0,82р.)</a></li>
        <li><a href="../recipes/necvizh/index.html">Котлета “Нясвіж” (3,55р.)</a></li>
        <li><a href="../recipes/shi-main/index.html">Щи кислые (1,11р.)</a></li>
        <li><a href="../recipes/Скорый/index.html">Салат "Скорый" (1,49р.)</a></li>
        <li><a href="../recipes/gylyash/index.html">Гуляш из говядины (4,72р.)</a></li>
        <li><a href="../recipes/fruit/index.html">Салат "Фруктовый" (1,45р.)</a></li>
    </ul>
</div>
</div>`

const tuesday =`<div class="dishes-item tuesday">
<img class="dishes-item_img" src="./img/вт.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Вторник</div>
    <ul>
        <li><a href="../recipes/bitochki fish/index.html">Биточки рыбные (2,29р.)</a></li>
        <li><a href="../recipes/neptun/index.html">Шницель Нептун (2,82р.)</a></li>
        <li><a href="../recipes/Витаминный/index.html">Салат “Витаминный” (0,94р.)</a></li>
        <li><a href="../recipes/Винегрет овощной/index.html">Винегрет овощной (1,56р.) (0.24р.)</a></li>
        <li><a href="../recipes/mogilev-main/index.html">Борщ могилёвский (1,08р.)</a></li>
        <li><a href="../recipes/fruit/index.html">Салат "Фруктовый" (1,45р.)</a></li>
    </ul>
</div>
</div>`


const wednesday = `
<div class="dishes-item wednesday">
<img class="dishes-item_img" src="./img/ср.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Среда</div>
    <ul>
        <li><a href="../recipes/Свитанок/index.html">Салат “Свитанок” (1,15р.)</a></li>
        <li><a href="../recipes/школьник/index.html">Биточки “Школьник” (2,25р.)</a></li>
        <li><a href="../recipes/ПохлебкаГрибная/index.html">Похлёбка грибная со сметаной (1,14р.)</a></li>
        <li><a href="../recipes/mogilev-main/index.html">Колбаски по-могилёвски (2,85р.)</a></li>
        <li><a href="../recipes/sun/index.html">Салат "Солнышко" (1,72р.)</a></li>
        <li><a href="../recipes/fruit/index.html">Салат "Фруктовый" (1,45р.)</a></li>
    </ul>
</div>
</div>`

const thursday = `<div class="dishes-item thursday">
<img class="dishes-item_img" src="./img/чт.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Четверг</div>
    <ul>
        <li><a href="../recipes/polesski/index.html">Салат “Полесский” (1,64р.)</a></li>
        <li><a href="../recipes/indeika-main/index.html">Филе индейки с сыром (3,18р.)</a></li>
        <li><a href="../recipes/rassolnik-main/index.html">Рассольник Ленинградский (1,32р.)</a></li>
        <li><a href="../recipes/sekynda/index.html">Салат “Секунда” (1,38р.)</a></li>
        <li><a href="../recipes/bivshteks smak/index.html">Бифштекс Смак (2,85р.)</a></li>
        <li><a href="../recipes/fruit/index.html">Салат "Фруктовый" (1,45р.)</a></li>
    </ul>
</div>
</div>`

const friday = `<div class="dishes-item friday">
<img class="dishes-item_img" src="./img/пт.png">
<div class="dishes-item_text">
    <div class="dishes-item_title">Пятница</div>
    <ul>
        <li><a href="../recipes/salatt-main/index.html">Салат “Осенний” (1,43р.)</a></li>
        <li><a href="../recipes/гнездоГлухаря/index.html">Котлета “Гнездо глухаря” (3,55р.)</a></li>
        <li><a href="../recipes/kartofel-main/index.html">Суп картофельный с рыбой (1,27р.)</a></li>
        <li><a href="../recipes/Винегрет овощной/index.html">Винегрет овощной (1,56р.)</a></li>
        <li><a href="../recipes/шницель/index.html">Шницель отбивной из свинины (3,00р.)</a></li>
        <li><a href="../recipes/fruit/index.html">Салат "Фруктовый" (1,45р.)</a></li>
    </ul>
</div>
</div>`


const weekDaysCode=[ wednesday, thursday, friday, monday, tuesday]

let mondayInHtml, tuesdayInHtml, wednesdayInHtml, thursdayInHtml, fridayInHtml
const weekDaysInHtml = [mondayInHtml, tuesdayInHtml, wednesdayInHtml, thursdayInHtml, fridayInHtml]

const backButton = document.querySelector(".backButton")
const nextButton = document.querySelector(".nextButton")
const dishesContainer = document.querySelector(".dishes-content")

dishesContainer.insertAdjacentHTML("beforeend", monday)
dishesContainer.insertAdjacentHTML("beforeend", tuesday)


backButton.addEventListener("click", doBack)
nextButton.addEventListener("click", doNext)

function doNext(){
    weekDaysInHtml[0] = dishesContainer.firstElementChild
    weekDaysInHtml[0].remove()
    weekDaysInHtml.push(weekDaysInHtml[0])
    weekDaysInHtml.shift()
    
    dishesContainer.insertAdjacentHTML("beforeend", weekDaysCode[0])
    weekDaysCode.push(weekDaysCode[0])
    weekDaysCode.shift()
}

function doBack(){
    weekDaysCode.unshift(weekDaysCode[4])
    weekDaysCode.pop()
    dishesContainer.insertAdjacentHTML("afterbegin", weekDaysCode[0])

    weekDaysInHtml[0] = dishesContainer.lastElementChild
    weekDaysInHtml[0].remove()
    weekDaysInHtml.push(weekDaysInHtml[4])
    weekDaysInHtml.shift()

}



