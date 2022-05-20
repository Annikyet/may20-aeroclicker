// planes increase pax/click
// pilots increase clicks/s
// prices increase with purchase

// random fuel prices - flights cost fuel?
// refactor into mvc-ish
// make it purdy
// refactor CSS

class Plane {
  constructor(name, image, price, pax) {
    this.name = name
    this.image = image
    this.price = price
    this.pax = pax
    this.qty = 0
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
      <div class="border-top p-3 row">
        <div class="col-8 p-0">
          <div class="d-flex flex-column">
            <h4>${this.name}</h4>
            <p class="mb-0">
              ${service.formatNum(this.pax)}
              <i class="mdi mdi-ticket"></i>
              per Click
            </p>
          </div>
        </div>
        <div class="col-4 p-0">
          <div class="d-flex flex-column">
            <h5>(x${service.formatNum(this.qty)})</h5>
            <button class="btn btn-primary" onclick="control.buyPlane('${buyId}')">
              ${service.formatNum(this.price)}
              <i class="mdi mdi-ticket"></i>
            </button>
          </div>
        </div>
      </div>
      `
  }

  get clicks() {
    return this.qty * this.pax
  }
}

class Service {
  click() {
    for (const p in planes) {
      clicks += planes[p].clicks
    }
    control.draw()
  }

  reset() {

  }

  findBestPlane() {

  }

  buyPlane(id) {

  }

  buyPilot(id) {

  }

  formatNum(num) {
    if (num < 1000) {
      return num
    }
    else if (num < 1000000) {
      return Math.floor(num / 1000) + 'k'
    }
    else if (num < 1000000000) {
      return Math.floor(num / 1000000) + 'M'
    }
    else {
      return Math.floor(num / 1000000000) + 'G'
    }
  }
}

class Controller {
  constructor() {
    this.draw()
  }

  click() {
    service.click()
  }

  reset() {
    for (const p in planes) {
      planes[p].qty = 0
    }
    clicks = 0
    pilots.qty = 0
    bestPlane = starterPlane
    planes[starterPlane].qty = 1
    this.draw()
  }

  buyPilot() {
    if (clicks >= pilots.price) {
      clicks -= pilots.price
      pilots.qty++
      control.draw()
    }
  }

  buyPlane(id) {
    if (clicks >= planes[id].price) {
      clicks -= planes[id].price
      planes[id].qty++
    }

    // this should go elsewhere - find new best aircraft
    for (const p in planes) {
      if (planes[p].qty > 0 && planes[p].pax > planes[bestPlane].pax) {
        bestPlane = p
      }
    }

    this.draw()
  }

  getShopHtml() {
    let html = ''
    for (const p in planes) {
      html += planes[p].shopHtml(p)
    }
    return html
  }

  draw() {
    document.getElementById('clicker-card').innerHTML = planes[bestPlane].clickerHtml
    document.getElementById('pilot-card').innerHTML = pilots.html
    document.getElementById('shop-card').innerHTML = this.getShopHtml()
    document.getElementById('pax-total').innerText = clicks
  }
}

class Pilot {
  constructor() {
    this.qty = 0
    this.price = 500
  }

  get html() {
    return `
    <h5>(x${service.formatNum(this.qty)})</h5>
    <button class="btn btn-primary" onclick="control.buyPilot()">
      ${service.formatNum(this.price)}
      <i class="mdi mdi-ticket"></i>
    </button>
    `
  }
}

let planes =  {
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
    'The Big Chungus',
    'img/mriya.jpg',
    500000000,
    10000000
  ),
  concorde: new Plane(
    'The Droop Snoot',
    'img/concorde.jpg',
    2000000000,
    50000000
    )
  }
  
const starterPlane = 'c150'
let bestPlane = starterPlane
let clicks = 0
planes[starterPlane].qty = 1
let pilots = new Pilot

let service = new Service
let control = new Controller

function autoClick() {
  for (const p in planes) {
    clicks += planes[p].clicks * pilots.qty
  }
  control.draw()
}

setInterval(autoClick, 1000)