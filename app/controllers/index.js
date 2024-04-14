const purgeTSSColors = require('purgetss.colors')

_.each(purgeTSSColors, (shades, color) => {
  if (typeof shades === 'object') { $.theScroller.add(Alloy.createController('shades', { color, shades }).getView()) } else { $.theScroller.add(Alloy.createController('shades', { color, shades: { [color]: shades } }).getView()) }
})

$.index.open()
