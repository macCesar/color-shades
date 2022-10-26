let single = $.args.single;
let shades = $.args.shades;
let _default = $.args.shades.default ?? $.args.shades['500'];

_.each($.args.shades, (shade, key) => {
  if (key !== 'default') $.container.add(Alloy.createController('shade', { key, shade, shades, _default, single }).getView());
});
