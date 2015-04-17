// to Diane: since we were talking about constructors for object prototypes right before the asssement, I figured that since there's a 1001 ways to do things in JavaScript, there must be a cleaner way. Here's what I came up with. I understand how to do it with Object.create and how to create an init function inside, but to me this way is simpler and cleaner and evidently more compatible with old browsers according some posts on StackExchange. I'm using the "new" keyword to instantiate new instances of Client. It's visualy very similar to Java and PHP, so that's probably why it looks prettier to me. Anyways, I blew most of the morning trying to figure this out, so please forgive the blah front-end.

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

      var message = cheese > 0 ? cheese + " cheese" : "";
      message += cheese > 0 && pepperoni > 0 ? " and " : "";
      message += pepperoni > 0 ? pepperoni + " pepperoni" : "";
      message += cheese + pepperoni > 1 ? " pizzas" : " pizza";
      
      $("#order").text(message);
      $("#message").show();
      debugger;
    });
  });
});
