#!/usr/bin/env python3
"""
PatchFuzz - JavaScript 引擎补丁模糊测试工具

从 JS 引擎的 git 历史中提取 bug fix 相关的 POC 文件，
并进行预处理以用于模糊测试。

用法:
    git log --date=short -m --name-status | python main.py <out_path> <engine> <source_root>

示例:
    cd /path/to/WebKit
    git log --date=short -m --name-status | python /path/to/patchfuzz/main.py ./output jsc .
"""

import argparse
import sys
import os

from config import get_engine_config, ENGINE_CONFIGS
from parsers import CommitParser
from extractors import SampleExtractor
from processors import JSProcessor
from utils import ensure_dir, export_csv


def main():
    parser = argparse.ArgumentParser(
        description='PatchFuzz - Extract and process POC files from JS engine git history'
    )
    parser.add_argument(
        'out_path',
        type=str,
        help='Output directory for extracted data'
    )
    parser.add_argument(
        'engine',
        type=str,
        choices=list(ENGINE_CONFIGS.keys()),
        help='Target JS engine'
    )
    parser.add_argument(
        'source_root',
        type=str,
        help='Root directory of the JS engine source code'
    )
    
    args = parser.parse_args()

    # 验证源码目录
    if not os.path.exists(args.source_root):
        sys.exit(f"Error: Source root not found: {args.source_root}")

    # 获取引擎配置
    config = get_engine_config(args.engine)

    # 创建输出目录
    engine_dir = os.path.join(args.out_path, config.name)
    poc_dir = os.path.join(engine_dir, 'poc')
    ensure_dir(engine_dir)
    ensure_dir(poc_dir)

    # 1. 解析 git log
    print(f"[1/4] Parsing git log for {config.name}...")
    commit_parser = CommitParser(config)
    commits = commit_parser.parse(sys.stdin.readlines(), engine_dir)

    # 2. 导出 CSV
    print(f"[2/4] Exporting CSV...")
    csv_path = export_csv(commits, config.name, engine_dir)

    # 3. 提取样本
    print(f"[3/4] Extracting samples...")
    extractor = SampleExtractor(config)
    test_path = extractor.extract(csv_path, args.source_root, engine_dir)

    # 4. 预处理 JS 文件
    print(f"[4/4] Processing JS files...")
    processor = JSProcessor(config)
    processor.process(test_path, poc_dir)

    print("Finished!")


if __name__ == '__main__':
    main()
