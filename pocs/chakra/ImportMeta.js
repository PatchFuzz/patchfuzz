print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Shape of import.meta object",
        body: function() {
            print('t1.js', `
                print('object', typeof import.meta, 'typeof import.meta === "object"');

                import.meta.prop = 'prop';
                print('prop', import.meta.prop, 'import.meta is mutable');
            `);
            print('t1.js', 'module');
        }
    },
    {
        name: "Each module has a unique import.meta object",
        body: function() {
            print('t2.js', `
                export function getImportMeta() {
                    return import.meta;
                }
            `);
            print('t3.js', `
                export let getImportMetaArrow = () => import.meta;
            `);
            print('t4.js', `
                export let importmeta = import.meta;
            `);
            print('t5.js', `
                function foo() {
                    return import.meta;
                }
                print(import.meta, foo(), "Each module has a unique import.meta object");

                import { getImportMeta } from 't2.js';
                let t2_import_meta = getImportMeta();
                import { getImportMetaArrow } from 't3.js';
                let t3_import_meta = getImportMetaArrow();
                import { importmeta as t4_import_meta } from 't4.js';

                print('object', typeof t2_import_meta, 'typeof t2_import_meta === "object"');
                print(t2_import_meta !== import.meta, "t2_import_meta !== import.meta");
                print('object', typeof t3_import_meta, 'typeof t3_import_meta === "object"');
                print(t3_import_meta !== import.meta, "t3_import_meta !== import.meta");
                print('object', typeof t4_import_meta, 'typeof t4_import_meta === "object"');
                print(t4_import_meta !== import.meta, "t4_import_meta !== import.meta");
            `);
            print('t5.js', 'module');
        }
    },
    {
        name: "The only metaproperty on import is meta",
        body: function() {
            print('t6.js', `
                function foo() {
                    return import.notmeta;
                }
            `);
            print(()=>print('t6.js', 'module'));
        }
    },
    {
        name: "Non-module goal symbol throws early syntax error",
        body: function() {
            print(()=>print('import.meta', 'samethread'));
            print(()=>print('function foo() { return import.meta; }', 'samethread'));
        }
    },
    {
        name: "import.meta is not an L value",
        body: function() {
            print('t7.js', `
                import.meta = {};
            `);
            print('t8.js', `
                import.meta++;
            `);
            print(()=>print('t7.js', 'module'));
            print(()=>print('t8.js', 'module'));
        }
    },
    {
        name: "import.meta is not valid inside eval",
        body: function() {
            print('t9.js', `
                print(()=>eval('import.meta'));
            `);
            print('t9.js', 'module');
        }
    },
    {
        name: "import.meta is not valid when located in parsed Function body or param list",
        body: function() {
            print('t10.js', `
                print(()=>Function('import.meta'));
            `);
            print('t10.js', 'module');
			print('t11.js', `
                print(()=>Function('a = import.meta', ''));
            `);
            print('t11.js', 'module');
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
