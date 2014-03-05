beforeEach(function() {
    this.addMatchers({
        toHaveType: function(expected) {
            var pass = (typeof(this.actual) === expected);

            this.message = function() {
                return 'Expected ' + this.actual + ' to have type "' + expected + '".';
            };

            return pass;
        }
    });
});