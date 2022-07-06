<section class="testimonial center {{textColor}}">
  <h3 class="text-center testimonial-header">{{headerName}}</h3>

  <div class="testimonial-slider" id="testimonial-slider-{{cctInstanceId}}">
    {{#each testimonials}}
      {{#if ../linkArea.isEntireArea }} {{#if hasLink}}<a href="{{link}}" target="{{../target}}">{{/if}} {{/if}}
      <div class="testimonial-slide">
        <div class="testimonial-link-area-{{id}} testimonial-content">
          <div class="row">
            <div class="testimonial-flex">
              {{#if hasImageURL}}
                  <div class="col-xs-12 col-md-3 col-lg-3">
                    <div class="text-center">
                      {{#if ../linkArea.isImage }} {{#if hasLink}}<a href="{{link}}" target="{{../target}}">{{/if}} {{/if}}
                      <img class="testimonial-link-image-{{id}} testimonial-image {{../imageStyle}}" src="{{imageURL}}"
                           alt="{{altText}}" title="{{altText}}"/>
                      {{#if ../linkArea.isImage }} {{#if hasLink}}</a>{{/if}} {{/if}}
                    </div>
                  </div>
              {{/if}}
              <div class="col-xs-12 col-md-9 col-lg-9">
                {{#if hasTextBody}}
                  <div class="testimonial-content-paragraph">{{textBody}}</div>
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
            </div>
          </div>
        </div>
      </div>
      {{#if ../linkArea.isEntireArea }} {{#if hasLink}}</a>{{/if}} {{/if}}
    {{/each}}
  </div>

</section>
