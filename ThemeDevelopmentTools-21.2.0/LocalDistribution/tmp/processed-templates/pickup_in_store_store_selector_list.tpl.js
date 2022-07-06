define('pickup_in_store_store_selector_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Store",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":16,"column":25}}}))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Stores",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":18,"column":26}}}))
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"GlobalMessageStoresUnavailable\"></div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"stockPickup") : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":2},"end":{"line":28,"column":13}}})) != null ? stack1 : "")
    + "\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "			<div data-view=\"GlobalMessageStoresStockUnavailable\"></div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " overflow: visible;";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class=\"pickup-in-store-store-selector-list-divider\"></div>\r\n\r\n<div class=\"pickup-in-store-store-selector-list-result\">\r\n	<div class=\"pickup-in-store-store-selector-list-result-item-selected-detail-mobile\" data-view=\"Line.Item.Information\"></div>\r\n\r\n	<h4 class=\"pickup-in-store-store-selector-list-result-title\">\r\n		<span>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"storesLength") || (depth0 != null ? compilerNameLookup(depth0,"storesLength") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storesLength","hash":{},"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":24}}}) : helper)))
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOneStore") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":19,"column":10}}})) != null ? stack1 : "")
    + "		</span> "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"near",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":10},"end":{"line":20,"column":30}}}))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"myPosition") || (depth0 != null ? compilerNameLookup(depth0,"myPosition") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"myPosition","hash":{},"data":data,"loc":{"start":{"line":20,"column":31},"end":{"line":20,"column":45}}}) : helper)))
    + "\r\n	</h4>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEmptyStores") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":23,"column":1},"end":{"line":30,"column":8}}})) != null ? stack1 : "")
    + "\r\n	<a href=\"#\" class=\"pickup-in-store-store-selector-list-refine-search\" data-action=\"refine-search\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Refine Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":32,"column":99},"end":{"line":32,"column":128}}}))
    + "</a>\r\n\r\n	<div class=\"pickup-in-store-store-selector-list-result-rows\" data-type=\"store-row\" style=\"max-height: "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maxHeight") || (depth0 != null ? compilerNameLookup(depth0,"maxHeight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxHeight","hash":{},"data":data,"loc":{"start":{"line":34,"column":103},"end":{"line":34,"column":116}}}) : helper)))
    + "px; "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOneStore") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":120},"end":{"line":34,"column":164}}})) != null ? stack1 : "")
    + "\">\r\n		<div data-view=\"StoresList.Rows\"></div>\r\n	</div>\r\n\r\n	<div class=\"pickup-in-store-store-selector-list-result-item-selected-detail-desktop\" data-view=\"Line.Item.Information\"></div>\r\n</div>\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'pickup_in_store_store_selector_list'; return template;});