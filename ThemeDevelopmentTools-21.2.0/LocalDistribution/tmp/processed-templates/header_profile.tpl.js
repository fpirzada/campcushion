define('header_profile.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<a class=\"header-profile-welcome-link\" href=\"#\" data-toggle=\"dropdown\">\n		<i class=\"header-profile-welcome-user-icon\"></i>\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(alias1,"Welcome <strong class=\"header-profile-welcome-link-name\">$(0)</strong>",(depth0 != null ? compilerNameLookup(depth0,"displayName") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":13,"column":100}}}))
    + "\n		<i class=\"header-profile-welcome-carret-icon\"></i>\n	</a>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMyAccountMenu") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":1},"end":{"line":21,"column":8}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "		<ul class=\"header-profile-menu-myaccount-container\">\n			<li data-view=\"Header.Menu.MyAccount\"></li>\n		</ul>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showLoginMenu") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":25,"column":1},"end":{"line":55,"column":8}}})) != null ? stack1 : "")
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showLogin") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":2},"end":{"line":49,"column":9}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "			<div class=\"header-profile-menu-login-container\">\n				<ul class=\"header-profile-menu-login\">\n					<!--li class=\"header-profile-login-list-icon\">\n						<i class=\"header-profile-login-icon\"></i>\n					</li-->\n					<li>\n						<a class=\"header-profile-login-link\" data-touchpoint=\"login\" data-hashtag=\"login-register\" href=\"#\">\n						<img src=\"https://4420736.app.netsuite.com/core/media/media.nl?id=26420&c=4420736&h=UDxgYAosEcP28JK_PgbE8Tg9RNbjKc_UvCPRxia-59MwbV3g&fcts=20220622085532&whence=\" />\n							<span class=\"icon-label\">	"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Login",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":33},"end":{"line":35,"column":54}}}))
    + " | "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Register",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":35,"column":57},"end":{"line":35,"column":81}}}))
    + "</span>\n							\n						</a>\n					</li>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRegister") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":5},"end":{"line":46,"column":12}}})) != null ? stack1 : "")
    + "				</ul>\n			</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "						<!--li class=\"header-profile-login-separator\"> | </li>\n						<li>\n							<a class=\"header-profile-register-link\" data-touchpoint=\"register\" data-hashtag=\"login-register\" href=\"#\">\n								"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Register",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":43,"column":8},"end":{"line":43,"column":32}}}))
    + "\n							</a>\n						</li-->\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "		<a class=\"header-profile-loading-link\">\n			<i class=\"header-profile-loading-icon\"></i>\n			<span class=\"header-profile-loading-indicator\"></span>\n		</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"showExtendedMenu") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":57,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_profile'; return template;});