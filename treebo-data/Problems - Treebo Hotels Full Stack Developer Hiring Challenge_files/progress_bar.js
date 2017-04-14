/**
 * @File: progress_bar.js
 * @Version: 1
 * @Dependencies: JQUERY
 * @Constructor Arguments:
 *      selector: main source element for which upload progress will be tracked
 *                   and it's type can be a 'FORM' or 'INPUT' type,
 *      root_div: parent div element for progressbar widget insertion,
 *      options(optional): js object that contains options and their values as key value pairs
 *
 * @Description: Implements custom progress bar widget for ajax forms with
 * file fields, individual asynchronous file uploads.
 */var HEProgressBar=function(){return function(a,b){var c=this;this.selector=$(a),this.selector_type=$(a)[0].nodeName,this.root_div=$(b),this.files_attached=!1,this.trackProgress=function(){var a=$.ajaxSettings.xhr();if(c.selector_type=="FORM"){var b=$(c.selector).find("input[type=file]");if(b.length>0)for(var d=0;d<b.length;d++)b[d].files.length>0&&(c.files_attached=!0)}else c.selector_type=="INPUT"&&$(c.selector).attr("type")=="file"&&$(c.selector)[0].files.length>0&&(c.files_attached=!0);if(a.upload&&c.files_attached){var e='<div class="clear"></div><div class="progress-bar-container"><div class="progress-label-box"><div class="progress-label text dark">Uploading </div><div class="progress-percentage text dark"></div></div><div class="clear"></div><div class="progress-bar-box"><div class="progress-bar"></div></div><div class="clear"></div></div>';$(c.root_div).html(e);var f=$(c.root_div).find(".progress-bar");a.upload.addEventListener("progress",function(a){if(a.lengthComputable){var b=Math.floor(a.loaded/a.total*100);f.css({width:b+"%"}),$(c.root_div).find(".progress-percentage").html(b+"%  ...")}else debug&&console.log("Unable to compute upload progress!")},!1),a.upload.onload=function(){$(c.root_div).find(".progress-label-box").html("Uploaded. Saving ..."),$(c.root_div).find(".progress-bar").css({"background-color":"#73b369"})}}return a},this.ajax_settings={xhr:this.trackProgress},this.ajax=function(a){c.selector_type=="FORM"&&a.dataType&&delete a.dataType;var a=$.extend({},a,c.ajax_settings),b=a.success;a.success=function(a){response_status=a.status,b(a);if(c.files_attached){var d=3e3;$(c.root_div).find(".progress-bar-container").fadeOut(d);var e="";response_status=="ERROR"?e="An error occured while saving, please try again in sometime.":e="File saved successfully.",addAlert(e,!1)}},$.ajax(a)}}}();