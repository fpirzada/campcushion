define('quickorder_accesspoints_headerlink.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "	<a class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasClass") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":9,"column":11},"end":{"line":9,"column":96}}})) != null ? stack1 : "")
    + "\" href=\"#\" data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"cartTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"cartTouchPoint") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"cartTouchPoint","hash":{},"data":data,"loc":{"start":{"line":9,"column":124},"end":{"line":9,"column":142}}}) : helper)))
    + "\" data-hashtag=\"#cart?openQuickOrder=true\" title=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quick Order",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":192},"end":{"line":9,"column":219}}}))
    + "\">\r\n		"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"title") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":10,"column":21}}}))
    + "\r\n	</a>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"className") || (depth0 != null ? compilerNameLookup(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":9,"column":28},"end":{"line":9,"column":41}}}) : helper)))
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    return "quickorder-accesspoints-headerlink-link";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":12,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'quickorder_accesspoints_headerlink'; return template;});