
function getMessage(client) {
  var message = client.cheese > 0 ? client.cheese + " cheese" : "";
  message += client.cheese > 0 && client.pepperoni > 0 ? " and " : "";
  message += client.pepperoni > 0 ? client.pepperoni + " pepperoni" : "";
  message += client.cheese + client.pepperoni > 1 ? " pizzas" : " pizza";

  return message;
}

jQuery(document).ready(function() {
  var orders = JSON.parse(Cookies.get("allClients"));
  for (var i in orders) {
    $("#order").append("<li>" + orders[i].name + " - " + getMessage(orders[i]) + "</li>");
  }
});
