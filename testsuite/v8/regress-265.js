































function test0() {
  try {
    try {
      return 0;
    } finally {
      try {
        return 0;
      } finally {
      }
    }
  } finally {
  }
}

test0();

function test1() {
L0:
  try {
    try {
      break L0;
    } finally {
      try {
        break L0;
      } finally {
      }
    }
  } finally {
  }
}

test1();
