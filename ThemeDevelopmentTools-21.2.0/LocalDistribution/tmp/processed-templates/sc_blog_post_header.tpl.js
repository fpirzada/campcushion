define('sc_blog_post_header.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <h6>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"publishedDateLabel") || (depth0 != null ? compilerNameLookup(depth0,"publishedDateLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publishedDateLabel","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":34}}}) : helper)))
    + " <br/> "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"publishingDate") || (depth0 != null ? compilerNameLookup(depth0,"publishingDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"publishingDate","hash":{},"data":data,"loc":{"start":{"line":17,"column":41},"end":{"line":17,"column":59}}}) : helper)))
    + "</h6>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"sc-blog-component-header\" role=\"region\" aria-label=\"Blog Post Header\">\n  <div class=\"sc-blog-component-header-category\">\n    <h5 data-view=\"Category.View\"></h5>\n  </div>\n  <div class=\"sc-blog-component-header-title\">\n    <h2>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":18}}}) : helper)))
    + "</h2>\n  </div>\n  <div class=\"sc-blog-component-header-subtitle\">\n    <h4>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"subHeading") || (depth0 != null ? compilerNameLookup(depth0,"subHeading") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subHeading","hash":{},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":22}}}) : helper)))
    + "</h4>\n  </div>\n  <div class=\"sc-blog-component-header-creation-info\">\n    <div class=\"sc-blog-component-header-creation-info-author\">\n      <h6 data-view=\"Author.View\"></h6>\n    </div>\n    <div class=\"sc-blog-component-header-creation-info-date\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"publishingDate") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":18,"column":13}}})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_post_header'; return template;});