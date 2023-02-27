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
  
  const cardUpcomingEvents = document.querySelector("#upcomingEvents")
  
  let card = upcomingEvents(data.events, data.currentDate)
  
  cardUpcomingEvents.innerHTML = card
  