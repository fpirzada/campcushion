define('product_list_added_to_cart.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<p class=\"product-list-added-to-cart-message\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasMoreThanOneModel") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "	</p>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<span class=\"product-list-added-to-cart-list-from\">From: </span> <span class=\"product-list-added-to-cart-list-name\">$(0)</span> product list ($(1) items)",(depth0 != null ? compilerNameLookup(depth0,"listName") : depth0),(depth0 != null ? compilerNameLookup(depth0,"modelsLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":13,"column":194}}}))
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<span class=\"product-list-added-to-cart-list-from\">From </span> <span class=\"product-list-added-to-cart-list-name\">$(0)</span> product list ($(1) item)",(depth0 != null ? compilerNameLookup(depth0,"listName") : depth0),(depth0 != null ? compilerNameLookup(depth0,"modelsLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":15,"column":192}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<div class=\"product-list-added-to-cart-modal-body\">\r\n	<span data-warning-message class=\"product-list-added-to-cart-warning-message\"></span>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isItem") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":18,"column":12}}})) != null ? stack1 : "")
    + "	<div class=\"product-list-added-to-cart-list\">\r\n		<table class=\"product-list-added-to-cart-table\">\r\n			<tbody data-view=\"ProductList.ItemsAddedToCart\"></tbody>\r\n		</table>\r\n	</div>\r\n</div>\r\n<div class=\"product-list-added-to-cart-modal-footer\">\r\n	<a class=\"product-list-added-to-cart-button-viewcart\" data-touchpoint=\"viewcart\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"View Cart &amp; Checkout",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":82},"end":{"line":26,"column":122}}}))
    + "</a>\r\n	<a class=\"product-list-added-to-cart-button-back\" data-dismiss=\"modal\" >"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back to product list",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":73},"end":{"line":27,"column":109}}}))
    + "</a>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_added_to_cart'; return template;});