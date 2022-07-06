define('store_locator_results.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"store-locator-results-map\" data-id=\"map-view\" data-type=\"map-view\" data-view=\"ResultStoreLocatorMap\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "\n<div class=\"store-locator-results\">\r\n	<div class=\"store-locator-results-nav-back\" data-action=\"refine-search\" data-type=\"sc-pusher-header\">\r\n		<a data-action=\"sc-pusher-dismiss\" class=\"store-locator-results-nav-back-link\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Back to Refine Search",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":10,"column":81},"end":{"line":10,"column":118}}}))
    + "</a>\r\n	</div>\r\n	<div class=\"store-locator-results-nav-button-container\">\r\n		<div class=\"store-locator-results-nav-button-container-grid\">\r\n			<button class=\"store-locator-results-nav-button-list active\" data-action=\"show-list\"> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"List View",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":14,"column":89},"end":{"line":14,"column":114}}}))
    + " </button>\r\n		</div>\r\n		<div class=\"store-locator-results-nav-button-container-grid\">\r\n			<button class=\"store-locator-results-nav-button-map\" data-action=\"show-map\"> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Map View",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":17,"column":80},"end":{"line":17,"column":104}}}))
    + " </button>\r\n		</div>\r\n	</div>\r\n	<div class=\"store-locator-results-nav-description\">\r\n		<span class=\"store-locator-results-nav-description-highlight\">"
    + alias3(((helper = (helper = compilerNameLookup(helpers,"totalStores") || (depth0 != null ? compilerNameLookup(depth0,"totalStores") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"totalStores","hash":{},"data":data,"loc":{"start":{"line":21,"column":64},"end":{"line":21,"column":79}}}) : helper)))
    + " "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"stores",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":80},"end":{"line":21,"column":102}}}))
    + "</span> "
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"near",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":21,"column":110},"end":{"line":21,"column":130}}}))
    + "\r\n		<span class=\"store-locator-results-nav-description-geolocation\">\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"myposition") || (depth0 != null ? compilerNameLookup(depth0,"myposition") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"myposition","hash":{},"data":data,"loc":{"start":{"line":22,"column":67},"end":{"line":22,"column":81}}}) : helper)))
    + "\"</span>\r\n	</div>\r\n	<div data-id=\"list-view\" data-type=\"list-view\">\r\n		<div class=\"store-locator-results-list active\" >\r\n			<ul class=\"store-locator-results-list-container\" data-view=\"LocatorList\"></ul>\r\n		</div>\r\n\r\n		<div class=\"store-locator-results-see-all-stores\">\r\n			<a data-touchpoint=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"touchpoint") || (depth0 != null ? compilerNameLookup(depth0,"touchpoint") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"touchpoint","hash":{},"data":data,"loc":{"start":{"line":30,"column":23},"end":{"line":30,"column":37}}}) : helper)))
    + "\" data-hashtag=\"stores/all\" href=\"stores/all\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"See complete list of stores",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":30,"column":83},"end":{"line":30,"column":126}}}))
    + "</a>\r\n		</div>\r\n	</div>\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showMap") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":1},"end":{"line":35,"column":8}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'store_locator_results'; return template;});