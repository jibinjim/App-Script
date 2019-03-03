function classes() {
  
  // the mail service cannot access the gmail accounts
  Logger.log(MailApp.getRemainingDailyQuota());
  
  MailApp.sendEmail(
  'jibinjim@gmail.com',
  'MailApp service tutorial',
  'Using the MailApp to send an email'
  );
  
  
  // complicated email 
  
  var bookBlob = DriveApp.getFileById('1apNnuyOiUO_bOzQwVXHzrDj3hY7T1kYU')
  .getBlob()
  .setName('bookBlob');
  
  // some of the available options
  
  MailApp.sendEmail({
  to: 'jibinjim@gmail.com',
  subject: 'Jibin sulaimani kudikkuna photo',
  inlineImages:{
  bookCover:bookBlob
  },
  htmlBody:'<h1> Jibinte sulaimani kadha!</h1>' +
  ' Evidence: <br><img src="cid:bookCover">',
  attachments:[bookBlob]
  });
  
  
  // searching messages | They are organised by threads
  
  var threads = GmailApp.search(
    'subject:"Jibin sulaimani kudikkuna photo"'
  );
  
  Logger.log(threads.length + ' matching results');
  
  // messages are children of a thread
  var messages = threads[0].getMessages();
  Logger.log(messages[0].getPlainBody());
  
  // attachments are associated with messages
  
  threads.forEach(function(d){
    d.getMessages().forEach(function(e){
      e.getAttachments().forEach(function(f){
        Logger.log('attachment: ' + f.getName());
      });
    });
  });
  
  // sending email with GmailApp - similar to MailApp
  
  
  GmailApp.sendEmail(
  'jibinjim@gmail.com',
  'MailApp service tutorial',
  'Using the MailApp to send an email'
  );
  
  
  
  // labels are attached to threads, get or create one
  
  var LABEL_NAME = 'Tutorial';
  var label = GmailApp.getUserLabelByName(LABEL_NAME) ||
    GmailApp.createLabel(LABEL_NAME);
  
  //associate with thread
  threads.forEach(function(d){
    d.addLabel(label);
  });
  
  var threads = GmailApp.search('label:'+ label.getName());
  Logger.log(threads.length+' associated with ' + label.getName());
  
  /*
  delete them all
  threads.forEach(function(d){
  d.moveToTrash();
  });
  */
  
}
