//CREATE DYNAMIC CARDS AND 'MORE DETAILS' FUNCTION

const cardPastEvents = document.querySelector("#pastEvents")
let card = pastEvents(data.events, data.currentDate)
cardPastEvents.innerHTML = card

function pastEvents(arrayEvents){
  let cards=''
  for(const event of arrayEvents){
    if(event.date < data.currentDate){
      cards += getEvent(event);
    }
  }
  return cards
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
      cardPastEvents.innerHTML = pastEvents(listedItem);
  });
});

//SEARCH BAR
let searchBar = document.getElementById('search');
searchBar.addEventListener('keyup',()=> { 
  let listedItem = search();
  cardPastEvents.innerHTML = pastEvents(listedItem);
});