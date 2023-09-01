const firebaseConfig = {
  apiKey: "AIzaSyCz_gJrcEQabQhdf79rstXf5AKCQ_lmG6c",
  authDomain: "contactform-c8836.firebaseapp.com",
  databaseURL: "https://contactform-c8836-default-rtdb.firebaseio.com",
  projectId: "contactform-c8836",
  storageBucket: "contactform-c8836.appspot.com",
  messagingSenderId: "572229037158",
  appId: "1:572229037158:web:361fd8b895dfa4947c91a7"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

function submitData() {
  // e.preventDefault();

  var name = getElementVal("username");
  var mobNum = getElementVal("mobNum");
  var emailid = getElementVal("email");
  var subject = getElementVal("subject");
  var msgContent = getElementVal("message");


  saveMessages(name, mobNum, emailid, subject, msgContent);

  // console.log(name);
  alert("Data Sent Successfully");
 

  //   reset the form
  document.getElementById("create-account-form").reset();
}

const saveMessages = (name, mobNum, emailid, subject, msgContent) => {
  // var newContactForm = contactFormDB.push();
  
  firebase
  .database()
  .ref("contactForm/" + mobNum)
  .set({
    name: name,
    mobile_num: mobNum,
    emailid: emailid,
    subject: subject,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
