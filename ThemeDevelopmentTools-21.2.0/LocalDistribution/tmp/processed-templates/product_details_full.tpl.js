define('product_details_full.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<form id=\"product-details-full-form\" data-action=\"submit-form\" method=\"POST\">\r\n\r\n						<section class=\"product-details-full-info\">\r\n							<div id=\"banner-summary-bottom\" class=\"product-details-full-banner-summary-bottom\"></div>\r\n						</section>\r\n\r\n                        <div data-cms-area=\"product_details_full_cms_area_4\" data-cms-area-filters=\"path\"></div>\r\n\r\n						<div data-view=\"Product.Price\"></div>\r\n						<div data-view=\"Quantity.Pricing\"></div>\r\n						<div data-view=\"Product.Sku\"></div>\r\n						<section data-view=\"Product.Options\"></section>\r\n\r\n						<div data-view=\"Product.Stock.Info\"></div>\r\n						<div data-view=\"StockDescription\"></div>\r\n\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"isPriceEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":6},"end":{"line":77,"column":13}}})) != null ? stack1 : "")
    + "\r\n						<div data-view=\"SocialSharing.Flyout\" class=\"product-details-full-social-sharing\"></div>\r\n\r\n						<div class=\"product-details-full-main-bottom-banner\">\r\n							<div id=\"banner-summary-bottom\" class=\"product-details-full-banner-summary-bottom\"></div>\r\n						</div>\r\n					</form>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "							<div data-view=\"Quantity\"></div>\r\n\r\n							<section class=\"product-details-full-actions\">\r\n\r\n								<div class=\"product-details-full-actions-container\">\r\n									<div data-view=\"MainActionView\"></div>\r\n\r\n								</div>\r\n								<div class=\"product-details-full-actions-container\">\r\n									<div data-view=\"ProductDetails.AddToQuote\" class=\"product-details-full-actions-addtoquote\"></div>\r\n\r\n									<div data-view=\"AddToProductList\" class=\"product-details-full-actions-addtowishlist\"></div>\r\n								</div>\r\n\r\n							</section>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "					<div data-view=\"GlobalViewsMessageView.WronglyConfigureItem\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\r\n\r\n<div class=\"product-details-full\">\r\n	<div data-cms-area=\"item_details_banner\" data-cms-area-filters=\"page_type\"></div>\r\n\r\n	<header class=\"product-details-full-header\">\r\n		<div id=\"banner-content-top\" class=\"product-details-full-banner-top\"></div>\r\n	</header>\r\n\r\n	<article class=\"product-details-full-content\">\r\n\r\n		<div id=\"banner-details-top\" class=\"product-details-full-banner-top-details\"></div>\r\n\r\n		<section class=\"product-details-full-main-content\">\r\n			<div class=\"product-details-full-content-header\">\r\n\r\n				<div data-cms-area=\"product_details_full_cms_area_1\" data-cms-area-filters=\"page_type\"></div>\r\n\r\n				<h1 class=\"product-details-full-content-header-title\" itemprop=\"name\">"
    + container.escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pageHeader","hash":{},"data":data,"loc":{"start":{"line":26,"column":74},"end":{"line":26,"column":88}}}) : helper)))
    + "</h1>\r\n				<div class=\"product-details-full-rating\" data-view=\"Global.StarRating\"></div>\r\n				<div data-cms-area=\"item_info\" data-cms-area-filters=\"path\"></div>\r\n			</div>\r\n			<div class=\"product-details-full-main-content-left\">\r\n				<div class=\"product-details-full-image-gallery-container\">\r\n					<div id=\"banner-image-top\" class=\"content-banner banner-image-top\"></div>\r\n					<div data-view=\"Product.ImageGallery\"></div>\r\n					<div id=\"banner-image-bottom\" class=\"content-banner banner-image-bottom\"></div>\r\n\r\n					<div data-cms-area=\"product_details_full_cms_area_2\" data-cms-area-filters=\"path\"></div>\r\n					<div data-cms-area=\"product_details_full_cms_area_3\" data-cms-area-filters=\"page_type\"></div>\r\n				</div>\r\n			</div>\r\n\r\n			<div class=\"product-details-full-main-content-right\">\r\n\r\n			<div class=\"product-details-full-main\">\r\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isItemProperlyConfigured") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":44,"column":4},"end":{"line":87,"column":11}}})) != null ? stack1 : "")
    + "\r\n				<div id=\"banner-details-bottom\" class=\"product-details-full-banner-details-bottom\" data-cms-area=\"item_info_bottom\" data-cms-area-filters=\"page_type\"></div>\r\n			</div>\r\n			</div>\r\n\r\n		</section>\r\n\r\n		<div data-cms-area=\"product_details_full_cms_area_5\" data-cms-area-filters=\"page_type\"></div>\r\n		<div data-cms-area=\"product_details_full_cms_area_6\" data-cms-area-filters=\"path\"></div>\r\n\r\n		<section data-view=\"Product.Information\"></section>\r\n\r\n		<div data-cms-area=\"product_details_full_cms_area_7\" data-cms-area-filters=\"path\"></div>\r\n\r\n		<div data-view=\"ProductReviews.Center\"></div>\r\n\r\n		<div data-cms-area=\"product_details_full_cms_area_8\" data-cms-area-filters=\"path\"></div>\r\n\r\n		<div class=\"product-details-full-content-related-items\">\r\n			<div data-view=\"Related.Items\"></div>\r\n		</div>\r\n\r\n		<div class=\"product-details-full-content-correlated-items\">\r\n			<div data-view=\"Correlated.Items\"></div>\r\n		</div>\r\n		<div id=\"banner-details-bottom\" class=\"content-banner banner-details-bottom\" data-cms-area=\"item_details_banner_bottom\" data-cms-area-filters=\"page_type\"></div>\r\n	</article>\r\n</div>\r\n\r\n\r\n\r\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.14/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'product_details_full'; return template;});