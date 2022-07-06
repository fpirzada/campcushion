define('invoice_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "			<header>\r\n				<h2 class=\"invoice-details-invoice-title\">\r\n					"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Invoice <span class=\"invoice-details-invoice-number\">#$(0)</span>",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":7,"column":99}}}))
    + "\r\n					<span class=\"invoice-details-invoice-amount\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":9,"column":7},"end":{"line":13,"column":14}}})) != null ? stack1 : "")
    + "						</span>\r\n				</h2>\r\n			</header>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "								<span class=\"invoice-details-amount\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + "</span>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "								<span class=\"invoice-details-amount\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "</span>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "						<p class=\"invoice-details-header-date-info\">\r\n							<span class=\"invoice-details-header-tranid-label\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Invoice:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":57},"end":{"line":24,"column":81}}}))
    + ": </span>\r\n							<span class=\"invoice-details-header-tranid-value\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"tranid") : stack1), depth0))
    + "</span>\r\n						</p>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "						<p class=\"invoice-details-header-created-from\">\r\n							<span class=\"invoice-details-header-created-from-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Created from: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":34,"column":63},"end":{"line":34,"column":93}}}))
    + "</span>\r\n							<a href=\"/purchases/view/"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"recordtype") : stack1), depth0))
    + "/"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" class=\"invoice-details-header-created-from-value\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Purchase #$(0)",((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdfrom") : stack1)) != null ? compilerNameLookup(stack1,"tranid") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":36,"column":8},"end":{"line":36,"column":63}}}))
    + "\r\n							</a>\r\n						</p>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "							<span class=\"invoice-details-header-due-date-label\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Due date:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":59},"end":{"line":42,"column":84}}}))
    + " </span>\r\n							<span class=\"invoice-details-header-due-date-value\">"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"dueDate") : stack1), depth0))
    + "</span>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "							<span class=\"invoice-details-header-due-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Due Date: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":45,"column":59},"end":{"line":45,"column":85}}}))
    + "</span>\r\n							<span class=\"invoice-details-header-due-date-value\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1," N/A",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":46,"column":59},"end":{"line":46,"column":79}}}))
    + "</span>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "							<span class=\"invoice-details-header-amount-label\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":59,"column":57},"end":{"line":59,"column":79}}}))
    + ": </span>\r\n								"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + "\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "							<span class=\"invoice-details-header-amount-label\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":62,"column":57},"end":{"line":62,"column":79}}}))
    + ": </span>\r\n						"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "				<div class=\"invoice-details-content-col\">\r\n					<div class=\"invoice-details-accordion-divider\">\r\n						<div class=\"invoice-details-accordion-head\">\r\n							<a class=\"invoice-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-details-products\" aria-expanded=\"true\" aria-controls=\"invoice-details-products\">"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"linesLengthGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data,"loc":{"start":{"line":75,"column":191},"end":{"line":79,"column":15}}})) != null ? stack1 : "")
    + "								<i class=\"invoice-details-accordion-toggle-icon\"></i>\r\n							</a>\r\n						</div>\r\n						<div class=\"invoice-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":58},"end":{"line":83,"column":94}}})) != null ? stack1 : "")
    + "\" id=\"invoice-details-products\" role=\"tabpanel\" data-target=\"#invoice-details-products\">\r\n							<div data-content=\"items-body\">\r\n								<table class=\"invoice-details-products-table lg2sm-first\">\r\n									<thead class=\"invoice-details-table-products-header\">\r\n									<th class=\"invoice-details-table-products-header-image\"></th>\r\n									<th class=\"invoice-details-table-products-header-product\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Product",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":88,"column":67},"end":{"line":88,"column":90}}}))
    + "</th>\r\n									<th class=\"invoice-details-table-products-header-qty\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Qty",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":89,"column":63},"end":{"line":89,"column":82}}}))
    + "</th>\r\n									<th class=\"invoice-details-table-products-header-unit-price\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Unit price",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":90,"column":70},"end":{"line":90,"column":96}}}))
    + "</th>\r\n									<th class=\"invoice-details-table-products-header-amount\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":91,"column":66},"end":{"line":91,"column":88}}}))
    + "</th>\r\n									</thead>\r\n									<tbody data-view=\"Items.Collection\"></tbody>\r\n								</table>\r\n							</div>\r\n						</div>\r\n					</div>\r\n\r\n\r\n					<!-- SALES REP -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaleRep") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":5},"end":{"line":135,"column":12}}})) != null ? stack1 : "")
    + "\r\n					<!-- BILLING -->\r\n					<div class=\"invoice-details-accordion-divider\">\r\n						<div class=\"invoice-details-accordion-head\">\r\n							<a class=\"invoice-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-billing\" aria-expanded=\"true\" aria-controls=\"invoice-billing\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Billing",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":141,"column":8},"end":{"line":141,"column":31}}}))
    + "\r\n								<i class=\"invoice-details-accordion-toggle-icon\"></i>\r\n							</a>\r\n						</div>\r\n						<div class=\"invoice-details-accordion-body collapse "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":145,"column":58},"end":{"line":145,"column":94}}})) != null ? stack1 : "")
    + "\" id=\"invoice-billing\" role=\"tabpanel\" data-target=\"#invoice-billing\">\r\n							<div class=\"invoice-details-accordion-container\">\r\n								<div class=\"invoice-details-row\">\r\n									<div class=\"invoice-details-info-card-grid\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":149,"column":10},"end":{"line":151,"column":17}}})) != null ? stack1 : "")
    + "									</div>\r\n									<div class=\"invoice-details-info-card-grid\">\r\n										<div class=\"invoice-details-info-card\">\r\n											<div class=\"invoice-details-info-card-terms-container\">\r\n												<p class=\"invoice-details-info-card-terms-title\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Terms:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":156,"column":61},"end":{"line":156,"column":83}}}))
    + "</p>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showTerms") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data,"loc":{"start":{"line":157,"column":12},"end":{"line":161,"column":19}}})) != null ? stack1 : "")
    + "											</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":164,"column":11},"end":{"line":169,"column":18}}})) != null ? stack1 : "")
    + "										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Products ($(0))",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"lines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":76,"column":8},"end":{"line":76,"column":52}}}))
    + "\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Product ($(0))",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"lines") : depth0)) != null ? compilerNameLookup(stack1,"length") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":78,"column":8},"end":{"line":78,"column":51}}}))
    + "\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "in";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						<div class=\"invoice-details-accordion-divider\">\r\n							<div class=\"invoice-details-accordion-head\">\r\n								<a class=\"invoice-details-accordion-head-toggle-secondary collapsed\" data-toggle=\"collapse\" data-target=\"#invoice-salesrep\" aria-expanded=\"true\" aria-controls=\"invoice-salesrep\">\r\n									"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Sales Rep",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":105,"column":9},"end":{"line":105,"column":34}}}))
    + "\r\n									<i class=\"invoice-details-accordion-toggle-icon-secondary\"></i>\r\n								</a>\r\n							</div>\r\n							<div class=\"invoice-details-accordion-body collapse\" id=\"invoice-salesrep\" role=\"tabpanel\" data-target=\"#invoice-salesrep\">\r\n								<div class=\"invoice-details-accordion-container\">\r\n									<div class=\"invoice-details-row\">\r\n										<div class=\"invoice-details-info-card-grid\">\r\n											<div class=\"invoice-details-info-card\">\r\n												<p class=\"invoice-details-info-card-name-title\">"
    + alias3(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</p>\r\n												<p>"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"siteName","hash":{},"data":data,"loc":{"start":{"line":115,"column":15},"end":{"line":115,"column":27}}}) : helper)))
    + "</p>\r\n											</div>\r\n										</div>\r\n										<div class=\"invoice-details-info-card-grid\">\r\n											<div class=\"invoice-details-info-card\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaleRepPhone") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":120,"column":12},"end":{"line":123,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showSaleRepEmail") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":125,"column":12},"end":{"line":128,"column":19}}})) != null ? stack1 : "")
    + "											</div>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "												<p class=\"invoice-details-info-card-tel-title\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Phone:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":121,"column":59},"end":{"line":121,"column":81}}}))
    + "</p>\r\n												<p>"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"phone") : stack1), depth0))
    + "</p>\r\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "												<p class=\"invoice-details-info-card-email-title\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Email:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":126,"column":61},"end":{"line":126,"column":83}}}))
    + "</p>\r\n												<p>"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"salesrep") : stack1)) != null ? compilerNameLookup(stack1,"email") : stack1), depth0))
    + "</p>\r\n";
},"30":function(container,depth0,helpers,partials,data) {
    return "											<div data-view=\"Billing.Address\"></div>\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    var helper;

  return "													<span> "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"termsName") || (depth0 != null ? compilerNameLookup(depth0,"termsName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"termsName","hash":{},"data":data,"loc":{"start":{"line":158,"column":20},"end":{"line":158,"column":33}}}) : helper)))
    + "</span>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    return "													<span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"N/A",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":160,"column":19},"end":{"line":160,"column":38}}}))
    + "</span>\r\n";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "											<div class=\"invoice-details-info-card-memo-container\">\r\n												<p class=\"invoice-details-info-card-memo-title\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Memo:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":166,"column":60},"end":{"line":166,"column":81}}}))
    + "</p>\r\n												<span>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"memo") : stack1), depth0))
    + "</span>\r\n											</div>\r\n";
},"38":function(container,depth0,helpers,partials,data) {
    return "invoice-details-summary-col-modal";
},"40":function(container,depth0,helpers,partials,data) {
    return "invoice-details-summary-col";
},"42":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data,"loc":{"start":{"line":193,"column":9},"end":{"line":193,"column":32}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":193,"column":33},"end":{"line":193,"column":54}}}))
    + "\r\n";
},"44":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "									"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"itemsQuantityNumber") || (depth0 != null ? compilerNameLookup(depth0,"itemsQuantityNumber") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"itemsQuantityNumber","hash":{},"data":data,"loc":{"start":{"line":195,"column":9},"end":{"line":195,"column":32}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Item",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":195,"column":33},"end":{"line":195,"column":53}}}))
    + "\r\n";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "						<p class=\"invoice-details-summary-grid-float\">\r\n								<span class=\"invoice-details-summary-discount\">\r\n									"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"discounttotal_formatted") : stack1), depth0))
    + "\r\n								</span>\r\n							"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Discount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":205,"column":7},"end":{"line":205,"column":31}}}))
    + "\r\n						</p>\r\n";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "							<p class=\"invoice-details-summary-grid-float\">\r\n									<span class=\"invoice-details-summary-gift-certificate\">\r\n										"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"giftcertapplied_formatted") : stack1), depth0))
    + "\r\n									</span>\r\n								"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Gift Certificate",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":234,"column":8},"end":{"line":234,"column":40}}}))
    + "\r\n							</p>\r\n";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "							<div class=\"invoice-details-summary-total-container\">\r\n								<p class=\"invoice-details-summary-grid-float\">\r\n										<span class=\"invoice-details-summary-subtotal\">\r\n											"
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "\r\n										</span>\r\n									"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias3).call(alias2,"Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":244,"column":9},"end":{"line":244,"column":30}}}))
    + "\r\n								</p>\r\n							</div>\r\n							<div class=\"invoice-details-adjustments-title\">\r\n								<h5>\r\n									"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias3).call(alias2,"ADJUSTMENTS",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":249,"column":9},"end":{"line":249,"column":36}}}))
    + "\r\n								</h5>\r\n							</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"showPayments") : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":252,"column":6},"end":{"line":264,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"showCreditMemos") : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":266,"column":6},"end":{"line":278,"column":13}}})) != null ? stack1 : "")
    + "\r\n						<!-- DEPOSIT APPLICATIONS -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,(depth0 != null ? compilerNameLookup(depth0,"showDepositApplications") : depth0),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":281,"column":6},"end":{"line":292,"column":13}}})) != null ? stack1 : "");
},"51":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<!-- PAYMENTS -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"payments") : depth0),{"name":"each","hash":{},"fn":container.program(52, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":254,"column":7},"end":{"line":263,"column":16}}})) != null ? stack1 : "");
},"52":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "								<p class=\"invoice-details-summary-grid-float\">\r\n												<span class=\"invoice-details-summary-payment\">\r\n													("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount_formatted","hash":{},"data":data,"loc":{"start":{"line":257,"column":14},"end":{"line":257,"column":34}}}) : helper)))
    + ")\r\n												</span>\r\n									<a href=\"/transactionhistory/customerpayment/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":259,"column":54},"end":{"line":259,"column":68}}}) : helper)))
    + "\" data-action=\"update-layout\">\r\n										"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":260,"column":10},"end":{"line":260,"column":46}}}))
    + "\r\n									</a>\r\n								</p>\r\n";
},"54":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<!-- CREDIT MEMOS -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"creditMemos") : depth0),{"name":"each","hash":{},"fn":container.program(55, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":268,"column":7},"end":{"line":277,"column":16}}})) != null ? stack1 : "");
},"55":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "								<p class=\"invoice-details-summary-grid-float\">\r\n												<span class=\"invoice-details-summary-credit-memo\">\r\n													("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount_formatted","hash":{},"data":data,"loc":{"start":{"line":271,"column":14},"end":{"line":271,"column":34}}}) : helper)))
    + ")\r\n												</span>\r\n									<a href=\"/transactionhistory/creditmemo/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":273,"column":49},"end":{"line":273,"column":63}}}) : helper)))
    + "\" data-action=\"update-layout\">\r\n										"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Credit Memo #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":274,"column":10},"end":{"line":274,"column":50}}}))
    + "\r\n									</a>\r\n								</p>\r\n";
},"57":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"depositApplications") : depth0),{"name":"each","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":282,"column":7},"end":{"line":291,"column":16}}})) != null ? stack1 : "");
},"58":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "								<p class=\"invoice-details-summary-grid-float\">\r\n												<span class=\"invoice-details-summary-deposit\">\r\n													("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"amount_formatted") || (depth0 != null ? compilerNameLookup(depth0,"amount_formatted") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"amount_formatted","hash":{},"data":data,"loc":{"start":{"line":285,"column":14},"end":{"line":285,"column":34}}}) : helper)))
    + ")\r\n												</span>\r\n									<a href=\"/transactionhistory/depositapplication/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"internalid") || (depth0 != null ? compilerNameLookup(depth0,"internalid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"internalid","hash":{},"data":data,"loc":{"start":{"line":287,"column":57},"end":{"line":287,"column":71}}}) : helper)))
    + "\" data-action=\"update-layout\">\r\n										"
    + alias4((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Deposit Applications #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":288,"column":10},"end":{"line":288,"column":59}}}))
    + "\r\n									</a>\r\n								</p>\r\n";
},"60":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						<div class=\"invoice-details-button-make-a-payment-container\">\r\n							<a data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"makeAPaymentPermissions") || (depth0 != null ? compilerNameLookup(depth0,"makeAPaymentPermissions") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"makeAPaymentPermissions","hash":{},"data":data,"loc":{"start":{"line":307,"column":28},"end":{"line":307,"column":55}}}) : helper)))
    + "\" href=\"/make-a-payment\" data-type=\"make-a-payment\" class=\"invoice-details-button-make-a-payment\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Make a Payment",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":308,"column":8},"end":{"line":308,"column":38}}}))
    + "\r\n							</a>\r\n						</div>\r\n";
},"62":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "						<a href=\"invoices/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" class=\"invoice-details-link-goto\" data-action=\"update-layout\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias3).call(alias2,"Go to detailed page",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":314,"column":108},"end":{"line":314,"column":143}}}))
    + "</a>\r\n						<a href=\"#\" class=\"invoice-details-button-close\" data-dismiss=\"modal\">"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias3).call(alias2,"Close",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":315,"column":76},"end":{"line":315,"column":97}}}))
    + "</a>\r\n";
},"64":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "						<a target=\"_blank\" class=\"invoice-details-button-download-as-pdf\" href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"donwloadPdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"donwloadPdfUrl") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"donwloadPdfUrl","hash":{},"data":data,"loc":{"start":{"line":317,"column":78},"end":{"line":317,"column":96}}}) : helper)))
    + "\">\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":318,"column":7},"end":{"line":318,"column":38}}}))
    + "\r\n						</a>\r\n";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "						<a href=\"/returns/new/invoice/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"internalid") : stack1), depth0))
    + "\" class=\"invoice-details-button-request\" data-permissions=\"transactions.tranRtnAuth.2\">\r\n							"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Request Return",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":324,"column":7},"end":{"line":324,"column":37}}}))
    + "\r\n						</a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<a href=\"/invoices\" class=\"invoice-details-back-btn\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"&lt; Back to Invoices",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":1,"column":53},"end":{"line":1,"column":90}}}))
    + "</a>\r\n<section class=\"invoice-details\">\r\n	<div class=\"content invoice-details-view\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "\r\n		<div class=\"invoice-details-header-information\">\r\n			<div class=\"invoice-details-header-row\">\r\n				<div class=\"invoice-details-header-col-left\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":5},"end":{"line":27,"column":12}}})) != null ? stack1 : "")
    + "						<p class=\"invoice-details-header-date-info\">\r\n							<span class=\"invoice-details-header-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Invoice Date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":55},"end":{"line":29,"column":83}}}))
    + ": </span>\r\n							<span class=\"invoice-details-header-date-value\">"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), depth0))
    + "</span>\r\n						</p>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCreatedFrom") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":5},"end":{"line":39,"column":12}}})) != null ? stack1 : "")
    + "					<p class=\"invoice-details-header-due-date-info\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDueDate") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":41,"column":6},"end":{"line":47,"column":13}}})) != null ? stack1 : "")
    + "					</p>\r\n				</div>\r\n				<div class=\"invoice-details-header-col-right\">\r\n					<p class=\"invoice-details-header-status-info\">\r\n						<span class=\"invoice-details-header-status-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":52,"column":56},"end":{"line":52,"column":80}}}))
    + "</span>\r\n						<span class=\"invoice-details-header-status-value\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</span>\r\n					</p>\r\n				</div>\r\n				<div class=\"invoice-details-header-amount\">\r\n					<p class=\"invoice-details-header-amount-info\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":58,"column":6},"end":{"line":64,"column":13}}})) != null ? stack1 : "")
    + "					</p>\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n		<div class=\"invoice-details-row\" name=\"invoice-content-layout\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":3},"end":{"line":177,"column":14}}})) != null ? stack1 : "")
    + "\r\n\r\n			<div class=\""
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data,"loc":{"start":{"line":180,"column":15},"end":{"line":180,"column":109}}})) != null ? stack1 : "")
    + "\" name=\"summary-container\">\r\n				<div class=\"invoice-details-row-fluid\">\r\n					<div class=\"invoice-details-summary-container\">\r\n						<h3 class=\"invoice-details-summary-title\">\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"SUMMARY",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":184,"column":7},"end":{"line":184,"column":30}}}))
    + "\r\n						</h3>\r\n						<p class=\"invoice-details-summary-grid-float\">\r\n							<span class=\"invoice-details-summary-items-number\">\r\n								"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"subtotal_formatted") : stack1), depth0))
    + "\r\n							</span>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":190,"column":7},"end":{"line":190,"column":31}}}))
    + "\r\n							<span class=\"invoice-details-summary-subtotal-items\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"linesitemsNumberGreaterThan1") : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data,"loc":{"start":{"line":192,"column":8},"end":{"line":196,"column":15}}})) != null ? stack1 : "")
    + "							</span>\r\n						</p>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDiscountSummary") : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":200,"column":6},"end":{"line":207,"column":13}}})) != null ? stack1 : "")
    + "\r\n						<p class=\"invoice-details-summary-grid-float\">\r\n							<span class=\"invoice-details-summary-tax-total\">\r\n								"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"taxtotal_formatted") : stack1), depth0))
    + "\r\n							</span>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Tax Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":213,"column":7},"end":{"line":213,"column":32}}}))
    + "\r\n						</p>\r\n\r\n						<p class=\"invoice-details-summary-grid-float\">\r\n							<span class=\"invoice-details-summary-shipping-cost\">\r\n								"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"shippingcost_formatted") : stack1), depth0))
    + "\r\n							</span>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Shipping",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":220,"column":7},"end":{"line":220,"column":31}}}))
    + "\r\n						</p>\r\n						<p class=\"invoice-details-summary-grid-float\">\r\n							<span class=\"invoice-details-summary-handling-value\">\r\n								"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"handlingcost_formatted") : stack1), depth0))
    + "\r\n							</span>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Handling",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":226,"column":7},"end":{"line":226,"column":31}}}))
    + "\r\n						</p>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGiftcerticate") : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":229,"column":6},"end":{"line":236,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showAdjustments") : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":238,"column":6},"end":{"line":293,"column":13}}})) != null ? stack1 : "")
    + "\r\n						<p class=\"invoice-details-summary-grid-float\">\r\n							<span class=\"invoice-details-summary-amount-due\">\r\n								"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"amountDue_formatted") : stack1), depth0))
    + "\r\n							</span>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount Due",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":299,"column":7},"end":{"line":299,"column":33}}}))
    + "\r\n						</p>\r\n					</div>\r\n				</div>\r\n\r\n				<div class=\"invoice-details-buttons-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMakeAPaymentButton") : depth0),{"name":"if","hash":{},"fn":container.program(60, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":305,"column":5},"end":{"line":311,"column":12}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showInModal") : depth0),{"name":"if","hash":{},"fn":container.program(62, data, 0),"inverse":container.program(64, data, 0),"data":data,"loc":{"start":{"line":313,"column":5},"end":{"line":320,"column":12}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRequestReturnButton") : depth0),{"name":"if","hash":{},"fn":container.program(66, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":322,"column":5},"end":{"line":326,"column":12}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</section>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'invoice_details'; return template;});