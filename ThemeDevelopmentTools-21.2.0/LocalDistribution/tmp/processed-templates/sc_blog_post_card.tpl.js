define('sc_blog_post_card.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <div class=\"sc-blog-post-card-"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"layout","hash":{},"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":46}}}) : helper)))
    + "-wrapper-thumbnail "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showThumbnail") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":65},"end":{"line":4,"column":115}}})) != null ? stack1 : "")
    + "\"\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showThumbnail") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":7,"column":15}}})) != null ? stack1 : "")
    + ">\n        <span role=\"img\"\n          "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"thumbnailAlt") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":10,"column":67}}})) != null ? stack1 : "")
    + "></span>\n      </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "non-thumbnail";
},"4":function(container,depth0,helpers,partials,data) {
    return "           style=\"background-image: url('"
    + container.escapeExpression((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"thumbnailUrl") : depth0),(depth0 != null ? compilerNameLookup(depth0,"thumbnailResizeId") : depth0),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":6,"column":41},"end":{"line":6,"column":87}}}))
    + "')\"\n        ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"thumbnailAlt") || (depth0 != null ? compilerNameLookup(depth0,"thumbnailAlt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailAlt","hash":{},"data":data,"loc":{"start":{"line":9,"column":37},"end":{"line":9,"column":55}}}) : helper)))
    + "\" aria-label=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"thumbnailAlt") || (depth0 != null ? compilerNameLookup(depth0,"thumbnailAlt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbnailAlt","hash":{},"data":data,"loc":{"start":{"line":9,"column":69},"end":{"line":9,"column":87}}}) : helper)))
    + "\"\n          ";
},"8":function(container,depth0,helpers,partials,data) {
    return " alt=\"Post Image\" aria-label=\"Post Image\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"sc-blog-post-card-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":40}}}) : helper)))
    + "\" data-post-url=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":1,"column":57},"end":{"line":1,"column":64}}}) : helper)))
    + "\">\n  <div class=\"sc-blog-post-card-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":2,"column":42}}}) : helper)))
    + "-wrapper\" data-action=\"navigate-to-blog\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showThumbnailContainer") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"sc-blog-post-card-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data,"loc":{"start":{"line":13,"column":34},"end":{"line":13,"column":44}}}) : helper)))
    + "-wrapper-content "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showThumbnail") : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":61},"end":{"line":13,"column":111}}})) != null ? stack1 : "")
    + "\"\n         aria-label=\"Post general information\" tabindex=\"0\">\n      <div class=\"sc-blog-post-card-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data,"loc":{"start":{"line":15,"column":36},"end":{"line":15,"column":46}}}) : helper)))
    + "-wrapper-content-category\">\n        <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"categoryURL") || (depth0 != null ? compilerNameLookup(depth0,"categoryURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryURL","hash":{},"data":data,"loc":{"start":{"line":16,"column":17},"end":{"line":16,"column":32}}}) : helper)))
    + "\" name=\"Post category\" tabindex=\"0\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"category") || (depth0 != null ? compilerNameLookup(depth0,"category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":16,"column":68},"end":{"line":16,"column":80}}}) : helper)))
    + "</a>\n      </div>\n      <div class=\"sc-blog-post-card-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data,"loc":{"start":{"line":18,"column":36},"end":{"line":18,"column":46}}}) : helper)))
    + "-wrapper-content-body\">\n        <div class=\"sc-blog-post-card-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data,"loc":{"start":{"line":19,"column":38},"end":{"line":19,"column":48}}}) : helper)))
    + "-wrapper-content-body-title\">\n          <h4>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":20,"column":14},"end":{"line":20,"column":26}}}) : helper))) != null ? stack1 : "")
    + "</h4>\n        </div>\n        <div class=\"sc-blog-post-card-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data,"loc":{"start":{"line":22,"column":38},"end":{"line":22,"column":48}}}) : helper)))
    + "-wrapper-content-body-excerpt\">\n          <p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"excerpt") || (depth0 != null ? compilerNameLookup(depth0,"excerpt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"excerpt","hash":{},"data":data,"loc":{"start":{"line":23,"column":13},"end":{"line":23,"column":26}}}) : helper))) != null ? stack1 : "")
    + "</p>\n        </div>\n      </div>\n      <div class=\"sc-blog-post-card-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"layout") || (depth0 != null ? compilerNameLookup(depth0,"layout") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"layout","hash":{},"data":data,"loc":{"start":{"line":26,"column":36},"end":{"line":26,"column":46}}}) : helper)))
    + "-wrapper-content-read-more-action\">\n        <a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":27,"column":17},"end":{"line":27,"column":24}}}) : helper)))
    + "\" aria-label=\"Read more about post\" tabindex=\"0\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"readMoreLabel") || (depth0 != null ? compilerNameLookup(depth0,"readMoreLabel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"readMoreLabel","hash":{},"data":data,"loc":{"start":{"line":27,"column":73},"end":{"line":27,"column":90}}}) : helper)))
    + "</a>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_post_card'; return template;});