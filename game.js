// planes
// C-150         1  10
// Bonanza       5  100
// dc-3         10  1k
// comet        50  10k
// q400        100  100k
// a220        500  1m
// 737max       1k  5m
// 787         10k  10m
// 747         50k  50m
// an225      100k  100m
// concorde   500k  500m

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
}

let planes = {
  c150: new Plane(
    'The Tin Can',
    'c150.jpg',
    10,
    1
  ),
  bonanza: new Plane(
    'The Developer Killer',
    'bonanza.jpg',
    100,
    5
  ),
  dc3: new Plane(
    'The Classic',
    'dc3.jpg',
    1000,
    200
  ),
  comet: new Plane(
    'The Depressurizer',
    'comet.jpg',
    10000,
    1000
  ),
  q400: new Plane(
    'The Puddlejumper',
    'q400.jpg',
    100000,
    5000
  ),
  a220: new Plane(
    'The Hostile Takeover',
    'a220.jpg',
    250000,
    20000
  ),
  max: new Plane(
    'The Nosedown',
    '737max.jpg',
    2000000,
    100000
  ),
  dreamliner: new Plane(
    'The Sleepy Boi',
    '787.jpg',
    10000000,
    500000
  ),
  queen: new Plane(
    'The Queen',
    '747.jpg',
    50000000,
    2000000
  ),
  mriya: new Plane(
    'Big Chungus',
    'mriya.jpg',
    500000000,
    10000000
  ),
  concorde: new Plane(
    'The Leadfoot',
    'concorde.jpg',
    2000000000,
    50000000
  )
}

