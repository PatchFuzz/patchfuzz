import pandas as pd
csvpath = ["/data/patchFuzz/zxw/sp/sp-2023-03-30.csv","/data/patchFuzz/zxw/jsc/jsc-2023-03-30.csv",
           "/data/patchFuzz/zxw/v8/v8-2023-03-30.csv","/data/patchFuzz/zxw/ch/ch-2023-03-30.csv",
           "/data/patchFuzz/zxw/je/je-2023-03-30.csv"]
for p in csvpath:
    pf = pd.read_csv(p,usecols=['hash','date','ctype'])
    print(p,pf['ctype'].value_counts())
    print(pf['date'])