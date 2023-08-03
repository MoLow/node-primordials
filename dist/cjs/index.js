"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayPrototypeForEach = exports.ArrayPrototypeFlatMap = exports.ArrayPrototypeFlat = exports.ArrayPrototypeFindIndex = exports.ArrayPrototypeFind = exports.ArrayPrototypeFilter = exports.ArrayPrototypeFill = exports.ArrayPrototypeEvery = exports.ArrayPrototypeEntries = exports.ArrayPrototypeCopyWithin = exports.ArrayPrototypeConcat = exports.ArrayPrototype = exports.ArrayOfApply = exports.ArrayOf = exports.ArrayName = exports.ArrayLength = exports.ArrayIteratorPrototypeSymbolToStringTag = exports.ArrayIteratorPrototypeNext = exports.ArrayIteratorPrototype = exports.ArrayIterator = exports.ArrayIsArray = exports.ArrayGetSymbolSpecies = exports.ArrayFrom = exports.Array = exports.AggregateErrorPrototype = exports.AggregateErrorName = exports.AggregateErrorLength = exports.AggregateError = exports.unescape = exports.eval = exports.escape = exports.encodeURIComponent = exports.encodeURI = exports.decodeURIComponent = exports.decodeURI = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.setImmediate = exports.globalThis = exports.maybeStaticCall = exports.staticCall = exports.uncurryMethod = exports.uncurrySetter = exports.uncurryGetter = exports.uncurryThis = exports.staticApply = exports.hardenRegExp = exports.applyBind = void 0;
exports.BigIntPrototypeToString = exports.BigIntPrototypeToLocaleString = exports.BigIntPrototypeSymbolToStringTag = exports.BigIntPrototype = exports.BigIntName = exports.BigIntLength = exports.BigIntAsUintN = exports.BigIntAsIntN = exports.BigInt64ArrayPrototypeBYTES_PER_ELEMENT = exports.BigInt64ArrayPrototype = exports.BigInt64ArrayName = exports.BigInt64ArrayLength = exports.BigInt64ArrayBYTES_PER_ELEMENT = exports.BigInt64Array = exports.BigInt = exports.AsyncIteratorPrototype = exports.ArrayBufferPrototypeSymbolToStringTag = exports.ArrayBufferPrototypeSlice = exports.ArrayBufferPrototypeGetByteLength = exports.ArrayBufferPrototype = exports.ArrayBufferName = exports.ArrayBufferLength = exports.ArrayBufferIsView = exports.ArrayBufferGetSymbolSpecies = exports.ArrayBuffer = exports.ArrayPrototypeValues = exports.ArrayPrototypeUnshiftApply = exports.ArrayPrototypeUnshift = exports.ArrayPrototypeToString = exports.ArrayPrototypeToLocaleString = exports.ArrayPrototypeSymbolUnscopables = exports.ArrayPrototypeSymbolIterator = exports.ArrayPrototypeSplice = exports.ArrayPrototypeSort = exports.ArrayPrototypeSome = exports.ArrayPrototypeSlice = exports.ArrayPrototypeShift = exports.ArrayPrototypeReverse = exports.ArrayPrototypeReduceRight = exports.ArrayPrototypeReduce = exports.ArrayPrototypePushApply = exports.ArrayPrototypePush = exports.ArrayPrototypePop = exports.ArrayPrototypeMap = exports.ArrayPrototypeLength = exports.ArrayPrototypeLastIndexOf = exports.ArrayPrototypeKeys = exports.ArrayPrototypeJoin = exports.ArrayPrototypeIndexOf = exports.ArrayPrototypeIncludes = void 0;
exports.DatePrototypeGetFullYear = exports.DatePrototypeGetDay = exports.DatePrototypeGetDate = exports.DatePrototype = exports.DateParse = exports.DateNow = exports.DateName = exports.DateLength = exports.Date = exports.DataViewPrototypeSymbolToStringTag = exports.DataViewPrototypeSetUint8 = exports.DataViewPrototypeSetUint32 = exports.DataViewPrototypeSetUint16 = exports.DataViewPrototypeSetInt8 = exports.DataViewPrototypeSetInt32 = exports.DataViewPrototypeSetInt16 = exports.DataViewPrototypeSetFloat64 = exports.DataViewPrototypeSetFloat32 = exports.DataViewPrototypeSetBigUint64 = exports.DataViewPrototypeSetBigInt64 = exports.DataViewPrototypeGetUint8 = exports.DataViewPrototypeGetUint32 = exports.DataViewPrototypeGetUint16 = exports.DataViewPrototypeGetInt8 = exports.DataViewPrototypeGetInt32 = exports.DataViewPrototypeGetInt16 = exports.DataViewPrototypeGetFloat64 = exports.DataViewPrototypeGetFloat32 = exports.DataViewPrototypeGetByteOffset = exports.DataViewPrototypeGetByteLength = exports.DataViewPrototypeGetBuffer = exports.DataViewPrototypeGetBigUint64 = exports.DataViewPrototypeGetBigInt64 = exports.DataViewPrototype = exports.DataViewName = exports.DataViewLength = exports.DataView = exports.BooleanPrototypeValueOf = exports.BooleanPrototypeToString = exports.BooleanPrototype = exports.BooleanName = exports.BooleanLength = exports.Boolean = exports.BigUint64ArrayPrototypeBYTES_PER_ELEMENT = exports.BigUint64ArrayPrototype = exports.BigUint64ArrayName = exports.BigUint64ArrayLength = exports.BigUint64ArrayBYTES_PER_ELEMENT = exports.BigUint64Array = exports.BigIntPrototypeValueOf = void 0;
exports.ErrorPrototype = exports.ErrorName = exports.ErrorLength = exports.ErrorCaptureStackTrace = exports.Error = exports.DateUTC = exports.DatePrototypeValueOf = exports.DatePrototypeToUTCString = exports.DatePrototypeToTimeString = exports.DatePrototypeToString = exports.DatePrototypeToLocaleTimeString = exports.DatePrototypeToLocaleString = exports.DatePrototypeToLocaleDateString = exports.DatePrototypeToJSON = exports.DatePrototypeToISOString = exports.DatePrototypeToGMTString = exports.DatePrototypeToDateString = exports.DatePrototypeSymbolToPrimitive = exports.DatePrototypeSetYear = exports.DatePrototypeSetUTCSeconds = exports.DatePrototypeSetUTCMonth = exports.DatePrototypeSetUTCMinutes = exports.DatePrototypeSetUTCMilliseconds = exports.DatePrototypeSetUTCHours = exports.DatePrototypeSetUTCFullYear = exports.DatePrototypeSetUTCDate = exports.DatePrototypeSetTime = exports.DatePrototypeSetSeconds = exports.DatePrototypeSetMonth = exports.DatePrototypeSetMinutes = exports.DatePrototypeSetMilliseconds = exports.DatePrototypeSetHours = exports.DatePrototypeSetFullYear = exports.DatePrototypeSetDate = exports.DatePrototypeGetYear = exports.DatePrototypeGetUTCSeconds = exports.DatePrototypeGetUTCMonth = exports.DatePrototypeGetUTCMinutes = exports.DatePrototypeGetUTCMilliseconds = exports.DatePrototypeGetUTCHours = exports.DatePrototypeGetUTCFullYear = exports.DatePrototypeGetUTCDay = exports.DatePrototypeGetUTCDate = exports.DatePrototypeGetTimezoneOffset = exports.DatePrototypeGetTime = exports.DatePrototypeGetSeconds = exports.DatePrototypeGetMonth = exports.DatePrototypeGetMinutes = exports.DatePrototypeGetMilliseconds = exports.DatePrototypeGetHours = void 0;
exports.Int32Array = exports.Int16ArrayPrototypeBYTES_PER_ELEMENT = exports.Int16ArrayPrototype = exports.Int16ArrayName = exports.Int16ArrayLength = exports.Int16ArrayBYTES_PER_ELEMENT = exports.Int16Array = exports.FunctionPrototypeToString = exports.FunctionPrototypeSymbolHasInstance = exports.FunctionPrototypeSetCaller = exports.FunctionPrototypeSetArguments = exports.FunctionPrototypeName = exports.FunctionPrototypeLength = exports.FunctionPrototypeGetCaller = exports.FunctionPrototypeGetArguments = exports.FunctionPrototypeCall = exports.FunctionPrototypeBind = exports.FunctionPrototypeApply = exports.FunctionPrototype = exports.FunctionName = exports.FunctionLength = exports.Function = exports.Float64ArrayPrototypeBYTES_PER_ELEMENT = exports.Float64ArrayPrototype = exports.Float64ArrayName = exports.Float64ArrayLength = exports.Float64ArrayBYTES_PER_ELEMENT = exports.Float64Array = exports.Float32ArrayPrototypeBYTES_PER_ELEMENT = exports.Float32ArrayPrototype = exports.Float32ArrayName = exports.Float32ArrayLength = exports.Float32ArrayBYTES_PER_ELEMENT = exports.Float32Array = exports.FinalizationRegistryPrototypeUnregister = exports.FinalizationRegistryPrototypeSymbolToStringTag = exports.FinalizationRegistryPrototypeRegister = exports.FinalizationRegistryPrototype = exports.FinalizationRegistryName = exports.FinalizationRegistryLength = exports.FinalizationRegistry = exports.EvalErrorPrototypeName = exports.EvalErrorPrototypeMessage = exports.EvalErrorPrototype = exports.EvalErrorName = exports.EvalErrorLength = exports.EvalError = exports.ErrorPrototypeToString = exports.ErrorPrototypeName = exports.ErrorPrototypeMessage = void 0;
exports.MathFloor = exports.MathExpm1 = exports.MathExp = exports.MathE = exports.MathCosh = exports.MathCos = exports.MathClz32 = exports.MathCeil = exports.MathCbrt = exports.MathAtanh = exports.MathAtan2 = exports.MathAtan = exports.MathAsinh = exports.MathAsin = exports.MathAcosh = exports.MathAcos = exports.MathAbs = exports.Math = exports.MapPrototypeValues = exports.MapPrototypeSymbolToStringTag = exports.MapPrototypeSymbolIterator = exports.MapPrototypeSet = exports.MapPrototypeKeys = exports.MapPrototypeHas = exports.MapPrototypeGetSize = exports.MapPrototypeGet = exports.MapPrototypeForEach = exports.MapPrototypeEntries = exports.MapPrototypeDelete = exports.MapPrototypeClear = exports.MapPrototype = exports.MapName = exports.MapLength = exports.MapGetSymbolSpecies = exports.Map = exports.JSONSymbolToStringTag = exports.JSONStringify = exports.JSONParse = exports.JSON = exports.Int8ArrayPrototypeBYTES_PER_ELEMENT = exports.Int8ArrayPrototype = exports.Int8ArrayName = exports.Int8ArrayLength = exports.Int8ArrayBYTES_PER_ELEMENT = exports.Int8Array = exports.Int32ArrayPrototypeBYTES_PER_ELEMENT = exports.Int32ArrayPrototype = exports.Int32ArrayName = exports.Int32ArrayLength = exports.Int32ArrayBYTES_PER_ELEMENT = void 0;
exports.NumberPrototypeToFixed = exports.NumberPrototypeToExponential = exports.NumberPrototype = exports.NumberParseInt = exports.NumberParseFloat = exports.NumberPOSITIVE_INFINITY = exports.NumberName = exports.NumberNaN = exports.NumberNEGATIVE_INFINITY = exports.NumberMIN_VALUE = exports.NumberMIN_SAFE_INTEGER = exports.NumberMAX_VALUE = exports.NumberMAX_SAFE_INTEGER = exports.NumberLength = exports.NumberIsSafeInteger = exports.NumberIsNaN = exports.NumberIsInteger = exports.NumberIsFinite = exports.NumberEPSILON = exports.Number = exports.MathTrunc = exports.MathTanh = exports.MathTan = exports.MathSymbolToStringTag = exports.MathSqrt = exports.MathSinh = exports.MathSin = exports.MathSign = exports.MathSQRT2 = exports.MathSQRT1_2 = exports.MathRound = exports.MathRandom = exports.MathPow = exports.MathPI = exports.MathMinApply = exports.MathMin = exports.MathMaxApply = exports.MathMax = exports.MathLog2 = exports.MathLog1p = exports.MathLog10 = exports.MathLog = exports.MathLOG2E = exports.MathLOG10E = exports.MathLN2 = exports.MathLN10 = exports.MathImul = exports.MathHypotApply = exports.MathHypot = exports.MathFround = void 0;
exports.PromisePrototypeCatch = exports.PromisePrototype = exports.PromiseName = exports.PromiseLength = exports.PromiseGetSymbolSpecies = exports.PromiseAny = exports.PromiseAllSettled = exports.PromiseAll = exports.Promise = exports.ObjectValues = exports.ObjectSetPrototypeOf = exports.ObjectSeal = exports.ObjectPrototype__lookupSetter__ = exports.ObjectPrototype__lookupGetter__ = exports.ObjectPrototype__defineSetter__ = exports.ObjectPrototype__defineGetter__ = exports.ObjectPrototypeValueOf = exports.ObjectPrototypeToString = exports.ObjectPrototypeToLocaleString = exports.ObjectPrototypeSet__proto__ = exports.ObjectPrototypePropertyIsEnumerable = exports.ObjectPrototypeIsPrototypeOf = exports.ObjectPrototypeHasOwnProperty = exports.ObjectPrototypeGet__proto__ = exports.ObjectPrototype = exports.ObjectPreventExtensions = exports.ObjectName = exports.ObjectLength = exports.ObjectKeys = exports.ObjectIsSealed = exports.ObjectIsFrozen = exports.ObjectIsExtensible = exports.ObjectIs = exports.ObjectGetPrototypeOf = exports.ObjectGetOwnPropertySymbols = exports.ObjectGetOwnPropertyNames = exports.ObjectGetOwnPropertyDescriptors = exports.ObjectGetOwnPropertyDescriptor = exports.ObjectFromEntries = exports.ObjectFreeze = exports.ObjectEntries = exports.ObjectDefineProperty = exports.ObjectDefineProperties = exports.ObjectCreate = exports.ObjectAssign = exports.Object = exports.NumberPrototypeValueOf = exports.NumberPrototypeToString = exports.NumberPrototypeToPrecision = exports.NumberPrototypeToLocaleString = void 0;
exports.RegExpGetDollarPlus = exports.RegExpGetDollarAmp = exports.RegExpGet$_ = exports.RegExpGet$9 = exports.RegExpGet$8 = exports.RegExpGet$7 = exports.RegExpGet$6 = exports.RegExpGet$5 = exports.RegExpGet$4 = exports.RegExpGet$3 = exports.RegExpGet$2 = exports.RegExpGet$1 = exports.RegExp = exports.ReflectSymbolToStringTag = exports.ReflectSetPrototypeOf = exports.ReflectSet = exports.ReflectPreventExtensions = exports.ReflectOwnKeys = exports.ReflectIsExtensible = exports.ReflectHas = exports.ReflectGetPrototypeOf = exports.ReflectGetOwnPropertyDescriptor = exports.ReflectGet = exports.ReflectDeleteProperty = exports.ReflectDefineProperty = exports.ReflectConstruct = exports.ReflectApply = exports.Reflect = exports.ReferenceErrorPrototypeName = exports.ReferenceErrorPrototypeMessage = exports.ReferenceErrorPrototype = exports.ReferenceErrorName = exports.ReferenceErrorLength = exports.ReferenceError = exports.RangeErrorPrototypeName = exports.RangeErrorPrototypeMessage = exports.RangeErrorPrototype = exports.RangeErrorName = exports.RangeErrorLength = exports.RangeError = exports.ProxyRevocable = exports.ProxyName = exports.ProxyLength = exports.Proxy = exports.PromiseResolve = exports.PromiseReject = exports.PromiseRace = exports.PromisePrototypeThen = exports.PromisePrototypeSymbolToStringTag = exports.PromisePrototypeFinally = void 0;
exports.SetGetSymbolSpecies = exports.Set = exports.RegExpSetRightContext = exports.RegExpSetLeftContext = exports.RegExpSetLastParen = exports.RegExpSetLastMatch = exports.RegExpSetInput = exports.RegExpSetDollarTick = exports.RegExpSetDollarSquo = exports.RegExpSetDollarPlus = exports.RegExpSetDollarAmp = exports.RegExpSet$_ = exports.RegExpSet$9 = exports.RegExpSet$8 = exports.RegExpSet$7 = exports.RegExpSet$6 = exports.RegExpSet$5 = exports.RegExpSet$4 = exports.RegExpSet$3 = exports.RegExpSet$2 = exports.RegExpSet$1 = exports.RegExpPrototypeToString = exports.RegExpPrototypeTest = exports.RegExpPrototypeSymbolSplit = exports.RegExpPrototypeSymbolSearch = exports.RegExpPrototypeSymbolReplace = exports.RegExpPrototypeSymbolMatchAll = exports.RegExpPrototypeSymbolMatch = exports.RegExpPrototypeGetUnicode = exports.RegExpPrototypeGetSticky = exports.RegExpPrototypeGetSource = exports.RegExpPrototypeGetMultiline = exports.RegExpPrototypeGetIgnoreCase = exports.RegExpPrototypeGetHasIndices = exports.RegExpPrototypeGetGlobal = exports.RegExpPrototypeGetFlags = exports.RegExpPrototypeGetDotAll = exports.RegExpPrototypeExec = exports.RegExpPrototypeCompile = exports.RegExpPrototype = exports.RegExpName = exports.RegExpLength = exports.RegExpGetSymbolSpecies = exports.RegExpGetRightContext = exports.RegExpGetLeftContext = exports.RegExpGetLastParen = exports.RegExpGetLastMatch = exports.RegExpGetInput = exports.RegExpGetDollarTick = exports.RegExpGetDollarSquo = void 0;
exports.StringPrototypePadEnd = exports.StringPrototypeNormalize = exports.StringPrototypeMatchAll = exports.StringPrototypeMatch = exports.StringPrototypeLocaleCompare = exports.StringPrototypeLink = exports.StringPrototypeLength = exports.StringPrototypeLastIndexOf = exports.StringPrototypeItalics = exports.StringPrototypeIndexOf = exports.StringPrototypeIncludes = exports.StringPrototypeFontsize = exports.StringPrototypeFontcolor = exports.StringPrototypeFixed = exports.StringPrototypeEndsWith = exports.StringPrototypeConcatApply = exports.StringPrototypeConcat = exports.StringPrototypeCodePointAt = exports.StringPrototypeCharCodeAt = exports.StringPrototypeCharAt = exports.StringPrototypeBold = exports.StringPrototypeBlink = exports.StringPrototypeBig = exports.StringPrototypeAnchor = exports.StringPrototype = exports.StringName = exports.StringLength = exports.StringIteratorPrototypeSymbolToStringTag = exports.StringIteratorPrototypeNext = exports.StringIteratorPrototype = exports.StringIterator = exports.StringFromCodePointApply = exports.StringFromCodePoint = exports.StringFromCharCodeApply = exports.StringFromCharCode = exports.String = exports.SetPrototypeValues = exports.SetPrototypeSymbolToStringTag = exports.SetPrototypeSymbolIterator = exports.SetPrototypeKeys = exports.SetPrototypeHas = exports.SetPrototypeGetSize = exports.SetPrototypeForEach = exports.SetPrototypeEntries = exports.SetPrototypeDelete = exports.SetPrototypeClear = exports.SetPrototypeAdd = exports.SetPrototype = exports.SetName = exports.SetLength = void 0;
exports.SymbolToStringTag = exports.SymbolToPrimitive = exports.SymbolSplit = exports.SymbolSpecies = exports.SymbolSearch = exports.SymbolReplace = exports.SymbolPrototypeValueOf = exports.SymbolPrototypeToString = exports.SymbolPrototypeSymbolToStringTag = exports.SymbolPrototypeSymbolToPrimitive = exports.SymbolPrototypeGetDescription = exports.SymbolPrototype = exports.SymbolName = exports.SymbolMatchAll = exports.SymbolMatch = exports.SymbolLength = exports.SymbolKeyFor = exports.SymbolIterator = exports.SymbolIsConcatSpreadable = exports.SymbolHasInstance = exports.SymbolFor = exports.SymbolAsyncIterator = exports.Symbol = exports.StringRaw = exports.StringPrototypeValueOf = exports.StringPrototypeTrimStart = exports.StringPrototypeTrimRight = exports.StringPrototypeTrimLeft = exports.StringPrototypeTrimEnd = exports.StringPrototypeTrim = exports.StringPrototypeToUpperCase = exports.StringPrototypeToString = exports.StringPrototypeToLowerCase = exports.StringPrototypeToLocaleUpperCase = exports.StringPrototypeToLocaleLowerCase = exports.StringPrototypeSymbolIterator = exports.StringPrototypeSup = exports.StringPrototypeSubstring = exports.StringPrototypeSubstr = exports.StringPrototypeSub = exports.StringPrototypeStrike = exports.StringPrototypeStartsWith = exports.StringPrototypeSplit = exports.StringPrototypeSmall = exports.StringPrototypeSlice = exports.StringPrototypeSearch = exports.StringPrototypeReplaceAll = exports.StringPrototypeReplace = exports.StringPrototypeRepeat = exports.StringPrototypePadStart = void 0;
exports.TypedArrayPrototypeToLocaleString = exports.TypedArrayPrototypeSymbolIterator = exports.TypedArrayPrototypeSubarray = exports.TypedArrayPrototypeSort = exports.TypedArrayPrototypeSome = exports.TypedArrayPrototypeSlice = exports.TypedArrayPrototypeSet = exports.TypedArrayPrototypeReverse = exports.TypedArrayPrototypeReduceRight = exports.TypedArrayPrototypeReduce = exports.TypedArrayPrototypeMap = exports.TypedArrayPrototypeLastIndexOf = exports.TypedArrayPrototypeKeys = exports.TypedArrayPrototypeJoin = exports.TypedArrayPrototypeIndexOf = exports.TypedArrayPrototypeIncludes = exports.TypedArrayPrototypeGetSymbolToStringTag = exports.TypedArrayPrototypeGetLength = exports.TypedArrayPrototypeGetByteOffset = exports.TypedArrayPrototypeGetByteLength = exports.TypedArrayPrototypeGetBuffer = exports.TypedArrayPrototypeForEach = exports.TypedArrayPrototypeFindIndex = exports.TypedArrayPrototypeFind = exports.TypedArrayPrototypeFilter = exports.TypedArrayPrototypeFill = exports.TypedArrayPrototypeEvery = exports.TypedArrayPrototypeEntries = exports.TypedArrayPrototypeCopyWithin = exports.TypedArrayPrototype = exports.TypedArrayOfApply = exports.TypedArrayOf = exports.TypedArrayName = exports.TypedArrayLength = exports.TypedArrayGetSymbolSpecies = exports.TypedArrayFrom = exports.TypedArray = exports.TypeErrorPrototypeName = exports.TypeErrorPrototypeMessage = exports.TypeErrorPrototype = exports.TypeErrorName = exports.TypeErrorLength = exports.TypeError = exports.SyntaxErrorPrototypeName = exports.SyntaxErrorPrototypeMessage = exports.SyntaxErrorPrototype = exports.SyntaxErrorName = exports.SyntaxErrorLength = exports.SyntaxError = exports.SymbolUnscopables = void 0;
exports.WeakRefPrototypeSymbolToStringTag = exports.WeakRefPrototypeDeref = exports.WeakRefPrototype = exports.WeakRefName = exports.WeakRefLength = exports.WeakRef = exports.WeakMapPrototypeSymbolToStringTag = exports.WeakMapPrototypeSet = exports.WeakMapPrototypeHas = exports.WeakMapPrototypeGet = exports.WeakMapPrototypeDelete = exports.WeakMapPrototype = exports.WeakMapName = exports.WeakMapLength = exports.WeakMap = exports.Uint8ClampedArrayPrototypeBYTES_PER_ELEMENT = exports.Uint8ClampedArrayPrototype = exports.Uint8ClampedArrayName = exports.Uint8ClampedArrayLength = exports.Uint8ClampedArrayBYTES_PER_ELEMENT = exports.Uint8ClampedArray = exports.Uint8ArrayPrototypeBYTES_PER_ELEMENT = exports.Uint8ArrayPrototype = exports.Uint8ArrayName = exports.Uint8ArrayLength = exports.Uint8ArrayBYTES_PER_ELEMENT = exports.Uint8Array = exports.Uint32ArrayPrototypeBYTES_PER_ELEMENT = exports.Uint32ArrayPrototype = exports.Uint32ArrayName = exports.Uint32ArrayLength = exports.Uint32ArrayBYTES_PER_ELEMENT = exports.Uint32Array = exports.Uint16ArrayPrototypeBYTES_PER_ELEMENT = exports.Uint16ArrayPrototype = exports.Uint16ArrayName = exports.Uint16ArrayLength = exports.Uint16ArrayBYTES_PER_ELEMENT = exports.Uint16Array = exports.URLRevokeObjectURL = exports.URLCreateObjectURL = exports.URL = exports.URIErrorPrototypeName = exports.URIErrorPrototypeMessage = exports.URIErrorPrototype = exports.URIErrorName = exports.URIErrorLength = exports.URIError = exports.TypedArrayPrototypeValues = exports.TypedArrayPrototypeToString = void 0;
exports.primordials = exports.processDebugPort = exports.processEmitWarning = exports.processHasUncaughtExceptionCaptureCallback = exports.processSetUncaughtExceptionCaptureCallback = exports.processSetSourceMapsEnabled = exports.processSetegid = exports.processSeteuid = exports.processSetgid = exports.processSetuid = exports.processSetgroups = exports.processsInitgroups = exports.processUmask = exports.processAbort = exports.processNextTick = exports.processFeatures = exports.processModuleLoadList = exports.processRelease = exports.processPlatform = exports.processArch = exports.processVersions = exports.processVersion = exports.processTitle = exports.processPpid = exports.processPid = exports.processArgv0 = exports.processEnv = exports.processExecPath = exports.processExecArgv = exports.processArgv = exports.processCwd = exports.SafePromise = exports.SafeWeakRef = exports.SafeFinalizationRegistry = exports.SafeWeakSet = exports.SafeSet = exports.SafeWeakMap = exports.SafeMap = exports.makeSafe = exports.WeakSetPrototypeSymbolToStringTag = exports.WeakSetPrototypeHas = exports.WeakSetPrototypeDelete = exports.WeakSetPrototypeAdd = exports.WeakSetPrototype = exports.WeakSetName = exports.WeakSetLength = exports.WeakSet = void 0;
// ensure that we have the really truly true and real globalThis
const GLOBALTHIS = (0, eval)('this');
exports.globalThis = GLOBALTHIS;
const { Array, ArrayBuffer, BigInt, BigInt64Array, BigUint64Array, Boolean, Date, DataView, Error, EvalError, FinalizationRegistry, Float32Array, Float64Array, Function, Int16Array, Int32Array, Int8Array, JSON: JSON_, Map, Math: Math_, Number, Promise, Proxy, RangeError, ReferenceError, Reflect, RegExp, Set, String, Symbol, SyntaxError, TypeError, URIError, Uint16Array, Uint32Array, Uint8Array, Uint8ClampedArray, URL, WeakMap, WeakRef, WeakSet, setImmediate: setImmediate_, setTimeout: setTimeout_, setInterval: setInterval_, clearTimeout, clearInterval, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent, escape, eval: eval_, unescape, } = GLOBALTHIS;
exports.Array = Array;
exports.ArrayBuffer = ArrayBuffer;
exports.BigInt = BigInt;
exports.BigInt64Array = BigInt64Array;
exports.BigUint64Array = BigUint64Array;
exports.Boolean = Boolean;
exports.Date = Date;
exports.DataView = DataView;
exports.Error = Error;
exports.EvalError = EvalError;
exports.FinalizationRegistry = FinalizationRegistry;
exports.Float32Array = Float32Array;
exports.Float64Array = Float64Array;
exports.Function = Function;
exports.Int16Array = Int16Array;
exports.Int32Array = Int32Array;
exports.Int8Array = Int8Array;
exports.Map = Map;
exports.Number = Number;
exports.Promise = Promise;
exports.Proxy = Proxy;
exports.RangeError = RangeError;
exports.ReferenceError = ReferenceError;
exports.Reflect = Reflect;
exports.RegExp = RegExp;
exports.Set = Set;
exports.String = String;
exports.Symbol = Symbol;
exports.SyntaxError = SyntaxError;
exports.TypeError = TypeError;
exports.URIError = URIError;
exports.Uint16Array = Uint16Array;
exports.Uint32Array = Uint32Array;
exports.Uint8Array = Uint8Array;
exports.Uint8ClampedArray = Uint8ClampedArray;
exports.URL = URL;
exports.WeakMap = WeakMap;
exports.WeakRef = WeakRef;
exports.WeakSet = WeakSet;
exports.clearTimeout = clearTimeout;
exports.clearInterval = clearInterval;
exports.decodeURI = decodeURI;
exports.decodeURIComponent = decodeURIComponent;
exports.encodeURI = encodeURI;
exports.encodeURIComponent = encodeURIComponent;
exports.escape = escape;
exports.eval = eval_;
exports.unescape = unescape;
const OBJECT = GLOBALTHIS.Object;
exports.Object = OBJECT;
const Uint8ArrayOf = Uint8Array.of;
const Int8ArrayOf = Int8Array.of;
const Uint16ArrayOf = Uint16Array.of;
const Int16ArrayOf = Int16Array.of;
const Uint32ArrayOf = Uint32Array.of;
const Int32ArrayOf = Int32Array.of;
const Uint8ClampedArrayOf = Uint8ClampedArray.of;
const Float32ArrayOf = Float32Array.of;
const Float64ArrayOf = Float64Array.of;
const Uint8ArrayFrom = Uint8Array.from;
const Int8ArrayFrom = Int8Array.from;
const Uint16ArrayFrom = Uint16Array.from;
const Int16ArrayFrom = Int16Array.from;
const Uint32ArrayFrom = Uint32Array.from;
const Int32ArrayFrom = Int32Array.from;
const Uint8ClampedArrayFrom = Uint8ClampedArray.from;
const Float32ArrayFrom = Float32Array.from;
const Float64ArrayFrom = Float64Array.from;
const TypedArrayOf = (ctor, ...args) => {
    const fn = ctor === Uint8Array
        ? Uint8ArrayOf
        : ctor === Int8Array
            ? Int8ArrayOf
            : ctor === Uint16Array
                ? Uint16ArrayOf
                : ctor === Int16Array
                    ? Int16ArrayOf
                    : ctor === Uint32Array
                        ? Uint32ArrayOf
                        : ctor === Int32Array
                            ? Int32ArrayOf
                            : ctor === Uint8ClampedArray
                                ? Uint8ClampedArrayOf
                                : ctor === Float32Array
                                    ? Float32ArrayOf
                                    : ctor === Float64Array
                                        ? Float64ArrayOf
                                        : undefined;
    if (!fn) {
        throw new TypeError('invalid TypedArray constructor: ' + ctor);
    }
    return uncurryThis(fn)(ctor, ...args);
};
exports.TypedArrayOf = TypedArrayOf;
const TypedArrayOfApply = (ctor, args) => {
    const fn = ctor === Uint8Array
        ? Uint8ArrayOf
        : ctor === Int8Array
            ? Int8ArrayOf
            : ctor === Uint16Array
                ? Uint16ArrayOf
                : ctor === Int16Array
                    ? Int16ArrayOf
                    : ctor === Uint32Array
                        ? Uint32ArrayOf
                        : ctor === Int32Array
                            ? Int32ArrayOf
                            : ctor === Uint8ClampedArray
                                ? Uint8ClampedArrayOf
                                : ctor === Float32Array
                                    ? Float32ArrayOf
                                    : ctor === Float64Array
                                        ? Float64ArrayOf
                                        : undefined;
    if (!fn) {
        throw new TypeError('invalid TypedArray constructor: ' + ctor);
    }
    return applyBind(fn)(ctor, args);
};
exports.TypedArrayOfApply = TypedArrayOfApply;
const TypedArrayPrototype = Reflect.getPrototypeOf(Uint8Array.prototype);
exports.TypedArrayPrototype = TypedArrayPrototype;
const TypedArrayPrototypeGetSymbolToStringTag = (self) => self instanceof Uint8Array
    ? 'Uint8Array'
    : self instanceof Int8Array
        ? 'Int8Array'
        : self instanceof Uint16Array
            ? 'Uint16Array'
            : self instanceof Int16Array
                ? 'Int16Array'
                : self instanceof Uint32Array
                    ? 'Uint32Array'
                    : self instanceof Int32Array
                        ? 'Int32Array'
                        : self instanceof Uint8ClampedArray
                            ? 'Uint8ClampedArray'
                            : self instanceof Float32Array
                                ? 'Float32Array'
                                : self instanceof Float64Array
                                    ? 'Float64Array'
                                    : undefined;
exports.TypedArrayPrototypeGetSymbolToStringTag = TypedArrayPrototypeGetSymbolToStringTag;
const TypedArrayFrom = (ctor, ...args) => {
    const fn = ctor === Uint8Array
        ? Uint8ArrayFrom
        : ctor === Int8Array
            ? Int8ArrayFrom
            : ctor === Uint16Array
                ? Uint16ArrayFrom
                : ctor === Int16Array
                    ? Int16ArrayFrom
                    : ctor === Uint32Array
                        ? Uint32ArrayFrom
                        : ctor === Int32Array
                            ? Int32ArrayFrom
                            : ctor === Uint8ClampedArray
                                ? Uint8ClampedArrayFrom
                                : ctor === Float32Array
                                    ? Float32ArrayFrom
                                    : ctor === Float64Array
                                        ? Float64ArrayFrom
                                        : undefined;
    if (!fn) {
        throw new TypeError('invalid TypedArray constructor: ' + ctor);
    }
    return uncurryThis(fn)(ctor, ...args);
};
exports.TypedArrayFrom = TypedArrayFrom;
const SafeObject = OBJECT.defineProperties(OBJECT.create(null), OBJECT.getOwnPropertyDescriptors(OBJECT));
OBJECT.freeze(SafeObject);
// fast version:
// const SafeObject = Object
const cloneSafe = (obj) => {
    const safe = SafeObject.defineProperties(SafeObject.create(null), SafeObject.getOwnPropertyDescriptors(obj));
    SafeObject.freeze(safe);
    return safe;
};
// fast version:
// cloneSafe = (o: T) => o
const FunctionPrototype = cloneSafe(Function.prototype);
exports.FunctionPrototype = FunctionPrototype;
const { apply, bind, call } = Function.prototype;
const uncurryThis = bind.bind(call);
exports.uncurryThis = uncurryThis;
// fast version:
// const uncurryThis = (fn: T) =>
//   (thisp: ThisParameterType, ...args: Parameters<T>) =>
//     fn.call(thisp, ...args)
const applyBind = bind.bind(apply);
exports.applyBind = applyBind;
// fast version:
// const applyBind = (fn: T) =>
//   (thisp: ThisParameterType, args: Parameters<T>) =>
//     fn.apply(thisp, args)
const staticApply = (fn) => {
    return bind.bind(apply)(fn, null);
};
exports.staticApply = staticApply;
// fast version:
// const staticApply = (fn: T) =>
//   (args: Parameters<T>) =>
//     fn.apply(null, args)
const staticCall = (fn) => (...args) => fn(...args);
exports.staticCall = staticCall;
const maybeStaticCall = (fn) => (!fn ? fn : staticCall(fn));
exports.maybeStaticCall = maybeStaticCall;
const uncurryMethod = (obj, k) => bind.bind(call)(obj[k], null);
exports.uncurryMethod = uncurryMethod;
// fast version:
// const uncurryMethod = (obj: O, k: K) =>
//   (thisp: ThisParameterType, ...args: Parameters<O[K]>) =>
//     obj[k].call(thisp, ...args)
const uncurryGetter = (obj, k) => {
    const desc = SafeReflect.getOwnPropertyDescriptor(obj, k);
    if (desc?.get) {
        return uncurryThis(desc.get);
    }
    throw new Error('invalid uncurryGetter call: ' + String(k));
};
exports.uncurryGetter = uncurryGetter;
const uncurrySetter = (obj, k) => {
    const desc = SafeReflect.getOwnPropertyDescriptor(obj, k);
    if (desc?.set) {
        return uncurryThis(desc.set);
    }
    throw new Error('invalid uncurrySetter call: ' + String(k));
};
exports.uncurrySetter = uncurrySetter;
const FunctionPrototypeCall = uncurryThis(call);
exports.FunctionPrototypeCall = FunctionPrototypeCall;
// local shorthand
const fpc = FunctionPrototypeCall;
const ArrayPrototype = Array.prototype;
exports.ArrayPrototype = ArrayPrototype;
/* c8 ignore start */
const getValue = (obj, prop) => {
    const desc = SafeObject.getOwnPropertyDescriptor(obj, prop);
    if (!desc) {
        throw new Error('property not found: ' + String(prop));
    }
    if ('get' in desc) {
        return fpc(desc.get, obj);
    }
    else if ('value' in desc) {
        return desc.value;
    }
    else {
        throw new Error('property not readable: ' + String(prop));
    }
};
// Get a copy of a regular expression using our local ctor
// this isn't actually all that hardened, users can still modify
// the getter for 'source' and 'flags'
const hardenRegExp = (re) => new RegExp(getValue(re, 'source'), getValue(re, 'flags'));
exports.hardenRegExp = hardenRegExp;
/* c8 ignore stop */
const SafeReflect = Reflect;
// TODO: test when process is clobbered, that this all still works kinda
/* c8 ignore start */
const ogProcess = (typeof GLOBALTHIS.process === 'object' && !!GLOBALTHIS.process
    ? GLOBALTHIS.process
    : {
        argv: [],
        argv0: '',
        execArgv: [],
        cwd: () => '.',
        execPath: '',
        env: {},
        pid: 0,
        ppid: 0,
        title: '',
        version: '',
        versions: {},
        platform: '',
        release: {},
        arch: '',
        moduleLoadList: [],
        features: {},
        debugPort: 0,
    });
/* c8 ignore stop */
const PROCESS = cloneSafe(ogProcess);
const setImmediate = Object.freeze(Object.assign((...args) => setImmediate_(...args), { ...setImmediate_ }));
exports.setImmediate = setImmediate;
const setTimeout = Object.freeze(Object.assign((...args) => setTimeout_(...args), { ...setTimeout_ }));
exports.setTimeout = setTimeout;
const setInterval = Object.freeze(Object.assign((...args) => setInterval_(...args)));
exports.setInterval = setInterval;
const AggregateError = GLOBALTHIS.AggregateError;
exports.AggregateError = AggregateError;
/* c8 ignore start */
const AggregateErrorLength = AggregateError?.length;
exports.AggregateErrorLength = AggregateErrorLength;
const AggregateErrorName = AggregateError?.name;
exports.AggregateErrorName = AggregateErrorName;
const AggregateErrorPrototype = AggregateError?.prototype || {};
exports.AggregateErrorPrototype = AggregateErrorPrototype;
const AggregateErrorPrototypeMessage = '';
const AggregateErrorPrototypeName = 'AggregateError';
/* c8 ignore stop */
const ArrayFrom = staticCall(Array.from);
exports.ArrayFrom = ArrayFrom;
const ArrayIsArray = staticCall(Array.isArray);
exports.ArrayIsArray = ArrayIsArray;
const ArrayLength = Array.length;
exports.ArrayLength = ArrayLength;
const ArrayName = Array.name;
exports.ArrayName = ArrayName;
const ArrayOf = staticCall(Array.of);
exports.ArrayOf = ArrayOf;
const ArrayOfApply = staticApply(Array.of);
exports.ArrayOfApply = ArrayOfApply;
const ArrayPrototypeConcat = uncurryThis(ArrayPrototype.concat);
exports.ArrayPrototypeConcat = ArrayPrototypeConcat;
const ArrayPrototypeLength = 0;
exports.ArrayPrototypeLength = ArrayPrototypeLength;
const ArrayPrototypeCopyWithin = uncurryThis(ArrayPrototype.copyWithin);
exports.ArrayPrototypeCopyWithin = ArrayPrototypeCopyWithin;
const ArrayPrototypeEntries = uncurryThis(ArrayPrototype.entries);
exports.ArrayPrototypeEntries = ArrayPrototypeEntries;
const ArrayPrototypeEvery = uncurryThis(ArrayPrototype.every);
exports.ArrayPrototypeEvery = ArrayPrototypeEvery;
const ArrayPrototypeFill = uncurryThis(ArrayPrototype.fill);
exports.ArrayPrototypeFill = ArrayPrototypeFill;
const ArrayPrototypeFilter = uncurryThis(ArrayPrototype.filter);
exports.ArrayPrototypeFilter = ArrayPrototypeFilter;
const ArrayPrototypeFind = uncurryThis(ArrayPrototype.find);
exports.ArrayPrototypeFind = ArrayPrototypeFind;
const ArrayPrototypeFindIndex = uncurryThis(ArrayPrototype.findIndex);
exports.ArrayPrototypeFindIndex = ArrayPrototypeFindIndex;
const ArrayPrototypeFlat = uncurryThis(ArrayPrototype.flat);
exports.ArrayPrototypeFlat = ArrayPrototypeFlat;
const ArrayPrototypeFlatMap = uncurryThis(ArrayPrototype.flatMap);
exports.ArrayPrototypeFlatMap = ArrayPrototypeFlatMap;
const ArrayPrototypeForEach = uncurryThis(ArrayPrototype.forEach);
exports.ArrayPrototypeForEach = ArrayPrototypeForEach;
const ArrayPrototypeIncludes = uncurryThis(ArrayPrototype.includes);
exports.ArrayPrototypeIncludes = ArrayPrototypeIncludes;
const ArrayPrototypeIndexOf = uncurryThis(ArrayPrototype.indexOf);
exports.ArrayPrototypeIndexOf = ArrayPrototypeIndexOf;
const ArrayPrototypeJoin = uncurryThis(ArrayPrototype.join);
exports.ArrayPrototypeJoin = ArrayPrototypeJoin;
const ArrayPrototypeKeys = uncurryThis(ArrayPrototype.keys);
exports.ArrayPrototypeKeys = ArrayPrototypeKeys;
const ArrayPrototypeLastIndexOf = uncurryThis(ArrayPrototype.lastIndexOf);
exports.ArrayPrototypeLastIndexOf = ArrayPrototypeLastIndexOf;
const ArrayPrototypeMap = uncurryThis(ArrayPrototype.map);
exports.ArrayPrototypeMap = ArrayPrototypeMap;
const ArrayPrototypePop = uncurryThis(ArrayPrototype.pop);
exports.ArrayPrototypePop = ArrayPrototypePop;
const ArrayPrototypePush = uncurryThis(ArrayPrototype.push);
exports.ArrayPrototypePush = ArrayPrototypePush;
const ArrayPrototypePushApply = applyBind(ArrayPrototype.push);
exports.ArrayPrototypePushApply = ArrayPrototypePushApply;
const ArrayPrototypeReduce = uncurryThis(ArrayPrototype.reduce);
exports.ArrayPrototypeReduce = ArrayPrototypeReduce;
const ArrayPrototypeReduceRight = uncurryThis(ArrayPrototype.reduceRight);
exports.ArrayPrototypeReduceRight = ArrayPrototypeReduceRight;
const ArrayPrototypeReverse = uncurryThis(ArrayPrototype.reverse);
exports.ArrayPrototypeReverse = ArrayPrototypeReverse;
const ArrayPrototypeShift = uncurryThis(ArrayPrototype.shift);
exports.ArrayPrototypeShift = ArrayPrototypeShift;
const ArrayPrototypeSlice = uncurryThis(ArrayPrototype.slice);
exports.ArrayPrototypeSlice = ArrayPrototypeSlice;
const ArrayPrototypeSome = uncurryThis(ArrayPrototype.some);
exports.ArrayPrototypeSome = ArrayPrototypeSome;
const ArrayPrototypeSort = uncurryThis(ArrayPrototype.sort);
exports.ArrayPrototypeSort = ArrayPrototypeSort;
const ArrayPrototypeSplice = uncurryThis(ArrayPrototype.splice);
exports.ArrayPrototypeSplice = ArrayPrototypeSplice;
const ArrayPrototypeSymbolIterator = uncurryMethod(Array.prototype, Symbol.iterator);
exports.ArrayPrototypeSymbolIterator = ArrayPrototypeSymbolIterator;
const ArrayPrototypeSymbolUnscopables = Array.prototype[Symbol.unscopables];
exports.ArrayPrototypeSymbolUnscopables = ArrayPrototypeSymbolUnscopables;
const ArrayPrototypeToLocaleString = uncurryThis(ArrayPrototype.toLocaleString);
exports.ArrayPrototypeToLocaleString = ArrayPrototypeToLocaleString;
const ArrayPrototypeToString = uncurryThis(ArrayPrototype.toString);
exports.ArrayPrototypeToString = ArrayPrototypeToString;
const ArrayPrototypeUnshift = uncurryThis(ArrayPrototype.unshift);
exports.ArrayPrototypeUnshift = ArrayPrototypeUnshift;
const ArrayPrototypeUnshiftApply = applyBind(ArrayPrototype.unshift);
exports.ArrayPrototypeUnshiftApply = ArrayPrototypeUnshiftApply;
const ArrayPrototypeValues = uncurryThis(ArrayPrototype.values);
exports.ArrayPrototypeValues = ArrayPrototypeValues;
const ArrayGetSymbolSpecies = uncurryGetter(Array, Symbol.species);
exports.ArrayGetSymbolSpecies = ArrayGetSymbolSpecies;
const ArrayIterator = {
    prototype: Reflect.getPrototypeOf(ArrayPrototype[Symbol.iterator]()),
};
exports.ArrayIterator = ArrayIterator;
const ArrayIteratorPrototype = ArrayIterator.prototype;
exports.ArrayIteratorPrototype = ArrayIteratorPrototype;
const ArrayIteratorPrototypeNext = uncurryThis(ArrayIteratorPrototype.next);
exports.ArrayIteratorPrototypeNext = ArrayIteratorPrototypeNext;
const ArrayIteratorPrototypeSymbolToStringTag = ArrayIteratorPrototype[Symbol.toStringTag];
exports.ArrayIteratorPrototypeSymbolToStringTag = ArrayIteratorPrototypeSymbolToStringTag;
const ArrayBufferGetSymbolSpecies = uncurryGetter(ArrayBuffer, Symbol.species);
exports.ArrayBufferGetSymbolSpecies = ArrayBufferGetSymbolSpecies;
const ArrayBufferIsView = uncurryThis(ArrayBuffer.isView);
exports.ArrayBufferIsView = ArrayBufferIsView;
const ArrayBufferName = ArrayBuffer.name;
exports.ArrayBufferName = ArrayBufferName;
const ArrayBufferLength = ArrayBuffer.length;
exports.ArrayBufferLength = ArrayBufferLength;
const ArrayBufferPrototype = ArrayBuffer.prototype;
exports.ArrayBufferPrototype = ArrayBufferPrototype;
const ArrayBufferPrototypeGetByteLength = uncurryGetter(ArrayBuffer.prototype, 'byteLength');
exports.ArrayBufferPrototypeGetByteLength = ArrayBufferPrototypeGetByteLength;
const ArrayBufferPrototypeSlice = uncurryThis(ArrayBufferPrototype.slice);
exports.ArrayBufferPrototypeSlice = ArrayBufferPrototypeSlice;
const ArrayBufferPrototypeSymbolToStringTag = ArrayBufferPrototype[Symbol.toStringTag];
exports.ArrayBufferPrototypeSymbolToStringTag = ArrayBufferPrototypeSymbolToStringTag;
const AsyncIteratorPrototype = Reflect.getPrototypeOf(Reflect.getPrototypeOf(async function* () { }).prototype);
exports.AsyncIteratorPrototype = AsyncIteratorPrototype;
const BigIntAsIntN = uncurryThis(BigInt.asIntN);
exports.BigIntAsIntN = BigIntAsIntN;
const BigIntAsUintN = uncurryThis(BigInt.asUintN);
exports.BigIntAsUintN = BigIntAsUintN;
const BigIntLength = BigInt.length;
exports.BigIntLength = BigIntLength;
const BigIntName = BigInt.name;
exports.BigIntName = BigIntName;
const BigIntPrototype = BigInt.prototype;
exports.BigIntPrototype = BigIntPrototype;
const BigIntPrototypeToLocaleString = uncurryThis(BigInt.prototype.toLocaleString);
exports.BigIntPrototypeToLocaleString = BigIntPrototypeToLocaleString;
const BigIntPrototypeToString = uncurryThis(BigInt.prototype.toString);
exports.BigIntPrototypeToString = BigIntPrototypeToString;
const BigIntPrototypeValueOf = uncurryThis(BigInt.prototype.valueOf);
exports.BigIntPrototypeValueOf = BigIntPrototypeValueOf;
const BigIntPrototypeSymbolToStringTag = BigInt.prototype[Symbol.toStringTag];
exports.BigIntPrototypeSymbolToStringTag = BigIntPrototypeSymbolToStringTag;
const BigInt64ArrayBYTES_PER_ELEMENT = BigInt64Array.BYTES_PER_ELEMENT;
exports.BigInt64ArrayBYTES_PER_ELEMENT = BigInt64ArrayBYTES_PER_ELEMENT;
const BigInt64ArrayLength = BigInt64Array.length;
exports.BigInt64ArrayLength = BigInt64ArrayLength;
const BigInt64ArrayName = BigInt64Array.name;
exports.BigInt64ArrayName = BigInt64ArrayName;
const BigInt64ArrayPrototype = BigInt64Array.prototype;
exports.BigInt64ArrayPrototype = BigInt64ArrayPrototype;
const BigInt64ArrayPrototypeBYTES_PER_ELEMENT = BigInt64Array.prototype.BYTES_PER_ELEMENT;
exports.BigInt64ArrayPrototypeBYTES_PER_ELEMENT = BigInt64ArrayPrototypeBYTES_PER_ELEMENT;
const BigUint64ArrayBYTES_PER_ELEMENT = BigUint64Array.BYTES_PER_ELEMENT;
exports.BigUint64ArrayBYTES_PER_ELEMENT = BigUint64ArrayBYTES_PER_ELEMENT;
const BigUint64ArrayLength = BigUint64Array.length;
exports.BigUint64ArrayLength = BigUint64ArrayLength;
const BigUint64ArrayName = BigUint64Array.name;
exports.BigUint64ArrayName = BigUint64ArrayName;
const BigUint64ArrayPrototype = BigUint64Array.prototype;
exports.BigUint64ArrayPrototype = BigUint64ArrayPrototype;
const BigUint64ArrayPrototypeBYTES_PER_ELEMENT = BigUint64ArrayPrototype.BYTES_PER_ELEMENT;
exports.BigUint64ArrayPrototypeBYTES_PER_ELEMENT = BigUint64ArrayPrototypeBYTES_PER_ELEMENT;
const BooleanLength = Boolean.length;
exports.BooleanLength = BooleanLength;
const BooleanName = Boolean.name;
exports.BooleanName = BooleanName;
const BooleanPrototype = Boolean.prototype;
exports.BooleanPrototype = BooleanPrototype;
const BooleanPrototypeToString = uncurryThis(Boolean.prototype.toString);
exports.BooleanPrototypeToString = BooleanPrototypeToString;
const BooleanPrototypeValueOf = uncurryThis(Boolean.prototype.valueOf);
exports.BooleanPrototypeValueOf = BooleanPrototypeValueOf;
const DataViewLength = DataView.length;
exports.DataViewLength = DataViewLength;
const DataViewName = DataView.name;
exports.DataViewName = DataViewName;
const DataViewPrototype = DataView.prototype;
exports.DataViewPrototype = DataViewPrototype;
const DataViewPrototypeGetBigInt64 = uncurryThis(DataView.prototype.getBigInt64);
exports.DataViewPrototypeGetBigInt64 = DataViewPrototypeGetBigInt64;
const DataViewPrototypeGetBuffer = uncurryGetter(DataView.prototype, 'buffer');
exports.DataViewPrototypeGetBuffer = DataViewPrototypeGetBuffer;
const DataViewPrototypeGetByteLength = uncurryGetter(DataView.prototype, 'byteLength');
exports.DataViewPrototypeGetByteLength = DataViewPrototypeGetByteLength;
const DataViewPrototypeGetByteOffset = uncurryGetter(DataView.prototype, 'byteOffset');
exports.DataViewPrototypeGetByteOffset = DataViewPrototypeGetByteOffset;
const DataViewPrototypeGetFloat32 = uncurryThis(DataView.prototype.getFloat32);
exports.DataViewPrototypeGetFloat32 = DataViewPrototypeGetFloat32;
const DataViewPrototypeGetFloat64 = uncurryThis(DataView.prototype.getFloat64);
exports.DataViewPrototypeGetFloat64 = DataViewPrototypeGetFloat64;
const DataViewPrototypeGetInt16 = uncurryThis(DataView.prototype.getInt16);
exports.DataViewPrototypeGetInt16 = DataViewPrototypeGetInt16;
const DataViewPrototypeGetInt32 = uncurryThis(DataView.prototype.getInt32);
exports.DataViewPrototypeGetInt32 = DataViewPrototypeGetInt32;
const DataViewPrototypeGetInt8 = uncurryThis(DataView.prototype.getInt8);
exports.DataViewPrototypeGetInt8 = DataViewPrototypeGetInt8;
const DataViewPrototypeGetUint16 = uncurryThis(DataView.prototype.getUint16);
exports.DataViewPrototypeGetUint16 = DataViewPrototypeGetUint16;
const DataViewPrototypeGetUint32 = uncurryThis(DataView.prototype.getUint32);
exports.DataViewPrototypeGetUint32 = DataViewPrototypeGetUint32;
const DataViewPrototypeGetUint8 = uncurryThis(DataView.prototype.getUint8);
exports.DataViewPrototypeGetUint8 = DataViewPrototypeGetUint8;
const DataViewPrototypeSetBigInt64 = uncurryThis(DataView.prototype.setBigInt64);
exports.DataViewPrototypeSetBigInt64 = DataViewPrototypeSetBigInt64;
const DataViewPrototypeSetBigUint64 = uncurryThis(DataView.prototype.setBigUint64);
exports.DataViewPrototypeSetBigUint64 = DataViewPrototypeSetBigUint64;
const DataViewPrototypeSetFloat32 = uncurryThis(DataView.prototype.setFloat32);
exports.DataViewPrototypeSetFloat32 = DataViewPrototypeSetFloat32;
const DataViewPrototypeSetFloat64 = uncurryThis(DataView.prototype.setFloat64);
exports.DataViewPrototypeSetFloat64 = DataViewPrototypeSetFloat64;
const DataViewPrototypeSetInt16 = uncurryThis(DataView.prototype.setInt16);
exports.DataViewPrototypeSetInt16 = DataViewPrototypeSetInt16;
const DataViewPrototypeSetInt32 = uncurryThis(DataView.prototype.setInt32);
exports.DataViewPrototypeSetInt32 = DataViewPrototypeSetInt32;
const DataViewPrototypeSetInt8 = uncurryThis(DataView.prototype.setInt8);
exports.DataViewPrototypeSetInt8 = DataViewPrototypeSetInt8;
const DataViewPrototypeSetUint16 = uncurryThis(DataView.prototype.setUint16);
exports.DataViewPrototypeSetUint16 = DataViewPrototypeSetUint16;
const DataViewPrototypeSetUint32 = uncurryThis(DataView.prototype.setUint32);
exports.DataViewPrototypeSetUint32 = DataViewPrototypeSetUint32;
const DataViewPrototypeSetUint8 = uncurryThis(DataView.prototype.setUint8);
exports.DataViewPrototypeSetUint8 = DataViewPrototypeSetUint8;
const DataViewPrototypeGetBigUint64 = uncurryThis(DataView.prototype.getBigUint64);
exports.DataViewPrototypeGetBigUint64 = DataViewPrototypeGetBigUint64;
const DataViewPrototypeSymbolToStringTag = DataView.prototype[Symbol.toStringTag];
exports.DataViewPrototypeSymbolToStringTag = DataViewPrototypeSymbolToStringTag;
const DateLength = Date.length;
exports.DateLength = DateLength;
const DateName = Date.name;
exports.DateName = DateName;
const DateNow = staticCall(Date.now);
exports.DateNow = DateNow;
const DateParse = staticCall(Date.parse);
exports.DateParse = DateParse;
const DatePrototype = Date.prototype;
exports.DatePrototype = DatePrototype;
const DatePrototypeGetDate = uncurryThis(Date.prototype.getDate);
exports.DatePrototypeGetDate = DatePrototypeGetDate;
const DatePrototypeGetDay = uncurryThis(Date.prototype.getDay);
exports.DatePrototypeGetDay = DatePrototypeGetDay;
const DatePrototypeGetFullYear = uncurryThis(Date.prototype.getFullYear);
exports.DatePrototypeGetFullYear = DatePrototypeGetFullYear;
const DatePrototypeGetHours = uncurryThis(Date.prototype.getHours);
exports.DatePrototypeGetHours = DatePrototypeGetHours;
const DatePrototypeGetMilliseconds = uncurryThis(Date.prototype.getMilliseconds);
exports.DatePrototypeGetMilliseconds = DatePrototypeGetMilliseconds;
const DatePrototypeGetMinutes = uncurryThis(Date.prototype.getMinutes);
exports.DatePrototypeGetMinutes = DatePrototypeGetMinutes;
const DatePrototypeGetMonth = uncurryThis(Date.prototype.getMonth);
exports.DatePrototypeGetMonth = DatePrototypeGetMonth;
const DatePrototypeGetSeconds = uncurryThis(Date.prototype.getSeconds);
exports.DatePrototypeGetSeconds = DatePrototypeGetSeconds;
const DatePrototypeGetTime = uncurryThis(Date.prototype.getTime);
exports.DatePrototypeGetTime = DatePrototypeGetTime;
const DatePrototypeGetTimezoneOffset = uncurryThis(Date.prototype.getTimezoneOffset);
exports.DatePrototypeGetTimezoneOffset = DatePrototypeGetTimezoneOffset;
const DatePrototypeGetUTCDate = uncurryThis(Date.prototype.getUTCDate);
exports.DatePrototypeGetUTCDate = DatePrototypeGetUTCDate;
const DatePrototypeGetUTCDay = uncurryThis(Date.prototype.getUTCDay);
exports.DatePrototypeGetUTCDay = DatePrototypeGetUTCDay;
const DatePrototypeGetUTCFullYear = uncurryThis(Date.prototype.getUTCFullYear);
exports.DatePrototypeGetUTCFullYear = DatePrototypeGetUTCFullYear;
const DatePrototypeGetUTCHours = uncurryThis(Date.prototype.getUTCHours);
exports.DatePrototypeGetUTCHours = DatePrototypeGetUTCHours;
const DatePrototypeGetUTCMilliseconds = uncurryThis(Date.prototype.getUTCMilliseconds);
exports.DatePrototypeGetUTCMilliseconds = DatePrototypeGetUTCMilliseconds;
const DatePrototypeGetUTCMinutes = uncurryThis(Date.prototype.getUTCMinutes);
exports.DatePrototypeGetUTCMinutes = DatePrototypeGetUTCMinutes;
const DatePrototypeGetUTCMonth = uncurryThis(Date.prototype.getUTCMonth);
exports.DatePrototypeGetUTCMonth = DatePrototypeGetUTCMonth;
const DatePrototypeGetUTCSeconds = uncurryThis(Date.prototype.getUTCSeconds);
exports.DatePrototypeGetUTCSeconds = DatePrototypeGetUTCSeconds;
const DatePrototypeGetYear = uncurryThis(Date.prototype.getYear);
exports.DatePrototypeGetYear = DatePrototypeGetYear;
const DatePrototypeSetDate = uncurryThis(Date.prototype.setDate);
exports.DatePrototypeSetDate = DatePrototypeSetDate;
const DatePrototypeSetFullYear = uncurryThis(Date.prototype.setFullYear);
exports.DatePrototypeSetFullYear = DatePrototypeSetFullYear;
const DatePrototypeSetHours = uncurryThis(Date.prototype.setHours);
exports.DatePrototypeSetHours = DatePrototypeSetHours;
const DatePrototypeSetMilliseconds = uncurryThis(Date.prototype.setMilliseconds);
exports.DatePrototypeSetMilliseconds = DatePrototypeSetMilliseconds;
const DatePrototypeSetMinutes = uncurryThis(Date.prototype.setMinutes);
exports.DatePrototypeSetMinutes = DatePrototypeSetMinutes;
const DatePrototypeSetMonth = uncurryThis(Date.prototype.setMonth);
exports.DatePrototypeSetMonth = DatePrototypeSetMonth;
const DatePrototypeSetSeconds = uncurryThis(Date.prototype.setSeconds);
exports.DatePrototypeSetSeconds = DatePrototypeSetSeconds;
const DatePrototypeSetTime = uncurryThis(Date.prototype.setTime);
exports.DatePrototypeSetTime = DatePrototypeSetTime;
const DatePrototypeSetUTCDate = uncurryThis(Date.prototype.setUTCDate);
exports.DatePrototypeSetUTCDate = DatePrototypeSetUTCDate;
const DatePrototypeSetUTCFullYear = uncurryThis(Date.prototype.setUTCFullYear);
exports.DatePrototypeSetUTCFullYear = DatePrototypeSetUTCFullYear;
const DatePrototypeSetUTCHours = uncurryThis(Date.prototype.setUTCHours);
exports.DatePrototypeSetUTCHours = DatePrototypeSetUTCHours;
const DatePrototypeSetUTCMilliseconds = uncurryThis(Date.prototype.setUTCMilliseconds);
exports.DatePrototypeSetUTCMilliseconds = DatePrototypeSetUTCMilliseconds;
const DatePrototypeSetUTCMinutes = uncurryThis(Date.prototype.setUTCMinutes);
exports.DatePrototypeSetUTCMinutes = DatePrototypeSetUTCMinutes;
const DatePrototypeSetUTCMonth = uncurryThis(Date.prototype.setUTCMonth);
exports.DatePrototypeSetUTCMonth = DatePrototypeSetUTCMonth;
const DatePrototypeSetUTCSeconds = uncurryThis(Date.prototype.setUTCSeconds);
exports.DatePrototypeSetUTCSeconds = DatePrototypeSetUTCSeconds;
const DatePrototypeSetYear = uncurryThis(Date.prototype.setYear);
exports.DatePrototypeSetYear = DatePrototypeSetYear;
const DatePrototypeSymbolToPrimitive = uncurryThis(Date.prototype[Symbol.toPrimitive]);
exports.DatePrototypeSymbolToPrimitive = DatePrototypeSymbolToPrimitive;
const DatePrototypeToDateString = uncurryThis(Date.prototype.toDateString);
exports.DatePrototypeToDateString = DatePrototypeToDateString;
const DatePrototypeToGMTString = uncurryThis(Date.prototype.toGMTString);
exports.DatePrototypeToGMTString = DatePrototypeToGMTString;
const DatePrototypeToISOString = uncurryThis(Date.prototype.toISOString);
exports.DatePrototypeToISOString = DatePrototypeToISOString;
const DatePrototypeToJSON = uncurryThis(Date.prototype.toJSON);
exports.DatePrototypeToJSON = DatePrototypeToJSON;
const DatePrototypeToLocaleDateString = uncurryThis(Date.prototype.toLocaleDateString);
exports.DatePrototypeToLocaleDateString = DatePrototypeToLocaleDateString;
const DatePrototypeToLocaleString = uncurryThis(Date.prototype.toLocaleString);
exports.DatePrototypeToLocaleString = DatePrototypeToLocaleString;
const DatePrototypeToLocaleTimeString = uncurryThis(Date.prototype.toLocaleTimeString);
exports.DatePrototypeToLocaleTimeString = DatePrototypeToLocaleTimeString;
const DatePrototypeToString = uncurryThis(Date.prototype.toString);
exports.DatePrototypeToString = DatePrototypeToString;
const DatePrototypeToTimeString = uncurryThis(Date.prototype.toTimeString);
exports.DatePrototypeToTimeString = DatePrototypeToTimeString;
const DatePrototypeToUTCString = uncurryThis(Date.prototype.toUTCString);
exports.DatePrototypeToUTCString = DatePrototypeToUTCString;
const DatePrototypeValueOf = uncurryThis(Date.prototype.valueOf);
exports.DatePrototypeValueOf = DatePrototypeValueOf;
const DateUTC = staticCall(Date.UTC);
exports.DateUTC = DateUTC;
const ErrorCaptureStackTrace = staticCall(Error.captureStackTrace);
exports.ErrorCaptureStackTrace = ErrorCaptureStackTrace;
const ErrorLength = Error.length;
exports.ErrorLength = ErrorLength;
const ErrorName = Error.name;
exports.ErrorName = ErrorName;
const ErrorPrototype = Error.prototype;
exports.ErrorPrototype = ErrorPrototype;
const ErrorPrototypeMessage = Error.prototype.message;
exports.ErrorPrototypeMessage = ErrorPrototypeMessage;
const ErrorPrototypeName = Error.prototype.name;
exports.ErrorPrototypeName = ErrorPrototypeName;
const ErrorPrototypeToString = uncurryThis(Error.prototype.toString);
exports.ErrorPrototypeToString = ErrorPrototypeToString;
const EvalErrorLength = EvalError.length;
exports.EvalErrorLength = EvalErrorLength;
const EvalErrorName = EvalError.name;
exports.EvalErrorName = EvalErrorName;
const EvalErrorPrototype = EvalError.prototype;
exports.EvalErrorPrototype = EvalErrorPrototype;
const EvalErrorPrototypeMessage = EvalError.prototype.message;
exports.EvalErrorPrototypeMessage = EvalErrorPrototypeMessage;
const EvalErrorPrototypeName = EvalError.prototype.name;
exports.EvalErrorPrototypeName = EvalErrorPrototypeName;
const FinalizationRegistryLength = FinalizationRegistry.length;
exports.FinalizationRegistryLength = FinalizationRegistryLength;
const FinalizationRegistryName = FinalizationRegistry.name;
exports.FinalizationRegistryName = FinalizationRegistryName;
const FinalizationRegistryPrototype = FinalizationRegistry.prototype;
exports.FinalizationRegistryPrototype = FinalizationRegistryPrototype;
const FinalizationRegistryPrototypeRegister = uncurryThis(FinalizationRegistry.prototype.register);
exports.FinalizationRegistryPrototypeRegister = FinalizationRegistryPrototypeRegister;
const FinalizationRegistryPrototypeSymbolToStringTag = FinalizationRegistry.prototype[Symbol.toStringTag];
exports.FinalizationRegistryPrototypeSymbolToStringTag = FinalizationRegistryPrototypeSymbolToStringTag;
const FinalizationRegistryPrototypeUnregister = uncurryThis(FinalizationRegistry.prototype.unregister);
exports.FinalizationRegistryPrototypeUnregister = FinalizationRegistryPrototypeUnregister;
const Float32ArrayBYTES_PER_ELEMENT = Float32Array.BYTES_PER_ELEMENT;
exports.Float32ArrayBYTES_PER_ELEMENT = Float32ArrayBYTES_PER_ELEMENT;
const Float32ArrayLength = Float32Array.length;
exports.Float32ArrayLength = Float32ArrayLength;
const Float32ArrayName = Float32Array.name;
exports.Float32ArrayName = Float32ArrayName;
const Float32ArrayPrototype = Float32Array.prototype;
exports.Float32ArrayPrototype = Float32ArrayPrototype;
const Float32ArrayPrototypeBYTES_PER_ELEMENT = Float32Array.prototype.BYTES_PER_ELEMENT;
exports.Float32ArrayPrototypeBYTES_PER_ELEMENT = Float32ArrayPrototypeBYTES_PER_ELEMENT;
const Float64ArrayBYTES_PER_ELEMENT = Float64Array.BYTES_PER_ELEMENT;
exports.Float64ArrayBYTES_PER_ELEMENT = Float64ArrayBYTES_PER_ELEMENT;
const Float64ArrayLength = Float64Array.length;
exports.Float64ArrayLength = Float64ArrayLength;
const Float64ArrayName = Float64Array.name;
exports.Float64ArrayName = Float64ArrayName;
const Float64ArrayPrototype = Float64Array.prototype;
exports.Float64ArrayPrototype = Float64ArrayPrototype;
const Float64ArrayPrototypeBYTES_PER_ELEMENT = Float64Array.prototype.BYTES_PER_ELEMENT;
exports.Float64ArrayPrototypeBYTES_PER_ELEMENT = Float64ArrayPrototypeBYTES_PER_ELEMENT;
const FunctionLength = Function.length;
exports.FunctionLength = FunctionLength;
const FunctionName = Function.name;
exports.FunctionName = FunctionName;
const FunctionPrototypeApply = uncurryThis(apply);
exports.FunctionPrototypeApply = FunctionPrototypeApply;
const FunctionPrototypeBind = uncurryThis(bind);
exports.FunctionPrototypeBind = FunctionPrototypeBind;
const FunctionPrototypeToString = uncurryThis(Function.prototype.toString);
exports.FunctionPrototypeToString = FunctionPrototypeToString;
const FunctionPrototypeGetArguments = uncurryGetter(Function.prototype, 'arguments');
exports.FunctionPrototypeGetArguments = FunctionPrototypeGetArguments;
const FunctionPrototypeGetCaller = uncurryGetter(Function.prototype, 'caller');
exports.FunctionPrototypeGetCaller = FunctionPrototypeGetCaller;
const FunctionPrototypeLength = Function.prototype.length;
exports.FunctionPrototypeLength = FunctionPrototypeLength;
const FunctionPrototypeName = Function.prototype.name;
exports.FunctionPrototypeName = FunctionPrototypeName;
const FunctionPrototypeSetArguments = uncurrySetter(Function.prototype, 'arguments');
exports.FunctionPrototypeSetArguments = FunctionPrototypeSetArguments;
const FunctionPrototypeSetCaller = uncurrySetter(Function.prototype, 'caller');
exports.FunctionPrototypeSetCaller = FunctionPrototypeSetCaller;
const FunctionPrototypeSymbolHasInstance = uncurryThis(Function.prototype[Symbol.hasInstance]);
exports.FunctionPrototypeSymbolHasInstance = FunctionPrototypeSymbolHasInstance;
const Int16ArrayBYTES_PER_ELEMENT = Int16Array.BYTES_PER_ELEMENT;
exports.Int16ArrayBYTES_PER_ELEMENT = Int16ArrayBYTES_PER_ELEMENT;
const Int16ArrayLength = Int16Array.length;
exports.Int16ArrayLength = Int16ArrayLength;
const Int16ArrayName = Int16Array.name;
exports.Int16ArrayName = Int16ArrayName;
const Int16ArrayPrototype = Int16Array.prototype;
exports.Int16ArrayPrototype = Int16ArrayPrototype;
const Int16ArrayPrototypeBYTES_PER_ELEMENT = Int16Array.prototype.BYTES_PER_ELEMENT;
exports.Int16ArrayPrototypeBYTES_PER_ELEMENT = Int16ArrayPrototypeBYTES_PER_ELEMENT;
const Int32ArrayBYTES_PER_ELEMENT = Int32Array.BYTES_PER_ELEMENT;
exports.Int32ArrayBYTES_PER_ELEMENT = Int32ArrayBYTES_PER_ELEMENT;
const Int32ArrayLength = Int32Array.length;
exports.Int32ArrayLength = Int32ArrayLength;
const Int32ArrayName = Int32Array.name;
exports.Int32ArrayName = Int32ArrayName;
const Int32ArrayPrototype = Int32Array.prototype;
exports.Int32ArrayPrototype = Int32ArrayPrototype;
const Int32ArrayPrototypeBYTES_PER_ELEMENT = Int32Array.prototype.BYTES_PER_ELEMENT;
exports.Int32ArrayPrototypeBYTES_PER_ELEMENT = Int32ArrayPrototypeBYTES_PER_ELEMENT;
const Int8ArrayLength = Int8Array.length;
exports.Int8ArrayLength = Int8ArrayLength;
const Int8ArrayName = Int8Array.name;
exports.Int8ArrayName = Int8ArrayName;
const Int8ArrayPrototype = Int8Array.prototype;
exports.Int8ArrayPrototype = Int8ArrayPrototype;
const Int8ArrayBYTES_PER_ELEMENT = Int8Array.BYTES_PER_ELEMENT;
exports.Int8ArrayBYTES_PER_ELEMENT = Int8ArrayBYTES_PER_ELEMENT;
const Int8ArrayPrototypeBYTES_PER_ELEMENT = Int8Array.prototype.BYTES_PER_ELEMENT;
exports.Int8ArrayPrototypeBYTES_PER_ELEMENT = Int8ArrayPrototypeBYTES_PER_ELEMENT;
const JSON = JSON_;
exports.JSON = JSON;
const JSONParse = staticCall(JSON.parse);
exports.JSONParse = JSONParse;
const JSONStringify = staticCall(JSON.stringify);
exports.JSONStringify = JSONStringify;
const JSONSymbolToStringTag = 'JSON';
exports.JSONSymbolToStringTag = JSONSymbolToStringTag;
const MapLength = Map.length;
exports.MapLength = MapLength;
const MapGetSymbolSpecies = uncurryGetter(Map, Symbol.species);
exports.MapGetSymbolSpecies = MapGetSymbolSpecies;
const MapName = Map.name;
exports.MapName = MapName;
const MapPrototype = Map.prototype;
exports.MapPrototype = MapPrototype;
const MapPrototypeGet = uncurryThis(Map.prototype.get);
exports.MapPrototypeGet = MapPrototypeGet;
const MapPrototypeSet = uncurryThis(Map.prototype.set);
exports.MapPrototypeSet = MapPrototypeSet;
const MapPrototypeSymbolIterator = uncurryMethod(Map.prototype, Symbol.iterator);
exports.MapPrototypeSymbolIterator = MapPrototypeSymbolIterator;
const MapPrototypeSymbolToStringTag = Map.prototype[Symbol.toStringTag];
exports.MapPrototypeSymbolToStringTag = MapPrototypeSymbolToStringTag;
const MapPrototypeHas = uncurryThis(Map.prototype.has);
exports.MapPrototypeHas = MapPrototypeHas;
const MapPrototypeDelete = uncurryThis(Map.prototype.delete);
exports.MapPrototypeDelete = MapPrototypeDelete;
const MapPrototypeClear = uncurryThis(Map.prototype.clear);
exports.MapPrototypeClear = MapPrototypeClear;
const MapPrototypeEntries = uncurryThis(Map.prototype.entries);
exports.MapPrototypeEntries = MapPrototypeEntries;
const MapPrototypeForEach = uncurryThis(Map.prototype.forEach);
exports.MapPrototypeForEach = MapPrototypeForEach;
const MapPrototypeKeys = uncurryThis(Map.prototype.keys);
exports.MapPrototypeKeys = MapPrototypeKeys;
const MapPrototypeValues = uncurryThis(Map.prototype.values);
exports.MapPrototypeValues = MapPrototypeValues;
const MapPrototypeGetSize = uncurryGetter(Map.prototype, 'size');
exports.MapPrototypeGetSize = MapPrototypeGetSize;
const Math = Math_;
exports.Math = Math;
const MathAbs = Math.abs;
exports.MathAbs = MathAbs;
const MathAcos = Math.acos;
exports.MathAcos = MathAcos;
const MathAcosh = Math.acosh;
exports.MathAcosh = MathAcosh;
const MathAsin = Math.asin;
exports.MathAsin = MathAsin;
const MathAsinh = Math.asinh;
exports.MathAsinh = MathAsinh;
const MathAtan2 = Math.atan2;
exports.MathAtan2 = MathAtan2;
const MathAtan = Math.atan;
exports.MathAtan = MathAtan;
const MathAtanh = Math.atanh;
exports.MathAtanh = MathAtanh;
const MathCbrt = Math.cbrt;
exports.MathCbrt = MathCbrt;
const MathCeil = Math.ceil;
exports.MathCeil = MathCeil;
const MathClz32 = Math.clz32;
exports.MathClz32 = MathClz32;
const MathCos = Math.cos;
exports.MathCos = MathCos;
const MathCosh = Math.cosh;
exports.MathCosh = MathCosh;
const MathE = Math.E;
exports.MathE = MathE;
const MathExp = Math.exp;
exports.MathExp = MathExp;
const MathExpm1 = Math.expm1;
exports.MathExpm1 = MathExpm1;
const MathFloor = Math.floor;
exports.MathFloor = MathFloor;
const MathFround = Math.fround;
exports.MathFround = MathFround;
const MathHypot = Math.hypot;
exports.MathHypot = MathHypot;
const MathHypotApply = staticApply(Math.hypot);
exports.MathHypotApply = MathHypotApply;
const MathImul = Math.imul;
exports.MathImul = MathImul;
const MathLN10 = Math.LN10;
exports.MathLN10 = MathLN10;
const MathLN2 = Math.LN2;
exports.MathLN2 = MathLN2;
const MathLOG10E = Math.LOG10E;
exports.MathLOG10E = MathLOG10E;
const MathLOG2E = Math.LOG2E;
exports.MathLOG2E = MathLOG2E;
const MathLog10 = Math.log10;
exports.MathLog10 = MathLog10;
const MathLog1p = Math.log1p;
exports.MathLog1p = MathLog1p;
const MathLog2 = Math.log2;
exports.MathLog2 = MathLog2;
const MathLog = Math.log;
exports.MathLog = MathLog;
const MathMax = Math.max;
exports.MathMax = MathMax;
const MathMaxApply = staticApply(Math.max);
exports.MathMaxApply = MathMaxApply;
const MathMin = Math.min;
exports.MathMin = MathMin;
const MathMinApply = staticApply(Math.min);
exports.MathMinApply = MathMinApply;
const MathPI = Math.PI;
exports.MathPI = MathPI;
const MathPow = Math.pow;
exports.MathPow = MathPow;
const MathRandom = Math.random;
exports.MathRandom = MathRandom;
const MathRound = Math.round;
exports.MathRound = MathRound;
const MathSQRT1_2 = Math.SQRT1_2;
exports.MathSQRT1_2 = MathSQRT1_2;
const MathSQRT2 = Math.SQRT2;
exports.MathSQRT2 = MathSQRT2;
const MathSign = Math.sign;
exports.MathSign = MathSign;
const MathSin = Math.sin;
exports.MathSin = MathSin;
const MathSinh = Math.sinh;
exports.MathSinh = MathSinh;
const MathSqrt = Math.sqrt;
exports.MathSqrt = MathSqrt;
const MathSymbolToStringTag = Math[Symbol.toStringTag];
exports.MathSymbolToStringTag = MathSymbolToStringTag;
const MathTan = Math.tan;
exports.MathTan = MathTan;
const MathTanh = Math.tanh;
exports.MathTanh = MathTanh;
const MathTrunc = Math.trunc;
exports.MathTrunc = MathTrunc;
const NumberEPSILON = Number.EPSILON;
exports.NumberEPSILON = NumberEPSILON;
const NumberIsFinite = staticCall(Number.isFinite);
exports.NumberIsFinite = NumberIsFinite;
const NumberIsInteger = staticCall(Number.isInteger);
exports.NumberIsInteger = NumberIsInteger;
const NumberIsNaN = staticCall(Number.isNaN);
exports.NumberIsNaN = NumberIsNaN;
const NumberIsSafeInteger = staticCall(Number.isSafeInteger);
exports.NumberIsSafeInteger = NumberIsSafeInteger;
const NumberLength = Number.length;
exports.NumberLength = NumberLength;
const NumberMAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
exports.NumberMAX_SAFE_INTEGER = NumberMAX_SAFE_INTEGER;
const NumberMAX_VALUE = Number.MAX_VALUE;
exports.NumberMAX_VALUE = NumberMAX_VALUE;
const NumberMIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
exports.NumberMIN_SAFE_INTEGER = NumberMIN_SAFE_INTEGER;
const NumberMIN_VALUE = Number.MIN_VALUE;
exports.NumberMIN_VALUE = NumberMIN_VALUE;
const NumberNEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
exports.NumberNEGATIVE_INFINITY = NumberNEGATIVE_INFINITY;
const NumberNaN = Number.NaN;
exports.NumberNaN = NumberNaN;
const NumberName = Number.name;
exports.NumberName = NumberName;
const NumberPOSITIVE_INFINITY = Number.POSITIVE_INFINITY;
exports.NumberPOSITIVE_INFINITY = NumberPOSITIVE_INFINITY;
const NumberParseFloat = staticCall(Number.parseFloat);
exports.NumberParseFloat = NumberParseFloat;
const NumberParseInt = staticCall(Number.parseInt);
exports.NumberParseInt = NumberParseInt;
const NumberPrototype = Number.prototype;
exports.NumberPrototype = NumberPrototype;
const NumberPrototypeToExponential = uncurryThis(Number.prototype.toExponential);
exports.NumberPrototypeToExponential = NumberPrototypeToExponential;
const NumberPrototypeToFixed = uncurryThis(Number.prototype.toFixed);
exports.NumberPrototypeToFixed = NumberPrototypeToFixed;
const NumberPrototypeToLocaleString = uncurryThis(Number.prototype.toLocaleString);
exports.NumberPrototypeToLocaleString = NumberPrototypeToLocaleString;
const NumberPrototypeToPrecision = uncurryThis(Number.prototype.toPrecision);
exports.NumberPrototypeToPrecision = NumberPrototypeToPrecision;
const NumberPrototypeToString = uncurryThis(Number.prototype.toString);
exports.NumberPrototypeToString = NumberPrototypeToString;
const NumberPrototypeValueOf = uncurryThis(Number.prototype.valueOf);
exports.NumberPrototypeValueOf = NumberPrototypeValueOf;
const ObjectLength = OBJECT.length;
exports.ObjectLength = ObjectLength;
const ObjectName = OBJECT.name;
exports.ObjectName = ObjectName;
const ObjectPrototype = OBJECT.prototype;
exports.ObjectPrototype = ObjectPrototype;
const ObjectAssign = staticCall(OBJECT.assign);
exports.ObjectAssign = ObjectAssign;
const ObjectGetOwnPropertyDescriptor = staticCall(OBJECT.getOwnPropertyDescriptor);
exports.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
const ObjectGetOwnPropertyDescriptors = staticCall(OBJECT.getOwnPropertyDescriptors);
exports.ObjectGetOwnPropertyDescriptors = ObjectGetOwnPropertyDescriptors;
const ObjectGetOwnPropertyNames = staticCall(OBJECT.getOwnPropertyNames);
exports.ObjectGetOwnPropertyNames = ObjectGetOwnPropertyNames;
const ObjectGetOwnPropertySymbols = staticCall(OBJECT.getOwnPropertySymbols);
exports.ObjectGetOwnPropertySymbols = ObjectGetOwnPropertySymbols;
const ObjectIs = staticCall(OBJECT.is);
exports.ObjectIs = ObjectIs;
const ObjectPreventExtensions = staticCall(OBJECT.preventExtensions);
exports.ObjectPreventExtensions = ObjectPreventExtensions;
const ObjectPrototypeGet__proto__ = uncurryGetter(Object.prototype, '__proto__');
exports.ObjectPrototypeGet__proto__ = ObjectPrototypeGet__proto__;
const ObjectSeal = staticCall(OBJECT.seal);
exports.ObjectSeal = ObjectSeal;
// TS defines this as an overload by default, but that ends up making
// both parameters non-optional in the StaticCall type.
const ObjectCreate = staticCall(OBJECT.create);
exports.ObjectCreate = ObjectCreate;
const ObjectDefineProperties = staticCall(OBJECT.defineProperties);
exports.ObjectDefineProperties = ObjectDefineProperties;
const ObjectDefineProperty = staticCall(OBJECT.defineProperty);
exports.ObjectDefineProperty = ObjectDefineProperty;
const ObjectFreeze = staticCall(OBJECT.freeze);
exports.ObjectFreeze = ObjectFreeze;
const ObjectGetPrototypeOf = staticCall(OBJECT.getPrototypeOf);
exports.ObjectGetPrototypeOf = ObjectGetPrototypeOf;
const ObjectSetPrototypeOf = staticCall(OBJECT.setPrototypeOf);
exports.ObjectSetPrototypeOf = ObjectSetPrototypeOf;
const ObjectPrototypeSet__proto__ = uncurrySetter(Object.prototype, '__proto__');
exports.ObjectPrototypeSet__proto__ = ObjectPrototypeSet__proto__;
const ObjectIsExtensible = staticCall(OBJECT.isExtensible);
exports.ObjectIsExtensible = ObjectIsExtensible;
const ObjectIsFrozen = staticCall(OBJECT.isFrozen);
exports.ObjectIsFrozen = ObjectIsFrozen;
const ObjectIsSealed = staticCall(OBJECT.isSealed);
exports.ObjectIsSealed = ObjectIsSealed;
const ObjectKeys = staticCall(OBJECT.keys);
exports.ObjectKeys = ObjectKeys;
const ObjectEntries = staticCall(OBJECT.entries);
exports.ObjectEntries = ObjectEntries;
const ObjectFromEntries = staticCall(OBJECT.fromEntries);
exports.ObjectFromEntries = ObjectFromEntries;
const ObjectValues = staticCall(OBJECT.values);
exports.ObjectValues = ObjectValues;
const ObjectPrototype__defineGetter__ = uncurryThis(
//@ts-ignore
OBJECT.prototype.__defineGetter__);
exports.ObjectPrototype__defineGetter__ = ObjectPrototype__defineGetter__;
const ObjectPrototype__defineSetter__ = uncurryThis(
//@ts-ignore
OBJECT.prototype.__defineSetter__);
exports.ObjectPrototype__defineSetter__ = ObjectPrototype__defineSetter__;
const ObjectPrototypeHasOwnProperty = uncurryThis(OBJECT.prototype.hasOwnProperty);
exports.ObjectPrototypeHasOwnProperty = ObjectPrototypeHasOwnProperty;
const ObjectPrototype__lookupGetter__ = uncurryThis(
//@ts-ignore
OBJECT.prototype.__lookupGetter__);
exports.ObjectPrototype__lookupGetter__ = ObjectPrototype__lookupGetter__;
const ObjectPrototype__lookupSetter__ = uncurryThis(
//@ts-ignore
OBJECT.prototype.__lookupSetter__);
exports.ObjectPrototype__lookupSetter__ = ObjectPrototype__lookupSetter__;
const ObjectPrototypeIsPrototypeOf = uncurryThis(OBJECT.prototype.isPrototypeOf);
exports.ObjectPrototypeIsPrototypeOf = ObjectPrototypeIsPrototypeOf;
const ObjectPrototypePropertyIsEnumerable = uncurryThis(OBJECT.prototype.propertyIsEnumerable);
exports.ObjectPrototypePropertyIsEnumerable = ObjectPrototypePropertyIsEnumerable;
const ObjectPrototypeToString = uncurryThis(OBJECT.prototype.toString);
exports.ObjectPrototypeToString = ObjectPrototypeToString;
const ObjectPrototypeValueOf = uncurryThis(OBJECT.prototype.valueOf);
exports.ObjectPrototypeValueOf = ObjectPrototypeValueOf;
const ObjectPrototypeToLocaleString = uncurryThis(OBJECT.prototype.toLocaleString);
exports.ObjectPrototypeToLocaleString = ObjectPrototypeToLocaleString;
const PromiseAll = Promise.all;
exports.PromiseAll = PromiseAll;
const PromiseAllSettled = Promise.allSettled;
exports.PromiseAllSettled = PromiseAllSettled;
const PromiseAny = Promise.any;
exports.PromiseAny = PromiseAny;
const PromiseGetSymbolSpecies = uncurryGetter(Promise, Symbol.species);
exports.PromiseGetSymbolSpecies = PromiseGetSymbolSpecies;
const PromiseLength = Promise.length;
exports.PromiseLength = PromiseLength;
const PromiseName = Promise.name;
exports.PromiseName = PromiseName;
const PromisePrototype = Promise.prototype;
exports.PromisePrototype = PromisePrototype;
const PromisePrototypeCatch = uncurryThis(Promise.prototype.catch);
exports.PromisePrototypeCatch = PromisePrototypeCatch;
const PromisePrototypeFinally = uncurryThis(Promise.prototype.finally);
exports.PromisePrototypeFinally = PromisePrototypeFinally;
const PromisePrototypeSymbolToStringTag = Promise.prototype[Symbol.toStringTag];
exports.PromisePrototypeSymbolToStringTag = PromisePrototypeSymbolToStringTag;
const PromisePrototypeThen = uncurryThis(Promise.prototype.then);
exports.PromisePrototypeThen = PromisePrototypeThen;
const PromiseRace = Promise.race;
exports.PromiseRace = PromiseRace;
const PromiseReject = Promise.reject;
exports.PromiseReject = PromiseReject;
const PromiseResolve = Promise.resolve;
exports.PromiseResolve = PromiseResolve;
const ProxyLength = Proxy.length;
exports.ProxyLength = ProxyLength;
const ProxyName = Proxy.name;
exports.ProxyName = ProxyName;
const ProxyRevocable = staticCall(Proxy.revocable);
exports.ProxyRevocable = ProxyRevocable;
const RangeErrorLength = RangeError.length;
exports.RangeErrorLength = RangeErrorLength;
const RangeErrorName = RangeError.name;
exports.RangeErrorName = RangeErrorName;
const RangeErrorPrototype = RangeError.prototype;
exports.RangeErrorPrototype = RangeErrorPrototype;
const RangeErrorPrototypeMessage = RangeError.prototype.message;
exports.RangeErrorPrototypeMessage = RangeErrorPrototypeMessage;
const RangeErrorPrototypeName = RangeError.prototype.name;
exports.RangeErrorPrototypeName = RangeErrorPrototypeName;
const ReferenceErrorLength = ReferenceError.length;
exports.ReferenceErrorLength = ReferenceErrorLength;
const ReferenceErrorName = ReferenceError.name;
exports.ReferenceErrorName = ReferenceErrorName;
const ReferenceErrorPrototype = ReferenceError.prototype;
exports.ReferenceErrorPrototype = ReferenceErrorPrototype;
const ReferenceErrorPrototypeMessage = ReferenceError.prototype.message;
exports.ReferenceErrorPrototypeMessage = ReferenceErrorPrototypeMessage;
const ReferenceErrorPrototypeName = ReferenceError.prototype.name;
exports.ReferenceErrorPrototypeName = ReferenceErrorPrototypeName;
const ReflectApply = SafeReflect.apply;
exports.ReflectApply = ReflectApply;
const ReflectConstruct = SafeReflect.construct;
exports.ReflectConstruct = ReflectConstruct;
const ReflectDefineProperty = SafeReflect.defineProperty;
exports.ReflectDefineProperty = ReflectDefineProperty;
const ReflectDeleteProperty = SafeReflect.deleteProperty;
exports.ReflectDeleteProperty = ReflectDeleteProperty;
const ReflectGet = SafeReflect.get;
exports.ReflectGet = ReflectGet;
const ReflectGetOwnPropertyDescriptor = SafeReflect.getOwnPropertyDescriptor;
exports.ReflectGetOwnPropertyDescriptor = ReflectGetOwnPropertyDescriptor;
const ReflectGetPrototypeOf = SafeReflect.getPrototypeOf;
exports.ReflectGetPrototypeOf = ReflectGetPrototypeOf;
const ReflectHas = SafeReflect.has;
exports.ReflectHas = ReflectHas;
const ReflectIsExtensible = SafeReflect.isExtensible;
exports.ReflectIsExtensible = ReflectIsExtensible;
const ReflectOwnKeys = SafeReflect.ownKeys;
exports.ReflectOwnKeys = ReflectOwnKeys;
const ReflectPreventExtensions = SafeReflect.preventExtensions;
exports.ReflectPreventExtensions = ReflectPreventExtensions;
const ReflectSet = SafeReflect.set;
exports.ReflectSet = ReflectSet;
const ReflectSetPrototypeOf = SafeReflect.setPrototypeOf;
exports.ReflectSetPrototypeOf = ReflectSetPrototypeOf;
const ReflectSymbolToStringTag = 'Reflect';
exports.ReflectSymbolToStringTag = ReflectSymbolToStringTag;
const RegExpGet$1 = uncurryGetter(RegExp, '$1');
exports.RegExpGet$1 = RegExpGet$1;
const RegExpSet$1 = uncurrySetter(RegExp, '$1');
exports.RegExpSet$1 = RegExpSet$1;
const RegExpGet$2 = uncurryGetter(RegExp, '$2');
exports.RegExpGet$2 = RegExpGet$2;
const RegExpSet$2 = uncurrySetter(RegExp, '$2');
exports.RegExpSet$2 = RegExpSet$2;
const RegExpGet$3 = uncurryGetter(RegExp, '$3');
exports.RegExpGet$3 = RegExpGet$3;
const RegExpSet$3 = uncurrySetter(RegExp, '$3');
exports.RegExpSet$3 = RegExpSet$3;
const RegExpGet$4 = uncurryGetter(RegExp, '$4');
exports.RegExpGet$4 = RegExpGet$4;
const RegExpSet$4 = uncurrySetter(RegExp, '$4');
exports.RegExpSet$4 = RegExpSet$4;
const RegExpGet$5 = uncurryGetter(RegExp, '$5');
exports.RegExpGet$5 = RegExpGet$5;
const RegExpSet$5 = uncurrySetter(RegExp, '$5');
exports.RegExpSet$5 = RegExpSet$5;
const RegExpGet$6 = uncurryGetter(RegExp, '$6');
exports.RegExpGet$6 = RegExpGet$6;
const RegExpSet$6 = uncurrySetter(RegExp, '$6');
exports.RegExpSet$6 = RegExpSet$6;
const RegExpGet$7 = uncurryGetter(RegExp, '$7');
exports.RegExpGet$7 = RegExpGet$7;
const RegExpSet$7 = uncurrySetter(RegExp, '$7');
exports.RegExpSet$7 = RegExpSet$7;
const RegExpGet$8 = uncurryGetter(RegExp, '$8');
exports.RegExpGet$8 = RegExpGet$8;
const RegExpSet$8 = uncurrySetter(RegExp, '$8');
exports.RegExpSet$8 = RegExpSet$8;
const RegExpGet$9 = uncurryGetter(RegExp, '$9');
exports.RegExpGet$9 = RegExpGet$9;
const RegExpSet$9 = uncurrySetter(RegExp, '$9');
exports.RegExpSet$9 = RegExpSet$9;
const RegExpGet$_ = uncurryGetter(RegExp, '$_');
exports.RegExpGet$_ = RegExpGet$_;
const RegExpSet$_ = uncurrySetter(RegExp, '$_');
exports.RegExpSet$_ = RegExpSet$_;
const RegExpGetInput = uncurryGetter(RegExp, 'input');
exports.RegExpGetInput = RegExpGetInput;
const RegExpSetInput = uncurrySetter(RegExp, 'input');
exports.RegExpSetInput = RegExpSetInput;
const RegExpGetLastMatch = uncurryGetter(RegExp, 'lastMatch');
exports.RegExpGetLastMatch = RegExpGetLastMatch;
const RegExpSetLastMatch = uncurrySetter(RegExp, 'lastMatch');
exports.RegExpSetLastMatch = RegExpSetLastMatch;
const RegExpGetLastParen = uncurryGetter(RegExp, 'lastParen');
exports.RegExpGetLastParen = RegExpGetLastParen;
const RegExpSetLastParen = uncurrySetter(RegExp, 'lastParen');
exports.RegExpSetLastParen = RegExpSetLastParen;
const RegExpGetLeftContext = uncurryGetter(RegExp, 'leftContext');
exports.RegExpGetLeftContext = RegExpGetLeftContext;
const RegExpSetLeftContext = uncurrySetter(RegExp, 'leftContext');
exports.RegExpSetLeftContext = RegExpSetLeftContext;
const RegExpGetRightContext = uncurryGetter(RegExp, 'rightContext');
exports.RegExpGetRightContext = RegExpGetRightContext;
const RegExpSetRightContext = uncurrySetter(RegExp, 'rightContext');
exports.RegExpSetRightContext = RegExpSetRightContext;
const RegExpGetDollarAmp = uncurryGetter(RegExp, '$&');
exports.RegExpGetDollarAmp = RegExpGetDollarAmp;
const RegExpSetDollarAmp = uncurrySetter(RegExp, '$&');
exports.RegExpSetDollarAmp = RegExpSetDollarAmp;
const RegExpGetDollarSquo = uncurryGetter(RegExp, "$'");
exports.RegExpGetDollarSquo = RegExpGetDollarSquo;
const RegExpSetDollarSquo = uncurrySetter(RegExp, "$'");
exports.RegExpSetDollarSquo = RegExpSetDollarSquo;
const RegExpGetDollarPlus = uncurryGetter(RegExp, '$+');
exports.RegExpGetDollarPlus = RegExpGetDollarPlus;
const RegExpSetDollarPlus = uncurrySetter(RegExp, '$+');
exports.RegExpSetDollarPlus = RegExpSetDollarPlus;
const RegExpGetDollarTick = uncurryGetter(RegExp, '$`');
exports.RegExpGetDollarTick = RegExpGetDollarTick;
const RegExpSetDollarTick = uncurrySetter(RegExp, '$`');
exports.RegExpSetDollarTick = RegExpSetDollarTick;
const RegExpGetSymbolSpecies = uncurryGetter(RegExp, Symbol.species);
exports.RegExpGetSymbolSpecies = RegExpGetSymbolSpecies;
const RegExpLength = RegExp.length;
exports.RegExpLength = RegExpLength;
const RegExpName = RegExp.name;
exports.RegExpName = RegExpName;
const RegExpPrototype = RegExp.prototype;
exports.RegExpPrototype = RegExpPrototype;
const RegExpPrototypeExec = uncurryThis(RegExp.prototype.exec);
exports.RegExpPrototypeExec = RegExpPrototypeExec;
const RegExpPrototypeCompile = uncurryThis(RegExp.prototype.compile);
exports.RegExpPrototypeCompile = RegExpPrototypeCompile;
const RegExpPrototypeToString = uncurryThis(RegExp.prototype.toString);
exports.RegExpPrototypeToString = RegExpPrototypeToString;
const RegExpPrototypeTest = uncurryThis(RegExp.prototype.test);
exports.RegExpPrototypeTest = RegExpPrototypeTest;
const RegExpPrototypeGetDotAll = uncurryGetter(RegExp.prototype, 'dotAll');
exports.RegExpPrototypeGetDotAll = RegExpPrototypeGetDotAll;
const RegExpPrototypeGetFlags = uncurryGetter(RegExp.prototype, 'flags');
exports.RegExpPrototypeGetFlags = RegExpPrototypeGetFlags;
const RegExpPrototypeGetGlobal = uncurryGetter(RegExp.prototype, 'global');
exports.RegExpPrototypeGetGlobal = RegExpPrototypeGetGlobal;
const RegExpPrototypeGetHasIndices = uncurryGetter(RegExp.prototype, 'hasIndices');
exports.RegExpPrototypeGetHasIndices = RegExpPrototypeGetHasIndices;
const RegExpPrototypeGetIgnoreCase = uncurryGetter(RegExp.prototype, 'ignoreCase');
exports.RegExpPrototypeGetIgnoreCase = RegExpPrototypeGetIgnoreCase;
const RegExpPrototypeGetMultiline = uncurryGetter(RegExp.prototype, 'multiline');
exports.RegExpPrototypeGetMultiline = RegExpPrototypeGetMultiline;
const RegExpPrototypeGetSource = uncurryGetter(RegExp.prototype, 'source');
exports.RegExpPrototypeGetSource = RegExpPrototypeGetSource;
const RegExpPrototypeGetSticky = uncurryGetter(RegExp.prototype, 'sticky');
exports.RegExpPrototypeGetSticky = RegExpPrototypeGetSticky;
const RegExpPrototypeGetUnicode = uncurryGetter(RegExp.prototype, 'unicode');
exports.RegExpPrototypeGetUnicode = RegExpPrototypeGetUnicode;
const RegExpPrototypeSymbolMatch = uncurryThis(RegExp.prototype[Symbol.match]);
exports.RegExpPrototypeSymbolMatch = RegExpPrototypeSymbolMatch;
const RegExpPrototypeSymbolMatchAll = uncurryThis(RegExp.prototype[Symbol.matchAll]);
exports.RegExpPrototypeSymbolMatchAll = RegExpPrototypeSymbolMatchAll;
const RegExpPrototypeSymbolReplace = uncurryThis(RegExp.prototype[Symbol.replace]);
exports.RegExpPrototypeSymbolReplace = RegExpPrototypeSymbolReplace;
const RegExpPrototypeSymbolSearch = uncurryThis(RegExp.prototype[Symbol.search]);
exports.RegExpPrototypeSymbolSearch = RegExpPrototypeSymbolSearch;
const RegExpPrototypeSymbolSplit = uncurryThis(RegExp.prototype[Symbol.split]);
exports.RegExpPrototypeSymbolSplit = RegExpPrototypeSymbolSplit;
const SetGetSymbolSpecies = uncurryGetter(Set, Symbol.species);
exports.SetGetSymbolSpecies = SetGetSymbolSpecies;
const SetLength = Set.length;
exports.SetLength = SetLength;
const SetName = Set.name;
exports.SetName = SetName;
const SetPrototype = Set.prototype;
exports.SetPrototype = SetPrototype;
const SetPrototypeHas = uncurryThis(Set.prototype.has);
exports.SetPrototypeHas = SetPrototypeHas;
const SetPrototypeAdd = uncurryThis(Set.prototype.add);
exports.SetPrototypeAdd = SetPrototypeAdd;
const SetPrototypeDelete = uncurryThis(Set.prototype.delete);
exports.SetPrototypeDelete = SetPrototypeDelete;
const SetPrototypeClear = uncurryThis(Set.prototype.clear);
exports.SetPrototypeClear = SetPrototypeClear;
const SetPrototypeEntries = uncurryThis(Set.prototype.entries);
exports.SetPrototypeEntries = SetPrototypeEntries;
const SetPrototypeForEach = uncurryThis(Set.prototype.forEach);
exports.SetPrototypeForEach = SetPrototypeForEach;
const SetPrototypeValues = uncurryThis(Set.prototype.values);
exports.SetPrototypeValues = SetPrototypeValues;
const SetPrototypeKeys = uncurryThis(Set.prototype.keys);
exports.SetPrototypeKeys = SetPrototypeKeys;
const SetPrototypeSymbolIterator = uncurryThis(Set.prototype[Symbol.iterator]);
exports.SetPrototypeSymbolIterator = SetPrototypeSymbolIterator;
const SetPrototypeSymbolToStringTag = Set.prototype[Symbol.toStringTag];
exports.SetPrototypeSymbolToStringTag = SetPrototypeSymbolToStringTag;
const SetPrototypeGetSize = uncurryGetter(Set.prototype, 'size');
exports.SetPrototypeGetSize = SetPrototypeGetSize;
const StringLength = String.length;
exports.StringLength = StringLength;
const StringName = String.name;
exports.StringName = StringName;
const StringPrototype = String.prototype;
exports.StringPrototype = StringPrototype;
const StringFromCharCode = String.fromCharCode;
exports.StringFromCharCode = StringFromCharCode;
const StringFromCharCodeApply = staticApply(String.fromCharCode);
exports.StringFromCharCodeApply = StringFromCharCodeApply;
const StringFromCodePoint = String.fromCodePoint;
exports.StringFromCodePoint = StringFromCodePoint;
const StringFromCodePointApply = staticApply(String.fromCodePoint);
exports.StringFromCodePointApply = StringFromCodePointApply;
const StringRaw = String.raw;
exports.StringRaw = StringRaw;
const StringPrototypeAnchor = uncurryThis(String.prototype.anchor);
exports.StringPrototypeAnchor = StringPrototypeAnchor;
const StringPrototypeBig = uncurryThis(String.prototype.big);
exports.StringPrototypeBig = StringPrototypeBig;
const StringPrototypeBlink = uncurryThis(String.prototype.blink);
exports.StringPrototypeBlink = StringPrototypeBlink;
const StringPrototypeBold = uncurryThis(String.prototype.bold);
exports.StringPrototypeBold = StringPrototypeBold;
const StringPrototypeCharAt = uncurryThis(String.prototype.charAt);
exports.StringPrototypeCharAt = StringPrototypeCharAt;
const StringPrototypeCharCodeAt = uncurryThis(String.prototype.charCodeAt);
exports.StringPrototypeCharCodeAt = StringPrototypeCharCodeAt;
const StringPrototypeCodePointAt = uncurryThis(String.prototype.codePointAt);
exports.StringPrototypeCodePointAt = StringPrototypeCodePointAt;
const StringPrototypeConcat = uncurryThis(String.prototype.concat);
exports.StringPrototypeConcat = StringPrototypeConcat;
const StringPrototypeConcatApply = applyBind(String.prototype.concat);
exports.StringPrototypeConcatApply = StringPrototypeConcatApply;
const StringPrototypeEndsWith = uncurryThis(String.prototype.endsWith);
exports.StringPrototypeEndsWith = StringPrototypeEndsWith;
const StringPrototypeFontcolor = uncurryThis(String.prototype.fontcolor);
exports.StringPrototypeFontcolor = StringPrototypeFontcolor;
const StringPrototypeFontsize = uncurryThis(String.prototype.fontsize);
exports.StringPrototypeFontsize = StringPrototypeFontsize;
const StringPrototypeFixed = uncurryThis(String.prototype.fixed);
exports.StringPrototypeFixed = StringPrototypeFixed;
const StringPrototypeIncludes = uncurryThis(String.prototype.includes);
exports.StringPrototypeIncludes = StringPrototypeIncludes;
const StringPrototypeIndexOf = uncurryThis(String.prototype.indexOf);
exports.StringPrototypeIndexOf = StringPrototypeIndexOf;
const StringPrototypeItalics = uncurryThis(String.prototype.italics);
exports.StringPrototypeItalics = StringPrototypeItalics;
const StringPrototypeLastIndexOf = uncurryThis(String.prototype.lastIndexOf);
exports.StringPrototypeLastIndexOf = StringPrototypeLastIndexOf;
const StringPrototypeLength = String.prototype.length;
exports.StringPrototypeLength = StringPrototypeLength;
const StringPrototypeLink = uncurryThis(String.prototype.link);
exports.StringPrototypeLink = StringPrototypeLink;
const StringPrototypeLocaleCompare = uncurryThis(String.prototype.localeCompare);
exports.StringPrototypeLocaleCompare = StringPrototypeLocaleCompare;
const StringPrototypeMatch = uncurryThis(String.prototype.match);
exports.StringPrototypeMatch = StringPrototypeMatch;
const StringPrototypeMatchAll = uncurryThis(String.prototype.matchAll);
exports.StringPrototypeMatchAll = StringPrototypeMatchAll;
const StringPrototypeNormalize = uncurryThis(String.prototype.normalize);
exports.StringPrototypeNormalize = StringPrototypeNormalize;
const StringPrototypePadEnd = uncurryThis(String.prototype.padEnd);
exports.StringPrototypePadEnd = StringPrototypePadEnd;
const StringPrototypePadStart = uncurryThis(String.prototype.padStart);
exports.StringPrototypePadStart = StringPrototypePadStart;
const StringPrototypeRepeat = uncurryThis(String.prototype.repeat);
exports.StringPrototypeRepeat = StringPrototypeRepeat;
const StringPrototypeReplace = uncurryThis(String.prototype.replace); // Fix overload
exports.StringPrototypeReplace = StringPrototypeReplace;
const StringPrototypeSearch = uncurryThis(String.prototype.search);
exports.StringPrototypeSearch = StringPrototypeSearch;
const StringPrototypeSlice = uncurryThis(String.prototype.slice);
exports.StringPrototypeSlice = StringPrototypeSlice;
const StringPrototypeSmall = uncurryThis(String.prototype.small);
exports.StringPrototypeSmall = StringPrototypeSmall;
const StringPrototypeSplit = uncurryThis(String.prototype.split);
exports.StringPrototypeSplit = StringPrototypeSplit;
const StringPrototypeStrike = uncurryThis(String.prototype.strike);
exports.StringPrototypeStrike = StringPrototypeStrike;
const StringPrototypeSub = uncurryThis(String.prototype.sub);
exports.StringPrototypeSub = StringPrototypeSub;
const StringPrototypeSubstr = uncurryThis(String.prototype.substr);
exports.StringPrototypeSubstr = StringPrototypeSubstr;
const StringPrototypeSubstring = uncurryThis(String.prototype.substring);
exports.StringPrototypeSubstring = StringPrototypeSubstring;
const StringPrototypeSup = uncurryThis(String.prototype.sup);
exports.StringPrototypeSup = StringPrototypeSup;
const StringPrototypeStartsWith = uncurryThis(String.prototype.startsWith);
exports.StringPrototypeStartsWith = StringPrototypeStartsWith;
const StringPrototypeToString = uncurryThis(String.prototype.toString);
exports.StringPrototypeToString = StringPrototypeToString;
const StringPrototypeTrim = uncurryThis(String.prototype.trim);
exports.StringPrototypeTrim = StringPrototypeTrim;
const StringPrototypeTrimStart = uncurryThis(String.prototype.trimStart);
exports.StringPrototypeTrimStart = StringPrototypeTrimStart;
const StringPrototypeTrimLeft = uncurryThis(String.prototype.trimLeft);
exports.StringPrototypeTrimLeft = StringPrototypeTrimLeft;
const StringPrototypeTrimEnd = uncurryThis(String.prototype.trimEnd);
exports.StringPrototypeTrimEnd = StringPrototypeTrimEnd;
const StringPrototypeTrimRight = uncurryThis(String.prototype.trimRight);
exports.StringPrototypeTrimRight = StringPrototypeTrimRight;
const StringPrototypeSymbolIterator = uncurryThis(String.prototype[Symbol.iterator]);
exports.StringPrototypeSymbolIterator = StringPrototypeSymbolIterator;
const StringPrototypeToLocaleLowerCase = uncurryThis(String.prototype.toLocaleLowerCase);
exports.StringPrototypeToLocaleLowerCase = StringPrototypeToLocaleLowerCase;
const StringPrototypeToLocaleUpperCase = uncurryThis(String.prototype.toLocaleUpperCase);
exports.StringPrototypeToLocaleUpperCase = StringPrototypeToLocaleUpperCase;
const StringPrototypeToLowerCase = uncurryThis(String.prototype.toLowerCase);
exports.StringPrototypeToLowerCase = StringPrototypeToLowerCase;
const StringPrototypeToUpperCase = uncurryThis(String.prototype.toUpperCase);
exports.StringPrototypeToUpperCase = StringPrototypeToUpperCase;
const StringPrototypeValueOf = uncurryThis(String.prototype.valueOf);
exports.StringPrototypeValueOf = StringPrototypeValueOf;
const StringPrototypeReplaceAll = uncurryThis(String.prototype.replaceAll);
exports.StringPrototypeReplaceAll = StringPrototypeReplaceAll;
const StringIterator = {
    prototype: Reflect.getPrototypeOf(String.prototype[Symbol.iterator]()),
};
exports.StringIterator = StringIterator;
const StringIteratorPrototype = StringIterator.prototype;
exports.StringIteratorPrototype = StringIteratorPrototype;
const StringIteratorPrototypeNext = uncurryThis(StringIteratorPrototype.next);
exports.StringIteratorPrototypeNext = StringIteratorPrototypeNext;
const StringIteratorPrototypeSymbolToStringTag = 'String Iterator';
exports.StringIteratorPrototypeSymbolToStringTag = StringIteratorPrototypeSymbolToStringTag;
const SymbolLength = Symbol.length;
exports.SymbolLength = SymbolLength;
const SymbolName = Symbol.name;
exports.SymbolName = SymbolName;
const SymbolPrototype = Symbol.prototype;
exports.SymbolPrototype = SymbolPrototype;
const SymbolFor = Symbol.for;
exports.SymbolFor = SymbolFor;
const SymbolKeyFor = Symbol.keyFor;
exports.SymbolKeyFor = SymbolKeyFor;
const SymbolAsyncIterator = Symbol.asyncIterator;
exports.SymbolAsyncIterator = SymbolAsyncIterator;
const SymbolHasInstance = Symbol.hasInstance;
exports.SymbolHasInstance = SymbolHasInstance;
const SymbolIsConcatSpreadable = Symbol.isConcatSpreadable;
exports.SymbolIsConcatSpreadable = SymbolIsConcatSpreadable;
const SymbolIterator = Symbol.iterator;
exports.SymbolIterator = SymbolIterator;
const SymbolMatch = Symbol.match;
exports.SymbolMatch = SymbolMatch;
const SymbolMatchAll = Symbol.matchAll;
exports.SymbolMatchAll = SymbolMatchAll;
const SymbolReplace = Symbol.replace;
exports.SymbolReplace = SymbolReplace;
const SymbolSearch = Symbol.search;
exports.SymbolSearch = SymbolSearch;
const SymbolSpecies = Symbol.species;
exports.SymbolSpecies = SymbolSpecies;
const SymbolSplit = Symbol.split;
exports.SymbolSplit = SymbolSplit;
const SymbolToPrimitive = Symbol.toPrimitive;
exports.SymbolToPrimitive = SymbolToPrimitive;
const SymbolToStringTag = Symbol.toStringTag;
exports.SymbolToStringTag = SymbolToStringTag;
const SymbolUnscopables = Symbol.unscopables;
exports.SymbolUnscopables = SymbolUnscopables;
const SymbolPrototypeToString = uncurryThis(Symbol.prototype.toString);
exports.SymbolPrototypeToString = SymbolPrototypeToString;
const SymbolPrototypeValueOf = uncurryThis(Symbol.prototype.valueOf);
exports.SymbolPrototypeValueOf = SymbolPrototypeValueOf;
const SymbolPrototypeSymbolToPrimitive = uncurryMethod(Symbol.prototype, Symbol.toPrimitive);
exports.SymbolPrototypeSymbolToPrimitive = SymbolPrototypeSymbolToPrimitive;
const SymbolPrototypeSymbolToStringTag = Symbol.prototype[Symbol.toStringTag];
exports.SymbolPrototypeSymbolToStringTag = SymbolPrototypeSymbolToStringTag;
const SymbolPrototypeGetDescription = uncurryGetter(Symbol.prototype, 'description');
exports.SymbolPrototypeGetDescription = SymbolPrototypeGetDescription;
const SyntaxErrorLength = SyntaxError.length;
exports.SyntaxErrorLength = SyntaxErrorLength;
const SyntaxErrorName = SyntaxError.name;
exports.SyntaxErrorName = SyntaxErrorName;
const SyntaxErrorPrototype = SyntaxError.prototype;
exports.SyntaxErrorPrototype = SyntaxErrorPrototype;
const SyntaxErrorPrototypeMessage = SyntaxError.prototype.message;
exports.SyntaxErrorPrototypeMessage = SyntaxErrorPrototypeMessage;
const SyntaxErrorPrototypeName = SyntaxError.prototype.name;
exports.SyntaxErrorPrototypeName = SyntaxErrorPrototypeName;
const TypedArrayPrototypeGetBuffer = uncurryGetter(TypedArrayPrototype, 'buffer');
exports.TypedArrayPrototypeGetBuffer = TypedArrayPrototypeGetBuffer;
const TypedArrayPrototypeGetByteLength = uncurryGetter(TypedArrayPrototype, 'byteLength');
exports.TypedArrayPrototypeGetByteLength = TypedArrayPrototypeGetByteLength;
const TypedArrayPrototypeGetByteOffset = uncurryGetter(TypedArrayPrototype, 'byteOffset');
exports.TypedArrayPrototypeGetByteOffset = TypedArrayPrototypeGetByteOffset;
const TypedArrayPrototypeGetLength = uncurryGetter(TypedArrayPrototype, 'length');
exports.TypedArrayPrototypeGetLength = TypedArrayPrototypeGetLength;
const TypedArray = TypedArrayPrototype.constructor;
exports.TypedArray = TypedArray;
const TypedArrayLength = TypedArray.length;
exports.TypedArrayLength = TypedArrayLength;
const TypedArrayName = TypedArray.name;
exports.TypedArrayName = TypedArrayName;
const TypedArrayGetSymbolSpecies = uncurryGetter(TypedArray, 
//@ts-ignore
Symbol.species);
exports.TypedArrayGetSymbolSpecies = TypedArrayGetSymbolSpecies;
const TypedArrayPrototypeCopyWithin = uncurryThis(TypedArrayPrototype.copyWithin);
exports.TypedArrayPrototypeCopyWithin = TypedArrayPrototypeCopyWithin;
const TypedArrayPrototypeEntries = uncurryThis(TypedArrayPrototype.entries);
exports.TypedArrayPrototypeEntries = TypedArrayPrototypeEntries;
const TypedArrayPrototypeEvery = uncurryThis(TypedArrayPrototype.every);
exports.TypedArrayPrototypeEvery = TypedArrayPrototypeEvery;
const TypedArrayPrototypeFill = uncurryThis(TypedArrayPrototype.fill);
exports.TypedArrayPrototypeFill = TypedArrayPrototypeFill;
const TypedArrayPrototypeFilter = uncurryThis(TypedArrayPrototype.filter);
exports.TypedArrayPrototypeFilter = TypedArrayPrototypeFilter;
const TypedArrayPrototypeFind = uncurryThis(TypedArrayPrototype.find);
exports.TypedArrayPrototypeFind = TypedArrayPrototypeFind;
const TypedArrayPrototypeFindIndex = uncurryThis(TypedArrayPrototype.findIndex);
exports.TypedArrayPrototypeFindIndex = TypedArrayPrototypeFindIndex;
const TypedArrayPrototypeForEach = uncurryThis(TypedArrayPrototype.forEach);
exports.TypedArrayPrototypeForEach = TypedArrayPrototypeForEach;
const TypedArrayPrototypeIncludes = uncurryThis(TypedArrayPrototype.includes);
exports.TypedArrayPrototypeIncludes = TypedArrayPrototypeIncludes;
const TypedArrayPrototypeIndexOf = uncurryThis(TypedArrayPrototype.indexOf);
exports.TypedArrayPrototypeIndexOf = TypedArrayPrototypeIndexOf;
const TypedArrayPrototypeJoin = uncurryThis(TypedArrayPrototype.join);
exports.TypedArrayPrototypeJoin = TypedArrayPrototypeJoin;
const TypedArrayPrototypeKeys = uncurryThis(TypedArrayPrototype.keys);
exports.TypedArrayPrototypeKeys = TypedArrayPrototypeKeys;
const TypedArrayPrototypeLastIndexOf = uncurryThis(TypedArrayPrototype.lastIndexOf);
exports.TypedArrayPrototypeLastIndexOf = TypedArrayPrototypeLastIndexOf;
const TypedArrayPrototypeMap = uncurryThis(TypedArrayPrototype.map);
exports.TypedArrayPrototypeMap = TypedArrayPrototypeMap;
const TypedArrayPrototypeReduce = uncurryThis(TypedArrayPrototype.reduce);
exports.TypedArrayPrototypeReduce = TypedArrayPrototypeReduce;
const TypedArrayPrototypeReduceRight = uncurryThis(TypedArrayPrototype.reduceRight);
exports.TypedArrayPrototypeReduceRight = TypedArrayPrototypeReduceRight;
const TypedArrayPrototypeReverse = uncurryThis(TypedArrayPrototype.reverse);
exports.TypedArrayPrototypeReverse = TypedArrayPrototypeReverse;
const TypedArrayPrototypeSet = uncurryThis(TypedArrayPrototype.set);
exports.TypedArrayPrototypeSet = TypedArrayPrototypeSet;
const TypedArrayPrototypeSlice = uncurryThis(TypedArrayPrototype.slice);
exports.TypedArrayPrototypeSlice = TypedArrayPrototypeSlice;
const TypedArrayPrototypeSome = uncurryThis(TypedArrayPrototype.some);
exports.TypedArrayPrototypeSome = TypedArrayPrototypeSome;
const TypedArrayPrototypeSort = uncurryThis(TypedArrayPrototype.sort);
exports.TypedArrayPrototypeSort = TypedArrayPrototypeSort;
const TypedArrayPrototypeSubarray = uncurryThis(TypedArrayPrototype.subarray);
exports.TypedArrayPrototypeSubarray = TypedArrayPrototypeSubarray;
const TypedArrayPrototypeSymbolIterator = uncurryThis(TypedArrayPrototype[Symbol.iterator]);
exports.TypedArrayPrototypeSymbolIterator = TypedArrayPrototypeSymbolIterator;
const TypedArrayPrototypeToLocaleString = uncurryThis(TypedArrayPrototype.toLocaleString);
exports.TypedArrayPrototypeToLocaleString = TypedArrayPrototypeToLocaleString;
const TypedArrayPrototypeToString = uncurryThis(TypedArrayPrototype.toString);
exports.TypedArrayPrototypeToString = TypedArrayPrototypeToString;
const TypedArrayPrototypeValues = uncurryThis(TypedArrayPrototype.values);
exports.TypedArrayPrototypeValues = TypedArrayPrototypeValues;
const TypeErrorLength = TypeError.length;
exports.TypeErrorLength = TypeErrorLength;
const TypeErrorName = TypeError.name;
exports.TypeErrorName = TypeErrorName;
const TypeErrorPrototype = TypeError.prototype;
exports.TypeErrorPrototype = TypeErrorPrototype;
const TypeErrorPrototypeMessage = TypeError.prototype.message;
exports.TypeErrorPrototypeMessage = TypeErrorPrototypeMessage;
const TypeErrorPrototypeName = TypeError.prototype.name;
exports.TypeErrorPrototypeName = TypeErrorPrototypeName;
const URIErrorLength = URIError.length;
exports.URIErrorLength = URIErrorLength;
const URIErrorName = URIError.name;
exports.URIErrorName = URIErrorName;
const URIErrorPrototype = URIError.prototype;
exports.URIErrorPrototype = URIErrorPrototype;
const URIErrorPrototypeMessage = URIError.prototype.message;
exports.URIErrorPrototypeMessage = URIErrorPrototypeMessage;
const URIErrorPrototypeName = URIError.prototype.name;
exports.URIErrorPrototypeName = URIErrorPrototypeName;
const URLCreateObjectURL = staticCall(URL.createObjectURL);
exports.URLCreateObjectURL = URLCreateObjectURL;
const URLRevokeObjectURL = staticCall(URL.revokeObjectURL);
exports.URLRevokeObjectURL = URLRevokeObjectURL;
const Uint16ArrayLength = Uint16Array.length;
exports.Uint16ArrayLength = Uint16ArrayLength;
const Uint16ArrayName = Uint16Array.name;
exports.Uint16ArrayName = Uint16ArrayName;
const Uint16ArrayPrototype = Uint16Array.prototype;
exports.Uint16ArrayPrototype = Uint16ArrayPrototype;
const Uint16ArrayBYTES_PER_ELEMENT = Uint16Array.BYTES_PER_ELEMENT;
exports.Uint16ArrayBYTES_PER_ELEMENT = Uint16ArrayBYTES_PER_ELEMENT;
const Uint16ArrayPrototypeBYTES_PER_ELEMENT = Uint16Array.prototype.BYTES_PER_ELEMENT;
exports.Uint16ArrayPrototypeBYTES_PER_ELEMENT = Uint16ArrayPrototypeBYTES_PER_ELEMENT;
const Uint32ArrayLength = Uint32Array.length;
exports.Uint32ArrayLength = Uint32ArrayLength;
const Uint32ArrayName = Uint32Array.name;
exports.Uint32ArrayName = Uint32ArrayName;
const Uint32ArrayPrototype = Uint32Array.prototype;
exports.Uint32ArrayPrototype = Uint32ArrayPrototype;
const Uint32ArrayBYTES_PER_ELEMENT = Uint32Array.BYTES_PER_ELEMENT;
exports.Uint32ArrayBYTES_PER_ELEMENT = Uint32ArrayBYTES_PER_ELEMENT;
const Uint32ArrayPrototypeBYTES_PER_ELEMENT = Uint32Array.prototype.BYTES_PER_ELEMENT;
exports.Uint32ArrayPrototypeBYTES_PER_ELEMENT = Uint32ArrayPrototypeBYTES_PER_ELEMENT;
const Uint8ArrayLength = Uint8Array.length;
exports.Uint8ArrayLength = Uint8ArrayLength;
const Uint8ArrayName = Uint8Array.name;
exports.Uint8ArrayName = Uint8ArrayName;
const Uint8ArrayPrototype = Uint8Array.prototype;
exports.Uint8ArrayPrototype = Uint8ArrayPrototype;
const Uint8ArrayBYTES_PER_ELEMENT = Uint8Array.BYTES_PER_ELEMENT;
exports.Uint8ArrayBYTES_PER_ELEMENT = Uint8ArrayBYTES_PER_ELEMENT;
const Uint8ArrayPrototypeBYTES_PER_ELEMENT = Uint8Array.prototype.BYTES_PER_ELEMENT;
exports.Uint8ArrayPrototypeBYTES_PER_ELEMENT = Uint8ArrayPrototypeBYTES_PER_ELEMENT;
const Uint8ClampedArrayLength = Uint8ClampedArray.length;
exports.Uint8ClampedArrayLength = Uint8ClampedArrayLength;
const Uint8ClampedArrayName = Uint8ClampedArray.name;
exports.Uint8ClampedArrayName = Uint8ClampedArrayName;
const Uint8ClampedArrayPrototype = Uint8ClampedArray.prototype;
exports.Uint8ClampedArrayPrototype = Uint8ClampedArrayPrototype;
const Uint8ClampedArrayBYTES_PER_ELEMENT = Uint8ClampedArray.BYTES_PER_ELEMENT;
exports.Uint8ClampedArrayBYTES_PER_ELEMENT = Uint8ClampedArrayBYTES_PER_ELEMENT;
const Uint8ClampedArrayPrototypeBYTES_PER_ELEMENT = Uint8ClampedArray.prototype.BYTES_PER_ELEMENT;
exports.Uint8ClampedArrayPrototypeBYTES_PER_ELEMENT = Uint8ClampedArrayPrototypeBYTES_PER_ELEMENT;
const WeakMapLength = WeakMap.length;
exports.WeakMapLength = WeakMapLength;
const WeakMapName = WeakMap.name;
exports.WeakMapName = WeakMapName;
const WeakMapPrototype = WeakMap.prototype;
exports.WeakMapPrototype = WeakMapPrototype;
const WeakMapPrototypeDelete = uncurryThis(WeakMap.prototype.delete);
exports.WeakMapPrototypeDelete = WeakMapPrototypeDelete;
const WeakMapPrototypeGet = uncurryThis(WeakMap.prototype.get);
exports.WeakMapPrototypeGet = WeakMapPrototypeGet;
const WeakMapPrototypeSet = uncurryThis(WeakMap.prototype.set);
exports.WeakMapPrototypeSet = WeakMapPrototypeSet;
const WeakMapPrototypeSymbolToStringTag = WeakMap.prototype[Symbol.toStringTag];
exports.WeakMapPrototypeSymbolToStringTag = WeakMapPrototypeSymbolToStringTag;
const WeakMapPrototypeHas = uncurryThis(WeakMap.prototype.has);
exports.WeakMapPrototypeHas = WeakMapPrototypeHas;
const WeakRefLength = WeakRef.length;
exports.WeakRefLength = WeakRefLength;
const WeakRefName = WeakRef.length;
exports.WeakRefName = WeakRefName;
const WeakRefPrototype = WeakRef.prototype;
exports.WeakRefPrototype = WeakRefPrototype;
const WeakRefPrototypeDeref = uncurryThis(WeakRef.prototype.deref);
exports.WeakRefPrototypeDeref = WeakRefPrototypeDeref;
const WeakRefPrototypeSymbolToStringTag = WeakRef.prototype[Symbol.toStringTag];
exports.WeakRefPrototypeSymbolToStringTag = WeakRefPrototypeSymbolToStringTag;
const WeakSetLength = WeakSet.length;
exports.WeakSetLength = WeakSetLength;
const WeakSetName = WeakSet.name;
exports.WeakSetName = WeakSetName;
const WeakSetPrototype = WeakSet.prototype;
exports.WeakSetPrototype = WeakSetPrototype;
const WeakSetPrototypeAdd = uncurryThis(WeakSet.prototype.add);
exports.WeakSetPrototypeAdd = WeakSetPrototypeAdd;
const WeakSetPrototypeDelete = uncurryThis(WeakSet.prototype.delete);
exports.WeakSetPrototypeDelete = WeakSetPrototypeDelete;
const WeakSetPrototypeHas = uncurryThis(WeakSet.prototype.has);
exports.WeakSetPrototypeHas = WeakSetPrototypeHas;
const WeakSetPrototypeSymbolToStringTag = WeakSet.prototype[Symbol.toStringTag];
exports.WeakSetPrototypeSymbolToStringTag = WeakSetPrototypeSymbolToStringTag;
const processCwd = staticCall(ogProcess.cwd);
exports.processCwd = processCwd;
const processArgv = [...ogProcess.argv];
exports.processArgv = processArgv;
const processExecArgv = [...ogProcess.execArgv];
exports.processExecArgv = processExecArgv;
const processExecPath = String(ogProcess.execPath);
exports.processExecPath = processExecPath;
const processEnv = new Proxy(ogProcess.env, {
    get: (_, k) => ogProcess.env[k],
    set: (_, k, v) => {
        ogProcess.env[k] = v;
        return true;
    },
    deleteProperty: (_, k) => {
        delete ogProcess.env[k];
        return true;
    },
});
exports.processEnv = processEnv;
const processArgv0 = String(ogProcess.argv0);
exports.processArgv0 = processArgv0;
const processPid = Number(ogProcess.pid);
exports.processPid = processPid;
const processPpid = Number(ogProcess.ppid);
exports.processPpid = processPpid;
const processTitle = String(ogProcess.title);
exports.processTitle = processTitle;
const processVersion = String(ogProcess.version);
exports.processVersion = processVersion;
const processVersions = Object.freeze(cloneSafe(ogProcess.versions));
exports.processVersions = processVersions;
const processArch = String(ogProcess.arch);
exports.processArch = processArch;
const processPlatform = String(ogProcess.platform);
exports.processPlatform = processPlatform;
const processRelease = Object.freeze(cloneSafe(ogProcess.release));
exports.processRelease = processRelease;
const processModuleLoadList = Object.freeze([
    ...ogProcess.moduleLoadList.map(s => String(s)),
]);
exports.processModuleLoadList = processModuleLoadList;
const processFeatures = Object.freeze(cloneSafe(ogProcess.features));
exports.processFeatures = processFeatures;
const processNextTick = staticCall(ogProcess.nextTick);
exports.processNextTick = processNextTick;
const processAbort = staticCall(ogProcess.abort);
exports.processAbort = processAbort;
const processUmask = staticCall(ogProcess.umask);
exports.processUmask = processUmask;
const processsInitgroups = maybeStaticCall(ogProcess.initgroups);
exports.processsInitgroups = processsInitgroups;
const processSetgroups = maybeStaticCall(ogProcess.setgroups);
exports.processSetgroups = processSetgroups;
const processSetuid = maybeStaticCall(ogProcess.setuid);
exports.processSetuid = processSetuid;
const processSetgid = maybeStaticCall(ogProcess.setgid);
exports.processSetgid = processSetgid;
const processSeteuid = maybeStaticCall(ogProcess.seteuid);
exports.processSeteuid = processSeteuid;
const processSetegid = maybeStaticCall(ogProcess.setegid);
exports.processSetegid = processSetegid;
const processSetSourceMapsEnabled = maybeStaticCall(ogProcess.setSourceMapsEnabled);
exports.processSetSourceMapsEnabled = processSetSourceMapsEnabled;
const processSetUncaughtExceptionCaptureCallback = staticCall(ogProcess.setUncaughtExceptionCaptureCallback);
exports.processSetUncaughtExceptionCaptureCallback = processSetUncaughtExceptionCaptureCallback;
const processHasUncaughtExceptionCaptureCallback = staticCall(ogProcess.hasUncaughtExceptionCaptureCallback);
exports.processHasUncaughtExceptionCaptureCallback = processHasUncaughtExceptionCaptureCallback;
const processEmitWarning = bind.bind(ogProcess.emitWarning, ogProcess);
exports.processEmitWarning = processEmitWarning;
const processDebugPort = Number(ogProcess.debugPort);
exports.processDebugPort = processDebugPort;
const createSafeIterator = (factory, next) => {
    class SafeIterator {
        _iterator;
        constructor(iterable) {
            this._iterator = factory(iterable);
        }
        next() {
            return next(this._iterator);
        }
        [Symbol.iterator]() {
            /* c8 ignore next 2 */
            return this;
        }
        [SymbolIterator]() {
            return this;
        }
    }
    ObjectSetPrototypeOf(SafeIterator.prototype, null);
    ObjectFreeze(SafeIterator.prototype);
    ObjectFreeze(SafeIterator);
    return SafeIterator;
};
const copyProps = (src, dest) => {
    ArrayPrototypeForEach(ReflectOwnKeys(src), key => {
        if (!ReflectGetOwnPropertyDescriptor(dest, key)) {
            ReflectDefineProperty(dest, key, {
                __proto__: null,
                ...ReflectGetOwnPropertyDescriptor(src, key),
            });
        }
    });
};
const makeSafe = (unsafe, safe) => {
    if (SymbolIterator in unsafe.prototype) {
        const dummy = new unsafe();
        let next; // We can reuse the same `next` method.
        ArrayPrototypeForEach(ReflectOwnKeys(unsafe.prototype), key => {
            if (!ReflectGetOwnPropertyDescriptor(safe.prototype, key)) {
                const desc = ReflectGetOwnPropertyDescriptor(unsafe.prototype, key);
                if (desc &&
                    typeof desc.value === 'function' &&
                    desc.value.length === 0 &&
                    SymbolIterator in
                        (FunctionPrototypeCall(desc.value, dummy) ?? {})) {
                    const x = [];
                    const createIterator = uncurryThis(desc.value);
                    next = next || uncurryThis(createIterator(dummy).next);
                    const SafeIterator = createSafeIterator(createIterator, next);
                    desc.value = function () {
                        return new SafeIterator(this);
                    };
                }
                ReflectDefineProperty(safe.prototype, key, {
                    __proto__: null,
                    ...desc,
                });
            }
        });
    }
    else {
        copyProps(unsafe.prototype, safe.prototype);
    }
    copyProps(unsafe, safe);
    ObjectSetPrototypeOf(safe.prototype, null);
    ObjectFreeze(safe.prototype);
    ObjectFreeze(safe);
    return safe;
};
exports.makeSafe = makeSafe;
const SafeMap = makeSafe(Map, class SafeMap extends Map {
    constructor(entries) {
        super(entries);
    }
});
exports.SafeMap = SafeMap;
const SafeWeakMap = makeSafe(WeakMap, class SafeWeakMap extends WeakMap {
    constructor(entries) {
        super(entries);
    }
});
exports.SafeWeakMap = SafeWeakMap;
const SafeSet = makeSafe(Set, class SafeSet extends Set {
    constructor(values) {
        super(values);
    }
});
exports.SafeSet = SafeSet;
const SafeWeakSet = makeSafe(WeakSet, class SafeWeakSet extends WeakSet {
    constructor(values) {
        super(values);
    }
});
exports.SafeWeakSet = SafeWeakSet;
const SafeFinalizationRegistry = makeSafe(FinalizationRegistry, class SafeFinalizationRegistry extends FinalizationRegistry {
    constructor(cleanupCallback) {
        super(cleanupCallback);
    }
});
exports.SafeFinalizationRegistry = SafeFinalizationRegistry;
const SafeWeakRef = makeSafe(WeakRef, class SafeWeakRef extends WeakRef {
    constructor(target) {
        super(target);
    }
});
exports.SafeWeakRef = SafeWeakRef;
const SafePromise = makeSafe(Promise, class SafePromise extends Promise {
    constructor(executor) {
        super(executor);
    }
});
exports.SafePromise = SafePromise;
const PRIMORDIALS = OBJECT.defineProperties(OBJECT.assign(OBJECT.create(null), {
    // utilities
    applyBind,
    hardenRegExp,
    staticApply,
    uncurryThis,
    uncurryGetter,
    uncurrySetter,
    uncurryMethod,
    staticCall,
    maybeStaticCall,
    // globals
    globalThis: GLOBALTHIS,
    setImmediate,
    setTimeout,
    setInterval,
    clearTimeout,
    clearInterval,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    escape,
    eval: eval_,
    unescape,
    AggregateError,
    AggregateErrorLength,
    AggregateErrorName,
    AggregateErrorPrototype,
    AggregateErrorPrototypeMessage,
    AggregateErrorPrototypeName,
    Array,
    ArrayFrom,
    ArrayIsArray,
    ArrayLength,
    ArrayName,
    ArrayOf,
    ArrayOfApply,
    ArrayPrototype,
    ArrayPrototypeConcat,
    ArrayPrototypeCopyWithin,
    ArrayPrototypeEntries,
    ArrayPrototypeEvery,
    ArrayPrototypeFill,
    ArrayPrototypeFilter,
    ArrayPrototypeFind,
    ArrayPrototypeFindIndex,
    ArrayPrototypeFlat,
    ArrayPrototypeFlatMap,
    ArrayPrototypeForEach,
    ArrayPrototypeIncludes,
    ArrayPrototypeIndexOf,
    ArrayPrototypeJoin,
    ArrayPrototypeKeys,
    ArrayPrototypeLastIndexOf,
    ArrayPrototypeLength,
    ArrayPrototypeMap,
    ArrayPrototypePop,
    ArrayPrototypePush,
    ArrayPrototypePushApply,
    ArrayPrototypeReduce,
    ArrayPrototypeReduceRight,
    ArrayPrototypeReverse,
    ArrayPrototypeShift,
    ArrayPrototypeSlice,
    ArrayPrototypeSome,
    ArrayPrototypeSort,
    ArrayPrototypeSplice,
    ArrayPrototypeSymbolIterator,
    ArrayPrototypeSymbolUnscopables,
    ArrayPrototypeToLocaleString,
    ArrayPrototypeToString,
    ArrayPrototypeUnshift,
    ArrayPrototypeUnshiftApply,
    ArrayPrototypeValues,
    ArrayGetSymbolSpecies,
    ArrayBuffer,
    ArrayBufferGetSymbolSpecies,
    ArrayBufferIsView,
    ArrayBufferLength,
    ArrayBufferName,
    ArrayBufferPrototype,
    ArrayBufferPrototypeGetByteLength,
    ArrayBufferPrototypeSlice,
    ArrayBufferPrototypeSymbolToStringTag,
    ArrayIterator,
    ArrayIteratorPrototype,
    ArrayIteratorPrototypeNext,
    ArrayIteratorPrototypeSymbolToStringTag,
    AsyncIteratorPrototype,
    BigInt,
    BigIntAsIntN,
    BigIntAsUintN,
    BigIntLength,
    BigIntName,
    BigIntPrototype,
    BigIntPrototypeToLocaleString,
    BigIntPrototypeToString,
    BigIntPrototypeValueOf,
    BigIntPrototypeSymbolToStringTag,
    BigInt64Array,
    BigInt64ArrayBYTES_PER_ELEMENT,
    BigInt64ArrayLength,
    BigInt64ArrayName,
    BigInt64ArrayPrototype,
    BigInt64ArrayPrototypeBYTES_PER_ELEMENT,
    BigUint64Array,
    BigUint64ArrayBYTES_PER_ELEMENT,
    BigUint64ArrayLength,
    BigUint64ArrayName,
    BigUint64ArrayPrototype,
    BigUint64ArrayPrototypeBYTES_PER_ELEMENT,
    Boolean,
    BooleanLength,
    BooleanName,
    BooleanPrototype,
    BooleanPrototypeToString,
    BooleanPrototypeValueOf,
    DataView,
    DataViewLength,
    DataViewName,
    DataViewPrototype,
    DataViewPrototypeGetBigInt64,
    DataViewPrototypeGetBigUint64,
    DataViewPrototypeGetBuffer,
    DataViewPrototypeGetByteLength,
    DataViewPrototypeGetByteOffset,
    DataViewPrototypeGetFloat32,
    DataViewPrototypeGetFloat64,
    DataViewPrototypeGetInt16,
    DataViewPrototypeGetInt32,
    DataViewPrototypeGetInt8,
    DataViewPrototypeGetUint16,
    DataViewPrototypeGetUint32,
    DataViewPrototypeGetUint8,
    DataViewPrototypeSetBigInt64,
    DataViewPrototypeSetBigUint64,
    DataViewPrototypeSetFloat32,
    DataViewPrototypeSetFloat64,
    DataViewPrototypeSetInt16,
    DataViewPrototypeSetInt32,
    DataViewPrototypeSetInt8,
    DataViewPrototypeSetUint16,
    DataViewPrototypeSetUint32,
    DataViewPrototypeSetUint8,
    DataViewPrototypeSymbolToStringTag,
    Date,
    DateLength,
    DateName,
    DateNow,
    DateParse,
    DatePrototype,
    DatePrototypeGetDate,
    DatePrototypeGetDay,
    DatePrototypeGetFullYear,
    DatePrototypeGetHours,
    DatePrototypeGetMilliseconds,
    DatePrototypeGetMinutes,
    DatePrototypeGetMonth,
    DatePrototypeGetSeconds,
    DatePrototypeGetTime,
    DatePrototypeGetTimezoneOffset,
    DatePrototypeGetUTCDate,
    DatePrototypeGetUTCDay,
    DatePrototypeGetUTCFullYear,
    DatePrototypeGetUTCHours,
    DatePrototypeGetUTCMilliseconds,
    DatePrototypeGetUTCMinutes,
    DatePrototypeGetUTCMonth,
    DatePrototypeGetUTCSeconds,
    DatePrototypeGetYear,
    DatePrototypeSetDate,
    DatePrototypeSetFullYear,
    DatePrototypeSetHours,
    DatePrototypeSetMilliseconds,
    DatePrototypeSetMinutes,
    DatePrototypeSetMonth,
    DatePrototypeSetSeconds,
    DatePrototypeSetTime,
    DatePrototypeSetUTCDate,
    DatePrototypeSetUTCFullYear,
    DatePrototypeSetUTCHours,
    DatePrototypeSetUTCMilliseconds,
    DatePrototypeSetUTCMinutes,
    DatePrototypeSetUTCMonth,
    DatePrototypeSetUTCSeconds,
    DatePrototypeSetYear,
    DatePrototypeSymbolToPrimitive,
    DatePrototypeToDateString,
    DatePrototypeToGMTString,
    DatePrototypeToISOString,
    DatePrototypeToJSON,
    DatePrototypeToLocaleDateString,
    DatePrototypeToLocaleString,
    DatePrototypeToLocaleTimeString,
    DatePrototypeToString,
    DatePrototypeToTimeString,
    DatePrototypeToUTCString,
    DatePrototypeValueOf,
    DateUTC,
    Error,
    ErrorCaptureStackTrace,
    ErrorLength,
    ErrorName,
    ErrorPrototype,
    ErrorPrototypeMessage,
    ErrorPrototypeName,
    ErrorPrototypeToString,
    EvalError,
    EvalErrorLength,
    EvalErrorName,
    EvalErrorPrototype,
    EvalErrorPrototypeMessage,
    EvalErrorPrototypeName,
    FinalizationRegistry,
    FinalizationRegistryLength,
    FinalizationRegistryName,
    FinalizationRegistryPrototype,
    FinalizationRegistryPrototypeRegister,
    FinalizationRegistryPrototypeSymbolToStringTag,
    FinalizationRegistryPrototypeUnregister,
    Float32Array,
    Float32ArrayBYTES_PER_ELEMENT,
    Float32ArrayLength,
    Float32ArrayName,
    Float32ArrayPrototype,
    Float32ArrayPrototypeBYTES_PER_ELEMENT,
    Float64Array,
    Float64ArrayBYTES_PER_ELEMENT,
    Float64ArrayLength,
    Float64ArrayName,
    Float64ArrayPrototype,
    Float64ArrayPrototypeBYTES_PER_ELEMENT,
    Function,
    FunctionLength,
    FunctionName,
    FunctionPrototype,
    FunctionPrototypeApply,
    FunctionPrototypeBind,
    FunctionPrototypeCall,
    FunctionPrototypeGetArguments,
    FunctionPrototypeGetCaller,
    FunctionPrototypeLength,
    FunctionPrototypeName,
    FunctionPrototypeSetArguments,
    FunctionPrototypeSetCaller,
    FunctionPrototypeSymbolHasInstance,
    FunctionPrototypeToString,
    Int16Array,
    Int16ArrayBYTES_PER_ELEMENT,
    Int16ArrayLength,
    Int16ArrayName,
    Int16ArrayPrototype,
    Int16ArrayPrototypeBYTES_PER_ELEMENT,
    Int32Array,
    Int32ArrayBYTES_PER_ELEMENT,
    Int32ArrayLength,
    Int32ArrayName,
    Int32ArrayPrototype,
    Int32ArrayPrototypeBYTES_PER_ELEMENT,
    Int8Array,
    Int8ArrayLength,
    Int8ArrayName,
    Int8ArrayPrototype,
    Int8ArrayPrototypeBYTES_PER_ELEMENT,
    Int8ArrayBYTES_PER_ELEMENT,
    JSON,
    JSONParse,
    JSONStringify,
    JSONSymbolToStringTag,
    Map,
    MapGetSymbolSpecies,
    MapLength,
    MapName,
    MapPrototype,
    MapPrototypeGet,
    MapPrototypeSet,
    MapPrototypeSymbolIterator,
    MapPrototypeSymbolToStringTag,
    MapPrototypeHas,
    MapPrototypeDelete,
    MapPrototypeClear,
    MapPrototypeEntries,
    MapPrototypeForEach,
    MapPrototypeKeys,
    MapPrototypeValues,
    MapPrototypeGetSize,
    Math,
    MathAbs,
    MathAcos,
    MathAcosh,
    MathAsin,
    MathAsinh,
    MathAtan2,
    MathAtan,
    MathAtanh,
    MathCbrt,
    MathCeil,
    MathClz32,
    MathCos,
    MathCosh,
    MathE,
    MathExp,
    MathExpm1,
    MathFloor,
    MathFround,
    MathHypot,
    MathHypotApply,
    MathImul,
    MathLN10,
    MathLN2,
    MathLOG10E,
    MathLOG2E,
    MathLog10,
    MathLog1p,
    MathLog2,
    MathLog,
    MathMax,
    MathMaxApply,
    MathMin,
    MathMinApply,
    MathPI,
    MathPow,
    MathRandom,
    MathRound,
    MathSQRT1_2,
    MathSQRT2,
    MathSign,
    MathSin,
    MathSinh,
    MathSqrt,
    MathSymbolToStringTag,
    MathTan,
    MathTanh,
    MathTrunc,
    Number,
    NumberEPSILON,
    NumberIsFinite,
    NumberIsInteger,
    NumberIsNaN,
    NumberIsSafeInteger,
    NumberLength,
    NumberMAX_SAFE_INTEGER,
    NumberMAX_VALUE,
    NumberMIN_SAFE_INTEGER,
    NumberMIN_VALUE,
    NumberNEGATIVE_INFINITY,
    NumberNaN,
    NumberName,
    NumberPOSITIVE_INFINITY,
    NumberParseFloat,
    NumberParseInt,
    NumberPrototype,
    NumberPrototypeToExponential,
    NumberPrototypeToFixed,
    NumberPrototypeToLocaleString,
    NumberPrototypeToPrecision,
    NumberPrototypeToString,
    NumberPrototypeValueOf,
    Object,
    ObjectAssign,
    ObjectCreate,
    ObjectDefineProperties,
    ObjectDefineProperty,
    ObjectEntries,
    ObjectFreeze,
    ObjectFromEntries,
    ObjectGetOwnPropertyDescriptor,
    ObjectGetOwnPropertyDescriptors,
    ObjectGetOwnPropertyNames,
    ObjectGetOwnPropertySymbols,
    ObjectGetPrototypeOf,
    ObjectIs,
    ObjectIsExtensible,
    ObjectIsFrozen,
    ObjectIsSealed,
    ObjectKeys,
    ObjectLength,
    ObjectName,
    ObjectPreventExtensions,
    ObjectPrototype,
    ObjectPrototypeGet__proto__,
    ObjectPrototypeHasOwnProperty,
    ObjectPrototypeIsPrototypeOf,
    ObjectPrototypePropertyIsEnumerable,
    ObjectPrototypeSet__proto__,
    ObjectPrototypeToLocaleString,
    ObjectPrototypeToString,
    ObjectPrototypeValueOf,
    ObjectPrototype__defineGetter__,
    ObjectPrototype__defineSetter__,
    ObjectPrototype__lookupGetter__,
    ObjectPrototype__lookupSetter__,
    ObjectSeal,
    ObjectSetPrototypeOf,
    ObjectValues,
    Promise,
    PromiseAll,
    PromiseAllSettled,
    PromiseAny,
    PromiseGetSymbolSpecies,
    PromiseLength,
    PromiseName,
    PromisePrototype,
    PromisePrototypeCatch,
    PromisePrototypeFinally,
    PromisePrototypeSymbolToStringTag,
    PromisePrototypeThen,
    PromiseRace,
    PromiseReject,
    PromiseResolve,
    Proxy,
    ProxyLength,
    ProxyName,
    ProxyRevocable,
    RangeError,
    RangeErrorLength,
    RangeErrorName,
    RangeErrorPrototype,
    RangeErrorPrototypeMessage,
    RangeErrorPrototypeName,
    ReferenceError,
    ReferenceErrorLength,
    ReferenceErrorName,
    ReferenceErrorPrototype,
    ReferenceErrorPrototypeMessage,
    ReferenceErrorPrototypeName,
    Reflect,
    ReflectApply,
    ReflectConstruct,
    ReflectDefineProperty,
    ReflectDeleteProperty,
    ReflectGet,
    ReflectGetOwnPropertyDescriptor,
    ReflectGetPrototypeOf,
    ReflectHas,
    ReflectIsExtensible,
    ReflectOwnKeys,
    ReflectPreventExtensions,
    ReflectSet,
    ReflectSetPrototypeOf,
    ReflectSymbolToStringTag,
    RegExp,
    RegExpGet$1,
    RegExpGet$2,
    RegExpGet$3,
    RegExpGet$4,
    RegExpGet$5,
    RegExpGet$6,
    RegExpGet$7,
    RegExpGet$8,
    RegExpGet$9,
    RegExpGet$_,
    RegExpGetInput,
    RegExpGetLastMatch,
    RegExpGetLastParen,
    RegExpGetLeftContext,
    RegExpGetRightContext,
    RegExpGetSymbolSpecies,
    RegExpLength,
    RegExpName,
    RegExpPrototype,
    RegExpPrototypeCompile,
    RegExpPrototypeExec,
    RegExpPrototypeGetDotAll,
    RegExpPrototypeGetFlags,
    RegExpPrototypeGetGlobal,
    RegExpPrototypeGetHasIndices,
    RegExpPrototypeGetIgnoreCase,
    RegExpPrototypeGetMultiline,
    RegExpPrototypeGetSource,
    RegExpPrototypeGetSticky,
    RegExpPrototypeGetUnicode,
    RegExpPrototypeSymbolMatch,
    RegExpPrototypeSymbolMatchAll,
    RegExpPrototypeSymbolReplace,
    RegExpPrototypeSymbolSearch,
    RegExpPrototypeSymbolSplit,
    RegExpPrototypeTest,
    RegExpPrototypeToString,
    RegExpSet$1,
    RegExpSet$2,
    RegExpSet$3,
    RegExpSet$4,
    RegExpSet$5,
    RegExpSet$6,
    RegExpSet$7,
    RegExpSet$8,
    RegExpSet$9,
    RegExpSet$_,
    RegExpSetInput,
    RegExpSetLastMatch,
    RegExpSetLastParen,
    RegExpSetLeftContext,
    RegExpSetRightContext,
    RegExpGetDollarSquo,
    RegExpGetDollarAmp,
    RegExpGetDollarPlus,
    RegExpGetDollarTick,
    RegExpSetDollarSquo,
    RegExpSetDollarAmp,
    RegExpSetDollarPlus,
    RegExpSetDollarTick,
    "RegExpGet$'": RegExpGetDollarSquo,
    'RegExpGet$&': RegExpGetDollarAmp,
    'RegExpGet$+': RegExpGetDollarPlus,
    'RegExpGet$`': RegExpGetDollarTick,
    "RegExpSet$'": RegExpSetDollarSquo,
    'RegExpSet$&': RegExpSetDollarAmp,
    'RegExpSet$+': RegExpSetDollarPlus,
    'RegExpSet$`': RegExpSetDollarTick,
    Set,
    SetGetSymbolSpecies,
    SetLength,
    SetName,
    SetPrototype,
    SetPrototypeHas,
    SetPrototypeAdd,
    SetPrototypeDelete,
    SetPrototypeClear,
    SetPrototypeEntries,
    SetPrototypeForEach,
    SetPrototypeValues,
    SetPrototypeKeys,
    SetPrototypeSymbolIterator,
    SetPrototypeSymbolToStringTag,
    SetPrototypeGetSize,
    String,
    StringLength,
    StringName,
    StringPrototype,
    StringFromCharCode,
    StringFromCharCodeApply,
    StringFromCodePoint,
    StringFromCodePointApply,
    StringRaw,
    StringPrototypeAnchor,
    StringPrototypeBig,
    StringPrototypeBlink,
    StringPrototypeBold,
    StringPrototypeCharAt,
    StringPrototypeCharCodeAt,
    StringPrototypeCodePointAt,
    StringPrototypeConcat,
    StringPrototypeConcatApply,
    StringPrototypeEndsWith,
    StringPrototypeFontcolor,
    StringPrototypeFontsize,
    StringPrototypeFixed,
    StringPrototypeIncludes,
    StringPrototypeIndexOf,
    StringPrototypeItalics,
    StringPrototypeLastIndexOf,
    StringPrototypeLength,
    StringPrototypeLink,
    StringPrototypeLocaleCompare,
    StringPrototypeMatch,
    StringPrototypeMatchAll,
    StringPrototypeNormalize,
    StringPrototypePadEnd,
    StringPrototypePadStart,
    StringPrototypeRepeat,
    StringPrototypeReplace,
    StringPrototypeSearch,
    StringPrototypeSlice,
    StringPrototypeSmall,
    StringPrototypeSplit,
    StringPrototypeStrike,
    StringPrototypeSub,
    StringPrototypeSubstr,
    StringPrototypeSubstring,
    StringPrototypeSup,
    StringPrototypeStartsWith,
    StringPrototypeToString,
    StringPrototypeTrim,
    StringPrototypeTrimStart,
    StringPrototypeTrimLeft,
    StringPrototypeTrimEnd,
    StringPrototypeTrimRight,
    StringPrototypeSymbolIterator,
    StringPrototypeToLocaleLowerCase,
    StringPrototypeToLocaleUpperCase,
    StringPrototypeToLowerCase,
    StringPrototypeToUpperCase,
    StringPrototypeValueOf,
    StringPrototypeReplaceAll,
    StringIterator,
    StringIteratorPrototype,
    StringIteratorPrototypeNext,
    StringIteratorPrototypeSymbolToStringTag,
    Symbol,
    SymbolLength,
    SymbolName,
    SymbolPrototype,
    SymbolFor,
    SymbolKeyFor,
    SymbolAsyncIterator,
    SymbolHasInstance,
    SymbolIsConcatSpreadable,
    SymbolIterator,
    SymbolMatch,
    SymbolMatchAll,
    SymbolReplace,
    SymbolSearch,
    SymbolSpecies,
    SymbolSplit,
    SymbolToPrimitive,
    SymbolToStringTag,
    SymbolUnscopables,
    SymbolPrototypeToString,
    SymbolPrototypeValueOf,
    SymbolPrototypeSymbolToPrimitive,
    SymbolPrototypeSymbolToStringTag,
    SymbolPrototypeGetDescription,
    SyntaxError,
    SyntaxErrorLength,
    SyntaxErrorName,
    SyntaxErrorPrototype,
    SyntaxErrorPrototypeMessage,
    SyntaxErrorPrototypeName,
    TypedArray,
    TypedArrayFrom,
    TypedArrayGetSymbolSpecies,
    TypedArrayLength,
    TypedArrayName,
    TypedArrayOf,
    TypedArrayOfApply,
    TypedArrayPrototype,
    TypedArrayPrototypeCopyWithin,
    TypedArrayPrototypeEntries,
    TypedArrayPrototypeEvery,
    TypedArrayPrototypeFill,
    TypedArrayPrototypeFilter,
    TypedArrayPrototypeFind,
    TypedArrayPrototypeFindIndex,
    TypedArrayPrototypeForEach,
    TypedArrayPrototypeGetBuffer,
    TypedArrayPrototypeGetByteLength,
    TypedArrayPrototypeGetByteOffset,
    TypedArrayPrototypeGetLength,
    TypedArrayPrototypeGetSymbolToStringTag,
    TypedArrayPrototypeIncludes,
    TypedArrayPrototypeIndexOf,
    TypedArrayPrototypeJoin,
    TypedArrayPrototypeKeys,
    TypedArrayPrototypeLastIndexOf,
    TypedArrayPrototypeMap,
    TypedArrayPrototypeReduce,
    TypedArrayPrototypeReduceRight,
    TypedArrayPrototypeReverse,
    TypedArrayPrototypeSet,
    TypedArrayPrototypeSlice,
    TypedArrayPrototypeSome,
    TypedArrayPrototypeSort,
    TypedArrayPrototypeSubarray,
    TypedArrayPrototypeSymbolIterator,
    TypedArrayPrototypeToLocaleString,
    TypedArrayPrototypeToString,
    TypedArrayPrototypeValues,
    TypeError,
    TypeErrorLength,
    TypeErrorName,
    TypeErrorPrototype,
    TypeErrorPrototypeMessage,
    TypeErrorPrototypeName,
    URIError,
    URIErrorLength,
    URIErrorName,
    URIErrorPrototype,
    URIErrorPrototypeMessage,
    URIErrorPrototypeName,
    URL,
    URLCreateObjectURL,
    URLRevokeObjectURL,
    Uint16Array,
    Uint16ArrayBYTES_PER_ELEMENT,
    Uint16ArrayLength,
    Uint16ArrayName,
    Uint16ArrayPrototype,
    Uint16ArrayPrototypeBYTES_PER_ELEMENT,
    Uint32Array,
    Uint32ArrayBYTES_PER_ELEMENT,
    Uint32ArrayLength,
    Uint32ArrayName,
    Uint32ArrayPrototype,
    Uint32ArrayPrototypeBYTES_PER_ELEMENT,
    Uint8Array,
    Uint8ArrayBYTES_PER_ELEMENT,
    Uint8ArrayLength,
    Uint8ArrayName,
    Uint8ArrayPrototype,
    Uint8ArrayPrototypeBYTES_PER_ELEMENT,
    Uint8ClampedArray,
    Uint8ClampedArrayBYTES_PER_ELEMENT,
    Uint8ClampedArrayLength,
    Uint8ClampedArrayName,
    Uint8ClampedArrayPrototype,
    Uint8ClampedArrayPrototypeBYTES_PER_ELEMENT,
    WeakMap,
    WeakMapLength,
    WeakMapName,
    WeakMapPrototype,
    WeakMapPrototypeDelete,
    WeakMapPrototypeGet,
    WeakMapPrototypeHas,
    WeakMapPrototypeSet,
    WeakMapPrototypeSymbolToStringTag,
    WeakRef,
    WeakRefLength,
    WeakRefName,
    WeakRefPrototype,
    WeakRefPrototypeDeref,
    WeakRefPrototypeSymbolToStringTag,
    WeakSet,
    WeakSetLength,
    WeakSetName,
    WeakSetPrototype,
    WeakSetPrototypeAdd,
    WeakSetPrototypeDelete,
    WeakSetPrototypeHas,
    WeakSetPrototypeSymbolToStringTag,
    makeSafe,
    SafeMap,
    SafeWeakMap,
    SafeSet,
    SafeWeakSet,
    SafeFinalizationRegistry,
    SafeWeakRef,
    SafePromise,
    //////
    // bonus: node core doesn't need to harden these, since it has internal
    // references to them, but it's very handy when dealing with scenarios
    // where process might get clobbered, as in tests and such.
    process: PROCESS,
    processCwd,
    processArgv,
    processExecArgv,
    processExecPath,
    processEnv,
    processArgv0,
    processPid,
    processPpid,
    processTitle,
    processVersion,
    processVersions,
    processArch,
    processPlatform,
    processRelease,
    processModuleLoadList,
    processFeatures,
    processNextTick,
    processAbort,
    processUmask,
    processsInitgroups,
    processSetgroups,
    processSetuid,
    processSetgid,
    processSeteuid,
    processSetegid,
    processSetSourceMapsEnabled,
    processSetUncaughtExceptionCaptureCallback,
    processHasUncaughtExceptionCaptureCallback,
    processEmitWarning,
    processDebugPort,
}), {
    // This is implemented as a setter/getter so that setting it will
    // actually take effect on the Error object, even if someone clobbered
    // Error.stackTraceLimit with a sneaky getter/setter. Of course, if
    // they've made it configurable:false, we're still hosed.
    ErrorStackTraceLimit: {
        enumerable: true,
        get: () => SafeReflect.getOwnPropertyDescriptor(Error, 'stackTraceLimit')
            ?.value,
        set: (value) => {
            SafeReflect.defineProperty(Error, 'stackTraceLimit', {
                value,
                enumerable: true,
                writable: true,
                configurable: true,
            });
        },
    },
    processReport: {
        enumerable: true,
        get: () => uncurryGetter(PROCESS, 'report')(ogProcess),
    },
    processExitCode: {
        enumerable: true,
        get: () => {
            const desc = SafeReflect.getOwnPropertyDescriptor(ogProcess, 'exitCode');
            // changed in node 19
            /* c8 ignore start */
            if (desc?.get)
                return uncurryThis(desc.get)(ogProcess);
            else
                return desc?.value;
            /* c8 ignore stop */
        },
        set: (value) => {
            const desc = SafeReflect.getOwnPropertyDescriptor(ogProcess, 'exitCode');
            // changed in node 19
            /* c8 ignore start */
            if (desc?.set)
                uncurryThis(desc.set)(ogProcess, value);
            else {
                SafeReflect.defineProperty(ogProcess, 'exitCode', {
                    ...desc,
                    value,
                });
            }
            /* c8 ignore stop */
        },
    },
    processStdin: {
        enumerable: true,
        get: () => uncurryGetter(ogProcess, 'stdin')(ogProcess),
    },
    processStdout: {
        enumerable: true,
        get: () => uncurryGetter(PROCESS, 'stdout')(ogProcess),
    },
    processStderr: {
        enumerable: true,
        get: () => uncurryGetter(PROCESS, 'stderr')(ogProcess),
    },
    processAllowedNodeEnvironmentFlags: {
        enumerable: true,
        get: () => uncurryGetter(PROCESS, 'allowedNodeEnvironmentFlags')(ogProcess),
    },
});
SafeObject.freeze(PRIMORDIALS);
exports.primordials = PRIMORDIALS;
//# sourceMappingURL=index.js.map