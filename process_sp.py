#!/usr/bin/env python
import sys,re
from utils import export_csv

# array to store dict of commit data



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
            commit['changedfiles'] = ""
            commit['component'] = ""
            commit['message'] = ""
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
            if bool(re.match('bug', nextLine.strip(), re.IGNORECASE)):
                commit['ctype'] = "bug"
                # component = re.compile('\\[(.*)\\]').match(nextLine.strip())
                # if component: commit['component'] = component.group(1)
            elif bool(re.search('phabricator.services.mozilla.com',nextLine)):
                commit['urlofbug'] = nextLine.strip()

        
        elif bool(re.match('[MADCRT][0-9]?[0-9]?[0-9]?\t', nextLine, re.IGNORECASE)):
            commit['changedfiles'] += nextLine[2:]
            if bool(re.compile('js/src/jit-test').match(nextLine[2:])) and commit['ctype'] == "bug":
                commit['poc'].append(nextLine[2:])
            else:
                pass



        else:
            print ('ERROR: Unexpected Line: ' + nextLine)
    commits.append(commit)
    return commits

if __name__ == '__main__':
    #parse_webkit_commit(sys.stdin.readlines())
    data=parse_sp_commit(sys.stdin.readlines())
    export_csv(data,"sp")
    #print(commits)
    # print('Author'.ljust(15) + '  ' + 'Email'.ljust(20) +'  ' + 'Hash'.ljust(8) + '  ' + 'Message'.ljust(20))
    # print("=================================================================================")
    # for commit in commits:
    #     print(commit['author'].ljust(15) + '  ' + commit['email'][:20].ljust(20) + '  ' +  commit['hash'][:7].ljust(8) + '  ' + commit['message'])