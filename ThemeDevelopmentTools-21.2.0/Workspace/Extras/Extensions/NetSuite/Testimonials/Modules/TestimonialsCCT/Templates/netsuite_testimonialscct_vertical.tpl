<section class="testimonial center {{textColor}}">
  <h3 class="text-center testimonial-header">{{headerName}}</h3>

  <div class="row hidden-xs testimonial-content">
    {{#each testimonials}}
      {{#if ../linkArea.isEntireArea }} {{#if hasLink}}<a href="{{link}}" target="{{../target}}">{{/if}} {{/if}}
      <div class="testimonial-link-area-{{id}} {{singlePadding ../testimonials}} text-center col-md-{{columnSize../testimonials}}">
        {{#if hasImageURL}}
          {{#if ../linkArea.isImage }} {{#if hasLink}}<a href="{{link}}" target="{{../target}}">{{/if}} {{/if}}
          <img class="testimonial-link-image-{{id}} testimonial-image {{../imageStyle}}" src="{{imageURL}}"
               alt="{{altText}}" title="{{altText}}">
          {{#if ../linkArea.isImage }} {{#if hasLink}}</a>{{/if}} {{/if}}
        {{/if}}
        {{#if hasTextBody}}
          <div class="testimonial-content-paragraph center-text">{{textBody}}</div>
        {{/if}}
        {{#if hasTitle}}
          {{#if ../linkArea.isTitle }} {{#if hasLink}}<a href="{{link}}" target="{{../target}}">{{/if}} {{/if}}
          <div class="testimonial-link-title-{{id}} testimonial-content-title">{{title}}</div>
          {{#if ../linkArea.isTitle }} {{#if hasLink}}</a>{{/if}} {{/if}}
        {{/if}}
        {{#if hasSubTitle}}
          {{#if ../linkArea.isSubtitle }} {{#if hasLink}}<a href="{{link}}" target="{{../target}}">{{/if}} {{/if}}
          <div class="testimonial-link-subtitle-{{id}} testimonial-content-subtitle">{{subTitle}}</div>
          {{#if ../linkArea.isSubtitle }} {{#if hasLink}}</a>{{/if}} {{/if}}
        {{/if}}
      </div>
      {{#if ../linkArea.isEntireArea }} {{#if hasLink}}</a>{{/if}} {{/if}}
    {{/each}}
  </div>

</section>
