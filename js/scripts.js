function Client() {
  this.cheese = 0;
  this.pepperoni = 0;

  this.addPizza = function(type, number) {
    this[type] += number;
  };
}


jQuery(document).ready(function() {
  $("#").focus();
  $("#").submit(function(event) {
    event.preventDefault();
  });
});
