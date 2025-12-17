top();


function top() {
  
  
  f().catch(catchError);
}

async function f() {
  
  
  g();
}

function g() {
  
  saveStack();

  
  
  let frame = saveStack();

  print(frame.functionDisplayName, 'g');
  print(parent(frame).functionDisplayName, 'f');
  print(parent(parent(frame)).functionDisplayName, 'top');
}



function parent(frame) {
  do {
    frame = frame.parent || frame.asyncParent;
  } while (frame.source.match(/self-hosted/));
  return frame;
}

function catchError(e) {
  print(`${e}\n${e.stack}`);
  quit(1)
}
