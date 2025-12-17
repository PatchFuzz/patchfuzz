print(() => {
  Promise()
}, TypeError, "Promise constructor cannot be invoked without 'new'");
