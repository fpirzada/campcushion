define('requestquote_wizard_module_items.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<h3 class=\"requestquote-wizard-module-items-title\">\r\n			"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":3},"end":{"line":11,"column":12}}}) : helper)))
    + "\r\n		</h3>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<table class=\"requestquote-wizard-module-items-table\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showHeaders") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":32,"column":10}}})) != null ? stack1 : "")
    + "			<tbody data-view=\"Items.Collection\" data-generalClass=\"requestquote-wizard-module-items-item\"></tbody>\r\n		</table>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<thead class=\"requestquote-wizard-module-items-header\" item-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":18,"column":68},"end":{"line":18,"column":78}}}) : helper)))
    + "\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"itemId") || (depth0 != null ? compilerNameLookup(depth0,"itemId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemId","hash":{},"data":data,"loc":{"start":{"line":18,"column":89},"end":{"line":18,"column":99}}}) : helper)))
    + "\">\r\n					<th class=\"requestquote-wizard-module-items-header-image\" name=\"item-image\">\r\n						"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":20,"column":26}}}))
    + "\r\n					</th>\r\n					<th class=\"requestquote-wizard-module-items-header-totalprice\" name=\"item-totalprice\">\r\n						<!-- "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"List Price",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":23,"column":11},"end":{"line":23,"column":37}}}))
    + " -->\r\n					</th>\r\n					<th class=\"requestquote-wizard-module-items-header-quantity\" name=\"item-quantity\">\r\n						"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quantity",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":26,"column":30}}}))
    + "\r\n					</th>\r\n					<th class=\"requestquote-wizard-module-items-header-actions\" name=\"item-actions\">\r\n						<!-- "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quantity",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":11},"end":{"line":29,"column":35}}}))
    + " -->\r\n					</th>\r\n				</thead>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class=\"requestquote-wizard-module-items\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":13,"column":8}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasItems") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":1},"end":{"line":35,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'requestquote_wizard_module_items'; return template;});