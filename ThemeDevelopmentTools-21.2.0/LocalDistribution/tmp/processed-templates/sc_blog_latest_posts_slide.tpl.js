define('sc_blog_latest_posts_slide.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"sc-blog-latest-posts-slide-wrapper-thumbnail "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showThumbnail") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":65},"end":{"line":4,"column":115}}})) != null ? stack1 : "")
    + "\"\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showThumbnail") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":10},"end":{"line":7,"column":17}}})) != null ? stack1 : "")
    + ">\n          <span role=\"img\"\n            "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"thumbnailAlt") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":10,"column":69}}})) != null ? stack1 : "")
    + "></span>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "non-thumbnail";
},"4":function(container,depth0,helpers,partials,data) {
    return "             style=\"background-image: url('"
    + container.escapeExpression((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"imageUrl") : depth0),(depth0 != null ? compilerNameLookup(depth0,"imageResizeId") : depth0),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":6,"column":43},"end":{"line":6,"column":81}}}))
    + "')\"\n          ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"thumbnailAlt") || (depth0 != null ? compilerNameLookup(depth0,"thumbnailAlt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailAlt","hash":{},"data":data,"loc":{"start":{"line":9,"column":38},"end":{"line":9,"column":54}}}) : helper)))
    + "\" aria-label=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"thumbnailAlt") || (depth0 != null ? compilerNameLookup(depth0,"thumbnailAlt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailAlt","hash":{},"data":data,"loc":{"start":{"line":9,"column":68},"end":{"line":9,"column":86}}}) : helper)))
    + "\"\n            ";
},"8":function(container,depth0,helpers,partials,data) {
    return " alt=\"Post Image\" aria-label=\"Post Image\" ";
},"10":function(container,depth0,helpers,partials,data) {
    return " non-thumbnail";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"sc-blog-latest-posts-slide\" data-post-url=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":1,"column":55},"end":{"line":1,"column":62}}}) : helper)))
    + "\">\n    <div class=\"sc-blog-latest-posts-slide-wrapper\" data-action=\"navigate-to-blog\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showThumbnailContainer") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "      <div class=\"sc-blog-latest-posts-slide-wrapper-content"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showThumbnail") : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":60},"end":{"line":13,"column":111}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"sc-blog-latest-posts-slide-wrapper-content-category\">\n          <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"categoryURL") || (depth0 != null ? compilerNameLookup(depth0,"categoryURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryURL","hash":{},"data":data,"loc":{"start":{"line":15,"column":19},"end":{"line":15,"column":34}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"category") || (depth0 != null ? compilerNameLookup(depth0,"category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":15,"column":36},"end":{"line":15,"column":48}}}) : helper)))
    + "</a>\n        </div>\n        <div class=\"sc-blog-latest-posts-slide-wrapper-content-body"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showThumbnail") : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":67},"end":{"line":17,"column":118}}})) != null ? stack1 : "")
    + "\">\n          <div class=\"sc-blog-latest-posts-slide-wrapper-content-body-title\">\n            <h4>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":26}}}) : helper)))
    + "</h4>\n          </div>\n          <div class=\"sc-blog-latest-posts-slide-wrapper-content-body-excerpt\">\n            <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"excerpt") || (depth0 != null ? compilerNameLookup(depth0,"excerpt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"excerpt","hash":{},"data":data,"loc":{"start":{"line":22,"column":15},"end":{"line":22,"column":28}}}) : helper))) != null ? stack1 : "")
    + "</p>\n          </div>\n        </div>\n        <div class=\"sc-blog-latest-posts-slide-wrapper-content-read-more-action\">\n          <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":26,"column":19},"end":{"line":26,"column":26}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"readMoreLabel") || (depth0 != null ? compilerNameLookup(depth0,"readMoreLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"readMoreLabel","hash":{},"data":data,"loc":{"start":{"line":26,"column":28},"end":{"line":26,"column":45}}}) : helper)))
    + "</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_latest_posts_slide'; return template;});