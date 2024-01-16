'use strict';
let dest;
if (typeof WScript !== "undefined") {
  dest = this;
} else if (typeof require !== "undefined") {
  dest = module.exports;
}

(function() {
dest.yargsParse = parse;























function preserveCamelCase(str) {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < str.length; i++) {
    const c = str[i];

    if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
      str = str.substr(0, i) + '-' + str.substr(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(c) && c.toLowerCase() === c) {
      str = str.substr(0, i - 1) + '-' + str.substr(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = c.toLowerCase() === c;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = c.toUpperCase() === c;
    }
  }

  return str;
}

function camelCase(str) {
  if (arguments.length > 1) {
    str = Array.from(arguments)
      .map(x => x.trim())
      .filter(x => x.length)
      .join('-');
  } else {
    str = str.trim();
  }

  if (str.length === 0) {
    return '';
  }

  if (str.length === 1) {
    return str.toLowerCase();
  }

  if (/^[a-z0-9]+$/.test(str)) {
    return str;
  }

  const hasUpperCase = str !== str.toLowerCase();

  if (hasUpperCase) {
    str = preserveCamelCase(str);
  }

  return str
    .replace(/^[_.\- ]+/, '')
    .toLowerCase()
    .replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase());
};

















function tokenizeArgString(argString) {
  if (Array.isArray(argString)) return argString

  var i = 0
  var c = null
  var opening = null
  var args = []

  for (var ii = 0; ii < argString.length; ii++) {
    c = argString.charAt(ii)

    
    if (c === ' ' && !opening) {
      i++
      continue
    }

    
    
    if (c === opening) {
      opening = null
      continue
    } else if ((c === "'" || c === '"') && !opening) {
      opening = c
      continue
    }

    if (!args[i]) args[i] = ''
    args[i] += c
  }

  return args
}

function parse (args, opts) {
  if (!opts) opts = {}
  
  
  args = tokenizeArgString(args)
  
  var aliases = combineAliases(opts.alias || {})
  var configuration = assign({
    'short-option-groups': true,
    'camel-case-expansion': true,
    'dot-notation': true,
    'parse-numbers': true,
    'boolean-negation': true,
    'duplicate-arguments-array': true,
    'flatten-duplicate-arrays': true,
    'populate--': false
  }, opts.configuration)
  var defaults = opts.default || {}
  var configObjects = opts.configObjects || []
  var envPrefix = opts.envPrefix
  var notFlagsOption = configuration['populate--']
  var notFlagsArgv = notFlagsOption ? '--' : '_'
  var newAliases = {}
  
  var __ = opts.__ || function (str) {
    return str;
  }
  var error = null
  var flags = {
    aliases: {},
    arrays: {},
    bools: {},
    strings: {},
    numbers: {},
    counts: {},
    normalize: {},
    configs: {},
    defaulted: {},
    nargs: {},
    coercions: {}
  }
  var negative = /^-[0-9]+(\.[0-9]+)?/

  ;[].concat(opts.array).filter(Boolean).forEach(function (key) {
    flags.arrays[key] = true
  })

  ;[].concat(opts.boolean).filter(Boolean).forEach(function (key) {
    flags.bools[key] = true
  })

  ;[].concat(opts.string).filter(Boolean).forEach(function (key) {
    flags.strings[key] = true
  })

  ;[].concat(opts.number).filter(Boolean).forEach(function (key) {
    flags.numbers[key] = true
  })

  ;[].concat(opts.count).filter(Boolean).forEach(function (key) {
    flags.counts[key] = true
  })

  ;[].concat(opts.normalize).filter(Boolean).forEach(function (key) {
    flags.normalize[key] = true
  })

  Object.keys(opts.narg || {}).forEach(function (k) {
    flags.nargs[k] = opts.narg[k]
  })

  Object.keys(opts.coerce || {}).forEach(function (k) {
    flags.coercions[k] = opts.coerce[k]
  })

  if (Array.isArray(opts.config) || typeof opts.config === 'string') {
    ;[].concat(opts.config).filter(Boolean).forEach(function (key) {
      flags.configs[key] = true
    })
  } else {
    Object.keys(opts.config || {}).forEach(function (k) {
      flags.configs[k] = opts.config[k]
    })
  }

  
  
  extendAliases(opts.key, aliases, opts.default, flags.arrays)

  
  Object.keys(defaults).forEach(function (key) {
    (flags.aliases[key] || []).forEach(function (alias) {
      defaults[alias] = defaults[key]
    })
  })

  var argv = { _: [] }

  Object.keys(flags.bools).forEach(function (key) {
    setArg(key, !(key in defaults) ? false : defaults[key])
    setDefaulted(key)
  })

  var notFlags = []
  if (args.indexOf('--') !== -1) {
    notFlags = args.slice(args.indexOf('--') + 1)
    args = args.slice(0, args.indexOf('--'))
  }

  for (var i = 0; i < args.length; i++) {
    var arg = args[i]
    var broken
    var key
    var letters
    var m
    var next
    var value

    
    if (arg.match(/^--.+=/) || (
      !configuration['short-option-groups'] && arg.match(/^-.+=/)
    )) {
      
      
      
      m = arg.match(/^--?([^=]+)=([\s\S]*)$/)

      
      if (checkAllAliases(m[1], flags.nargs)) {
        args.splice(i + 1, 0, m[2])
        i = eatNargs(i, m[1], args)
      
      } else if (checkAllAliases(m[1], flags.arrays) && args.length > i + 1) {
        args.splice(i + 1, 0, m[2])
        i = eatArray(i, m[1], args)
      } else {
        setArg(m[1], m[2])
      }
    } else if (arg.match(/^--no-.+/) && configuration['boolean-negation']) {
      key = arg.match(/^--no-(.+)/)[1]
      setArg(key, false)

    
    } else if (arg.match(/^--.+/) || (
      !configuration['short-option-groups'] && arg.match(/^-.+/)
    )) {
      key = arg.match(/^--?(.+)/)[1]

      
      if (checkAllAliases(key, flags.nargs)) {
        i = eatNargs(i, key, args)
      
      } else if (checkAllAliases(key, flags.arrays) && args.length > i + 1) {
        i = eatArray(i, key, args)
      } else {
        next = args[i + 1]

        if (next !== undefined && (!next.match(/^-/) ||
          next.match(negative)) &&
          !checkAllAliases(key, flags.bools) &&
          !checkAllAliases(key, flags.counts)) {
          setArg(key, next)
          i++
        } else if (/^(true|false)$/.test(next)) {
          setArg(key, next)
          i++
        } else {
          setArg(key, defaultForType(guessType(key, flags)))
        }
      }

    
    } else if (arg.match(/^-.\..+=/)) {
      m = arg.match(/^-([^=]+)=([\s\S]*)$/)
      setArg(m[1], m[2])

    
    } else if (arg.match(/^-.\..+/)) {
      next = args[i + 1]
      key = arg.match(/^-(.\..+)/)[1]

      if (next !== undefined && !next.match(/^-/) &&
        !checkAllAliases(key, flags.bools) &&
        !checkAllAliases(key, flags.counts)) {
        setArg(key, next)
        i++
      } else {
        setArg(key, defaultForType(guessType(key, flags)))
      }
    } else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
      letters = arg.slice(1, -1).split('')
      broken = false

      for (var j = 0; j < letters.length; j++) {
        next = arg.slice(j + 2)

        if (letters[j + 1] && letters[j + 1] === '=') {
          value = arg.slice(j + 3)
          key = letters[j]

          
          if (checkAllAliases(key, flags.nargs)) {
            args.splice(i + 1, 0, value)
            i = eatNargs(i, key, args)
          
          } else if (checkAllAliases(key, flags.arrays) && args.length > i + 1) {
            args.splice(i + 1, 0, value)
            i = eatArray(i, key, args)
          } else {
            setArg(key, value)
          }

          broken = true
          break
        }

        if (next === '-') {
          setArg(letters[j], next)
          continue
        }

        
        if (/[A-Za-z]/.test(letters[j]) &&
          /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
          setArg(letters[j], next)
          broken = true
          break
        }

        if (letters[j + 1] && letters[j + 1].match(/\W/)) {
          setArg(letters[j], next)
          broken = true
          break
        } else {
          setArg(letters[j], defaultForType(guessType(letters[j], flags)))
        }
      }

      key = arg.slice(-1)[0]

      if (!broken && key !== '-') {
        
        if (checkAllAliases(key, flags.nargs)) {
          i = eatNargs(i, key, args)
        
        } else if (checkAllAliases(key, flags.arrays) && args.length > i + 1) {
          i = eatArray(i, key, args)
        } else {
          next = args[i + 1]

          if (next !== undefined && (!/^(-|--)[^-]/.test(next) ||
            next.match(negative)) &&
            !checkAllAliases(key, flags.bools) &&
            !checkAllAliases(key, flags.counts)) {
            setArg(key, next)
            i++
          } else if (/^(true|false)$/.test(next)) {
            setArg(key, next)
            i++
          } else {
            setArg(key, defaultForType(guessType(key, flags)))
          }
        }
      }
    } else {
      argv._.push(
        flags.strings['_'] || !isNumber(arg) ? arg : Number(arg)
      )
    }
  }

  
  
  
  
  
  
  applyEnvVars(argv, true) 
  applyEnvVars(argv, false)
  setConfig(argv)
  setConfigObjects()
  applyDefaultsAndAliases(argv, flags.aliases, defaults)
  applyCoercions(argv)

  
  Object.keys(flags.counts).forEach(function (key) {
    if (!hasKey(argv, key.split('.'))) setArg(key, 0)
  })

  
  if (notFlagsOption && notFlags.length) argv[notFlagsArgv] = []
  notFlags.forEach(function (key) {
    argv[notFlagsArgv].push(key)
  })

  
  
  function eatNargs (i, key, args) {
    var toEat = checkAllAliases(key, flags.nargs)

    if (args.length - (i + 1) < toEat) error = Error(__(`Not enough arguments following: ${key}`))

    for (var ii = i + 1; ii < (toEat + i + 1); ii++) {
      setArg(key, args[ii])
    }

    return (i + toEat)
  }

  
  
  
  function eatArray (i, key, args) {
    var start = i + 1
    var argsToSet = []
    var multipleArrayFlag = i > 0
    for (var ii = i + 1; ii < args.length; ii++) {
      if (/^-/.test(args[ii]) && !negative.test(args[ii])) {
        if (ii === start) {
          setArg(key, defaultForType('array'))
        }
        multipleArrayFlag = true
        break
      }
      i = ii
      argsToSet.push(args[ii])
    }
    if (multipleArrayFlag) {
      setArg(key, argsToSet.map(function (arg) {
        return processValue(key, arg)
      }))
    } else {
      argsToSet.forEach(function (arg) {
        setArg(key, arg)
      })
    }

    return i
  }

  function setArg (key, val) {
    unsetDefaulted(key)

    if (/-/.test(key) && !(flags.aliases[key] && flags.aliases[key].length) && configuration['camel-case-expansion']) {
      var c = camelCase(key)
      flags.aliases[key] = [c]
      newAliases[c] = true
    }

    var value = processValue(key, val)

    var splitKey = key.split('.')
    setKey(argv, splitKey, value)

    
    if (flags.aliases[key]) {
      flags.aliases[key].forEach(function (x) {
        x = x.split('.')
        setKey(argv, x, value)
      })
    }

    
    if (splitKey.length > 1 && configuration['dot-notation']) {
      ;(flags.aliases[splitKey[0]] || []).forEach(function (x) {
        x = x.split('.')

        
        var a = [].concat(splitKey)
        a.shift() 
        x = x.concat(a)

        setKey(argv, x, value)
      })
    }

    
    if (checkAllAliases(key, flags.normalize) && !checkAllAliases(key, flags.arrays)) {
      var keys = [key].concat(flags.aliases[key] || [])
      
    }
  }

  function processValue (key, val) {
    
    if (checkAllAliases(key, flags.bools) || checkAllAliases(key, flags.counts)) {
      if (typeof val === 'string') val = val === 'true'
    }

    var value = val
    if (!checkAllAliases(key, flags.strings) && !checkAllAliases(key, flags.coercions)) {
      if (isNumber(val)) value = Number(val)
      if (!isUndefined(val) && !isNumber(val) && checkAllAliases(key, flags.numbers)) value = NaN
    }

    
    if (checkAllAliases(key, flags.counts) && (isUndefined(value) || typeof value === 'boolean')) {
      value = increment
    }

    
    return value
  }

  
  
  function setConfig (argv) {
    var configLookup = {}

    
    
    applyDefaultsAndAliases(configLookup, flags.aliases, defaults)

    Object.keys(flags.configs).forEach(function (configKey) {
      var configPath = argv[configKey] || configLookup[configKey]
      if (configPath) {
        throw new Error("Not Supported in Chakra Host");
        try {
          var config = null
          var resolvedConfigPath = path.resolve(process.cwd(), configPath)

          if (typeof flags.configs[configKey] === 'function') {
            try {
              config = flags.configs[configKey](resolvedConfigPath)
            } catch (e) {
              config = e
            }
            if (config instanceof Error) {
              error = config
              return
            }
          } else {
            config = require(resolvedConfigPath)
          }

          setConfigObject(config)
        } catch (ex) {
          if (argv[configKey]) error = Error(__(`Invalid JSON config file: ${configPath}`))
        }
      }
    })
  }

  
  
  function setConfigObject (config, prev) {
    Object.keys(config).forEach(function (key) {
      var value = config[key]
      var fullKey = prev ? prev + '.' + key : key

      
      
      
      if (typeof value === 'object' && !Array.isArray(value) && configuration['dot-notation']) {
        
        setConfigObject(value, fullKey)
      } else {
        
        
        if (!hasKey(argv, fullKey.split('.')) || (flags.defaulted[fullKey])) {
          setArg(fullKey, value)
        }
      }
    })
  }

  
  function setConfigObjects () {
    if (typeof configObjects === 'undefined') return
    configObjects.forEach(function (configObject) {
      setConfigObject(configObject)
    })
  }

  function applyEnvVars (argv, configOnly) {
    if (typeof envPrefix === 'undefined') return

    var prefix = typeof envPrefix === 'string' ? envPrefix : ''
    Object.keys(process.env).forEach(function (envVar) {
      if (prefix === '' || envVar.lastIndexOf(prefix, 0) === 0) {
        
        var keys = envVar.split('__').map(function (key, i) {
          if (i === 0) {
            key = key.substring(prefix.length)
          }
          return camelCase(key)
        })

        if (((configOnly && flags.configs[keys.join('.')]) || !configOnly) && (!hasKey(argv, keys) || flags.defaulted[keys.join('.')])) {
          setArg(keys.join('.'), process.env[envVar])
        }
      }
    })
  }

  function applyCoercions (argv) {
    var coerce
    Object.keys(argv).forEach(function (key) {
      coerce = checkAllAliases(key, flags.coercions)
      if (typeof coerce === 'function') {
        try {
          argv[key] = coerce(argv[key])
        } catch (err) {
          error = err
        }
      }
    })
  }

  function applyDefaultsAndAliases (obj, aliases, defaults) {
    Object.keys(defaults).forEach(function (key) {
      if (!hasKey(obj, key.split('.'))) {
        setKey(obj, key.split('.'), defaults[key])

        ;(aliases[key] || []).forEach(function (x) {
          if (hasKey(obj, x.split('.'))) return
          setKey(obj, x.split('.'), defaults[key])
        })
      }
    })
  }

  function hasKey (obj, keys) {
    var o = obj

    if (!configuration['dot-notation']) keys = [keys.join('.')]

    keys.slice(0, -1).forEach(function (key) {
      o = (o[key] || {})
    })

    var key = keys[keys.length - 1]

    if (typeof o !== 'object') return false
    else return key in o
  }

  function setKey (obj, keys, value) {
    var o = obj

    if (!configuration['dot-notation']) keys = [keys.join('.')]

    keys.slice(0, -1).forEach(function (key) {
      if (o[key] === undefined) o[key] = {}
      o = o[key]
    })

    var key = keys[keys.length - 1]

    var isTypeArray = checkAllAliases(keys.join('.'), flags.arrays)
    var isValueArray = Array.isArray(value)
    var duplicate = configuration['duplicate-arguments-array']

    if (value === increment) {
      o[key] = increment(o[key])
    } else if (Array.isArray(o[key])) {
      if (duplicate && isTypeArray && isValueArray) {
        o[key] = configuration['flatten-duplicate-arrays'] ? o[key].concat(value) : [o[key]].concat([value])
      } else if (!duplicate && Boolean(isTypeArray) === Boolean(isValueArray)) {
        o[key] = value
      } else {
        o[key] = o[key].concat([value])
      }
    } else if (o[key] === undefined && isTypeArray) {
      o[key] = isValueArray ? value : [value]
    } else if (duplicate && !(o[key] === undefined || checkAllAliases(key, flags.bools) || checkAllAliases(keys.join('.'), flags.bools) || checkAllAliases(key, flags.counts))) {
      o[key] = [ o[key], value ]
    } else {
      o[key] = value
    }
  }

  
  function extendAliases () {
    Array.prototype.slice.call(arguments).forEach(function (obj) {
      Object.keys(obj || {}).forEach(function (key) {
        
        
        
        if (flags.aliases[key]) return

        flags.aliases[key] = [].concat(aliases[key] || [])
        
        flags.aliases[key].concat(key).forEach(function (x) {
          if (/-/.test(x) && configuration['camel-case-expansion']) {
            var c = camelCase(x)
            flags.aliases[key].push(c)
            newAliases[c] = true
          }
        })
        flags.aliases[key].forEach(function (x) {
          flags.aliases[x] = [key].concat(flags.aliases[key].filter(function (y) {
            return x !== y
          }))
        })
      })
    })
  }

  
  function checkAllAliases (key, flag) {
    var isSet = false
    var toCheck = [].concat(flags.aliases[key] || [], key)

    toCheck.forEach(function (key) {
      if (flag[key]) isSet = flag[key]
    })

    return isSet
  }

  function setDefaulted (key) {
    [].concat(flags.aliases[key] || [], key).forEach(function (k) {
      flags.defaulted[k] = true
    })
  }

  function unsetDefaulted (key) {
    [].concat(flags.aliases[key] || [], key).forEach(function (k) {
      delete flags.defaulted[k]
    })
  }

  
  
  function defaultForType (type) {
    var def = {
      boolean: true,
      string: '',
      number: undefined,
      array: []
    }

    return def[type]
  }

  
  function guessType (key, flags) {
    var type = 'boolean'

    if (checkAllAliases(key, flags.strings)) type = 'string'
    else if (checkAllAliases(key, flags.numbers)) type = 'number'
    else if (checkAllAliases(key, flags.arrays)) type = 'array'

    return type
  }

  function isNumber (x) {
    if (!configuration['parse-numbers']) return false
    if (typeof x === 'number') return true
    if (/^0x[0-9a-f]+$/i.test(x)) return true
    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x)
  }

  function isUndefined (num) {
    return num === undefined
  }

  return {
    argv: argv,
    error: error,
    aliases: flags.aliases,
    newAliases: newAliases,
    configuration: configuration
  }
}



function combineAliases (aliases) {
  var aliasArrays = []
  var change = true
  var combined = {}

  
  
  Object.keys(aliases).forEach(function (key) {
    aliasArrays.push(
      [].concat(aliases[key], key)
    )
  })

  
  
  while (change) {
    change = false
    for (var i = 0; i < aliasArrays.length; i++) {
      for (var ii = i + 1; ii < aliasArrays.length; ii++) {
        var intersect = aliasArrays[i].filter(function (v) {
          return aliasArrays[ii].indexOf(v) !== -1
        })

        if (intersect.length) {
          aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii])
          aliasArrays.splice(ii, 1)
          change = true
          break
        }
      }
    }
  }

  
  
  aliasArrays.forEach(function (aliasArray) {
    aliasArray = aliasArray.filter(function (v, i, self) {
      return self.indexOf(v) === i
    })
    combined[aliasArray.pop()] = aliasArray
  })

  return combined
}

function assign (defaults, configuration) {
  var o = {}
  configuration = configuration || {}

  Object.keys(defaults).forEach(function (k) {
    o[k] = defaults[k]
  })
  Object.keys(configuration).forEach(function (k) {
    o[k] = configuration[k]
  })

  return o
}




function increment (orig) {
  return orig !== undefined ? orig + 1 : 1
}

})();
