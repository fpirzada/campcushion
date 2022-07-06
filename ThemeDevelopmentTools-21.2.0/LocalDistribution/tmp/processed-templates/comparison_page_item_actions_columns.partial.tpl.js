define('comparison_page_item_actions_columns.partial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "    <td class=\"comparison-item-actions\" data-itemid=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":2,"column":53},"end":{"line":2,"column":67}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(compilerNameLookup(helpers,"isEnabledLoginToSeePrice")||(depth0 && compilerNameLookup(depth0,"isEnabledLoginToSeePrice"))||alias2).call(alias1,{"name":"isEnabledLoginToSeePrice","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":44}}}),{"name":"unless","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":13,"column":19}}})) != null ? stack1 : "")
    + "    </td>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPurchasable") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":12,"column":19}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <div class=\"add-to-cart-button-container\">\n                    <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":6,"column":29},"end":{"line":6,"column":36}}}) : helper)))
    + "\" class=\"add-to-cart-button\"\n                       data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":50}}}) : helper)))
    + "\" data-toggle=\"show-in-modal\"\n                       data-action=\"add-to-cart\">\n                        "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"comparisonPageAddToCartButtonLabel") : depths[1]),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":9,"column":24},"end":{"line":9,"column":75}}}))
    + "\n                    </a>\n                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":15,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page_item_actions_columns.partial'; return template;});