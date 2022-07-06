define('transaction_line_views_cell_navigable.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "    		<span class=\"transaction-line-views-cell-navigable-free-badge\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FREE",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":69},"end":{"line":11,"column":89}}}))
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function";

  return "				<a class=\"transaction-line-views-cell-navigable-product-title-anchor\" "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"itemURLAttributes") || (depth0 != null ? compilerNameLookup(depth0,"itemURLAttributes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemURLAttributes","hash":{},"data":data,"loc":{"start":{"line":18,"column":74},"end":{"line":18,"column":97}}}) : helper))) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":18,"column":98},"end":{"line":18,"column":110}}}) : helper)))
    + "</a>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<span class=\"transaction-line-views-cell-navigable-product-title\">\r\n					"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemName") || (depth0 != null ? compilerNameLookup(depth0,"itemName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"itemName","hash":{},"data":data,"loc":{"start":{"line":21,"column":5},"end":{"line":21,"column":17}}}) : helper)))
    + "\r\n				</span>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "		<p>\r\n			<div data-view=\"Item.Price\"></div>\r\n		</p>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "			<div data-view=\"Item.Options\"></div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<p>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDetail2Title") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":2},"end":{"line":46,"column":9}}})) != null ? stack1 : "")
    + "		<span class=\"transaction-line-views-cell-navigable-item-reason-value\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail2") || (depth0 != null ? compilerNameLookup(depth0,"detail2") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"detail2","hash":{},"data":data,"loc":{"start":{"line":47,"column":72},"end":{"line":47,"column":83}}}) : helper)))
    + "</span>\r\n		</p>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<span class=\"transaction-line-views-cell-navigable-item-unit-price-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail2Title") || (depth0 != null ? compilerNameLookup(depth0,"detail2Title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"detail2Title","hash":{},"data":data,"loc":{"start":{"line":45,"column":77},"end":{"line":45,"column":93}}}) : helper)))
    + " </span>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<span class=\"transaction-line-views-cell-navigable-item-amount-label\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"detail3Title") || (depth0 != null ? compilerNameLookup(depth0,"detail3Title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"detail3Title","hash":{},"data":data,"loc":{"start":{"line":60,"column":73},"end":{"line":60,"column":89}}}) : helper)))
    + " </span>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<small class=\"transaction-line-views-cell-navigable-item-old-price\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"comparePriceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"comparePriceFormatted") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"comparePriceFormatted","hash":{},"data":data,"loc":{"start":{"line":64,"column":71},"end":{"line":64,"column":96}}}) : helper)))
    + "</small>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<tr class=\"transaction-line-views-cell-navigable "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cellClassName") || (depth0 != null ? compilerNameLookup(depth0,"cellClassName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cellClassName","hash":{},"data":data,"loc":{"start":{"line":8,"column":49},"end":{"line":8,"column":66}}}) : helper)))
    + " item-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":8,"column":72},"end":{"line":8,"column":82}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":8,"column":93},"end":{"line":8,"column":103}}}) : helper)))
    + "\" data-item-type=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemType") || (depth0 != null ? compilerNameLookup(depth0,"itemType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemType","hash":{},"data":data,"loc":{"start":{"line":8,"column":121},"end":{"line":8,"column":133}}}) : helper)))
    + "\">\r\n	<td class=\"transaction-line-views-cell-navigable-item-image\" name=\"item-image\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isFreeGift") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":12,"column":12}}})) != null ? stack1 : "")
    + "		<img src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":53}}}))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\">\r\n	</td>\r\n	<td class=\"transaction-line-views-cell-navigable-details\" name=\"item-details\">\r\n		<p class=\"transaction-line-views-cell-navigable-product-name\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNavigable") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":23,"column":10}}})) != null ? stack1 : "")
    + "		</p>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isFreeGift") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":2},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + "		<div data-view=\"Item.Sku\"></div>\r\n		<div data-view=\"Item.Tax.Info\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOptions") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":2},"end":{"line":34,"column":9}}})) != null ? stack1 : "")
    + "		<p>\r\n			<span class=\"transaction-line-views-cell-navigable-stock\" data-view=\"ItemViews.Stock.View\">\r\n		</p>\r\n\r\n		<div data-view=\"StockDescription\"></div>\r\n	</td>\r\n	<td class=\"transaction-line-views-cell-navigable-item-unit-price\" name=\"item-totalprice\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBlockDetail2") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":1},"end":{"line":49,"column":8}}})) != null ? stack1 : "")
    + "	</td>\r\n	<td class=\"transaction-line-views-cell-navigable-item-quantity\" name=\"item-quantity\">\r\n		<p>\r\n			<span class=\"transaction-line-views-cell-navigable-item-quantity-label\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quantity:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":53,"column":75},"end":{"line":53,"column":100}}}))
    + " </span>\r\n			<span class=\"transaction-line-views-cell-navigable-item-quantity-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data,"loc":{"start":{"line":54,"column":75},"end":{"line":54,"column":87}}}) : helper)))
    + "</span>\r\n		</p>\r\n	</td>\r\n	<td class=\"transaction-line-views-cell-navigable-amount\" name=\"item-amount\">\r\n		<p>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDetail3Title") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":2},"end":{"line":61,"column":9}}})) != null ? stack1 : "")
    + "		<span class=\"transaction-line-views-cell-navigable-item-amount-value\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"detail3") || (depth0 != null ? compilerNameLookup(depth0,"detail3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"detail3","hash":{},"data":data,"loc":{"start":{"line":62,"column":72},"end":{"line":62,"column":83}}}) : helper)))
    + "</span>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showComparePrice") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":2},"end":{"line":65,"column":9}}})) != null ? stack1 : "")
    + "		</p>\r\n	</td>\r\n</tr>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'transaction_line_views_cell_navigable'; return template;});