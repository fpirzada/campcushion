define('product_list_details_min_quantity.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<p class=\"product-list-details-min-quantity\">\r\n		<span class=\"product-list-details-min-quantity-label\" style=\"white-space:normal\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"The minimum quantity to purchase this item is <b>$(0)</b>. Do you want to change it <b>from $(1) to $(0)?</b> ",(depth0 != null ? compilerNameLookup(depth0,"minimumQuantity") : depth0),(depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":3},"end":{"line":11,"column":154}}}))
    + "\r\n			<a href=\"#\" class=\"product-list-details-min-quantity-button-update\" data-id="
    + alias3(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":12,"column":79},"end":{"line":12,"column":85}}}) : helper)))
    + " data-action=\"update-item-quantity\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Yes, update it",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":121},"end":{"line":12,"column":151}}}))
    + "</a>\r\n		</span>\r\n	</p>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<p class=\"product-list-details-min-quantity\">\n		<span class=\"product-list-details-min-quantity-label\" style=\"white-space:normal\">\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"The maximum quantity to purchase this item is <b>$(0)</b>. Do you want to change it <b>from $(1) to $(0)?</b> ",(depth0 != null ? compilerNameLookup(depth0,"maximumQuantity") : depth0),(depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":3},"end":{"line":20,"column":154}}}))
    + "\n			<a href=\"#\" class=\"product-list-details-min-quantity-button-update\" data-id="
    + alias3(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":21,"column":79},"end":{"line":21,"column":85}}}) : helper)))
    + " data-action=\"update-item-quantity-max\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Yes, update it",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":125},"end":{"line":21,"column":155}}}))
    + "</a>\n		</span>\n	</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"fulfillsMinQuantityRequirements") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"fulfillsMaxQuantityRequirements") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":24,"column":11}}})) != null ? stack1 : "")
    + "\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_details_min_quantity'; return template;});