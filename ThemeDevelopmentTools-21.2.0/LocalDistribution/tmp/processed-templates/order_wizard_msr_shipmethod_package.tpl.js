define('order_wizard_msr_shipmethod_package.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing;

  return "				<a data-action=\"edit-module\" href=\""
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"editUrl") || (depth0 != null ? compilerNameLookup(depth0,"editUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"editUrl","hash":{},"data":data,"loc":{"start":{"line":16,"column":39},"end":{"line":16,"column":52}}}) : helper))) != null ? stack1 : "")
    + "?force=true\" class=\"order-wizard-msr-shipmethod-package-address-link\">\r\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back to edit shipping information",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":5},"end":{"line":17,"column":54}}}))
    + "\r\n				</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showActions") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":52,"column":11}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "					<select data-address-id=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"addressId","hash":{},"data":data,"loc":{"start":{"line":30,"column":30},"end":{"line":30,"column":43}}}) : helper)))
    + "\" data-type=\"address-selector\" data-action=\"edit-module\" class=\"order-wizard-msr-shipmethod-package-option-select\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSelectedShipmethod") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":33,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"shippingMethods") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":38,"column":15}}})) != null ? stack1 : "")
    + "					</select>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "							<option>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Please select a delivery method",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":32,"column":15},"end":{"line":32,"column":62}}}))
    + "</option>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "							<option value=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":36}}}) : helper)))
    + "\" data-type=\"delivery-method-option\" "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":73},"end":{"line":35,"column":104}}})) != null ? stack1 : "")
    + " >\r\n								"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"rate_formatted") || (depth0 != null ? compilerNameLookup(depth0,"rate_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rate_formatted","hash":{},"data":data,"loc":{"start":{"line":36,"column":8},"end":{"line":36,"column":26}}}) : helper)))
    + " - "
    + alias4(((helper = (helper = compilerNameLookup(helpers,"name") || (depth0 != null ? compilerNameLookup(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":36,"column":29},"end":{"line":36,"column":37}}}) : helper)))
    + "\r\n							</option>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "selected";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showSelectedShipmethod") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":5},"end":{"line":51,"column":12}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "						<div class=\"order-wizard-msr-shipmethod-package-delivery-option\">\r\n							<p class=\"order-wizard-msr-shipmethod-package-shipmethod-name\">\r\n								"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedShipmethod") : depth0)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "\r\n\r\n								<span class=\"order-wizard-msr-shipmethod-package-shipmethod-rate\">\r\n									"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"selectedShipmethod") : depth0)) != null ? compilerNameLookup(stack1,"rate_formatted") : stack1), depth0))
    + "\r\n								</span>\r\n							</p>\r\n						</div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"order-wizard-msr-shipmethod-package-message\">\r\n					<i class=\"order-wizard-msr-shipmethod-package-message-icon\"></i>\r\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Warning: No Delivery Methods are available for this address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":56,"column":5},"end":{"line":56,"column":80}}}))
    + "\r\n				</div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showItems") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":66,"column":3},"end":{"line":111,"column":10}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<div class=\"order-wizard-msr-shipmethod-package-item-accordion\">\r\n					<div class=\"order-wizard-msr-shipmethod-package-accordion-head\">\r\n						<a class=\"order-wizard-msr-shipmethod-package-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#order-wizard-msr-shipmethod-package-accordion-body-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressId","hash":{},"data":data,"loc":{"start":{"line":69,"column":173},"end":{"line":69,"column":186}}}) : helper)))
    + "\" aria-controls=\"order-wizard-msr-shipmethod-package-accordion-body-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressId","hash":{},"data":data,"loc":{"start":{"line":69,"column":254},"end":{"line":69,"column":267}}}) : helper)))
    + "\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"totalItemsGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":71,"column":7},"end":{"line":75,"column":14}}})) != null ? stack1 : "")
    + "							<i class=\"order-wizard-msr-shipmethod-package-accordion-header-icon\"></i>\r\n						</a>\r\n					</div>\r\n\r\n					<div class=\"order-wizard-msr-shipmethod-package-accordion-body collapse\" id=\"order-wizard-msr-shipmethod-package-accordion-body-"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressId","hash":{},"data":data,"loc":{"start":{"line":80,"column":133},"end":{"line":80,"column":146}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showEditShipmentButton") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":6},"end":{"line":85,"column":13}}})) != null ? stack1 : "")
    + "						<div class=\"order-wizard-msr-shipmethod-package-accordion-body-wrapper\">\r\n							<table class=\"order-wizard-msr-shipmethod-package-accordion-container-table\">\r\n								<thead class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header\" item-id=\"\" data-id=\"\">\r\n									<tr>\r\n										<th class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header-image\" name=\"item-image\"></th>\r\n										<th class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header-details\" name=\"item-details\"></th>\r\n										<th class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header-totalprice\" name=\"item-totalprice\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Unit Price",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":92,"column":125},"end":{"line":92,"column":151}}}))
    + "</th>\r\n										<th class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header-quantity\" name=\"item-quantity\"> "
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Qty",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":93,"column":122},"end":{"line":93,"column":141}}}))
    + " </th>\r\n										<th class=\"order-wizard-msr-shipmethod-package-accordion-container-table-header-amount\" name=\"item-amount\">"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":94,"column":117},"end":{"line":94,"column":139}}}))
    + "</th>\r\n										</tr>\r\n									</thead>\r\n								<tbody data-view=\"Items.Collection\"></tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"<span class=\"order-wizard-msr-shipmethod-package-items-count\">$(0)</span> Items",(depth0 != null ? compilerNameLookup(depth0,"totalItems") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":72,"column":8},"end":{"line":72,"column":114}}}))
    + "\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1 Item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":74,"column":8},"end":{"line":74,"column":30}}}))
    + "\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "							<a class=\"order-wizard-msr-shipmethod-package-edit-shipment\" data-type=\"edit-shipment-link\" href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"editShipmentUrl") || (depth0 != null ? compilerNameLookup(depth0,"editShipmentUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"editShipmentUrl","hash":{},"data":data,"loc":{"start":{"line":82,"column":105},"end":{"line":82,"column":124}}}) : helper)))
    + "?force=true\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Edit Shipment",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":83,"column":8},"end":{"line":83,"column":37}}}))
    + "\r\n							</a>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<p class=\"order-wizard-msr-shipmethod-package-item-count-label\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"totalItemsGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data,"loc":{"start":{"line":105,"column":5},"end":{"line":109,"column":12}}})) != null ? stack1 : "")
    + "				</p>\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<span class=\"order-wizard-msr-shipmethod-package-item-count\">$(0)</span> Items",(depth0 != null ? compilerNameLookup(depth0,"totalItems") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":106,"column":6},"end":{"line":106,"column":111}}}))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"in this shippment",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":106,"column":112},"end":{"line":106,"column":145}}}))
    + "\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"<span class=\"order-wizard-msr-shipmethod-package-item-count\">1</span> Item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":108,"column":6},"end":{"line":108,"column":96}}}))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"in this shippment",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":108,"column":97},"end":{"line":108,"column":130}}}))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<div class=\"order-wizard-msr-shipmethod-package\" data-type=\"package\" data-address-id=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"addressId") || (depth0 != null ? compilerNameLookup(depth0,"addressId") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"addressId","hash":{},"data":data,"loc":{"start":{"line":8,"column":86},"end":{"line":8,"column":99}}}) : helper)))
    + "\">\r\n	<div class=\"order-wizard-msr-shipmethod-package-row\">\r\n		<div class=\"order-wizard-msr-shipmethod-package-address\">\r\n			<h3 class=\"order-wizard-msr-shipmethod-package-title\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Shipping Address",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":36}}}))
    + "\r\n			</h3>\r\n			<div data-view=\"Shipping.Address\"></div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showEditAddressButton") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":19,"column":10}}})) != null ? stack1 : "")
    + "\r\n		</div>\r\n\r\n		<div class=\"order-wizard-msr-shipmethod-package-delivery-method\">\r\n			<h3 class=\"order-wizard-msr-shipmethod-package-title\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Delivery Method",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":25,"column":35}}}))
    + "\r\n			</h3>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDeliveryMethods") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":28,"column":3},"end":{"line":58,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n\r\n	<div class=\"order-wizard-msr-shipmethod-package-items\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":2},"end":{"line":112,"column":9}}})) != null ? stack1 : "")
    + "	</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'order_wizard_msr_shipmethod_package'; return template;});