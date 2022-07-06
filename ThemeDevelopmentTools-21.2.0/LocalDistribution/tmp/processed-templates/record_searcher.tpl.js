define('record_searcher.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "disabled ";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"record-searcher-suggestion-wrapper\">\n      <div class=\"record-searcher-suggestions-container\" data-view=\"RecordSearcher.Suggestions\"></div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"search-input-group\">\n  <label class=\"search-input-label\" for=\"search-input\">\n    "
    + ((stack1 = (compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"templateLabels") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":40}}})) != null ? stack1 : "")
    + "\n  </label>\n  <input type=\"text\" class=\"search-input\"\n         name=\"search-input\" type=\"search\"\n         placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"templateLabels") : depth0)) != null ? compilerNameLookup(stack1,"inputPlaceholder") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":22},"end":{"line":7,"column":67}}}))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSearchDisabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":69},"end":{"line":7,"column":109}}})) != null ? stack1 : "")
    + "\n         autocomplete=\"off\" data-record-searcher-id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"searcherBoxId") || (depth0 != null ? compilerNameLookup(depth0,"searcherBoxId") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"searcherBoxId","hash":{},"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":70}}}) : helper)))
    + "\" />\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSearchResults") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":13,"column":9}}})) != null ? stack1 : "")
    + "  <small class=\"help-text\">\n    "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"templateLabels") : depth0)) != null ? compilerNameLookup(stack1,"helperText") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":15,"column":43}}}))
    + "\n  </small>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'record_searcher'; return template;});