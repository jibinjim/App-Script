function plus() {
  
  // enable api first -> Resources -> Advanceed Google Services -> Google Plus API
  
  var post = Plus.Activities.list('me', 'public',{
    maxResults:5
  });
  
  Logger.log(post);
}
