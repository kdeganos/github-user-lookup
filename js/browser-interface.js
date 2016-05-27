var apiKey = require('./../.env').apiKey;
var Lookup = require('./../js/lookup.js').Lookup;

// $(document).ready(function() {
//   var lookup = new Lookup();
//   $('#userNameButton').click(function() {
//     var userName = $('#userName').val();
//     lookup.getRepos(userName);
//     console.log(userName);
//   });
// });

$(document).ready(function() {
  var lookup = new Lookup();
  $('#userNameButton').click(function() {
    var userName = $('#userName').val();
    $.get('https://api.github.com/users/kdeganos?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
