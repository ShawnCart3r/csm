const legion = [

    {

        id: -1,
        img: "./image/gathered.jpg",
        category: "gathered",
        description: "Gathered",
        url: "https://warhammer40k.fandom.com/wiki/Chaos_Space_Marines",
    
    },


    {

        id: 0,
        img: "./image/gathered.jpg",
        category: "gathered",
        description: "Gathered",
        url: "https://warhammer40k.fandom.com/wiki/Chaos_Space_Marines",
    
    },

 
    {

    id: 2,
    img: "./image/black.jpg",
    category: "Black Legion",
    description: "Black Legion",
    url: "https://warhammer40k.fandom.com/wiki/Black_Legion",

},

{
    id: 3,
    img: "./image/emperor.webp",
    category: "Emperor's Children",
    description: "Emperor's Children",
    url: "https://warhammer40k.fandom.com/wiki/Emperor%27s_Children",

},

{
    id: 4,
    img: "./image/eater.jpg",
    category: "World Eaters",
    description: "World Eaters",
    url: "https://warhammer40k.fandom.com/wiki/World_Eaters",

},

{
    id: 5,
    img: "./image/death.jpg",
    category: "Death Guard",
    description: "Death Guard",
    url: "https://warhammer40k.fandom.com/wiki/Death_Guard",

},

{
    id: 6,
    img: "./image/son.png",
    category: "Thousand Sons",
    description: "Thousand Sons",
    url: "https://warhammer40k.fandom.com/wiki/Thousand_Sons",

},

{
    id: 7,
    img: "./image/iron.webp",
    category: "Iron Warriors",
    description: "Iron Warriors",
    url: "https://warhammer40k.fandom.com/wiki/Iron_Warriors",

},

{
    id: 8,
    img: "./image/night.jpg",
    category: "Night Lords",
    description: "Night Lords",
    url: "https://warhammer40k.fandom.com/wiki/Night_Lords",

},

{
    id: 9,
    img: "./image/word.jpg",
    category: "Word Bearers",
    description: "Word Bearers",
    url: "https://warhammer40k.fandom.com/wiki/Word_Bearers",

},

{
    id: 10,
    img: "./image/alpha.jpg",
    category: "Alpha Legion",
    description: "Alpha Legion",
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
          <h4>${item.description}</h4>
          <h4 class="url"><a href="${item.url}" target="_blank"</a></h4>
        </header>
        
      </div></article>`;
    });
    displayLegion = displaylegion.join("")
  sectionCenter.innerHTML = displayLegion

}


