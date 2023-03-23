const params = new URLSearchParams(document.location.search)
const id = params.get("id")

const moreInfo = url.events
const info = moreInfo.find((info) => info.id == id)


const container = document.getElementById("detailContainer")

let detailCard = ''

  detailCard += `
    <div class="card text-center" style="width:18rem;">
    <img src="${info.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${info.name}</h5>
      <p>${info.date}</p>
      <p>${info.category}</p>
      <p>${info.capacity}</p>
      <p>${info.place}</p>
      <p class="card-text">${info.description}</p>
      <div>Price $ ${info.price}</div>
    </div>
  </div>`


container.innerHTML = detailCard