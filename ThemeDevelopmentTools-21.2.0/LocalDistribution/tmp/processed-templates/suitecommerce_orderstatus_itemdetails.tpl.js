define('suitecommerce_orderstatus_itemdetails.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"sc-order-status-details-section\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"lines") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":25,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <p>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"link") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":7,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"small") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":10,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"strong") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":13,"column":15}}})) != null ? stack1 : "")
    + "          "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":19}}}) : helper)))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"strong") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":17,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"small") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"link") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "      </p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <a href=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":6,"column":19},"end":{"line":6,"column":26}}}) : helper)))
    + "\" target=\"_blank\">\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "          <small>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "          <strong>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "          </strong>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "          </small>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "          </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"sections") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":27,"column":9}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/OrderStatus/1.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'suitecommerce_orderstatus_itemdetails'; return template;});