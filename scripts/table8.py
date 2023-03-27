import pandas as pd
csvpath = ["/data/patchFuzz/zxw/sp/sp-2023-03-23.csv","/data/patchFuzz/zxw/jsc/jsc-2023-03-23.csv",
           "/data/patchFuzz/zxw/v8/v8-2023-03-23.csv","/data/patchFuzz/zxw/ch/ch-2023-03-22.csv",
           "/data/patchFuzz/zxw/je/je-2023-03-22.csv"]
for p in csvpath:
    target = p[-17:-15]
    path = "/data/sample_" + target + ".csv"
    pf = pd.read_csv(p,usecols=['hash','date','ctype'])
    sample_bug = pf[pf['ctype']=='bug'].sample(n=50).loc[:,'hash':'ctype']
    sample_ohter = pf[pf['ctype']=='other'].sample(n=50).loc[:,'hash':'ctype']
    pd.merge(sample_bug,sample_ohter,how='outer').to_csv(path,header=None, index=None)