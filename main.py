import argparse
import pandas as pd
import sys,os,datetime,time

from ProcessJSCCommit import parseJSCCommit
from ProcessV8Commit import parseV8Commit
from ProcessChakraCommit import parseChakraCommit
from ProcessSMCommit import parseSMCommit
from ProcessJerryCommit import parseJerryCommit
from utils import mkDir
from ExtractSample import extractJSCSample,extractV8Sample,extractChakraSample,extractSMSample,extractJerrySample
from jsc.SaveJSC import saveJsc
from v8.SaveV8 import saveV8
from chakra.SaveChakra import saveCh
from sm.SaveSM import saveSp
from jerry.SaveJerry import saveJe



def exportCSV(export,target,dir_path):
    date = datetime.date.today().strftime('%Y_%m_%d')
    pf = pd.DataFrame(list(export))
    order = ['date','hash','ctype','poc','changedfiles','urlofbug']
    pf = pf[order]
    file_path = os.path.join(dir_path,target + "_" + date + ".csv")
    pf.fillna(' ',inplace = True)
    pf.to_csv(file_path)
    return file_path



def main():
    # Parse Input
    parser = argparse.ArgumentParser()
    parser.description='PatchFuzz'
    parser.add_argument("out_path", help="Set where to store data.", type=str)
    parser.add_argument("target", help="Choose a JS engine.", choices=["jsc","v8","chakra","sm","jerry"], type=str)
    parser.add_argument("target_root", help="The root directory of the JS engine source code. e.g. /home/WebKit/ (Be careful ! The right path is essential.)", type=str)
    args = parser.parse_args()
    

    # Varibles
    out_path = args.out_path
    target = args.target
    target_root = args.target_root
    file_type_list = ["js"]
    if not os.path.exists(target_root) : sys.exit("Bad target_root !")

    # Start 
    match target:
        case "jsc":
            dir_path = os.path.join(out_path, "jsc")
            poc_path = os.path.join(dir_path,"poc")
            mkDir(dir_path)
            mkDir(poc_path)
            #start_time=time.time()
            commits = parseJSCCommit(sys.stdin.readlines(),dir_path)
            #end_time=time.time()
            #print(f"the running time is :{end_time - start_time} s")
            csv_path = exportCSV(commits,"jsc",dir_path)
            test_path = extractJSCSample(csv_path,target_root,dir_path)
            saveJsc(test_path,poc_path,file_type_list)

            sys.exit("Finished!")

        case "v8":
            dir_path = os.path.join(out_path, "v8")
            poc_path = os.path.join(dir_path,"poc")
            mkDir(dir_path)
            mkDir(poc_path)
            #start_time=time.time()
            commits = parseV8Commit(sys.stdin.readlines(),dir_path)
            #end_time=time.time()
            #print(f"the running time is :{end_time - start_time} s")
            csv_path = exportCSV(commits,"v8",dir_path)
            test_path = extractV8Sample(csv_path,target_root,dir_path)
            saveV8(test_path,poc_path,file_type_list)

            sys.exit("Finished!")

        case "chakra":
            dir_path = os.path.join(out_path, "chakra")
            poc_path = os.path.join(dir_path,"poc")
            mkDir(dir_path)
            mkDir(poc_path)
            #start_time=time.time()
            commits = parseChakraCommit(sys.stdin.readlines(),dir_path)
            #end_time=time.time()
            #print(f"the running time is :{end_time - start_time} s")
            csv_path = exportCSV(commits,"chakra",dir_path)
            test_path = extractChakraSample(csv_path,target_root,dir_path)
            saveCh(test_path,poc_path,file_type_list)

            sys.exit("Finished!")

        case "sm":
            dir_path = os.path.join(out_path, "sm")
            poc_path = os.path.join(dir_path,"poc")
            mkDir(dir_path)
            mkDir(poc_path)
            #start_time=time.time()
            commits = parseSMCommit(sys.stdin.readlines(),dir_path)
            #end_time=time.time()
            #print(f"the running time is :{end_time - start_time} s")
            csv_path = exportCSV(commits,"sm",dir_path)
            test_path = extractSMSample(csv_path,target_root,dir_path)
            saveSp(test_path,poc_path,file_type_list)

            sys.exit("Finished!")

        case "jerry":
            dir_path = os.path.join(out_path, "jerry")
            poc_path = os.path.join(dir_path,"poc")
            mkDir(dir_path)
            mkDir(poc_path)
            #start_time=time.time()
            commits = parseJerryCommit(sys.stdin.readlines(),dir_path)
            #end_time=time.time()
            #print(f"the running time is :{end_time - start_time} s")
            csv_path = exportCSV(commits,"jerry",dir_path)
            test_path = extractJerrySample(csv_path,target_root,dir_path)
            saveJe(test_path,poc_path,file_type_list)

            sys.exit("Finished!")

        case _:
            return sys.exit("bad target")

if __name__ == '__main__':
    main()
