define('quote_to_salesorder_wizard_module_confirmation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"For immediate assistance call us at <strong>$(0)</strong> or email us at <strong>$(1)</strong>",(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":13,"column":141}}}))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "			"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimer","hash":{},"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":15,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<div class=\"quote-to-salesorder-wizard-module-confirmation\">\r\n	<h2 class=\"quote-to-salesorder-wizard-module-confirmation-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Thank you!",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":66},"end":{"line":9,"column":92}}}))
    + "</h2>\r\n	<p class=\"quote-to-salesorder-wizard-module-confirmation-body\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"We received  <a href=\"/purchases/view/salesorder/$(0)\">your order </a> and will process it right away.",(depth0 != null ? compilerNameLookup(depth0,"orderId") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":64},"end":{"line":10,"column":190}}}))
    + "</p>\r\n	<p class=\"quote-to-salesorder-wizard-module-confirmation-body\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "	</p>\r\n	<a class=\"quote-to-salesorder-wizard-module-confirmation-continue\" href=\"/quotes\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Go Back to List of Quotes",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":83},"end":{"line":18,"column":124}}}))
    + "</a>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'quote_to_salesorder_wizard_module_confirmation'; return template;});