define('comparison_adder_view.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " added-to-compare";
},"3":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"5":function(container,depth0,helpers,partials,data) {
    return " disabled=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      data-toggle=\"tooltip\" title=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"excessInItemsAllowedMessage") || (depth0 != null ? compilerNameLookup(depth0,"excessInItemsAllowedMessage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"excessInItemsAllowedMessage","hash":{},"data":data,"loc":{"start":{"line":8,"column":35},"end":{"line":8,"column":66}}}) : helper)))
    + "\"\n    ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"facets-item-cell-addtocompare"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"item") : depth0)) != null ? compilerNameLookup(stack1,"isSelectedToCompare") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":41},"end":{"line":1,"column":97}}})) != null ? stack1 : "")
    + "\">\n  <input type=\"checkbox\" id=\"product-id-"
    + alias3(alias2(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"item") : depth0)) != null ? compilerNameLookup(stack1,"internalId") : stack1), depth0))
    + "\"\n    class=\"facets-item-cell-addtocompare-ckbox\"\n      data-action=\"add-to-compare\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"item") : depth0)) != null ? compilerNameLookup(stack1,"isSelectedToCompare") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":35},"end":{"line":4,"column":83}}})) != null ? stack1 : "")
    + "\n      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNotAllowedChangeCompareOptions") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":69}}})) != null ? stack1 : "")
    + ">\n  <label for=\"product-id-"
    + alias3(alias2(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"item") : depth0)) != null ? compilerNameLookup(stack1,"internalId") : stack1), depth0))
    + "\"\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isNotAllowedChangeCompareOptions") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + ">\n    "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"addToCompareLabel") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":10,"column":35}}}))
    + "</label>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_adder_view'; return template;});