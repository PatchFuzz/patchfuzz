import pandas as pd
import re,shutil,os
import datetime


def mkdir(path):
 
	folder = os.path.exists(path)
 
	if not folder:                  
		os.makedirs(path)            
		print("---  new folder...  ---")
		print("---  OK  ---")
 
	else:
		print("---  There is this folder!  ---")

date = datetime.date.today().strftime('%Y-%m-%d')
csvpath = r"D:\workspace\WebKit\gitlog.csv"
outpath =r"D:\workspace\newpoc\webkit" +'\\' + date
folder = mkdir(outpath)

pf=pd.read_csv(csvpath,usecols=['hash','poc','date'],nrows=4000,squeeze=True)
data=pf.dropna().values.tolist()


def extrac_poc(export):
    num=0
    temp=0
    for f in export:
        poc = re.compile('([\w/-]*.js)').match(f[2])
        if poc:
            fn = re.compile('[\w-]*(?=.js)').search(poc.group(1))
            if fn:
                fnn = fn.group(0)+'.js'
                try:
                    shutil.copy(poc.group(1),outpath+'\\'+fnn)
                except FileNotFoundError:
                    print("------------------------------------------------------------")
                    print("Not Found!".center(60,' '))
                    print(poc.group(1).center(60, ' '))
                    print(("commit:%s"%(f[1])).center(60,' '))
                    print("------------------------------------------------------------")
                else:
                    num+=1
                    temp=f[2]
                    if(num==1): print("The date of first poc:",f[0])
                    #print(fnn)
    print("The date of last poc:",f[0])   
    print("Number of poc: ",num)
if __name__ == '__main__':
    extrac_poc(data)
    #print(data)