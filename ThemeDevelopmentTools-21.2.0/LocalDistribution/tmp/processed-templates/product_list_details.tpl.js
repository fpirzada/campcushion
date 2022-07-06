define('product_list_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"name") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":16,"column":27},"end":{"line":16,"column":45}}}));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":16,"column":53},"end":{"line":16,"column":61}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<span class=\"product-list-details-count\">("
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"itemsLength") || (depth0 != null ? compilerNameLookup(depth0,"itemsLength") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsLength","hash":{},"data":data,"loc":{"start":{"line":18,"column":45},"end":{"line":18,"column":60}}}) : helper)))
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasOneItem") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":18,"column":61},"end":{"line":18,"column":141}}})) != null ? stack1 : "")
    + ")</span>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Product",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":79},"end":{"line":18,"column":102}}}));
},"8":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Products",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":110},"end":{"line":18,"column":134}}}));
},"10":function(container,depth0,helpers,partials,data) {
    return "display:none";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<table class=\"product-list-details-list-items "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isChecked") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":48},"end":{"line":24,"column":78}}})) != null ? stack1 : "")
    + "\" data-type=\"product-list-items\">\r\n			<tbody data-view=\"ProductList.DynamicDisplay\">\r\n			</tbody>\r\n		</table>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "active";
},"15":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"product-list-details-no-items\">\r\n			<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have items in this list yet. Explore the store or search for an item you would like to add.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":7},"end":{"line":30,"column":125}}}))
    + "</h5>\r\n		</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<a href=\"/wishlist\" class=\"product-list-details-button-back\">\r\n	<i class=\"product-list-details-button-back-icon\"></i>\r\n	"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Go to Product Lists",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":10,"column":36}}}))
    + "\r\n</a>\r\n<div data-confirm-message class=\"product-list-details-confirm-message\"></div>\r\n<section class=\"product-list-details\">\r\n	<header class=\"product-list-details-header\">\r\n		<h2 class=\"product-list-details-title\">\r\n			"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isTypePredefined") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":16,"column":68}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItems") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":19,"column":10}}})) != null ? stack1 : "")
    + "		</h2>\r\n		<div data-view=\"ListHeader\" style=\""
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showListHeader") : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":37},"end":{"line":21,"column":86}}})) != null ? stack1 : "")
    + "\"></div>\r\n	</header>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItems") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":23,"column":1},"end":{"line":32,"column":8}}})) != null ? stack1 : "")
    + "</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_details'; return template;});