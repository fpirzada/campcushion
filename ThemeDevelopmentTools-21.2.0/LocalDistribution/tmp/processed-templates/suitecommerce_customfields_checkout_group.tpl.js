define('suitecommerce_customfields_checkout_group.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "            <p class=\"custom-fields-checkout-group-loading-error\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"loadingError") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":66},"end":{"line":4,"column":92}}}))
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div data-view=\"CustomFields.Group\"></div>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isLoading") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":9,"column":19}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "            <p class=\"custom-fields-checkout-group-loading-message\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"loadingMessage") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":68},"end":{"line":8,"column":96}}}))
    + "</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"custom-fields-checkout-group\" data-position=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"position") || (depth0 != null ? compilerNameLookup(depth0,"position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data,"loc":{"start":{"line":1,"column":57},"end":{"line":1,"column":69}}}) : helper)))
    + "\" data-module=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"module") || (depth0 != null ? compilerNameLookup(depth0,"module") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"module","hash":{},"data":data,"loc":{"start":{"line":1,"column":84},"end":{"line":1,"column":94}}}) : helper)))
    + "\">\n    <form>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isLoadingError") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":10,"column":15}}})) != null ? stack1 : "")
    + "    </form>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/CustomFields/1.1.4/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'suitecommerce_customfields_checkout_group'; return template;});