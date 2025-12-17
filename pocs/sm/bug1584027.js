setTestFilenameValidationCallback();
evaluate("throw 2", {fileName: "\uDEFF"});
