ignoreUnhandledRejections();

oomTest(() => import("module1.js"));
oomTest(() => import("cyclicImport1.js"));
