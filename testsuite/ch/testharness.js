





(function ()
{
    var debug = false;
    
    var settings = {
        output:true,
        harness_timeout:{
            "normal":10000,
            "long":60000
        },
        test_timeout:null,
        message_events: ["start", "test_state", "result", "completion"]
    };

    var xhtml_ns = "http://www.w3.org/1999/xhtml";

    

    
    function WindowTestEnvironment() {
        this.name_counter = 0;
        this.window_cache = null;
        this.output_handler = null;
        this.all_loaded = false;
        var this_obj = this;
        this.message_events = [];

        this.message_functions = {
            start: [add_start_callback, remove_start_callback,
                    function (properties) {
                        this_obj._dispatch("start_callback", [properties],
                                           {type: "start", properties: properties});
                    }],

            test_state: [add_test_state_callback, remove_test_state_callback,
                         function(test) {
                             this_obj._dispatch("test_state_callback", [test],
                                                {type: "test_state",
                                                 test: test.structured_clone()});
                         }],
            result: [add_result_callback, remove_result_callback,
                     function (test) {
                         this_obj.output_handler.show_status();
                         this_obj._dispatch("result_callback", [test],
                                            {type: "result",
                                             test: test.structured_clone()});
                     }],
            completion: [add_completion_callback, remove_completion_callback,
                         function (tests, harness_status) {
                             var cloned_tests = map(tests, function(test) {
                                 return test.structured_clone();
                             });
                             this_obj._dispatch("completion_callback", [tests, harness_status],
                                                {type: "complete",
                                                 tests: cloned_tests,
                                                 status: harness_status.structured_clone()});
                         }]
        }

        on_event(window, 'load', function() {
            this_obj.all_loaded = true;
        });
    }

    WindowTestEnvironment.prototype._dispatch = function(selector, callback_args, message_arg) {
        this._forEach_windows(
                function(w, same_origin) {
                    if (same_origin) {
                        try {
                            var has_selector = selector in w;
                        } catch(e) {
                            
                            
                            has_selector = false;
                        }
                        if (has_selector) {
                            try {
                                w[selector].apply(undefined, callback_args);
                            } catch (e) {
                                if (debug) {
                                    throw e;
                                }
                            }
                        }
                    }
                    if (supports_post_message(w) && w !== self) {
                        w.postMessage(message_arg, "*");
                    }
                });
    };

    WindowTestEnvironment.prototype._forEach_windows = function(callback) {
        
        
        
        
        var cache = this.window_cache;
        if (!cache) {
            cache = [[self, true]];
            var w = self;
            var i = 0;
            var so;
            var origins = location.ancestorOrigins;
            while (w != w.parent) {
                w = w.parent;
                
                
                
                
                
                
                
                
                
                
                
                if (origins) {
                    so = (location.origin == origins[i]);
                } else {
                    so = is_same_origin(w);
                }
                cache.push([w, so]);
                i++;
            }
            w = window.opener;
            if (w) {
                
                
                
                cache.push([w, is_same_origin(w)]);
            }
            this.window_cache = cache;
        }

        forEach(cache,
                function(a) {
                    callback.apply(null, a);
                });
    };

    WindowTestEnvironment.prototype.on_tests_ready = function() {
        var output = new Output();
        this.output_handler = output;

        var this_obj = this;

        add_start_callback(function (properties) {
            this_obj.output_handler.init(properties);
        });

        add_test_state_callback(function(test) {
            this_obj.output_handler.show_status();
        });

        add_result_callback(function (test) {
            this_obj.output_handler.show_status();
        });

        add_completion_callback(function (tests, harness_status) {
            this_obj.output_handler.show_results(tests, harness_status);
        });
        this.setup_messages(settings.message_events);
    };

    WindowTestEnvironment.prototype.setup_messages = function(new_events) {
        var this_obj = this;
        forEach(settings.message_events, function(x) {
            var current_dispatch = this_obj.message_events.indexOf(x) !== -1;
            var new_dispatch = new_events.indexOf(x) !== -1;
            if (!current_dispatch && new_dispatch) {
                this_obj.message_functions[x][0](this_obj.message_functions[x][2]);
            } else if (current_dispatch && !new_dispatch) {
                this_obj.message_functions[x][1](this_obj.message_functions[x][2]);
            }
        });
        this.message_events = new_events;
    }

    WindowTestEnvironment.prototype.next_default_test_name = function() {
        
        var title = document.getElementsByTagName("title")[0];
        var prefix = (title && title.firstChild && title.firstChild.data) || "Untitled";
        var suffix = this.name_counter > 0 ? " " + this.name_counter : "";
        this.name_counter++;
        return prefix + suffix;
    };

    WindowTestEnvironment.prototype.on_new_harness_properties = function(properties) {
        this.output_handler.setup(properties);
        if (properties.hasOwnProperty("message_events")) {
            this.setup_messages(properties.message_events);
        }
    };

    WindowTestEnvironment.prototype.add_on_loaded_callback = function(callback) {
        on_event(window, 'load', callback);
    };

    WindowTestEnvironment.prototype.test_timeout = function() {
        var metas = document.getElementsByTagName("meta");
        for (var i = 0; i < metas.length; i++) {
            if (metas[i].name == "timeout") {
                if (metas[i].content == "long") {
                    return settings.harness_timeout.long;
                }
                break;
            }
        }
        return settings.harness_timeout.normal;
    };

    WindowTestEnvironment.prototype.global_scope = function() {
        return window;
    };

    
    function WorkerTestEnvironment() {
        this.name_counter = 0;
        this.all_loaded = true;
        this.message_list = [];
        this.message_ports = [];
    }

    WorkerTestEnvironment.prototype._dispatch = function(message) {
        this.message_list.push(message);
        for (var i = 0; i < this.message_ports.length; ++i)
        {
            this.message_ports[i].postMessage(message);
        }
    };

    
    
    WorkerTestEnvironment.prototype._add_message_port = function(port) {
        this.message_ports.push(port);
        for (var i = 0; i < this.message_list.length; ++i)
        {
            port.postMessage(this.message_list[i]);
        }
    };

    WorkerTestEnvironment.prototype.next_default_test_name = function() {
        var suffix = this.name_counter > 0 ? " " + this.name_counter : "";
        this.name_counter++;
        return "Untitled" + suffix;
    };

    WorkerTestEnvironment.prototype.on_new_harness_properties = function() {};

    WorkerTestEnvironment.prototype.on_tests_ready = function() {
        var this_obj = this;
        add_start_callback(
                function(properties) {
                    this_obj._dispatch({
                        type: "start",
                        properties: properties,
                    });
                });
        add_test_state_callback(
                function(test) {
                    this_obj._dispatch({
                        type: "test_state",
                        test: test.structured_clone()
                    });
                });
        add_result_callback(
                function(test) {
                    this_obj._dispatch({
                        type: "result",
                        test: test.structured_clone()
                    });
                });
        add_completion_callback(
                function(tests, harness_status) {
                    this_obj._dispatch({
                        type: "complete",
                        tests: map(tests,
                            function(test) {
                                return test.structured_clone();
                            }),
                        status: harness_status.structured_clone()
                    });
                });
    };

    WorkerTestEnvironment.prototype.add_on_loaded_callback = function() {};

    WorkerTestEnvironment.prototype.test_timeout = function() {
        
        
        return null;
    };

    WorkerTestEnvironment.prototype.global_scope = function() {
        return self;
    };

    
    function DedicatedWorkerTestEnvironment() {
        WorkerTestEnvironment.call(this);
        
        
        
        this._add_message_port(self);
    }
    DedicatedWorkerTestEnvironment.prototype = Object.create(WorkerTestEnvironment.prototype);

    DedicatedWorkerTestEnvironment.prototype.on_tests_ready = function() {
        WorkerTestEnvironment.prototype.on_tests_ready.call(this);
        
        
        tests.wait_for_finish = true;
    };

    
    function SharedWorkerTestEnvironment() {
        WorkerTestEnvironment.call(this);
        var this_obj = this;
        
        
        self.addEventListener("connect",
                function(message_event) {
                    this_obj._add_message_port(message_event.source);
                });
    }
    SharedWorkerTestEnvironment.prototype = Object.create(WorkerTestEnvironment.prototype);

    SharedWorkerTestEnvironment.prototype.on_tests_ready = function() {
        WorkerTestEnvironment.prototype.on_tests_ready.call(this);
        
        
        tests.wait_for_finish = true;
    };

    
    function ServiceWorkerTestEnvironment() {
        WorkerTestEnvironment.call(this);
        this.all_loaded = false;
        this.on_loaded_callback = null;
        var this_obj = this;
        self.addEventListener("message",
                function(event) {
                    if (event.data.type && event.data.type === "connect") {
                        if (event.ports && event.ports[0]) {
                            
                            
                            
                            
                            
                            this_obj._add_message_port(event.ports[0]);
                            event.ports[0].start();
                        } else {
                            
                            
                            
                            this_obj._add_message_port(event.source);
                        }
                    }
                });

        
        
        
        
        
        on_event(self, "install",
                function(event) {
                    this_obj.all_loaded = true;
                    if (this_obj.on_loaded_callback) {
                        this_obj.on_loaded_callback();
                    }
                });
    }
    ServiceWorkerTestEnvironment.prototype = Object.create(WorkerTestEnvironment.prototype);

    ServiceWorkerTestEnvironment.prototype.add_on_loaded_callback = function(callback) {
        if (this.all_loaded) {
            callback();
        } else {
            this.on_loaded_callback = callback;
        }
    };

    function create_test_environment() {
        if ('document' in self) {
            return new WindowTestEnvironment();
        }
        if ('DedicatedWorkerGlobalScope' in self &&
            self instanceof DedicatedWorkerGlobalScope) {
            return new DedicatedWorkerTestEnvironment();
        }
        if ('SharedWorkerGlobalScope' in self &&
            self instanceof SharedWorkerGlobalScope) {
            return new SharedWorkerTestEnvironment();
        }
        if ('ServiceWorkerGlobalScope' in self &&
            self instanceof ServiceWorkerGlobalScope) {
            return new ServiceWorkerTestEnvironment();
        }
        if ('WorkerGlobalScope' in self &&
            self instanceof WorkerGlobalScope) {
            return new DedicatedWorkerTestEnvironment();
        }

        throw new Error("Unsupported test environment");
    }

    var test_environment = create_test_environment();

    function is_shared_worker(worker) {
        return 'SharedWorker' in self && worker instanceof SharedWorker;
    }

    function is_service_worker(worker) {
        return 'ServiceWorker' in self && worker instanceof ServiceWorker;
    }

    

    function test(func, name, properties)
    {
        var test_name = name ? name : test_environment.next_default_test_name();
        properties = properties ? properties : {};
        var test_obj = new Test(test_name, properties);
        test_obj.step(func, test_obj, test_obj);
        if (test_obj.phase === test_obj.phases.STARTED) {
            test_obj.done();
        }
    }

    function async_test(func, name, properties)
    {
        if (typeof func !== "function") {
            properties = name;
            name = func;
            func = null;
        }
        var test_name = name ? name : test_environment.next_default_test_name();
        properties = properties ? properties : {};
        var test_obj = new Test(test_name, properties);
        if (func) {
            test_obj.step(func, test_obj, test_obj);
        }
        return test_obj;
    }

    function promise_test(func, name, properties) {
        var test = async_test(name, properties);
        
        if (!tests.promise_tests) {
            tests.promise_tests = Promise.resolve();
        }
        tests.promise_tests = tests.promise_tests.then(function() {
            var promise = test.step(func, test, test);
            test.step(function() {
                assert_not_equals(promise, undefined);
            });
            return Promise.resolve(promise)
                .then(
                    function() {
                        test.done();
                    })
                .catch(test.step_func(
                    function(value) {
                        if (value instanceof AssertionError) {
                            throw value;
                        }
                        assert(false, "promise_test", null,
                               "Unhandled rejection with value: ${value}", {value:value});
                    }));
        });
    }

    function promise_rejects(test, expected, promise, description) {
        return promise.then(test.unreached_func("Should have rejected: " + description)).catch(function(e) {
            assert_throws(expected, function() { throw e }, description);
        });
    }

    
    function EventWatcher(test, watchedNode, eventTypes)
    {
        if (typeof eventTypes == 'string') {
            eventTypes = [eventTypes];
        }

        var waitingFor = null;

        var eventHandler = test.step_func(function(evt) {
            assert_true(!!waitingFor,
                        'Not expecting event, but got ' + evt.type + ' event');
            assert_equals(evt.type, waitingFor.types[0],
                          'Expected ' + waitingFor.types[0] + ' event, but got ' +
                          evt.type + ' event instead');
            if (waitingFor.types.length > 1) {
                
                waitingFor.types.shift();
                return;
            }
            
            
            
            var resolveFunc = waitingFor.resolve;
            waitingFor = null;
            resolveFunc(evt);
        });

        for (var i = 0; i < eventTypes.length; i++) {
            watchedNode.addEventListener(eventTypes[i], eventHandler);
        }

        
        this.wait_for = function(types) {
            if (waitingFor) {
                return Promise.reject('Already waiting for an event or events');
            }
            if (typeof types == 'string') {
                types = [types];
            }
            return new Promise(function(resolve, reject) {
                waitingFor = {
                    types: types,
                    resolve: resolve,
                    reject: reject
                };
            });
        };

        function stop_watching() {
            for (var i = 0; i < eventTypes.length; i++) {
                watchedNode.removeEventListener(eventTypes[i], eventHandler);
            }
        };

        test.add_cleanup(stop_watching);

        return this;
    }
    expose(EventWatcher, 'EventWatcher');

    function setup(func_or_properties, maybe_properties)
    {
        var func = null;
        var properties = {};
        if (arguments.length === 2) {
            func = func_or_properties;
            properties = maybe_properties;
        } else if (func_or_properties instanceof Function) {
            func = func_or_properties;
        } else {
            properties = func_or_properties;
        }
        tests.setup(func, properties);
        test_environment.on_new_harness_properties(properties);
    }

    function done() {
        if (tests.tests.length === 0) {
            tests.set_file_is_test();
        }
        if (tests.file_is_test) {
            tests.tests[0].done();
        }
        tests.end_wait();
    }

    function generate_tests(func, args, properties) {
        forEach(args, function(x, i)
                {
                    var name = x[0];
                    test(function()
                         {
                             func.apply(this, x.slice(1));
                         },
                         name,
                         Array.isArray(properties) ? properties[i] : properties);
                });
    }

    function on_event(object, event, callback)
    {
        object.addEventListener(event, callback, false);
    }

    function step_timeout(f, t) {
        var outer_this = this;
        var args = Array.prototype.slice.call(arguments, 2);
        return setTimeout(function() {
            f.apply(outer_this, args);
        }, t * tests.timeout_multiplier);
    }

    expose(test, 'test');
    expose(async_test, 'async_test');
    expose(promise_test, 'promise_test');
    expose(promise_rejects, 'promise_rejects');
    expose(generate_tests, 'generate_tests');
    expose(setup, 'setup');
    expose(done, 'done');
    expose(on_event, 'on_event');
    expose(step_timeout, 'step_timeout');

    
    function truncate(s, len)
    {
        if (s.length > len) {
            return s.substring(0, len - 3) + "...";
        }
        return s;
    }

    
    function is_node(object)
    {
        
        
        
        
        try {
            var has_node_properties = ("nodeType" in object &&
                                       "nodeName" in object &&
                                       "nodeValue" in object &&
                                       "childNodes" in object);
        } catch (e) {
            
            return false;
        }

        if (has_node_properties) {
            try {
                object.nodeType;
            } catch (e) {
                
                
                return false;
            }
            return true;
        }
        return false;
    }

    var replacements = {
        "0": "0",
        "1": "x01",
        "2": "x02",
        "3": "x03",
        "4": "x04",
        "5": "x05",
        "6": "x06",
        "7": "x07",
        "8": "b",
        "9": "t",
        "10": "n",
        "11": "v",
        "12": "f",
        "13": "r",
        "14": "x0e",
        "15": "x0f",
        "16": "x10",
        "17": "x11",
        "18": "x12",
        "19": "x13",
        "20": "x14",
        "21": "x15",
        "22": "x16",
        "23": "x17",
        "24": "x18",
        "25": "x19",
        "26": "x1a",
        "27": "x1b",
        "28": "x1c",
        "29": "x1d",
        "30": "x1e",
        "31": "x1f",
        "0xfffd": "ufffd",
        "0xfffe": "ufffe",
        "0xffff": "uffff",
    };

    
    function format_value(val, seen)
    {
        if (!seen) {
            seen = [];
        }
        if (typeof val === "object" && val !== null) {
            if (seen.indexOf(val) >= 0) {
                return "[...]";
            }
            seen.push(val);
        }
        if (Array.isArray(val)) {
            return "[" + val.map(function(x) {return format_value(x, seen);}).join(", ") + "]";
        }

        switch (typeof val) {
        case "string":
            val = val.replace("\\", "\\\\");
            for (var p in replacements) {
                var replace = "\\" + replacements[p];
                val = val.replace(RegExp(String.fromCharCode(p), "g"), replace);
            }
            return '"' + val.replace(/"/g, '\\"') + '"';
        case "boolean":
        case "undefined":
            return String(val);
        case "number":
            
            
            if (val === -0 && 1/val === -Infinity) {
                return "-0";
            }
            return String(val);
        case "object":
            if (val === null) {
                return "null";
            }

            
            
            if (is_node(val)) {
                switch (val.nodeType) {
                case Node.ELEMENT_NODE:
                    var ret = "<" + val.localName;
                    for (var i = 0; i < val.attributes.length; i++) {
                        ret += " " + val.attributes[i].name + '="' + val.attributes[i].value + '"';
                    }
                    ret += ">" + val.innerHTML + "</" + val.localName + ">";
                    return "Element node " + truncate(ret, 60);
                case Node.TEXT_NODE:
                    return 'Text node "' + truncate(val.data, 60) + '"';
                case Node.PROCESSING_INSTRUCTION_NODE:
                    return "ProcessingInstruction node with target " + format_value(truncate(val.target, 60)) + " and data " + format_value(truncate(val.data, 60));
                case Node.COMMENT_NODE:
                    return "Comment node <!--" + truncate(val.data, 60) + "-->";
                case Node.DOCUMENT_NODE:
                    return "Document node with " + val.childNodes.length + (val.childNodes.length == 1 ? " child" : " children");
                case Node.DOCUMENT_TYPE_NODE:
                    return "DocumentType node";
                case Node.DOCUMENT_FRAGMENT_NODE:
                    return "DocumentFragment node with " + val.childNodes.length + (val.childNodes.length == 1 ? " child" : " children");
                default:
                    return "Node object of unknown type";
                }
            }

        
        default:
            try {
                return typeof val + ' "' + truncate(String(val), 1000) + '"';
            } catch(e) {
                return ("[stringifying object threw " + String(e) +
                        " with type " + String(typeof e) + "]");
            }
        }
    }
    expose(format_value, "format_value");

    

    function assert_true(actual, description)
    {
        assert(actual === true, "assert_true", description,
                                "expected true got ${actual}", {actual:actual});
    }
    expose(assert_true, "assert_true");

    function assert_false(actual, description)
    {
        assert(actual === false, "assert_false", description,
                                 "expected false got ${actual}", {actual:actual});
    }
    expose(assert_false, "assert_false");

    function same_value(x, y) {
        if (y !== y) {
            
            return x !== x;
        }
        if (x === 0 && y === 0) {
            
            return 1/x === 1/y;
        }
        return x === y;
    }

    function assert_equals(actual, expected, description)
    {
         
        if (typeof actual != typeof expected) {
            assert(false, "assert_equals", description,
                          "expected (" + typeof expected + ") ${expected} but got (" + typeof actual + ") ${actual}",
                          {expected:expected, actual:actual});
            return;
        }
        assert(same_value(actual, expected), "assert_equals", description,
                                             "expected ${expected} but got ${actual}",
                                             {expected:expected, actual:actual});
    }
    expose(assert_equals, "assert_equals");

    function assert_not_equals(actual, expected, description)
    {
         
        assert(!same_value(actual, expected), "assert_not_equals", description,
                                              "got disallowed value ${actual}",
                                              {actual:actual});
    }
    expose(assert_not_equals, "assert_not_equals");

    function assert_in_array(actual, expected, description)
    {
        assert(expected.indexOf(actual) != -1, "assert_in_array", description,
                                               "value ${actual} not in array ${expected}",
                                               {actual:actual, expected:expected});
    }
    expose(assert_in_array, "assert_in_array");

    function assert_object_equals(actual, expected, description)
    {
         
         function check_equal(actual, expected, stack)
         {
             stack.push(actual);

             var p;
             for (p in actual) {
                 assert(expected.hasOwnProperty(p), "assert_object_equals", description,
                                                    "unexpected property ${p}", {p:p});

                 if (typeof actual[p] === "object" && actual[p] !== null) {
                     if (stack.indexOf(actual[p]) === -1) {
                         check_equal(actual[p], expected[p], stack);
                     }
                 } else {
                     assert(same_value(actual[p], expected[p]), "assert_object_equals", description,
                                                       "property ${p} expected ${expected} got ${actual}",
                                                       {p:p, expected:expected, actual:actual});
                 }
             }
             for (p in expected) {
                 assert(actual.hasOwnProperty(p),
                        "assert_object_equals", description,
                        "expected property ${p} missing", {p:p});
             }
             stack.pop();
         }
         check_equal(actual, expected, []);
    }
    expose(assert_object_equals, "assert_object_equals");

    function assert_array_equals(actual, expected, description)
    {
        assert(actual.length === expected.length,
               "assert_array_equals", description,
               "lengths differ, expected ${expected} got ${actual}",
               {expected:expected.length, actual:actual.length});

        for (var i = 0; i < actual.length; i++) {
            assert(actual.hasOwnProperty(i) === expected.hasOwnProperty(i),
                   "assert_array_equals", description,
                   "property ${i}, property expected to be ${expected} but was ${actual}",
                   {i:i, expected:expected.hasOwnProperty(i) ? "present" : "missing",
                   actual:actual.hasOwnProperty(i) ? "present" : "missing"});
            assert(same_value(expected[i], actual[i]),
                   "assert_array_equals", description,
                   "property ${i}, expected ${expected} but got ${actual}",
                   {i:i, expected:expected[i], actual:actual[i]});
        }
    }
    expose(assert_array_equals, "assert_array_equals");

    function assert_approx_equals(actual, expected, epsilon, description)
    {
        
        assert(typeof actual === "number",
               "assert_approx_equals", description,
               "expected a number but got a ${type_actual}",
               {type_actual:typeof actual});

        assert(Math.abs(actual - expected) <= epsilon,
               "assert_approx_equals", description,
               "expected ${expected} +/- ${epsilon} but got ${actual}",
               {expected:expected, actual:actual, epsilon:epsilon});
    }
    expose(assert_approx_equals, "assert_approx_equals");

    function assert_less_than(actual, expected, description)
    {
        
        assert(typeof actual === "number",
               "assert_less_than", description,
               "expected a number but got a ${type_actual}",
               {type_actual:typeof actual});

        assert(actual < expected,
               "assert_less_than", description,
               "expected a number less than ${expected} but got ${actual}",
               {expected:expected, actual:actual});
    }
    expose(assert_less_than, "assert_less_than");

    function assert_greater_than(actual, expected, description)
    {
        
        assert(typeof actual === "number",
               "assert_greater_than", description,
               "expected a number but got a ${type_actual}",
               {type_actual:typeof actual});

        assert(actual > expected,
               "assert_greater_than", description,
               "expected a number greater than ${expected} but got ${actual}",
               {expected:expected, actual:actual});
    }
    expose(assert_greater_than, "assert_greater_than");

    function assert_between_exclusive(actual, lower, upper, description)
    {
        
        assert(typeof actual === "number",
               "assert_between_exclusive", description,
               "expected a number but got a ${type_actual}",
               {type_actual:typeof actual});

        assert(actual > lower && actual < upper,
               "assert_between_exclusive", description,
               "expected a number greater than ${lower} " +
               "and less than ${upper} but got ${actual}",
               {lower:lower, upper:upper, actual:actual});
    }
    expose(assert_between_exclusive, "assert_between_exclusive");

    function assert_less_than_equal(actual, expected, description)
    {
        
        assert(typeof actual === "number",
               "assert_less_than_equal", description,
               "expected a number but got a ${type_actual}",
               {type_actual:typeof actual});

        assert(actual <= expected,
               "assert_less_than_equal", description,
               "expected a number less than or equal to ${expected} but got ${actual}",
               {expected:expected, actual:actual});
    }
    expose(assert_less_than_equal, "assert_less_than_equal");

    function assert_greater_than_equal(actual, expected, description)
    {
        
        assert(typeof actual === "number",
               "assert_greater_than_equal", description,
               "expected a number but got a ${type_actual}",
               {type_actual:typeof actual});

        assert(actual >= expected,
               "assert_greater_than_equal", description,
               "expected a number greater than or equal to ${expected} but got ${actual}",
               {expected:expected, actual:actual});
    }
    expose(assert_greater_than_equal, "assert_greater_than_equal");

    function assert_between_inclusive(actual, lower, upper, description)
    {
        
        assert(typeof actual === "number",
               "assert_between_inclusive", description,
               "expected a number but got a ${type_actual}",
               {type_actual:typeof actual});

        assert(actual >= lower && actual <= upper,
               "assert_between_inclusive", description,
               "expected a number greater than or equal to ${lower} " +
               "and less than or equal to ${upper} but got ${actual}",
               {lower:lower, upper:upper, actual:actual});
    }
    expose(assert_between_inclusive, "assert_between_inclusive");

    function assert_regexp_match(actual, expected, description) {
        
        assert(expected.test(actual),
               "assert_regexp_match", description,
               "expected ${expected} but got ${actual}",
               {expected:expected, actual:actual});
    }
    expose(assert_regexp_match, "assert_regexp_match");

    function assert_class_string(object, class_string, description) {
        assert_equals({}.toString.call(object), "[object " + class_string + "]",
                      description);
    }
    expose(assert_class_string, "assert_class_string");


    function _assert_own_property(name) {
        return function(object, property_name, description)
        {
            assert(object.hasOwnProperty(property_name),
                   name, description,
                   "expected property ${p} missing", {p:property_name});
        };
    }
    expose(_assert_own_property("assert_exists"), "assert_exists");
    expose(_assert_own_property("assert_own_property"), "assert_own_property");

    function assert_not_exists(object, property_name, description)
    {
        assert(!object.hasOwnProperty(property_name),
               "assert_not_exists", description,
               "unexpected property ${p} found", {p:property_name});
    }
    expose(assert_not_exists, "assert_not_exists");

    function _assert_inherits(name) {
        return function (object, property_name, description)
        {
            assert(typeof object === "object" || typeof object === "function",
                   name, description,
                   "provided value is not an object");

            assert("hasOwnProperty" in object,
                   name, description,
                   "provided value is an object but has no hasOwnProperty method");

            assert(!object.hasOwnProperty(property_name),
                   name, description,
                   "property ${p} found on object expected in prototype chain",
                   {p:property_name});

            assert(property_name in object,
                   name, description,
                   "property ${p} not found in prototype chain",
                   {p:property_name});
        };
    }
    expose(_assert_inherits("assert_inherits"), "assert_inherits");
    expose(_assert_inherits("assert_idl_attribute"), "assert_idl_attribute");

    function assert_readonly(object, property_name, description)
    {
         var initial_value = object[property_name];
         try {
             
             
             object[property_name] = initial_value + "a"; 
             assert(same_value(object[property_name], initial_value),
                    "assert_readonly", description,
                    "changing property ${p} succeeded",
                    {p:property_name});
         } finally {
             object[property_name] = initial_value;
         }
    }
    expose(assert_readonly, "assert_readonly");

    function assert_throws(code, func, description)
    {
        try {
            func.call(this);
            assert(false, "assert_throws", description,
                   "${func} did not throw", {func:func});
        } catch (e) {
            if (e instanceof AssertionError) {
                throw e;
            }
            if (code === null) {
                return;
            }
            if (typeof code === "object") {
                assert(typeof e == "object" && "name" in e && e.name == code.name,
                       "assert_throws", description,
                       "${func} threw ${actual} (${actual_name}) expected ${expected} (${expected_name})",
                                    {func:func, actual:e, actual_name:e.name,
                                     expected:code,
                                     expected_name:code.name});
                return;
            }

            var code_name_map = {
                INDEX_SIZE_ERR: 'IndexSizeError',
                HIERARCHY_REQUEST_ERR: 'HierarchyRequestError',
                WRONG_DOCUMENT_ERR: 'WrongDocumentError',
                INVALID_CHARACTER_ERR: 'InvalidCharacterError',
                NO_MODIFICATION_ALLOWED_ERR: 'NoModificationAllowedError',
                NOT_FOUND_ERR: 'NotFoundError',
                NOT_SUPPORTED_ERR: 'NotSupportedError',
                INUSE_ATTRIBUTE_ERR: 'InUseAttributeError',
                INVALID_STATE_ERR: 'InvalidStateError',
                SYNTAX_ERR: 'SyntaxError',
                INVALID_MODIFICATION_ERR: 'InvalidModificationError',
                NAMESPACE_ERR: 'NamespaceError',
                INVALID_ACCESS_ERR: 'InvalidAccessError',
                TYPE_MISMATCH_ERR: 'TypeMismatchError',
                SECURITY_ERR: 'SecurityError',
                NETWORK_ERR: 'NetworkError',
                ABORT_ERR: 'AbortError',
                URL_MISMATCH_ERR: 'URLMismatchError',
                QUOTA_EXCEEDED_ERR: 'QuotaExceededError',
                TIMEOUT_ERR: 'TimeoutError',
                INVALID_NODE_TYPE_ERR: 'InvalidNodeTypeError',
                DATA_CLONE_ERR: 'DataCloneError'
            };

            var name = code in code_name_map ? code_name_map[code] : code;

            var name_code_map = {
                IndexSizeError: 1,
                HierarchyRequestError: 3,
                WrongDocumentError: 4,
                InvalidCharacterError: 5,
                NoModificationAllowedError: 7,
                NotFoundError: 8,
                NotSupportedError: 9,
                InUseAttributeError: 10,
                InvalidStateError: 11,
                SyntaxError: 12,
                InvalidModificationError: 13,
                NamespaceError: 14,
                InvalidAccessError: 15,
                TypeMismatchError: 17,
                SecurityError: 18,
                NetworkError: 19,
                AbortError: 20,
                URLMismatchError: 21,
                QuotaExceededError: 22,
                TimeoutError: 23,
                InvalidNodeTypeError: 24,
                DataCloneError: 25,

                EncodingError: 0,
                NotReadableError: 0,
                UnknownError: 0,
                ConstraintError: 0,
                DataError: 0,
                TransactionInactiveError: 0,
                ReadOnlyError: 0,
                VersionError: 0,
                OperationError: 0,
                NotAllowedError: 0
            };

            if (!(name in name_code_map)) {
                throw new AssertionError('Test bug: unrecognized DOMException code "' + code + '" passed to assert_throws()');
            }

            var required_props = { code: name_code_map[name] };

            if (required_props.code === 0 ||
               (typeof e == "object" &&
                "name" in e &&
                e.name !== e.name.toUpperCase() &&
                e.name !== "DOMException")) {
                
                required_props.name = name;
            }

            
            
            
            

            assert(typeof e == "object",
                   "assert_throws", description,
                   "${func} threw ${e} with type ${type}, not an object",
                   {func:func, e:e, type:typeof e});

            for (var prop in required_props) {
                assert(typeof e == "object" && prop in e && e[prop] == required_props[prop],
                       "assert_throws", description,
                       "${func} threw ${e} that is not a DOMException " + code + ": property ${prop} is equal to ${actual}, expected ${expected}",
                       {func:func, e:e, prop:prop, actual:e[prop], expected:required_props[prop]});
            }
        }
    }
    expose(assert_throws, "assert_throws");

    function assert_unreached(description) {
         assert(false, "assert_unreached", description,
                "Reached unreachable code");
    }
    expose(assert_unreached, "assert_unreached");

    function assert_any(assert_func, actual, expected_array)
    {
        var args = [].slice.call(arguments, 3);
        var errors = [];
        var passed = false;
        forEach(expected_array,
                function(expected)
                {
                    try {
                        assert_func.apply(this, [actual, expected].concat(args));
                        passed = true;
                    } catch (e) {
                        errors.push(e.message);
                    }
                });
        if (!passed) {
            throw new AssertionError(errors.join("\n\n"));
        }
    }
    expose(assert_any, "assert_any");

    function Test(name, properties)
    {
        if (tests.file_is_test && tests.tests.length) {
            throw new Error("Tried to create a test with file_is_test");
        }
        this.name = name;

        this.phase = this.phases.INITIAL;

        this.status = this.NOTRUN;
        this.timeout_id = null;
        this.index = null;

        this.properties = properties;
        var timeout = properties.timeout ? properties.timeout : settings.test_timeout;
        if (timeout !== null) {
            this.timeout_length = timeout * tests.timeout_multiplier;
        } else {
            this.timeout_length = null;
        }

        this.message = null;
        this.stack = null;

        this.steps = [];

        this.cleanup_callbacks = [];

        tests.push(this);
    }

    Test.statuses = {
        PASS:0,
        FAIL:1,
        TIMEOUT:2,
        NOTRUN:3
    };

    Test.prototype = merge({}, Test.statuses);

    Test.prototype.phases = {
        INITIAL:0,
        STARTED:1,
        HAS_RESULT:2,
        COMPLETE:3
    };

    Test.prototype.structured_clone = function()
    {
        if (!this._structured_clone) {
            var msg = this.message;
            msg = msg ? String(msg) : msg;
            this._structured_clone = merge({
                name:String(this.name),
                properties:merge({}, this.properties),
            }, Test.statuses);
        }
        this._structured_clone.status = this.status;
        this._structured_clone.message = this.message;
        this._structured_clone.stack = this.stack;
        this._structured_clone.index = this.index;
        return this._structured_clone;
    };

    Test.prototype.step = function(func, this_obj)
    {
        if (this.phase > this.phases.STARTED) {
            return;
        }
        this.phase = this.phases.STARTED;
        
        this.set_status(this.TIMEOUT, "Test timed out");

        tests.started = true;
        tests.notify_test_state(this);

        if (this.timeout_id === null) {
            this.set_timeout();
        }

        this.steps.push(func);

        if (arguments.length === 1) {
            this_obj = this;
        }

        try {
            return func.apply(this_obj, Array.prototype.slice.call(arguments, 2));
        } catch (e) {
            if (this.phase >= this.phases.HAS_RESULT) {
                return;
            }
            var message = String((typeof e === "object" && e !== null) ? e.message : e);
            var stack = e.stack ? e.stack : null;

            this.set_status(this.FAIL, message, stack);
            this.phase = this.phases.HAS_RESULT;
            this.done();
        }
    };

    Test.prototype.step_func = function(func, this_obj)
    {
        var test_this = this;

        if (arguments.length === 1) {
            this_obj = test_this;
        }

        return function()
        {
            return test_this.step.apply(test_this, [func, this_obj].concat(
                Array.prototype.slice.call(arguments)));
        };
    };

    Test.prototype.step_func_done = function(func, this_obj)
    {
        var test_this = this;

        if (arguments.length === 1) {
            this_obj = test_this;
        }

        return function()
        {
            if (func) {
                test_this.step.apply(test_this, [func, this_obj].concat(
                    Array.prototype.slice.call(arguments)));
            }
            test_this.done();
        };
    };

    Test.prototype.unreached_func = function(description)
    {
        return this.step_func(function() {
            assert_unreached(description);
        });
    };

    Test.prototype.step_timeout = function(f, timeout) {
        var test_this = this;
        var args = Array.prototype.slice.call(arguments, 2);
        return setTimeout(this.step_func(function() {
            return f.apply(test_this, args);
        }), timeout * tests.timeout_multiplier);
    }

    Test.prototype.add_cleanup = function(callback) {
        this.cleanup_callbacks.push(callback);
    };

    Test.prototype.force_timeout = function() {
        this.set_status(this.TIMEOUT);
        this.phase = this.phases.HAS_RESULT;
    };

    Test.prototype.set_timeout = function()
    {
        if (this.timeout_length !== null) {
            var this_obj = this;
            this.timeout_id = setTimeout(function()
                                         {
                                             this_obj.timeout();
                                         }, this.timeout_length);
        }
    };

    Test.prototype.set_status = function(status, message, stack)
    {
        this.status = status;
        this.message = message;
        this.stack = stack ? stack : null;
    };

    Test.prototype.timeout = function()
    {
        this.timeout_id = null;
        this.set_status(this.TIMEOUT, "Test timed out");
        this.phase = this.phases.HAS_RESULT;
        this.done();
    };

    Test.prototype.done = function()
    {
        if (this.phase == this.phases.COMPLETE) {
            return;
        }

        if (this.phase <= this.phases.STARTED) {
            this.set_status(this.PASS, null);
        }

        this.phase = this.phases.COMPLETE;

        clearTimeout(this.timeout_id);
        tests.result(this);
        this.cleanup();
    };

    Test.prototype.cleanup = function() {
        forEach(this.cleanup_callbacks,
                function(cleanup_callback) {
                    cleanup_callback();
                });
    };

    
    function RemoteTest(clone) {
        var this_obj = this;
        Object.keys(clone).forEach(
                function(key) {
                    this_obj[key] = clone[key];
                });
        this.index = null;
        this.phase = this.phases.INITIAL;
        this.update_state_from(clone);
        tests.push(this);
    }

    RemoteTest.prototype.structured_clone = function() {
        var clone = {};
        Object.keys(this).forEach(
                (function(key) {
                    if (typeof(this[key]) === "object") {
                        clone[key] = merge({}, this[key]);
                    } else {
                        clone[key] = this[key];
                    }
                }).bind(this));
        clone.phases = merge({}, this.phases);
        return clone;
    };

    RemoteTest.prototype.cleanup = function() {};
    RemoteTest.prototype.phases = Test.prototype.phases;
    RemoteTest.prototype.update_state_from = function(clone) {
        this.status = clone.status;
        this.message = clone.message;
        this.stack = clone.stack;
        if (this.phase === this.phases.INITIAL) {
            this.phase = this.phases.STARTED;
        }
    };
    RemoteTest.prototype.done = function() {
        this.phase = this.phases.COMPLETE;
    }

    
    function RemoteWorker(worker) {
        this.running = true;
        this.tests = new Array();

        var this_obj = this;
        worker.onerror = function(error) { this_obj.worker_error(error); };

        var message_port;

        if (is_service_worker(worker)) {
            if (window.MessageChannel) {
                
                
                
                
                
                
                var message_channel = new MessageChannel();
                message_port = message_channel.port1;
                message_port.start();
                worker.postMessage({type: "connect"}, [message_channel.port2]);
            } else {
                
                
                
                message_port = navigator.serviceWorker;
                worker.postMessage({type: "connect"});
            }
        } else if (is_shared_worker(worker)) {
            message_port = worker.port;
        } else {
            message_port = worker;
        }

        
        
        
        this.worker = worker;

        message_port.onmessage =
            function(message) {
                if (this_obj.running && (message.data.type in this_obj.message_handlers)) {
                    this_obj.message_handlers[message.data.type].call(this_obj, message.data);
                }
            };
    }

    RemoteWorker.prototype.worker_error = function(error) {
        var message = error.message || String(error);
        var filename = (error.filename ? " " + error.filename: "");
        
        
        this.worker_done({
            status: {
                status: tests.status.ERROR,
                message: "Error in worker" + filename + ": " + message,
                stack: error.stack
            }
        });
        error.preventDefault();
    };

    RemoteWorker.prototype.test_state = function(data) {
        var remote_test = this.tests[data.test.index];
        if (!remote_test) {
            remote_test = new RemoteTest(data.test);
            this.tests[data.test.index] = remote_test;
        }
        remote_test.update_state_from(data.test);
        tests.notify_test_state(remote_test);
    };

    RemoteWorker.prototype.test_done = function(data) {
        var remote_test = this.tests[data.test.index];
        remote_test.update_state_from(data.test);
        remote_test.done();
        tests.result(remote_test);
    };

    RemoteWorker.prototype.worker_done = function(data) {
        if (tests.status.status === null &&
            data.status.status !== data.status.OK) {
            tests.status.status = data.status.status;
            tests.status.message = data.status.message;
            tests.status.stack = data.status.stack;
        }
        this.running = false;
        this.worker = null;
        if (tests.all_done()) {
            tests.complete();
        }
    };

    RemoteWorker.prototype.message_handlers = {
        test_state: RemoteWorker.prototype.test_state,
        result: RemoteWorker.prototype.test_done,
        complete: RemoteWorker.prototype.worker_done
    };

    

    function TestsStatus()
    {
        this.status = null;
        this.message = null;
        this.stack = null;
    }

    TestsStatus.statuses = {
        OK:0,
        ERROR:1,
        TIMEOUT:2
    };

    TestsStatus.prototype = merge({}, TestsStatus.statuses);

    TestsStatus.prototype.structured_clone = function()
    {
        if (!this._structured_clone) {
            var msg = this.message;
            msg = msg ? String(msg) : msg;
            this._structured_clone = merge({
                status:this.status,
                message:msg,
                stack:this.stack
            }, TestsStatus.statuses);
        }
        return this._structured_clone;
    };

    function Tests()
    {
        this.tests = [];
        this.num_pending = 0;

        this.phases = {
            INITIAL:0,
            SETUP:1,
            HAVE_TESTS:2,
            HAVE_RESULTS:3,
            COMPLETE:4
        };
        this.phase = this.phases.INITIAL;

        this.properties = {};

        this.wait_for_finish = false;
        this.processing_callbacks = false;

        this.allow_uncaught_exception = false;

        this.file_is_test = false;

        this.timeout_multiplier = 1;
        this.timeout_length = test_environment.test_timeout();
        this.timeout_id = null;

        this.start_callbacks = [];
        this.test_state_callbacks = [];
        this.test_done_callbacks = [];
        this.all_done_callbacks = [];

        this.pending_workers = [];

        this.status = new TestsStatus();

        var this_obj = this;

        test_environment.add_on_loaded_callback(function() {
            if (this_obj.all_done()) {
                this_obj.complete();
            }
        });

        this.set_timeout();
    }

    Tests.prototype.setup = function(func, properties)
    {
        if (this.phase >= this.phases.HAVE_RESULTS) {
            return;
        }

        if (this.phase < this.phases.SETUP) {
            this.phase = this.phases.SETUP;
        }

        this.properties = properties;

        for (var p in properties) {
            if (properties.hasOwnProperty(p)) {
                var value = properties[p];
                if (p == "allow_uncaught_exception") {
                    this.allow_uncaught_exception = value;
                } else if (p == "explicit_done" && value) {
                    this.wait_for_finish = true;
                } else if (p == "explicit_timeout" && value) {
                    this.timeout_length = null;
                    if (this.timeout_id)
                    {
                        clearTimeout(this.timeout_id);
                    }
                } else if (p == "timeout_multiplier") {
                    this.timeout_multiplier = value;
                }
            }
        }

        if (func) {
            try {
                func();
            } catch (e) {
                this.status.status = this.status.ERROR;
                this.status.message = String(e);
                this.status.stack = e.stack ? e.stack : null;
            }
        }
        this.set_timeout();
    };

    Tests.prototype.set_file_is_test = function() {
        if (this.tests.length > 0) {
            throw new Error("Tried to set file as test after creating a test");
        }
        this.wait_for_finish = true;
        this.file_is_test = true;
        
        async_test();
    };

    Tests.prototype.set_timeout = function() {
        var this_obj = this;
        clearTimeout(this.timeout_id);
        if (this.timeout_length !== null) {
            this.timeout_id = setTimeout(function() {
                                             this_obj.timeout();
                                         }, this.timeout_length);
        }
    };

    Tests.prototype.timeout = function() {
        if (this.status.status === null) {
            this.status.status = this.status.TIMEOUT;
        }
        this.complete();
    };

    Tests.prototype.end_wait = function()
    {
        this.wait_for_finish = false;
        if (this.all_done()) {
            this.complete();
        }
    };

    Tests.prototype.push = function(test)
    {
        if (this.phase < this.phases.HAVE_TESTS) {
            this.start();
        }
        this.num_pending++;
        test.index = this.tests.push(test);
        this.notify_test_state(test);
    };

    Tests.prototype.notify_test_state = function(test) {
        var this_obj = this;
        forEach(this.test_state_callbacks,
                function(callback) {
                    callback(test, this_obj);
                });
    };

    Tests.prototype.all_done = function() {
        return (this.tests.length > 0 && test_environment.all_loaded &&
                this.num_pending === 0 && !this.wait_for_finish &&
                !this.processing_callbacks &&
                !this.pending_workers.some(function(w) { return w.running; }));
    };

    Tests.prototype.start = function() {
        this.phase = this.phases.HAVE_TESTS;
        this.notify_start();
    };

    Tests.prototype.notify_start = function() {
        var this_obj = this;
        forEach (this.start_callbacks,
                 function(callback)
                 {
                     callback(this_obj.properties);
                 });
    };

    Tests.prototype.result = function(test)
    {
        if (this.phase > this.phases.HAVE_RESULTS) {
            return;
        }
        this.phase = this.phases.HAVE_RESULTS;
        this.num_pending--;
        this.notify_result(test);
    };

    Tests.prototype.notify_result = function(test) {
        var this_obj = this;
        this.processing_callbacks = true;
        forEach(this.test_done_callbacks,
                function(callback)
                {
                    callback(test, this_obj);
                });
        this.processing_callbacks = false;
        if (this_obj.all_done()) {
            this_obj.complete();
        }
    };

    Tests.prototype.complete = function() {
        if (this.phase === this.phases.COMPLETE) {
            return;
        }
        this.phase = this.phases.COMPLETE;
        var this_obj = this;
        this.tests.forEach(
            function(x)
            {
                if (x.phase < x.phases.COMPLETE) {
                    this_obj.notify_result(x);
                    x.cleanup();
                    x.phase = x.phases.COMPLETE;
                }
            }
        );
        this.notify_complete();
    };

    Tests.prototype.notify_complete = function() {
        var this_obj = this;
        if (this.status.status === null) {
            this.status.status = this.status.OK;
        }

        forEach (this.all_done_callbacks,
                 function(callback)
                 {
                     callback(this_obj.tests, this_obj.status);
                 });
    };

    Tests.prototype.fetch_tests_from_worker = function(worker) {
        if (this.phase >= this.phases.COMPLETE) {
            return;
        }

        this.pending_workers.push(new RemoteWorker(worker));
    };

    function fetch_tests_from_worker(port) {
        tests.fetch_tests_from_worker(port);
    }
    expose(fetch_tests_from_worker, 'fetch_tests_from_worker');

    function timeout() {
        if (tests.timeout_length === null) {
            tests.timeout();
        }
    }
    expose(timeout, 'timeout');

    function add_start_callback(callback) {
        tests.start_callbacks.push(callback);
    }

    function add_test_state_callback(callback) {
        tests.test_state_callbacks.push(callback);
    }

    function add_result_callback(callback) {
        tests.test_done_callbacks.push(callback);
    }

    function add_completion_callback(callback) {
        tests.all_done_callbacks.push(callback);
    }

    expose(add_start_callback, 'add_start_callback');
    expose(add_test_state_callback, 'add_test_state_callback');
    expose(add_result_callback, 'add_result_callback');
    expose(add_completion_callback, 'add_completion_callback');

    function remove(array, item) {
        var index = array.indexOf(item);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    function remove_start_callback(callback) {
        remove(tests.start_callbacks, callback);
    }

    function remove_test_state_callback(callback) {
        remove(tests.test_state_callbacks, callback);
    }

    function remove_result_callback(callback) {
        remove(tests.test_done_callbacks, callback);
    }

    function remove_completion_callback(callback) {
       remove(tests.all_done_callbacks, callback);
    }

    

    function Output() {
        this.output_document = document;
        this.output_node = null;
        this.enabled = settings.output;
        this.phase = this.INITIAL;
    }

    Output.prototype.INITIAL = 0;
    Output.prototype.STARTED = 1;
    Output.prototype.HAVE_RESULTS = 2;
    Output.prototype.COMPLETE = 3;

    Output.prototype.setup = function(properties) {
        if (this.phase > this.INITIAL) {
            return;
        }

        
        
        this.enabled = this.enabled && (properties.hasOwnProperty("output") ?
                                        properties.output : settings.output);
    };

    Output.prototype.init = function(properties) {
        if (this.phase >= this.STARTED) {
            return;
        }
        if (properties.output_document) {
            this.output_document = properties.output_document;
        } else {
            this.output_document = document;
        }
        this.phase = this.STARTED;
    };

    Output.prototype.resolve_log = function() {
        var output_document;
        if (typeof this.output_document === "function") {
            output_document = this.output_document.apply(undefined);
        } else {
            output_document = this.output_document;
        }
        if (!output_document) {
            return;
        }
        var node = output_document.getElementById("log");
        if (!node) {
            if (!document.body || document.readyState == "loading") {
                return;
            }
            node = output_document.createElement("div");
            node.id = "log";
            output_document.body.appendChild(node);
        }
        this.output_document = output_document;
        this.output_node = node;
    };

    Output.prototype.show_status = function() {
        if (this.phase < this.STARTED) {
            this.init();
        }
        if (!this.enabled) {
            return;
        }
        if (this.phase < this.HAVE_RESULTS) {
            this.resolve_log();
            this.phase = this.HAVE_RESULTS;
        }
        var done_count = tests.tests.length - tests.num_pending;
        if (this.output_node) {
            if (done_count < 100 ||
                (done_count < 1000 && done_count % 100 === 0) ||
                done_count % 1000 === 0) {
                this.output_node.textContent = "Running, " +
                    done_count + " complete, " +
                    tests.num_pending + " remain";
            }
        }
    };

    Output.prototype.show_results = function (tests, harness_status) {
        if (this.phase >= this.COMPLETE) {
            return;
        }
        if (!this.enabled) {
            return;
        }
        if (!this.output_node) {
            this.resolve_log();
        }
        this.phase = this.COMPLETE;

        var log = this.output_node;
        if (!log) {
            return;
        }
        var output_document = this.output_document;

        while (log.lastChild) {
            log.removeChild(log.lastChild);
        }

        var harness_url = get_harness_url();
        if (harness_url !== null) {
            var stylesheet = output_document.createElementNS(xhtml_ns, "link");
            stylesheet.setAttribute("rel", "stylesheet");
            stylesheet.setAttribute("href", harness_url + "testharness.css");
            var heads = output_document.getElementsByTagName("head");
            if (heads.length) {
                heads[0].appendChild(stylesheet);
            }
        }

        var status_text_harness = {};
        status_text_harness[harness_status.OK] = "OK";
        status_text_harness[harness_status.ERROR] = "Error";
        status_text_harness[harness_status.TIMEOUT] = "Timeout";

        var status_text = {};
        status_text[Test.prototype.PASS] = "Pass";
        status_text[Test.prototype.FAIL] = "Fail";
        status_text[Test.prototype.TIMEOUT] = "Timeout";
        status_text[Test.prototype.NOTRUN] = "Not Run";

        var status_number = {};
        forEach(tests,
                function(test) {
                    var status = status_text[test.status];
                    if (status_number.hasOwnProperty(status)) {
                        status_number[status] += 1;
                    } else {
                        status_number[status] = 1;
                    }
                });

        function status_class(status)
        {
            return status.replace(/\s/g, '').toLowerCase();
        }

        var summary_template = ["section", {"id":"summary"},
                                ["h2", {}, "Summary"],
                                function()
                                {

                                    var status = status_text_harness[harness_status.status];
                                    var rv = [["section", {},
                                               ["p", {},
                                                "Harness status: ",
                                                ["span", {"class":status_class(status)},
                                                 status
                                                ],
                                               ]
                                              ]];

                                    if (harness_status.status === harness_status.ERROR) {
                                        rv[0].push(["pre", {}, harness_status.message]);
                                        if (harness_status.stack) {
                                            rv[0].push(["pre", {}, harness_status.stack]);
                                        }
                                    }
                                    return rv;
                                },
                                ["p", {}, "Found ${num_tests} tests"],
                                function() {
                                    var rv = [["div", {}]];
                                    var i = 0;
                                    while (status_text.hasOwnProperty(i)) {
                                        if (status_number.hasOwnProperty(status_text[i])) {
                                            var status = status_text[i];
                                            rv[0].push(["div", {"class":status_class(status)},
                                                        ["label", {},
                                                         ["input", {type:"checkbox", checked:"checked"}],
                                                         status_number[status] + " " + status]]);
                                        }
                                        i++;
                                    }
                                    return rv;
                                },
                               ];

        log.appendChild(render(summary_template, {num_tests:tests.length}, output_document));

        forEach(output_document.querySelectorAll("section#summary label"),
                function(element)
                {
                    on_event(element, "click",
                             function(e)
                             {
                                 if (output_document.getElementById("results") === null) {
                                     e.preventDefault();
                                     return;
                                 }
                                 var result_class = element.parentNode.getAttribute("class");
                                 var style_element = output_document.querySelector("style#hide-" + result_class);
                                 var input_element = element.querySelector("input");
                                 if (!style_element && !input_element.checked) {
                                     style_element = output_document.createElementNS(xhtml_ns, "style");
                                     style_element.id = "hide-" + result_class;
                                     style_element.textContent = "table#results > tbody > tr."+result_class+"{display:none}";
                                     output_document.body.appendChild(style_element);
                                 } else if (style_element && input_element.checked) {
                                     style_element.parentNode.removeChild(style_element);
                                 }
                             });
                });

        
        
        
        
        function escape_html(s)
        {
            return s.replace(/\&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
        }

        function has_assertions()
        {
            for (var i = 0; i < tests.length; i++) {
                if (tests[i].properties.hasOwnProperty("assert")) {
                    return true;
                }
            }
            return false;
        }

        function get_assertion(test)
        {
            if (test.properties.hasOwnProperty("assert")) {
                if (Array.isArray(test.properties.assert)) {
                    return test.properties.assert.join(' ');
                }
                return test.properties.assert;
            }
            return '';
        }

        log.appendChild(document.createElementNS(xhtml_ns, "section"));
        var assertions = has_assertions();
        var html = "<h2>Details</h2><table id='results' " + (assertions ? "class='assertions'" : "" ) + ">" +
            "<thead><tr><th>Result</th><th>Test Name</th>" +
            (assertions ? "<th>Assertion</th>" : "") +
            "<th>Message</th></tr></thead>" +
            "<tbody>";
        for (var i = 0; i < tests.length; i++) {
            html += '<tr class="' +
                escape_html(status_class(status_text[tests[i].status])) +
                '"><td>' +
                escape_html(status_text[tests[i].status]) +
                "</td><td>" +
                escape_html(tests[i].name) +
                "</td><td>" +
                (assertions ? escape_html(get_assertion(tests[i])) + "</td><td>" : "") +
                escape_html(tests[i].message ? tests[i].message : " ") +
                (tests[i].stack ? "<pre>" +
                 escape_html(tests[i].stack) +
                 "</pre>": "") +
                "</td></tr>";
        }
        html += "</tbody></table>";
        try {
            log.lastChild.innerHTML = html;
        } catch (e) {
            log.appendChild(document.createElementNS(xhtml_ns, "p"))
               .textContent = "Setting innerHTML for the log threw an exception.";
            log.appendChild(document.createElementNS(xhtml_ns, "pre"))
               .textContent = html;
        }
    };

    

    function is_single_node(template)
    {
        return typeof template[0] === "string";
    }

    function substitute(template, substitutions)
    {
        if (typeof template === "function") {
            var replacement = template(substitutions);
            if (!replacement) {
                return null;
            }

            return substitute(replacement, substitutions);
        }

        if (is_single_node(template)) {
            return substitute_single(template, substitutions);
        }

        return filter(map(template, function(x) {
                              return substitute(x, substitutions);
                          }), function(x) {return x !== null;});
    }

    function substitute_single(template, substitutions)
    {
        var substitution_re = /\$\{([^ }]*)\}/g;

        function do_substitution(input) {
            var components = input.split(substitution_re);
            var rv = [];
            for (var i = 0; i < components.length; i += 2) {
                rv.push(components[i]);
                if (components[i + 1]) {
                    rv.push(String(substitutions[components[i + 1]]));
                }
            }
            return rv;
        }

        function substitute_attrs(attrs, rv)
        {
            rv[1] = {};
            for (var name in template[1]) {
                if (attrs.hasOwnProperty(name)) {
                    var new_name = do_substitution(name).join("");
                    var new_value = do_substitution(attrs[name]).join("");
                    rv[1][new_name] = new_value;
                }
            }
        }

        function substitute_children(children, rv)
        {
            for (var i = 0; i < children.length; i++) {
                if (children[i] instanceof Object) {
                    var replacement = substitute(children[i], substitutions);
                    if (replacement !== null) {
                        if (is_single_node(replacement)) {
                            rv.push(replacement);
                        } else {
                            extend(rv, replacement);
                        }
                    }
                } else {
                    extend(rv, do_substitution(String(children[i])));
                }
            }
            return rv;
        }

        var rv = [];
        rv.push(do_substitution(String(template[0])).join(""));

        if (template[0] === "{text}") {
            substitute_children(template.slice(1), rv);
        } else {
            substitute_attrs(template[1], rv);
            substitute_children(template.slice(2), rv);
        }

        return rv;
    }

    function make_dom_single(template, doc)
    {
        var output_document = doc || document;
        var element;
        if (template[0] === "{text}") {
            element = output_document.createTextNode("");
            for (var i = 1; i < template.length; i++) {
                element.data += template[i];
            }
        } else {
            element = output_document.createElementNS(xhtml_ns, template[0]);
            for (var name in template[1]) {
                if (template[1].hasOwnProperty(name)) {
                    element.setAttribute(name, template[1][name]);
                }
            }
            for (var i = 2; i < template.length; i++) {
                if (template[i] instanceof Object) {
                    var sub_element = make_dom(template[i]);
                    element.appendChild(sub_element);
                } else {
                    var text_node = output_document.createTextNode(template[i]);
                    element.appendChild(text_node);
                }
            }
        }

        return element;
    }

    function make_dom(template, substitutions, output_document)
    {
        if (is_single_node(template)) {
            return make_dom_single(template, output_document);
        }

        return map(template, function(x) {
                       return make_dom_single(x, output_document);
                   });
    }

    function render(template, substitutions, output_document)
    {
        return make_dom(substitute(template, substitutions), output_document);
    }

    
    function assert(expected_true, function_name, description, error, substitutions)
    {
        if (tests.tests.length === 0) {
            tests.set_file_is_test();
        }
        if (expected_true !== true) {
            var msg = make_message(function_name, description,
                                   error, substitutions);
            throw new AssertionError(msg);
        }
    }

    function AssertionError(message)
    {
        this.message = message;
        this.stack = this.get_stack();
    }

    AssertionError.prototype = Object.create(Error.prototype);

    AssertionError.prototype.get_stack = function() {
        var stack = new Error().stack;
        
        if (!stack) {
            try {
                throw new Error();
            } catch (e) {
                stack = e.stack;
            }
        }

        
        if (!stack) {
            return "(Stack trace unavailable)";
        }

        var lines = stack.split("\n");

        
        
        
        
        var script_url = get_script_url();
        var re_text = script_url ? script_url.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') : "\\btestharness.js";
        var re = new RegExp(re_text + ":\\d+:\\d+");

        
        
        var i = 0;
        while (!re.test(lines[i]) && i < lines.length) {
            i++;
        }

        
        while (re.test(lines[i]) && i < lines.length) {
            i++;
        }

        
        if (i >= lines.length) {
            return stack;
        }

        return lines.slice(i).join("\n");
    }

    function make_message(function_name, description, error, substitutions)
    {
        for (var p in substitutions) {
            if (substitutions.hasOwnProperty(p)) {
                substitutions[p] = format_value(substitutions[p]);
            }
        }
        var node_form = substitute(["{text}", "${function_name}: ${description}" + error],
                                   merge({function_name:function_name,
                                          description:(description?description + " ":"")},
                                          substitutions));
        return node_form.slice(1).join("");
    }

    function filter(array, callable, thisObj) {
        var rv = [];
        for (var i = 0; i < array.length; i++) {
            if (array.hasOwnProperty(i)) {
                var pass = callable.call(thisObj, array[i], i, array);
                if (pass) {
                    rv.push(array[i]);
                }
            }
        }
        return rv;
    }

    function map(array, callable, thisObj)
    {
        var rv = [];
        rv.length = array.length;
        for (var i = 0; i < array.length; i++) {
            if (array.hasOwnProperty(i)) {
                rv[i] = callable.call(thisObj, array[i], i, array);
            }
        }
        return rv;
    }

    function extend(array, items)
    {
        Array.prototype.push.apply(array, items);
    }

    function forEach(array, callback, thisObj)
    {
        for (var i = 0; i < array.length; i++) {
            if (array.hasOwnProperty(i)) {
                callback.call(thisObj, array[i], i, array);
            }
        }
    }

    function merge(a,b)
    {
        var rv = {};
        var p;
        for (p in a) {
            rv[p] = a[p];
        }
        for (p in b) {
            rv[p] = b[p];
        }
        return rv;
    }

    function expose(object, name)
    {
        var components = name.split(".");
        var target = test_environment.global_scope();
        for (var i = 0; i < components.length - 1; i++) {
            if (!(components[i] in target)) {
                target[components[i]] = {};
            }
            target = target[components[i]];
        }
        target[components[components.length - 1]] = object;
    }

    function is_same_origin(w) {
        try {
            'random_prop' in w;
            return true;
        } catch (e) {
            return false;
        }
    }

    
    function get_script_url()
    {
        if (!('document' in self)) {
            return undefined;
        }

        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            var src;
            if (scripts[i].src) {
                src = scripts[i].src;
            } else if (scripts[i].href) {
                
                src = scripts[i].href.baseVal;
            }

            var matches = src && src.match(/^(.*\/|)testharness\.js$/);
            if (matches) {
                return src;
            }
        }
        return undefined;
    }

    
    function get_harness_url()
    {
        var script_url = get_script_url();

        
        return script_url ? script_url.slice(0, script_url.lastIndexOf('/') + 1) : undefined;
    }

    function supports_post_message(w)
    {
        var supports;
        var type;
        
        
        
        
        
        
        
        
        try {
            type = typeof w.postMessage;
            if (type === "function") {
                supports = true;
            }

            
            
            else if (type === "object") {
                supports = true;
            }

            
            
            else {
                supports = false;
            }
        } catch (e) {
            
            
            supports = false;
        }
        return supports;
    }

    

    var tests = new Tests();

    addEventListener("error", function(e) {
        if (tests.file_is_test) {
            var test = tests.tests[0];
            if (test.phase >= test.phases.HAS_RESULT) {
                return;
            }
            test.set_status(test.FAIL, e.message, e.stack);
            test.phase = test.phases.HAS_RESULT;
            test.done();
            done();
        } else if (!tests.allow_uncaught_exception) {
            tests.status.status = tests.status.ERROR;
            tests.status.message = e.message;
            tests.status.stack = e.stack;
        }
    });

    test_environment.on_tests_ready();

})();

