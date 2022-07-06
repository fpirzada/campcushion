<div class="sc-order-status">

  <div class="sc-order-status-container">
    <div class="sc-order-status-header">
      <h1 class="sc-order-status-title">{{title}}</h1>
      {{#if viewElements.description.show}}
        <p>{{viewElements.description.label}}</p>
      {{/if}}
      {{#if viewElements.helpLink.show}}
        <p>
          <a href="#" class="sc-order-status-open-help-link" data-action="showHelp">
            {{viewElements.helpLink.label}}
          </a>
        </p>
      {{/if}}
    </div>
  </div>
  <div class="sc-order-status-container">
    <div class="sc-order-status-form">
      <section class="sc-order-status-form-fields">
        <form>
          <fieldset>
            {{#each formControls.fields}}
              <div class="sc-order-status-form-group" data-input="{{name}}" data-validation="control-group">
                <label class="sc-order-status-form-label" for="{{name}}">
                  {{label}} <span class="sc-order-status-form-required">*</span>
                </label>
                <div class="sc-order-status-form-controls" data-validation="control">
                  <input type="text" id="{{name}}"
                    class="sc-order-status-form-input" name="{{name}}"
                    tabindex="{{tabindex}}" value="{{value}}"
                    placeholder="{{placeholder}}"/>
                </div>
              </div>
            {{/each}}
            <div class="sc-order-status-form-actions sc-order-status-form-group">
              <div class="sc-order-status-form-alert-placeholder" data-type="alert-placeholder">
                {{#if isFeedback}}
                  <div data-view="GlobalMessage.Feedback"></div>
                {{/if}}
              </div>
              <button type="submit" class="sc-order-status-form-submit"
                tabindex="{{formControls.buttons.submit.tabindex}}"
                title="{{formControls.buttons.submit.alt}}">
                {{formControls.buttons.submit.label}}
              </button>
            </div>
          </fieldset>
        </form>
      </section>
      <section class="sc-order-status-form-login">
        {{#if viewElements.loginSectionText.show}}
          <p>{{viewElements.loginSectionText.label}}</p>
        {{/if}}
        {{#if viewElements.loginSectionLink.show }}
          <p class="sc-order-status-form-login-section">
            <a href="#" class="sc-order-status-form-login-link"
              data-touchpoint="customercenter" data-hashtag="#/purchases">
              {{viewElements.loginSectionLink.label}}</a>
          </p>
        {{/if}}
      </section>
    </div>
  </div>
</div>
