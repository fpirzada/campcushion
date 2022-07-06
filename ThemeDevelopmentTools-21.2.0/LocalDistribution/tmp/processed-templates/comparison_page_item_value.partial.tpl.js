define('comparison_page_item_value.partial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial((compilerNameLookup(helpers,"getPartialForField")||(depth0 && compilerNameLookup(depth0,"getPartialForField"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"field") : depth0)) != null ? compilerNameLookup(stack1,"type") : stack1),{"name":"getPartialForField","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":39}}}),depth0,{"hash":{"field":(depth0 != null ? compilerNameLookup(depth0,"field") : depth0),"item":(depth0 != null ? compilerNameLookup(depth0,"item") : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    "
    + container.escapeExpression((compilerNameLookup(helpers,"getFieldValueForItem")||(depth0 && compilerNameLookup(depth0,"getFieldValueForItem"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"field") : depth0)) != null ? compilerNameLookup(stack1,"fieldId") : stack1),{"name":"getFieldValueForItem","hash":{},"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":7,"column":47}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing;

  return "<div class=\"field-value-container\" data-itemid=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"item") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\"\n  data-fieldid=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"field") : depth0)) != null ? compilerNameLookup(stack1,"fieldId") : stack1), depth0))
    + "\" data-fieldtype=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"field") : depth0)) != null ? compilerNameLookup(stack1,"type") : stack1), depth0))
    + "\"\n  data-unformatted-value=\""
    + alias2((compilerNameLookup(helpers,"getFieldValueForItem")||(depth0 && compilerNameLookup(depth0,"getFieldValueForItem"))||alias4).call(alias3,(depth0 != null ? compilerNameLookup(depth0,"item") : depth0),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"field") : depth0)) != null ? compilerNameLookup(stack1,"fieldId") : stack1),{"name":"getFieldValueForItem","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":69}}}))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias3,(compilerNameLookup(helpers,"getPartialForField")||(depth0 && compilerNameLookup(depth0,"getPartialForField"))||alias4).call(alias3,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"field") : depth0)) != null ? compilerNameLookup(stack1,"type") : stack1),{"name":"getPartialForField","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":39}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":8,"column":9}}})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page_item_value.partial'; return template;});