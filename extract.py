import pandas as pd
import re,shutil,os
import datetime
from utils import mkdir



date = datetime.date.today().strftime('%Y-%m-%d')
csvpath_je = r"D:\workspace\je-2023-03-02.csv"
csvpath_v8 = r"D:\workspace\v8-2023-03-02.csv"
csvpath_wb = r"D:\workspace\webkit-2023-03-02.csv"
csvpath_sp = r"D:\workspace\sp-2023-03-02.csv"
csvpath_ch = r"D:\workspace\ch-2023-03-02.csv"


#pf=pd.read_csv(csvpath,usecols=['hash','poc','date'],nrows=4000,squeeze=True)

#print(data)
def extrac_webkit_poc():
    basepath = r"D:\workspace\WebKit"
    outpath =r"D:\workspace\newpoc" + '\\webkit' +  + '\\' + date
    mkdir(outpath)
    pf=pd.read_csv(csvpath_wb,usecols=['hash','poc','date'],squeeze=True)
    data=pf.dropna().values.tolist()
    num=0
    first=""
    last=""
    temp=0
    for f in data:
        poc = re.compile('([\w/-]+.js)').findall(f[2])
        if len(poc)>0:
            for i in poc:
                fn = re.compile('[\w-]+(?=.js)').search(i)
                # print(fn)
                # print(i)
                if fn:
                    fnn = f[0]+f[1][0:5]+fn.group(0)+'.js'
                    try:
                        shutil.copy(basepath+'\\'+i,outpath+'\\'+fnn)
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
def extrac_v8_poc():
    basepath = r"D:\workspace\v8"
    outpath =r"D:\workspace\newpoc" + '\\v8\\' + date
    mkdir(outpath)
    pf=pd.read_csv(csvpath_v8,usecols=['hash','poc','date'],squeeze=True)
    data=pf.dropna().values.tolist()
    num=0
    first=""
    last=""
    temp=0
    for f in data:
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
                            shutil.copy(basepath+'\\'+i,outpath+'\\'+fnn)
                        except FileNotFoundError as e:
                            print(e)
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

def extrac_sp_poc():
    basepath = r"D:\workspace\gecko-dev"
    outpath =r"D:\workspace\newpoc" + '\\sp\\' + date
    mkdir(outpath)
    pf=pd.read_csv(csvpath_sp,usecols=['hash','poc','date'],squeeze=True)
    data=pf.dropna().values.tolist()
    num=0
    first=""
    last=""
    temp=0
    for f in data:
        poc = re.compile('([\w/-]+.js)').findall(f[2])
        if len(poc)>0:
            for i in poc:
                fn = re.compile('[\w-]+(?=.js)').search(i)
                # print(fn)
                print(i)
                if fn:
                    fnn = f[0]+f[1][0:5]+fn.group(0)+'.js'
                    try:
                        shutil.copy(basepath+'\\'+i,outpath+'\\'+fnn)
                    except FileNotFoundError as e:
                        print(e)
                        #print(fn.group(0))
                        # print("------------------------------------------------------------")
                        # print("Not Found!".center(60,' '))
                        # print(i.center(60, ' '))
                        # print(("commit:%s"%(f[1])).center(60,' '))
                        # print("------------------------------------------------------------")
                    except PermissionError:
                        pass
                    else:
                        num+=1
                        temp=f[2]
                        last= f[0]
                        if(num==1): first = f[0]
                        #print(fnn)
    print("The date of first poc:",first) 
    print("The date of last poc:",last)   
    print("Number of poc: ",num)

def extrac_ch_poc():
    basepath = r"D:\workspace\ChakraCore"
    outpath =r"D:\workspace\newpoc" + '\\ch\\' + date
    mkdir(outpath)
    pf=pd.read_csv(csvpath_ch,usecols=['hash','poc','date'],squeeze=True)
    data=pf.dropna().values.tolist()
    num=0
    first=""
    last=""
    temp=0
    for f in data:
        poc = re.compile('([\w/-]+.js)').findall(f[2])
        if len(poc)>0:
            for i in poc:
                fn = re.compile('[\w-]+(?=.js)').search(i)
                # print(fn)
                # print(i)
                if fn:
                    fnn = f[0]+f[1][0:5]+fn.group(0)+'.js'
                    try:
                        shutil.copy(basepath+'\\'+i,outpath+'\\'+fnn)
                    except FileNotFoundError as e:
                        print(e)
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

def extrac_je_poc():
    basepath = r"D:\workspace\jerryscript"
    outpath =r"D:\workspace\newpoc" + '\\je\\' + date
    mkdir(outpath)
    pf=pd.read_csv(csvpath_je,usecols=['hash','poc','date'],squeeze=True)
    data=pf.dropna().values.tolist()
    num=0
    first=""
    last=""
    temp=0
    for f in data:
        poc = re.compile('([\w/-]+.js)').findall(f[2])
        if len(poc)>0:
            for i in poc:
                fn = re.compile('[\w-]+(?=.js)').search(i)
                # print(fn)
                print(i)
                if fn:
                    fnn = f[0]+f[1][0:5]+fn.group(0)+'.js'
                    try:
                        shutil.copy(basepath+'\\'+i,outpath+'\\'+fnn)
                    except FileNotFoundError as e:
                        print(e)
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

if __name__ == '__main__':
    extrac_webkit_poc()
    extrac_v8_poc()
    extrac_ch_poc()
    extrac_sp_poc()
    extrac_je_poc()
