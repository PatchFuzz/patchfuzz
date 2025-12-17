const err = new Error(undefined);
delete err.stack;
err.cause = err;

const err_serialized = d8.serializer.serialize(err);
d8.serializer.deserialize(err_serialized);
