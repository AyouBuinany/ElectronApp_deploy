let login = document.getElementById('login');

 login.addEventListener('click', () => {

    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    
    
    if(user == "ayoub" && password == "ayoub"){

      const myNotification = new Notification('Notification', {
        body: 'login Admin successfully'
    })
  window.location.href="HomeConducteur.html";
    }
    else{
      alert("Username or Password invalid !!!!!!!!!!");
     }
})
// ------------------------------------------------------------------




