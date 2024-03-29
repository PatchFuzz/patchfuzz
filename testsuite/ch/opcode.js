"use strict";

const Nop = Symbol("Nop");
const Add32 = Symbol("Add32");
const Add8 = Symbol("Add8");
const Add16 = Symbol("Add16");
const Add64 = Symbol("Add64");
const AddDouble = Symbol("AddDouble");
const AddFloat = Symbol("AddFloat");
const Sub32 = Symbol("Sub32");
const Sub64 = Symbol("Sub64");
const SubDouble = Symbol("SubDouble");
const SubFloat = Symbol("SubFloat");
const Neg32 = Symbol("Neg32");
const Neg64 = Symbol("Neg64");
const NegateDouble = Symbol("NegateDouble");
const Mul32 = Symbol("Mul32");
const Mul64 = Symbol("Mul64");
const MultiplyAdd32 = Symbol("MultiplyAdd32");
const MultiplyAdd64 = Symbol("MultiplyAdd64");
const MultiplySub32 = Symbol("MultiplySub32");
const MultiplySub64 = Symbol("MultiplySub64");
const MultiplyNeg32 = Symbol("MultiplyNeg32");
const MultiplyNeg64 = Symbol("MultiplyNeg64");
const Div32 = Symbol("Div32");
const Div64 = Symbol("Div64");
const MulDouble = Symbol("MulDouble");
const MulFloat = Symbol("MulFloat");
const DivDouble = Symbol("DivDouble");
const DivFloat = Symbol("DivFloat");
const X86ConvertToDoubleWord32 = Symbol("X86ConvertToDoubleWord32");
const X86ConvertToQuadWord64 = Symbol("X86ConvertToQuadWord64");
const X86Div32 = Symbol("X86Div32");
const X86Div64 = Symbol("X86Div64");
const Lea = Symbol("Lea");
const And32 = Symbol("And32");
const And64 = Symbol("And64");
const AndDouble = Symbol("AndDouble");
const AndFloat = Symbol("AndFloat");
const XorDouble = Symbol("XorDouble");
const XorFloat = Symbol("XorFloat");
const Lshift32 = Symbol("Lshift32");
const Lshift64 = Symbol("Lshift64");
const Rshift32 = Symbol("Rshift32");
const Rshift64 = Symbol("Rshift64");
const Urshift32 = Symbol("Urshift32");
const Urshift64 = Symbol("Urshift64");
const Or32 = Symbol("Or32");
const Or64 = Symbol("Or64");
const Xor32 = Symbol("Xor32");
const Xor64 = Symbol("Xor64");
const Not32 = Symbol("Not32");
const Not64 = Symbol("Not64");
const AbsDouble = Symbol("AbsDouble");
const AbsFloat = Symbol("AbsFloat");
const CeilDouble = Symbol("CeilDouble");
const CeilFloat = Symbol("CeilFloat");
const FloorDouble = Symbol("FloorDouble");
const FloorFloat = Symbol("FloorFloat");
const SqrtDouble = Symbol("SqrtDouble");
const SqrtFloat = Symbol("SqrtFloat");
const ConvertInt32ToDouble = Symbol("ConvertInt32ToDouble");
const ConvertInt64ToDouble = Symbol("ConvertInt64ToDouble");
const ConvertInt32ToFloat = Symbol("ConvertInt32ToFloat");
const ConvertInt64ToFloat = Symbol("ConvertInt64ToFloat");
const CountLeadingZeros32 = Symbol("CountLeadingZeros32");
const CountLeadingZeros64 = Symbol("CountLeadingZeros64");
const ConvertDoubleToFloat = Symbol("ConvertDoubleToFloat");
const ConvertFloatToDouble = Symbol("ConvertFloatToDouble");
const Move = Symbol("Move");
const Swap32 = Symbol("Swap32");
const Swap64 = Symbol("Swap64");
const Move32 = Symbol("Move32");
const StoreZero32 = Symbol("StoreZero32");
const SignExtend32ToPtr = Symbol("SignExtend32ToPtr");
const ZeroExtend8To32 = Symbol("ZeroExtend8To32");
const SignExtend8To32 = Symbol("SignExtend8To32");
const ZeroExtend16To32 = Symbol("ZeroExtend16To32");
const SignExtend16To32 = Symbol("SignExtend16To32");
const MoveFloat = Symbol("MoveFloat");
const MoveDouble = Symbol("MoveDouble");
const MoveZeroToDouble = Symbol("MoveZeroToDouble");
const Move64ToDouble = Symbol("Move64ToDouble");
const Move32ToFloat = Symbol("Move32ToFloat");
const MoveDoubleTo64 = Symbol("MoveDoubleTo64");
const MoveFloatTo32 = Symbol("MoveFloatTo32");
const Load8 = Symbol("Load8");
const Store8 = Symbol("Store8");
const Load8SignedExtendTo32 = Symbol("Load8SignedExtendTo32");
const Load16 = Symbol("Load16");
const Load16SignedExtendTo32 = Symbol("Load16SignedExtendTo32");
const Store16 = Symbol("Store16");
const Compare32 = Symbol("Compare32");
const Compare64 = Symbol("Compare64");
const Test32 = Symbol("Test32");
const Test64 = Symbol("Test64");
const CompareDouble = Symbol("CompareDouble");
const CompareFloat = Symbol("CompareFloat");
const Branch8 = Symbol("Branch8");
const Branch32 = Symbol("Branch32");
const Branch64 = Symbol("Branch64");
const BranchTest8 = Symbol("BranchTest8");
const BranchTest32 = Symbol("BranchTest32");
const BranchTest64 = Symbol("BranchTest64");
const BranchDouble = Symbol("BranchDouble");
const BranchFloat = Symbol("BranchFloat");
const BranchAdd32 = Symbol("BranchAdd32");
const BranchAdd64 = Symbol("BranchAdd64");
const BranchMul32 = Symbol("BranchMul32");
const BranchMul64 = Symbol("BranchMul64");
const BranchSub32 = Symbol("BranchSub32");
const BranchSub64 = Symbol("BranchSub64");
const BranchNeg32 = Symbol("BranchNeg32");
const BranchNeg64 = Symbol("BranchNeg64");
const MoveConditionally32 = Symbol("MoveConditionally32");
const MoveConditionally64 = Symbol("MoveConditionally64");
const MoveConditionallyTest32 = Symbol("MoveConditionallyTest32");
const MoveConditionallyTest64 = Symbol("MoveConditionallyTest64");
const MoveConditionallyDouble = Symbol("MoveConditionallyDouble");
const MoveConditionallyFloat = Symbol("MoveConditionallyFloat");
const MoveDoubleConditionally32 = Symbol("MoveDoubleConditionally32");
const MoveDoubleConditionally64 = Symbol("MoveDoubleConditionally64");
const MoveDoubleConditionallyTest32 = Symbol("MoveDoubleConditionallyTest32");
const MoveDoubleConditionallyTest64 = Symbol("MoveDoubleConditionallyTest64");
const MoveDoubleConditionallyDouble = Symbol("MoveDoubleConditionallyDouble");
const MoveDoubleConditionallyFloat = Symbol("MoveDoubleConditionallyFloat");
const Jump = Symbol("Jump");
const Ret32 = Symbol("Ret32");
const Ret64 = Symbol("Ret64");
const RetFloat = Symbol("RetFloat");
const RetDouble = Symbol("RetDouble");
const Oops = Symbol("Oops");
const Shuffle = Symbol("Shuffle");
const Patch = Symbol("Patch");
const CCall = Symbol("CCall");
const ColdCCall = Symbol("ColdCCall");
function Inst_forEachArg(inst, func)
{
    let replacement;
    switch (inst.opcode) {
    case Nop:
        break;
        break;
    case Add32:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.ZDef, GP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.UseZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Add8:
        inst.visitArg(0, func, Arg.Use, GP, 8);
        inst.visitArg(1, func, Arg.UseDef, GP, 8);
        break;
        break;
    case Add16:
        inst.visitArg(0, func, Arg.Use, GP, 16);
        inst.visitArg(1, func, Arg.UseDef, GP, 16);
        break;
        break;
    case Add64:
        switch (inst.args.length) {
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.UseDef, GP, 64);
            break;
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.Def, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case AddDouble:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.Use, FP, 64);
            inst.visitArg(2, func, Arg.Def, FP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.UseDef, FP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case AddFloat:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.Use, FP, 32);
            inst.visitArg(2, func, Arg.Def, FP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.UseDef, FP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Sub32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.UseZDef, GP, 32);
        break;
        break;
    case Sub64:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        inst.visitArg(1, func, Arg.UseDef, GP, 64);
        break;
        break;
    case SubDouble:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.Use, FP, 64);
            inst.visitArg(2, func, Arg.Def, FP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.UseDef, FP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case SubFloat:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.Use, FP, 32);
            inst.visitArg(2, func, Arg.Def, FP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.UseDef, FP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Neg32:
        inst.visitArg(0, func, Arg.UseZDef, GP, 32);
        break;
        break;
    case Neg64:
        inst.visitArg(0, func, Arg.UseDef, GP, 64);
        break;
        break;
    case NegateDouble:
        inst.visitArg(0, func, Arg.Use, FP, 64);
        inst.visitArg(1, func, Arg.Def, FP, 64);
        break;
        break;
    case Mul32:
        switch (inst.args.length) {
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.UseZDef, GP, 32);
            break;
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.ZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Mul64:
        switch (inst.args.length) {
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.UseDef, GP, 64);
            break;
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.Def, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case MultiplyAdd32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.Use, GP, 32);
        inst.visitArg(3, func, Arg.ZDef, GP, 32);
        break;
        break;
    case MultiplyAdd64:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.Use, GP, 64);
        inst.visitArg(3, func, Arg.Def, GP, 64);
        break;
        break;
    case MultiplySub32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.Use, GP, 32);
        inst.visitArg(3, func, Arg.ZDef, GP, 32);
        break;
        break;
    case MultiplySub64:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.Use, GP, 64);
        inst.visitArg(3, func, Arg.Def, GP, 64);
        break;
        break;
    case MultiplyNeg32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.ZDef, GP, 32);
        break;
        break;
    case MultiplyNeg64:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.ZDef, GP, 64);
        break;
        break;
    case Div32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.ZDef, GP, 32);
        break;
        break;
    case Div64:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.Def, GP, 64);
        break;
        break;
    case MulDouble:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.Use, FP, 64);
            inst.visitArg(2, func, Arg.Def, FP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.UseDef, FP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case MulFloat:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.Use, FP, 32);
            inst.visitArg(2, func, Arg.Def, FP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.UseDef, FP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case DivDouble:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.Use, FP, 32);
            inst.visitArg(2, func, Arg.Def, FP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.UseDef, FP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case DivFloat:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.Use, FP, 32);
            inst.visitArg(2, func, Arg.Def, FP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.UseDef, FP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case X86ConvertToDoubleWord32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case X86ConvertToQuadWord64:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        inst.visitArg(1, func, Arg.Def, GP, 64);
        break;
        break;
    case X86Div32:
        inst.visitArg(0, func, Arg.UseZDef, GP, 32);
        inst.visitArg(1, func, Arg.UseZDef, GP, 32);
        inst.visitArg(2, func, Arg.Use, GP, 32);
        break;
        break;
    case X86Div64:
        inst.visitArg(0, func, Arg.UseZDef, GP, 64);
        inst.visitArg(1, func, Arg.UseZDef, GP, 64);
        inst.visitArg(2, func, Arg.Use, GP, 64);
        break;
        break;
    case Lea:
        inst.visitArg(0, func, Arg.UseAddr, GP, Ptr);
        inst.visitArg(1, func, Arg.Def, GP, Ptr);
        break;
        break;
    case And32:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.ZDef, GP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.UseZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case And64:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.Def, GP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.UseDef, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case AndDouble:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.Use, FP, 64);
            inst.visitArg(2, func, Arg.Def, FP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.UseDef, FP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case AndFloat:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.Use, FP, 32);
            inst.visitArg(2, func, Arg.Def, FP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.UseDef, FP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case XorDouble:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.Use, FP, 64);
            inst.visitArg(2, func, Arg.Def, FP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 64);
            inst.visitArg(1, func, Arg.UseDef, FP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case XorFloat:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.Use, FP, 32);
            inst.visitArg(2, func, Arg.Def, FP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, FP, 32);
            inst.visitArg(1, func, Arg.UseDef, FP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Lshift32:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.ZDef, GP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.UseZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Lshift64:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.ZDef, GP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.UseDef, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Rshift32:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.ZDef, GP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.UseZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Rshift64:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.ZDef, GP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.UseDef, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Urshift32:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.ZDef, GP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.UseZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Urshift64:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.ZDef, GP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.UseDef, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Or32:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.ZDef, GP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.UseZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Or64:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.Def, GP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.UseDef, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Xor32:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.ZDef, GP, 32);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.UseZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Xor64:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.Def, GP, 64);
            break;
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.UseDef, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Not32:
        switch (inst.args.length) {
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.ZDef, GP, 32);
            break;
        case 1:
            inst.visitArg(0, func, Arg.UseZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case Not64:
        switch (inst.args.length) {
        case 2:
            inst.visitArg(0, func, Arg.Use, GP, 64);
            inst.visitArg(1, func, Arg.Def, GP, 64);
            break;
        case 1:
            inst.visitArg(0, func, Arg.UseDef, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case AbsDouble:
        inst.visitArg(0, func, Arg.Use, FP, 64);
        inst.visitArg(1, func, Arg.Def, FP, 64);
        break;
        break;
    case AbsFloat:
        inst.visitArg(0, func, Arg.Use, FP, 32);
        inst.visitArg(1, func, Arg.Def, FP, 32);
        break;
        break;
    case CeilDouble:
        inst.visitArg(0, func, Arg.Use, FP, 64);
        inst.visitArg(1, func, Arg.Def, FP, 64);
        break;
        break;
    case CeilFloat:
        inst.visitArg(0, func, Arg.Use, FP, 32);
        inst.visitArg(1, func, Arg.Def, FP, 32);
        break;
        break;
    case FloorDouble:
        inst.visitArg(0, func, Arg.Use, FP, 64);
        inst.visitArg(1, func, Arg.Def, FP, 64);
        break;
        break;
    case FloorFloat:
        inst.visitArg(0, func, Arg.Use, FP, 32);
        inst.visitArg(1, func, Arg.Def, FP, 32);
        break;
        break;
    case SqrtDouble:
        inst.visitArg(0, func, Arg.Use, FP, 64);
        inst.visitArg(1, func, Arg.Def, FP, 64);
        break;
        break;
    case SqrtFloat:
        inst.visitArg(0, func, Arg.Use, FP, 32);
        inst.visitArg(1, func, Arg.Def, FP, 32);
        break;
        break;
    case ConvertInt32ToDouble:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Def, FP, 64);
        break;
        break;
    case ConvertInt64ToDouble:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        inst.visitArg(1, func, Arg.Def, FP, 64);
        break;
        break;
    case ConvertInt32ToFloat:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Def, FP, 32);
        break;
        break;
    case ConvertInt64ToFloat:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        inst.visitArg(1, func, Arg.Def, FP, 32);
        break;
        break;
    case CountLeadingZeros32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case CountLeadingZeros64:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        inst.visitArg(1, func, Arg.Def, GP, 64);
        break;
        break;
    case ConvertDoubleToFloat:
        inst.visitArg(0, func, Arg.Use, FP, 64);
        inst.visitArg(1, func, Arg.Def, FP, 32);
        break;
        break;
    case ConvertFloatToDouble:
        inst.visitArg(0, func, Arg.Use, FP, 32);
        inst.visitArg(1, func, Arg.Def, FP, 64);
        break;
        break;
    case Move:
        inst.visitArg(0, func, Arg.Use, GP, Ptr);
        inst.visitArg(1, func, Arg.Def, GP, Ptr);
        break;
        break;
    case Swap32:
        inst.visitArg(0, func, Arg.UseDef, GP, 32);
        inst.visitArg(1, func, Arg.UseDef, GP, 32);
        break;
        break;
    case Swap64:
        inst.visitArg(0, func, Arg.UseDef, GP, 64);
        inst.visitArg(1, func, Arg.UseDef, GP, 64);
        break;
        break;
    case Move32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case StoreZero32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        break;
        break;
    case SignExtend32ToPtr:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Def, GP, Ptr);
        break;
        break;
    case ZeroExtend8To32:
        inst.visitArg(0, func, Arg.Use, GP, 8);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case SignExtend8To32:
        inst.visitArg(0, func, Arg.Use, GP, 8);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case ZeroExtend16To32:
        inst.visitArg(0, func, Arg.Use, GP, 16);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case SignExtend16To32:
        inst.visitArg(0, func, Arg.Use, GP, 16);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case MoveFloat:
        inst.visitArg(0, func, Arg.Use, FP, 32);
        inst.visitArg(1, func, Arg.Def, FP, 32);
        break;
        break;
    case MoveDouble:
        inst.visitArg(0, func, Arg.Use, FP, 64);
        inst.visitArg(1, func, Arg.Def, FP, 64);
        break;
        break;
    case MoveZeroToDouble:
        inst.visitArg(0, func, Arg.Def, FP, 64);
        break;
        break;
    case Move64ToDouble:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        inst.visitArg(1, func, Arg.Def, FP, 64);
        break;
        break;
    case Move32ToFloat:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Def, FP, 32);
        break;
        break;
    case MoveDoubleTo64:
        inst.visitArg(0, func, Arg.Use, FP, 64);
        inst.visitArg(1, func, Arg.Def, GP, 64);
        break;
        break;
    case MoveFloatTo32:
        inst.visitArg(0, func, Arg.Use, FP, 32);
        inst.visitArg(1, func, Arg.Def, GP, 32);
        break;
        break;
    case Load8:
        inst.visitArg(0, func, Arg.Use, GP, 8);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case Store8:
        inst.visitArg(0, func, Arg.Use, GP, 8);
        inst.visitArg(1, func, Arg.Def, GP, 8);
        break;
        break;
    case Load8SignedExtendTo32:
        inst.visitArg(0, func, Arg.Use, GP, 8);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case Load16:
        inst.visitArg(0, func, Arg.Use, GP, 16);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case Load16SignedExtendTo32:
        inst.visitArg(0, func, Arg.Use, GP, 16);
        inst.visitArg(1, func, Arg.ZDef, GP, 32);
        break;
        break;
    case Store16:
        inst.visitArg(0, func, Arg.Use, GP, 16);
        inst.visitArg(1, func, Arg.Def, GP, 16);
        break;
        break;
    case Compare32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.Use, GP, 32);
        inst.visitArg(3, func, Arg.ZDef, GP, 32);
        break;
        break;
    case Compare64:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.Use, GP, 64);
        inst.visitArg(3, func, Arg.ZDef, GP, 32);
        break;
        break;
    case Test32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.Use, GP, 32);
        inst.visitArg(3, func, Arg.ZDef, GP, 32);
        break;
        break;
    case Test64:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.Use, GP, 64);
        inst.visitArg(3, func, Arg.ZDef, GP, 32);
        break;
        break;
    case CompareDouble:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, FP, 64);
        inst.visitArg(2, func, Arg.Use, FP, 64);
        inst.visitArg(3, func, Arg.ZDef, GP, 32);
        break;
        break;
    case CompareFloat:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, FP, 32);
        inst.visitArg(2, func, Arg.Use, FP, 32);
        inst.visitArg(3, func, Arg.ZDef, GP, 32);
        break;
        break;
    case Branch8:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 8);
        inst.visitArg(2, func, Arg.Use, GP, 8);
        break;
        break;
    case Branch32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.Use, GP, 32);
        break;
        break;
    case Branch64:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.Use, GP, 64);
        break;
        break;
    case BranchTest8:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 8);
        inst.visitArg(2, func, Arg.Use, GP, 8);
        break;
        break;
    case BranchTest32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.Use, GP, 32);
        break;
        break;
    case BranchTest64:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.Use, GP, 64);
        break;
        break;
    case BranchDouble:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, FP, 64);
        inst.visitArg(2, func, Arg.Use, FP, 64);
        break;
        break;
    case BranchFloat:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, FP, 32);
        inst.visitArg(2, func, Arg.Use, FP, 32);
        break;
        break;
    case BranchAdd32:
        switch (inst.args.length) {
        case 4:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.Use, GP, 32);
            inst.visitArg(3, func, Arg.ZDef, GP, 32);
            break;
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.UseZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case BranchAdd64:
        switch (inst.args.length) {
        case 4:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.Use, GP, 64);
            inst.visitArg(3, func, Arg.ZDef, GP, 64);
            break;
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.UseDef, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case BranchMul32:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.UseZDef, GP, 32);
            break;
        case 4:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.Use, GP, 32);
            inst.visitArg(3, func, Arg.ZDef, GP, 32);
            break;
        case 6:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.Use, GP, 32);
            inst.visitArg(3, func, Arg.Scratch, GP, 32);
            inst.visitArg(4, func, Arg.Scratch, GP, 32);
            inst.visitArg(5, func, Arg.ZDef, GP, 32);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case BranchMul64:
        switch (inst.args.length) {
        case 3:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.UseZDef, GP, 64);
            break;
        case 6:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.Use, GP, 64);
            inst.visitArg(3, func, Arg.Scratch, GP, 64);
            inst.visitArg(4, func, Arg.Scratch, GP, 64);
            inst.visitArg(5, func, Arg.ZDef, GP, 64);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case BranchSub32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.UseZDef, GP, 32);
        break;
        break;
    case BranchSub64:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.UseDef, GP, 64);
        break;
        break;
    case BranchNeg32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.UseZDef, GP, 32);
        break;
        break;
    case BranchNeg64:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.UseZDef, GP, 64);
        break;
        break;
    case MoveConditionally32:
        switch (inst.args.length) {
        case 5:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.Use, GP, 32);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.UseDef, GP, Ptr);
            break;
        case 6:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.Use, GP, 32);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.Use, GP, Ptr);
            inst.visitArg(5, func, Arg.Def, GP, Ptr);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case MoveConditionally64:
        switch (inst.args.length) {
        case 5:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.Use, GP, 64);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.UseDef, GP, Ptr);
            break;
        case 6:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.Use, GP, 64);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.Use, GP, Ptr);
            inst.visitArg(5, func, Arg.Def, GP, Ptr);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case MoveConditionallyTest32:
        switch (inst.args.length) {
        case 5:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.Use, GP, 32);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.UseDef, GP, Ptr);
            break;
        case 6:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.Use, GP, 32);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.Use, GP, Ptr);
            inst.visitArg(5, func, Arg.Def, GP, Ptr);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case MoveConditionallyTest64:
        switch (inst.args.length) {
        case 5:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 64);
            inst.visitArg(2, func, Arg.Use, GP, 64);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.UseDef, GP, Ptr);
            break;
        case 6:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, GP, 32);
            inst.visitArg(2, func, Arg.Use, GP, 32);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.Use, GP, Ptr);
            inst.visitArg(5, func, Arg.Def, GP, Ptr);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case MoveConditionallyDouble:
        switch (inst.args.length) {
        case 6:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, FP, 64);
            inst.visitArg(2, func, Arg.Use, FP, 64);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.Use, GP, Ptr);
            inst.visitArg(5, func, Arg.Def, GP, Ptr);
            break;
        case 5:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, FP, 64);
            inst.visitArg(2, func, Arg.Use, FP, 64);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.UseDef, GP, Ptr);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case MoveConditionallyFloat:
        switch (inst.args.length) {
        case 6:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, FP, 32);
            inst.visitArg(2, func, Arg.Use, FP, 32);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.Use, GP, Ptr);
            inst.visitArg(5, func, Arg.Def, GP, Ptr);
            break;
        case 5:
            inst.visitArg(0, func, Arg.Use, GP, 32);
            inst.visitArg(1, func, Arg.Use, FP, 32);
            inst.visitArg(2, func, Arg.Use, FP, 32);
            inst.visitArg(3, func, Arg.Use, GP, Ptr);
            inst.visitArg(4, func, Arg.UseDef, GP, Ptr);
            break;
        default:
            throw new Error("Bad overload");
            break;
        }
        break;
    case MoveDoubleConditionally32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.Use, GP, 32);
        inst.visitArg(3, func, Arg.Use, FP, 64);
        inst.visitArg(4, func, Arg.Use, FP, 64);
        inst.visitArg(5, func, Arg.Def, FP, 64);
        break;
        break;
    case MoveDoubleConditionally64:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.Use, GP, 64);
        inst.visitArg(3, func, Arg.Use, FP, 64);
        inst.visitArg(4, func, Arg.Use, FP, 64);
        inst.visitArg(5, func, Arg.Def, FP, 64);
        break;
        break;
    case MoveDoubleConditionallyTest32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 32);
        inst.visitArg(2, func, Arg.Use, GP, 32);
        inst.visitArg(3, func, Arg.Use, FP, 64);
        inst.visitArg(4, func, Arg.Use, FP, 64);
        inst.visitArg(5, func, Arg.Def, FP, 64);
        break;
        break;
    case MoveDoubleConditionallyTest64:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, GP, 64);
        inst.visitArg(2, func, Arg.Use, GP, 64);
        inst.visitArg(3, func, Arg.Use, FP, 64);
        inst.visitArg(4, func, Arg.Use, FP, 64);
        inst.visitArg(5, func, Arg.Def, FP, 64);
        break;
        break;
    case MoveDoubleConditionallyDouble:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, FP, 64);
        inst.visitArg(2, func, Arg.Use, FP, 64);
        inst.visitArg(3, func, Arg.Use, FP, 64);
        inst.visitArg(4, func, Arg.Use, FP, 64);
        inst.visitArg(5, func, Arg.Def, FP, 64);
        break;
        break;
    case MoveDoubleConditionallyFloat:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        inst.visitArg(1, func, Arg.Use, FP, 32);
        inst.visitArg(2, func, Arg.Use, FP, 32);
        inst.visitArg(3, func, Arg.Use, FP, 64);
        inst.visitArg(4, func, Arg.Use, FP, 64);
        inst.visitArg(5, func, Arg.Def, FP, 64);
        break;
        break;
    case Jump:
        break;
        break;
    case Ret32:
        inst.visitArg(0, func, Arg.Use, GP, 32);
        break;
        break;
    case Ret64:
        inst.visitArg(0, func, Arg.Use, GP, 64);
        break;
        break;
    case RetFloat:
        inst.visitArg(0, func, Arg.Use, FP, 32);
        break;
        break;
    case RetDouble:
        inst.visitArg(0, func, Arg.Use, FP, 64);
        break;
        break;
    case Oops:
        break;
        break;
    case Shuffle:
        ShuffleCustom.forEachArg(inst, func);
        break;
    case Patch:
        PatchCustom.forEachArg(inst, func);
        break;
    case CCall:
        CCallCustom.forEachArg(inst, func);
        break;
    case ColdCCall:
        ColdCCallCustom.forEachArg(inst, func);
        break;
    default:
        throw "Bad opcode";
    }
}
function Inst_hasNonArgEffects(inst)
{
    switch (inst.opcode) {
    case Branch8:
    case Branch32:
    case Branch64:
    case BranchTest8:
    case BranchTest32:
    case BranchTest64:
    case BranchDouble:
    case BranchFloat:
    case BranchAdd32:
    case BranchAdd64:
    case BranchMul32:
    case BranchMul64:
    case BranchSub32:
    case BranchSub64:
    case BranchNeg32:
    case BranchNeg64:
    case Jump:
    case Ret32:
    case Ret64:
    case RetFloat:
    case RetDouble:
    case Oops:
        return true;
    case Shuffle:
        return ShuffleCustom.hasNonArgNonControlEffects(inst);
    case Patch:
        return PatchCustom.hasNonArgNonControlEffects(inst);
    case CCall:
        return CCallCustom.hasNonArgNonControlEffects(inst);
    case ColdCCall:
        return ColdCCallCustom.hasNonArgNonControlEffects(inst);
    default:
        return false;
    }
}
function opcodeCode(opcode)
{
    switch (opcode) {
    case AbsDouble:
        return 0
    case AbsFloat:
        return 1
    case Add16:
        return 2
    case Add32:
        return 3
    case Add64:
        return 4
    case Add8:
        return 5
    case AddDouble:
        return 6
    case AddFloat:
        return 7
    case And32:
        return 8
    case And64:
        return 9
    case AndDouble:
        return 10
    case AndFloat:
        return 11
    case Branch32:
        return 12
    case Branch64:
        return 13
    case Branch8:
        return 14
    case BranchAdd32:
        return 15
    case BranchAdd64:
        return 16
    case BranchDouble:
        return 17
    case BranchFloat:
        return 18
    case BranchMul32:
        return 19
    case BranchMul64:
        return 20
    case BranchNeg32:
        return 21
    case BranchNeg64:
        return 22
    case BranchSub32:
        return 23
    case BranchSub64:
        return 24
    case BranchTest32:
        return 25
    case BranchTest64:
        return 26
    case BranchTest8:
        return 27
    case CCall:
        return 28
    case CeilDouble:
        return 29
    case CeilFloat:
        return 30
    case ColdCCall:
        return 31
    case Compare32:
        return 32
    case Compare64:
        return 33
    case CompareDouble:
        return 34
    case CompareFloat:
        return 35
    case ConvertDoubleToFloat:
        return 36
    case ConvertFloatToDouble:
        return 37
    case ConvertInt32ToDouble:
        return 38
    case ConvertInt32ToFloat:
        return 39
    case ConvertInt64ToDouble:
        return 40
    case ConvertInt64ToFloat:
        return 41
    case CountLeadingZeros32:
        return 42
    case CountLeadingZeros64:
        return 43
    case Div32:
        return 44
    case Div64:
        return 45
    case DivDouble:
        return 46
    case DivFloat:
        return 47
    case FloorDouble:
        return 48
    case FloorFloat:
        return 49
    case Jump:
        return 50
    case Lea:
        return 51
    case Load16:
        return 52
    case Load16SignedExtendTo32:
        return 53
    case Load8:
        return 54
    case Load8SignedExtendTo32:
        return 55
    case Lshift32:
        return 56
    case Lshift64:
        return 57
    case Move:
        return 58
    case Move32:
        return 59
    case Move32ToFloat:
        return 60
    case Move64ToDouble:
        return 61
    case MoveConditionally32:
        return 62
    case MoveConditionally64:
        return 63
    case MoveConditionallyDouble:
        return 64
    case MoveConditionallyFloat:
        return 65
    case MoveConditionallyTest32:
        return 66
    case MoveConditionallyTest64:
        return 67
    case MoveDouble:
        return 68
    case MoveDoubleConditionally32:
        return 69
    case MoveDoubleConditionally64:
        return 70
    case MoveDoubleConditionallyDouble:
        return 71
    case MoveDoubleConditionallyFloat:
        return 72
    case MoveDoubleConditionallyTest32:
        return 73
    case MoveDoubleConditionallyTest64:
        return 74
    case MoveDoubleTo64:
        return 75
    case MoveFloat:
        return 76
    case MoveFloatTo32:
        return 77
    case MoveZeroToDouble:
        return 78
    case Mul32:
        return 79
    case Mul64:
        return 80
    case MulDouble:
        return 81
    case MulFloat:
        return 82
    case MultiplyAdd32:
        return 83
    case MultiplyAdd64:
        return 84
    case MultiplyNeg32:
        return 85
    case MultiplyNeg64:
        return 86
    case MultiplySub32:
        return 87
    case MultiplySub64:
        return 88
    case Neg32:
        return 89
    case Neg64:
        return 90
    case NegateDouble:
        return 91
    case Nop:
        return 92
    case Not32:
        return 93
    case Not64:
        return 94
    case Oops:
        return 95
    case Or32:
        return 96
    case Or64:
        return 97
    case Patch:
        return 98
    case Ret32:
        return 99
    case Ret64:
        return 100
    case RetDouble:
        return 101
    case RetFloat:
        return 102
    case Rshift32:
        return 103
    case Rshift64:
        return 104
    case Shuffle:
        return 105
    case SignExtend16To32:
        return 106
    case SignExtend32ToPtr:
        return 107
    case SignExtend8To32:
        return 108
    case SqrtDouble:
        return 109
    case SqrtFloat:
        return 110
    case Store16:
        return 111
    case Store8:
        return 112
    case StoreZero32:
        return 113
    case Sub32:
        return 114
    case Sub64:
        return 115
    case SubDouble:
        return 116
    case SubFloat:
        return 117
    case Swap32:
        return 118
    case Swap64:
        return 119
    case Test32:
        return 120
    case Test64:
        return 121
    case Urshift32:
        return 122
    case Urshift64:
        return 123
    case X86ConvertToDoubleWord32:
        return 124
    case X86ConvertToQuadWord64:
        return 125
    case X86Div32:
        return 126
    case X86Div64:
        return 127
    case Xor32:
        return 128
    case Xor64:
        return 129
    case XorDouble:
        return 130
    case XorFloat:
        return 131
    case ZeroExtend16To32:
        return 132
    case ZeroExtend8To32:
        return 133
    default:
        throw new Error("bad opcode");
    }
}
