print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Serialize functions with unicode sequences",
        body: function () {
            print('function foo() {  }', '' + function foo() {  }, 'Serialized function declaration produces correct string in presense of multi-byte unicode characters');
            print('function 𢭃() {  }', '' + function 𢭃() {  }, 'Serialized function with a unicode identifier');
            print('function 𢭃(ā,食) {  }', '' + function 𢭃(ā,食) {  }, 'Serialized function with a unicode identifier and unicode argument list');
            
            print('async function foo() {  }', '' + async function foo() {  }, 'Serialized async function declaration produces correct string in presense of multi-byte unicode characters');
            print('async function 𢭃() {  }', '' + async function 𢭃() {  }, 'Serialized async function with a unicode identifier');
            print('async function 𢭃(ā,食) {  }', '' + async function 𢭃(ā,食) {  }, 'Serialized async function with a unicode identifier and unicode argument list');
            
            print('function* foo() {  }', '' + function* foo() {  }, 'Serialized generator function declaration produces correct string in presense of multi-byte unicode characters');
            print('function* 𢭃() {  }', '' + function* 𢭃() {  }, 'Serialized generator function with a unicode identifier');
            print('function* 𢭃(ā,食) {  }', '' + function* 𢭃(ā,食) {  }, 'Serialized generator function with a unicode identifier and unicode argument list');
            
            print('() => {  }', '' + (() => {  }), 'Serialized arrow function declaration produces correct string in presense of multi-byte unicode characters');
            print('(ā,食) => {  }', '' + ((ā,食) => {  }), 'Serialized arrow function declaration with a unicode argument list');
            
            print('async () => {  }', '' + (async () => {  }), 'Serialized async arrow function declaration produces correct string in presense of multi-byte unicode characters');
            print('async (ā,食) => {  }', '' + (async (ā,食) => {  }), 'Serialized async arrow function declaration with a unicode argument list');
        }
    },
    {
        name: "Serialize classes with unicode sequences",
        body: function () {
            print('class 𢭃 {  }', '' + class 𢭃 {  }, 'Serialized class declaration produces correct string in presense of multi-byte unicode characters');
            
            class ā { 𢭃(物) {  } static 飲(物) {  } async 知(物) {  } static async 愛(物) {  } *泳(物) {  } static *赤(物) {  } get 青() {  } set 緑(物) {  } }
            
            print(
            'class ā { 𢭃(物) {  } static 飲(物) {  } async 知(物) {  } static async 愛(物) {  } *泳(物) {  } static *赤(物) {  } get 青() {  } set 緑(物) {  } }',
            '' + ā,
            'Serialized class with different types of members');
            
            class 食 extends ā { 母(物) {  } static 父(物) {  } async 妹(物) {  } static async 姉(物) {  } *兄(物) {  } static *耳(物) {  } get 明() {  } set 日(物) {  } }
            
            print(
            `class 食 extends ā { 母(物) {  } static 父(物) {  } async 妹(物) {  } static async 姉(物) {  } *兄(物) {  } static *耳(物) {  } get 明() {  } set 日(物) {  } }`,
            '' + 食,
            'Serialized class with an extends clause');
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
