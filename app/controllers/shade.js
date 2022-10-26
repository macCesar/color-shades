let shadesArray = [];
_.each($.args.shades, (shade, key) => {
  if (key !== 'default') shadesArray.push(shade);
});

let contrastColor, contrastRatio = (getContrastRatio($.args.shade, '#ffffff') < 2);
if (shadesArray.length > 1) contrastColor = contrastRatio ? _.last(shadesArray) : _.first(shadesArray);
else contrastColor = contrastRatio ? '#000' : '#fff';

if ($.args.single) $.shade.width = '100%';
$.key.color = $.value.color = $.defaultMarker.backgroundColor = contrastColor;

function getContrastRatio(color1, color2) {
  let l1 = getLuminance(color1);
  let l2 = getLuminance(color2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function getLuminance(color) {
  let rgb = color.replace(/^#/, '').match(/.{2}/g);
  rgb = rgb.map(function(x) {
    x = parseInt(x, 16) / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}
