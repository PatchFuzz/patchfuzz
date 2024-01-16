





function call_replace_close_to_stack_overflow() {
  try {
    call_replace_close_to_stack_overflow();
  } catch {
    "b".replace(/(b)/g);
  }
}

call_replace_close_to_stack_overflow();
