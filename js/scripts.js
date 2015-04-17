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
  $("#").submit(function(event) {
    event.preventDefault();
  });
});
