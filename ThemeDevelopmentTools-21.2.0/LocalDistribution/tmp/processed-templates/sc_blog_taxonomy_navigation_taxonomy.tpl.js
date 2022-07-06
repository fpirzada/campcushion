define('sc_blog_taxonomy_navigation_taxonomy.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "sc-blog-post-taxonomy-navigation-taxonomy-highlighted";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"sc-blog-post-taxonomy-navigation-taxonomy\">\n  <a class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isHighlighted") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":93}}})) != null ? stack1 : "")
    + "\"\n     href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"urlFragment") || (depth0 != null ? compilerNameLookup(depth0,"urlFragment") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlFragment","hash":{},"data":data,"loc":{"start":{"line":3,"column":11},"end":{"line":3,"column":26}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"taxonomyName") || (depth0 != null ? compilerNameLookup(depth0,"taxonomyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"taxonomyName","hash":{},"data":data,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":44}}}) : helper)))
    + "</a>\n</li>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_taxonomy_navigation_taxonomy'; return template;});