import pandas as pd
import os,shutil
import subprocess
csvpath = ["/data/patchFuzz/zxw/sp/sp-2023-03-23.csv","/data/patchFuzz/zxw/jsc/jsc-2023-03-23.csv",
           "/data/patchFuzz/zxw/v8/v8-2023-03-23.csv","/data/patchFuzz/zxw/ch/ch-2023-03-22.csv",
           "/data/patchFuzz/zxw/je/je-2023-03-22.csv"]

def getRandomSample():
    for p in csvpath:
        target = p[-17:-15]
        path = "/data/patchFuzz/sample_" + target + ".csv"
        pf = pd.read_csv(p,usecols=['hash','date','ctype'])
        sample_bug = pf[pf['ctype']=='bug'].sample(n=50).loc[:,'hash':'ctype']
        sample_ohter = pf[pf['ctype']=='other'].sample(n=50).loc[:,'hash':'ctype']
        pd.merge(sample_bug,sample_ohter,how='outer').to_csv(path,header=None, index=None)

def getMessageOfSample():
    pf=pd.read_csv('/home/data/patchFuzz/sample_v8.csv',usecols=['hash'])
    file = open('/home/data/patchFuzz/v8_message.txt','w')

    for i in pf['hash']:
        p = subprocess.run(["git","log","-1","--name-status",i], stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=2,cwd="/home/ubuntu/v8/v8")
        file.write(p.stdout.decode()+"\n")
    file.close() 

getMessageOfSample() 
   
