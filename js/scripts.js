var allClients = [];

function Client() {
  this.name = "";
  this.cheese = 0;
  this.pepperoni = 0;

  this.addPizza = function(type, number) {
    this[type] += number;
  };

  this.removePizza = function(type, number) {
    this[type] -= number;
  };
}

function getMessage(client) {
  var message = client.cheese > 0 ? client.cheese + " cheese" : "";
  message += client.cheese > 0 && client.pepperoni > 0 ? " and " : "";
  message += client.pepperoni > 0 ? client.pepperoni + " pepperoni" : "";
  message += client.cheese + client.pepperoni > 1 ? " pizzas" : " pizza";

  return message;
}

jQuery(document).ready(function() {
  $("#name").focus();
  $("#name-form").submit(function(event) {
    event.preventDefault();
    $("#name-form").hide();

    var clientName = $("#name").val();
    var newClient = new Client();
    newClient.name = clientName;

    $("#client-name").text(clientName);
    $("#order-form").show();

    $("#order-form").submit(function(event) {
      event.preventDefault();
      $("#order-form").hide();

      var cheese = parseInt($("#cheese").val());
      var pepperoni = parseInt($("#pepperoni").val());
      newClient.addPizza("cheese", cheese);
      newClient.addPizza("pepperoni", pepperoni);

      allClients.push(newClient);

      var message = getMessage(newClient);

      $("#order").text(message);
      $("#message").show();

      $("#new-order").click(function(event) {
        $("#message").hide();
        $("input").val("");        
        $("#name-form").show();
        $("#name").focus();
      });
    });
  });
});
