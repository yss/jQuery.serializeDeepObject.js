(function($) {
var $container = $('#container');
var $normalFormTpl = $('#normalFormTpl').html();
var $objectFormTpl = $('#objectFormTpl').html();
var $arrayFormTpl = $('#arrayFormTpl').html();

var normalValue = {
    name: 'bob',
    age: 22,
    like: ['eat', 'drink']
};
var objectValue = {
    user: {
        name: 'bob',
        age: 22,
        like: ['eat'],
        sex: 'male'
    }
};
var arrayValue = {
    user: [
        {
            name: 'bob',
            age: 22,
            like: ['eat'],
            sex: 'male'
        },
        {
            name: 'aoo',
            age: 22,
            like: ['eat'],
            sex: 'male'
        }
    ]
};

describe('jQuery.serializeDeepObject', function() {
    describe('it is a normal form', function() {
        it('Content is: ' + $normalFormTpl);
        it('should be ' + JSON.stringify(normalValue), function() {
            $container.html($normalFormTpl);
            expect($container.find('form').serializeDeepObject())
                .to.deep.equal(normalValue);
        });
    });

    describe('it is a object form', function() {
        it('Content is: ' + $objectFormTpl);
        it('should be ' + JSON.stringify(objectValue), function() {
            $container.html($objectFormTpl);
            expect($container.find('form').serializeDeepObject())
                .to.deep.equal(objectValue);
        });
    });

    describe('it is a array form', function() {
        it('Content is: ' + $arrayFormTpl);
        it('should be ' + JSON.stringify(normalValue), function() {
            $container.html($arrayFormTpl);
            expect($container.find('form').serializeDeepObject())
                .to.deep.equal(arrayValue);
        });
    });
});

})(jQuery);
