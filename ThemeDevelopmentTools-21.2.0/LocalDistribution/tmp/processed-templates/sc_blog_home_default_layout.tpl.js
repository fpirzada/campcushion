define('sc_blog_home_default_layout.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var t = {"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"sc-blog-home-default-layout-page-rss\">\n      <a href=\"/SuiteCommerceBlogRSS.xml\" target=\"_blank\"><i class=\"sc-blog-home-default-fa-rss-square\"></i></a>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isHomePage") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":4},"end":{"line":46,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPostListFiltered") : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":4},"end":{"line":51,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPostListFilteredByCategory") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":4},"end":{"line":56,"column":11}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"sc-blog-home-default-layout-latest-posts\" data-view=\"LatestPosts.View\"></div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"sc-blog-home-default-layout-featured-post-list\" data-component=\"featured-post-list\"\n           data-view=\"FeaturedPostList.View\"></div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"sc-blog-home-default-layout-featured-posts-in-category\" data-component=\"featured-posts-in-category\"\n           data-view=\"FeaturedPostsInCategory.View\"></div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"sc-blog-home-default-layout-content-empty-state\" data-view=\"EmptyState.View\"></div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, alias4=container.hooks.helperMissing;

  return "      <div class=\"sc-blog-home-default-layout-content-header-block\">\n        <div class=\"sc-blog-home-default-layout-content-header-block-navigation "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPostListFilteredByPhrase") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":80},"end":{"line":75,"column":150}}})) != null ? stack1 : "")
    + "\">\n          <div class=\"sc-blog-home-default-layout-content-header-block-navigation-search"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPostListFilteredByPhrase") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":76,"column":88},"end":{"line":77,"column":65}}})) != null ? stack1 : "")
    + "\"\n               data-view=\"PostSearch.View\"></div>\n          <div class=\"sc-blog-home-default-layout-content-header-block-navigation-taxonomies\"\n               data-view=\"TaxonomyNavigation.View\"></div>\n          <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"sc-blog-home-default-layout-content-header-block-posts\" role=\"region\" aria-label=\"Articles\">\n          <div class=\"sc-blog-home-default-layout-content-header-block-posts-search"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPostListFilteredByPhrase") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":84,"column":83},"end":{"line":85,"column":63}}})) != null ? stack1 : "")
    + "\"\n               data-view=\"PostSearch.View\"></div>\n          <h5 class=\"sc-blog-home-default-layout-content-header-block-posts-large-device-title\" tabindex=\"0\">"
    + alias3(alias2(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"postListTitle") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + " "
    + alias3(alias2(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"postListTitle") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1), depth0))
    + "</h5>\n"
    + ((stack1 = (compilerNameLookup(helpers,"sc_ext_when")||(depth0 && compilerNameLookup(depth0,"sc_ext_when"))||alias4).call(alias1,(compilerNameLookup(helpers,"sc_ext_when")||(depth0 && compilerNameLookup(depth0,"sc_ext_when"))||alias4).call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPostListFilteredByAuthor") : depth0),"||",(depth0 != null ? compilerNameLookup(depth0,"isPostListFilteredByTag") : depth0),{"name":"sc_ext_when","hash":{},"data":data,"loc":{"start":{"line":88,"column":26},"end":{"line":88,"column":95}}}),"||",(depth0 != null ? compilerNameLookup(depth0,"isPostListFilteredByPhrase") : depth0),{"name":"sc_ext_when","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":88,"column":10},"end":{"line":99,"column":26}}})) != null ? stack1 : "")
    + "          <div class=\"sc-blog-home-default-layout-content-header-block-posts-list\"\n               data-view=\"HeaderBlockPostList.View\"></div>\n          <div class=\"sc-blog-home-default-layout-content-header-block-posts-suggestions\"\n               data-view=\"SuggestionsList.View\"></div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"sc-blog-home-default-layout-content-posts-block small-card-variation-for-desktop\"\n           data-view=\"ContentPostList.View\"></div>\n      <div class=\"sc-blog-home-default-layout-content-pagination\" data-view=\"PostListPagination.View\"></div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (compilerNameLookup(helpers,"sc_ext_when")||(depth0 && compilerNameLookup(depth0,"sc_ext_when"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? compilerNameLookup(depth0,"postListSize") : depth0),"===",0,{"name":"sc_ext_when","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":75,"column":38},"end":{"line":75,"column":143}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "extra-large-taxonomy-list";
},"16":function(container,depth0,helpers,partials,data) {
    return "large-taxonomy-list";
},"18":function(container,depth0,helpers,partials,data) {
    return " hidden-in-desktop";
},"20":function(container,depth0,helpers,partials,data) {
    return " show-in-desktop";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <div class=\"sc-blog-home-default-layout-content-header-block-posts-small-device-title "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isPostListFilteredByPhrase") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":98},"end":{"line":91,"column":63}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,((stack1 = (depth0 != null ? compilerNameLookup(depth0,"postListTitle") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":92,"column":14},"end":{"line":97,"column":21}}})) != null ? stack1 : "")
    + "            </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "label-as-title";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <h5 class=\"label\"><small>"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"postListTitle") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "</small></h5>\n                <h5>"
    + alias2(alias1(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"postListTitle") : depth0)) != null ? compilerNameLookup(stack1,"text") : stack1), depth0))
    + "</h5>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <h5>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? compilerNameLookup(depth0,"postListTitle") : depth0)) != null ? compilerNameLookup(stack1,"label") : stack1), depth0))
    + "</h5>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<main>\n<div class=\"sc-blog-home-default-layout\">\n  <div class=\"sc-blog-home-default-layout-cms-area-full-width-column\"\n       data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-1\">\n  </div>\n  <div class=\"sc-blog-home-default-layout-cms-area-row\">\n    <div class=\"sc-blog-home-default-layout-cms-area-column\"\n         data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-2\"></div>\n    <div class=\"sc-blog-home-default-layout-cms-area-column\"\n         data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-3\"></div>\n  </div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showRssFeedLink") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":17,"column":9}}})) != null ? stack1 : "")
    + "\n  <div class=\"sc-blog-home-default-layout-page-title\">\n    <h1><a href=\""
    + alias4(((helper = (helper = compilerNameLookup(helpers,"url") || (depth0 != null ? compilerNameLookup(depth0,"url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data,"loc":{"start":{"line":20,"column":17},"end":{"line":20,"column":24}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"header") || (depth0 != null ? compilerNameLookup(depth0,"header") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data,"loc":{"start":{"line":20,"column":26},"end":{"line":20,"column":36}}}) : helper)))
    + "</a></h1>\n  </div>\n\n  <div class=\"sc-blog-home-default-layout-cms-area-row\">\n    <div class=\"sc-blog-home-default-layout-cms-area-column\"\n         data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-4\"></div>\n    <div class=\"sc-blog-home-default-layout-cms-area-column\"\n         data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-5\"></div>\n  </div>\n  <div class=\"sc-blog-home-default-layout-cms-area-full-width-column\"\n       data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-6\">\n  </div>\n\n  <div class=\"sc-blog-home-default-layout-cms-area-row\">\n    <div class=\"sc-blog-home-default-layout-cms-area-column\"\n         data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-7\"></div>\n    <div class=\"sc-blog-home-default-layout-cms-area-column\"\n         data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-8\"></div>\n  </div>\n  <div class=\"sc-blog-home-default-layout-cms-area-full-width-column\"\n       data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-9\">\n  </div>\n\n"
    + ((stack1 = compilerNameLookup(helpers,"unless").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showEmptyState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":2},"end":{"line":57,"column":13}}})) != null ? stack1 : "")
    + "\n  <div class=\"sc-blog-home-default-layout-cms-area-row\">\n    <div class=\"sc-blog-home-default-layout-cms-area-column\"\n         data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-10\"></div>\n    <div class=\"sc-blog-home-default-layout-cms-area-column\"\n         data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-11\"></div>\n  </div>\n  <div class=\"sc-blog-home-default-layout-cms-area-full-width-column\"\n       data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-12\">\n  </div>\n\n  <div class=\"sc-blog-home-default-layout-content\" data-component=\"content\">\n"
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showEmptyState") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":70,"column":4},"end":{"line":110,"column":11}}})) != null ? stack1 : "")
    + "  </div>\n\n  <div class=\"sc-blog-home-default-layout-cms-area-row\">\n    <div class=\"sc-blog-home-default-layout-cms-area-column\"\n         data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-13\"></div>\n    <div class=\"sc-blog-home-default-layout-cms-area-column\"\n         data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-14\"></div>\n  </div>\n  <div class=\"sc-blog-home-default-layout-cms-area-full-width-column\"\n       data-cms-area-filters=\"path\" data-cms-area=\"blog-home-cms-area-15\"></div>\n</div>\n</main>\n";
},"useData":true}; var main = t.main; t.main = function(){ arguments[1] = arguments[1] || {}; var ctx = arguments[1]; ctx._extension_path = 'http://localhost:7777/tmp/extensions/SuiteCommerce/Blog/2.1.1/'; ctx._theme_path = 'http://localhost:7777/tmp/extensions/SC/Bridge/3.0.9/'; return main.apply(this, arguments); }; var template = Handlebars.template(t); template.Name = 'sc_blog_home_default_layout'; return template;});