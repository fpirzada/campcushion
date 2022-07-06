define('sc_ext_carousel.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"sc-ext-carousel-indicators\" data-view=\"Indicators.View\">\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section aria-labelledby=\"carousel-title\">\n<div class=\"sc-ext-carousel\" data-carousel-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"carouselId") || (depth0 != null ? compilerNameLookup(depth0,"carouselId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"carouselId","hash":{},"data":data,"loc":{"start":{"line":2,"column":47},"end":{"line":2,"column":61}}}) : helper)))
    + "\">\n  <h5 class=\"sc-ext-carousel-title\" id=\"carousel-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"carouselTitle") || (depth0 != null ? compilerNameLookup(depth0,"carouselTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"carouselTitle","hash":{},"data":data,"loc":{"start":{"line":3,"column":56},"end":{"line":3,"column":73}}}) : helper)))
    + "</h5>\n  <ul class=\"sc-ext-carousel-slides transition-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"transition") || (depth0 != null ? compilerNameLookup(depth0,"transition") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"transition","hash":{},"data":data,"loc":{"start":{"line":4,"column":47},"end":{"line":4,"column":61}}}) : helper)))
    + "\" data-view=\"Slides.View\" aria-labelledby=\"carousel-title\"></ul>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showIndicators") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":8,"column":9}}})) != null ? stack1 : "")
    + "</div>\n</section>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_ext_carousel'; return template;});