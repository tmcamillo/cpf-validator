/*eslint-disable */

const assert = require('chai').assert;
const returnsValidatorCpf = require('../index');

describe('returnsValidatorCpf()', () => {
    it('must return true', () => {
      assert.equal(returnsValidatorCpf('36594123840'), true);
    });

    it('must return false', () => {
      assert.equal(returnsValidatorCpf('36594123841'), false);
    });

    it('must return false', () => {
        assert.equal(returnsValidatorCpf('11111111111'), false);
    });

    it('must return false', () => {
        assert.equal(returnsValidatorCpf('3659412384x'), false);
    });

    it('must return true', () => {
        assert.equal(returnsValidatorCpf(36594123840), true);
    });
    
    it('must return false', () => {
        assert.equal(returnsValidatorCpf(365941238-40), false);
    });

    it('must return true', () => {
        assert.equal(returnsValidatorCpf('365941238-40'), true);
    });
});