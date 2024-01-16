

const tokenRe = {
  
  
  "decimal": /-?(?=[0-9]*\.|[0-9]+[eE])(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][-+]?[0-9]+)?|[0-9]+[Ee][-+]?[0-9]+)/y,
  "integer": /-?(0([Xx][0-9A-Fa-f]+|[0-7]*)|[1-9][0-9]*)/y,
  "identifier": /[_-]?[A-Za-z][0-9A-Z_a-z-]*/y,
  "string": /"[^"]*"/y,
  "whitespace": /[\t\n\r ]+/y,
  "comment": /((\/(\/.*|\*([^*]|\*[^/])*\*\/)[\t\n\r ]*)+)/y,
  "other": /[^\t\n\r 0-9A-Za-z]/y
};

const stringTypes = [
  "ByteString",
  "DOMString",
  "USVString"
];
"use strict";

const argumentNameKeywords = [
  "async",
  "attribute",
  "callback",
  "const",
  "constructor",
  "deleter",
  "dictionary",
  "enum",
  "getter",
  "includes",
  "inherit",
  "interface",
  "iterable",
  "maplike",
  "namespace",
  "partial",
  "required",
  "setlike",
  "setter",
  "static",
  "stringifier",
  "typedef",
  "unrestricted"
];

const nonRegexTerminals = [
  "-Infinity",
  "FrozenArray",
  "Infinity",
  "NaN",
  "Promise",
  "async",
  "boolean",
  "byte",
  "constructor",
  "double",
  "false",
  "float",
  "long",
  "mixin",
  "null",
  "octet",
  "optional",
  "or",
  "readonly",
  "record",
  "sequence",
  "short",
  "true",
  "unsigned",
  "void"
].concat(argumentNameKeywords, stringTypes);

const punctuations = [
  "(",
  ")",
  ",",
  "...",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "[",
  "]",
  "{",
  "}"
];

const reserved = [
  
  "_constructor",
  "toString",
  "_toString",
];


function tokenise(str) {
  const tokens = [];
  let lastCharIndex = 0;
  let trivia = "";
  let line = 1;
  let index = 0;
  while (lastCharIndex < str.length) {
    const nextChar = str.charAt(lastCharIndex);
    let result = -1;

    if (/[\t\n\r ]/.test(nextChar)) {
      result = attemptTokenMatch("whitespace", { noFlushTrivia: true });
    } else if (nextChar === '/') {
      result = attemptTokenMatch("comment", { noFlushTrivia: true });
    }

    if (result !== -1) {
      const currentTrivia = tokens.pop().value;
      line += (currentTrivia.match(/\n/g) || []).length;
      trivia += currentTrivia;
      index -= 1;
    } else if (/[-0-9.A-Z_a-z]/.test(nextChar)) {
      result = attemptTokenMatch("decimal");
      if (result === -1) {
        result = attemptTokenMatch("integer");
      }
      if (result === -1) {
        result = attemptTokenMatch("identifier");
        const lastIndex = tokens.length - 1;
        const token = tokens[lastIndex];
        if (result !== -1) {
          if (reserved.includes(token.value)) {
            const message = `${Object(_productions_helpers_js__WEBPACK_IMPORTED_MODULE_1__["unescape"])(token.value)} is a reserved identifier and must not be used.`;
            throw new WebIDLParseError(Object(_error_js__WEBPACK_IMPORTED_MODULE_0__["syntaxError"])(tokens, lastIndex, null, message));
          } else if (nonRegexTerminals.includes(token.value)) {
            token.type = token.value;
          }
        }
      }
    } else if (nextChar === '"') {
      result = attemptTokenMatch("string");
    }

    for (const punctuation of punctuations) {
      if (str.startsWith(punctuation, lastCharIndex)) {
        tokens.push({ type: punctuation, value: punctuation, trivia, line, index });
        trivia = "";
        lastCharIndex += punctuation.length;
        result = lastCharIndex;
        break;
      }
    }

    
    if (result === -1) {
      result = attemptTokenMatch("other");
    }
    if (result === -1) {
      throw new Error("Token stream not progressing");
    }
    lastCharIndex = result;
    index += 1;
  }

  
  tokens.push({
    type: "eof",
    value: "",
    trivia
  });

  return tokens;

  
  function attemptTokenMatch(type, { noFlushTrivia } = {}) {
    const re = tokenRe[type];
    re.lastIndex = lastCharIndex;
    const result = re.exec(str);
    if (result) {
      tokens.push({ type, value: result[0], trivia, line, index });
      if (!noFlushTrivia) {
        trivia = "";
      }
      return re.lastIndex;
    }
    return -1;
  }
}


class Tokeniser {
  
  constructor(idl) {
    this.source = tokenise(idl);
    this.position = 0;
  }

  
  probe(type) {
    return this.source.length > this.position && this.source[this.position].type === type;
  }

  
  consume(...candidates) {
    for (const type of candidates) {
      if (!this.probe(type)) continue;
      const token = this.source[this.position];
      this.position++;
      return token;
    }
  }

  
  unconsume(position) {
    this.position = position;
  }
}

noInline(Tokeniser.prototype.consume);

let content = `



partial interface mixin WindowOrWorkerGlobalScope {
  [SameObject] readonly attribute Crypto crypto;
};

[Exposed=(Window,Worker)]
interface Crypto {
  [SecureContext] readonly attribute SubtleCrypto subtle;
  ArrayBufferView getRandomValues(ArrayBufferView array);
};

typedef (object or DOMString) AlgorithmIdentifier;

typedef AlgorithmIdentifier HashAlgorithmIdentifier;

dictionary Algorithm {
  required DOMString name;
};

dictionary KeyAlgorithm {
  required DOMString name;
};

enum KeyType { "public", "private", "secret" };

enum KeyUsage { "encrypt", "decrypt", "sign", "verify", "deriveKey", "deriveBits", "wrapKey", "unwrapKey" };

[SecureContext,Exposed=(Window,Worker)]
interface CryptoKey {
  readonly attribute KeyType type;
  readonly attribute boolean extractable;
  readonly attribute object algorithm;
  readonly attribute object usages;
};

enum KeyFormat { "raw", "spki", "pkcs8", "jwk" };

[SecureContext,Exposed=(Window,Worker)]
interface SubtleCrypto {
  Promise<any> encrypt(AlgorithmIdentifier algorithm,
                       CryptoKey key,
                       BufferSource data);
  Promise<any> decrypt(AlgorithmIdentifier algorithm,
                       CryptoKey key,
                       BufferSource data);
  Promise<any> sign(AlgorithmIdentifier algorithm,
                    CryptoKey key,
                    BufferSource data);
  Promise<any> verify(AlgorithmIdentifier algorithm,
                      CryptoKey key,
                      BufferSource signature,
                      BufferSource data);
  Promise<any> digest(AlgorithmIdentifier algorithm,
                      BufferSource data);

  Promise<any> generateKey(AlgorithmIdentifier algorithm,
                          boolean extractable,
                          sequence<KeyUsage> keyUsages );
  Promise<any> deriveKey(AlgorithmIdentifier algorithm,
                         CryptoKey baseKey,
                         AlgorithmIdentifier derivedKeyType,
                         boolean extractable,
                         sequence<KeyUsage> keyUsages );
  Promise<ArrayBuffer> deriveBits(AlgorithmIdentifier algorithm,
                          CryptoKey baseKey,
                          unsigned long length);

  Promise<CryptoKey> importKey(KeyFormat format,
                         (BufferSource or JsonWebKey) keyData,
                         AlgorithmIdentifier algorithm,
                         boolean extractable,
                         sequence<KeyUsage> keyUsages );
  Promise<any> exportKey(KeyFormat format, CryptoKey key);

  Promise<any> wrapKey(KeyFormat format,
                       CryptoKey key,
                       CryptoKey wrappingKey,
                       AlgorithmIdentifier wrapAlgorithm);
  Promise<CryptoKey> unwrapKey(KeyFormat format,
                         BufferSource wrappedKey,
                         CryptoKey unwrappingKey,
                         AlgorithmIdentifier unwrapAlgorithm,
                         AlgorithmIdentifier unwrappedKeyAlgorithm,
                         boolean extractable,
                         sequence<KeyUsage> keyUsages );
};

dictionary RsaOtherPrimesInfo {
  
  DOMString r;
  DOMString d;
  DOMString t;
};

dictionary JsonWebKey {
  
  DOMString kty;
  DOMString use;
  sequence<DOMString> key_ops;
  DOMString alg;

  
  boolean ext;

  
  DOMString crv;
  DOMString x;
  DOMString y;
  DOMString d;
  DOMString n;
  DOMString e;
  DOMString p;
  DOMString q;
  DOMString dp;
  DOMString dq;
  DOMString qi;
  sequence<RsaOtherPrimesInfo> oth;
  DOMString k;
};

typedef Uint8Array BigInteger;

dictionary CryptoKeyPair {
  CryptoKey publicKey;
  CryptoKey privateKey;
};

dictionary RsaKeyGenParams : Algorithm {
  
  required [EnforceRange] unsigned long modulusLength;
  
  required BigInteger publicExponent;
};

dictionary RsaHashedKeyGenParams : RsaKeyGenParams {
  
  required HashAlgorithmIdentifier hash;
};

dictionary RsaKeyAlgorithm : KeyAlgorithm {
  
  required unsigned long modulusLength;
  
  required BigInteger publicExponent;
};

dictionary RsaHashedKeyAlgorithm : RsaKeyAlgorithm {
  
  required KeyAlgorithm hash;
};

dictionary RsaHashedImportParams : Algorithm {
  
  required HashAlgorithmIdentifier hash;
};

dictionary RsaPssParams : Algorithm {
  
  required [EnforceRange] unsigned long saltLength;
};

dictionary RsaOaepParams : Algorithm {
  
  BufferSource label;
};

dictionary EcdsaParams : Algorithm {
  
  required HashAlgorithmIdentifier hash;
};

typedef DOMString NamedCurve;

dictionary EcKeyGenParams : Algorithm {
  
  required NamedCurve namedCurve;
};

dictionary EcKeyAlgorithm : KeyAlgorithm {
  
  required NamedCurve namedCurve;
};

dictionary EcKeyImportParams : Algorithm {
  
  required NamedCurve namedCurve;
};

dictionary EcdhKeyDeriveParams : Algorithm {
  
  required CryptoKey public;
};

dictionary AesCtrParams : Algorithm {
  
  
  
  
  
  
  
  required BufferSource counter;
  
  
  required [EnforceRange] octet length;
};

dictionary AesKeyAlgorithm : KeyAlgorithm {
  
  required unsigned short length;
};

dictionary AesKeyGenParams : Algorithm {
  
  required [EnforceRange] unsigned short length;
};

dictionary AesDerivedKeyParams : Algorithm {
  
  required [EnforceRange] unsigned short length;
};

dictionary AesCbcParams : Algorithm {
  
  required BufferSource iv;
};

dictionary AesGcmParams : Algorithm {
  
  required BufferSource iv;
  
  BufferSource additionalData;
  
  [EnforceRange] octet tagLength;
};

dictionary HmacImportParams : Algorithm {
  
  required HashAlgorithmIdentifier hash;
  
  [EnforceRange] unsigned long length;
};

dictionary HmacKeyAlgorithm : KeyAlgorithm {
  
  required KeyAlgorithm hash;
  
  required unsigned long length;
};

dictionary HmacKeyGenParams : Algorithm {
  
  required HashAlgorithmIdentifier hash;
  
  
  
  [EnforceRange] unsigned long length;
};

dictionary HkdfParams : Algorithm {
  
  required HashAlgorithmIdentifier hash;
  
  required BufferSource salt;
  
  required BufferSource info;
};

dictionary Pbkdf2Params : Algorithm {
  required BufferSource salt;
  required [EnforceRange] unsigned long iterations;
  required HashAlgorithmIdentifier hash;
};`

let tokeniser = new Tokeniser(content);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["mixin"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "async", "required"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["identifier", "decimal", "integer", "string"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["mixin"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["maplike", "setlike"]);
tokeniser.unconsume(30);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "async", "required"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(35);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(35);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["enum"]);
tokeniser.consume(...["typedef"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["or"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["or"]);
tokeniser.consume(...[")"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["enum"]);
tokeniser.consume(...["typedef"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["enum"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["enum"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["identifier", "decimal", "integer", "string"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["mixin"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["maplike", "setlike"]);
tokeniser.unconsume(118);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "async", "required"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["maplike", "setlike"]);
tokeniser.unconsume(123);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "async", "required"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["maplike", "setlike"]);
tokeniser.unconsume(128);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "async", "required"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["maplike", "setlike"]);
tokeniser.unconsume(133);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "async", "required"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["enum"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["string"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["identifier", "decimal", "integer", "string"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["mixin"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(166);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(166);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(182);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(182);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(198);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(198);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(214);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(214);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(233);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(233);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(246);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(246);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(265);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(265);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(290);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(290);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(307);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(307);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["or"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["or"]);
tokeniser.consume(...[")"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(336);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(336);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(349);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(349);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["const"]);
tokeniser.consume(...["constructor"]);
tokeniser.consume(...["static"]);
tokeniser.consume(...["stringifier"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["async"]);
tokeniser.consume(...["iterable", "maplike", "setlike"]);
tokeniser.unconsume(368);
tokeniser.consume(...["inherit"]);
tokeniser.consume(...["readonly"]);
tokeniser.consume(...["attribute"]);
tokeniser.unconsume(368);
tokeniser.consume(...["getter", "setter", "deleter"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier", "includes"]);
tokeniser.consume(...["("]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...["["]);
tokeniser.consume(...["optional"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["..."]);
tokeniser.consume(...["identifier", "async", "attribute", "callback", "const", "constructor", "deleter", "dictionary", "enum", "getter", "includes", "inherit", "interface", "iterable", "maplike", "namespace", "partial", "required", "setlike", "setter", "static", "stringifier", "typedef", "unrestricted"]);
tokeniser.consume(...[","]);
tokeniser.consume(...[")"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["<"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...[">"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["enum"]);
tokeniser.consume(...["typedef"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["enum"]);
tokeniser.consume(...["typedef"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...[":"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["{"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...["("]);
tokeniser.consume(...[","]);
tokeniser.consume(...["]"]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["long"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["["]);
tokeniser.consume(...["required"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["FrozenArray", "Promise", "sequence", "record"]);
tokeniser.consume(...["unsigned"]);
tokeniser.consume(...["short", "long"]);
tokeniser.consume(...["unrestricted"]);
tokeniser.consume(...["float", "double"]);
tokeniser.consume(...["boolean", "byte", "octet"]);
tokeniser.consume(...["identifier", "ByteString", "DOMString", "USVString"]);
tokeniser.consume(...["?"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["="]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["}"]);
tokeniser.consume(...[";"]);
tokeniser.consume(...["["]);
tokeniser.consume(...["callback"]);
tokeniser.consume(...["interface"]);
tokeniser.consume(...["partial"]);
tokeniser.consume(...["dictionary"]);
tokeniser.consume(...["enum"]);
tokeniser.consume(...["typedef"]);
tokeniser.consume(...["identifier"]);
tokeniser.consume(...["namespace"]);
tokeniser.consume(...["eof"]);
