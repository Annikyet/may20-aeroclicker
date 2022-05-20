// planes increase pax/click
// pilots increase clicks/s
// cfi increase pilots/min

// random fuel prices - flights cost fuel

class Plane {
  constructor(name, image, price, pax) {
    this.name = name
    this.image = image
    this.price = price
    this.pax = pax
  }

  get clickerHtml() {
    return `
      <img src="${this.image}" alt="${this.name}" class="card-img">
      <div class="card-body">
        <h2 class="card-title">${this.name}</h2>
      </div>`
  }

  shopHtml(buyId) {
    return `
      <div class="border-top py-3 row">
        <div class="col-8 p-0">
          <div class="d-flex flex-column">
            <h4>${this.name}</h4>
            <p class="mb-0">
              ${this.pax}
              <i class="mdi mdi-ticket"></i>
              per Click
            </p>
          </div>
        </div>
        <div class="col-4 p-0">
          <button class="btn btn-primary" onclick="control.buy('${buyId}')">
            ${this.price}
            <i class="mdi mdi-ticket"></i>
          </button>
        </div>
      </div>`
  }
}

let planes = {
  c150: new Plane(
    'The Tin Can',
    'img/c150.jpg',
    10,
    1
  ),
  bonanza: new Plane(
    'The Doctor Killer',
    'img/bonanza.jpg',
    100,
    5
  ),
  dc3: new Plane(
    'The Classic',
    'img/dc3.jpg',
    1000,
    200
  ),
  comet: new Plane(
    'The Depressurizer',
    'img/comet.jpg',
    10000,
    1000
  ),
  q400: new Plane(
    'The Puddlejumper',
    'img/q400.jpg',
    100000,
    5000
  ),
  a220: new Plane(
    'The Hostile Takeover',
    'img/a220.jpg',
    250000,
    20000
  ),
  max: new Plane(
    'The Nosedown',
    'img/737max.jpg',
    2000000,
    100000
  ),
  dreamliner: new Plane(
    'The Sleepy Boi',
    'img/787.jpg',
    10000000,
    500000
  ),
  queen: new Plane(
    'The Queen',
    'img/747.jpg',
    50000000,
    2000000
  ),
  mriya: new Plane(
    'Big Chungus',
    'img/mriya.jpg',
    500000000,
    10000000
  ),
  concorde: new Plane(
    'The Leadfoot',
    'img/concorde.jpg',
    2000000000,
    50000000
  )
}

function draw() {
  document.getElementById('clicker-card').innerHTML = planes.comet.clickerHtml
  
  let shophtml = ``
  for (const p in planes) {
    shophtml += planes[p].shopHtml(p)
  }
  document.getElementById('shop-card').innerHTML = shophtml
}

draw()