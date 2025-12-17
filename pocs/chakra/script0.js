print("script0");
import('bug_issue_3257/mod1.js').catch(e => print ("Should not be printed"));
import('bug_issue_3257/mod2/mod2.js').catch(e => print ("Should not be printed"));
