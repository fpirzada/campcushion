define('suitecommerce_customfields_checkout_field.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <h3 class=\"custom-fields-checkout-field-heading\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"label","hash":{},"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":62}}}) : helper)))
    + "</h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isCheckbox") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":25,"column":11}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(compilerNameLookup(partials,"checkboxField"),depth0,{"name":"checkboxField","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(compilerNameLookup(partials,"inputFieldLabel"),depth0,{"name":"inputFieldLabel","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      <div class=\"custom-fields-checkout-field-control\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isTextArea") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(compilerNameLookup(partials,"inputTextAreaField"),depth0,{"name":"inputTextAreaField","data":data,"indent":"          ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isDate") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":22,"column":17}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(compilerNameLookup(partials,"inputDateField"),depth0,{"name":"inputDateField","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(compilerNameLookup(partials,"inputTextField"),depth0,{"name":"inputTextField","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"custom-fields-checkout-field-checkbox\">\n    <input\n      id=\"custom_field_"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":34,"column":23},"end":{"line":34,"column":34}}}) : helper)))
    + "\"\n      class=\"custom-fields-checkout-field-input-checkbox\"\n      type=\"checkbox\"\n      name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":37,"column":23}}}) : helper)))
    + "\"\n      data-validation=\"control\">\n    <label class=\"custom-fields-checkout-field-label-checkbox\" for=\"custom_field_"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":39,"column":81},"end":{"line":39,"column":92}}}) : helper)))
    + "\">\n      "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":40,"column":6},"end":{"line":40,"column":15}}}) : helper)))
    + "\n    </label>\n  </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <label for=\"custom_field_"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":46,"column":27},"end":{"line":46,"column":38}}}) : helper)))
    + "\" class=\"custom-fields-checkout-field-label\">\n    "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"label") || (depth0 != null ? compilerNameLookup(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":47,"column":4},"end":{"line":47,"column":13}}}) : helper)))
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":4},"end":{"line":50,"column":11}}})) != null ? stack1 : "")
    + "  </label>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "      <span class=\"custom-fields-checkout-field-label-required\">*</span>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <textarea\n    id=\"custom_field_"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":56,"column":21},"end":{"line":56,"column":32}}}) : helper)))
    + "\"\n    class=\"custom-fields-checkout-field-input-textarea\"\n    name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":58,"column":10},"end":{"line":58,"column":21}}}) : helper)))
    + "\"\n    placeholder=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"placeholder") || (depth0 != null ? compilerNameLookup(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":59,"column":17},"end":{"line":59,"column":32}}}) : helper)))
    + "\"\n    "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":4},"end":{"line":60,"column":38}}})) != null ? stack1 : "")
    + "\n    data-validation=\"control\"\n    maxlength=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maxLength") || (depth0 != null ? compilerNameLookup(depth0,"maxLength") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxLength","hash":{},"data":data,"loc":{"start":{"line":62,"column":15},"end":{"line":62,"column":28}}}) : helper)))
    + "\">\n  </textarea>\n";
},"20":function(container,depth0,helpers,partials,data) {
    return "required";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <input\n    id=\"custom_field_"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":68,"column":21},"end":{"line":68,"column":32}}}) : helper)))
    + "\"\n    class=\"custom-fields-checkout-field-input-date\"\n    type=\"date\"\n    name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":71,"column":10},"end":{"line":71,"column":21}}}) : helper)))
    + "\"\n    placeholder=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"placeholder") || (depth0 != null ? compilerNameLookup(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":72,"column":17},"end":{"line":72,"column":32}}}) : helper)))
    + "\"\n    "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":4},"end":{"line":73,"column":38}}})) != null ? stack1 : "")
    + "\n    data-validation=\"control\"\n    data-field-type=\"date\"\n    data-format=\"yyyy-mm-dd\">\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <input\n    id=\"custom_field_"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":81,"column":21},"end":{"line":81,"column":32}}}) : helper)))
    + "\"\n    class=\"custom-fields-checkout-field-input-text\"\n    type=\"text\"\n    name=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":84,"column":10},"end":{"line":84,"column":21}}}) : helper)))
    + "\"\n    placeholder=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"placeholder") || (depth0 != null ? compilerNameLookup(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":85,"column":17},"end":{"line":85,"column":32}}}) : helper)))
    + "\"\n    "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isMandatory") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":86,"column":4},"end":{"line":86,"column":38}}})) != null ? stack1 : "")
    + "\n    data-validation=\"control\"\n    maxlength=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"maxLength") || (depth0 != null ? compilerNameLookup(depth0,"maxLength") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maxLength","hash":{},"data":data,"loc":{"start":{"line":88,"column":15},"end":{"line":88,"column":28}}}) : helper)))
    + "\">\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- htmllint spec-char-escape=\"false\" -->\n<div\n  id=\"custom-fields-checkout-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"fieldId") || (depth0 != null ? compilerNameLookup(depth0,"fieldId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fieldId","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":40}}}) : helper)))
    + "\"\n  class=\"custom-fields-checkout-field\"\n  data-type=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"type") || (depth0 != null ? compilerNameLookup(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":21}}}) : helper)))
    + "\"\n  data-validation=\"control-group\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isHeading") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":26,"column":9}}})) != null ? stack1 : "")
    + "</div>\n<!-- htmllint spec-char-escape=\"true\" -->\n\n<!-- htmllint id-no-dup=\"false\" -->\n\n\n\n\n<!-- htmllint id-no-dup=\"true\" -->\n";
},"main_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = compilerNameLookup(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"args":["checkboxField"],"data":data,"loc":{"start":{"line":31,"column":0},"end":{"line":43,"column":11}}}) || fn;
  fn = compilerNameLookup(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"args":["inputFieldLabel"],"data":data,"loc":{"start":{"line":45,"column":0},"end":{"line":52,"column":11}}}) || fn;
  fn = compilerNameLookup(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"args":["inputTextAreaField"],"data":data,"loc":{"start":{"line":54,"column":0},"end":{"line":64,"column":11}}}) || fn;
  fn = compilerNameLookup(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"args":["inputDateField"],"data":data,"loc":{"start":{"line":66,"column":0},"end":{"line":77,"column":11}}}) || fn;
  fn = compilerNameLookup(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"args":["inputTextField"],"data":data,"loc":{"start":{"line":79,"column":0},"end":{"line":89,"column":11}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/CustomFields/1.1.4/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'suitecommerce_customfields_checkout_field'; return template;});