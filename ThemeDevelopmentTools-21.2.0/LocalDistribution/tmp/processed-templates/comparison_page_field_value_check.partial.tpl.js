define('comparison_page_field_value_check.partial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "  <i class=\"check-icon\"/>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(compilerNameLookup(helpers,"isCheckCross")||(depth0 && compilerNameLookup(depth0,"isCheckCross"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"field") : depth0)) != null ? compilerNameLookup(stack1,"type") : stack1),{"name":"isCheckCross","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":33}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "    <i class=\"cross-icon\"/>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"check-type\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(compilerNameLookup(helpers,"getFieldValueForItem")||(depth0 && compilerNameLookup(depth0,"getFieldValueForItem"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"field") : depth0)) != null ? compilerNameLookup(stack1,"fieldId") : stack1),{"name":"getFieldValueForItem","hash":{},"data":data,"loc":{"start":{"line":2,"column":6},"end":{"line":2,"column":47}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":8,"column":7}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page_field_value_check.partial'; return template;});