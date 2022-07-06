define('comparison_widget.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return " shown";
},"3":function(container,depth0,helpers,partials,data) {
    return " hide-placeholders";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"sc-item-comparison-widget-container "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showWidget") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":79}}})) != null ? stack1 : "")
    + "\">\n  <div class=\"sc-widget-desktop\">\n    <div class=\"sc-widget-header\" data-view=\"WidgetHeader.View\"></div>\n    <div class=\"sc-widget-placeholders-container animated-ease"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showItemCells") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":62},"end":{"line":4,"column":116}}})) != null ? stack1 : "")
    + "\"\n         data-view=\"ItemCells.View\">\n    </div>\n  </div>\n  <div class=\"sc-widget-non-desktop\">\n    <div class=\"sc-allowed-items-message-mobile\" data-view=\"LimitMessage.View\"></div>\n    <div class=\"sc-widget-placeholders-container animated-ease"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showItemCells") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":62},"end":{"line":10,"column":116}}})) != null ? stack1 : "")
    + "\"\n         data-view=\"ItemCells.View\">\n    </div>\n    <div class=\"sc-widget-header\" data-view=\"WidgetHeader.View\"></div>\n  </div>\n</div>\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/ProductComparison/1.1.0/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'comparison_widget'; return template;});