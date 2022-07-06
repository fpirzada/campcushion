define('error_management_expired_link.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<h1 class=\"error-management-expired-link-header-title\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":10,"column":57},"end":{"line":10,"column":71}}}) : helper)))
    + "</h1>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<div class=\"error-management-expired-link-header\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":11,"column":8}}})) != null ? stack1 : "")
    + "\r\n	<div id=\"main-banner\" class=\"error-management-expired-link-main-banner\"></div>\r\n</div>\r\n<div id=\"internal-error-content\" class=\"error-management-expired-link-content\">\r\n	"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"message") || (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":16,"column":1},"end":{"line":16,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\r\n</div>\r\n<hr>\r\n<div>\r\n	<a class=\"error-management-expired-link-login-button\" href=\"#\" data-touchpoint=\"login\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Login",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":88},"end":{"line":20,"column":109}}}))
    + "</a>\r\n	<a class=\"error-management-expired-link-register-button\" href=\"#\" data-touchpoint=\"register\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Register",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":94},"end":{"line":21,"column":118}}}))
    + "</a>\r\n</div>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'error_management_expired_link'; return template;});