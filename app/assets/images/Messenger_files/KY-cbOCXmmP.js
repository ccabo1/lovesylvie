if (self.CavalryLogger) { CavalryLogger.start_js(["Nmq32"]); }

__d("ClickRefUtils",["DataAttributeUtils"],(function a(b,c,d,e,f,g){var h={get_intern_ref:function i(j){if(!!j){var k={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var l=j;l&&l!=document.body;l=l.parentNode){if(!l.id||typeof l.id!=="string")continue;if(l.id.substr(0,8)=="pagelet_")return l.id.substr(8);if(l.id.substr(0,8)=="box_app_")return l.id;if(k[l.id])return l.id}}return"-"},get_href:function i(j){var k=j.getAttribute&&(j.getAttribute("ajaxify")||j.getAttribute("data-endpoint"))||j.action||j.href||j.name;return typeof k==="string"?k:null},should_report:function i(j,k){if(k=="FORCE")return true;if(k=="INDIRECT")return false;return j&&(h.get_href(j)||j.getAttribute&&c("DataAttributeUtils").getDataFt(j))}};f.exports=h}),null);