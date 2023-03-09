const cardContainer = document.querySelector('#cardContainer')
let arrayEvents = data.events
let cards = ''

let search = document.getElementById("search")

function getEvents(arrayEvents){
  cardContainer.innerHTML = ''
  arrayEvents.forEach((event) => {
  
    cards += `<div class="card text-center card border-secondary mb-3" style="width:18rem;">
      <div class="container p-2"><img src=${event.image} class="card-img-top" alt="..."></div>
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <div>Price $ ${event.price}</div>
        <a href="./details.html?id=${event.id}" class="btn btn-outline-dark mt-2">+ INFO</a>
      </div>
    </div>`

cardContainer.innerHTML = cards
})
}

getEvents(arrayEvents)

search.addEventListener('change',()=>{
    let filteredEvents = arrayEvents.filter((event)=> event.toLowerCase().includes(search.value.toLowerCase()))

    getEvents(filteredEvents)

})