//CREATE DYNAMIC CARDS AND 'MORE DETAILS' FUNCTION

const cardContainer = document.querySelector("#cardContainer");
let cards = createCard(data.events)
cardContainer.innerHTML = cards

function createCard(arrayEvents){
  let card = ''
  for (const event of arrayEvents) {
          card += getEvent(event)
  }
  return card
}

//CATEGORY
let selectedCategory = []
const categories = document.getElementById('category')
let filteredCategories = deleteRepeated(data.events.map((cat)=> cat.category))
let getCategory = loadCategories(filteredCategories)
categories.innerHTML = getCategory
let checkedCheckbox = document.querySelectorAll('.checked')

checkedCheckbox.forEach((e)=>{
  e.addEventListener('change', ()=>{
      if (e.checked){
          selectedCategory.push(e.value);
      }else{
          selectedCategory.splice(selectedCategory.indexOf(e.value),1);
      }
      let listedItem = search();
      cardContainer.innerHTML = createCard(listedItem);
  });
});

//SEARCHBAR
let searchBar = document.getElementById('search');
searchBar.addEventListener('keyup',()=> { 
  let listedItem = search();
  cardContainer.innerHTML = createCard(listedItem);
});