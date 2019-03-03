function services() {
  
  // spreadsheet service - 
  
  var ss = SpreadsheetApp.openById(
    '1XXtDLGCMpS-YBz35lGhalNkNxW_blZPI_JsPE5SGCvo' 
  ); // change the vaue to the sheet ID
  
  var sheet = ss.getSheetByName('tutorial'); // default sheet name is 'Sheet1'
  
  var range = sheet.getDataRange();
  
  var data = range.getValues();
  
  Logger.log(JSON.stringify(data));
  
  contact service
  
  var contact = ContactsApp.createContact(
  'Robot', 'Bond', 'robot@bond.com'
  ); // givenName, familyName, email
  
  // get that contact
  
  var robot_contact = ContactsApp.getContact('robot@bond.com');
  
  Logger.log(robot_contact.getFullName() + ' ' + robot_contact.getPrimaryEmail() );
  
  delete a contact
  
  ContactsApp.deleteContact(robot_contact);
  
  
  
  // calendar service
  
  var calendar = CalendarApp.getDefaultCalendar();
  
  var startTime = new Date(new Date().getTime() + 1000 * 60 * 60);
  var endTime = new Date(startTime.getTime() + 1000 * 60 * 60);
  var event = calendar.createEvent(
  'Test Meeting', startTime, endTime, {
  location: 'home',
  guests: robot_contact.getPrimaryEmail()
  }
  );
  
  /*
  
  event.deleteEvent();
  
  */
  
  // drive service | write data from sheet to drive file
  
  var file = DriveApp.createFile(
    'datafromsheet.json', JSON.stringify(data), MimeType.PLAIN_TEXT
  );
  
  // gmail service || send an email with link to the file
  
  GmailApp.sendEmail(
    'jj@jibinjose.com', 'data from ' + ss.getName(), 
    'Please find the attachment for the json file', {
      attachments:[file.getBlob()]
    });
  
  /*
  
  file.setTrashed(true); || delete file
  
  */
  
  // document services
  
  var doc = DocumentApp.create('servicesdoc');
  var body = doc.getBody();
  
  // append new para
  
  body.appendParagraph('JJs app script tutorial');
  
  /* delete doc
  
  var docFile = DriveApp.getFileById(doc.getId());
  docFile.setTrashed(true);
  
  */
  
  // language service - get emails and translate them
  
  var threads = GmailApp.search(
    'has:attachment "the json file" in:inbox subject:data'
  );
  
  threads.forEach(function (d){
    d.getMessages().forEach (function (m){
      Logger.log(
        LanguageApp.translate(m.getPlainBody(), 'en', 'fr')
      );
    });
  });
  
  
  
  // maps service
  
  var directions = Maps.newDirectionFinder()
  .setOrigin('Sunrise Hospital, Kakkanad, India')
  .setDestination('Abad Green Terrace, Kakkanad, India')
  .setMode(Maps.DirectionFinder.Mode.WALKING)
  .getDirections();
  Logger.log(directions.routes[0].legs[0].duration.text);
  
  
  // site services
  
  var site = SitesApp.getSite('mcpher.com', 'share');
  Logger.log(site.getTitle());
  
  // groups service
  
  var groups = GroupsApp.getGroups();
  Logger.log('You are a member of %s Google Groups! ',groups.length);
  
  // forms service
  
  var form = FormApp.create('App Script Tutorial Form');
  var item = form.addCheckboxItem();
  item.setTitle('Do you like this tutorial so far?');
  item.setChoices([
    item.createChoice('Yes'),
    item.createChoice('No')
    ]);
  Logger.log(form.getPublishedUrl());
  
  /*URLFetch - External data / APIs
  var response = UrlFetchApp.fetch(
    'http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&format=json'
  );
  Logger.log(response.getContentText());
  */
  

}

