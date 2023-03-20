function getEvent(event) {
    return `<div class="card text-center card border-secondary mb-3" style="width:18rem;">
    <div class="container p-2"><img src=${event.image} class="card-img-top" alt="..."></div>
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <div>Price $ ${event.price}</div>
      <div><a href="../details.html?id=${event.id}" class="btn btn-outline-dark mt-2">+ INFO</a></div>
    </div>
  </div>`
  }

  //CATEGORIES & CHECKBOXES

function loadCategories(arrayCat){
    let categories = ''
    for (let i=0;i<arrayCat.length;i++){
        categories +=  createCheckbox(arrayCat[i],i)
    }
    return categories
  }
  
  //create and filter checkboxes
  
  function createCheckbox(cat,i){
    return `
    <div class="form-check form-check-inline m-0">
        <input class="form-check-input checked" type="checkbox" name="categories" id="categoria${i}" value="${cat}"   />
        <label class="form-check-label" style="color:white" for="categoria${i}">${cat}</label>
    </div>`
  }
  
  function filterCheckbox(events,checkbox){
    let filteredEvents = []
    if(checkbox.length > 0){
        checkbox.forEach((category)=>{
            events.forEach((event)=>{
                if(event.category==category){
                    filteredEvents.push(event)
                }
            });        
        });
    }else{
        filteredEvents = events
    }
    return filteredEvents
  }
  
  function deleteRepeated (array){
    let unique = []
    for(let i = 0 ; i< array.length; i++){
        if (!unique.includes(array[i])){
            unique.push(array[i])
        }
    }
    return unique
  }
  
//SEARCH BAR

function search(){
    let listedItem = [];
    let eventCheckbox = filterCheckbox(data.events,selectedCategory);
    listedItem = eventCheckbox.filter((event)=>{
        return filteredEvent = (event.name.toLowerCase().includes(searchBar.value.toLowerCase()));
    });
    return listedItem;
  }