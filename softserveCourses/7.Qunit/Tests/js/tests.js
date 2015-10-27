'use strict';

QUnit.test( "test 1", function (assert) {
    var num  = toPalindrome(12321);

    assert.equal(num, 12321, "Passed!");
});

QUnit.test( "test 2", function (assert) {
    var num  = toPalindrome(12300);

    assert.equal(num, 12321, "Passed!");
});

QUnit.test( "test 3", function (assert) {
    var num  = toPalindrome(12375);

    assert.equal(num, 12421, "Passed!");
});

QUnit.test( "test 4", function (assert) {
    var num  = toPalindrome(12975);

    assert.equal(num, 13031, "Passed!");
});

QUnit.test( "test 5", function (assert) {
    var num  = toPalindrome(123375);

    assert.equal(num, 124421, "Passed!");
});

QUnit.test( "test 6", function (assert) {
    var num  = toPalindrome(5);

    assert.equal(num, 11, "Passed!");
});

QUnit.test( "test 7", function (assert) {
    var num  = toPalindrome(12975);

    assert.equal(num, 13031, "Passed!");
});