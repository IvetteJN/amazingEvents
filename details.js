const params = new URLSearchParams(document.location.search)
const id = params.get("id")

const eventos = data.events
const evento = eventos.find((evento) => evento.id == id)


const container = document.getElementById("detailContainer")

let detailCard = ''

  detailCard += `
    <div class="card text-center" style="width:18rem;">
    <img src="${evento.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p>${evento.date}</p>
      <p>${evento.category}</p>
      <p>${evento.capacity}</p>
      <p>${evento.place}</p>
      <p class="card-text">${evento.description}</p>
      <div>Price $ ${evento.price}</div>
    </div>
  </div>`


container.innerHTML = detailCard