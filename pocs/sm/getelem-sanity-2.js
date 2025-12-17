var obj = {firstAttr: 'value', secondAttr: 'another value'};

(function() {
    for (var i = 0; i < 12; ++i) {
        var name;
        if (i < 4)
            name = 'firstAttr';
        else if (i < 8)
            name = 'secondAttr';
        else
            name = 'firstAttr';

        var result = obj[name];

        switch (name) {
          case 'firstAttr': print(result, 'value'); break;
          case 'secondAttr': print(result, 'another value'); break;
        }
    }
})();


