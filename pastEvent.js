function pastEvents(arrayEvents,currentDate){
  let cards=''
  for(const event of arrayEvents){
    if(event.date < currentDate){
      cards += showPastEvents(event);
    }
  }
  return cards
}

function showPastEvents(event){
    return `<div class="card text-center" style="width:18rem;">
    <div class="container p-2"><img src=${event.image} class="card-img-top" alt="..."></div>
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

const cardPastEvents = document.querySelector("#pastEvents")

let card = pastEvents(data.events, data.currentDate)

cardPastEvents.innerHTML = card
