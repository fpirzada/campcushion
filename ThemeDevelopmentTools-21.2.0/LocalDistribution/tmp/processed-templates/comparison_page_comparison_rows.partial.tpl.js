define('comparison_page_comparison_rows.partial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  "
    + container.escapeExpression((compilerNameLookup(helpers,"setVar")||(depth0 && compilerNameLookup(depth0,"setVar"))||container.hooks.helperMissing).call(alias1,"rowCounter",0,{"name":"setVar","hash":{},"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":2,"column":27}}}))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"groupsOfFieldsToCompare") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":28,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRow") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"fields") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":27,"column":13}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "      "
    + alias3((compilerNameLookup(helpers,"increaseVar")||(depth0 && compilerNameLookup(depth0,"increaseVar"))||alias2).call(alias1,"rowCounter",1,{"name":"increaseVar","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":36}}}))
    + "\n      <tr class=\"group-name-row row-"
    + alias3((compilerNameLookup(helpers,"isOddOrEven")||(depth0 && compilerNameLookup(depth0,"isOddOrEven"))||alias2).call(alias1,(compilerNameLookup(helpers,"getVar")||(depth0 && compilerNameLookup(depth0,"getVar"))||alias2).call(alias1,"rowCounter",{"name":"getVar","hash":{},"data":data,"loc":{"start":{"line":6,"column":50},"end":{"line":6,"column":71}}}),{"name":"isOddOrEven","hash":{},"data":data,"loc":{"start":{"line":6,"column":36},"end":{"line":6,"column":73}}}))
    + "\" data-groupname=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":6,"column":91},"end":{"line":6,"column":100}}}) : helper)))
    + "\">\n        <td class=\"upper-text specifications-column\">\n          <strong>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":8,"column":18},"end":{"line":8,"column":27}}}) : helper)))
    + "</strong>\n        </td>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"items") : depths[1]),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":12,"column":17}}})) != null ? stack1 : "")
    + "      </tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <td/>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "      "
    + alias3((compilerNameLookup(helpers,"increaseVar")||(depth0 && compilerNameLookup(depth0,"increaseVar"))||alias2).call(alias1,"rowCounter",1,{"name":"increaseVar","hash":{},"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":16,"column":36}}}))
    + "\n      <tr class=\"field-label-row row-"
    + alias3((compilerNameLookup(helpers,"isOddOrEven")||(depth0 && compilerNameLookup(depth0,"isOddOrEven"))||alias2).call(alias1,(compilerNameLookup(helpers,"getVar")||(depth0 && compilerNameLookup(depth0,"getVar"))||alias2).call(alias1,"rowCounter",{"name":"getVar","hash":{},"data":data,"loc":{"start":{"line":17,"column":51},"end":{"line":17,"column":72}}}),{"name":"isOddOrEven","hash":{},"data":data,"loc":{"start":{"line":17,"column":37},"end":{"line":17,"column":74}}}))
    + "\" data-fieldid=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":17,"column":90},"end":{"line":17,"column":101}}}) : helper)))
    + "\">\n        <td class=\"upper-text small-label field-label-td specifications-column\" data-fieldid=\""
    + alias3(container.lambda((depths[1] != null ? compilerNameLookup(depths[1],"fieldId") : depths[1]), depth0))
    + "\">\n          "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"label") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":29}}}))
    + "\n        </td>\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depths[2] != null ? compilerNameLookup(depths[2],"items") : depths[2]),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":25,"column":17}}})) != null ? stack1 : "")
    + "      </tr>\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "          <td class=\"item-value field-type-"
    + alias2(alias1((depths[1] != null ? compilerNameLookup(depths[1],"type") : depths[1]), depth0))
    + "\"  data-itemid=\""
    + alias2(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":22,"column":70},"end":{"line":22,"column":84}}}) : helper)))
    + "\" data-fieldid=\""
    + alias2(alias1((depths[1] != null ? compilerNameLookup(depths[1],"fieldId") : depths[1]), depth0))
    + "\">\n"
    + ((stack1 = container.invokePartial(compilerNameLookup(partials,"itemValueColumn"),depth0,{"name":"itemValueColumn","hash":{"field":depths[1],"item":depth0},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "          </td>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showComparisonRows") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page_comparison_rows.partial'; return template;});