'use strict';

define(['hello', 'nerpin-item', 'nerpin-item/micron', 'data'], function(Nerpin, NerpinItem, Micron, data) {
  describe(Nerpin, function () {
    var nerpin;

    beforeEach(function(done) {
      nerpin = new Nerpin(data, NerpinItem);
      done();
    });

    describe('instantiation', function () {
      it('instatiates', function () {
        expect(nerpin).to.be.an.instanceof(Nerpin);
      });
    });

    describe('#items', function () {
      it('has items', function () {
        var items = nerpin.items();

        expect(items).to.have.length(234);
        expect(items[0]).to.be.an.instanceof(NerpinItem);
      });
    });
  });

  describe(NerpinItem, function () {
    var item;
    var name = 'unison_detune';
    var attrs = {
      id : 2,
      min : 0,
      max : 100
    };

    describe('Base', function() {
      beforeEach(function(done) {
        item = new NerpinItem(name, attrs);
        done();
      });

      describe('instantiation', function () {
        it('instatiates', function () {
          expect(item).to.be.an.instanceof(NerpinItem);
          expect(item.id).to.be.eql(2);
        });
      });

      describe('#values', function () {
        it('has values', function () {
          var values = item.values(20);

          expect(values[0]).to.be.eql([0x63, 0]);
          expect(values[1]).to.be.eql([0x62, 2]);
          expect(values[2]).to.be.eql([0x06, 0]);
          expect(values[3]).to.be.eql([0x26, 0]);
        });
      });
    });

    describe(Micron, function() {
      beforeEach(function(done) {
        item = new Micron(name, attrs);
        done();
      });

      describe('#values', function () {
        it('has values', function () {
          var values = item.values(20);

          expect(values[0]).to.be.eql([0x63, 0]);
          expect(values[1]).to.be.eql([0x62, 2]);
          expect(values[2]).to.be.eql([0x06, 0.15625]);
          expect(values[3]).to.be.eql([0x26, 20]);
        });
      });
    });
  });
});

