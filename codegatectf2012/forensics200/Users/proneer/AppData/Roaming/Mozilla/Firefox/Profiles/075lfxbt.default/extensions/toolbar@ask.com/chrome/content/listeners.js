/*
 * Copyright (C) 2008-2010 APN, LLC. All rights reserved
 * References to external sources embedded in the code.
 * 
 * Author: Vishal V. Shah
 * Description: Browser event listeners/observers.
 */
var ATB_ExtnMgrListener=function(){this.uninstallATB=false;this.register()};ATB_ExtnMgrListener.prototype={observe:function(b,a,c){ATB.Logger.debug("ATB.ExtnMgrListener#observe called with subject: ",b," and topic: ",a," and data: ",c);if(a=="em-action-requested"){b.QueryInterface(Components.interfaces.nsIUpdateItem);if(b.id==ATB.Prefs.getToolbarId()){if(c=="item-uninstalled"){ATB.Logger.info("Uninstall of ATB has been *requested*");this.uninstallATB=true}else{if(c=="item-cancel-action"){this.uninstallATB=false;ATB.Logger.info("Uninstall of ATB has been *cancelled*")}}}}else{if(a=="quit-application-granted"){if(this.uninstallATB){if(ATB.Prefs.isSAEnabled()){ATB.Logger.info("Uninstall of ATB to be *kicked in*. Resetting keyword.URL..");ATB.Prefs.resetKeywordURLPref();ATB.Logger.info("Reset complete.")}}this.unregister()}}},register:function(){ATB.Logger.debug("ATB.ExtnMgrListener: Registering observers using nsIObserverService...");const a=Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);a.addObserver(this,"em-action-requested",false);a.addObserver(this,"quit-application-granted",false);ATB.Logger.debug("Registered ATB.ExtnMgrListener.")},unregister:function(){ATB.Logger.debug("ATB.ExtnMgrListener: Unregistering observers using nsIObserverService...");const b=Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);try{b.removeObserver(this,"em-action-requested");b.removeObserver(this,"quit-application-granted")}catch(a){}ATB.Logger.debug("ATB.ExtnMgrListener unregistered.")}};var ATB_SimpleTopicObserver=function(a,c,b){if(c){this.callback=c}if(a){this.topic=a;this.register()}this.context=b};ATB_SimpleTopicObserver.prototype={topic:"",callback:null,context:null,_isRegistered:false,observe:function(b,a,c){ATB.Logger.debug("SimpleTopicObserver#observe called with subject: ",b," and topic: ",a," and data: ",c);if(a==this.topic){if(this.callback&&this.context){this.callback.call(this.context,b,a,c)}else{if(this.callback){this.callback(b,a,c)}}}else{if(a=="quit-application-granted"){this.unregister()}}},register:function(){ATB.Logger.debug("SimpleTopicObserver: Registering observer for: ",this.topic);const a=Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);a.addObserver(this,this.topic,false);a.addObserver(this,"quit-application-granted",false);this._isRegistered=true;ATB.Logger.debug("Registered SimpleTopicObserver")},unregister:function(){ATB.Logger.debug("SimpleTopicObserver: Removing observer for: ",this.topic);if(this._isRegistered){const b=Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);try{b.removeObserver(this,this.topic);b.removeObserver(this,"quit-application-granted");this._isRegistered=false}catch(a){}ATB.Logger.debug("SimpleTopicObserver unregistered")}else{ATB.Logger.debug("SimpleTopicObserver was already removed")}}};