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
csvpath = r"D:\workspace\WebKit\v8-2023-2-27.csv"
outpath =r"D:\workspace\newpoc\v8" +'\\' + date
folder = mkdir(outpath)

#pf=pd.read_csv(csvpath,usecols=['hash','poc','date'],nrows=4000,squeeze=True)
pf=pd.read_csv(csvpath,usecols=['hash','poc','date'],squeeze=True)
data=pf.dropna().values.tolist()
print(data)

def extrac_webkit_poc(export):
    num=0
    first=""
    last=""
    temp=0
    for f in export:
        poc = re.compile('([\w/-]+.js)').findall(f[2])
        if len(poc)>0:
            for i in poc:
                fn = re.compile('[\w-]+(?=.js)').search(i)
                # print(fn)
                # print(i)
                if fn:
                    fnn = f[0]+f[1][0:5]+fn.group(0)+'.js'
                    try:
                        shutil.copy(i,outpath+'\\'+fnn)
                    except FileNotFoundError:
                        print(fn.group(0))
                        # print("------------------------------------------------------------")
                        # print("Not Found!".center(60,' '))
                        # print(i.center(60, ' '))
                        # print(("commit:%s"%(f[1])).center(60,' '))
                        # print("------------------------------------------------------------")

                    else:
                        num+=1
                        temp=f[2]
                        last= f[0]
                        if(num==1): first = f[0]
                        #print(fnn)
    print("The date of first poc:",first) 
    print("The date of last poc:",last)   
    print("Number of poc: ",num)
def extrac_v8_poc(export):
    num=0
    first=""
    last=""
    temp=0
    for f in export:
        poc = re.compile('([\w/-]+.js)').findall(f[2])
        if len(poc)>0:
            for i in poc:
                fn = re.compile('[\w-]+(?=.js)').search(i)
                # print(fn)
                # print(i)
                if fn:
                    if bool(re.match('regress', fn.group(0), re.IGNORECASE)):
                        fnn = f[0] + f[1][0:5] + fn.group(0) + '.js'

                        try:
                            shutil.copy(i,outpath+'\\'+fnn)
                        except FileNotFoundError:
                            print(fn.group(0))
                            # print("------------------------------------------------------------")
                            # print("Not Found!".center(60,' '))
                            # print(i.center(60, ' '))
                            # print(("commit:%s"%(f[1])).center(60,' '))
                            # print("------------------------------------------------------------")

                        else:
                            num+=1
                            temp=f[2]
                            last= f[0]
                            if(num==1): first = f[0]
                        #print(fnn)
                    else:
                        pass
    print("The date of first poc:",first) 
    print("The date of last poc:",last)   
    print("Number of poc: ",num)
if __name__ == '__main__':
    extrac_v8_poc(data)
    #print(data)