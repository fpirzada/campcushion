define('comparison_page_field_value_image.partial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "<div class=\"image-type\">\n  <img src=\""
    + container.escapeExpression((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,(compilerNameLookup(helpers,"getFieldValueForItem")||(depth0 && compilerNameLookup(depth0,"getFieldValueForItem"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"field") : depth0)) != null ? compilerNameLookup(stack1,"fieldId") : stack1),{"name":"getFieldValueForItem","hash":{},"data":data,"loc":{"start":{"line":2,"column":26},"end":{"line":2,"column":67}}}),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":81}}}))
    + "\"/>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page_field_value_image.partial'; return template;});