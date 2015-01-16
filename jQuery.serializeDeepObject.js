/**
 * for complex data structures.
 * specially, for the application use mongodb.
 */
(function($) {

function getType(elem) {
    elem = elem.length ? elem[0] : elem;
    // fix for the elem is option
    if (elem.nodeName.toUpperCase() === 'OPTION') {
        elem = elem.parentNode;
    }
    return [elem.getAttribute('data-value-type'), elem.type];
}

function isExist(value) {
    return 'undefined' !== typeof value && null !== value;
}

function formatObject(name, value, result, type) {
    var nameList = name.split('.'),
        key,
        k,
        setValue = function (k, v) {
            if (!isExist(result[k])) {
                result[k] = v || {};
            }
            result = result[k];
        };
        
    if ('string' === typeof value) {
        value = $.trim(value);
        if ('' === value) {
            return;
        }
        if (~type.indexOf('number')) {
            value = parseFloat(value);
        }
    }

    while((key = nameList.shift())) {
        // array
        if (~key.indexOf('[')) {
            key = key.split('[');
            setValue(key.shift(), []);
            while((k = key.shift())) {
                k = k.slice(0, -1);
                if (key.length) {
                    setValue(k, []);
                } else {
                    // not end
                    if (nameList.length) {
                        setValue(k);
                    } else {
                        result[k] = ~type.indexOf('checkbox') ? [value] : value;
                    }
                }
            }
        } else {
            // not end. means it is a object
            if (nameList.length) {
                setValue(key);
            } else {
                if (isExist(result[key])) {
                    if ($.isArray(result[key])) {
                        result[key].push(value);
                    } else {
                        result[key] = [result[key], value];
                    }
                } else {
                    result[key] = ~type.indexOf('checkbox') ? [value] : value;
                }
            }
        }
    }
}
$.fn.serializeDeepObject = function (callback) {
    "use strict";
    var result = {}, _this = this;
    $.each(_this.serializeArray(), function(i, elem) {
        formatObject(elem.name, elem.value, result, getType(_this[0].elements[elem.name]));
    });
    callback && callback(result);
    return result;
};
})(jQuery);
