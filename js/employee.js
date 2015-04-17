var allClients = [];
if (JSON.parse(Cookies.get("allClients")).length > 0) {
  allClients = JSON.parse(Cookies.get("allClients"));
}

function getMessage(client) {
  var message = client.cheese > 0 ? client.cheese + " cheese" : "";
  message += client.cheese > 0 && client.pepperoni > 0 ? " and " : "";
  message += client.pepperoni > 0 ? client.pepperoni + " pepperoni" : "";
  message += client.cheese + client.pepperoni > 1 ? " pizzas" : " pizza";

  return message;
}

function getClientIndex(id) {
  for (var i in allClients) {
    if (allClients[i].id === id) {
      return i;
    }
  }
  return -1;
}

// since cookies are stored as JSON, methods don't transfer with the object. I had to recreate the getCost method here
function getCost(client) {
  client.cheese = +client.cheese || 0;
  return (client.cheese * 10 + client.pepperoni * 12.50).toFixed(2);
}

jQuery(document).ready(function() {
  for (var i in allClients) {
    $("#order").append("<li>" + "<span class='delete'>x </span>" + allClients[i].name + " - " + getMessage(allClients[i]) + " = $<span class='text-info'>" + getCost(allClients[i]) +"</span></li>");

    // add attribute with the client id to the delete x span
    $(".delete").last().attr("value", allClients[i].id);
    $(".delete").last().click(function(event) {
      event.preventDefault();
      // pull the client id from the the delete x span and delete from array
      var thisClientId = $(this).attr("value");
      var clientIndex = getClientIndex(thisClientId);
      allClients.splice(clientIndex, 1);
      Cookies.set("allClients", JSON.stringify(allClients));
      $(this).parent().remove();
    });
  }

  $("#client-btn").click(function(event) {
    event.preventDefault();
    window.open('index.html','_self',false);
  });
});
