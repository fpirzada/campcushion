{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}
<div class="acc-boxes">
	<div class="box-in">
		<div class="box-up">
		   <img src="https://4420736.app.netsuite.com/core/media/media.nl?id=26622&c=4420736&h=-4983vA0eowgztS2Gx8pr-NG9DPCU6vfqziN4LuAgTY5qUhv&fcts=20220701053824&whence=" alt="" /> My Cart
		</div>
		<div class="box-down">
			<div class="count">0</div>
			<a href="/">View All</a>
		</div>
	</div>

	<div class="box-in">
		<div class="box-up">
		   <img src="https://4420736.app.netsuite.com/core/media/media.nl?id=26613&c=4420736&h=0xTQiZM1TyEfA-sGc9_Z9MK1x5loO6B-z_e_s4b5SjkBiHut&fcts=20220701053824&whence=" alt="" /> My Invoices
		</div>
		<div class="box-down">
			<div class="count">$0.00</div>
			<a href="/">Manage Invoices</a>
		</div>
	</div>

	<div class="box-in">
		<div class="box-up">
		   <img src="https://4420736.app.netsuite.com/core/media/media.nl?id=26621&c=4420736&h=20O-lUhluFqj_By2oKz-i7Ir9urbYMpGIWRQvz5bZJcmbjed&fcts=20220701053824&whence=" alt="" /> Recent Orders
		</div>
		<div class="box-down">
			<div class="count">0</div>
			<a href="/">View All</a>
		</div>
	</div>

	<div class="box-in">
		<div class="box-up">
		   <img src="https://4420736.app.netsuite.com/core/media/media.nl?id=26623&c=4420736&h=L98MzzjkwIrmhjKGFoIurwSJdd7aiR1K5DdTINljb2LxNyrC&fcts=20220701053824&whence=" alt="" /> Order Status
		</div>
		<div class="box-down">
			<div class="count">0</div>
			<a href="/">View All</a>
		</div>
	</div>
</div>
<section class="overview-home-mysettings">
	<!--h3>{{translate 'My Settings'}}</h3-->
	<div class="overview-home-mysettings-row">
		<div class="overview-home-mysettings-profile">
			<div data-view="Overview.Profile"></div>
		</div>
		<div class="overview-home-mysettings-shipping">
			<div data-view="Overview.Shipping"></div>
		</div>
		<!--div class="overview-home-mysettings-payment">
			<div data-view="Overview.Payment"></div>
		</div-->
	</div>
</section>
<div class="solution-banner">
	<div class="banner-con">
		<h3>A Turnkey Solution for Healthcare Management</h3>
		<p>DiaMedicalUSA improves the quality of healthcare by creating customized solutions for medical facilities and educational institutions to streamline operational efficiencies allowing clinicians and educators to priotize patient care</p>
		<a href="/search" class="btn btn-white">Start Shopping</a>
	</div>
</div>
<div class="start-shop">
   <a href="/search">Start Shopping <i class="fa fa-angle-right"></i></a>
</div>



<section class="overview-home">
	<div data-view="Overview.Messages"></div>
	<div class="overview-home-orders" data-permissions="{{purchasesPermissions}}">
		<div class="overview-home-orders-title bg-div">
			<h3>{{translate 'Recent Purchases'}}</h3> |
			<a href="/purchases" class="overview-home-orders-title-link">{{translate 'View more'}}</a>
		</div>
		<div class="overview-home-order-history-results-container">
		{{#if collectionLengthGreaterThan0}}

		<table class="overview-home-orders-list-table">
				<thead class="overview-home-content-table">
					<tr class="overview-home-content-table-header-row">
						<th class="overview-home-content-table-header-row-title">
							<span>{{translate 'Purchase No.'}}</span>
						</th>
						<th class="overview-home-content-table-header-row-date">
							<span>{{translate 'Date'}}</span>
						</th>
						<th class="overview-home-content-table-header-row-currency">
							<span>{{translate 'Amount'}}</span>
						</th>
						{{#if isSCISIntegrationEnabled}}
							<th class="overview-home-content-table-header-row-origin">
								<span>{{translate 'Origin'}}</span>
							</th>
						{{else}}
							<th class="overview-home-content-table-header-row-status">
								<span>{{translate 'Status'}}</span>
							</th>
						{{/if}}
						<th class="overview-home-content-table-header-row-track">
							<span>{{translate 'Track Items'}}</span>
						</th>
					</tr>
				</thead>
				<tbody class="overview-home-purchases-list" data-view="Order.History.Results"></tbody>
			</table>

		{{else}}
			<!--div class="overview-home-orders-empty-section">
				<h5>{{translate 'You don\'t have any purchases in your account right now.'}}</h5>
			</div-->
		{{/if}}
		</div>
	</div>
</section>
<div class=" bg-div m5">
	<h3>{{translate 'Unsubmitted Orders'}}</h3> |
	<a href="/purchases" class="overview-home-orders-title-link">{{translate 'View more'}}</a>
</div>
<div class="table-order">
<table>
  <tr>
    <th>Order Date</th>
    <th>Order Number</th>
    <th>Created By</th>
    <th>Total</th>
    <th>Order Status</th>
  </tr>
  <tr>
    <td>04/01/2022</td>
    <td>1001</td>
    <td>Gillian Peralta</td>
    <td>$500.00</td>
    <td>Incomplete</td>
  </tr>
    <tr>
    <td>04/02/2022</td>
    <td>1002</td>
    <td>Gillian Peralta</td>
    <td>$500.00</td>
    <td>Incomplete</td>
  </tr>
    <tr>
    <td>04/03/2022</td>
    <td>1003</td>
    <td>Gillian Peralta</td>
    <td>$500.00</td>
    <td>Incomplete</td>
  </tr>
    <tr>
    <td>04/04/2022</td>
    <td>1004</td>
    <td>Gillian Peralta</td>
    <td>$500.00</td>
    <td>Incomplete</td>
  </tr>
    <tr>
    <td>04/05/2022</td>
    <td>1005</td>
    <td>Gillian Peralta</td>
    <td>$500.00</td>
    <td>Incomplete</td>
  </tr>

</table>
</div>

<div class="bg-div m5">
	<h3>{{translate 'Shipped Orders'}}</h3> |
	<a href="/purchases" class="overview-home-orders-title-link">{{translate 'View more'}}</a>
</div>
<div class="table-order">
<table>
  <tr>
    <th>Order #</th>
    <th>Order Date</th>
    <th>Created By</th>
    <th>Total</th>
    <th>Order Status</th>
  </tr>
  <tr>
    <td>70013</td>
    <td>04/01/2022</td>
    <td>Gillian Peralta</td>
    <td>$20.00</td>
    <td>Backordered</td>
  </tr>
   <tr>
    <td>90032</td>
    <td>04/01/2022</td>
    <td>Gillian Peralta</td>
    <td>$17.00</td>
    <td>Patialy Shipped</td>
  </tr>
   <tr>
    <td>90036</td>
    <td>04/02/2022</td>
    <td>Gillian Peralta</td>
    <td>$35.00</td>
    <td>In Progress</td>
  </tr>
   <tr>
    <td>900060</td>
    <td>04/03/2022</td>
    <td>Gillian Peralta</td>
    <td>$500.00</td>
    <td>Shipped with Backorder</td>
  </tr>
   <tr>
    <td>70013</td>
    <td>04/04/2022</td>
    <td>Gillian Peralta</td>
    <td>$124.00</td>
    <td>Backordered</td>
  </tr>

</table>
</div>

<div data-view="Overview.Banner"></div>

{{#if hasCustomerSupportURL}}
	<div class="overview-home-header-links">
		{{translate 'Need Help? Contact <a href="$(0)">Customer Service</a>' customerSupportURL}}
	</div>
{{/if}}



{{!----
Use the following context variables when customizing this template:

	collectionLengthGreaterThan0 (Boolean)
	hasCustomerSupportURL (Boolean)
	customerSupportURL (String)
	firstName (String)
	isSCISIntegrationEnabled (Boolean)
	purchasesPermissions (String)

----}}
