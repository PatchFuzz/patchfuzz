


sandbox = newGlobal('')
evalcx("x=[]", sandbox)
evalcx("\
  x[0] = this;\
  Object.defineProperty(x, 0, {})\
", sandbox)
gc()
evalcx("x.shift()", sandbox)
