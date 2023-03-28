import pandas as pd
import os,shutil,re
import subprocess
import sys 


csvpath = ["/data/patchFuzz/zxw/sp/sp-2023-03-23.csv","/data/patchFuzz/zxw/jsc/jsc-2023-03-23.csv",
           "/data/patchFuzz/zxw/v8/v8-2023-03-23.csv","/data/patchFuzz/zxw/ch/ch-2023-03-22.csv",
           "/data/patchFuzz/zxw/je/je-2023-03-22.csv"]

def parse_jsc_commit(commitLines):
    commits = []
    # dict to store commit data
    commit = {}
    # iterate lines and save
    for nextLine in commitLines:

        if nextLine == '' or nextLine == '\n':
            # ignore empty lines
            pass
        elif bool(re.match('commit', nextLine, re.IGNORECASE)):
            # commit xxxx
            if len(commit) != 0:		## new commit, so re-initialize
                commits.append(commit)
                commit = {}
            commit = {'hash' : re.match('commit (.*)', nextLine, re.IGNORECASE).group(1) }
            commit['urlofbug'] = ""
            commit['ctype'] = "other"
            commit['poc'] = []
            commit['changedfiles'] = []
            commit['component'] = ""
            ismerge = False
        elif bool(re.match('merge:', nextLine, re.IGNORECASE)):
            ismerge = True
            pass 
        elif bool(re.match('author:', nextLine, re.IGNORECASE)):
            # Author: xxxx <xxxx@xxxx.com>
            m = re.compile('Author: (.*) <(.*)>').match(nextLine)
            if m:
                commit['author'] = m.group(1)
                commit['email'] = m.group(2)
        elif bool(re.match('date:', nextLine, re.IGNORECASE)):
            t = re.compile('Date:   (.*)').match(nextLine)
            commit['date'] = t.group(1)
        elif bool(re.match('    ', nextLine, re.IGNORECASE)) and not ismerge:
            if bool(re.match('bug', nextLine.strip(), re.IGNORECASE)) or bool(re.search('fix', nextLine.strip(), re.IGNORECASE)): commit['ctype'] = "bug"
            elif bool(re.search('bugs.webkit.org',nextLine)) or bool(re.search('http://webkit.org/b/',nextLine)):
                commit['urlofbug'] = nextLine.strip()
                commit['ctype'] = "bug"

        
        elif bool(re.match('[MAD]\t', nextLine, re.IGNORECASE)) :
            if bool(re.compile('JSTests/stress').match(nextLine[2:])):
                commit['ctype'] = "bug"
                commit['poc'].append(nextLine[2:])
            if commit['ctype'] == "bug":
                commit['changedfiles'].append(nextLine[2:])

        elif bool(re.match('[MADCRT][0-9]?[0-9]?[0-9]?\t', nextLine, re.IGNORECASE)):
            pass
        
        else:
            pass
    commits.append(commit)
    return commits
def parse_v8_commit(commitLines):
    commits = []
    # dict to store commit data
    commit = {}
    # iterate lines and save
    for nextLine in commitLines:

        if nextLine == '' or nextLine == '\n':
            # ignore empty lines
            pass
        elif bool(re.match('commit', nextLine, re.IGNORECASE)):
            # commit xxxx
            if len(commit) != 0:		## new commit, so re-initialize
                commits.append(commit)
                commit = {}
            commit = {'hash' : re.match('commit (.*)', nextLine, re.IGNORECASE).group(1) }
            commit['urlofbug'] = ""
            commit['ctype'] = "other"
            commit['poc'] = []
            commit['changedfiles'] = []
            commit['component'] = ""
            ismerge = False
        elif bool(re.match('merge:', nextLine, re.IGNORECASE)):
            ismerge = True
            pass 
        elif bool(re.match('author:', nextLine, re.IGNORECASE)):
            # Author: xxxx <xxxx@xxxx.com>
            m = re.compile('Author: (.*) <(.*)>').match(nextLine)
            if m:
                commit['author'] = m.group(1)
                commit['email'] = m.group(2)
        elif bool(re.match('date:', nextLine, re.IGNORECASE)):
            t = re.compile('Date:   (.*)').match(nextLine)
            commit['date'] = t.group(1)
        elif bool(re.match('    ', nextLine, re.IGNORECASE)) and not ismerge:
            if bool(re.match('bug', nextLine.strip(), re.IGNORECASE)):
                if nextLine.strip() !='Bug:' or nextLine.strip() !='BUG=': commit['ctype'] = "bug"
                
            elif (bool(re.search('chromium-review.googlesource.com',nextLine)) or bool(re.search('codereview.chromium.org',nextLine))) and commit['ctype']=="bug":
                commit['urlofbug'] = nextLine.strip()

        
        elif bool(re.match('[MAD]\t', nextLine, re.IGNORECASE)):
            if bool(re.compile('test/mjsunit').match(nextLine[2:])):
                commit['ctype'] = "bug"
                commit['poc'].append(nextLine[2:])
            if commit['ctype'] == "bug":
                commit['changedfiles'].append(nextLine[2:])
        elif bool(re.match('[MADCRT][0-9]?[0-9]?[0-9]?\t', nextLine, re.IGNORECASE)):
            pass            

        else:
            pass
    commits.append(commit)
    return commits
def parse_ch_commit(commitLines):
    commits = []
    # dict to store commit data
    commit = {}
    # iterate lines and save
    for nextLine in commitLines:

        if nextLine == '' or nextLine == '\n':
            # ignore empty lines
            pass
        elif bool(re.match('commit', nextLine, re.IGNORECASE)):
            # commit xxxx
            if len(commit) != 0:		## new commit, so re-initialize
                commits.append(commit)
                commit = {}
            commit = {'hash' : re.match('commit (.*)', nextLine, re.IGNORECASE).group(1) }
            commit['urlofbug'] = ""
            commit['ctype'] = "other"
            commit['poc'] = []
            commit['changedfiles'] = []
            commit['component'] = ""
            ismerge = False
        elif bool(re.match('merge:', nextLine, re.IGNORECASE)):
            ismerge = True
            pass     
        elif bool(re.match('author:', nextLine, re.IGNORECASE)):
            # Author: xxxx <xxxx@xxxx.com>
            m = re.compile('Author: (.*) <(.*)>').match(nextLine)
            if m:
                commit['author'] = m.group(1)
                commit['email'] = m.group(2)
        elif bool(re.match('date:', nextLine, re.IGNORECASE)):
            t = re.compile('Date:   (.*)').match(nextLine)
            commit['date'] = t.group(1)
        elif bool(re.match('    ', nextLine, re.IGNORECASE)) and not ismerge:
            if bool(re.match('bug', nextLine.strip(), re.IGNORECASE)) : commit['ctype'] = "bug"


            elif (bool(re.search('fix', nextLine.strip(), re.IGNORECASE)) or bool(re.search('CVE', nextLine.strip()))):
                commit['ctype'] = "bug"
                component = re.compile('Fix (#\d+)').match(nextLine.strip())
                if component: commit['component'] = component.group(1)


        
        elif bool(re.match('[MAD]\t', nextLine, re.IGNORECASE)):
            if bool(re.compile('test/\S*[.]js').match(nextLine[2:])):
                commit['poc'].append(nextLine[2:])
                commit['ctype'] = "bug"
            if commit['ctype'] == "bug":
                commit['changedfiles'].append(nextLine[2:])

        elif bool(re.match('[MADCRT][0-9]?[0-9]?[0-9]?\t', nextLine, re.IGNORECASE)):
            pass

        else:
            pass
    commits.append(commit)
    return commits
def parse_je_commit(commitLines):
    commits = []
    # dict to store commit data
    commit = {}
    # iterate lines and save
    for nextLine in commitLines:

        if nextLine == '' or nextLine == '\n':
            # ignore empty lines
            pass
        elif bool(re.match('commit', nextLine, re.IGNORECASE)):
            # commit xxxx
            if len(commit) != 0:		## new commit, so re-initialize
                commits.append(commit)
                commit = {}
            commit = {'hash' : re.match('commit (.*)', nextLine, re.IGNORECASE).group(1) }
            commit['urlofbug'] = ""
            commit['ctype'] = "other"
            commit['poc'] = []
            commit['changedfiles'] = []
            commit['component'] = ""
            ismerge = False
        elif bool(re.match('merge:', nextLine, re.IGNORECASE)):
            ismerge = True
            pass       
        elif bool(re.match('author:', nextLine, re.IGNORECASE)):
            # Author: xxxx <xxxx@xxxx.com>
            m = re.compile('Author: (.*) <(.*)>').match(nextLine)
            if m:
                commit['author'] = m.group(1)
                commit['email'] = m.group(2)
        elif bool(re.match('date:', nextLine, re.IGNORECASE)):
            t = re.compile('Date:   (.*)').match(nextLine)
            commit['date'] = t.group(1)
        elif bool(re.match('    ', nextLine, re.IGNORECASE)) and not ismerge :

            if bool(re.search('bug\s', nextLine.strip(), re.IGNORECASE)): commit['ctype'] = "bug"
            
            
            elif bool(re.search('fix', nextLine.strip(), re.IGNORECASE)):
                commit['ctype'] = "bug"
                component = re.compile('Fix.+(#\d+)').match(nextLine.strip())
                if component: commit['component'] = component.group(1)


        
        elif bool(re.match('[MA]\t', nextLine, re.IGNORECASE)):
            if bool(re.compile('tests/\S*[.]js').match(nextLine[2:])):
                commit['poc'].append(nextLine[2:])
                commit['ctype'] = "bug"
            if commit['ctype'] == "bug":
                commit['changedfiles'].append(nextLine[2:])

        elif bool(re.match('[MADCRT][0-9]?[0-9]?[0-9]?\t', nextLine, re.IGNORECASE)):
            pass
        else:
            pass
    commits.append(commit)
    return commits

def parse_sp_commit(commitLines):
    commits = []
    # dict to store commit data
    commit = {}
    # iterate lines and save
    for nextLine in commitLines:

        if nextLine == '' or nextLine == '\n':
            # ignore empty lines
            pass
        elif bool(re.match('commit', nextLine, re.IGNORECASE)):
            # commit xxxx
            if len(commit) != 0:		## new commit, so re-initialize
                commits.append(commit)
                commit = {}
            commit = {'hash' : re.match('commit (.*)', nextLine, re.IGNORECASE).group(1) }
            commit['urlofbug'] = ""
            commit['ctype'] = "other"
            commit['poc'] = []
            commit['changedfiles'] = []
            commit['component'] = ""
            commit['message'] = ""
            ismerge = False
        elif bool(re.match('merge:', nextLine, re.IGNORECASE)):
            ismerge = True
            pass 
        elif bool(re.match('author:', nextLine, re.IGNORECASE)):
            # Author: xxxx <xxxx@xxxx.com>
            m = re.compile('Author: (.*) <(.*)>').match(nextLine)
            if m:
                commit['author'] = m.group(1)
                commit['email'] = m.group(2)
        elif bool(re.match('date:', nextLine, re.IGNORECASE)):
            t = re.compile('Date:   (.*)').match(nextLine)
            commit['date'] = t.group(1)
        elif bool(re.match('    ', nextLine, re.IGNORECASE)) and not ismerge :
            # (4 empty spaces)
            if (bool(re.match('bug', nextLine.strip(), re.IGNORECASE)) or bool(re.match('fix', nextLine.strip(), re.IGNORECASE))) :commit['ctype'] = "bug"
                
                # component = re.compile('\\[(.*)\\]').match(nextLine.strip())
                # if component: commit['component'] = component.group(1)
            elif bool(re.search('phabricator.services.mozilla.com',nextLine)):
                commit['urlofbug'] = nextLine.strip()

        
        elif bool(re.match('[MAD]\t', nextLine, re.IGNORECASE)):
            if bool(re.compile('js/src/jit-test').match(nextLine[2:])):
                commit['ctype'] = "bug"
                commit['poc'].append(nextLine[2:])
            if commit['ctype'] == "bug":
                commit['changedfiles'].append(nextLine[2:])

        elif bool(re.match('[MADwanCRT][0-9]?[0-9]?[0-9]?\t', nextLine, re.IGNORECASE)):
            pass

        else:
            pass
    commits.append(commit)
    return commits

def export_csv(export,target,dir_path):
    pf = pd.DataFrame(list(export))
    order = ['date','hash','message','ctype','poc','changedfiles']
    pf = pf[order]
    file_path = os.path.join(dir_path,target + "-" + ".csv")
    pf.fillna(' ',inplace = True)
    pf.to_csv(file_path)
    return file_path

def getRandomSample():
    for p in csvpath:
        target = p[-17:-15]
        path = "/data/patchFuzz/sample_" + target + ".csv"
        pf = pd.read_csv(p,usecols=['hash','date','ctype'])
        sample_bug = pf[pf['ctype']=='bug'].sample(n=50).loc[:,'hash':'ctype']
        sample_ohter = pf[pf['ctype']=='other'].sample(n=50).loc[:,'hash':'ctype']
        pd.merge(sample_bug,sample_ohter,how='outer').to_csv(path, index=None)

def getMessageOfSample():
    pf=pd.read_csv('/data/patchFuzz/scripts/sample_sp.csv',usecols=['hash'])
    file = open('/data/patchFuzz/scripts/sp_message.txt','w')

    for i in pf['hash']:
        p = subprocess.run(["git","log","-1","--name-status",i], stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=2,cwd="/data/spidermonkey")
        file.write(p.stdout.decode()+"\n")
    file.close() 

#getRandomSample()
#getMessageOfSample()

def table8(txt,csv,parse_func):
    TP=0
    TN=0
    FN=0
    FP=0
    fd=open(txt,"r")
    dic = parse_func(fd.readlines())
    pf1 = pd.DataFrame(list(dic))
    order = ['hash','ctype']
    pf1 = pf1[order]
    pf2=pd.read_csv(csv,usecols=['hash','ctype','audit'])
    for row in pf1.itertuples():
        pf2.iloc[row.Index,1] = row.ctype
    for row in pf2.itertuples():
        if row.ctype=="bug" and row.audit==1:
            TP+=1
        if row.ctype=="bug" and row.audit==0:
            FP+=1
        if row.ctype=="other" and row.audit==0:
            TN+=1
        if row.ctype=="other" and row.audit==1:
            FN+=1
    print('Precision: {:.2f}%'.format(TP/(TP+FP)*100))
    print('Recall: {:.2f}%'.format(TP/(TP+FN)*100))
    print(TP,FP,TN,TN)
        



print("JSC:")
table8("./jsc_message.txt","./sample_jsc.csv",parse_jsc_commit)

print("CH:")
table8("./ch_message.txt","./sample_ch.csv",parse_ch_commit)

print("V8:")
table8("./v8_message.txt","./sample_v8.csv",parse_v8_commit)

print("SP:")
table8("./sp_message.txt","./sample_sp.csv",parse_sp_commit)

print("Je:")
table8("./je_message.txt","./sample_je.csv",parse_je_commit)