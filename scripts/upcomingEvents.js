function upcomingEvents(arrayEvents,currentDate){
    let cards=''
    for(const event of arrayEvents){
      if(event.date > currentDate){
        cards += showUpcomingEvents(event);
      }
    }
    return cards
  }
  
  function showUpcomingEvents(event){
      return `<div class="card text-center" style="width:18rem;">
      <div class="container p-2"><img src=${event.image} class="card-img-top" alt="..."></div>
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <div>Price $ ${event.price}</div>
        <a href="./details.html?id=${event.id}" class="btn btn-outline-dark mt-2">+ INFO</a>
      </div>
    </div>`
  }
  
  const cardUpcomingEvents = document.querySelector("#upcomingEvents")
  
  let card = upcomingEvents(data.events, data.currentDate)
  
  cardUpcomingEvents.innerHTML = card
