{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

{{! Edited for Bridge Theme }}

 <div id="site-logo" class="content-banner rush"></div>

<a class="header-logo" href="{{headerLinkHref}}" data-touchpoint="{{headerLinkTouchPoint}}" data-hashtag="{{headerLinkHashtag}}" title="{{headerLinkTitle}}">
    {{#if logoUrl}}
        <img class="header-logo-image" src="https://4420736.app.netsuite.com/core/media/media.nl?id=26422&c=4420736&h=qG-ioEqBiUE5W4IS_IKKsYYoRFkcbNFvTwX-QqkBNMy_C5EM&fcts=20220622085556&whence=" alt="{{siteName}}">
    {{else}}
        <span class="header-logo-sitename">
            {{siteName}}
        </span>
    {{/if}}
</a>




{{!----
Use the following context variables when customizing this template:

	logoUrl (String)
	headerLinkHref (String)
	headerLinkTouchPoint (String)
	headerLinkHashtag (String)
	headerLinkTitle (String)

----}}
