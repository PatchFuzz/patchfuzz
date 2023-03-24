#!/usr/bin/env python
import sys,re,shutil,os
from utils import export_csv

# array to store dict of commit data



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
        elif bool(re.match('merge:', nextLine, re.IGNORECASE)):
            # Merge: xxxx xxxx
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
        elif bool(re.match('    ', nextLine, re.IGNORECASE)):
            # (4 empty spaces)
            if commit.get('message') is None:
                commit['message'] = nextLine.strip()
                if bool(re.search('bug', nextLine.strip(), re.IGNORECASE)): commit['ctype'] = "bug"

            elif bool(re.search('fix', nextLine.strip(), re.IGNORECASE)):
                commit['ctype'] = "bug"
                component = re.compile('Fix.+(#\d+)').match(nextLine.strip())
                if component: commit['component'] = component.group(1)


        
        elif bool(re.match('[MAD]\t', nextLine, re.IGNORECASE)):
            if bool(re.compile('tests/\S*[.]js').match(nextLine[2:])):
                commit['poc'].append(nextLine[2:])
                commit['ctype'] = "bug"
            if commit['ctype'] == "bug":
                commit['changedfiles'].append(nextLine[2:])

        elif bool(re.match('[MADCRT][0-9]?[0-9]?[0-9]?\t', nextLine, re.IGNORECASE)):
            pass
        else:
            print ('ERROR: Unexpected Line: ' + nextLine)
    commits.append(commit)
    return commits

def cal_chfile(commits,base_path,out_dir):
    hashtable={}
    for commit in commits:
        chfile = commit["changedfiles"]
        for file in chfile:
            #print(file)
            if (re.compile('[\w-]+(?=[.][ch]\s)').search(file) or re.compile('[\w-]+(?=[.]cpp\s)').search(file))\
                and bool(re.match('jerry',file)):
                try:
                    shutil.copy(os.path.join(base_path,file[:-1]),out_dir)
                except Exception as e:
                    #print(e)
                    pass
                else:
                    if hashtable.get(file) is None:
                        hashtable[file]=0
                    hashtable[file]=hashtable[file] + 1
    return hashtable

if __name__ == '__main__':
    #parse_webkit_commit(sys.stdin.readlines())
    data=parse_je_commit(sys.stdin.readlines())
    table=cal_chfile(data,'/data/jerryscript','/data/patchFuzz/whitelist/je')
    file1 = open('/data/patchFuzz/whitelist/je_allowlist.txt', 'w')
    file2 = open('/data/patchFuzz/whitelist/je.txt', 'w') 
    for k,v in sorted(table.items(), key=lambda x:x[1],reverse=True):
        file1.write(str(k)[:-1]+'\n')
        file2.write(str(k)[:-1]+','+str(v)+'\n')        
    file1.close()
    file2.close()  
    #export_csv(data,"je")
    #print(commits)
    # print('Author'.ljust(15) + '  ' + 'Email'.ljust(20) +'  ' + 'Hash'.ljust(8) + '  ' + 'Message'.ljust(20))
    # print("=================================================================================")
    # for commit in commits:
    #     print(commit['author'].ljust(15) + '  ' + commit['email'][:20].ljust(20) + '  ' +  commit['hash'][:7].ljust(8) + '  ' + commit['message'])