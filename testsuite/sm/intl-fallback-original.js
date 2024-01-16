


globalThis.Symbol = null;

const IntlFallbackSymbol =
        Object.getOwnPropertySymbols(
                Intl.DateTimeFormat.call(
                        Object.create(Intl.DateTimeFormat.prototype)))[0];
