// Session variables
Session.set("enabledContent", {});

// Template navbar events
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

//  Template account events
Template.account.events({
  'submit #login-form' : function(e, t){
    e.preventDefault();
    // retrieve the input field values
    var email = t.find('#login-email').value
      , password = t.find('#login-password').value;

      // Trim and validate your fields here.... 

      // If validation passes, supply the appropriate fields to the
      // Meteor.loginWithPassword() function.
      Meteor.loginWithPassword(email, password, function(err){
      if (err) {
          console.log("Account log in problem");
        // The user might not have been found, or their passwword
        // could be incorrect. Inform the user that their
        // login attempt has failed. 
      }
      else {
        console.log("Login Successful");
        // The user has been logged in.
      }
    });
       return false; 
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
