var obj = {attr: 'value'};

(function() {
    var name = 'attr';
    for (var i = 0; i < 10; ++i)
        print(obj[name], 'value');
})();


