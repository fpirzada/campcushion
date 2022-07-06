define('sc_post_cards_cct_template.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"sc-blog-post-cards-cct-heading\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"cctHeading") || (depth0 != null ? compilerNameLookup(depth0,"cctHeading") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cctHeading","hash":{},"data":data,"loc":{"start":{"line":3,"column":48},"end":{"line":3,"column":64}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"sc-blog-post-cards-cct\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"cctHeading") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":4,"column":9}}})) != null ? stack1 : "")
    + "  <div class=\"sc-blog-post-cards-cct-list\" data-view=\"PostList.View\"></div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_post_cards_cct_template'; return template;});