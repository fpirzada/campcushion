{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<section class="facets-facet-browse">
	<div data-cms-area="item_list_banner" data-cms-area-filters="page_type"></div>

	{{#if showResults}}
		<div class="facets-facet-browse-content">

			<div class="facets-facet-browse-facets" data-action="pushable" data-id="product-search-facets">
			<!--- <div class="shopping-layout-breadcrumb">
				<div data-view="Global.Breadcrumb" data-type="breadcrumb"></div>
			</div> --->
			<div id="header_Breadcrumb_Copy" class="header-side-bar"></div>
			
			<div class="side-bar-body"> 

			<div data-cms-area="facet_navigation_top" data-cms-area-filters="page_type"></div>

				<!--- {{#if isCategory}}
					<div data-view="Facets.CategorySidebar" class="facets-facet-browse-facets-sidebar"></div>
				{{/if}} --->

				 

				<div class="filter_"> 
					<div style="padding-bottom:15px; padding-top:30px">
						<h4 style=" color:black; font-weight:bold; text-transform: capitalize;"> Filter By </h4>
						<div data-view="Facets.FacetedNavigation" data-exclude-facets="commercecategoryname,category"></div> 

					</div>
				</div>	
				<!--- 	<div class="box border-bottom"> 
					<div class="box-label text-uppercase d-flex align-items-center" style="padding-bottom:10px"> <button class="btn ml-auto" type="button" data-toggle="collapse" data-target="#inner-box" aria-expanded="true" aria-controls="inner-box" id="out" onclick="outerFilter()">
					<span class="fas fa-plus"> </span>  </button> Manufacturer</div> 
					<div id="inner-box" class="mt-2 mr-1 collapse show" style="">
					<div class="my-1"> <label class="tick"> <input type="checkbox" checked="checked"> Drive Medical <span class="check"></span> </label> </div> 
					<div class="my-1"> <label class="tick"> <input type="checkbox"> <span class="check"> MedMatterss </span> </label> </div>
					<div class="my-1"> <label class="tick"> <input type="checkbox"> <span class="check"> Medline </span> </label> </div> 
					<div class="my-1"> <label class="tick"> <input type="checkbox"> <span class="check"> span-America </span> </label> </div>
						</div> 
						
					</div>
					<div class="box border-bottom" > 
					<div class="box-label text-uppercase d-flex align-items-center" style="padding-bottom:10px"> <button class="btn ml-auto" type="button" data-toggle="collapse" data-target="#inner-box" aria-expanded="true" aria-controls="inner-box" id="out" onclick="outerFilter()">
					<span class="fas fa-plus"> </span>  </button> Manufacturer</div> 
					<div id="inner-box" class="mt-2 mr-1 collapse show" style="">
					<div class="my-1"> <label class="tick"> <input type="checkbox" checked="checked"> Drive Medical <span class="check"></span> </label> </div> 
					<div class="my-1"> <label class="tick"> <input type="checkbox"> <span class="check"> MedMatterss </span> </label> </div>
					<div class="my-1"> <label class="tick"> <input type="checkbox"> <span class="check"> Medline </span> </label> </div> 
					<div class="my-1"> <label class="tick"> <input type="checkbox"> <span class="check"> span-America </span> </label> </div>
						</div> 
						
					</div>
				</div> --->

				<div data-cms-area="facet_navigation_bottom" data-cms-area-filters="page_type"></div>
			
			</div>
				
			</div>

			<!--
			Sample of how to add a particular facet into the HTML. It is important to specify the data-facet-id="<facet id>"
			properly <div data-view="Facets.FacetedNavigation.Item" data-facet-id="custitem1"></div>
			 -->

			<div class="facets-facet-browse-results">
			

				{{#if isCategory}}
					<div class="facets-facet-browse-category">
					<div data-view="Facets.Browse.CategoryHeading"></div>
						

						<div class="p_facets_category_cell" data-view="Facets.CategoryCells"></div>

					</div>
				{{/if}}


		<header class="facets-facet-browse-header">
		
					{{#if showItems}}
			<h1 class="facets-facet-browse-title" data-quantity="{{total}}">
				{{#if keywords}}
					{{#if isTotalProductsOne}}
						{{translate '1 Result for <span class="facets-facet-browse-title-alt">$(0)</span>' keywords}}
					{{else}}
						{{translate '$(0) Results for <span class="facets-facet-browse-title-alt">$(1)</span>' total keywords}}
					{{/if}}
				{{else}}
					{{#if isTotalProductsOne}}
						{{translate '1 Product'}}
					{{else}}
						{{translate '$(0) Products' total}}
					{{/if}}
				{{/if}}
			</h1>

			<nav class="facets-facet-browse-list-header">

				
				<div class="facets-facet-browse-list-header-actions" data-view="Facets.ItemListDisplaySelector"></div>

				<div class="facets-facet-browse-list-header-expander">
					<button class="facets-facet-browse-list-header-expander-button collapsed" data-toggle="collapse" data-target="#list-header-filters" aria-expanded="true" aria-controls="list-header-filters">
						{{translate 'Sort & Filter'}}
						<i class="facets-facet-browse-list-header-expander-icon"></i>
					</button>
				</div>

				<div class="facets-facet-browse-list-header-filters collapse" id="list-header-filters">
					<div class="facets-facet-browse-list-header-filters-wrapper">

						<div class="facets-facet-browse-list-header-filters-row">

							<div class="facets-facet-browse-list-header-filter-column" data-view="Facets.ItemListShowSelector">
							</div>

							<div class="facets-facet-browse-list-header-filter-column" data-view="Facets.ItemListSortSelector">
							</div>

							{{#if hasItemsAndFacets}}
								<div class="facets-facet-browse-list-header-filter-column">
									<button class="facets-facet-browse-list-header-filter-facets" data-type="sc-pusher" data-target="product-search-facets">
										{{translate 'Narrow By'}}
										<i class="facets-facet-browse-list-header-filter-facets-icon"></i>
									</button>
								</div>
							{{/if}}
						</div>

					</div>
				</div>
			</nav>
					{{/if}}
		</header>


					<div id="banner-section-top" class="content-banner banner-section-top" data-cms-area="item_list_banner_top" data-cms-area-filters="path"></div>


				{{#if showItems}}
					<!-- <div class="facets-facet-browse-narrowedby" data-view="Facets.FacetsDisplay">
					</div> -->

					{{#if isEmptyList}}
						<div data-view="Facets.Items.Empty">
						</div>
					{{else}}
						<div class="facets-facet-browse-items" data-view="Facets.Items">
						</div>
					{{/if}}
				{{/if}}
			</div>
		</div>
			<div class="facets-facet-browse-pagination" data-view="GlobalViews.Pagination">
			</div>

	{{else}}
		<div class="facets-facet-browse-empty-items" data-view="Facets.Items.Empty">
		</div>
	{{/if}}

	<div id="banner-section-bottom" class="content-banner banner-section-bottom" data-cms-area="item_list_banner_bottom" data-cms-area-filters="page_type"></div>
</section>

<script type="text/javascript">
$(document).ready(function(){
  $( ".p_facets_category_cell" ).each(function(){
      $(this).children(".facets-category-cell").eq(11).after('<a href="" id="particular" style=" background-color: #00426A;padding: 12px; border-radius: 7px; color: white; width: 30px !important; margin-left: 37%;font-size:smaller;"> View All Categories  <i class="arrow_ down_arraow" style=" margin-bottom: 2px !important;"></i></a>');//add a unique id to link
      $(this).children(".facets-category-cell:gt(11)" ).addClass('hide');
  });
});

$(document).on('click','a#particular',function(e){
  e.preventDefault();
  $(this).addClass('hide');
  $(this).parent().children('div.facets-category-cell').removeClass('hide');
});


$(document).ready(function(){
  $( "#header_Breadcrumb" ).addClass('hide');
});

$("#header_Breadcrumb_Copy").append($("#header_Breadcrumb").html());


  $(document).ready(function() {
    // $('.global-views-breadcrumb-divider').replaceWith('<li class="global-views-breadcrumb-divider-new"> / </div>');
	$('.global-views-breadcrumb-divider').replaceWith($('<li class="global-views-breadcrumb-divider-new"> / </div>'));
  });



</script>

{{!----
Use the following context variables when customizing this template: 
	
	total (Number)
	isTotalProductsOne (Boolean)
	title (String)
	hasItemsAndFacets (Boolean)
	collapseHeader (Boolean)
	keywords (undefined)
	showResults (Boolean)
	isEmptyList (Boolean)
	isCategory (Boolean)
	showItems (Number)

----}}
