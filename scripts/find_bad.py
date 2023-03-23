import os,shutil
import subprocess,argparse


# paths = os.walk('/home/data/newpoc/je/2023-03-02')
# outpath = '/home/data/badpoc/je'
# shell={"jsc":"/home/data/WebKit/gcov/Debug/bin/jsc","v8":"/home/ubuntu/v8/v8/out/cov/d8","je":"/home/data/jerryscript/build/bin/jerry","sp":"/home/data/gecko-dev/obj-cov-x86_64-pc-linux-gnu/js/src/js","ch":"/home/data/ChakraCore/out/Release/ch"}
# flags={"v8":"--expose-gc --allow-natives-syntax"}
def mkdir(path):
    folder = os.path.exists(path)
    if not folder:                  
        os.makedirs(path)            
    else:
        pass


def main():
    parser = argparse.ArgumentParser()
    parser.description='findbadpoc'
    parser.add_argument("src", help="Path to seeds.", type=str)
    parser.add_argument("out", help="Path to store bad seeds", type=str)
    parser.add_argument("shell", help="Path to JS engine shell.", type=str)
    args = parser.parse_args()
    src_path = args.src
    out_path = args.out
    shell = args.shell
    crash_path = out_path + "/crash"
    mkdir(out_path)
    mkdir(crash_path)
    for file in os.listdir(src_path):
        js =os.path.join(src_path, file)
        try:
            if shell[-2:] == "d8": p = subprocess.run([shell,js,"--expose-gc","--allow-natives-syntax"], stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=1)
            else:
                p = subprocess.run([shell,js], stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=1)

            if(p.returncode != 0): 
                outjs = os.path.join(out_path, file)
                shutil.copy(js,outjs)
                file = open(outjs,'a')
                file.write('/*'+str(p.stdout)+'*/')
                file.write('/*'+str(p.stderr)+'*/')
                file.close()
            if p.stderr:
                if "Assertion failure:" in str(p.stderr)\
                    or "Abort" in  str(p.stderr)\
                    or "Overflowed stack" in str(p.stderr)\
                    or "Segmentation fault" in str(p.stderr)\
                    or "core dumped" in str(p.stderr):
                    crash = os.path.join(crash_path, file)
                    shutil.copy(outjs,crash)

        except Exception as e:
            print(e)
main()
