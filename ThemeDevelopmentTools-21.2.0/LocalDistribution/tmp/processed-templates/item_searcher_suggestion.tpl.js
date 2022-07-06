define('item_searcher_suggestion.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"item-review\">\n          <div class=\"star-rating-area\">\n            <div class=\"star-rating-area-empty\">\n              <div class=\"star-rating-area-empty-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"stars") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":15,"column":25}}})) != null ? stack1 : "")
    + "              </div>\n            </div>\n            <div class=\"star-rating-area-fill comparison-item-rating\" data-rating=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"realRating") || (depth0 != null ? compilerNameLookup(depth0,"realRating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"realRating","hash":{},"data":data,"loc":{"start":{"line":18,"column":83},"end":{"line":18,"column":97}}}) : helper)))
    + "\"\n                 style=\"width: "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rating") || (depth0 != null ? compilerNameLookup(depth0,"rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":19,"column":31},"end":{"line":19,"column":41}}}) : helper)))
    + "%\" data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalId","hash":{},"data":data,"loc":{"start":{"line":19,"column":57},"end":{"line":19,"column":71}}}) : helper)))
    + "\">\n              <div class=\"star-rating-area-filled\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"stars") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":23,"column":25}}})) != null ? stack1 : "")
    + "              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"clear\"></div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                    <i class=\"star-rating-empty\"></i>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                  <i class=\"star-rating-filled\"></i>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"record-searcher-suggestion\" data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalId","hash":{},"data":data,"loc":{"start":{"line":1,"column":53},"end":{"line":1,"column":67}}}) : helper)))
    + "\">\n  <a data-action=\"record-searcher-open-record\" data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalId","hash":{},"data":data,"loc":{"start":{"line":2,"column":60},"end":{"line":2,"column":74}}}) : helper)))
    + "\">\n    <div class=\"suggestion-image\">\n      <img data-loader=\"false\"  src=\""
    + alias4((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"url") : stack1),"thumbnail",{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":4,"column":37},"end":{"line":4,"column":78}}}))
    + "\" alt=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"thumbnail") : depth0)) != null ? compilerNameLookup(stack1,"altimagetext") : stack1), depth0))
    + "\">\n    </div>\n    <div class=\"suggestion-content\">\n      <p data-text-highlighter=\"true\" class=\"link-color item-name record-searcher-text-highlighter\" data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalId","hash":{},"data":data,"loc":{"start":{"line":7,"column":113},"end":{"line":7,"column":127}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":129},"end":{"line":7,"column":137}}}) : helper)))
    + "</p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEnabledRating") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + "      <span class=\"sc-sku-label\"> SKU </span>\n      <span class=\"sc-sku-value record-searcher-text-highlighter\" data-text-highlighter=\"true\" data-itemid=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalId") || (depth0 != null ? compilerNameLookup(depth0,"internalId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalId","hash":{},"data":data,"loc":{"start":{"line":31,"column":108},"end":{"line":31,"column":122}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"sku") || (depth0 != null ? compilerNameLookup(depth0,"sku") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sku","hash":{},"data":data,"loc":{"start":{"line":31,"column":124},"end":{"line":31,"column":131}}}) : helper)))
    + "</span>\n    </div>\n    <div class=\"clear\"></div>\n  </a>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'item_searcher_suggestion'; return template;});