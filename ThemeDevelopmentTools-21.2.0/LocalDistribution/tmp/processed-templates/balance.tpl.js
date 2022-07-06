define('balance.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "<a href=\"/\" class=\"balance-button-back\">\r\n	<i class=\"balance-button-back-icon\"></i>\r\n	"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Back to Account",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":4,"column":32}}}))
    + "\r\n</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<span class=\"balance-indicator-title-value\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"company") || (depth0 != null ? compilerNameLookup(depth0,"company") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"company","hash":{},"data":data,"loc":{"start":{"line":23,"column":50},"end":{"line":23,"column":61}}}) : helper)))
    + "</span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<a data-permissions=\"transactions.tranCustPymt.2, transactions.tranCustInvc.1\" href=\"/invoices\" class=\"balance-continue-button\">\r\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Invoices List",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":103,"column":4},"end":{"line":103,"column":33}}}))
    + "\r\n			</a>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "			<button data-permissions=\"transactions.tranCustPymt.2, transactions.tranCustInvc.1\" class=\"balance-continue-button\" disabled>\r\n				"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No Payment Due",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":107,"column":4},"end":{"line":107,"column":34}}}))
    + "\r\n			</button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "\r\n<section class=\"balance\">\r\n	<div class=\"balance-content\">\r\n		<h2 class=\"balance-billing-header\">\r\n			"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Account Balance",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":11,"column":3},"end":{"line":11,"column":34}}}))
    + "\r\n		</h2>\r\n\r\n		<div class=\"balance-billing-account-balance\">\r\n\r\n\r\n			<div class=\"balance-indicator\">\r\n\r\n				<div class=\"balance-indicator-body\">\r\n\r\n					<div class=\"balance-indicator-title\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showCompany") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "					</div>\r\n\r\n					<div class=\"balance-indicator-bar\">\r\n						<div class=\"balance-indicator-bar-progress\" style=\"width: "
    + alias3(((helper = (helper = compilerNameLookup(helpers,"percentage") || (depth0 != null ? compilerNameLookup(depth0,"percentage") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"percentage","hash":{},"data":data,"loc":{"start":{"line":28,"column":64},"end":{"line":28,"column":78}}}) : helper)))
    + "%;\"></div>\r\n					</div>\r\n\r\n					<div class=\"balance-indicator-details\">\r\n						<div class=\"balance-indicator-details-outstanding-balance\">\r\n							<span class=\"balance-indicator-details-outstanding-reference\"></span>\r\n							<span class=\"balance-indicator-details-outstanding-label\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Outstanding Balance",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":35,"column":43}}}))
    + "\r\n							</span>\r\n							<span class=\"balance-indicator-details-outstanding-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"balanceFormatted") || (depth0 != null ? compilerNameLookup(depth0,"balanceFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"balanceFormatted","hash":{},"data":data,"loc":{"start":{"line":37,"column":65},"end":{"line":37,"column":85}}}) : helper)))
    + "</span>\r\n						</div>\r\n						<div class=\"balance-indicator-details-available-credit\">\r\n							<span class=\"balance-indicator-details-available-credit-reference\"></span>\r\n							<span class=\"balance-indicator-details-available-credit-label\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Available",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":8},"end":{"line":42,"column":33}}}))
    + "\r\n							</span>\r\n							<span class=\"balance-indicator-details-available-credit-value\">\r\n								"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"balanceAvailableFormatted") || (depth0 != null ? compilerNameLookup(depth0,"balanceAvailableFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"balanceAvailableFormatted","hash":{},"data":data,"loc":{"start":{"line":45,"column":8},"end":{"line":45,"column":37}}}) : helper)))
    + "\r\n							</span>\r\n						</div>\r\n					</div>\r\n				</div>\r\n\r\n				<div class=\"balance-indicator-summary\">\r\n					<p class=\"balance-indicator-summary-credit-limit\">\r\n						"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Credit Limit: <span class=\"balance-indicator-summary-credit-limit-value\">$(0)</span>",(depth0 != null ? compilerNameLookup(depth0,"creditLimitFormatted") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":53,"column":6},"end":{"line":53,"column":127}}}))
    + "\r\n					</p>\r\n				</div>\r\n			</div>\r\n\r\n			<div class=\"balance-credit-and-account\">\r\n				<div class=\"balance-summary-credits\">\r\n					<div class=\"balance-summary-credits-card\">\r\n						<div class=\"balance-summary-credits-body\">\r\n							<p class=\"balance-summary-credits-title\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Credits",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":63,"column":8},"end":{"line":63,"column":32}}}))
    + "\r\n							</p>\r\n							<div class=\"balance-summary-credits-deposits\">\r\n\r\n								<span class=\"balance-summary-credits-deposits-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Deposits: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":67,"column":61},"end":{"line":67,"column":87}}}))
    + "</span>\r\n								<span class=\"balance-summary-credits-deposits-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"depositsRemainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"depositsRemainingFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"depositsRemainingFormatted","hash":{},"data":data,"loc":{"start":{"line":68,"column":61},"end":{"line":68,"column":91}}}) : helper)))
    + "</span>\r\n							</div>\r\n							<div class=\"balance-summary-credits-credit-memos\">\r\n								<span class=\"balance-summary-credits-credit-memos-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Other Credits: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":71,"column":65},"end":{"line":71,"column":97}}}))
    + "</span>\r\n								<span class=\"balance-summary-credits-credit-memos-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"creditMemosRemainingFormatted") || (depth0 != null ? compilerNameLookup(depth0,"creditMemosRemainingFormatted") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"creditMemosRemainingFormatted","hash":{},"data":data,"loc":{"start":{"line":72,"column":65},"end":{"line":72,"column":98}}}) : helper)))
    + "</span>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n\r\n				<div class=\"balance-summary-account-details\">\r\n					<div class=\"balance-summary-account-details-card\">\r\n						<div class=\"balance-summary-account-details-body\">\r\n							<p class=\"balance-summary-account-details-title\">\r\n								"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Account Details",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":82,"column":8},"end":{"line":82,"column":40}}}))
    + "\r\n							</p>\r\n							<div class=\"balance-summary-account-terms\">\r\n								<span class=\"balance-summary-account-terms-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Term: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":85,"column":58},"end":{"line":85,"column":80}}}))
    + "</span>\r\n								<span class=\"balance-summary-account-terms-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"paymentTermsName") || (depth0 != null ? compilerNameLookup(depth0,"paymentTermsName") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"paymentTermsName","hash":{},"data":data,"loc":{"start":{"line":86,"column":58},"end":{"line":86,"column":78}}}) : helper)))
    + "</span>\r\n							</div>\r\n							<div class=\"balance-summary-account-currency\">\r\n								<span class=\"balance-summary-account-currency-label\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Currency: ",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":89,"column":61},"end":{"line":89,"column":87}}}))
    + "</span>\r\n								<span class=\"balance-summary-account-currency-value\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"shopperCurrencyCode") || (depth0 != null ? compilerNameLookup(depth0,"shopperCurrencyCode") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"shopperCurrencyCode","hash":{},"data":data,"loc":{"start":{"line":90,"column":61},"end":{"line":90,"column":84}}}) : helper)))
    + "</span>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n\r\n		</div>\r\n	</div>\r\n	<div class=\"balance-actions\">\r\n		<div class=\"balance-actions-proceed\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"livePaymentHaveInvoices") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":101,"column":3},"end":{"line":109,"column":10}}})) != null ? stack1 : "")
    + "		</div>\r\n		<div class=\"balance-actions-print\">\r\n			<a href=\"/printstatement\" data-permissions=\"transactions.tranStatement.2\" class=\"balance-print-button\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Print a Statement",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":113,"column":4},"end":{"line":113,"column":37}}}))
    + "\r\n			</a>\r\n		</div>\r\n	</div>\r\n</section>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'balance'; return template;});