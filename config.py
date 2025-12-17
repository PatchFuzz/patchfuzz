"""
PatchFuzz 引擎配置

每个 JS 引擎的配置包括：
- POC 路径模式
- Bug 识别规则
- 源码路径过滤
- JS 预处理规则
"""

from dataclasses import dataclass, field
from typing import List, Pattern
import re


@dataclass
class BugPatterns:
    """Bug 识别模式"""
    message_patterns: List[Pattern]  # commit message 中的 bug 关键词
    poc_path_pattern: Pattern        # POC 文件路径模式
    url_patterns: List[Pattern]      # bug URL 模式
    exclude_patterns: List[Pattern] = field(default_factory=list)  # 排除模式


@dataclass
class AllowlistFilter:
    """Allowlist 过滤规则"""
    source_extensions: List[str] = field(default_factory=lambda: ['.c', '.h', '.cpp', '.cc'])
    path_prefix: str = ''  # 源码路径前缀过滤


@dataclass
class JSProcessorRules:
    """JS 文件预处理规则"""
    skip_patterns: List[str]           # 包含这些字符串的文件跳过
    wasm_patterns: List[str]           # WebAssembly 相关模式（跳过）
    replacements: List[tuple]          # (pattern, replacement) 替换规则


@dataclass
class EngineConfig:
    """引擎完整配置"""
    name: str
    bug_patterns: BugPatterns
    allowlist_filter: AllowlistFilter
    processor_rules: JSProcessorRules


# ============== JSC (WebKit) ==============
JSC_CONFIG = EngineConfig(
    name='jsc',
    bug_patterns=BugPatterns(
        message_patterns=[
            re.compile(r'^bug', re.IGNORECASE),
            re.compile(r'fix', re.IGNORECASE),
            re.compile(r'crash', re.IGNORECASE),
        ],
        poc_path_pattern=re.compile(r'JSTests/stress'),
        url_patterns=[
            re.compile(r'bugs\.webkit\.org'),
            re.compile(r'http://webkit\.org/b/'),
        ],
    ),
    allowlist_filter=AllowlistFilter(
        path_prefix='Source/JavaScriptCore',
    ),
    processor_rules=JSProcessorRules(
        skip_patterns=[
            'export ',
            '$vm.Element;',
            '$vm.Root;',
            '$vm.getElement;',
        ],
        wasm_patterns=[
            'isWasmSupported',
            'wasmCode',
            'wasmEntry',
        ],
        replacements=[
            (r'\$vm[.]\w+', 'print'),
            (r'abort\(', 'print('),
            (r'assert[.]?\w* ?\(', 'print('),
            (r'\(assert\w*\)', '(print)'),
            (r'generateBinaryTests\(', 'print('),
            (r'load\(', 'print('),
        ],
    ),
)

# ============== V8 ==============
V8_CONFIG = EngineConfig(
    name='v8',
    bug_patterns=BugPatterns(
        message_patterns=[
            re.compile(r'^bug', re.IGNORECASE),
            re.compile(r'fix', re.IGNORECASE),
        ],
        poc_path_pattern=re.compile(r'test/mjsunit/regress'),
        url_patterns=[
            re.compile(r'chromium-review\.googlesource\.com'),
            re.compile(r'codereview\.chromium\.org'),
        ],
        exclude_patterns=[
            re.compile(r'^Bug:$'),
            re.compile(r'^BUG=$'),
            re.compile(r'^BUG=none$'),
        ],
    ),
    allowlist_filter=AllowlistFilter(),
    processor_rules=JSProcessorRules(
        skip_patterns=['export '],
        wasm_patterns=['WasmModuleBuilder('],
        replacements=[
            (r'assert[.]?\w* ?\(', 'print('),
            (r'd8[.]file[.]execute\(.*\);?', ''),
        ],
    ),
)

# ============== SpiderMonkey (Firefox) ==============
SM_CONFIG = EngineConfig(
    name='sm',
    bug_patterns=BugPatterns(
        message_patterns=[
            re.compile(r'bug #?\d+', re.IGNORECASE),
            re.compile(r'fix', re.IGNORECASE),
            re.compile(r'crash', re.IGNORECASE),
            re.compile(r'b=\d+', re.IGNORECASE),
        ],
        poc_path_pattern=re.compile(r'js/src/jit-test'),
        url_patterns=[
            re.compile(r'phabricator\.services\.mozilla\.com'),
        ],
        exclude_patterns=[
            re.compile(r'^Backed out', re.IGNORECASE),
        ],
    ),
    allowlist_filter=AllowlistFilter(
        path_prefix='js/src',
    ),
    processor_rules=JSProcessorRules(
        skip_patterns=[],
        wasm_patterns=[
            'instantiate(',
            'wasmEvalText(',
            'wasmTextToBinary(',
        ],
        replacements=[
            (r'assert[.]?\w* ?\(', 'print('),
            (r'crash\(', 'print('),
            (r'appendToActual\(', 'print('),
            (r'load\(.*\)', ''),
        ],
    ),
)

# ============== ChakraCore ==============
CHAKRA_CONFIG = EngineConfig(
    name='chakra',
    bug_patterns=BugPatterns(
        message_patterns=[
            re.compile(r'^bug', re.IGNORECASE),
            re.compile(r'fix', re.IGNORECASE),
            re.compile(r'CVE'),
        ],
        poc_path_pattern=re.compile(r'test/\S*[.]js'),
        url_patterns=[],
    ),
    allowlist_filter=AllowlistFilter(),
    processor_rules=JSProcessorRules(
        skip_patterns=[],
        wasm_patterns=[],
        replacements=[
            (r'WScript\.\w+', 'print'),
            (r'console\.log\(', 'print('),
            (r'testRunner\.runTests\(', 'print('),
        ],
    ),
)

# ============== JerryScript ==============
JERRY_CONFIG = EngineConfig(
    name='jerry',
    bug_patterns=BugPatterns(
        message_patterns=[
            re.compile(r'^bug', re.IGNORECASE),
            re.compile(r'fix', re.IGNORECASE),
        ],
        poc_path_pattern=re.compile(r'tests/.*[.]js'),
        url_patterns=[],
    ),
    allowlist_filter=AllowlistFilter(
        path_prefix='jerry',
    ),
    processor_rules=JSProcessorRules(
        skip_patterns=['export '],
        wasm_patterns=[],
        replacements=[],
    ),
)

# 引擎配置映射
ENGINE_CONFIGS = {
    'jsc': JSC_CONFIG,
    'v8': V8_CONFIG,
    'sm': SM_CONFIG,
    'chakra': CHAKRA_CONFIG,
    'jerry': JERRY_CONFIG,
}


def get_engine_config(name: str) -> EngineConfig:
    """获取引擎配置"""
    if name not in ENGINE_CONFIGS:
        raise ValueError(f"Unknown engine: {name}. Available: {list(ENGINE_CONFIGS.keys())}")
    return ENGINE_CONFIGS[name]
