const cardContainer = document.querySelector("#cardContainer")
console.log(data.events);
let arrayEvents = data.events
let cards = ''

function showEvents(arrayEvents){
for (const event of arrayEvents) {
    cards += `<div class="card text-center" style="width:18rem;">
      <img src=${event.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p>${event.date}</p>
        <p>${event.category}</p>
        <p>${event.capacity}</p>
        <p>${event.place}</p>
        <p class="card-text">${event.description}</p>
        <div>Price $ ${event.price}</div>
        <a href="#" class="btn btn-outline-light">+ INFO</a>
      </div>
    </div>`
}
}

showEvents(arrayEvents)
cardContainer.innerHTML = cards