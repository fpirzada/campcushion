define('contact_us_form.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " contact-us-form-background\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <small class=\"contact-us-form-required-field-reference\">\n      "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"mandatoryFieldReference") || (depth0 != null ? compilerNameLookup(depth0,"mandatoryFieldReference") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"mandatoryFieldReference","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":35}}}) : helper)))
    + " <span class=\"contact-us-form-required-field-reference-symbol\">*</span>\n    </small>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"contact-us-form "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hideFormBackgroundColor") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":28},"end":{"line":2,"column":11}}})) != null ? stack1 : "")
    + "\">\n  <div class=\"contact-us-form-general-information\">\n    "
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"formInformation") || (depth0 != null ? compilerNameLookup(depth0,"formInformation") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"formInformation","hash":{},"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasMandatoryFields") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "\n  <form novalidate>\n    <div data-view=\"InputFields.Collection\"></div>\n    <div>\n      <button\n              type=\"submit\"\n              class=\"contact-us-form-"
    + alias3(alias2(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"submitButtonStyling") : depth0)) != null ? compilerNameLookup(stack1,"style") : stack1), depth0))
    + "-submit-button\"\n              title=\""
    + alias3(alias2(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"submitButtonStyling") : depth0)) != null ? compilerNameLookup(stack1,"helpText") : stack1), depth0))
    + "\">\n        "
    + alias3(alias2(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"submitButtonStyling") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "\n      </button>\n    </div>\n  </form>\n\n  <div class=\"contact-us-form-feedback-message\" data-view=\"Feedback.Messages\"></div>\n</div>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/MapContactInfo/1.1.5/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'contact_us_form'; return template;});