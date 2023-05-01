$(document).ready(function() {
    $('#generate-btn').click(function() {
      $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          var user = data.results[0];
          var name = user.name.first + ' ' + user.name.last;
          var email = user.email;
          var phone = user.phone;
          var address = user.location.street.number + ' ' + user.location.street.name + ', ' + user.location.city + ', ' + user.location.state + ' ' + user.location.postcode;
          var userRow = '<tr><td>' + name + '</td><td>' + email + '</td><td>' + phone + '</td><td>' + address + '</td></tr>';
          $('#user-info').append(userRow);
        }
      });
    });
  });
  