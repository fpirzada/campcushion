define('comparison_page_item_review_columns.partial.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <td class=\"comparison-item-review quick-view-rating\" data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":82}}}) : helper)))
    + "\">\n    <p class=\"upper-text rating-label small-label\" data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":3,"column":64},"end":{"line":3,"column":78}}}) : helper)))
    + "\">\n      "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"comparisonPageRatingLabel") : depths[1]),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":4,"column":48}}}))
    + "\n    </p>\n    <div class=\"star-rating-area\">\n      <div class=\"star-rating-area-empty\">\n        <div class=\"star-rating-area-empty-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"stars") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":11,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n      </div>\n      <div class=\"star-rating-area-fill comparison-item-rating\" data-rating=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"realRating") || (depth0 != null ? compilerNameLookup(depth0,"realRating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"realRating","hash":{},"data":data,"loc":{"start":{"line":14,"column":77},"end":{"line":14,"column":91}}}) : helper)))
    + "\"\n           style=\"width: "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rating") || (depth0 != null ? compilerNameLookup(depth0,"rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":15,"column":25},"end":{"line":15,"column":35}}}) : helper)))
    + "%\" data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":15,"column":51},"end":{"line":15,"column":65}}}) : helper)))
    + "\">\n        <div class=\"star-rating-area-filled\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"stars") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":19,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n      </div>\n    </div>\n    <div class=\"clear\"></div>\n  </td>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"star-rating-empty\"></i>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <i class=\"star-rating-filled\"></i>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":25,"column":9}}})) != null ? stack1 : "")
    + "\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page_item_review_columns.partial'; return template;});