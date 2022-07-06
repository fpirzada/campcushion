{{#if viewElements.panelTitle.show}}
  <div class="sc-order-status-payment-accordion">
    <div class="sc-order-status-accordion-head">
      <a class="sc-order-status-accordion-head-toggle collapsed" data-toggle="collapse"
        data-target="#payment-accordion" aria-expanded="false"
        aria-controls="payment-accordion">
          {{viewElements.panelTitle.label}}
        <i class="sc-order-status-accordion-head-toggle-icon"></i>
      </a>
    </div>
    <div id="payment-accordion" class="sc-order-status-accordion-body collapse">
      <div class="sc-order-status-accordion-container">
        {{#if viewElements.paymentMethodPanelTitle.show}}
          <div class="sc-order-status-payment-method">
            <h5 class="sc-order-status-box-header">{{viewElements.paymentMethodPanelTitle.label}}</h5>
            <div class="box">
              <div class="sc-order-status-payment-method-title">
                <div class="sc-order-status-payment-method-title-thumb">
                  <img src="{{paymentData.thumbnailUrl}}" alt="payment-method">
                </div>
                <div class="sc-order-status-payment-method-title-name">
                  <strong>{{paymentData.method.name}}</strong>
                </div>
                <div class="sc-order-status-clear"></div>
              </div>
              {{#if viewElements.creditCardEndingLabel.show}}
                <p>{{viewElements.creditCardEndingLabel.label}}
                  <strong>{{paymentData.creditCardEndingNumbers}}</strong>
                </p>
              {{/if}}
            </div>
          </div>
        {{/if}}
        {{#if viewElements.billToPanelTitle.show}}
          <div class="sc-order-status-payment-bill-address-container">
            <h5 class="sc-order-status-box-header">{{viewElements.billToPanelTitle.label}}</h5>
            <div class="box">
              <p>
                <strong>
                  {{paymentData.billAddressName}}
                </strong>
              </p>
              {{#each paymentData.addressLines}}
                <p>{{this}}</p>
              {{/each}}
            </div>
          </div>
          <div class="sc-order-status-clear"></div>
        {{/if}}
      </div>
    </div>
  </div>
{{/if}}
