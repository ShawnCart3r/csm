const legion = [

    {

        id: 0,
        img: "./image/gathered.jpg",
        category: "all",
        description: "",
        url: "https://warhammer40k.fandom.com/wiki/Black_Legion",
    
    },
    
 
    {

    id: 1,
    img: "./image/black.jpg",
    category: "Black Legion",
    description: "",
    url: "https://warhammer40k.fandom.com/wiki/Black_Legion",

},

{
    id: 2,
    img: "./image/emperor.webp",
    category: "Emperor's Children",
    description: "",
    url: "https://warhammer40k.fandom.com/wiki/Emperor%27s_Children",

},

{
    id: 3,
    img: "./image/eater.jpg",
    category: "World Eaters",
    description: "",
    url: "https://warhammer40k.fandom.com/wiki/World_Eaters",

},

{
    id: 4,
    img: "./image/death.jpg",
    category: "Death Guard",
    description: "",
    url: "https://warhammer40k.fandom.com/wiki/Death_Guard",

},

{
    id: 5,
    img: "./image/son.png",
    category: "Thousand Sons",
    description: "",
    url: "https://warhammer40k.fandom.com/wiki/Thousand_Sons",

},

{
    id: 6,
    img: "./image/iron.webp",
    category: "Iron Warriors",
    description: "",
    url: "https://warhammer40k.fandom.com/wiki/Iron_Warriors",

},

{
    id: 7,
    img: "./image/night.jpg",
    category: "Night Lords",
    description: "",
    url: "https://warhammer40k.fandom.com/wiki/Night_Lords",

},

{
    id: 8,
    img: "./image/word.jpg",
    category: "Word Bearers",
    description: "",
    url: "https://warhammer40k.fandom.com/wiki/Word_Bearers",

},

{
    id: 9,
    img: "./image/alpha.jpg",
    category: "Alpha Legion",
    description: "",
    url: "https://warhammer40k.fandom.com/wiki/Alpha_Legion",

},




];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn")


window.addEventListener("DOMContentLoaded", function () {
    displayLegionItem(legion)
    
});




filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const legionCategory = legion.filter( function (legionItems) {
    if(legionItems.category === category){
        return legionItems;

    }
            
           
            

        });
        // console.log(godCategory);
         if(category === "all") {
            displayLegionItems(legion);
        } else {
            displayLegionItems(legionCategory);
        } 

    });

});

function displayLegionItems(legionItems){
    let displaylegion = legionItems.map(function (item) {
        // console.log(item);
        return ` <article class="${item.img}"><img src="${item.img}" class="photo" alt="${item.title}"> <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="url"><a href="" target="_blank" ${item.url}</a>info</h4>
        </header>
        
      </div></article>`;
    });
    displayLegion = displaylegion.join("")
  sectionCenter.innerHTML = displayLegion

}


