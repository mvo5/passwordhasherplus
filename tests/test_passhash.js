#!/usr/bin/node

var assert = require('assert');
var PassHashCommon = require('../lib/passhashcommon.js').PassHashCommon;

// global
b64_hmac_sha1 = require("../lib/sha1.js").b64_hmac_sha1;
b64_hmac_sha512 = require("../lib/sha512.js").b64_hmac_sha512;
b64_crypt_sha512 = require("../lib/sha512.js").b64_crypt_sha512;

suite('PassHashCommon', function() {

    test('generateHashWord compat is sha1 ', function() {
        var hash =  PassHashCommon.generateHashWord(
            'site', 'master', 14, true, true, true, false, false);
        assert.equal(hash, ',n/pRqqn4rwKvb');
    });

    test('generateHashWord sha1', function() {
        var hash =  PassHashCommon.generateHashWord(
            'site', 'master', 14, true, true, true, false, false, 'sha1');
        assert.equal(hash, ',n/pRqqn4rwKvb');
    });

    test('generateHashWord sha512', function() {
        var hash =  PassHashCommon.generateHashWord(
            'site', 'master', 14, true, true, true, false, false, 'sha512');
        assert.equal(hash, 'xvOxv4L!fxqBFD');
    });

    test('generateHashWord sha512crypt', function() {
        var hash =  PassHashCommon.generateHashWord(
            'site', 'master', 14, true, true, true, false, false,'sha512crypt');
        assert.equal(hash, '(zozvaI1YFbDBJ');
    });
});

