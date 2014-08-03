// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//                 
/* See http://railsapps.github.io/rails-javascript-include-external.html for information about how 
Rails packages site-wide scripts in the app/assets/javascripts/ folder into a minimized application.js file. */
                              
/* NB that automatic includes from this file only occurs if the application is using the asset pipeline.      
Per http://api.rubyonrails.org/v3.2.13/classes/ActionView/Helpers/AssetTagHelper/JavascriptTagHelpers.html : 
If we weren't using the asset pipeline, we'd have to include the following line on each page (?) : 
javascript_include_tag :defaults
which would result in a markup of 
<script type="text/javascript" src="/javascripts/jquery.js?1284139606"></script>
<script type="text/javascript" src="/javascripts/rails.js?1284139606"></script>
<script type="text/javascript" src="/javascripts/application.js?1284139606"></script> 
*/

/* per http://stackoverflow.com/questions/8558472/javascript-included-twice-in-a-rails-3-1-asset-based-app , */    
/* leave the following line empty, to apparently avoid duplication :  */    

//= require jquery      
//= require jquery-ui
//= require jquery_ujs   
//= require turbolinks
//= require_tree .
