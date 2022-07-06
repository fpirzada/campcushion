define('quote_details.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "							<span class=\"quote-details-header-info-expiration-date-value\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"duedate") || (depth0 != null ? compilerNameLookup(depth0,"duedate") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duedate","hash":{},"data":data,"loc":{"start":{"line":33,"column":69},"end":{"line":33,"column":80}}}) : helper)))
    + "</span>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isOverdue") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":35,"column":7},"end":{"line":41,"column":14}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "								<i class=\"quote-details-header-info-expiration-date-icon-overdue\"></i>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"isCloseOverdue") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":8},"end":{"line":40,"column":15}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "									<i class=\"quote-details-header-info-expiration-date-icon-closeoverdue\"></i>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "							<span class=\"quote-details-header-info-expiration-date-value\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Not specified",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":69},"end":{"line":43,"column":98}}}))
    + "</span>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<p class=\"quote-details-header-info-status\">\r\n						<span class=\"quote-details-header-label-status\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":50,"column":54},"end":{"line":50,"column":78}}}))
    + "</span>\r\n						<span class=\"quote-details-header-value-status\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"entityStatusName") || (depth0 != null ? compilerNameLookup(depth0,"entityStatusName") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"entityStatusName","hash":{},"data":data,"loc":{"start":{"line":51,"column":54},"end":{"line":51,"column":74}}}) : helper)))
    + "</span>\r\n					</p>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "collapsed";
},"13":function(container,depth0,helpers,partials,data) {
    return "in";
},"15":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"quote-details-accordion-divider\">\r\n\r\n						<div class=\"quote-details-accordion-head\">\r\n							<a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-comments\" aria-expanded=\"false\" aria-controls=\"#quote-comments\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"My comments",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":83,"column":8},"end":{"line":83,"column":35}}}))
    + "\r\n								<i class=\"quote-details-accordion-toggle-icon\"></i>\r\n							</a>\r\n						</div>\r\n\r\n						<div class=\"quote-details-accordion-body collapse\" id=\"quote-comments\" role=\"tabpanel\" data-target=\"quote-comments\">\r\n							<div class=\"quote-details-accordion-container\">\r\n								<div class=\"quote-details-comments-row\">\r\n									"
    + alias3((compilerNameLookup(helpers,"breaklines")||(depth0 && compilerNameLookup(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"memo") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":91,"column":9},"end":{"line":91,"column":28}}}))
    + "\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"quote-details-accordion-divider\">\r\n						<div class=\"quote-details-accordion-head\">\r\n							<a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-billing-info\" aria-expanded=\"false\" aria-controls=\"#quote-billing-info\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Payment Information",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":103,"column":8},"end":{"line":103,"column":43}}}))
    + "\r\n								<i class=\"quote-details-accordion-toggle-icon\"></i>\r\n							</a>\r\n						</div>\r\n						<div class=\"quote-details-accordion-body collapse\" id=\"quote-billing-info\" role=\"tabpanel\" data-target=\"quote-billing-info\">\r\n							<div class=\"quote-details-accordion-container\">\r\n								<div class=\"quote-details-billing-row\">\r\n									<div class=\"quote-details-billing-info-card\">\r\n										<h5 class=\"quote-details-billing-info-card-title\">\r\n											"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Bill to:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":112,"column":11},"end":{"line":112,"column":35}}}))
    + "\r\n										</h5>\r\n										<div data-view=\"Billing.Address\"></div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "					<div class=\"quote-details-accordion-divider\">\r\n\r\n						<div class=\"quote-details-accordion-head\">\r\n							<a class=\"quote-details-accordion-head-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#quote-messages\" aria-expanded=\"false\" aria-controls=\"#quote-messages\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Message from Sales Representative",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":128,"column":8},"end":{"line":128,"column":57}}}))
    + "\r\n								<i class=\"quote-details-accordion-toggle-icon\"></i>\r\n							</a>\r\n						</div>\r\n\r\n						<div class=\"quote-details-accordion-body collapse\" id=\"quote-messages\" role=\"tabpanel\" data-target=\"quote-messages\">\r\n							<div class=\"quote-details-accordion-container\">\r\n								<div class=\"quote-details-message-row\">\r\n								"
    + alias3((compilerNameLookup(helpers,"breaklines")||(depth0 && compilerNameLookup(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"message") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":136,"column":8},"end":{"line":136,"column":30}}}))
    + "\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "						<small class=\"quote-details-disclaimer-message\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"For immediate assistance contact <strong>$(0)</strong> at <strong>$(1)</strong>. For additional information, send an email to <strong>$(2)</strong>.",(depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":145,"column":54},"end":{"line":145,"column":259}}}))
    + "</small>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "						<small class=\"quote-details-disclaimer-message\">"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimer") || (depth0 != null ? compilerNameLookup(depth0,"disclaimer") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimer","hash":{},"data":data,"loc":{"start":{"line":147,"column":54},"end":{"line":147,"column":70}}}) : helper))) != null ? stack1 : "")
    + "</small>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "						<p class=\"quote-details-summary-grid-float\">\r\n							<span class=\"quote-details-summary-amount-discount\">\r\n								"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"discounttotal_formatted") : stack1), depth0))
    + "\r\n							</span>\r\n							"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias2,"Discount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":172,"column":7},"end":{"line":172,"column":31}}}))
    + "\r\n						</p>\r\n						<div class=\"quote-details-summary-grid\">\r\n							<div class=\"quote-details-summary-amount-discount-text-success\">\r\n								<span class=\"quote-details-summary-amount-discount-code\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias2,true,{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":177,"column":8},"end":{"line":179,"column":15}}})) != null ? stack1 : "")
    + "								</span>\r\n							</div>\r\n						</div>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "									("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"discount") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + ")\r\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "						<p class=\"quote-details-summary-grid-float\">\r\n							<span class=\"quote-details-summary-promo-code\">\r\n								"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"summary") : stack1)) != null ? compilerNameLookup(stack1,"discountrate_formatted") : stack1), depth0))
    + "\r\n							</span>\r\n							"
    + alias2((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Promo Code Applied",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":190,"column":7},"end":{"line":190,"column":41}}}))
    + "\r\n						</p>\r\n						<div class=\"quote-details-summary-grid\">\r\n							<div class=\"quote-details-summary-promocode-text-success\">\r\n								<span class=\"quote-details-summary-promocode-code\">#"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"promocode") : stack1)) != null ? compilerNameLookup(stack1,"code") : stack1), depth0))
    + "</span>\r\n							</div>\r\n						</div>\r\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "					<p class=\"quote-details-summary-grid-float\">\r\n						<span class=\"quote-details-summary-handling-cost-formatted\">\r\n							"
    + alias1(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"handlingcost_formatted") : stack1), depth0))
    + "\r\n						</span>\r\n						"
    + alias1((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Handling",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":211,"column":6},"end":{"line":211,"column":30}}}))
    + "\r\n					</p>\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"purchasablestatus") : stack1)) != null ? compilerNameLookup(stack1,"isPurchasable") : stack1),{"name":"unless","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":235,"column":6},"end":{"line":263,"column":17}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasPermission") : depth0),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":265,"column":6},"end":{"line":267,"column":13}}})) != null ? stack1 : "");
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "							<div data-type=\"quote-details-and-order-msg-placeholder\">\r\n								<div class=\"quote-details-msg\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasPermissionAndHasErrors") : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":238,"column":9},"end":{"line":245,"column":16}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(39, data, 0),"data":data,"loc":{"start":{"line":247,"column":9},"end":{"line":251,"column":16}}})) != null ? stack1 : "")
    + "								</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showGiftCertificateMessage") : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":254,"column":8},"end":{"line":261,"column":15}}})) != null ? stack1 : "")
    + "							</div>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "										<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"The following information is needed:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":239,"column":13},"end":{"line":239,"column":65}}}))
    + "</p>\r\n										<ul>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"purchaseValidationErrors") : depth0),{"name":"each","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":241,"column":11},"end":{"line":243,"column":20}}})) != null ? stack1 : "")
    + "										</ul>\r\n";
},"35":function(container,depth0,helpers,partials,data) {
    return "												<li>- "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"37":function(container,depth0,helpers,partials,data) {
    return "										<p>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"To place the order please contact <strong>$(0)</strong> at <strong>$(1)</strong> or send an email to <strong>$(2)</strong>",(depth0 != null ? compilerNameLookup(depth0,"salesrepName") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepPhone") : depth0),(depth0 != null ? compilerNameLookup(depth0,"salesrepEmail") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":248,"column":13},"end":{"line":248,"column":192}}}))
    + "</p>\r\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "										<p>"
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"disclaimerSummary") || (depth0 != null ? compilerNameLookup(depth0,"disclaimerSummary") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disclaimerSummary","hash":{},"data":data,"loc":{"start":{"line":250,"column":13},"end":{"line":250,"column":36}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n";
},"41":function(container,depth0,helpers,partials,data) {
    return "									<div class=\"quote-details-msg-certificate\">\r\n										<p>\r\n											<i class=\"quote-details-msg-certificate-icon\"></i>\r\n											"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Gift Certificate not allowed",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":258,"column":11},"end":{"line":258,"column":55}}}))
    + "\r\n										</p>\r\n									</div>\r\n";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "							<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"reviewQuoteURL") || (depth0 != null ? compilerNameLookup(depth0,"reviewQuoteURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"reviewQuoteURL","hash":{},"data":data,"loc":{"start":{"line":266,"column":16},"end":{"line":266,"column":34}}}) : helper)))
    + "\" class=\"quote-details-button-review-and-order\" "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"purchasablestatus") : stack1)) != null ? compilerNameLookup(stack1,"isPurchasable") : stack1),{"name":"unless","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":266,"column":82},"end":{"line":266,"column":150}}})) != null ? stack1 : "")
    + ">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Review and Place Order",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":266,"column":151},"end":{"line":266,"column":189}}}))
    + "</a>\r\n";
},"44":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", alias5=container.lambda;

  return "\n<a href=\"/quotes\" class=\"quote-details-header-back-btn\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"&lt; Back to quotes",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":8,"column":56},"end":{"line":8,"column":91}}}))
    + "</a>\r\n<section class=\"quote-details\">\r\n	<div class=\"quote-details-view\">\r\n		<header>\r\n			<h2 class=\"quote-details-header-title\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Quote ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":26}}}))
    + "\r\n				<span class=\"quote-details-quote-id\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"tranid") || (depth0 != null ? compilerNameLookup(depth0,"tranid") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"tranid","hash":{},"data":data,"loc":{"start":{"line":14,"column":41},"end":{"line":14,"column":51}}}) : helper)))
    + "</span>\r\n\r\n				<span class=\"quote-details-header-amount-total\">\r\n					"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "\r\n				</span>\r\n			</h2>\r\n		</header>\r\n\r\n		<!--GENERATE HEADER -->\r\n		<div class=\"quote-details-header-information\">\r\n			<div class=\"quote-details-row\">\r\n				<div class=\"quote-details-header-col-left\">\r\n					<p class=\"quote-details-header-info-request-date\">\r\n						<span class=\"quote-details-header-label-request-date\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Request date: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":27,"column":60},"end":{"line":27,"column":90}}}))
    + "</span>\r\n						<span class=\"quote-details-header-value-date\">"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"trandate") : stack1), depth0))
    + "</span>\r\n					</p>\r\n					<p class=\"quote-details-header-info-expiration-date\">\r\n						<span class=\"quote-details-header-info-expiration-date-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Expiration date: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":31,"column":68},"end":{"line":31,"column":102}}}))
    + "</span>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasDuedate") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":44,"column":13}}})) != null ? stack1 : "")
    + "					</p>\r\n				</div>\r\n				<div class=\"quote-details-header-col-right\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showQuoteStatus") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":4},"end":{"line":53,"column":11}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n		</div>\r\n\r\n		<!-- CONTENT -->\r\n		<div class=\"quote-details-row\">\r\n			<div class=\"quote-details-content-col\">\r\n\r\n				<div class=\"quote-details-accordion-divider\">\r\n					<div class=\"quote-details-accordion-head\">\r\n							<a class=\"quote-details-accordion-head-toggle "
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":53},"end":{"line":64,"column":104}}})) != null ? stack1 : "")
    + "\" data-toggle=\"collapse\" data-target=\"#quote-products\" aria-expanded=\"true\" aria-controls=\"#quote-products\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Items ($(0))",(depth0 != null ? compilerNameLookup(depth0,"lineItemsLength") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":65,"column":8},"end":{"line":65,"column":52}}}))
    + "\r\n							<i class=\"quote-details-accordion-toggle-icon\"></i>\r\n						</a>\r\n					</div>\r\n\r\n						<div class=\"quote-details-accordion-body collapse  "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showOpenedAccordion") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":57},"end":{"line":70,"column":93}}})) != null ? stack1 : "")
    + "\" id=\"quote-products\" role=\"tabpanel\" data-target=\"#quote-products\">\r\n						<table class=\"quote-details-products-table lg2sm-first\">\r\n							<tbody data-view=\"Items.Collection\"></tbody>\r\n						</table>\r\n					</div>\r\n				</div>\r\n\r\n				<!-- COMMENTS/MEMO -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMemo") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":4},"end":{"line":96,"column":11}}})) != null ? stack1 : "")
    + "\r\n				<!-- BILLADDRESS -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBillingAddress") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":4},"end":{"line":120,"column":11}}})) != null ? stack1 : "")
    + "\r\n				<!-- MESSAGE -->\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMessage") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":123,"column":4},"end":{"line":141,"column":11}}})) != null ? stack1 : "")
    + "\r\n				<div class=\"quote-details-disclaimer-bottom-content\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":144,"column":5},"end":{"line":148,"column":12}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n\r\n			<!-- SUMMARY -->\r\n			<div class=\"quote-details-summary-col\">\r\n				<div class=\"quote-details-summary-container\">\r\n					<h3 class=\"quote-details-summary-title\">\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"SUMMARY",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":156,"column":6},"end":{"line":156,"column":29}}}))
    + "\r\n					</h3>\r\n					<div class=\"quote-details-summary-subtotal\">\r\n						<p class=\"quote-details-summary-grid-float\">\r\n							<span class=\"quote-details-summary-amount-subtotal\">\r\n							"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"subtotal_formatted") : stack1), depth0))
    + "\r\n							</span>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Subtotal",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":163,"column":7},"end":{"line":163,"column":31}}}))
    + "\r\n						</p>\r\n					</div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showDiscount") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":167,"column":5},"end":{"line":183,"column":12}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showPromocode") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":185,"column":5},"end":{"line":197,"column":12}}})) != null ? stack1 : "")
    + "\r\n					<p class=\"quote-details-summary-grid-float\">\r\n						<span class=\"quote-details-summary-amount-shipping\">\r\n						"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"shippingcost_formatted") : stack1), depth0))
    + "\r\n						</span>\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Shipping",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":203,"column":6},"end":{"line":203,"column":30}}}))
    + "\r\n					</p>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showHandlingCost") : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":206,"column":5},"end":{"line":213,"column":12}}})) != null ? stack1 : "")
    + "\r\n					<p class=\"quote-details-summary-grid-float\">\r\n						<span class=\"quote-details-summary-amount-tax\">\r\n						"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"taxtotal_formatted") : stack1), depth0))
    + "\r\n						</span>\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Tax Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":219,"column":6},"end":{"line":219,"column":31}}}))
    + "\r\n					</p>\r\n\r\n					<div class=\"quote-details-summary-total\">\r\n						<p class=\"quote-details-summary-grid-float\">\r\n							<span class=\"quote-details-summary-amount-total\">\r\n							"
    + alias3(alias5(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"summary") : depth0)) != null ? compilerNameLookup(stack1,"total_formatted") : stack1), depth0))
    + "\r\n							</span>\r\n							"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Total",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":227,"column":7},"end":{"line":227,"column":28}}}))
    + "\r\n						</p>\r\n					</div>\r\n\r\n				</div>\r\n				<div class=\"quote-details-row-fluid\">\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isOpen") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":234,"column":5},"end":{"line":268,"column":12}}})) != null ? stack1 : "")
    + "					<a href=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pdfUrl") || (depth0 != null ? compilerNameLookup(depth0,"pdfUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"pdfUrl","hash":{},"data":data,"loc":{"start":{"line":269,"column":14},"end":{"line":269,"column":24}}}) : helper)))
    + "\" target=\"_blank\" class=\"quote-details-button-download-pdf\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":269,"column":84},"end":{"line":269,"column":115}}}))
    + "</a>\r\n				</div>\r\n				<div class=\"quote-details-disclaimer-bottom\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasSalesrep") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":272,"column":5},"end":{"line":276,"column":12}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</section>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'quote_details'; return template;});