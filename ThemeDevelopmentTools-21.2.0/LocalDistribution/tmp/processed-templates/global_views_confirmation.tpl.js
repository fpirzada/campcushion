define('global_views_confirmation.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"body") || (depth0 != null ? compilerNameLookup(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":10,"column":10}}}) : helper)))
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "		<div data-view=\"ChildViewMessage\"></div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"confirmLabel") || (depth0 != null ? compilerNameLookup(depth0,"confirmLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"confirmLabel","hash":{},"data":data,"loc":{"start":{"line":18,"column":3},"end":{"line":18,"column":19}}}) : helper)))
    + "\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Yes",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":3},"end":{"line":20,"column":22}}}))
    + "\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"cancelLabel") || (depth0 != null ? compilerNameLookup(depth0,"cancelLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cancelLabel","hash":{},"data":data,"loc":{"start":{"line":25,"column":3},"end":{"line":25,"column":18}}}) : helper)))
    + "\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "			"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Cancel",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":3},"end":{"line":27,"column":25}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class=\"global-views-confirmation-body "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"className") || (depth0 != null ? compilerNameLookup(depth0,"className") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":56}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBodyMessage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":13,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n<div class=\"global-views-confirmation-footer "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"class") || (depth0 != null ? compilerNameLookup(depth0,"class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data,"loc":{"start":{"line":15,"column":45},"end":{"line":15,"column":54}}}) : helper)))
    + "\">\r\n	<button class=\"global-views-confirmation-confirm-button\" data-action=\"confirm\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasConfirmLabel") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":17,"column":2},"end":{"line":21,"column":9}}})) != null ? stack1 : "")
    + "	</button>\r\n	<button class=\"global-views-confirmation-cancel-button\" data-action=\"cancel\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCancelLabel") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":24,"column":2},"end":{"line":28,"column":9}}})) != null ? stack1 : "")
    + "	</button>\r\n</div>\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'global_views_confirmation'; return template;});