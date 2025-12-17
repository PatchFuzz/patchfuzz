delete Error.stackTraceLimit

Object.hasOwn(Error(), "column")
Error.stackTraceLimit = 10

Object.hasOwn(Error(), "column")