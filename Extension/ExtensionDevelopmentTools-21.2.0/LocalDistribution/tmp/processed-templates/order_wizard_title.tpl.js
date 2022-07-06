define('order_wizard_title.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<p>\r\n		"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"details") || (depth0 != null ? compilerNameLookup(depth0,"details") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"details","hash":{},"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":13,"column":13}}}) : helper)))
    + "\r\n	</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"tag") || (depth0 != null ? compilerNameLookup(depth0,"tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":8,"column":1},"end":{"line":8,"column":8}}}) : helper)))
    + " class=\"order-wizard-title\" "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"attributes") || (depth0 != null ? compilerNameLookup(depth0,"attributes") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attributes","hash":{},"data":data,"loc":{"start":{"line":8,"column":36},"end":{"line":8,"column":50}}}) : helper)))
    + ">\r\n	"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":9,"column":10}}}) : helper)))
    + "\r\n</"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"tag") || (depth0 != null ? compilerNameLookup(depth0,"tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":10,"column":9}}}) : helper)))
    + ">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDetails") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":0},"end":{"line":15,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_title'; return template;});