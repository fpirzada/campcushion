define('site_search.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n\r\n<div class=\"site-search\" data-type=\"site-search\">\r\n    <div class=\"site-search-content\">\r\n        <form class=\"site-search-content-form\" method=\"GET\" action=\"/search\" data-action=\"search\">\r\n            <div class=\"site-search-content-input\">\r\n				<div data-view=\"ItemsSeacher\"></div>\r\n				<a class=\"site-search-input-reset\" data-type=\"search-reset\"><i class=\"site-search-input-reset-icon\"></i></a>\r\n            </div>\r\n            <button class=\"site-search-button-submit\" type=\"submit\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Go",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":68},"end":{"line":17,"column":86}}}))
    + "</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'site_search'; return template;});