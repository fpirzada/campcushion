define('product_list_new.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"product-list-new-modal-body\">\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Your list name <small class=\"product-list-new-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":22,"column":5},"end":{"line":22,"column":91}}}))
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Name your new list <small class=\"product-list-new-form-required\">*</small>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":5},"end":{"line":24,"column":95}}}))
    + "\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"List name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":153},"end":{"line":28,"column":178}}}));
},"9":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"New list name",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":28,"column":186},"end":{"line":28,"column":215}}}));
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":28,"column":245},"end":{"line":28,"column":253}}}) : helper)));
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"description") || (depth0 != null ? compilerNameLookup(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":38,"column":190},"end":{"line":38,"column":205}}}) : helper)));
},"15":function(container,depth0,helpers,partials,data) {
    return "	</div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "product-list-new-modal-footer";
},"19":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":17},"end":{"line":49,"column":37}}}));
},"21":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Create List",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":45},"end":{"line":49,"column":72}}}));
},"23":function(container,depth0,helpers,partials,data) {
    return "			<button class=\"product-list-new-form-cancel\" data-dismiss=\"modal\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Cancel",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":52,"column":69},"end":{"line":52,"column":91}}}))
    + "</button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<form action=\"#\" class=\"product-list-new\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inModal") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":11,"column":8}}})) != null ? stack1 : "")
    + "\r\n		<small class=\"product-list-new-required\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Required <span class=\"product-list-new-form-required\">*</span>",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":3},"end":{"line":14,"column":81}}}))
    + "\r\n		</small>\r\n\r\n		<div data-type=\"alert-placeholder\"></div>\r\n\r\n		<div data-validation=\"control-group\">\r\n			<label for=\"product-list-new-name\" class=\"product-list-new-form-label\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEdit") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":25,"column":11}}})) != null ? stack1 : "")
    + "			</label>\r\n			<div class=\"product-list-new-form-controls\"  data-validation=\"control\">\r\n				<input id=\"product-list-new-name\" type=\"text\" name=\"name\" data-action=\"prevent-enter\" class=\"product-list-new-form-input\" placeholder=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEdit") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":28,"column":139},"end":{"line":28,"column":222}}})) != null ? stack1 : "")
    + "\" value=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEdit") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":231},"end":{"line":28,"column":260}}})) != null ? stack1 : "")
    + "\">\r\n			</div>\r\n		</div>\r\n\r\n		<div class=\"product-list-new-form-controls-group\" data-validation=\"control-group\">\r\n			<label for=\"product-list-new-description\" class=\"product-list-new-form-label\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Notes for the list",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":4},"end":{"line":34,"column":38}}}))
    + "\r\n				<span class=\"product-list-new-form-label-optional\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"(optional)",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":55},"end":{"line":35,"column":81}}}))
    + "</span>\r\n			</label>\r\n			<div class=\"product-list-new-form-controls\"  data-validation=\"control\">\r\n				<textarea id=\"product-list-new-description\" class=\"product-list-new-form-textarea\" name=\"description\" placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Add a note or description for your list",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":38,"column":119},"end":{"line":38,"column":174}}}))
    + "\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEdit") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":176},"end":{"line":38,"column":212}}})) != null ? stack1 : "")
    + "</textarea>\r\n			</div>\r\n		</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inModal") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":1},"end":{"line":44,"column":8}}})) != null ? stack1 : "")
    + "\r\n	<div class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inModal") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":13},"end":{"line":46,"column":64}}})) != null ? stack1 : "")
    + " product-list-new-form-controls-group\">\r\n\r\n		<button type=\"submit\" class=\"product-list-new-form-submit\">\r\n			"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isEdit") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":49,"column":3},"end":{"line":49,"column":79}}})) != null ? stack1 : "")
    + "\r\n		</button>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"inModal") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":2},"end":{"line":53,"column":9}}})) != null ? stack1 : "")
    + "	</div>\r\n</form>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_list_new'; return template;});