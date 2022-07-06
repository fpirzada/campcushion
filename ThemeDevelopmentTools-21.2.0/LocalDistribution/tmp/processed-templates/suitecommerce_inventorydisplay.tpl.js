define('suitecommerce_inventorydisplay.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isBackorderable") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":10,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div itemprop=\"offers\" itemscope itemtype=\"http://schema.org/Offer\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isInStock") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":4,"column":6},"end":{"line":8,"column":13}}})) != null ? stack1 : "")
    + "    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <link itemprop=\"availability\" href=\"http://schema.org/InStock\"/>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <link itemprop=\"availability\" href=\"http://schema.org/OutOfStock\"/>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"loadingText") || (depth0 != null ? compilerNameLookup(depth0,"loadingText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"loadingText","hash":{},"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":14,"column":19}}}) : helper)))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"stockMessage") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":28,"column":9}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"inventory-display\">\n    <p class=\"inventory-display-stock-information-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"messageType") || (depth0 != null ? compilerNameLookup(depth0,"messageType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"messageType","hash":{},"data":data,"loc":{"start":{"line":18,"column":50},"end":{"line":18,"column":65}}}) : helper)))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"orderType") || (depth0 != null ? compilerNameLookup(depth0,"orderType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"orderType","hash":{},"data":data,"loc":{"start":{"line":18,"column":66},"end":{"line":18,"column":79}}}) : helper)))
    + " inventory-display-message-text\">\n        <span class=\"inventory-display-stock-information-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"messageType") || (depth0 != null ? compilerNameLookup(depth0,"messageType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"messageType","hash":{},"data":data,"loc":{"start":{"line":19,"column":57},"end":{"line":19,"column":72}}}) : helper)))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"orderType") || (depth0 != null ? compilerNameLookup(depth0,"orderType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"orderType","hash":{},"data":data,"loc":{"start":{"line":19,"column":73},"end":{"line":19,"column":86}}}) : helper)))
    + " icon\"><i></i></span>\n        <span class=\"inventory-display-message-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"messageType") || (depth0 != null ? compilerNameLookup(depth0,"messageType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"messageType","hash":{},"data":data,"loc":{"start":{"line":20,"column":47},"end":{"line":20,"column":62}}}) : helper)))
    + " "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"orderType") || (depth0 != null ? compilerNameLookup(depth0,"orderType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"orderType","hash":{},"data":data,"loc":{"start":{"line":20,"column":63},"end":{"line":20,"column":76}}}) : helper)))
    + "\"> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"stockMessage") || (depth0 != null ? compilerNameLookup(depth0,"stockMessage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stockMessage","hash":{},"data":data,"loc":{"start":{"line":20,"column":79},"end":{"line":20,"column":97}}}) : helper)))
    + "</span>\n    </p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"quantityAvailableMessage") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":26,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <p class=\"inventory-display-quantity-available\">\n        <span>"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"quantityAvailableMessage") || (depth0 != null ? compilerNameLookup(depth0,"quantityAvailableMessage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"quantityAvailableMessage","hash":{},"data":data,"loc":{"start":{"line":24,"column":14},"end":{"line":24,"column":44}}}) : helper)))
    + "</span>\n      </p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isJSONLdEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/InventoryDisplay/1.2.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'suitecommerce_inventorydisplay'; return template;});