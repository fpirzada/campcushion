define('comparison_page_field_value_swatch.partial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"code") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "      <label class=\"color-box\" style=\"background-color: "
    + container.escapeExpression(container.lambda((depth0 != null ? compilerNameLookup(depth0,"code") : depth0), depth0))
    + "\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "      <label class=\"picker\">"
    + container.escapeExpression(container.lambda((depth0 != null ? compilerNameLookup(depth0,"label") : depth0), depth0))
    + "</label>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"swatch-type\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(compilerNameLookup(helpers,"getColorCodes")||(depth0 && compilerNameLookup(depth0,"getColorCodes"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"field") : depth0),(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),{"name":"getColorCodes","hash":{},"data":data,"loc":{"start":{"line":2,"column":10},"end":{"line":2,"column":37}}}),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":8,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page_field_value_swatch.partial'; return template;});