{{#each sections}}
  <div class="sc-order-status-details-section">
    {{#each lines}}
      <p>
        {{#if link}}
          <a href="{{url}}" target="_blank">
        {{/if}}
        {{#if small}}
          <small>
        {{/if}}
        {{#if strong}}
          <strong>
        {{/if}}
          {{value}}
        {{#if strong}}
          </strong>
        {{/if}}
        {{#if small }}
          </small>
        {{/if}}
        {{#if link}}
          </a>
        {{/if}}
      </p>
    {{/each}}
  </div>
{{/each}}
