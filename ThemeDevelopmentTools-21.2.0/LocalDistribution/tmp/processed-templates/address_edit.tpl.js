define('address_edit.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<h2>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressNew") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":15,"column":9}}})) != null ? stack1 : "")
    + "	</h2>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isCollectionEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":1},"end":{"line":20,"column":8}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Add a new Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":12,"column":35}}}))
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Update Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":14,"column":32}}}))
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "	<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"For faster checkouts, please enter an address below.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":19,"column":72}}}))
    + "</p>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"address-edit-body\">\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "		</div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInModal") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":35,"column":14},"end":{"line":35,"column":77}}})) != null ? stack1 : "")
    + "\">\r\n			<button type=\"submit\" class=\"address-edit-form-button-submit\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isAddressNew") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":37,"column":4},"end":{"line":41,"column":11}}})) != null ? stack1 : "")
    + "			</button>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInModalOrCollectionNotEmpty") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":3},"end":{"line":48,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "address-edit-footer";
},"15":function(container,depth0,helpers,partials,data) {
    return "form-actions";
},"17":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Save Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":38,"column":4},"end":{"line":38,"column":32}}}))
    + "\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Update Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":40,"column":4},"end":{"line":40,"column":34}}}))
    + "\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "			<button class=\"address-edit-form-button-cancel\" data-dismiss=\"modal\" data-action=\"reset\">\r\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Cancel",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":4},"end":{"line":46,"column":26}}}))
    + "\r\n			</button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n<section class=\"address-edit\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInModalOrHideHeader") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":21,"column":12}}})) != null ? stack1 : "")
    + "\r\n	<form class=\"address-edit-form\" action=\"addressbook.ss\" method=\"POST\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInModal") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":2},"end":{"line":26,"column":10}}})) != null ? stack1 : "")
    + "\r\n			<fieldset data-view=\"Address.Edit.Fields\"></fieldset>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInModal") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":3},"end":{"line":32,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showFooter") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":2},"end":{"line":50,"column":9}}})) != null ? stack1 : "")
    + "	</form>\r\n</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'address_edit'; return template;});