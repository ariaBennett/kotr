
Session.set("showCalendar", false);

Template.navbar.events({
  'click .navbar_button_calendar': function () {
    if (Session.get("showCalendar", true)) {
      Session.set("showCalendar", false);
    }
    else {
      Session.set("showCalendar", true);
    }
  }
});

Template.page.showCalendar = function () {
  return Session.get("showCalendar");
}
