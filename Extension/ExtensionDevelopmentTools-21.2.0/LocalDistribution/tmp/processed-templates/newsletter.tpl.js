define('newsletter.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "error";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<div data-view=\"GlobalMessageFeedback\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n<form class=\"newsletter-suscription-form\" data-action=\"newsletter-subscribe\" novalidate>\r\n\r\n	<div data-validation=\"control-group\">\r\n\r\n		<h5 class=\"newsletter-subscription-form-label\" for=\"login-email\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Newsletter Sign Up",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":12,"column":67},"end":{"line":12,"column":101}}}))
    + "</h5>\r\n\r\n		<div class=\"newsletter-subscription-form-container "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showErrorMessage") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":53},"end":{"line":14,"column":89}}})) != null ? stack1 : "")
    + "\" data-validation=\"control\">\r\n			<input\r\n				name=\"email\"\r\n				id=\"email\"\r\n				type=\"email\"\r\n				class=\"newsletter-suscription-form-input\"\r\n				placeholder=\""
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"username@domain.com",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":20,"column":17},"end":{"line":20,"column":52}}}))
    + "\"\r\n			>\r\n\r\n			<button type=\"submit\" class=\"newsletter-subscription-form-button-subscribe\">\r\n				"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Subscribe",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":24,"column":29}}}))
    + "\r\n			</button>\r\n\r\n			<div class=\"newsletter-alert-placeholder\" data-type=\"alert-placeholder\" >\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isFeedback") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "			</div>\r\n		</div>\r\n	</div>\r\n</form>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'newsletter'; return template;});