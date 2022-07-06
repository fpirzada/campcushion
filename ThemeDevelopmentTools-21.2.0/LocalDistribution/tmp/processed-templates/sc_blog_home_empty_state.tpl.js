define('sc_blog_home_empty_state.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"sc-blog-empty-state\">\n  <h4 class=\"sc-blog-empty-state-label\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":2,"column":40},"end":{"line":2,"column":51}}}) : helper))) != null ? stack1 : "")
    + "</h4>\n  <div class=\"sc-blog-empty-state-action-block\">\n    <h3 class=\"sc-blog-empty-state-action-block-message\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"message") || (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":4,"column":57},"end":{"line":4,"column":70}}}) : helper))) != null ? stack1 : "")
    + "</h3>\n    <a class=\"sc-blog-empty-state-action-block-button\" href=\"/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"buttonUrl") || (depth0 != null ? compilerNameLookup(depth0,"buttonUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonUrl","hash":{},"data":data,"loc":{"start":{"line":5,"column":62},"end":{"line":5,"column":75}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"buttonLabel") || (depth0 != null ? compilerNameLookup(depth0,"buttonLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"buttonLabel","hash":{},"data":data,"loc":{"start":{"line":5,"column":77},"end":{"line":5,"column":92}}}) : helper)))
    + "</a>\n  </div>\n  <div class=\"sc-blog-empty-state-suggestions-block\" data-view=\"Suggestions.View\">\n  </div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_home_empty_state'; return template;});