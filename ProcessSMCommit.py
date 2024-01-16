#!/usr/bin/env python
import sys,re,shutil,os
#from utils import export_csv

# array to store dict of commit data



def parseSMCommit(commitLines,dir_path):
    commits = []
    # dict to store commit data
    commit = {}
    # iterate lines and save
    for nextLine in commitLines:

        if nextLine == '' or nextLine == '\n':
            # ignore empty lines
            pass
        elif bool(re.match('commit', nextLine, re.IGNORECASE)):
            hash = re.match('commit (\w*)', nextLine, re.IGNORECASE).group(1)
            if  hash!=commit.get('hash'):
                if len(commit) != 0:
                    ## new commit, so re-initialize
                    commits.append(commit)
                    commit = {}
                commit = {'hash' : re.match('commit (\w*)', nextLine, re.IGNORECASE).group(1) }
                commit['urlofbug'] = ""
                commit['ctype'] = "other"
                commit['poc'] = []
                commit['changedfiles'] = []
            else:
                pass
        elif bool(re.match('merge:', nextLine, re.IGNORECASE)):
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
            if bool(re.match('Backed out', nextLine.strip(), re.IGNORECASE)): pass
            elif bool(re.search('bug #?\d+', nextLine.strip(), re.IGNORECASE)) or bool(re.search('fix', nextLine.strip(), re.IGNORECASE)) \
            or bool(re.search('crash', nextLine.strip(), re.IGNORECASE)) or bool(re.search('b=\d+', nextLine.strip(), re.IGNORECASE)) :commit['ctype'] = "bug"
                # component = re.compile('\\[(.*)\\]').match(nextLine.strip())
                # if component: commit['component'] = component.group(1)
            elif bool(re.search('phabricator.services.mozilla.com',nextLine)):
                commit['urlofbug'] = nextLine.strip()

        
        elif bool(re.match('[MA]\t', nextLine, re.IGNORECASE)):
            if bool(re.compile('js/src/jit-test').match(nextLine[2:])):
                commit['ctype'] = "bug"
                commit['poc'].append(nextLine[2:])
            if commit['ctype'] == "bug":
                commit['changedfiles'].append(nextLine[2:])

        elif bool(re.match('[MADCRT][0-9]?[0-9]?[0-9]?\t', nextLine, re.IGNORECASE)):
            pass

        else:
            pass
    commits.append(commit)
    cal_chfile(commits,dir_path)
    return commits

def cal_chfile(commits,out_dir):
    table={}
    for commit in commits:
        chfile = commit["changedfiles"]
        for file in chfile:
            #print(file)
            if (re.compile('[\w-]+(?=[.][ch]\s)').search(file) or re.compile('[\w-]+(?=[.]cpp\s)').search(file)\
                or  re.compile('[\w-]+(?=[.]cc\s)').search(file)) and bool(re.match('js/src',file)):
                    if table.get(file) is None:
                        table[file]=0
                    table[file]=table[file] + 1
    file1 = open(os.path.join(out_dir,"sm_allowlist.txt"), 'w')
    #file2 = open('/data/patchFuzz/0417/whitelist/jsc.txt', 'w') 
    for k,v in sorted(table.items(), key=lambda x:x[1],reverse=True):
        file1.write(str(k)[:-1]+'\n')
        #file2.write(str(k)[:-1]+','+str(v)+'\n')        
    file1.close()
    #file2.close()


if __name__ == '__main__':
    #parse_webkit_commit(sys.stdin.readlines())
    data=parseSMCommit(sys.stdin.readlines())
    table = cal_chfile(data,'/data/spidermonkey','/data/patchFuzz/whitelist/sp')
    file1 = open('/data/patchFuzz/whitelist/sp_allowlist.txt.new', 'w')
    file2 = open('/data/patchFuzz/whitelist/sp.txt.new', 'w') 
    for k,v in sorted(table.items(), key=lambda x:x[1],reverse=True):
        file1.write(str(k)[:-1]+'\n')
        file2.write(str(k)[:-1]+','+str(v)+'\n')        
    file1.close()
    file2.close()
    #export_csv(data,"sp")
    #print(commits)
    # print('Author'.ljust(15) + '  ' + 'Email'.ljust(20) +'  ' + 'Hash'.ljust(8) + '  ' + 'Message'.ljust(20))
    # print("=================================================================================")
    # for commit in commits:
    #     print(commit['author'].ljust(15) + '  ' + commit['email'][:20].ljust(20) + '  ' +  commit['hash'][:7].ljust(8) + '  ' + commit['message'])