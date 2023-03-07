let params = new URLSearchParams(document.location.search)
let id = params.get("id")

let events = data.events
let event = events.filter.toString(events._id == id)

const container = document.getElementById("detailContainer")

let detailCard = ''

detailCard += `
    <div class="card text-center" style="width:18rem;">
    <img src="${events[0].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${events[0].name}</h5>
      <p>${events[0].date}</p>
      <p>${events[0].category}</p>
      <p>${events[0].capacity}</p>
      <p>${events[0].place}</p>
      <p class="card-text">${events[0].description}</p>
      <div>Price $ ${events[0].price}</div>
    </div>
  </div>`


container.innerHTML = detailCard