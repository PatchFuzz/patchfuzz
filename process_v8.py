#!/usr/bin/env python
import sys,re,shutil,os
from utils import export_csv

# array to store dict of commit data



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
                
                component = re.compile('\\[(.*)\\]').match(nextLine.strip())
                if component: commit['component'] = component.group(1)
                if bool(re.match('bug', nextLine.strip(), re.IGNORECASE)): commit['ctype'] = "bug"

            elif bool(re.match('bug', nextLine.strip(), re.IGNORECASE)):
                commit['ctype'] = "bug"
            elif (bool(re.search('chromium-review.googlesource.com',nextLine)) or bool(re.search('codereview.chromium.org',nextLine))) and commit['ctype']=="bug":
                commit['urlofbug'] = nextLine.strip()

        
        elif bool(re.match('[MAD]\t', nextLine, re.IGNORECASE)) and commit['ctype'] == "bug":
            commit['changedfiles'].append(nextLine[2:])
            if bool(re.compile('test/mjsunit').match(nextLine[2:])):
                commit['poc'].append(nextLine[2:])
            else:
                pass
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
            if re.compile('[\w-]+(?=[.][ch]\s)').search(file) or re.compile('[\w-]+(?=[.]cpp\s)').search(file) or re.compile('[\w-]+(?=[.]cc\s)').search(file):
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
    data=parse_v8_commit(sys.stdin.readlines())
    table=cal_chfile(data,'/home/ubuntu/v8/v8','/home/data/chfile/v8')
    file = open('/home/data/chfile/v8.txt', 'w') 
    for k,v in sorted(table.items(), key=lambda x:x[1],reverse=True):
        file.write(str(k)[:-1]+','+str(v)+'\n')
    file.close()
    #export_csv(data,"v8")
    #print(commits)