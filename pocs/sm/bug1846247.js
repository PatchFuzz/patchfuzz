ignoreUnhandledRejections();
oomTest(() => {
  gc();
  import("javascript:0");
  drainJobQueue();
});
