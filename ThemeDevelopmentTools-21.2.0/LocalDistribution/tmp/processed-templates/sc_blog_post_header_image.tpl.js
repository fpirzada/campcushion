define('sc_blog_post_header_image.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "  <div class=\"sc-blog-component-header-image\">\n    <div class=\"sc-blog-component-header-image-container\"\n         style=\"background-image:url('"
    + container.escapeExpression((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"headerImageURL") : depth0),(depth0 != null ? compilerNameLookup(depth0,"headerImageResizeName") : depth0),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":4,"column":38},"end":{"line":4,"column":90}}}))
    + "')\">\n      <span role=\"img\"\n        "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"headerImageAlt") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":7,"column":65}}})) != null ? stack1 : "")
    + "></span>\n    </div>\n\n    <div class=\"sc-blog-component-header-image-clear-box\"></div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerImageAlt") || (depth0 != null ? compilerNameLookup(depth0,"headerImageAlt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerImageAlt","hash":{},"data":data,"loc":{"start":{"line":6,"column":37},"end":{"line":6,"column":57}}}) : helper)))
    + "\" aria-label=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerImageAlt") || (depth0 != null ? compilerNameLookup(depth0,"headerImageAlt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerImageAlt","hash":{},"data":data,"loc":{"start":{"line":6,"column":71},"end":{"line":6,"column":91}}}) : helper)))
    + "\"\n        ";
},"4":function(container,depth0,helpers,partials,data) {
    return " alt=\"Post Image\" aria-label=\"Post Image\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"headerImageURL") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":12,"column":7}}})) != null ? stack1 : "");
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_post_header_image'; return template;});