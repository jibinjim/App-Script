function classes() {
  
  //tidy up from previous runs
  
  ContactsApp.getContactsByName('Robot Bond').forEach(function(d){
    d.deleteContact();
  });
  
  //contact services via contactsApp
  
  var contact = ContactsApp.createContact(
    'Robot', 'Bond', 'jj@jibinjose.com'
  );
  
  // fields in contact
  contact.addAddress(
    ContactsApp.Field.HOME_ADDRESS,
    'Abad green terrace apartments, kakkanad, kerala'
  );
  
  // using built in label
  contact.addPhone(
    ContactsApp.Field.HOME_PHONE,
    '+91 9633908735'
  );
  
  // custom label
  
  contact.addPhone(
    'Agents Number', 911
  );
  
  // custom fields
  contact.addCustomField(
    'Nuisance Factor',
    ContactsApp.Priority.HIGH
  );
  
  ['The Phantom Menace',
   'Attack of the Clone',
   'Revenge of the Sith'
  ]
  .forEach(function(d,i){
    contact.addCustomField('Appearance '+ (i+1), d);
  });
  
  // get custom fields
  
  contact.getCustomFields().forEach(function(d){
    Logger.log(d.getLabel() + ":" + d.getValue());
  });
  
  // special getter
  Logger.log(contact.getFullName());
  
  // get regular fields
  contact.getPhones().forEach(function(d){
    Logger.log(d.getLabel() + ':' + d.getPhoneNumber());
  });
  
  // get special field
  
 Logger.log(
  contact.getPhones('Agents Number')[0].getPhoneNumber() 
 );
  
  // date field with regualr label
  
  contact.addDate(
    ContactsApp.Field.BIRTHDAY, ContactsApp.Month.MAY, 22, 1991
  );
  
  // add field with custom label
  
  contact.addDate(
    'Tutorials', ContactsApp.Month.MARCH, 03, 2019
  );
}
