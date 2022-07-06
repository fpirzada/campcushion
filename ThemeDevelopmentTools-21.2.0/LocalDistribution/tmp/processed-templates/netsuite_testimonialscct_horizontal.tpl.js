define('netsuite_testimonialscct_horizontal.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isEntireArea") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":112}}})) != null ? stack1 : "")
    + "\n      <div class=\"testimonial-slide\">\n        <div class=\"testimonial-link-area-"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":48}}}) : helper)))
    + " testimonial-content\">\n          <div class=\"row\">\n            <div class=\"testimonial-flex\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasImageURL") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":14},"end":{"line":20,"column":21}}})) != null ? stack1 : "")
    + "              <div class=\"col-xs-12 col-md-9 col-lg-9\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasTextBody") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":24,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasTitle") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":29,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSubTitle") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":34,"column":23}}})) != null ? stack1 : "")
    + "              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isEntireArea") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":6},"end":{"line":40,"column":74}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasLink") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":40},"end":{"line":6,"column":104}}})) != null ? stack1 : "")
    + " ";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression;

  return "<a href=\""
    + alias1(((helper = (helper = compilerNameLookup(helpers,"link") || (depth0 != null ? compilerNameLookup(depth0,"link") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"link","hash":{},"data":data,"loc":{"start":{"line":6,"column":64},"end":{"line":6,"column":72}}}) : helper)))
    + "\" target=\""
    + alias1(container.lambda((depths[1] != null ? compilerNameLookup(depths[1],"target") : depths[1]), depth0))
    + "\">";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                  <div class=\"col-xs-12 col-md-3 col-lg-3\">\n                    <div class=\"text-center\">\n                      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isImage") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":22},"end":{"line":14,"column":123}}})) != null ? stack1 : "")
    + "\n                      <img class=\"testimonial-link-image-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":15,"column":57},"end":{"line":15,"column":63}}}) : helper)))
    + " testimonial-image "
    + alias4(container.lambda((depths[1] != null ? compilerNameLookup(depths[1],"imageStyle") : depths[1]), depth0))
    + "\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageURL") || (depth0 != null ? compilerNameLookup(depth0,"imageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":15,"column":106},"end":{"line":15,"column":118}}}) : helper)))
    + "\"\n                           alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"altText") || (depth0 != null ? compilerNameLookup(depth0,"altText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altText","hash":{},"data":data,"loc":{"start":{"line":16,"column":32},"end":{"line":16,"column":43}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"altText") || (depth0 != null ? compilerNameLookup(depth0,"altText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altText","hash":{},"data":data,"loc":{"start":{"line":16,"column":52},"end":{"line":16,"column":63}}}) : helper)))
    + "\"/>\n                      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isImage") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":22},"end":{"line":17,"column":85}}})) != null ? stack1 : "")
    + "\n                    </div>\n                  </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasLink") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":51},"end":{"line":17,"column":77}}})) != null ? stack1 : "")
    + " ";
},"7":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                  <div class=\"testimonial-content-paragraph\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"textBody") || (depth0 != null ? compilerNameLookup(depth0,"textBody") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textBody","hash":{},"data":data,"loc":{"start":{"line":23,"column":61},"end":{"line":23,"column":73}}}) : helper)))
    + "</div>\n";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isTitle") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":18},"end":{"line":26,"column":119}}})) != null ? stack1 : "")
    + "\n                    <div class=\"testimonial-link-title-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":27,"column":55},"end":{"line":27,"column":61}}}) : helper)))
    + " testimonial-content-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":27,"column":89},"end":{"line":27,"column":98}}}) : helper)))
    + "</div>\n                  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isTitle") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":18},"end":{"line":28,"column":81}}})) != null ? stack1 : "")
    + "\n";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isSubtitle") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":18},"end":{"line":31,"column":122}}})) != null ? stack1 : "")
    + "\n                    <div class=\"testimonial-link-subtitle-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":32,"column":58},"end":{"line":32,"column":64}}}) : helper)))
    + " testimonial-content-subtitle\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"subTitle") || (depth0 != null ? compilerNameLookup(depth0,"subTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subTitle","hash":{},"data":data,"loc":{"start":{"line":32,"column":95},"end":{"line":32,"column":107}}}) : helper)))
    + "</div>\n                  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isSubtitle") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":18},"end":{"line":33,"column":84}}})) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"testimonial center "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"textColor") || (depth0 != null ? compilerNameLookup(depth0,"textColor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textColor","hash":{},"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":48}}}) : helper)))
    + "\">\n  <h3 class=\"text-center testimonial-header\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerName") || (depth0 != null ? compilerNameLookup(depth0,"headerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerName","hash":{},"data":data,"loc":{"start":{"line":2,"column":45},"end":{"line":2,"column":59}}}) : helper)))
    + "</h3>\n\n  <div class=\"testimonial-slider\" id=\"testimonial-slider-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"cctInstanceId") || (depth0 != null ? compilerNameLookup(depth0,"cctInstanceId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cctInstanceId","hash":{},"data":data,"loc":{"start":{"line":4,"column":57},"end":{"line":4,"column":74}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"testimonials") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":41,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n\n</section>\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetSuite/Testimonials/1.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netsuite_testimonialscct_horizontal'; return template;});