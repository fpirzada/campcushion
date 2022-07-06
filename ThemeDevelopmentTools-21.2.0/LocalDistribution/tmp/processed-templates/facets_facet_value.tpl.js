define('facets_facet_value.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " active";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<i class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":12,"column":13},"end":{"line":12,"column":101}}})) != null ? stack1 : "")
    + "\"></i>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " facets-facet-value-icon-ok ";
},"6":function(container,depth0,helpers,partials,data) {
    return " facets-facet-value-icon-plus";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<li class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":11},"end":{"line":8,"column":41}}})) != null ? stack1 : "")
    + "\">\r\n<h4>\r\n	<a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"facetValueUrl") || (depth0 != null ? compilerNameLookup(depth0,"facetValueUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facetValueUrl","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":27}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":10,"column":36},"end":{"line":10,"column":45}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"behaviorIsMulti") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":13,"column":9}}})) != null ? stack1 : "")
    + "		<span>\r\n			"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"formattedLabel") || (depth0 != null ? compilerNameLookup(depth0,"formattedLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formattedLabel","hash":{},"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":15,"column":21}}}) : helper)))
    + "\r\n		</span>\r\n		<span class=\"hidden\">\r\n			("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"count") || (depth0 != null ? compilerNameLookup(depth0,"count") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":18,"column":13}}}) : helper)))
    + ")\r\n		</span>\r\n	</a>\r\n</h4>\r\n</li>\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'facets_facet_value'; return template;});