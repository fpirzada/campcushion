define('creditcard_edit_form_securitycode.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div class=\"creditcard-edit-form-securitycode\">\r\n	<div class=\"creditcard-edit-form-securitycode-group\" data-input=\"ccsecuritycode\" data-validation=\"control-group\">\r\n		<label class=\"creditcard-edit-form-securitycode-group-label\" for=\"ccsecuritycode\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Security Number",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":3},"end":{"line":10,"column":34}}}))
    + " <span class=\"creditcard-edit-form-securitycode-group-label-required\">*</span>\r\n		</label>\r\n\r\n		<div class=\"creditcard-edit-form-securitycode-controls\" data-validation=\"control\">\r\n			<input type=\"text\" class=\"creditcard-edit-form-securitycode-group-input\" id=\"ccsecuritycode\" name=\"ccsecuritycode\" value=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"value") || (depth0 != null ? compilerNameLookup(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":14,"column":125},"end":{"line":14,"column":134}}}) : helper)))
    + "\" maxlength=\"4\">\r\n\r\n			<a href=\"#\" class=\"creditcard-edit-form-securitycode-link\">\r\n				<span class=\"creditcard-edit-form-securitycode-icon-container\">\r\n					<i class=\"creditcard-edit-form-securitycode-icon\"  data-toggle=\"popover\" data-placement=\"bottom\" data-title=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"creditCardHelpTitle") || (depth0 != null ? compilerNameLookup(depth0,"creditCardHelpTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"creditCardHelpTitle","hash":{},"data":data,"loc":{"start":{"line":18,"column":114},"end":{"line":18,"column":137}}}) : helper)))
    + "\"/>\r\n				</span>\r\n			</a>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'creditcard_edit_form_securitycode'; return template;});