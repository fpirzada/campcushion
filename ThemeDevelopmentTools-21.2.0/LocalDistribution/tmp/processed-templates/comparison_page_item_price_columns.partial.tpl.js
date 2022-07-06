define('comparison_page_item_price_columns.partial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "  <td class=\"comparison-item-price\" data-itemid=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":2,"column":49},"end":{"line":2,"column":63}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(compilerNameLookup(helpers,"isEnabledLoginToSeePrice")||(depth0 && compilerNameLookup(depth0,"isEnabledLoginToSeePrice"))||alias2).call(alias1,{"name":"isEnabledLoginToSeePrice","hash":{},"data":data,"loc":{"start":{"line":3,"column":10},"end":{"line":3,"column":36}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "  </td>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "     <a data-touchpoint=\"login\" data-hashtag=\"login-register\" href=\"#\">\n       "
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? compilerNameLookup(depths[1],"comparisonPageRequireLoginForPricingMessage") : depths[1]),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":5,"column":7},"end":{"line":5,"column":67}}}))
    + "\n     </a>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "      <p class=\"upper-text small-label comparison-price-label\" data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":8,"column":76},"end":{"line":8,"column":90}}}) : helper)))
    + "\">\n        "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"comparisonPagePriceLabel") : depths[1]),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":49}}}))
    + "\n      </p>\n      <p class=\"price-formatted comparison-price-value middle-price\" data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":11,"column":82},"end":{"line":11,"column":96}}}) : helper)))
    + "\">"
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"price") : depth0)) != null ? compilerNameLookup(stack1,"formatted") : stack1), depth0))
    + "</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":9}}})) != null ? stack1 : "")
    + "\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page_item_price_columns.partial'; return template;});