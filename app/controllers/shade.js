let shadesArray = []
_.each($.args.shades, (shade, key) => {
  if (key !== 'default') { shadesArray.push(shade) }
})

let contrastColor,
  contrastRatio = (getContrastRatio($.args.shade, '#ffffff') < 4.5)

if (shadesArray.length > 1) { contrastColor = contrastRatio ? _.last(shadesArray) : _.first(shadesArray) } else { contrastColor = contrastRatio ? '#000' : '#fff' }

if (shadesArray.length === 1) { $.shade.width = '100%' }
if (shadesArray.length === 9) { $.shade.width = '11.111111%' }
$.key.color = $.value.color = $.defaultMarker.backgroundColor = contrastColor

let ratio_1 = getContrastRatio('#fff', $.args.shade)
let ratio_2 = getContrastRatio('#000', $.args.shade)

$.ratio_1.text = ratio_1.toString().substring(0, 4)
$.ratio_2.text = ratio_2.toString().substring(0, 4)

$.ratio_1.color = ($.ratio_1.text < 4.5) ? '#fff' : '#000'
$.ratio_2.color = ($.ratio_2.text < 4.5) ? '#fff' : '#000'

function getContrastRatio(color1, color2) {
  let l1 = getLuminance(color1)
  let l2 = getLuminance(color2)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

function getLuminance(color) {
  if (color.length === 4) { color = color.replace(/#([0-9a-f])([0-9a-f])([0-9a-f])/i, '#$1$1$2$2$3$3') }
  let rgb = color.replace(/^#/, '').match(/.{2}/g)
  rgb = rgb.map(function(x) {
    x = parseInt(x, 16) / 255
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
}
