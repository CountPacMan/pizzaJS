describe("PizzaJS - scripts.js", function() {
  describe("addPizza("cheese", 3)", function() {
    it("adds 3 cheese pizzas to the client's total", function() {
      var testClient = Object.create(Client).init();
      testPlayer.addPizza("cheese", 3);
      expect(testClient.cheese).to.equal(3);
    });
  });
});
