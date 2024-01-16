






const KINDS = [
  "block",
  "loop",
  "try",
  "catch",
  "if",
  "else",
]
const INITIALIZED = [
  "nowhere",
  "outer",
  "inner",
  "outer-tee",
  "inner-tee",
];
const USED = [
  "outer",
  "inner",
  "after-inner",
  "after-outer",
];

function generateBlock(kind, contents) {
  switch (kind) {
    case "block": {
      return `block\n${contents}end\n`
    }
    case "loop": {
      return `loop\n${contents}end\n`
    }
    case "try": {
      return `try\n${contents}end\n`
    }
    case "catch": {
      return `try\ncatch_all\n${contents}end\n`
    }
    case "if": {
      return `i32.const 0\nif\n${contents}end\n`
    }
    case "else": {
      return `i32.const 0\nif\nelse\n${contents}end\n`
    }
  }
}

















function generateModule(outerBlockKind, innerBlockKind, initializedWhere, usedWhere) {
  const INITIALIZE_STMT = '(local.set 0 ref.func 0)\n';
  const INITIALIZE_STMT2 = '(drop (local.tee 0 ref.func 0))\n';
  const USE_STMT = '(drop local.get 0)\n';

  
  let innerBlockContents = '';
  if (initializedWhere === 'inner') {
    innerBlockContents += INITIALIZE_STMT;
  } else if (initializedWhere === 'inner-tee') {
    innerBlockContents += INITIALIZE_STMT2;
  }
  if (usedWhere === 'inner') {
    innerBlockContents += USE_STMT;
  }
  let innerBlock = generateBlock(innerBlockKind, innerBlockContents);

  
  let outerBlockContents = '';
  if (initializedWhere === 'outer') {
    outerBlockContents += INITIALIZE_STMT;
  } else if (initializedWhere === 'outer-tee') {
    outerBlockContents += INITIALIZE_STMT2;
  }
  if (usedWhere === 'outer') {
    outerBlockContents += USE_STMT;
  }
  outerBlockContents += innerBlock;
  if (usedWhere === 'after-inner') {
    outerBlockContents += USE_STMT;
  }
  let outerBlock = generateBlock(outerBlockKind, outerBlockContents);

  
  let afterOuterBlock = '';
  if (usedWhere === 'after-outer') {
    afterOuterBlock += USE_STMT;
  }

  return `(module
  (type $t (func))
  (func (export "test")
    (local (ref $t))
${outerBlock}${afterOuterBlock}  )
)`;
}

const LOGGING = false;

for (let outer of KINDS) {
  for (let inner of KINDS) {
    for (let initialized of INITIALIZED) {
      for (let used of USED) {
        let text = generateModule(outer, inner, initialized, used);

        let expectPass;
        switch (initialized) {
          case "outer":
          case "outer-tee": {
            
            
            
            expectPass = used !== "after-outer";
            break;
          }
          case "inner":
          case "inner-tee": {
            
            
            
            
            
            expectPass = used === "inner";
            break;
          }
          case "nowhere": {
            
            
            expectPass = false;
            break;
          }
        }

        if (LOGGING) {
          console.log();
          console.log(`TEST: outer=${outer}, inner=${inner}, initialized=${initialized}, used=${used}`);
          console.log(expectPass ? "EXPECT PASS" : "EXPECT FAIL");
          console.log(text);
        }

        let binary = wasmTextToBinary(text);
        assertEq(WebAssembly.validate(binary), expectPass);
        if (!expectPass) {
          
          try {
            new WebAssembly.Module(binary);
          } catch (ex) {
            assertEq(true, /local\.get read from unset local/.test(ex.message));
          }
        }
      }
    }
  }
}
