define('cms_landing_page.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n<div class=\"cms-landing-page-row\">\r\n	<div class=\"cms-landing-page-row-full-col\" data-cms-area=\"cms-landing-page-placeholder-page-type\" data-cms-area-filters=\"page_type\"></div>\r\n	<div class=\"cms-landing-page-row-full-col\" data-cms-area=\"cms-landing-page-placeholder-path\" data-cms-area-filters=\"path\"></div>\r\n</div>\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'cms_landing_page'; return template;});