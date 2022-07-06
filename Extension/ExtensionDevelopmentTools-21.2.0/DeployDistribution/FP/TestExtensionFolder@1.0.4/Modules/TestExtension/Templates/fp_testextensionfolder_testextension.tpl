<style>
#_myCart{
display:none}
#_profileBalance{display:none}

</style>


<h2>Hi {{ message.CustomerName }}, Welcome Back</h2>
<span>Not  {{ message.CustomerName }}, <a href="/logOut.ssp?logoff=T&ckabandon=T" data-touchpoint="logout"   name="signout">Log Out</a></span>

<div id="_myCart">
{{message.myCart}}
</div>

<div id="_profileBalance">
{{message.profileBalance}}
</div>

<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->