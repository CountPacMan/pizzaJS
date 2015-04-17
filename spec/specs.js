describe('PizzaJS - scripts.js', function() {
  describe('addPizza("cheese", 3)', function() {
    it("adds 3 cheese pizzas to the client's total", function() {
      var testClient = new Client();
      testClient.addPizza("cheese", 3);
      expect(testClient.cheese).to.equal(3);
    });
  });

  describe('addPizza("pepperoni", 2)', function() {
    it("adds 2 pepperoni pizzas to the client's total", function() {
      var testClient = new Client();
      testClient.addPizza("pepperoni", 2);
      expect(testClient.pepperoni).to.equal(2);
    });
  });

  describe('addPizza("pepperoni", 2) and addPizza("cheese", 3)', function() {
    it("adds 2 pepperoni and 3 cheese pizzas to the client's total", function() {
      var testClient = new Client();
      testClient.addPizza("pepperoni", 2);
      testClient.addPizza("cheese", 3);
      expect([testClient.pepperoni, testClient.cheese]).to.deep.equal([2, 3]);
    });
  });

  describe('addPizza("pepperoni", 2) and removePizza("pepperoni", 1)', function() {
    it("adds 2 pepperoni pizzas and removes 1", function() {
      var testClient = new Client();
      testClient.addPizza("pepperoni", 2);
      testClient.removePizza("pepperoni", 1);
      expect(testClient.pepperoni).to.equal(1);
    });
  });
});
