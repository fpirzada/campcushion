define('product_details_information.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":9,"column":10}}})) != null ? stack1 : "")
    + "\r\n		<div class=\"product-details-information-content-container\">\r\n\r\n			<div id=\"banner-content-top\" class=\"content-banner banner-content-top\"></div>\r\n\r\n			<div role=\"tabpanel\">\r\n				<ul class=\"product-details-information-content-tabs\" role=\"tablist\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":5},"end":{"line":22,"column":14}}})) != null ? stack1 : "")
    + "				</ul>\r\n				<div class=\"product-details-information-tab-content\" data-type=\"information-content\" data-action=\"tab-content\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":5},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n		<div id=\"banner-content-bottom\" class=\"content-banner banner-content-bottom\"></div>\r\n		</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<button class=\"product-details-information-pusher\" data-target=\"product-details-information-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":93},"end":{"line":5,"column":105}}}) : helper)))
    + "\" data-type=\"sc-pusher\">\r\n		"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":6,"column":12}}}) : helper)))
    + " <i></i>\r\n		<p class=\"product-details-information-hint\"> "
    + ((stack1 = (compilerNameLookup(helpers,"trimHtml")||(depth0 && compilerNameLookup(depth0,"trimHtml"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"content") : depth0),150,{"name":"trimHtml","hash":{},"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":73}}})) != null ? stack1 : "")
    + " </p>\r\n	</button>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<li class=\"product-details-information-tab-title "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":54},"end":{"line":19,"column":83}}})) != null ? stack1 : "")
    + "\" role=\"presentation\">\r\n						<a href=\"#\" data-action=\"selected-tab\" data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":20,"column":54},"end":{"line":20,"column":64}}}) : helper)))
    + "\" data-target=\"#product-details-information-tab-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":20,"column":112},"end":{"line":20,"column":122}}}) : helper)))
    + "\" data-toggle=\"tab\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":20,"column":142},"end":{"line":20,"column":150}}}) : helper)))
    + "</a>\r\n					</li>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " active ";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<div role=\"tabpanel\" class=\"product-details-information-tab-content-panel "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":79},"end":{"line":27,"column":106}}})) != null ? stack1 : "")
    + "\" id=\"product-details-information-tab-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":144},"end":{"line":27,"column":154}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(data && compilerNameLookup(data,"first")),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":156},"end":{"line":27,"column":199}}})) != null ? stack1 : "")
    + " data-action=\"pushable\" data-id=\"product-details-information-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":27,"column":260},"end":{"line":27,"column":272}}}) : helper)))
    + "\">\r\n					"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"showHeader") : depths[1]),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":5},"end":{"line":28,"column":110}}})) != null ? stack1 : "")
    + "\r\n					<div id=\"product-details-information-tab-content-container-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"index") || (data && compilerNameLookup(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":29,"column":64},"end":{"line":29,"column":74}}}) : helper)))
    + "\" class=\"product-details-information-tab-content-container\" data-type=\"information-content-text\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"content") || (depth0 != null ? compilerNameLookup(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":29,"column":171},"end":{"line":29,"column":184}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n				</div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "active";
},"10":function(container,depth0,helpers,partials,data) {
    return "itemprop=\"description\"";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2 class=\"product-details-information-tab-content-panel-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":28,"column":90},"end":{"line":28,"column":98}}}) : helper)))
    + "</h2>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"product-details-information-content\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showInformation") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":36,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_information'; return template;});