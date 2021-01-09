$(document).ready(function(){
  //current time
  //update every 10 seconds;
  setCurrentTime();
  setInterval(function(){
    setCurrentTime();
  },10*1000);

  var username = "Welcomes You ";
  //check cookie

  $('.greeting').html(`CTON <span class="stored-name">${username}</span>`);

  $('.user-name').keypress(function(e) {
    if(e.which == 13) {
      var username = e.target.value;
      if(!username) return;
      $('.user-name').fadeOut(function(){
        $('.greeting').html(`Hello ${username}.`);
        $('.greeting').fadeIn(function(){
          setCookie('username', username,365);
        });
      });
    }
  });

});

function setCurrentTime(){
  var now = new Date();
  $('.time').html(now.getHours()+":"+now.getMinutes())
  $('.date').html(now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }));
}
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}