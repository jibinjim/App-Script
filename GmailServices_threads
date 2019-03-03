function threads() {
  // get matching threads
  var threads = GmailApp.search(
    'subject:"Jibin sulaimani kudikkuna photo"'
  );
  
  // just use the first one
  var thread = threads[0];
  
  // how many messages in first thread
  var messages = thread.getMessages();
  Logger.log(messages.length);
  
  // show messages contents
  
  messages.forEach(function(d){
    Logger.log('plain: ' + d.getPlainBody());
    Logger.log('regular: ' + d.getBody());
    Logger.log('raw: ' + messages[0].getRawContent());
  });
  
  //replying to thread
  
  thread.reply('Got it, thanks!');
  
  //get that thread
  var threads = GmailApp.search(
    'subject:"Jibin sulaimani kudikkuna photo" "Got it, thanks!"'
  );
  
  // in case the message hasn't come yet!
  
  if(!threads.length){
    throw 'mail hasnt arrived yet! - try again';
  }
  
  var thread = threads[0];
  
  // thread level info
  
  Logger.log(thread.getMessageCount());
  Logger.log(thread.getFirstMessageSubject());
  Logger.log(thread.getLastMessageDate());
  
  if(!thread.getMessageCount()){
    throw 'messages havent arrived yet! - try again';
  }
  
  // extract messages
  
  var messages = thread.getMessages();
  
  // filter messages
  
  var message = messages.filter(function(d){
    return d.getPlainBody().indexOf('Got it, thanks!')!== -1;
  })[0];
  
  // find out who it was from
  Logger.log(message.getFrom());
  
  // star it
  
  message.star();
  Logger.log('starred?' + message.isStarred());
  
  // threads can be marked
  thread.markImportant();
  
  
}
