define('sc_blog_post_category.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <a data-link=\"blog-home\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"blogPageUrl") || (depth0 != null ? compilerNameLookup(depth0,"blogPageUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blogPageUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":48}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"blogPageTitle") || (depth0 != null ? compilerNameLookup(depth0,"blogPageTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"blogPageTitle","hash":{},"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":67}}}) : helper)))
    + "</a> / <a data-link=\"category\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"categoryURL") || (depth0 != null ? compilerNameLookup(depth0,"categoryURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryURL","hash":{},"data":data,"loc":{"start":{"line":2,"column":104},"end":{"line":2,"column":119}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"categoryName") || (depth0 != null ? compilerNameLookup(depth0,"categoryName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryName","hash":{},"data":data,"loc":{"start":{"line":2,"column":121},"end":{"line":2,"column":137}}}) : helper)))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"category") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_post_category'; return template;});