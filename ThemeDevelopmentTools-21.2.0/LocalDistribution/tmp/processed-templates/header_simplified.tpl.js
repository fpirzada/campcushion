define('header_simplified.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\n\n<div class=\"header-simplified-main\">\n    <div class=\"header-main-container\">\n        <div class=\"nav-header-logo\" data-view=\"Header.Logo\"></div>\n    </div>\n</div>\n\n<div id=\"banner-header-top\" class=\"content-banner banner-header-top\" data-cms-area=\"simplified_header_banner\" data-cms-area-filters=\"global\"></div>\n\n\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'header_simplified'; return template;});