
target = {};
registry = new FinalizationRegistry(value => undefined);
registry.register(target, 1);
grayRoot()[0] = registry;
registry = undefined;
gc(); 
target = undefined;
gc(); 
drainJobQueue();
