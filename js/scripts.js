var allClients = [];
if (JSON.parse(Cookies.get("allClients")).length > 0) {
  allClients = JSON.parse(Cookies.get("allClients"));
}

function Client() {
  this.name = "";
  this.id = "";
  this.cheese = 0;
  this.pepperoni = 0;

  this.addPizza = function(type, number) {
    this[type] += number;
  };

  this.removePizza = function(type, number) {
    this[type] -= number;
  };

  this.generateId = function() {
    this.id = this.name + Math.floor(Math.random() * 999999) + 1;
  }

  this.getCost = function() {
    return (this.cheese * 10 + this.pepperoni * 12.50).toFixed(2);
  }
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
    $("#employee-login").hide();

    var clientName = $("#name").val();
    newClient = new Client();
    newClient.name = clientName;
    newClient.generateId();

    $("#client-name").text(clientName);
    $("#order-form").show();

    $("#order-form").submit(function(event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      $("#order-form").hide();
      var cheese = parseInt($("#cheese").val());
      var pepperoni = parseInt($("#pepperoni").val());
      newClient.addPizza("cheese", cheese);
      newClient.addPizza("pepperoni", pepperoni);

      allClients.push(newClient);
      Cookies.set("allClients", JSON.stringify(allClients));
      var message = getMessage(newClient);

      $("#order").text(message);
      $("#message").show();

      delete newClient;

      $("#new-order").click(function(event) {
        $("#message").hide();
        $("input").val("");
        $("#name-form").show();
        $("#employee-login").show();
        $("#name").focus();
      });
    });
  });

  $("#employee-btn").click(function(event) {
    event.preventDefault();
    window.open('employee.html','_self',false);
  });
});
