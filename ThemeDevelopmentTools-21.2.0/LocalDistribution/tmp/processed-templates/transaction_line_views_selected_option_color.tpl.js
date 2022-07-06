define('transaction_line_views_selected_option_color.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "					<img\r\n						src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"image") : stack1)) != null ? compilerNameLookup(stack1,"src") : stack1), depth0))
    + "\"\r\n						alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "\"\r\n						width=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"image") : stack1)) != null ? compilerNameLookup(stack1,"width") : stack1), depth0))
    + "\"\r\n						height=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"image") : stack1)) != null ? compilerNameLookup(stack1,"height") : stack1), depth0))
    + "\">\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "					<span class=\"transaction-line-views-selected-option-color-tile-color "
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"isLightColor") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":74},"end":{"line":22,"column":127}}})) != null ? stack1 : "")
    + "\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "\" style=\"background: "
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"color") : stack1), depth0))
    + "\"></span>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "white-border";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<div class=\"transaction-line-views-selected-option-color\" name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":8,"column":64},"end":{"line":8,"column":73}}}) : helper)))
    + "\">\r\n	<ul class=\"transaction-line-views-selected-option-color-tiles-container\">\r\n		<li class=\"transaction-line-views-selected-option-color-label\">\r\n			<label class=\"transaction-line-views-selected-option-color-label-text\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":11,"column":74},"end":{"line":11,"column":83}}}) : helper)))
    + ":</label>\r\n		</li>\r\n		<li>\r\n			<span class=\"transaction-line-views-selected-option-color-tile\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"isImageTile") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":23,"column":11}}})) != null ? stack1 : "")
    + "			</span>\r\n		</li>\r\n		<li class=\"transaction-line-views-selected-option-color-text\">\r\n			"
    + alias4(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedValue") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "\r\n		</li>\r\n	</ul>\r\n</div>\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'transaction_line_views_selected_option_color'; return template;});