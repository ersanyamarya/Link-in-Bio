document.getElementById("vcard-button").addEventListener("click", () => {
  var firstName = "Sanyam";
  var lastName = "Arya";
  var title = "Entrepreneur";
  var phoneNumber = "+491703380307";
  var email = "er.sanyam.arya@gmail.com";
  var website = "https://www.sanyamarya.com";
  var photoURL = "https://www.sanyamarya.com/profile.png";

  loadvcard(firstName, lastName, title,  phoneNumber, email, website, photoURL);
});

function loadvcard(firstName, lastName, title, phoneNumber, email, website, photoURL) {
  var data = `BEGIN:VCARD\r\nVERSION:3.0\r\nN:${lastName};${firstName}\r\nFN:${firstName} ${lastName}\r\nTITLE:${title}\r\nTEL;TYPE=WORK,VOICE:${phoneNumber}\r\nEMAIL;TYPE=PREF,INTERNET:${email}\r\nURL:${website}\r\nPHOTO;VALUE=URL;TYPE=JPEG:${photoURL}\r\nEND:VCARD`;
  window.open("data:text/x-vcard," + encodeURIComponent(data));
}
