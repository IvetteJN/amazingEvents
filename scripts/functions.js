//DYNAMIC CARDS

const cardContainer = document.querySelector("#cardContainer");

function getEvent(event) {
  return `<div class="card text-center card border-secondary mb-3" style="width:18rem;">
    <div class="container p-2"><img src=${event.image} class="card-img-top" alt="..."></div>
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Category:</strong> ${event.category}</p>
      <p><strong>Capacity:</strong> ${event.capacity}</p>
      <p><strong>Place:</strong> ${event.place}</p>
      <p class="card-text"><strong>Description:</strong> ${event.description}</p>
      <div>Price $ ${event.price}</div>
    </div>
  </div>`
}

//CATEGORIES & CHECKBOXES

const categories = document.getElementById('category');

function loadCategories(arrayCat) {
  let categories = ''
  for (let i = 0; i < arrayCat.length; i++) {
    categories += createCheckbox(arrayCat[i], i)
  }
  return categories
}

//create checkboxes and filter

function createCheckbox(cat, i) {
  return `
    <div class="form-check form-check-inline m-0">
        <input class="form-check-input checked" type="checkbox" name="categories" id="category${i}" value="${cat}"   />
        <label class="form-check-label" style="color:white" for="category${i}">${cat}</label>
    </div>`
}

function filterCheckbox(events, checkbox) {
  let filteredEvents = []
  if(checkbox.length == 0){
    cardContainer.innerHTML = `<h4 class="display-1">There are no matches for your search</h4>`
    return
}
  if (checkbox.length > 0) {
    checkbox.forEach((category) => {
      events.forEach((event) => {
        if (event.category == category) {
          filteredEvents.push(event)
        }
      });
    });
  } else {
    filteredEvents = events
  }
  return filteredEvents
}

function deleteRepeated(array) {
  let unique = []
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i])
    }
  }
  return unique
}

let selectedCategory = []

function newCheckedArray(e) {
        if (e.checked){
            selectedCategory.push(e.value)
        }else{
            selectedCategory.splice(selectedCategory.indexOf(e.value),1)
        }
        let listedItem = search()
        cardContainer.innerHTML = createCard(listedItem)
    }

//SEARCH BAR

function search() {
  let listedItem = [];
  let eventCheckbox = filterCheckbox(APIdata.events, selectedCategory);
  listedItem = eventCheckbox.filter((event) => {
    return filteredEvent = (event.name.toLowerCase().includes(searchBar.value.toLowerCase()));
  });
  return listedItem;
}

let searchBar = document.getElementById('search');
searchBar.addEventListener('keyup',()=> { 
  let listedItem = search();
  cardContainer.innerHTML = createCard(listedItem);
});

//ASYNCHRONISM

const url = 'https://mindhub-xj03.onrender.com/api/amazing'
let APIdata = {}

fetch(url).then(response => response.json())
    .then(Apidata => {
        APIdata = Apidata
        cardContainer.innerHTML = createCard(Apidata.events);
        let filteredCategories = deleteRepeated(Apidata.events.map((cat)=> cat.category));
        categories.innerHTML = loadCategories(filteredCategories);
        let checkedCheckbox = document.querySelectorAll('.checked');
        checkedCheckbox.forEach((e)=>{
            e.addEventListener('change', ()=> newCheckedArray(e));
        });
    }).catch(error => console.error(error.message))