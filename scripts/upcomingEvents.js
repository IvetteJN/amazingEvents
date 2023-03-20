//CREATE DYNAMIC CARDS AND 'MORE DETAILS' FUNCTION

const cardUpcomingEvents = document.querySelector("#upcomingEvents")
let card = upcomingEvents(data.events, data.currentDate)
cardUpcomingEvents.innerHTML = card

function upcomingEvents(arrayEvents){
    let cards=''
    for(const event of arrayEvents){
      if(event.date > data.currentDate){
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
      cardUpcomingEvents.innerHTML = upcomingEvents(listedItem);
  });
});

//SEARCH BAR
let searchBar = document.getElementById('search');
searchBar.addEventListener('keyup',()=> { 
  let listedItem = search();
  cardUpcomingEvents.innerHTML = upcomingEvents(listedItem);
});