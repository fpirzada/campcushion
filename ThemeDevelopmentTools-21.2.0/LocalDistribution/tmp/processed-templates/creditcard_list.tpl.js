define('creditcard_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "<a href=\"/\" class=\"creditcard-list-button-back\">\r\n	<i class=\"creditcard-list-button-back-icon\"></i>\r\n	"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":1},"end":{"line":11,"column":32}}}))
    + "\r\n</a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":13,"column":7}}})) != null ? stack1 : "")
    + "\r\n<section class=\"creditcard-list\">\r\n	<h2>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":16,"column":5},"end":{"line":16,"column":19}}}) : helper)))
    + "</h2>\r\n	<div class=\"creditcard-list-button-container\">\r\n		<a class=\"creditcard-list-button\" href=\"/creditcards/new\" data-toggle=\"show-in-modal\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Add Credit Card",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":18,"column":88},"end":{"line":18,"column":119}}}))
    + "</a>\r\n	</div>\r\n\r\n	<div class=\"creditcard-list-collection\" data-view=\"CreditCards.Collection\"></div>\r\n</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'creditcard_list'; return template;});