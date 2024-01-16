
































function unbalanced_switch(a) {
  try {
    switch (a) {
      default: break;
    }
  } catch (e) {}
  gc();
}

unbalanced_switch(1);
