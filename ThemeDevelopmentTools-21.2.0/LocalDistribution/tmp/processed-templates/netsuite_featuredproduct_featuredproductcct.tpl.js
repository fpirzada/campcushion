define('netsuite_featuredproduct_featuredproductcct.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <div class=\"ribbon\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"ribbonText") || (depth0 != null ? compilerNameLookup(depth0,"ribbonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ribbonText","hash":{},"data":data,"loc":{"start":{"line":7,"column":40},"end":{"line":7,"column":54}}}) : helper)))
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"product-formatted-price product-views-price-lead\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"product-in-stock product-line-stock\" style=\"display: none;\">\n                        <span class=\"stock-availability\">\n                            <span class=\"in-stock-icon\"><i></i></span> In Stock\n                        </span>\n                    </div>\n                    <div class=\"product-out-of-stock product-line-stock\" style=\"display: none;\">\n                        <span class=\"stock-availability\">\n                            <span class=\"out-of-stock-icon\"><i></i></span> Out of Stock\n                        </span>\n                    </div>\n                    <div class=\"product-qty-available\" style=\"display: none;\">\n                        <p class=\"product-qty-available-number\"></p>\n                    </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <div class=\"button-container\">\n                        <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"btnLink") || (depth0 != null ? compilerNameLookup(depth0,"btnLink") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnLink","hash":{},"data":data,"loc":{"start":{"line":35,"column":33},"end":{"line":35,"column":44}}}) : helper)))
    + "\" target=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"target") || (depth0 != null ? compilerNameLookup(depth0,"target") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"target","hash":{},"data":data,"loc":{"start":{"line":35,"column":54},"end":{"line":35,"column":64}}}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"btnStyleClass") || (depth0 != null ? compilerNameLookup(depth0,"btnStyleClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnStyleClass","hash":{},"data":data,"loc":{"start":{"line":35,"column":73},"end":{"line":35,"column":90}}}) : helper)))
    + "\"\n                           data-action=\"sc-fp-open-product-page\"\n                        >"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"btnText") || (depth0 != null ? compilerNameLookup(depth0,"btnText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"btnText","hash":{},"data":data,"loc":{"start":{"line":37,"column":25},"end":{"line":37,"column":36}}}) : helper)))
    + "</a>\n                    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<section class=\"featuredproductcct-layout\">\n	<div class=\"featuredproductcct-layout-row\" style=\"display: none;\">\n        <div class=\"image-container featuredproductcct-layout-col-image\">\n            <div class=\"featuredproductcct-layout-col-image-container\">\n                <img class=\"center-block product-image\" src=\"\"/>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasRibbonText") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":8,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n        <div class=\"featuredproductcct-layout-col-item-info\">\n            <div class=\"product-content product-details-full-main\">\n                <h1 class=\"product-name product-details-full-content-header-title\"></h1>\n                <p class=\"product-description\"></p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPrice") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":17,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showItemAvailability") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":32,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasBtnText") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":16},"end":{"line":39,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n	<p class=\"featuredproductcct-layout-invalid-item-message\" style=\"display: none;\">\n		<strong>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Invalid Item:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":44,"column":10},"end":{"line":44,"column":39}}}))
    + "</strong>\n"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Verify that the selected item is not a matrix subitem and is available to display in the web store.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":45,"column":115}}}))
    + "\n	</p>\n</section>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/FeaturedProduct/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netsuite_featuredproduct_featuredproductcct'; return template;});