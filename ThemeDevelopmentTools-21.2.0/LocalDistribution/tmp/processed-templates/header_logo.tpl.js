define('header_logo.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <img class=\"header-logo-image\" src=\"https://4420736.app.netsuite.com/core/media/media.nl?id=26422&c=4420736&h=qG-ioEqBiUE5W4IS_IKKsYYoRFkcbNFvTwX-QqkBNMy_C5EM&fcts=20220622085556&whence=\" alt=\""
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteName","hash":{},"data":data,"loc":{"start":{"line":14,"column":201},"end":{"line":14,"column":213}}}) : helper)))
    + "\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <span class=\"header-logo-sitename\">\n            "
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"siteName") || (depth0 != null ? compilerNameLookup(depth0,"siteName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"siteName","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":24}}}) : helper)))
    + "\n        </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n\n <div id=\"site-logo\" class=\"content-banner rush\"></div>\n\n<a class=\"header-logo\" href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkHref") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkHref") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkHref","hash":{},"data":data,"loc":{"start":{"line":12,"column":29},"end":{"line":12,"column":47}}}) : helper)))
    + "\" data-touchpoint=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkTouchPoint") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkTouchPoint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkTouchPoint","hash":{},"data":data,"loc":{"start":{"line":12,"column":66},"end":{"line":12,"column":90}}}) : helper)))
    + "\" data-hashtag=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkHashtag") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkHashtag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkHashtag","hash":{},"data":data,"loc":{"start":{"line":12,"column":106},"end":{"line":12,"column":127}}}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"headerLinkTitle") || (depth0 != null ? compilerNameLookup(depth0,"headerLinkTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headerLinkTitle","hash":{},"data":data,"loc":{"start":{"line":12,"column":136},"end":{"line":12,"column":155}}}) : helper)))
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"logoUrl") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "</a>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_logo'; return template;});