
"use strict";




const Void = Symbol("Void");
const Int32 = Symbol("Int32");
const Int64 = Symbol("Int64");
const Float = Symbol("Float");
const Double = Symbol("Double");


const GP = Symbol("GP");
const FP = Symbol("FP");


const Locked = Symbol("Locked");
const Spill = Symbol("Spill");


const Normal = Symbol("Normal");
const Rare = Symbol("Rare");


const Equal = Symbol("Equal");
const NotEqual = Symbol("NotEqual");
const Above = Symbol("Above");
const AboveOrEqual = Symbol("AboveOrEqual");
const Below = Symbol("Below");
const BelowOrEqual = Symbol("BelowOrEqual");
const GreaterThan = Symbol("GreaterThan");
const GreaterThanOrEqual = Symbol("GreaterThanOrEqual");
const LessThan = Symbol("LessThan");
const LessThanOrEqual = Symbol("LessThanOrEqual");

function relCondCode(cond)
{
    switch (cond) {
    case Equal:
        return 4;
    case NotEqual:
        return 5;
    case Above:
        return 7;
    case AboveOrEqual:
        return 3;
    case Below:
        return 2;
    case BelowOrEqual:
        return 6;
    case GreaterThan:
        return 15;
    case GreaterThanOrEqual:
        return 13;
    case LessThan:
        return 12;
    case LessThanOrEqual:
        return 14;
    default:
        throw new Error("Bad rel cond");
    }
}


const Overflow = Symbol("Overflow");
const Signed = Symbol("Signed");
const PositiveOrZero = Symbol("PositiveOrZero");
const Zero = Symbol("Zero");
const NonZero = Symbol("NonZero");

function resCondCode(cond)
{
    switch (cond) {
    case Overflow:
        return 0;
    case Signed:
        return 8;
    case PositiveOrZero:
        return 9;
    case Zero:
        return 4;
    case NonZero:
        return 5;
    default:
        throw new Error("Bad res cond: " + cond.toString());
    }
}


const DoubleEqual = Symbol("DoubleEqual");
const DoubleNotEqual = Symbol("DoubleNotEqual");
const DoubleGreaterThan = Symbol("DoubleGreaterThan");
const DoubleGreaterThanOrEqual = Symbol("DoubleGreaterThanOrEqual");
const DoubleLessThan = Symbol("DoubleLessThan");
const DoubleLessThanOrEqual = Symbol("DoubleLessThanOrEqual");
const DoubleEqualOrUnordered = Symbol("DoubleEqualOrUnordered");
const DoubleNotEqualOrUnordered = Symbol("DoubleNotEqualOrUnordered");
const DoubleGreaterThanOrUnordered = Symbol("DoubleGreaterThanOrUnordered");
const DoubleGreaterThanOrEqualOrUnordered = Symbol("DoubleGreaterThanOrEqualOrUnordered");
const DoubleLessThanOrUnordered = Symbol("DoubleLessThanOrUnordered");
const DoubleLessThanOrEqualOrUnordered = Symbol("DoubleLessThanOrEqualOrUnordered");

function doubleCondCode(cond)
{
    const bitInvert = 0x10;
    const bitSpecial = 0x20;
    switch (cond) {
    case DoubleEqual:
        return 4 | bitSpecial;
    case DoubleNotEqual:
        return 5;
    case DoubleGreaterThan:
        return 7;
    case DoubleGreaterThanOrEqual:
        return 3;
    case DoubleLessThan:
        return 7 | bitInvert;
    case DoubleLessThanOrEqual:
        return 3 | bitInvert;
    case DoubleEqualOrUnordered:
        return 4;
    case DoubleNotEqualOrUnordered:
        return 5 | bitSpecial;
    case DoubleGreaterThanOrUnordered:
        return 2 | bitInvert;
    case DoubleGreaterThanOrEqualOrUnordered:
        return 6 | bitInvert;
    case DoubleLessThanOrUnordered:
        return 2;
    case DoubleLessThanOrEqualOrUnordered:
        return 6;
    default:
        throw new Error("Bad cond");
    }
}


const Ptr = 64;
