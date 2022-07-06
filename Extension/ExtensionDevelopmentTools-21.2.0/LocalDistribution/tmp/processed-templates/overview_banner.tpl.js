define('overview_banner.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasLink") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":13,"column":8}}})) != null ? stack1 : "")
    + "\r\n	<hr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"linkUrl") || (depth0 != null ? compilerNameLookup(depth0,"linkUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkUrl","hash":{},"data":data,"loc":{"start":{"line":10,"column":11},"end":{"line":10,"column":22}}}) : helper)))
    + "\" target=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"linkTarget") || (depth0 != null ? compilerNameLookup(depth0,"linkTarget") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkTarget","hash":{},"data":data,"loc":{"start":{"line":10,"column":32},"end":{"line":10,"column":46}}}) : helper)))
    + "\"><img src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageSource") || (depth0 != null ? compilerNameLookup(depth0,"imageSource") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageSource","hash":{},"data":data,"loc":{"start":{"line":10,"column":58},"end":{"line":10,"column":73}}}) : helper)))
    + "\"></a>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<img src=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"imageSource") || (depth0 != null ? compilerNameLookup(depth0,"imageSource") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"imageSource","hash":{},"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":27}}}) : helper)))
    + "\">\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasBanner") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":16,"column":7}}})) != null ? stack1 : "")
    + "\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'overview_banner'; return template;});