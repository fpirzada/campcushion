define('netsuite_testimonialscct_vertical.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isEntireArea") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":112}}})) != null ? stack1 : "")
    + "\n      <div class=\"testimonial-link-area-"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":40},"end":{"line":7,"column":46}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"singlePadding")||(depth0 && compilerNameLookup(depth0,"singlePadding"))||alias2).call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"testimonials") : depths[1]),{"name":"singlePadding","hash":{},"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":80}}}))
    + " text-center col-md-"
    + alias3((compilerNameLookup(helpers,"columnSize")||(depth0 && compilerNameLookup(depth0,"columnSize"))||alias2).call(alias1,(depths[1] != null ? compilerNameLookup(depths[1],"testimonials") : depths[1]),{"name":"columnSize","hash":{},"data":data,"loc":{"start":{"line":7,"column":100},"end":{"line":7,"column":129}}}))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasImageURL") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":13,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasTextBody") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":16,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasTitle") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":21,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSubTitle") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":26,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n      "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isEntireArea") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":28,"column":74}}})) != null ? stack1 : "")
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

  return "          "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isImage") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":10},"end":{"line":9,"column":111}}})) != null ? stack1 : "")
    + "\n          <img class=\"testimonial-link-image-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":45},"end":{"line":10,"column":51}}}) : helper)))
    + " testimonial-image "
    + alias4(container.lambda((depths[1] != null ? compilerNameLookup(depths[1],"imageStyle") : depths[1]), depth0))
    + "\" src=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"imageURL") || (depth0 != null ? compilerNameLookup(depth0,"imageURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":10,"column":94},"end":{"line":10,"column":106}}}) : helper)))
    + "\"\n               alt=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"altText") || (depth0 != null ? compilerNameLookup(depth0,"altText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altText","hash":{},"data":data,"loc":{"start":{"line":11,"column":20},"end":{"line":11,"column":31}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"altText") || (depth0 != null ? compilerNameLookup(depth0,"altText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"altText","hash":{},"data":data,"loc":{"start":{"line":11,"column":40},"end":{"line":11,"column":51}}}) : helper)))
    + "\">\n          "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isImage") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":12,"column":73}}})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"hasLink") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":39},"end":{"line":12,"column":65}}})) != null ? stack1 : "")
    + " ";
},"7":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <div class=\"testimonial-content-paragraph center-text\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"textBody") || (depth0 != null ? compilerNameLookup(depth0,"textBody") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textBody","hash":{},"data":data,"loc":{"start":{"line":15,"column":65},"end":{"line":15,"column":77}}}) : helper)))
    + "</div>\n";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isTitle") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":111}}})) != null ? stack1 : "")
    + "\n          <div class=\"testimonial-link-title-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":19,"column":45},"end":{"line":19,"column":51}}}) : helper)))
    + " testimonial-content-title\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"title") || (depth0 != null ? compilerNameLookup(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":19,"column":79},"end":{"line":19,"column":88}}}) : helper)))
    + "</div>\n          "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isTitle") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":10},"end":{"line":20,"column":73}}})) != null ? stack1 : "")
    + "\n";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isSubtitle") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":10},"end":{"line":23,"column":114}}})) != null ? stack1 : "")
    + "\n          <div class=\"testimonial-link-subtitle-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"id") || (depth0 != null ? compilerNameLookup(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":24,"column":48},"end":{"line":24,"column":54}}}) : helper)))
    + " testimonial-content-subtitle\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"subTitle") || (depth0 != null ? compilerNameLookup(depth0,"subTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subTitle","hash":{},"data":data,"loc":{"start":{"line":24,"column":85},"end":{"line":24,"column":97}}}) : helper)))
    + "</div>\n          "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? compilerNameLookup(depths[1],"linkArea") : depths[1])) != null ? compilerNameLookup(stack1,"isSubtitle") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":10},"end":{"line":25,"column":76}}})) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"testimonial center "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"textColor") || (depth0 != null ? compilerNameLookup(depth0,"textColor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textColor","hash":{},"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":48}}}) : helper)))
    + "\">\n  <h3 class=\"text-center testimonial-header\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerName") || (depth0 != null ? compilerNameLookup(depth0,"headerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerName","hash":{},"data":data,"loc":{"start":{"line":2,"column":45},"end":{"line":2,"column":59}}}) : helper)))
    + "</h3>\n\n  <div class=\"row hidden-xs testimonial-content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"testimonials") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n\n</section>\n";
},"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/NetSuite/Testimonials/1.0.2/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'netsuite_testimonialscct_vertical'; return template;});