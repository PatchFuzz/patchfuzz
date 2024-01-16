import subprocess,argparse
def main():
    parser = argparse.ArgumentParser()
    parser.description='findbadpoc'
    parser.add_argument("src", help="Path to seeds.", type=str)
    parser.add_argument("out", help="Path to store bad seeds", type=str)
    parser.add_argument("shell", help="Path to JS engine shell.", type=str)
    parser.add_argument("--arg1", help="args while running shell.", dest="flag1",type=str)
    parser.add_argument("--arg2", help="args while running shell.", dest="flag2",type=str)
    args = parser.parse_args()
    src_path = args.src
    out_path = args.out
    shell = args.shell
    flag1 = args.flag1
    flag2 = args.flag2
    p = subprocess.run([shell,flag1,flag2], stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=5)
main()