/* eslint-disable */

const assert = require('chai').assert;
const returnsValidatorCpf = require('../index');

describe('returnsValidatorCpf()', () => {
    it('must return true', () => {
    	assert.equal(returnsValidatorCpf('36594123840'), true);
    });

    it('must return false', () => {
    	assert.equal(returnsValidatorCpf('36594123841'), false);
    });

    it('the number of characters must be 11 digits otherwise it will return false', () => {
		assert.equal(returnsValidatorCpf('3659412384'), false);
	});

    it('a list of equal numbers must return false', () => {
        assert.equal(returnsValidatorCpf('11111111111'), false);
    });

    it('special characters will be remove and must return true', () => {
        assert.equal(returnsValidatorCpf('36594123840x'), true);
    });

    it('numbers will be converted to string, so it must return true', () => {
        assert.equal(returnsValidatorCpf(36594123840), true);
    });
    
    it('must return false', () => {
        assert.equal(returnsValidatorCpf(365941238-40), false);
    });

    it('special characters will be remove and must return true', () => {
        assert.equal(returnsValidatorCpf('365941238-40'), true);
    });

    it('must return false', () => {
        assert.equal(returnsValidatorCpf(''), false);
    });
});