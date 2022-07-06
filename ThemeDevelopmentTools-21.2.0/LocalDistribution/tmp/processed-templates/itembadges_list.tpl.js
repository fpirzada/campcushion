define('itembadges_list.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "itembadges-show";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            background:"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"textBgColor") || (depth0 != null ? compilerNameLookup(depth0,"textBgColor") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textBgColor","hash":{},"data":data,"loc":{"start":{"line":4,"column":23},"end":{"line":4,"column":38}}}) : helper)))
    + ";\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            position: absolute;\n        ";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                color:"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"textColor") || (depth0 != null ? compilerNameLookup(depth0,"textColor") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textColor","hash":{},"data":data,"loc":{"start":{"line":11,"column":22},"end":{"line":11,"column":35}}}) : helper)))
    + ";\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                font-weight:"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"textWeight") || (depth0 != null ? compilerNameLookup(depth0,"textWeight") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textWeight","hash":{},"data":data,"loc":{"start":{"line":14,"column":28},"end":{"line":14,"column":42}}}) : helper)))
    + ";\n            ";
},"11":function(container,depth0,helpers,partials,data) {
    return "                src=\""
    + container.escapeExpression((compilerNameLookup(helpers,"resizeImage")||(depth0 && compilerNameLookup(depth0,"resizeImage"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"shapeImage") : depth0),{"name":"resizeImage","hash":{},"data":data,"loc":{"start":{"line":22,"column":21},"end":{"line":22,"column":47}}}))
    + "\"\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "​\n                alt=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"alt") || (depth0 != null ? compilerNameLookup(depth0,"alt") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":27,"column":21},"end":{"line":27,"column":28}}}) : helper)))
    + "\"\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                alt=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"shapeName") || (depth0 != null ? compilerNameLookup(depth0,"shapeName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"shapeName","hash":{},"data":data,"loc":{"start":{"line":29,"column":21},"end":{"line":29,"column":34}}}) : helper)))
    + "\"\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"itembadges-wrapper\">\n    <div class=\"itembadges-badge-row "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showText") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":37},"end":{"line":2,"column":75}}})) != null ? stack1 : "")
    + "\" style=\"\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"textBgColor") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":5,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"areBothElementsVisibile") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":8,"column":15}}})) != null ? stack1 : "")
    + "\">\n        <div class=\"itembadges-badge\" style=\"\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"textColor") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":12,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"textWeight") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":15,"column":19}}})) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n    <div class=\"itembadges-image-row "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showImage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":37},"end":{"line":19,"column":76}}})) != null ? stack1 : "")
    + "\">\n        <img class=\"itembadges-cell-image\"\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shapeImage") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":23,"column":19}}})) != null ? stack1 : "")
    + "            data-id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"shapeId") || (depth0 != null ? compilerNameLookup(depth0,"shapeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shapeId","hash":{},"data":data,"loc":{"start":{"line":24,"column":21},"end":{"line":24,"column":32}}}) : helper)))
    + "\"\n            data-name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"shapeName") || (depth0 != null ? compilerNameLookup(depth0,"shapeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shapeName","hash":{},"data":data,"loc":{"start":{"line":25,"column":23},"end":{"line":25,"column":36}}}) : helper)))
    + "\"\n            "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"alt") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":30,"column":19}}})) != null ? stack1 : "")
    + "            itemprop=\"image\">\n    </div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ItemBadges/1.1.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'itembadges_list'; return template;});