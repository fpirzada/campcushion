<section class="featuredcategorycct-container {{#unless hasItems}}featuredcategorycct-container-empty{{/unless}}">

  <div class="content featuredcategoryCCT">
    {{#if hasHeader}}
      <div class="featuredcategorycct-header-align-{{headerPosition}}">
        {{#if headerIsHtml}}
          {{#if headerAllowLink}}
            <a href="{{customUrl}}" data-action="goToCategory">
              <div class="featuredcategorycct-header-container">
                {{{headerText}}}
              </div>
            </a>
          {{else}}
            <div class="featuredcategorycct-header-container">
              {{{headerText}}}
            </div>
          {{/if}}
        {{else}}
          {{#if headerAllowLink}}
            <a href="{{customUrl}}" data-action="goToCategory">
              <h3 class="featuredcategorycct-header-container">{{headerText}}</h3>
            </a>
          {{else}}
            <h3 class="featuredcategorycct-header-container">{{headerText}}</h3>
          {{/if}}
        {{/if}}
      </div>
    {{/if}}
    <div
            data-view="FeaturedCategory.Items.View"
            class="row-flex featuredcategorycct-grid">
    </div>
    <div class="featuredcategorycct-button-wrapper">
      <div data-view="FeaturedCategory.Button.View"></div>
    </div>
  </div>
</section>
