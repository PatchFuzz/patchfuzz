"""
通用 JS 文件预处理器

对提取的 POC 文件进行净化处理，使其能在模糊测试中正常运行。
"""

import os
import re
import signal
from typing import List

from config import EngineConfig, JSProcessorRules


class TimeoutError(Exception):
    """处理超时异常"""
    pass


def timeout_handler(signum, frame):
    raise TimeoutError("Processing timeout")


class JSProcessor:
    """通用 JS 文件预处理器"""

    # 移除注释的正则
    RE_COMMENTS = re.compile(r'(?<!:)//.*|/\*[\s\S]*?\*/')

    def __init__(self, config: EngineConfig):
        self.config = config
        self.rules = config.processor_rules

    def process(self, src_dir: str, dst_dir: str, timeout: int = 1):
        """
        处理目录中的所有 JS 文件
        
        Args:
            src_dir: 源目录
            dst_dir: 目标目录
            timeout: 单个文件处理超时时间（秒）
        """
        os.makedirs(dst_dir, exist_ok=True)

        # 创建 wasm 目录（可选）
        parent_dir = os.path.dirname(dst_dir)
        wasm_dir = os.path.join(parent_dir, f'wasm_{self.config.name}')
        os.makedirs(wasm_dir, exist_ok=True)

        for root, _, files in os.walk(src_dir):
            for filename in files:
                if not filename.endswith('.js'):
                    continue

                src_path = os.path.join(root, filename)
                self._process_file(src_path, dst_dir, filename, timeout)

    def _process_file(self, src_path: str, dst_dir: str, filename: str, timeout: int):
        """处理单个 JS 文件"""
        try:
            # 设置超时
            signal.signal(signal.SIGALRM, timeout_handler)
            signal.alarm(timeout)

            content = self._read_file(src_path)
            if content is None:
                return

            # 检查是否应该跳过
            if self._should_skip(content):
                signal.alarm(0)
                return

            # 检查是否是 WebAssembly 文件
            if self._is_wasm(content):
                signal.alarm(0)
                return

            # 处理内容
            processed = self._process_content(content)

            # 写入目标文件
            dst_path = os.path.join(dst_dir, filename)
            with open(dst_path, 'w') as f:
                f.write(processed.lstrip())

            signal.alarm(0)

        except TimeoutError:
            print(f"Timeout: {filename}")
        except Exception as e:
            print(f"Error processing {filename}: {e}")
            signal.alarm(0)

    def _read_file(self, path: str) -> str:
        """读取文件内容"""
        try:
            with open(path, 'r', encoding='utf-8') as f:
                return f.read()
        except UnicodeDecodeError:
            print("UnicodeDecodeError")
            return None

    def _should_skip(self, content: str) -> bool:
        """检查是否应该跳过此文件"""
        for pattern in self.rules.skip_patterns:
            if pattern in content:
                return True
        return False

    def _is_wasm(self, content: str) -> bool:
        """检查是否是 WebAssembly 相关文件"""
        for pattern in self.rules.wasm_patterns:
            if pattern in content:
                return True
        return False

    def _process_content(self, content: str) -> str:
        """处理文件内容"""
        # 移除注释
        result = self.RE_COMMENTS.sub('', content)

        # 应用替换规则
        for pattern, replacement in self.rules.replacements:
            result = re.sub(pattern, replacement, result)

        return result
