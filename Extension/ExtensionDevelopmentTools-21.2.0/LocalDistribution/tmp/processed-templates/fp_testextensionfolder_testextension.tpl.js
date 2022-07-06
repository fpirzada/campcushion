define('fp_testextensionfolder_testextension.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing;

  return "<style>\n#_myCart{\ndisplay:none}\n#_profileBalance{display:none}\n\n</style>\n\n\n<h2>Hi "
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? compilerNameLookup(stack1,"CustomerName") : stack1), depth0))
    + ", Welcome Back</h2>\n<span>Not  "
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? compilerNameLookup(stack1,"CustomerName") : stack1), depth0))
    + ", <a href=\"/logOut.ssp?logoff=T&ckabandon=T\" data-touchpoint=\"logout\"   name=\"signout\">Log Out</a></span>\n\n<div id=\"_myCart\">\n"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? compilerNameLookup(stack1,"myCart") : stack1), depth0))
    + "\n</div>\n\n<div id=\"_profileBalance\">\n"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"message") : depth0)) != null ? compilerNameLookup(stack1,"profileBalance") : stack1), depth0))
    + "\n</div>\n\n<!--\n  Available helpers:\n  "
    + alias2((compilerNameLookup(helpers,"getExtensionAssetsPath")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPath"))||alias4).call(alias3,"img/image.jpg",{"name":"getExtensionAssetsPath","hash":{},"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":22,"column":45}}}))
    + " - reference assets in your extension\n  \n  "
    + alias2((compilerNameLookup(helpers,"getExtensionAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getExtensionAssetsPathWithDefault"))||alias4).call(alias3,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getExtensionAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":24,"column":2},"end":{"line":24,"column":68}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder\n  \n  "
    + alias2((compilerNameLookup(helpers,"getThemeAssetsPath")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPath"))||alias4).call(alias3,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/image.jpg",{"name":"getThemeAssetsPath","hash":{},"data":data,"loc":{"start":{"line":26,"column":2},"end":{"line":26,"column":53}}}))
    + " - reference assets in the active theme\n  \n  "
    + alias2((compilerNameLookup(helpers,"getThemeAssetsPathWithDefault")||(depth0 && compilerNameLookup(depth0,"getThemeAssetsPathWithDefault"))||alias4).call(alias3,(depth0 != null ? compilerNameLookup(depth0,"context_var") : depth0),"img/theme-image.jpg",{"name":"getThemeAssetsPathWithDefault","hash":{},"data":data,"loc":{"start":{"line":28,"column":2},"end":{"line":28,"column":70}}}))
    + " - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder\n-->";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/FP/TestExtensionFolder/1.0.3/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'fp_testextensionfolder_testextension'; return template;});