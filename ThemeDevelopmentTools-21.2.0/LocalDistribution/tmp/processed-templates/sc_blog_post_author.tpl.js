define('sc_blog_post_author.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  Written by <br/> <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"authorUrl") || (depth0 != null ? compilerNameLookup(depth0,"authorUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authorUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":28},"end":{"line":2,"column":41}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"authorName") || (depth0 != null ? compilerNameLookup(depth0,"authorName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authorName","hash":{},"data":data,"loc":{"start":{"line":2,"column":43},"end":{"line":2,"column":57}}}) : helper)))
    + "</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"author") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_post_author'; return template;});