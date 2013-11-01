// Session variables
Session.set("enabledContent", {});

// Template events
Template.navbar.events({
  'click .navbar_button_calendar': function () {
    var enabledContent = Session.get("enabledContent") ;
    if (enabledContent["calendar"]) {
      enabledContent["calendar"] = false ;
    }
    else {
      enabledContent["calendar"] = true;
    }
    Session.set("enabledContent", enabledContent) ;
  } ,
  'click .navbar_button_login': function () {
    var enabledContent = Session.get("enabledContent") ;
    if (enabledContent["account"]) {
      enabledContent["account"] = false ;
    }
    else {
      enabledContent["account"] = true;
    }
    Session.set("enabledContent", enabledContent) ;
  }
});

// Template functions
Template.page.showCalendar = function () {
  return (Session.get("enabledContent"))["calendar"];
}

Template.page.showCalendarButtons = function () {
  return (Session.get("enabledContent"))["calendarButtons"];
}

Template.page.showAccount = function () {
  return (Session.get("enabledContent"))["account"];
}

// functions
disableAll = function () {
  Session.set("enabledContent", {})
}
