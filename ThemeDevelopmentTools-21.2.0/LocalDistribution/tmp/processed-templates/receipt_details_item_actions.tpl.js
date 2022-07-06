define('receipt_details_item_actions.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function";

  return "	<a \r\n		class=\"receipt-details-item-actions-reorder\" \r\n		data-action=\"addToCart\"\r\n		data-line-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\"\r\n		data-item-id=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":26}}}) : helper)))
    + "\" \r\n		data-item-quantity=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"quantity") : stack1), depth0))
    + "\"\r\n		data-partial-quantity=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"line") : depth0)) != null ? compilerNameLookup(stack1,"partial_quantity") : stack1), depth0))
    + "\" \r\n		data-parent-id=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"itemParentId") || (depth0 != null ? compilerNameLookup(depth0,"itemParentId") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"itemParentId","hash":{},"data":data,"loc":{"start":{"line":16,"column":18},"end":{"line":16,"column":34}}}) : helper)))
    + "\" \r\n		data-item-options=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"lineFormatOptions") || (depth0 != null ? compilerNameLookup(depth0,"lineFormatOptions") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"lineFormatOptions","hash":{},"data":data,"loc":{"start":{"line":17,"column":21},"end":{"line":17,"column":42}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias3,(depth0 != null ? compilerNameLookup(depth0,"isQuantityGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":22,"column":9}}})) != null ? stack1 : "")
    + "	</a>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Reorder these Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":3},"end":{"line":19,"column":38}}}))
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Reorder this Item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":3},"end":{"line":21,"column":36}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showActions") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'receipt_details_item_actions'; return template;});