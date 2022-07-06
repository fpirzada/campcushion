define('case_detail.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "					<div class=\"case-detail-reply-section\">\r\n						<button type=\"button\" class=\"case-detail-close-case-button\" data-action=\"close-case\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Close Case",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":32,"column":91},"end":{"line":32,"column":117}}}))
    + "</button>\r\n					</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "					<div class=\"case-detail-message-group-row\">\r\n						<div class=\"case-detail-message-date-section\">\r\n							<span class=\"case-detail-field-message-date\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"date") || (depth0 != null ? compilerNameLookup(depth0,"date") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":64,"column":52},"end":{"line":64,"column":60}}}) : helper)))
    + "</span>\r\n						</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"messages") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":6},"end":{"line":77,"column":15}}})) != null ? stack1 : "")
    + "					</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "							<div class=\"case-detail-message-row "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"initialMessage") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":43},"end":{"line":67,"column":86}}})) != null ? stack1 : "")
    + "\">\r\n								<div class=\"case-detail-message\">\r\n									<span class=\"case-detail-field-message-author\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"author") || (depth0 != null ? compilerNameLookup(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":69,"column":56},"end":{"line":69,"column":66}}}) : helper)))
    + "</span>\r\n									<span class=\"case-detail-field-message-field-message-time\"> ("
    + alias4(((helper = (helper = compilerNameLookup(helpers,"messageDate") || (depth0 != null ? compilerNameLookup(depth0,"messageDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"messageDate","hash":{},"data":data,"loc":{"start":{"line":70,"column":70},"end":{"line":70,"column":85}}}) : helper)))
    + ")</span>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"initialMessage") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":9},"end":{"line":73,"column":16}}})) != null ? stack1 : "")
    + "								</div>\r\n								<p class=\"case-detail-field-message-text\">"
    + alias4((compilerNameLookup(helpers,"breaklines")||(depth0 && compilerNameLookup(depth0,"breaklines"))||alias2).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"text") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":75,"column":50},"end":{"line":75,"column":69}}}))
    + "</p>\r\n							</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "sc-highlighted";
},"7":function(container,depth0,helpers,partials,data) {
    return "										<span class=\"case-detail-field-message-original\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"- Original case message",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":72,"column":59},"end":{"line":72,"column":98}}}))
    + "</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "\r\n<section class=\"case-detail\">\r\n	<header class=\"case-detail-title\">\r\n		<a href=\"/cases\" class=\"case-detail-back-btn\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"&lt; Back to Cases",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":48},"end":{"line":10,"column":82}}}))
    + "</a>\r\n		<h2 class=\"case-detail-header-title\">\r\n			<span class=\"case-detail-field-number\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":12,"column":42},"end":{"line":12,"column":56}}}) : helper)))
    + "</span>\r\n			<span class=\"case-detail-field-subject\"> "
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"title") : stack1), depth0))
    + "</span>\r\n		</h2>\r\n	</header>\r\n\r\n	<div data-confirm-message class=\"case-detail-confirm-message\"></div>\r\n\r\n	<div data-type=\"alert-placeholder\"></div>\r\n\r\n	<div class=\"case-detail-header-information\">\r\n		<div class=\"case-detail-header-row\">\r\n			<div class=\"case-detail-header-col-left\">\r\n				<p><span class=\"case-detail-label-type\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Type of inquiry",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":44},"end":{"line":24,"column":76}}}))
    + ": </span> <span class=\"case-detail-value-type\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"category") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</span></p>\r\n				<p><span class=\"case-detail-label-creation-date\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Creation date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":25,"column":53},"end":{"line":25,"column":83}}}))
    + ": </span> <span class=\"case-detail-value-creation-date\">"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"createdDate") : stack1), depth0))
    + "</span></p>\r\n				<p><span class=\"case-detail-label-last-message-date\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Last Message:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":26,"column":57},"end":{"line":26,"column":87}}}))
    + " </span> <span class=\"case-detail-value-last-message-date\">"
    + alias3(alias4(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"lastMessageDate") : stack1), depth0))
    + "</span></p>\r\n			</div>\r\n			<div class=\"case-detail-header-col-right\">\r\n				<p class=\"case-detail-header-status-info\"><span class=\"case-detail-label-status\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":29,"column":85},"end":{"line":29,"column":107}}}))
    + ": </span> <span class=\"case-detail-value-status\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"status") : stack1)) != null ? compilerNameLookup(stack1,"name") : stack1), depth0))
    + "</span></p>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"closeStatusId") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":4},"end":{"line":34,"column":11}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class=\"case-detail-conversation-background\">\r\n		<form action=\"#\">\r\n				<div class=\"case-detail-reply-container\" data-validation=\"control-group\">\r\n					<label class=\"case-detail-reply-label\" for=\"reply\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Reply with a message:",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":42,"column":56},"end":{"line":42,"column":93}}}))
    + "</label>\r\n					<span class=\"case-detail-controls\" data-validation=\"control\">\r\n						<textarea name=\"reply\" id=\"reply\" class=\"case-detail-reply-textarea\" rows=\"4\"></textarea>\r\n					</span>\r\n				</div>\r\n				<div class=\"case-detail-reply-section\">\r\n					<button type=\"submit\" class=\"case-detail-reply-button\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Reply",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":48,"column":60},"end":{"line":48,"column":81}}}))
    + "</button>\r\n				</div>\r\n		</form>\r\n\r\n		<div class=\"case-detail-messages-accordion\">\r\n			<div class=\"case-detail-accordion-head\">\r\n				<a class=\"case-detail-accordion-head-toggle\" data-toggle=\"collapse\" data-target=\"#response-messages\" aria-expanded=\"true\" aria-controls=\"response-messages\">\r\n					"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Messages ($(0))",((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"messages_count") : stack1),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":55,"column":5},"end":{"line":55,"column":57}}}))
    + "\r\n					<i class=\"case-detail-accordion-toggle-icon\"></i>\r\n				</a>\r\n			</div>\r\n			<div class=\"case-detail-accordion-body collapse in\" id=\"response-messages\" role=\"tabpanel\" data-target=\"#response-messages\">\r\n				<div class=\"case-detail-accordion-container\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"each").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"model") : depth0)) != null ? compilerNameLookup(stack1,"grouped_messages") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":4},"end":{"line":79,"column":13}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n\r\n</section>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'case_detail'; return template;});