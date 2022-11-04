let shades = $.args.shades;
let _default = $.args.shades.default ?? Object.values($.args.shades)[0];

_.each($.args.shades, (shade, key) => {
  if (key !== 'default') $.container.add(Alloy.createController('shade', { key, shade, shades, _default }).getView());
});
