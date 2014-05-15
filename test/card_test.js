// test/card_test.js
var expect = require('chai').expect,
  Card = require('../lib/card.js');

describe('Card function', function() {
  var card;

  beforeEach(function() {
    card = new Card('spade', 6);
  });

  describe('constructor', function() {

    it('card should be truthy (exists)', function() {
      expect(card).to.be.ok; //jshint ignore: line
    });

    it('card should have rank property', function() {
      expect(card).to.have.property('rank');
    });

    it('card should have suit property', function() {
      expect(card).to.have.property('suit');
    });

    it('card rank property matches beforeEach', function() {
      expect(card.rank).to.equal(6);
    });

    it('card suit property matches beforeEach', function() {
      expect(card.suit).to.equal('spade');
    });

  });
});