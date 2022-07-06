define('overview_home.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "\n		<table class=\"overview-home-orders-list-table\">\n				<thead class=\"overview-home-content-table\">\n					<tr class=\"overview-home-content-table-header-row\">\n						<th class=\"overview-home-content-table-header-row-title\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Purchase No.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":89,"column":13},"end":{"line":89,"column":41}}}))
    + "</span>\n						</th>\n						<th class=\"overview-home-content-table-header-row-date\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Date",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":92,"column":13},"end":{"line":92,"column":33}}}))
    + "</span>\n						</th>\n						<th class=\"overview-home-content-table-header-row-currency\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Amount",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":95,"column":13},"end":{"line":95,"column":35}}}))
    + "</span>\n						</th>\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isSCISIntegrationEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":97,"column":6},"end":{"line":105,"column":13}}})) != null ? stack1 : "")
    + "						<th class=\"overview-home-content-table-header-row-track\">\n							<span>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Track Items",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":107,"column":13},"end":{"line":107,"column":40}}}))
    + "</span>\n						</th>\n					</tr>\n				</thead>\n				<tbody class=\"overview-home-purchases-list\" data-view=\"Order.History.Results\"></tbody>\n			</table>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "							<th class=\"overview-home-content-table-header-row-origin\">\n								<span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Origin",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":99,"column":14},"end":{"line":99,"column":36}}}))
    + "</span>\n							</th>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "							<th class=\"overview-home-content-table-header-row-status\">\n								<span>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Status",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":103,"column":14},"end":{"line":103,"column":36}}}))
    + "</span>\n							</th>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "			<!--div class=\"overview-home-orders-empty-section\">\n				<h5>"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"You don't have any purchases in your account right now.",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":116,"column":8},"end":{"line":116,"column":80}}}))
    + "</h5>\n			</div-->\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"overview-home-header-links\">\n		"
    + container.escapeExpression((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Need Help? Contact <a href=\"$(0)\">Customer Service</a>",(depth0 != null ? compilerNameLookup(depth0,"customerSupportURL") : depth0),{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":230,"column":2},"end":{"line":230,"column":91}}}))
    + "\n	</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"acc-boxes\">\n	<div class=\"box-in\">\n		<div class=\"box-up\">\n		   <img src=\"/core/media/media.nl?id=25472&c=4420736_SB1&h=xxsh6yOjtgbIHd04-E_agcfj5Yc656CaYm_iShGjz7Nx_E4n&fcts=20220517083108&whence=\" alt=\"\" /> My Cart\n		</div>\n		<div class=\"box-down\">\n			<div class=\"count\">0</div>\n			<a href=\"/\">View All</a>\n		</div>\n	</div>\n\n	<div class=\"box-in\">\n		<div class=\"box-up\">\n		   <img src=\"/core/media/media.nl?id=25474&c=4420736_SB1&h=XLqmCTHsA9gK-J25ykBztyyYzYlwLfoLgUYASMRvbydM69RP&fcts=20220517083129&whence=\" alt=\"\" /> My Invoices\n		</div>\n		<div class=\"box-down\">\n			<div class=\"count\">$0.00</div>\n			<a href=\"/\">Manage Invoices</a>\n		</div>\n	</div>\n\n	<div class=\"box-in\">\n		<div class=\"box-up\">\n		   <img src=\"/core/media/media.nl?id=25475&c=4420736_SB1&h=BijgQXdjs1ip0O2wfF9hIMUm0vNMqIcghLvoHzjMSUvbzGDJ&fcts=20220517083137&whence=\" alt=\"\" /> Recent Orders\n		</div>\n		<div class=\"box-down\">\n			<div class=\"count\">0</div>\n			<a href=\"/\">View All</a>\n		</div>\n	</div>\n\n	<div class=\"box-in\">\n		<div class=\"box-up\">\n		   <img src=\"/core/media/media.nl?id=25473&c=4420736_SB1&h=pxqlOcIk0a8GtYMSP7ppaH4MCC9Ar82hQfzz6QuNmTu0fDqG&fcts=20220517083121&whence=\" alt=\"\" /> Order Status\n		</div>\n		<div class=\"box-down\">\n			<div class=\"count\">0</div>\n			<a href=\"/\">View All</a>\n		</div>\n	</div>\n</div>\n<section class=\"overview-home-mysettings\">\n	<!--h3>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"My Settings",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":49,"column":8},"end":{"line":49,"column":35}}}))
    + "</h3-->\n	<div class=\"overview-home-mysettings-row\">\n		<div class=\"overview-home-mysettings-profile\">\n			<div data-view=\"Overview.Profile\"></div>\n		</div>\n		<div class=\"overview-home-mysettings-shipping\">\n			<div data-view=\"Overview.Shipping\"></div>\n		</div>\n		<!--div class=\"overview-home-mysettings-payment\">\n			<div data-view=\"Overview.Payment\"></div>\n		</div-->\n	</div>\n</section>\n<div class=\"solution-banner\">\n	<div class=\"banner-con\">\n		<h3>A Turnkey Solution for Healthcare Management</h3>\n		<p>DiaMedicalUSA improves the quality of healthcare by creating customized solutions for medical facilities and educational institutions to streamline operational efficiencies allowing clinicians and educators to priotize patient care</p>\n		<a href=\"/search\" class=\"btn btn-white\">Start Shopping</a>\n	</div>\n</div>\n<div class=\"start-shop\">\n   <a href=\"/search\">Start Shopping <i class=\"fa fa-angle-right\"></i></a>\n</div>\n\n\n\n<section class=\"overview-home\">\n	<div data-view=\"Overview.Messages\"></div>\n	<div class=\"overview-home-orders\" data-permissions=\""
    + alias3(((helper = (helper = compilerNameLookup(helpers,"purchasesPermissions") || (depth0 != null ? compilerNameLookup(depth0,"purchasesPermissions") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"purchasesPermissions","hash":{},"data":data,"loc":{"start":{"line":77,"column":53},"end":{"line":77,"column":77}}}) : helper)))
    + "\">\n		<div class=\"overview-home-orders-title bg-div\">\n			<h3>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Recent Purchases",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":79,"column":7},"end":{"line":79,"column":39}}}))
    + "</h3> |\n			<a href=\"/purchases\" class=\"overview-home-orders-title-link\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"View more",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":80,"column":64},"end":{"line":80,"column":89}}}))
    + "</a>\n		</div>\n		<div class=\"overview-home-order-history-results-container\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"collectionLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":83,"column":2},"end":{"line":118,"column":9}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</section>\n<div class=\" bg-div m5\">\n	<h3>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Unsubmitted Orders",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":123,"column":5},"end":{"line":123,"column":39}}}))
    + "</h3> |\n	<a href=\"/purchases\" class=\"overview-home-orders-title-link\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"View more",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":124,"column":62},"end":{"line":124,"column":87}}}))
    + "</a>\n</div>\n<div class=\"table-order\">\n<table>\n  <tr>\n    <th>Order Date</th>\n    <th>Order Number</th>\n    <th>Created By</th>\n    <th>Total</th>\n    <th>Order Status</th>\n  </tr>\n  <tr>\n    <td>04/01/2022</td>\n    <td>1001</td>\n    <td>Gillian Peralta</td>\n    <td>$500.00</td>\n    <td>Incomplete</td>\n  </tr>\n    <tr>\n    <td>04/02/2022</td>\n    <td>1002</td>\n    <td>Gillian Peralta</td>\n    <td>$500.00</td>\n    <td>Incomplete</td>\n  </tr>\n    <tr>\n    <td>04/03/2022</td>\n    <td>1003</td>\n    <td>Gillian Peralta</td>\n    <td>$500.00</td>\n    <td>Incomplete</td>\n  </tr>\n    <tr>\n    <td>04/04/2022</td>\n    <td>1004</td>\n    <td>Gillian Peralta</td>\n    <td>$500.00</td>\n    <td>Incomplete</td>\n  </tr>\n    <tr>\n    <td>04/05/2022</td>\n    <td>1005</td>\n    <td>Gillian Peralta</td>\n    <td>$500.00</td>\n    <td>Incomplete</td>\n  </tr>\n\n</table>\n</div>\n\n<div class=\"bg-div m5\">\n	<h3>"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"Shipped Orders",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":175,"column":5},"end":{"line":175,"column":35}}}))
    + "</h3> |\n	<a href=\"/purchases\" class=\"overview-home-orders-title-link\">"
    + alias3((compilerNameLookup(helpers,"translate")||(depth0 && compilerNameLookup(depth0,"translate"))||alias2).call(alias1,"View more",{"name":"translate","hash":{},"data":data,"loc":{"start":{"line":176,"column":62},"end":{"line":176,"column":87}}}))
    + "</a>\n</div>\n<div class=\"table-order\">\n<table>\n  <tr>\n    <th>Order #</th>\n    <th>Order Date</th>\n    <th>Created By</th>\n    <th>Total</th>\n    <th>Order Status</th>\n  </tr>\n  <tr>\n    <td>70013</td>\n    <td>04/01/2022</td>\n    <td>Gillian Peralta</td>\n    <td>$20.00</td>\n    <td>Backordered</td>\n  </tr>\n   <tr>\n    <td>90032</td>\n    <td>04/01/2022</td>\n    <td>Gillian Peralta</td>\n    <td>$17.00</td>\n    <td>Patialy Shipped</td>\n  </tr>\n   <tr>\n    <td>90036</td>\n    <td>04/02/2022</td>\n    <td>Gillian Peralta</td>\n    <td>$35.00</td>\n    <td>In Progress</td>\n  </tr>\n   <tr>\n    <td>900060</td>\n    <td>04/03/2022</td>\n    <td>Gillian Peralta</td>\n    <td>$500.00</td>\n    <td>Shipped with Backorder</td>\n  </tr>\n   <tr>\n    <td>70013</td>\n    <td>04/04/2022</td>\n    <td>Gillian Peralta</td>\n    <td>$124.00</td>\n    <td>Backordered</td>\n  </tr>\n\n</table>\n</div>\n\n<div data-view=\"Overview.Banner\"></div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"hasCustomerSupportURL") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":228,"column":0},"end":{"line":232,"column":7}}})) != null ? stack1 : "")
    + "\n\n\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'overview_home'; return template;});