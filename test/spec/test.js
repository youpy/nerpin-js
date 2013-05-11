/*global describe, it */
'use strict';

define(['hello'], function(hello) {
  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(1).to.equal(1);
      });
    });
  });
});



