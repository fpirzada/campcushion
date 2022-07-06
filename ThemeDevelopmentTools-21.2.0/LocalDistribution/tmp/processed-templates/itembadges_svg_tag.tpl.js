define('itembadges_svg_tag.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " transform=\"scale(-1, 1) translate(-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"svg") : depth0)) != null ? compilerNameLookup(stack1,"width") : stack1), depth0))
    + ",0)\" ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"itembadges-badge-container-individual itembadges-badge-container-individual-small\">\n  <svg class=\"itembadges-badge-svg-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"position") || (depth0 != null ? compilerNameLookup(depth0,"position") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data,"loc":{"start":{"line":2,"column":35},"end":{"line":2,"column":47}}}) : helper)))
    + "\" width=\""
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"svg") : depth0)) != null ? compilerNameLookup(stack1,"width") : stack1), depth0))
    + "px\" height=\""
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"svg") : depth0)) != null ? compilerNameLookup(stack1,"height") : stack1), depth0))
    + "px\" viewBox=\"0 0 "
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"svg") : depth0)) != null ? compilerNameLookup(stack1,"width") : stack1), depth0))
    + " "
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"svg") : depth0)) != null ? compilerNameLookup(stack1,"height") : stack1), depth0))
    + "\" role=\"img\" aria-label=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"alt") || (depth0 != null ? compilerNameLookup(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":2,"column":165},"end":{"line":2,"column":172}}}) : helper)))
    + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <title>"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"alt") || (depth0 != null ? compilerNameLookup(depth0,"alt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":3,"column":11},"end":{"line":3,"column":18}}}) : helper)))
    + "</title>\n    <g id=\"Badges\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n      <g id=\"Badges\">\n        <g id=\"Tag-top-left\">\n          <g id=\"Tag\">\n            <path d=\""
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"svg") : depth0)) != null ? compilerNameLookup(stack1,"shape") : stack1), depth0))
    + "\" id=\"Combined-Shape\" fill=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"textBgColor") || (depth0 != null ? compilerNameLookup(depth0,"textBgColor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textBgColor","hash":{},"data":data,"loc":{"start":{"line":8,"column":62},"end":{"line":8,"column":77}}}) : helper)))
    + "\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"flipVertical") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":79},"end":{"line":8,"column":160}}})) != null ? stack1 : "")
    + "></path>\n            <text id=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":9,"column":22},"end":{"line":9,"column":30}}}) : helper)))
    + "\" class=\"item-badges-svg-text\" font-weight=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"textWeight") || (depth0 != null ? compilerNameLookup(depth0,"textWeight") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textWeight","hash":{},"data":data,"loc":{"start":{"line":9,"column":74},"end":{"line":9,"column":88}}}) : helper)))
    + "\" line-spacing=\"1\" fill=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"textColor") || (depth0 != null ? compilerNameLookup(depth0,"textColor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textColor","hash":{},"data":data,"loc":{"start":{"line":9,"column":113},"end":{"line":9,"column":126}}}) : helper)))
    + "\">\n              <tspan text-anchor=\"middle\" x=\""
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"svg") : depth0)) != null ? compilerNameLookup(stack1,"textMiddle") : stack1), depth0))
    + "\" y=\""
    + alias4(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"svg") : depth0)) != null ? compilerNameLookup(stack1,"textHeight") : stack1), depth0))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"text") || (depth0 != null ? compilerNameLookup(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":10,"column":88},"end":{"line":10,"column":96}}}) : helper)))
    + "</tspan>\n            </text>\n          </g>\n        </g>\n      </g>\n    </g>\n  </svg>\n</div>";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ItemBadges/1.1.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'itembadges_svg_tag'; return template;});