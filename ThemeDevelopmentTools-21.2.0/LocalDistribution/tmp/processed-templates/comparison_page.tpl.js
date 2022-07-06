define('comparison_page.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"items-container\">\n    <table class=\"items-table table-for-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"items") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1), depth0))
    + "-items"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSupportedStickPositioning") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":62},"end":{"line":14,"column":117}}})) != null ? stack1 : "")
    + "\">\n      <thead>\n      <tr class=\"item-name-row\">\n        <td class=\"specifications-column\"/>\n"
    + ((stack1 = container.invokePartial(compilerNameLookup(partials,"itemNameColumns"),depth0,{"name":"itemNameColumns","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </tr>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEnabledRating") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":6},"end":{"line":25,"column":13}}})) != null ? stack1 : "")
    + "      <tr class=\"item-thumbnail-row\">\n        <td class=\"specifications-column\"/>\n"
    + ((stack1 = container.invokePartial(compilerNameLookup(partials,"itemThumbnailColumns"),depth0,{"name":"itemThumbnailColumns","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </tr>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"comparisonPageShowPrice") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"comparisonPageShowSKU") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":6},"end":{"line":41,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"comparisonPageShowAddToCartButton") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":6},"end":{"line":47,"column":13}}})) != null ? stack1 : "")
    + "      </thead>\n      <tbody>\n"
    + ((stack1 = container.invokePartial(compilerNameLookup(partials,"comparisonRows"),depth0,{"name":"comparisonRows","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </tbody>\n    </table>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " enable-stick";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <tr class=\"item-review-row\">\n          <td class=\"specifications-column\"/>\n"
    + ((stack1 = container.invokePartial(compilerNameLookup(partials,"itemReviewColumns"),depth0,{"name":"itemReviewColumns","data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </tr>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <tr class=\"item-price-row\">\n          <td class=\"specifications-column\"/>\n"
    + ((stack1 = container.invokePartial(compilerNameLookup(partials,"itemPriceColumns"),depth0,{"name":"itemPriceColumns","data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </tr>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <tr class=\"item-sku-row\">\n          <td class=\"specifications-column\"/>\n"
    + ((stack1 = container.invokePartial(compilerNameLookup(partials,"itemSKUColumns"),depth0,{"name":"itemSKUColumns","data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </tr>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <tr class=\"item-actions-row\">\n          <td class=\"specifications-column\"/>\n"
    + ((stack1 = container.invokePartial(compilerNameLookup(partials,"itemActionsColumns"),depth0,{"name":"itemActionsColumns","data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "<div class=\"comparison-page-layout-container\">\n <div class=\"comparison-page-title\">\n    <h1>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"title") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":27}}}))
    + "</h1>\n  </div>\n  <div class=\"comparison-page-description\">\n    "
    + ((stack1 = (compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"comparisonPageDescription") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":45}}})) != null ? stack1 : "")
    + "\n  </div>\n  <div class=\"comparison-page-search-container\">\n    <div data-view=\"ItemSearcher.View\"></div>\n  </div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showComparisonTable") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":54,"column":9}}})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_page'; return template;});