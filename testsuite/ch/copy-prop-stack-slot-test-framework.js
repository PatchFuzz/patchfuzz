




(function (window) {
    
    
    
    var Utils = {};

    
    Utils.IE7STANDARDSMODE = 7;
    Utils.IE8STANDARDSMODE = 8;
    Utils.IE9STANDARDSMODE = 9;
    Utils.IE10STANDARDSMODE = 10;
    Utils.IE11STANDARDSMODE = 11;
    Utils.IE12STANDARDSMODE = 12;

    
    Utils.X86MODE = "x86";
    Utils.X64MODE = "x64";
    Utils.ARMMODE = "arm";

    Utils.getHOSTMode = function () {
        var documentMode = this.IE11STANDARDSMODE; 
        
        try {
            if ((document) && (document.documentMode)) {
                documentMode = document.documentMode;
            }
        } catch (ex) {
            
        }
        if (documentMode < 8)
            return this.IE7STANDARDSMODE;
        else if (documentMode == 8)
            return this.IE8STANDARDSMODE;
        else if (documentMode == 9)
            return this.IE9STANDARDSMODE;
        else if (documentMode == 10)
            return this.IE10STANDARDSMODE;
        else if (documentMode == 11 && typeof Math.hypot === "undefined") 
            return this.IE11STANDARDSMODE;
        else
            return this.IE12STANDARDSMODE;
    }

    var activeXInfo = {
        "WScript.Shell": {
            "clsid": "72C24DD5-D70A-438b-8A42-98424B88AFB8",
            "type": "application/x-shellscript"
        },
        "Loader42.Logger": {
            "clsid": "7CDFA963-4058-45AE-9061-D34614D83472",
            "type": "application/vns.ms-loader42loggerax"
        },
        "Scripting.FileSystemObject": {
            "clsid": "0D43FE01-F093-11cf-8940-00A0C9054228",
            "type": "application/x-filesystemobject"
        },
        "MutatorsHost.MutatorsActiveX": {
            "clsid": "ffafec7c-214c-4aab-b929-caa646777649",
            "type": "application/x-mutatorsactivex"
        },
        "apgloballib.apglobal": {
            "clsid": "CBFCDDC2-CDB1-3270-B9C5-FBE31729B041",
            "type": "application/x-apgloballib"
        },
        "Logger.Status": {
            "clsid": "712B2344-7A71-4242-B21C-AA728108EDD8",
            "type": "application/x-loggerstatus"
        },
        "WTTLogger.Logger": {
            "clsid": "FFC4E997-D97B-45DF-AD22-44C4B2DEDD2B",
            "type": "application/x-wttlogger"
        }
    };

    function createActiveXObject(progId) {
        var activeX;
        try {
            activeX = new ActiveXObject(progId);
        }
        catch (ex) {
            
            activeX = document.createElement("object");
            activeX.setAttribute('id', progId);
            activeX.setAttribute('type', activeXInfo[progId]["type"]);
            document.body.appendChild(activeX);
        }
        return activeX;
    }

    Utils.IEMatchesArch = function () {
        if (this.getProcessorArchitecture() != this.X64MODE) {
            return true;
        }
        if (this.runWow64()) {
            return this.getIEArchitecture() == this.X86MODE;
        }
        else {
            return this.getIEArchitecture() == this.X64MODE;
        }
    }

    Utils.getProcessorArchitecture = function () {
        try {
            var GetEnvVariable = function (variable) {
                var wscriptShell = createActiveXObject("WScript.Shell");
                var wshEnvironment = wscriptShell.Environment("System");
                return wshEnvironment(variable);
            }
            var result = GetEnvVariable("PROCESSOR_ARCHITECTURE");
            if (result != null) {
                result = result.toUpperCase();
            }
            if (result === "AMD64") {
                return this.X64MODE;
            }
            else if (result === "X86") {
                return this.X86MODE;
            }
            else if (result === "ARM") {
                return this.ARMMODE;
            }
        }
        catch (e) {
            throw new Error("[getProcessorArchitecture] Failed to retrieve environment variable. " + e.Message);
        }
    }
    
    Utils.getIEArchitecture = function () {
        if (typeof navigator === 'undefined') {
            return this.X64MODE;
        }
        
        
        var mode = navigator.userAgent;
        var arr_mode = mode.toLowerCase().split(";");

        for (var i = 0; i < arr_mode.length; i++) {
            if (arr_mode[i] === " wow64") {
                return this.X86MODE;
            }
            else if (arr_mode[i] === " x64") {
                return this.X64MODE;
            }
            else if (arr_mode[i] === " arm") {
                for (var j = i + 1; j < arr_mode.length; j++) {
                    if (arr_mode[j] === " virtual)")
                        return X86MODE;
                }
                return this.ARMMODE;
            }
        }
        
        return this.X86MODE;
    }

    Utils.runWow64 = function () {
        try {
            var GetEnvVariable = function (variable) {
                var wscriptShell = createActiveXObject("WScript.Shell");
                var wshEnvironment = wscriptShell.Environment("Process");
                return wshEnvironment(variable);
            }
            var result = GetEnvVariable("NightlyWow64");
            if (result === "1") {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            throw new Error("[runWow64] Failed to retrieve environment variable. " + e.Message);
        }
    }

    
    Utils.getLocalizedError = function (ID, _default, substitution) {
        if (_default) {
            return _default;
        }
        if (substitution == undefined) {
            var localizedString = apGlobalObj.apGetLocalizedString(ID);
        } else {
            var localizedString = apGlobalObj.apGetLocalizedStringWithSubstitution(ID, substitution);
        }
        return localizedString;
    }

    
    Utils.getMaxInterpretCount = function () {
        try {
            var GetEnvVariable = function (variable) {
                var wscriptShell = createActiveXObject("WScript.Shell");
                var wshEnvironment = wscriptShell.Environment("Process");
                return wshEnvironment(variable);
            }
            var result = GetEnvVariable("MaxInterpretCount");
            if (result === "")
                return 0;
            else
                return Math.floor(result);
        }
        catch (e) {
            return 0;
        }
    }
    
    
    
    
    
    var loggers = [];
    function WTTLogger() {
        var WTT_TRACE_LVL_MSG = 0x10000000;
        var WTT_TRACE_LVL_USER = 0x20000000;

        var WTT_TRACE_LVL_ERR = 0x01000000;
        var WTT_TRACE_LVL_ASSERT = 0x02000000;
        var WTT_TRACE_LVL_INVALID_PARAM = 0x04000000;
        var WTT_TRACE_LVL_BUG = 0x08000000;

        var WTT_TRACE_LVL_BREAK = 0x00100000;
        var WTT_TRACE_LVL_WARN = 0x00200000;

        var WTT_TRACE_LVL_FUNCTION_ENTRY = 0x00010000;
        var WTT_TRACE_LVL_FUNCTION_EXIT = 0x00020000;
        var WTT_TRACE_LVL_CONTEXT_ENTRY = 0x00040000;
        var WTT_TRACE_LVL_CONTEXT_EXIT = 0x00080000;

        var WTT_TRACE_LVL_START_TEST = 0x0100;
        var WTT_TRACE_LVL_END_TEST = 0x0200;
        var WTT_TRACE_LVL_TCMINFO = 0x0400;
        var WTT_TRACE_LVL_MACHINEINFO = 0x0800;

        var WTT_TRACE_LVL_ROLLUP = 0x0010;

        var WTT_ERROR_TYPE_HRESULT = 0x1;
        var WTT_ERROR_TYPE_NTSTATUS = 0x2;
        var WTT_ERROR_TYPE_WIN32 = 0x4;
        var WTT_ERROR_TYPE_BOOL = 0x8;

        var WTT_ERROR_LIST_EXPECTED = 0x1;
        var WTT_ERROR_LIST_BREAKON = 0x2;

        var WTT_TC_RESULT_PASS = 0x1;
        var WTT_TC_RESULT_FAIL = 0x2;
        var WTT_TC_RESULT_BLOCKED = 0x3;
        var WTT_TC_RESULT_WARN = 0x4;
        var WTT_TC_RESULT_SKIPPED = 0x5;

        var WTT_BUG_TYPE_BLOCKING = 0x1;
        var WTT_BUG_TYPE_NONBLOCKING = 0x2;

        var loggerObj = createActiveXObject("WTTLogger.Logger");
        var logHandle;
        var wwahostTimeout = 1000;
        var maxMsgSize = 3000; 

        this.start = function (filename, priority) {
            logHandle = loggerObj.CreateLogDevice(null);
            loggerObj.Trace(WTT_TRACE_LVL_MSG, logHandle, "Running " + filename);
        }

        this.testStart = function (test) {
            loggerObj.StartTest(test.desc, logHandle);
        }

        this.verify = function (test, passed, act, exp, msg) {
            if (!passed)
                loggerObj.Trace(WTT_TRACE_LVL_MSG, logHandle, "Failed - Act: " + act + ", Exp: " + exp + ":" + msg);
        }

        this.pass = function (test) {
            loggerObj.EndTest(test.desc, WTT_TC_RESULT_PASS, "", logHandle);
        }

        this.fail = function (test) {
            loggerObj.EndTest(test.desc, WTT_TC_RESULT_FAIL, "", logHandle);
        }

        this.error = function (test, error) {
            loggerObj.Trace(WTT_TRACE_LVL_MSG, logHandle, "Error: " + error.name + " - " + error.description);
            loggerObj.EndTest(test.desc, WTT_TC_RESULT_FAIL, "", logHandle);
        }

        this.end = function () {
            loggerObj.CloseLogDevice("", logHandle);
        }

        this.comment = function (str) {
            var msg = str.toString().substring(0, maxMsgSize);
            loggerObj.Trace(WTT_TRACE_LVL_MSG, logHandle, msg);
        }

        this.bug = function (number, msg, db) {
            db = db || "Windows 8 Bugs";
            loggerObj.Trace(WTT_TRACE_LVL_BUG, logHandle, db, number, WTT_BUG_TYPE_BLOCKING);
            this.comment(msg);
        }
    }

    WTTLogger.shouldEnable = function () {
        try {
            var test = createActiveXObject("WTTLogger.Logger");
            return true;
        } catch (e) {
            return false;
        }
    }

    loggers.push(WTTLogger);
    
    
    
    

    function HTMLLogger() {
        var resultsContainer;
        var testProgress = [];
        var results = [];
        var domReady = false;
        var summaryTable;
        var passes = 0;
        var failures = 0;
        var failureList = [];
        var executingTest = false;
        var done = false;
        var loggerInstance = this;
        var filename;
        var priority;
        var verifies = 0;

        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", whenDomReady, false);
        } else {
            setTimeout(waitForDomReady, 1);
        }

        function waitForDomReady() {
            
            
            try {
                document.documentElement.doScroll("left");
            }
            catch (e) {
                
                setTimeout(waitForDomReady, 1);
                return;
            }
            whenDomReady();
        }

        function whenDomReady() {
            domReady = true;
            insertStyles();
            setupMutators();
            createSummaryTable();
            createCheckBox();
            setupTable();
            printResults();
        }

        
        function insertStyles() {
            var css = [
            "body{font-family:'Segoe UI';font-size:1em}",
            "table{border-collapse:collapse;padding:0;margin:0}",
            "table td,table th{padding:3px}",
            "table tr.test_result td.result{border:1px solid #000;border-right:none}",
            "table tr.test_result td.details{border:1px solid #000;border-left:none}",
            "table td.result{font-size:2em;font-family:'Segoe UI Semibold';text-align:center;padding:3px 20px}",
            "table tr.pass td.result{background-color:#c3d69b}",
            "table tr.fail td.result{background-color:#d99694}",
            "table tr.error td.result{background-color:#d99694}",
            "table tr.bug td.result{background-color:#ffefbb}",
            "table tr.comment td.result, table tr.comment td.details {font-size:1em;text-align:left;}",
            "table td.details{padding:0px}",
            "table td.details table{width:100%;height:100%;}",
            "table tr.pass td.details th{background-color:#c3d69b}",
            "table tr.fail td.details th{background-color:#d99694}",
            "table tr.error td.details th{background-color:#d99694}",
            "table tr.hidden {display:none;}",
            "table td.details tr.detail_pass{background-color:#ebf1dd}",
            "table td.details tr.detail_fail{background-color:#f2dcdb}",
            "table td.details tr.detail_comment{background-color:#f2ffe9;}",
            "table td.details tr.detail_comment td{padding: 10px 20px;}",
            "table td.details tr.detail_comment td.detail_result{font-family:'Segoe UI Semibold';}",
            "table td.details tr.detail_bug{background-color:#ffefbb;}",
            "table td.details tr.detail_bug td{padding: 10px 20px;}",
            "table td.details tr.detail_bug td.detail_result{font-family:'Segoe UI Semibold';}",
            "table td.details th{font-size:1.1em;font-weight:normal;font-family:'Segoe UI Semibold';text-align:left}",
            "table td.details table td{padding:3px 20px}",
            "table td.details table td.error_message{background-color:#d99694;padding:3px}",
            "table td.details td.detail_message{width:95%}",
            "table td.details td.detail_result{width:5%}",
            "#results_summary{margin-bottom:1em;font-size:1.5em;}",
            "div.mutators { float: right }",
            "#results_summary td{padding:0 20px;}"];

            
            var style = document.createElement('style');
            style.type = 'text/css';
            style.rel = 'stylesheet';
            style.media = 'screen';

            
            document.getElementsByTagName("head")[0].appendChild(style);

            
            var stylesheet = document.styleSheets[document.styleSheets.length - 1];

            
            
            if (typeof stylesheet.cssText == "string")
                document.styleSheets[document.styleSheets.length - 1].cssText = css.join('');
            else
                for (var i = 0; i < css.length; i++)
                    stylesheet.insertRule(css[i], i);
        }

        
        function replaceAngleBrackets(text) {
            if (text == undefined)
                return "";
            if (text.replace == undefined)
                return text;
            return text.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/\n/g, '<br/>')
                   .replace(/\s/g, '&nbsp;');
        }

        
        function setupTable() {
            var masterTable = document.createElement("table");
            var body = document.createElement("tbody");
            masterTable.appendChild(body);
            document.body.appendChild(masterTable);

            resultsContainer = body;
        }

        
        function setupMutators() {
            function applyMutator(e) {
                
                if (typeof e === "undefined")
                    e = window.event;

                var target = (typeof e.target === "undefined") ? e.srcElement : e.target;

                if (target.value === "")
                    runner.mutators = [];
                else
                    runner.mutators = [target.value];

                
                loggerInstance.clear();
                Run();
            }

            try {
                if (typeof mutator === "undefined") {
                    
                    mutator = createActiveXObject("MutatorsHost.MutatorsActiveX");
                }
            } catch (e) {
                return
            }

            var mutators = mutator.GetMutatorsList().split(",");

            
            var select = document.createElement("select");
            select.appendChild(document.createElement("option"));
            for (var i = 0; i < mutators.length; i++) {
                option = document.createElement("option");
                option.innerHTML = mutators[i];
                option.value = mutators[i];
                select.appendChild(option);
            }

            select.onchange = applyMutator;

            
            var container = document.createElement("div");
            var label = document.createElement("label");
            label.innerHTML = "Mutate With: ";
            label.appendChild(select);
            container.appendChild(label);
            container.setAttribute("class", "mutators");

            document.body.appendChild(container);
        }
        
        function addResult(type, result, test, testProgress, error) {
            results.push({
                type: type,
                result: result,
                test: test,
                testProgress: testProgress,
                error: error
            });

            if (domReady)
                printResults();
        }

        
        
        
        function printResults() {
            while (results.length > 0) {
                var result = results.shift();
                if (result.type === "comment" || result.type === "bug")
                    addRow(result);
                else
                    addResultRow(result.result, result.test, result.testProgress, result.error);
            }
        }
        
        function addRow(result) {
            var comment = result.result;
            var row = resultsContainer.insertRow(-1);
            var res = row.insertCell(-1);
            var details = row.insertCell(-1);

            res.innerHTML = replaceAngleBrackets(result.type);
            details.innerHTML = replaceAngleBrackets(comment);

            row.className = result.type.toLowerCase();
            res.className = "result";
        }
        
        function addResultRow(result, test, testProgress, error) {
            var row = resultsContainer.insertRow(-1);
            var res = row.insertCell(-1);
            var details = row.insertCell(-1);

            res.innerHTML = result.toUpperCase();

            row.className = "test_result " + result;
            res.className = "result";
            details.className = "details";

            var detailsTable = constructDetailsTable(test, testProgress, error);
            details.appendChild(detailsTable);
        }

        
        
        function constructDetailsTable(test, testProgress, error) {
            var table = document.createElement('table');
            var body, row, cell, text, msgCell;

            
            body = document.createElement("tbody");
            row = document.createElement("tr");
            cell = document.createElement("th");
            cell.innerHTML = replaceAngleBrackets(test.id + ": " + test.desc);
            cell.setAttribute("colSpan", "2");
            row.appendChild(cell);
            body.appendChild(row);

            
            if (typeof error != "undefined") {
                row = document.createElement("tr");
                cell = document.createElement("td");
                cell.innerHTML = error.name + ": " + error.message;
                cell.setAttribute("colSpan", "2");
                cell.className = "error_message";
                row.appendChild(cell);
                body.appendChild(row);
            }


            
            var assertionResult;
            for (var i = 0; i < testProgress.length; i++) {
                if (testProgress[i].type === 'comment')
                    assertionResult = "comment";
                else if (testProgress[i].type === 'bug')
                    assertionResult = "bug";
                else if (testProgress[i].passed)
                    assertionResult = "pass";
                else
                    assertionResult = "fail";

                row = document.createElement("tr");
                row.className = "detail_" + assertionResult;

                if (testProgress[i].passed)
                    row.className += " hidden";
                cell = document.createElement("td");
                cell.className = "detail_result";
                msgCell = document.createElement("td");
                msgCell.className = "detail_message";

                cell.innerHTML = replaceAngleBrackets(assertionResult);
                msgCell.innerHTML = replaceAngleBrackets(testProgress[i].message);

                if (testProgress[i].type !== 'comment' && testProgress[i].type !== 'bug') {
                    if (!testProgress[i].passed) {
                        msgCell.innerHTML += "<br>Expected: " + testProgress[i].expected;
                        msgCell.innerHTML += "<br>Actual: " + testProgress[i].actual;
                    }
                }
                row.appendChild(cell);
                row.appendChild(msgCell);
                body.appendChild(row);
            }

            table.appendChild(body);
            return table;
        }

        function createSummaryTable() {
            var table = document.createElement("table");
            table.id = "results_summary";
            var row = table.insertRow(-1);

            var cell = row.insertCell(-1);
            cell.id = "testName";

            cell = row.insertCell(-1);
            cell.id = "priority";

            cell = row.insertCell(-1);
            cell.id = "passes";

            cell = row.insertCell(-1);
            cell.id = "failures";

            cell = row.insertCell(-1);
            cell.id = "total";

            var rowForFailure = table.insertRow(-1);
            var cellForFailure = rowForFailure.insertCell(-1);
            cellForFailure.id = "FailedCases";

            document.body.appendChild(table);

            if (done)
                populateSummaryTable();
        }

        function populateSummaryTable() {
            if (!domReady)
                return; 

            document.getElementById("testName").innerHTML = "TEST: " + filename;
            document.getElementById("priority").innerHTML = "PRIORITY: " + priority;
            document.getElementById("passes").innerHTML = "PASS: " + passes;
            document.getElementById("failures").innerHTML = "FAIL: " + failures;
            document.getElementById("total").innerHTML = "TOTAL: " + (passes + failures);

            if (failures > 0)
                document.getElementById("FailedCases").innerHTML = "Failed Cases: " + failureList.toString();

            if ((passes + failures) === 0) {
                document.write("<h1>No tests were run! There's probably a SyntaxError in the test file.</h1>")
            }

            
            document.title =
                'PASS:' + passes +
                ';FAIL:' + failures +
                ';TOTAL:' + (passes + failures);
        }
        function createCheckBox() {
            var box = document.createElement("input");
            box.type = "checkbox";
            box.checked = false;
            box.id = "displayCheckbox";

            var label = document.createElement('label');
            label.innerHTML = "Display passed test result"

            box.onclick = function () {
                var trList = document.getElementsByTagName("tr");
                for (var x = 0; x < trList.length; x++) {
                    if (this.checked) {
                        
                        trList[x].className = trList[x].className.replace("hidden", "");
                    }
                    else {
                        
                        trList[x].className = trList[x].className.replace("detail_pass", "detail_pass hidden");
                    }
                }
            }

            document.body.appendChild(box);
            document.body.appendChild(label);
        }
        function internalComment(type, str) {
            if (executingTest)
                testProgress.push({ type: type, message: str });
            else
                addResult(type, str);
        }

        this.start = function (file, pri) {
            filename = file;
            priority = pri;
        }

        this.testStart = function (test) {
            testProgress = []; 
            executingTest = true;
        }

        this.verify = function (test, passed, act, exp, msg) {
            verifies++;
            if (verifies < 1000 || !passed) {
                testProgress.push({ type: 'assertion', passed: passed, actual: act, expected: exp, message: msg });
            }
        }

        this.pass = function (test) {
            passes++;
            addResult('result', 'pass', test, testProgress);

            executingTest = false;
        }

        this.fail = function (test) {
            failures++;
            failureList.push(test.id);
            addResult('result', 'fail', test, testProgress);

            executingTest = false;
        }

        this.error = function (test, error) {
            failures++;
            
            setTimeout(function () { throw error }, 0);
            addResult('result', 'error', test, testProgress, error);

            executingTest = false;
        }

        this.end = function () {
            done = true;
            populateSummaryTable();
        }

        this.comment = function (str) {
            internalComment('comment', str);
        };

        this.bug = function (number, msg) {
            msg = msg || "";
            internalComment('bug', "Bug: " + number + ": " + msg);
        };

        this.clear = function () {
            if (typeof resultsContainer == "undefined")
                return;

            passes = 0;
            failures = 0;
            failureList = [];
            var children = resultsContainer.childNodes;
            for (var i = children.length - 1; i >= 0; i--) {
                resultsContainer.removeChild(children[i]);
            }
        }
    }

    HTMLLogger.shouldEnable = function () {
        return typeof document !== "undefined"
    }

    loggers.push(HTMLLogger);

    
    
    
    
    function WScriptLogger() {
        var passCount = 0;
        var failCount = 0;
        var verifications = [];
        var verbose = false;

        this.start = function (filename, priority) {
            if (!verbose) { 
                return;
            }
            
            if (priority === "all") {
                WScript.Echo(filename);
            } else {
                WScript.Echo(filename + " Priority " + priority);
            }
        }

        this.testStart = function (test) {
            verifications = [];
        }

        this.verify = function (test, passed, act, exp, msg) {
            
            if (passed) {
                if (verbose) {
                    verifications.push("\tPass: " + msg + "\n\t\t  Actual: " + act + "\n");
                }
            } else {
                verifications.push("\n\tFail: " + msg + "\n\t\tExpected: " + exp + "\n\t\t  Actual: " + act + "\n");
            }
        }

        this.pass = function (test) {
            passCount++;
            
            if (verbose) {
                WScript.Echo("PASS\t" + test.id + ": " + test.desc);
                
                
                WScript.Echo(verifications.join("\n"));
            }
        }

        this.fail = function (test) {
            failCount++;
            WScript.Echo("");
            WScript.Echo("");
            WScript.Echo("FAIL\t" + test.id + ": " + test.desc);
            WScript.Echo("");
            WScript.Echo(verifications.join("\n"));
            WScript.Echo("");
            WScript.Echo("");
        }

        this.error = function (test, error) {
            failCount++;
            WScript.Echo("");
            WScript.Echo("");
            WScript.Echo("FAIL\t" + test.id + ": " + test.desc);
            WScript.Echo("\n\tError: " + error.name + " - " + error.description);
            if (verifications.length > 0) {
                WScript.Echo("");
                WScript.Echo(verifications.join("\n"));
                WScript.Echo("");
            }
            WScript.Echo("");
            WScript.Echo("");
        }

        this.end = function () {
            if (verbose) {
                WScript.Echo("");
                WScript.Echo("Passed: " + passCount);
                WScript.Echo("Failed: " + failCount);
                if ((passCount + failCount) === 0) {
                    WScript.Echo("");
                    WScript.Echo("No tests were run! There's probably a SyntaxError in the test file.")
                }
            } else {
                if (failCount === 0) {
                    WScript.Echo('pass');
                } else {
                    WScript.Echo('fail');
                }
            }
        }

        this.comment = function (str) {
            if (verbose) {
                verifications.push("\tComment: " + str);
            }
        };
    }


    WScriptLogger.shouldEnable = function () {
        return typeof WScript !== "undefined" && typeof WScript.Echo !== "undefined" && typeof window.location === "undefined";
    }

    loggers.push(WScriptLogger);


    
    
    var windowLogger = {};
    windowLogger.comment = function (str) {
        runner.publish('comment', str);
    }

    
    
    
    
    

    function NightlyLogger() {
        var apPlatform;
        var runCount;

        function VBS_apglobal_init() {
            apPlatform = apGlobalObj.apGetPlatform();
            runCount = 0;
        }

        function apInitTest(stTestName) {
            if (window.runsExecuted == 0) {    
                apGlobalObj.apInitTest(stTestName);
            }
        }

        function apInitScenario(stScenarioName) {
            runCount++;
            apGlobalObj.apInitScenario(stScenarioName);
        }

        function apLogFailInfo(stMessage, stExpected, stActual, stBugNum) {
            if (stBugNum == null) stBugNum = ""; 
            apGlobalObj.apLogFailInfo("" + stMessage, "" + stExpected, "" + stActual, "" + stBugNum);
        }

        function apEndTest() {
            if (window.runsExecuted >= window.runsToExecute - 1) {    
                if (runCount === 0) {
                    apLogFailInfo("Zero tests were run! Must be a SyntaxError in the test file...", true, false, '');
                }
                apGlobalObj.apEndTest();
            }
        }

        function apErrorTrap() {
            apGlobalObj.apLogFailInfo("call to apErrorTrap found!", "", "", "");
        }

        this.start = function (filename) {
            VBS_apglobal_init()
            apInitTest(filename)
        }

        this.testStart = function (test) {
            apInitScenario(test.id + " : " + test.desc)
        }

        this.verify = function (test, passed, act, exp, msg) {
            if (!passed)
                apLogFailInfo(msg, exp, act, '');
        }

        this.pass = function (test) { }

        this.fail = function (test) { }

        this.error = function (test, error) {
            apLogFailInfo("Exception thrown : " + error.name + "Message: " + error.message, true, false, '');
        }

        this.end = function () {
            apEndTest();
        }

        this.comment = function (msg) { }
    }

    NightlyLogger.shouldEnable = function () {
        try {
            var GetEnvVariable = function (variable) {
                var wscriptShell = createActiveXObject("WScript.Shell");
                var wshEnvironment = wscriptShell.Environment("Process");
                return wshEnvironment(variable);
            }
            var result = GetEnvVariable("JScript_NightlyRun");
            if (result === "")
                return false;
            else
                return true;
        }
        catch (e) {
            return false;
        }
    }

    loggers.push(NightlyLogger);

    
    
    
    

    function Loader42Logger() {
        
        var filename = "File Name Not Specified";
        var Loader42Log = {
            
            FAIL: 0,
            PASS: 1,
            BLOCKED: 2,
            Logger: null,
            TestsComplete: false,
            Debug: false,

            
            InitLogger: function () {               
                if (Loader42Log.Logger === null) {
                    try {
                        Loader42Log.Logger = createActiveXObject("Loader42.Logger");
                    }
                    catch (ex) {
                        
                        Loader42Log.Logger = document.createElement("object");
                        Loader42Log.Logger.setAttribute('id', 'logger');
                        Loader42Log.Logger.setAttribute('type', 'application/vns.ms-loader42loggerax');
                        document.body.appendChild(Loader42Log.Logger);
                    }
                    try {
                        
                        
                        if (Loader42Log.Logger.loaderName !== "HTMLLoader") {
                            Loader42Log.Logger = null;
                        }
                    }
                    catch (ex) {
                        Loader42Log.Logger = null;
                    }
                }
            },

            
            
            TestStart: function (name) {
                Loader42Log.InitLogger();

                if (Loader42Log.Logger) {
                    Loader42Log.Logger.LogTestStart(name);
                }
                else if (Loader42Log.Debug) {
                    alert("TestStart(): " + name);
                }

            },

            
            
            
            
            
            
            
            TestFinish: function (name, result, message) {
                Loader42Log.InitLogger();

                if (Loader42Log.Logger) {
                    Loader42Log.Logger.LogTestEnd(name, result, message);
                }
                else if (Loader42Log.Debug) {
                    var status;
                    if (result === Loader42Log.PASS) {
                        status = "PASS";
                    }
                    else if (result === Loader42Log.FAIL) {
                        status = "FAIL";
                    }
                    else if (result === Loader42Log.BLOCKED) {
                        status = "BLOCKED";
                    }
                    else {
                        status = "UNKNOWN";
                    }

                    alert("TestFinish(): " + name + "\n\n" + status + ": " + message);
                }
            },

            
            TestComment: function (comment) {
                Loader42Log.InitLogger();
                if (Loader42Log.Logger) {
                    Loader42Log.Logger.LogComment(comment);
                }

            },

            
            
            AllTestsComplete: function () {
                Loader42Log.InitLogger();

                if (Loader42Log.TestsComplete) {
                    Loader42Log.TestStart("LogException");
                    Loader42Log.TestComment("AllTestsComplete() called twice.");
                    Loader42Log.TestFinish("LogException", Loader42Log.PASS, "AllTestsComplete() called twice.");
                }
                else {
                    Loader42Log.TestsComplete = true;
                    if (Loader42Log.Logger) {
                        
                        
                        
                        Loader42Log.Logger.LogResult(true, "AllTestsComplete");
                    }
                    else if (Loader42Log.Debug) {
                        alert("AllTestsComplete");
                    }
                }

            }
        };

        
        var firsttest = true;
        var prevScenario = "";
        var loggermessage = "";
        var loggerresult = 1;

        function apInitTest(stTestName) {
            if (window.runsExecuted == 0) {    
                filename = stTestName;
                
                Loader42Log.InitLogger();
            }
        }

        function apInitScenario(stScenarioName) {
            
            if (firsttest === true) {
                Loader42Log.TestStart(stScenarioName);
                firsttest = false; 
            }
            else {
                
                if (loggerresult === 1) {
                    Loader42Log.TestComment("");
                    Loader42Log.TestComment("File Name    " + filename);
                    Loader42Log.TestComment("Result    PASSED");
                    Loader42Log.TestComment("Scenario    " + prevScenario);
                    Loader42Log.TestComment("");
                }
                
                Loader42Log.TestFinish(prevScenario, loggerresult, loggermessage);

                
                Loader42Log.TestStart(stScenarioName);

                
                loggermessage = ""; 
                loggerresult = 1; 
            }
            prevScenario = stScenarioName;
        }

        function apLogFailInfo(stMessage, stExpected, stActual, stBugNum) {
            if (stBugNum == null) stBugNum = ""; 

            
            Loader42Log.TestComment("");
            Loader42Log.TestComment("File Name    " + filename);
            Loader42Log.TestComment("Result    FAILED");
            Loader42Log.TestComment("Scenario    " + stMessage);
            Loader42Log.TestComment("EXPECTED Result    " + stExpected);
            Loader42Log.TestComment("ACTUAL Result    " + stActual);
            Loader42Log.TestComment("");
            loggerresult = 0; 
        }

        function apEndTest() {
            if (window.runsExecuted >= window.runsToExecute - 1) {    
                
                if (loggerresult === 1) {
                    Loader42Log.TestComment("");
                    Loader42Log.TestComment("File Name    " + filename);
                    Loader42Log.TestComment("Result    PASSED");
                    Loader42Log.TestComment("Scenario    " + prevScenario);
                    Loader42Log.TestComment("");
                }
                
                Loader42Log.TestFinish(prevScenario, loggerresult, loggermessage);

                
                Loader42Log.TestComment("Ending Test" + filename);
                Loader42Log.AllTestsComplete();
            }
        }


        this.start = function (filename) {
            apInitTest(filename)
        }

        this.testStart = function (test) {
            apInitScenario(test.desc)
        }

        this.verify = function (test, passed, act, exp, msg) {
            if (!passed)
                apLogFailInfo(msg, exp, act, '');
        }

        this.pass = function (test) { }

        this.fail = function (test) { }

        this.error = function (test, error) {
            apLogFailInfo("Exception thrown : " + error.name + "Message: " + error.message, true, false, '');
        }

        this.end = function () {
            apEndTest();
        }

        this.comment = function (msg) {
            Loader42Log.TestComment(msg);
        }
    }

    Loader42Logger.shouldEnable = function () {
        try {
            var Logger = createActiveXObject("Loader42.Logger");
            return true;
        }
        catch (e) {
            return false;
        }

        return false;
    }

    loggers.push(Loader42Logger);

    
    
    
    

    function StressLogger() {
        var htmlLogger = new HTMLLogger();
        var htmlLoggerRegistered = false;
        var logger = new ActiveXObject("DrummerLogger.Logger");
        var that = this;
        var id;

        window.onerror = function () {
            this.end();
        }

        
        this.CurrentTestGroupIteration = 1;

        function getRunId() {
            id = window.location.href.substring(window.location.href.indexOf("stressrun=") + 10)
        }

        this.start = function (fileName) {
            getRunId();
            logger.Initialize(id);
            that.Config = logger.Config;
            logger.Comment("Test File: " + fileName);
            logger.Comment("Runtime Iterations Requested: " + that.Config.RuntimeIterations);
            logger.Comment("Testcase Iterations Requested: " + that.Config.TestcaseIterations);
            logger.Comment("Collection Frequency Requested: " + that.Config.CollectionFrequency);
            if (that.Config.OutputHTML && !htmlLoggerRegistered) {
                runner.subscribe(htmlLogger);
                htmlLoggerRegistered = true;
            }
        }

        this.testStart = function (test) {

            logger.InitScenario(test.id + ": " + test.desc);
        }

        this.verify = function (test, passed, act, exp, msg) {
            logger.Comment("Passed: " + passed + "; Actual: " + act + "; Expected: " + exp + "; Message: " + msg);
        }

        this.pass = function (test) {
            logger.EndScenario("pass", test.desc);
        }

        this.fail = function (test) {
            logger.EndScenario("fail", test.desc);
        }

        this.error = function (test, error) {
            logger.Error(error.message);
        }

        this.end = function () {
            logger.Comment("TestGroupIteration Executed: " + (that.CurrentTestGroupIteration - 1));
            logger.Finished();
        }

        this.comment = function (msg) {
            logger.Comment(msg);
        }

        this.CollectMetrics = function () {
            logger.CollectMetrics();
        }
    }

    StressLogger.shouldEnable = function () {
        try {
            var logger = new ActiveXObject("DrummerLogger.Logger");
            var str = window.location.href.substring(window.location.href.indexOf("?") + 1);
            if (str.indexOf("stressrun") > -1)
                return true;
            else
                return false;
        }
        catch (e) {
            return false;
        }
    }

    loggers.push(StressLogger);

    
    
    
    
    var scheduler = null;
    var runner = (function () {
        
        var subscribers = [];
        
        var globalSetups = [];
        
        var globalTeardowns = [];
        
        var waitCount = 0;
        
        var waitHandle = null;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        var currentState = "init";

        
        
        var fileName = null;
        
        var priority = "all";
        
        var DEFAULT_TIMEOUT = 10000;
        
        var ended = false;
        
        var states = {
            init: function () {
                if (window.runsExecuted == 0) {    
                    runner.publish('start', fileName, priority);
                }
                scheduler.prepend(globalSetups);
                scheduler.push(globalTeardowns);
                transitionTo("running");
            },
            resuming: function () {
                transitionTo("running");
            },
            running: function () {
                var task = scheduler.next();
                if (task) {
                    try {
                        task();
                    } catch (ex) {
                        runner.publish('error', currentTest, ex);
                        transitionTo("error");
                    }
                } else {
                    transitionTo('ending');
                }
            },
            ending: function () {
                if (++window.runsExecuted < window.runsToExecute) {
                    transitionTo("restarting");
                }
                else {
                    runner.publish("end", fileName, priority);
                    ended = true;
                }
            },
            restarting: function () {
                tasks = ranTasks;
                ranTasks = [];
                transitionTo("init");
            },
            waiting: function () { },
            timeout: function () {
                if (waitHandle === null)
                    return;
                waitHandle = null;
                currentTest.error = new Error("Timed out before runner.start() being called");
                testPassed = false;
                waitCount = 0;
                transitionTo("resuming");
            },
            error: function () {
                ended = true;
            }
        };

        
        
        function subscribeObject(obj) {
            for (var prop in obj)
                if (typeof obj[prop] === "function")
                    subscribeToEvent(prop, obj[prop]);
        }

        
        function subscribeToEvent(e, callback) {
            if (typeof subscribers[e] === "undefined")
                subscribers[e] = [];

            subscribers[e].push(callback);
        }

        
        
        
        function transitionTo(newState) {
            function transitionAssert() {
                var res = false;
                for (var i = 0; i < arguments.length; i++)
                    if (arguments[i] === newState)
                        res = true;
                runnerAssert(res, "invalid state transition: " + currentState + "->" + newState)
            }
            switch (currentState) {
                case "init":
                    transitionAssert("running", "error");
                    break;
                case "running":
                    transitionAssert("waiting", "ending", "error");
                    break;
                case "waiting":
                    transitionAssert("resuming", "waiting", "error", "timeout");
                    break;
                case "timeout":
                    transitionAssert("resuming", "error");
                    break;
                case "resuming":
                    transitionAssert("running", "error");
                    break;
                case "error":
                    transitionAssert("running", "ending");
                    break;
                case "ending":
                    transitionAssert("restarting", "error");
                    break;
                case "restarting":
                    transitionAssert("init", "error");
                    break;
                default:
                    runnerAssert(false, "Invalid state");
                    break;
            }
            currentState = newState;
        }

        
        
        
        
        
        
        
        function runnerAssert(bool, msg) {
            if (!bool) {
                runner.publish('comment', "Internal failure: " + msg);
                transitionTo("error");
                currentTest.error = new Error("Internal failure: " + msg);
            }
            return bool;
        }

        
        
        
        function runTasks() {
            while (!ended) {
                states[currentState]();
                if (currentState === "waiting")
                    return;
            }
        }

        
        function wrapGlobalOperation(type, task) {
            return function () {
                try {
                    task();
                } catch (e) {
                    runner.publish('comment', "Error during " + type + " - " + e.name + ": " + e.description);
                    runner.publish('end', fileName, priority);
                    transitionTo("error");
                }
            }
        }


        
        
        return {
            
            
            
            subscribe: function () {
                if (arguments.length == 1)
                    subscribeObject(arguments[0]);
                else
                    subscribeToEvent(arguments[0], arguments[1]);
            },

            
            publish: function (e) {
                var args = Array.prototype.slice.call(arguments, 1);

                if (typeof subscribers[e] !== "undefined")
                    for (var i = 0; i < subscribers[e].length; i++)
                        subscribers[e][i].apply(undefined, args);
            },

            mutators: [],


            
            
            
            run: function (testFileName) {
                runnerAssert(scheduler !== null, "no scheduler set. This only happens if setScheduler is not called with a scheduler");
                if (ended) {    
                    window.runsExecuted = 0;
                    ended = false;
                    tasks = ranTasks;
                    ranTasks = [];
                    currentState = "init";
                }
                runnerAssert(currentState === "init", "run called while runner in bad state. Probably means multiple calls to run were made");
                if (typeof testFileName === "undefined") {
                    try {
                        testFileName = Loader42_FileName;  
                    } catch (e) {
                        
                    } finally {
                        testFileName = testFileName || "No filename given";
                    }
                }

                fileName = testFileName;
                runTasks();
            },

            
            
            
            
            start: function (testWaitHandle) {
                if (typeof testWaitHandle !== "undefined" && testWaitHandle !== waitHandle)
                    return;

                waitCount--;
                if (waitCount === 0) {
                    clearTimeout && clearTimeout(testWaitHandle);
                    transitionTo("resuming");
                    waitHandle = null;
                    runTasks();
                }
            },

            
            
            
            
            
            
            
            wait: function (timeout, count) {
                count = count || 1;
                timeout = timeout || DEFAULT_TIMEOUT;
                waitCount += count;
                if (waitCount > 0) {
                    transitionTo("waiting");
                    waitHandle = setTimeout && setTimeout(function () {
                        transitionTo("timeout");
                        runTasks();
                    }, timeout);
                    return waitHandle;
                }
            },

            
            addTest: function (obj) {
                var test = new TestCase();

                for (var prop in obj) {
                    test[prop] = obj[prop]
                }

                test.AddTest();
            },

            globalSetup: function (callback) {
                globalSetups.push(wrapGlobalOperation("global setup", callback));
            },

            globalTeardown: function (callback) {
                globalTeardowns.push(wrapGlobalOperation("global teardown", callback));
            },

            
            
            
            
            setScheduler: function (sched) {
                scheduler = sched;
                runner.subscribe("schedule", sched.schedule);
            }
        };
    })();

    for (var i = 0; i < loggers.length; i++)
        if (loggers[i].shouldEnable())
            runner.subscribe(new loggers[i]());

    
    var tasks = [];
    
    var ranTasks = [];
    window.runsExecuted = 0;
    window.runsToExecute = Utils.getMaxInterpretCount() + 1;

    
    var defaultScheduler = (function () {
        return {
            
            
            
            
            schedule: function (item) {
                var items;
                if (item.tasks && typeof item.tasks === "function")
                    items = item.tasks();
                else
                    items = [item];
                for (var i = 0; i < items.length; i++)
                    tasks.push(items[i]);
            },
            
            
            
            
            prepend: function (obj) {
                var type = hoozit(obj);
                if (type === "array") {
                    for (var i = obj.length - 1; i >= 0; i--) {
                        tasks.unshift(obj[i]);
                    }
                } else {
                    tasks.unshift(obj);
                }
            },
            
            
            
            
            push: function (obj) {
                var type = hoozit(obj);
                if (type === "array") {
                    for (var i = 0; i < obj.length; i++) {
                        tasks.push(obj[i]);
                    }
                } else {
                    tasks.push(obj);
                }
            },
            
            
            
            next: function () {
                var task = null;
                if (tasks.length > 0) {
                    task = tasks.shift();
                    ranTasks.push(task);
                }

                return task;
            }
        };
    })();
    runner.setScheduler(defaultScheduler);

    
    
    
    var currentTest;
    var testPassed;

    
    var TestCase = function () {
        
        var testCase = this;

        
        this.useGlobalThis = false;
        this.baselineFile = false;
        this.baselineHandler = 0;
        this.baselineCounter = 0;
        this.pass = true;

        this.AddTest = function () {
            
            if ((this.id === undefined) || (this.id === "")) {
                runner.publish('comment', "Test case id is not valid ");
            } else if (this.desc === undefined || this.desc === "") {
                runner.publish('comment', "Test case description not specified");
            } else if (this.preReq && (!(typeof (this.preReq) === "function"))) {
                runner.publish('comment', "Invalid preReq function");
            } else if ((this.test === undefined) || (!(typeof (this.test) === "function"))) {
                runner.publish('comment', "Invalid test function");
            } else {
                runner.publish('schedule', this);
            }
        };

        
        
        
        
        this.tasks = function () {
            function setup() {
                testPassed = true;
                currentTest = testCase;

                runner.publish('testStart', currentTest);
            }

            function test() {
                
                    
                
                if (!currentTest.preReq || currentTest.preReq()) {
                    try {
                        if (currentTest.useGlobalThis) {
                            testFunc = currentTest.test;
                            testFunc();
                        } else {
                            currentTest.test();
                        }
                    } catch (e) {
                        currentTest.error = e;
                    }
                } else {
                    runner.publish('comment', "Test prereq returned false. Skipping");
                }
            }

            function cleanup() {
                if (currentTest.error !== undefined) {
                    runner.publish('error', currentTest, currentTest.error);
                } else if (testPassed) {
                    runner.publish('pass', currentTest);
                } else {
                    runner.publish('fail', currentTest);
                }
                runner.publish('testEnd', currentTest);
            }

            return [setup, test, cleanup];
        }
    }

    

    function addEscapeCharacter(txt) {
        txt = txt.replace(/\\/g, "\\\\");
        txt = txt.replace(/\"/g, "\\\"");
        txt = txt.replace(/\'/g, "\\\'");
        txt = txt.replace(/\r/g, "\\r");
        txt = txt.replace(/\n/g, "\\n");

        return txt;
    }

    
    function BaselineTestCase() {
        
        var testCase = this;

        
        this.useGlobalThis = false;
        this.baselineFile = false;
        this.baselineHandler = 0;
        this.baselineCounter = 0;
        this.pass = true;

        this.AddTest = function () {
            
            if ((this.id === undefined) || (this.id === "")) {
                runner.publish('comment', "Test case id is not valid ");
            } else if (this.desc === undefined || this.desc === "") {
                runner.publish('comment', "Test case description not specified");
            } else if (this.preReq && (!(typeof (this.preReq) === "function"))) {
                runner.publish('comment', "Invalid preReq function");
            } else if ((this.test === undefined) || (!(typeof (this.test) === "function"))) {
                runner.publish('comment', "Invalid test function");
            } else {
                runner.publish('schedule', this);
            }
        };

        
        
        
        
        this.tasks = function () {
            function setup() {
                testPassed = true;
                currentTest = testCase;
                BaselineTestCase.startBaseline();
                runner.publish('testStart', currentTest);
            }

            function test() {
                if (!currentTest.preReq || currentTest.preReq()) {
                    try {
                        if (currentTest.useGlobalThis) {
                            testFunc = currentTest.test;
                            testFunc();
                        } else {
                            currentTest.test();
                        }
                    } catch (e) {
                        currentTest.error = e;
                    }
                } else {
                    runner.publish('comment', "Test prereq returned false. Skipping");
                }
            }

            function cleanup() {
                if (currentTest.error !== undefined) {
                    runner.publish('error', currentTest, currentTest.error);
                } else if (testPassed) {
                    runner.publish('pass', currentTest);
                } else {
                    runner.publish('fail', currentTest);
                }
                BaselineTestCase.stopBaseline();
                runner.publish('testEnd', currentTest);
            }

            return [setup, test, cleanup];
        }
    }

    
    BaselineTestCase.baselineFileExt = ".baseline.js";
    BaselineTestCase.editMode = false;
    BaselineTestCase.useGlobalBaseline = false;
    BaselineTestCase.fileName = null;
    BaselineTestCase.fileHandler = null;
    BaselineTestCase.elementIndexInFile = 0;
    BaselineTestCase.currentTestcaseID = 0;

    
    BaselineTestCase.constructBLFileName = function (testCaseID) {
        var filePath = window.location.href;

        var fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
        fileName = fileName.substring(0, fileName.lastIndexOf("."));


        if (typeof (testCaseID) == "undefined") {
            fileName = fileName + "." + getHOSTMode() + BaselineTestCase.baselineFileExt;
        }
        else {
            testCaseID = String(testCaseID).replace(/[^a-zA-Z 0-9]+/g, "_");
            fileName = fileName + testCaseID + "." + getHOSTMode() + BaselineTestCase.baselineFileExt;
        }

        var baselineFilePath = filePath.substring(0, filePath.lastIndexOf("/") + 1) + fileName;

        
        baselineFilePath = baselineFilePath.replace(/EzeHtmlTestFiles/, "EzeJSTestFiles");

        
        BaselineTestCase.elementIndexInFile = 0;
        BaselineTestCase.currentTestcaseID = 0;

        
        return baselineFilePath;
    }

    BaselineTestCase.openBaseline = function (fileName) {
        var objFSO = createActiveXObject("Scripting.FileSystemObject");

        if (fileName.indexOf("file:/

        BaselineTestCase.fileHandler = objFSO.CreateTextFile(fileName, true);
        BaselineTestCase.fileHandler.WriteLine("var baselineExpArr = [");
    }

    BaselineTestCase.closeBaseline = function () {
        if (BaselineTestCase.editMode) {
            BaselineTestCase.fileHandler.WriteLine();
            BaselineTestCase.fileHandler.WriteLine("];");
            BaselineTestCase.fileHandler.Close();
        }
        else {
            
            if (typeof (baselineExpArr) != "undefined") {
                if (BaselineTestCase.elementIndexInFile < baselineExpArr.length) {
                    fail("There is more elements in baseline file than expected. Total element in baselinefile=" + baselineExpArr.length + ", expected=" + BaselineTestCase.elementIndexInFile);
                }
            }
            if (!BaselineTestCase.useGlobalBaseline) {
                BaselineTestCase.elementIndexInFile = 0;
                BaselineTestCase.fileHandler = 0;
            }
        }
    }

    BaselineTestCase.verify = function (act, msg) {
        if (BaselineTestCase.editMode) {
            if (BaselineTestCase.elementIndexInFile > 0) {
                BaselineTestCase.fileHandler.WriteLine(",");
            }
            var escapedAct = act;
            if (act instanceof String || typeof act == "string") {
                escapedAct = addEscapeCharacter(act);
            }

            if (escapedAct != null) 
            {
                BaselineTestCase.fileHandler.Write("\"" + escapedAct + "\"");
            }
            else {
                BaselineTestCase.fileHandler.Write("null");
            }
            BaselineTestCase.elementIndexInFile++;
        }
        else {
            if (BaselineTestCase.elementIndexInFile >= baselineExpArr.length) {
                fail("Test is expecting more elements in baseline file.Expecting " + (BaselineTestCase.elementIndexInFile + 1) + ", actual = " + baselineExpArr.length);
            }
            else {
                var exp = baselineExpArr[BaselineTestCase.elementIndexInFile++];
                if (act != null && act.toString)
                    verify(act.toString(), exp, msg);
                else
                    verify(act, exp, msg);
            }
        }
    }

    BaselineTestCase.loadBaseline = function (fileName) {
        var loadSuccess = true;
        var oXmlHttp = new XMLHttpRequest();
        oXmlHttp.OnReadyStateChange = function () {
            if (oXmlHttp.readyState == 4) {
                
                
                if (oXmlHttp.status == 200 || window.location.href.indexOf("http") == -1) {
                    if (fileName != null) {
                        if (document.getElementById("blScriptTag") == null) {
                            var header = document.getElementsByTagName('HEAD').item(0);
                            var oScript = document.createElement("script");
                            oScript.language = "javascript";
                            oScript.type = "text/javascript";
                            oScript.defer = true;
                            oScript.id = "blScriptTag";
                            oScript.text = oXmlHttp.responseText;
                            header.appendChild(oScript);
                        }
                        else {
                            
                            var a = oXmlHttp.responseText;
                            baselineExpArr = eval(a.substring(a.indexOf("=") + 1, a.length - 2));
                        }
                    }
                }
                else {
                    loadSuccess = false;
                }
            }
        }
        oXmlHttp.open('GET', fileName, false);
        oXmlHttp.send(null);

        if (!loadSuccess) throw new Error('XML request error for file ' + fileName + ': ' + oXmlHttp.statusText + ' (' + oXmlHttp.status + ')');
    }

    BaselineTestCase.startBaseline = function () {
        if (BaselineTestCase.useGlobalBaseline)
            return;

        
        
        if (currentTest instanceof BaselineTestCase) {

            
            if (BaselineTestCase.editMode) {
                BaselineTestCase.openBaseline(BaselineTestCase.constructBLFileName(currentTest.id));
            }
            else {
                BaselineTestCase.loadBaseline(BaselineTestCase.constructBLFileName(currentTest.id));
            }
        }
    }

    BaselineTestCase.stopBaseline = function () {
        if (BaselineTestCase.useGlobalBaseline)
            return;

        if (currentTest instanceof BaselineTestCase) {
            
            BaselineTestCase.closeBaseline();
        }

        BaselineTestCase.currentTestcaseID++;
    }

    BaselineTestCase.startGlobalBaseline = function () {
        if (!BaselineTestCase.useGlobalBaseline)
            return;

        try {
            
            if (BaselineTestCase.editMode) {
                BaselineTestCase.openBaseline(BaselineTestCase.constructBLFileName());
            }

            
            else {
                BaselineTestCase.loadBaseline(BaselineTestCase.constructBLFileName());
            }
        }
        catch (e) {
            fail("Exception occured on opening baseline file with message: " + e.message);
        }
    }

    BaselineTestCase.stopGlobalBaseline = function () {
        if (!BaselineTestCase.useGlobalBaseline)
            return;

        try {
            
            BaselineTestCase.closeBaseline();
        }
        catch (e) {
            fail("Exception occured on closing baseline file with message: " + e.message);
        }
    }

    
    runner.subscribe('start', BaselineTestCase.startGlobalBaseline);
    runner.subscribe('end', BaselineTestCase.stopGlobalBaseline);

    
    var CrossContextTest = function () {
        var cct = this;
        cct.testIframe = true;

        var waitingForReady = false;
        var readyCallbacks = [];
        var childFunctions = [];
        var childProperties = {};

        
        function onReady(callback) {
            
            if (document.readyState == "complete") {
                callback.call();
                return;
            }

            
            readyCallbacks.push(callback);

            
            if (!waitingForReady) {
                waitingForReady = true;
                waitForReady();
            }
        }

        
        function waitForReady() {
            
            
            try {
                document.documentElement.doScroll("left");

            }
            catch (e) {
                
                setTimeout(waitForReady, 1);
                return;
            }

            
            for (var i = 0; i < readyCallbacks.length; i++) {
                readyCallbacks[i].call();
            }
        }

        
        function setChildWindowProperties(win) {
            for (var prop in childProperties) {
                win[prop] = childProperties[prop];
            }
        }

        

        function writeChildContent(doc) {

            function createChildTag(tagName, attributes) {
                tag = doc.createElement(tagName);
                for (var k in attributes) {
                    tag.setAttribute(k, attributes[k]);
                }
                return tag;
            }

            doc.open();
            doc.write("<html><head></head><body></body></html>");
            doc.close();

            var head = doc.getElementsByTagName("head")[0];

            var meta1 = createChildTag('meta', {
                'http-equiv': '"X-UA-Compatible"',
                'content': '"IE=' + document.documentMode + '"'
            }
        );
            head.appendChild(meta1);

            
            if (typeof cct.childContent !== 'undefined') {
                var body = doc.getElementsByTagName("body")[0];
                body.innerHTML = cct.childContent;
            }

            
            function __init__(sender) {
                parentWindow = window.parent == window ? window.opener : window.parent;
                if (sender.readyState == "complete") {
                    sender.onreadystatechange = null;
                    parentWindow.childReady.ready();  
                }
            }

            
            var script = createChildTag('script', {
                type: 'text/javascript',
                onreadystatechange: "iamready(this)"
            }
        );
            script.text += __init__.toString() + "\n" + "var iamready =  __init__;\n";
            
            for (var i = 0; i < childFunctions.length; i++) {
                script.text += childFunctions[i].toString() + "\n";
            }
            head.appendChild(script);
        }

        
        this.childContent = undefined;

        
        if (typeof window.logger !== 'undefined') {
            this.comment = logger.comment;
        } else {
            this.comment = new Function();
        }

        
        this.addChildFunction = function (func) {
            childFunctions.push(func);
        }

        
        this.addChildProperty = function (name, value) {
            childProperties[name] = value;
        }

        function ChildReady(waitHandle) {
            this.waitHandle = waitHandle;
            this.ready = function () {
                runner.start(this.waitHandle);
            }
        }

        var prepareIframe = function () {
            cct.comment("Starting iframe tests");
            cct.frame = document.createElement('iframe');
            document.body.appendChild(cct.frame);
            var waitHandle = runner.wait();
            window.childReady = new ChildReady(waitHandle);
            writeChildContent(cct.frame.contentDocument ? cct.frame.contentDocument : cct.frame.contentWindow.document);
        }

        var runIframe = function () {
            if (typeof BaselineTestCase !== 'undefined' && typeof mutator !== 'undefined') {
                
                cct.baselineTCElementIndexInFile = BaselineTestCase.elementIndexInFile;
            }
            setChildWindowProperties(cct.frame.contentWindow);
            try {
                cct.callback.call(undefined, cct.frame.contentWindow);
            }
            catch (e) {
                currentTest.error = e;
            }
        }

        var cleanupIframe = function () {
            window.childReady = undefined;
            
            document.body.removeChild(cct.frame);
        }

        var preparePopWin = function () {
            cct.comment("Starting new window tests");
            cct.win = window.open();
            var waitHandle = runner.wait();
            window.childReady = new ChildReady(waitHandle);
            writeChildContent(cct.win.document);
        }

        var runPopWin = function () {
            if (typeof BaselineTestCase !== 'undefined' && typeof mutator !== 'undefined') {
                
                BaselineTestCase.elementIndexInFile = cct.baselineTCElementIndexInFile;
            }
            setChildWindowProperties(cct.win);
            try {
                cct.callback.call(undefined, cct.win);
            }
            catch (e) {
                currentTest.error = e;
            }
        }

        var cleanupPopWin = function () {
            window.childReady = undefined;
            cct.win.close();
            window.parentWaitHandle = undefined;

            
            var waitHandle = runner.wait();
            setTimeout(function () {
                try {
                    if (!cct.win.closed) {
                        setTimeout(arguments.callee, 10);
                        return;
                    }
                } catch (e) { }
                runner.start(waitHandle);
            }, 10);
        }

        
        this.test = function (callback, waitForReady) {

            var run = function () {

                cct.callback = callback;

                if (cct.testIframe) {
                    
                    scheduler.prepend([prepareIframe, runIframe, cleanupIframe]);
                }
            };

            if (waitForReady) onReady(run);
            else run();
        }
    }

    
    var mutator;

    
    var env = "";
    try {
        env = (createActiveXObject("WScript.Shell")).Environment("Process")("JScript_Mutators");

        if (env.length > 0)
            runner.mutators = env.split(",");
    } catch (e) { }


    (function () {
        var originalTest;

        runner.subscribe('testStart', function (test) {
            if (runner.mutators.length === 0)
                return;

            try {
                if (typeof mutator === "undefined")
                    mutator = createActiveXObject("MutatorsHost.MutatorsActiveX");

                runner.publish('comment', "Mutating with " + runner.mutators.join(","));

                originalTest = test.test;
                originalTestString = originalTest.toString();

                
                testBody = originalTestString.substring(originalTestString.indexOf("{") + 1,
                                                    originalTestString.lastIndexOf("}"));

                newTestString = mutator.Mutate(runner.mutators.join(","), testBody);

                
                
                
                test.test = new Function(newTestString);

                runner.publish('comment', "<pre>" + test.test.toString() + "</pre>");
            } catch (e) { }
        })

        
        runner.subscribe('testEnd', function (test) {
            if (runner.mutators.length === 0)
                return;

            test.test = originalTest;
        })

    })()

    
    function ContinueTestGroupIteration() {

        if (typeof stressLogger !== "undefined") {
            stressLogger.CurrentTestGroupIteration++;

            if (stressLogger.Config.RuntimeIterations < stressLogger.CurrentTestGroupIteration) {
                return false;
            }

            return true;
        }

        return false;
    }

    
    
    
    
    var verify = (function () {
        function verify(act, exp, msg) {
            var result = equiv(act, exp);
            testPassed = testPassed && result;
            runner.publish('verify', currentTest, result, act, exp, msg);
        }
        verify.equal = verify;
        verify.notEqual = function (act, exp, msg) {
            var result = !equiv(act, exp);
            testPassed = testPassed && result;
            runner.publish('verify', currentTest, result, act, "not " + exp, msg);
        };

        verify.strictEqual = function (act, exp, msg) {
            var result = act === exp;
            testPassed = testPassed && result;
            runner.publish('verify', currentTest, result, act, exp, msg);
        }

        verify.notStrictEqual = function (act, exp, msg) {
            var result = act !== exp;
            testPassed = testPassed && result;
            runner.publish('verify', currentTest, result, act, "not " + exp, msg);
        }

        verify.noException = function (callback, msg) {
            try {
                var res = callback();
                verify.equal(res, res, msg);
            } catch (e) {
                verify.equal(res, "no exception", msg);
            }
        };

        verify.exception = function (callback, exception, msg) {
            try {
                var res = callback();
                verify.equal(res, "exception", msg);
            } catch (e) {
                verify.instanceOf(e, exception)
            }
        };

        verify.defined = function (obj, msg) {
            return verify.notStrictEqual(obj, undefined, msg + " should be defined");
        };

        verify.notDefined = function (obj, msg) {
            return verify.strictEqual(obj, undefined, msg + " should not be defined");
        };

        verify.typeOf = function (obj, expected) {
            return verify.equal(typeof obj, expected, "typeof " + obj);
        };

        verify.instanceOf = function (obj, expected) {
            return verify.equal(obj instanceof expected, true, "instanceof " + obj);
        };

        return verify;
    })();

    function fail(msg) {
        verify(true, false, msg);
    }

    function assert(condition, msg) {
        verify(condition, true, msg);
    }

    
    
    
    
    
    
    

    function OldGlueProxy() {
        var test;
        var testStarted = false;
        var scenarioStarted = false;
        var scenarioPassed = true;

        function finishScenario() {
            if (scenarioPassed)
                runner.publish('pass', test);
            else
                runner.publish('fail', test);
        }

        this.apInitTest = function (name) {
            if (window.runsExecuted == 0) {    
                if (testStarted)
                    runner.publish('end');

                testStarted = true;

                if (typeof Loader42_FileName == 'undefined')
                    runner.publish('start', name);
                else
                    runner.publish('start', Loader42_FileName);
            }
        }

        this.apInitScenario = function (name) {
            if (scenarioStarted)
                finishScenario();

            var id = /^\d+/.exec(name);
            if (id === null)
                id = "";

            test = { id: id, desc: name, test: Function() };

            runner.publish('testStart', test);
            scenarioStarted = true;
            scenarioPassed = true;
        }

        this.apEndScenario = function () {
            finishScenario();
            scenarioStarted = false;
        }

        this.apLogFailInfo = function (msg, exp, act) {
            runner.publish('verify', test, false, act, exp, msg);
            scenarioPassed = false;
        }

        this.apEndTest = function () {
            if (window.runsExecuted >= window.runsToExecute - 1) {    
                if (scenarioStarted)
                    finishScenario();
                runner.publish('end');
                testStarted = false;
            }
        }

        this.apWriteDebug = function (msg) {
            runner.publish('comment', msg);
        }

        this.VBS_apglobal_init = function () {
            try {
                window.apGlobalObj = createActiveXObject("apgloballib.apglobal");
            } catch (e) {
                
                window.apGlobalObj = {
                    apInitTest: apInitTest,
                    apInitScenario: apInitScenario,
                    apLogFailInfo: apLogFailInfo,
                    apEndScenario: apEndScenario,
                    apEndTest: apEndTest,
                    apGetLangExt: function (Lcid) {
                        var LangExt = "";
                        switch (apGlobalObj.apPrimaryLang(Lcid)) {
                            case 0x9:
                                LangExt = "EN"; 
                                break;
                            case 0xC:
                                LangExt = "FR"; 
                                break;
                            case 0xA:
                                LangExt = "ES"; 
                                break;
                            case 0x7:
                                LangExt = "DE"; 
                                break;
                            case 0x10:
                                LangExt = "IT"; 
                                break;
                            case 0x16:
                                LangExt = "PT"; 
                                break;
                            case 0x1D:
                                LangExt = "SV"; 
                                break;
                            case 0x14:
                                LangExt = "NO"; 
                                break;
                        }
                        if (LangExt == "") { 
                            switch (Lcid) {
                                case 0x411:
                                    LangExt = "JP"; 
                                    break;
                                case 0x412:
                                    LangExt = "KO"; 
                                    break;
                                case 0x404:
                                    LangExt = "CHT"; 
                                    break;
                                case 0x804:
                                    LangExt = "CHS"; 
                                    break;
                            }
                        }
                        return LangExt;
                    },
                    apPrimaryLang: function (Lcid) {
                        return Lcid & 0x3FF;
                    },
                    apGetLocFormatDate: function (Lcid, Fmt) {
                        var strToken = "";
                        switch (Fmt) 
                        {
                            case "LONG DATE":
                            case "long date":
                                strToken = "datelong";
                                break;
                            case "MEDIUM DATE":
                            case "medium date":
                                strToken = "datemed";
                                break;
                            case "SHORT DATE":
                            case "short date":
                                strToken = "dateshort";
                                break;
                            case "GENERAL DATE":
                            case "general date":
                                strToken = "gendate";
                                break;
                            case "LONG TIME":
                            case "long time":
                                strToken = "timelong";
                                break;
                            case "MEDIUM TIME":
                            case "medium time":
                                strToken = "timemed";
                                break;
                            case "SHORT TIME":
                            case "short time":
                                strToken = "timeshort";
                                break;
                        }
                        return apGlobalObj.apGetToken(Lcid, "fmt_named_" + strToken, "OLB");
                    },
                    apGetToken: function (Lcid, strTokenName, strFileName) {
                        
                        var strToken = "";
                        return (strToken == "") ? "[[Token Not Found]]" : strToken;
                    },
                    apGetLocInfo: function (Lcid, lctype, ProjectOverride, Flags) { },
                    apGetOSVer: function () {
                        
                        return "NT;";
                    },
                    apGetPathName: function () {
                        
                        apGlobalObj.apLogFailInfo("FAILURE: TC requested function apGetPathName", "", "", "");
                        apGlobalObj.apEndTest();
                        return "";
                    },
                    apGetPlatform: function () {
                        
                        return "NT;";
                    },
                    apGetVolumeName: function (OS) {
                        
                        return "NT;";
                    },
                    LangHost: function () {
                        
                        return 1033;
                    },
                    apGetLocalizedString: function (resID) {
                        return "No localized string returned";
                    },
                    apGetLocalizedStringWithSubstitution: function (resID, stringSubstitution) {
                        return "No localized string returned";
                    }
                }
            }
            window.apPlatform = apGlobalObj.apGetPlatform();
        }

        this.apGetLocale = function () {
            return apGlobalObj.LangHost();
        }

    }

    
    
    

    
    function hoozit(o) {
        if (typeof o === "undefined") {
            return "undefined";
        } else if (o === null) {
            return "null";
        } else if (o.constructor === String) {
            return "string";

        } else if (o.constructor === Boolean) {
            return "boolean";

        } else if (o.constructor === Number) {

            if (isNaN(o)) {
                return "nan";
            } else {
                return "number";
            }

            
        } else if (o instanceof Array) {
            return "array";

            
        } else if (o instanceof Date) {
            return "date";

            
            
            
            
        } else if (o instanceof RegExp) {
            return "regexp";

        } else if (typeof o === "object") {
            return "object";

        } else if (o instanceof Function) {
            return "function";
        } else {
            return undefined;
        }
    }

    
    function bindCallbacks(o, callbacks, args) {
        var prop = hoozit(o);
        if (prop) {
            if (hoozit(callbacks[prop]) === "function") {
                return callbacks[prop].apply(callbacks, args);
            } else {
                return callbacks[prop]; 
            }
        }
    }
    
    
    
    
    var equiv = function () {

        var innerEquiv; 
        var callers = []; 


        var callbacks = function () {

            
            function useStrictEquality(b, a) {
                if (b instanceof a.constructor || a instanceof b.constructor) {
                    
                    
                    
                    return a == b;
                } else {
                    return a === b;
                }
            }

            return {
                "string": useStrictEquality,
                "boolean": useStrictEquality,
                "number": useStrictEquality,
                "null": useStrictEquality,
                "undefined": useStrictEquality,

                "nan": function (b) {
                    return isNaN(b);
                },

                "date": function (b, a) {
                    return hoozit(b) === "date" && a.valueOf() === b.valueOf();
                },

                "regexp": function (b, a) {
                    return hoozit(b) === "regexp" &&
                    a.source === b.source && 
                    a.global === b.global && 
                    a.ignoreCase === b.ignoreCase &&
                    a.multiline === b.multiline;
                },

                
                
                
                "function": function () {
                    var caller = callers[callers.length - 1];
                    return caller !== Object &&
                        typeof caller !== "undefined";
                },

                "array": function (b, a) {
                    var i;
                    var len;

                    
                    if (!(hoozit(b) === "array")) {
                        return false;
                    }

                    len = a.length;
                    if (len !== b.length) { 
                        return false;
                    }
                    for (i = 0; i < len; i++) {
                        if (!innerEquiv(a[i], b[i])) {
                            return false;
                        }
                    }
                    return true;
                },

                "object": function (b, a) {
                    var i;
                    var eq = true; 
                    var aProperties = [], bProperties = []; 

                    
                    if (a.constructor !== b.constructor) {
                        return false;
                    }

                    
                    callers.push(a.constructor);

                    for (i in a) { 

                        aProperties.push(i); 

                        if (!innerEquiv(a[i], b[i])) {
                            eq = false;
                        }
                    }

                    callers.pop(); 

                    for (i in b) {
                        bProperties.push(i); 
                    }

                    
                    return eq && innerEquiv(aProperties, bProperties);
                }
            };
        } ();

        innerEquiv = function () { 
            var args = Array.prototype.slice.apply(arguments);
            if (args.length < 2) {
                return true; 
            }

            return (function (a, b) {
                if (a === b) {
                    return true; 
                } else if (a === null || b === null || typeof a === "undefined" || typeof b === "undefined" || hoozit(a) !== hoozit(b)) {
                    return false; 
                } else {
                    return bindCallbacks(a, callbacks, [b, a]);
                }

                
            })(args[0], args[1]) && arguments.callee.apply(this, args.splice(1, args.length - 1));
        };

        return innerEquiv;

    } ();

    
    
    
    
    
    
    
    
    window._verify = verify;
    window._assert = assert;
    window._fail = fail;
    window.getLocalizedError = Utils.getLocalizedError;

    window.Run = runner.run;
    window.runner = runner;
    window.TestCase = TestCase;
    window.BaselineTestCase = BaselineTestCase;
    window.CrossContextTest = CrossContextTest;
    window.logger = windowLogger;
    
    window.IE7STANDARDSMODE = Utils.IE7STANDARDSMODE;
    window.IE8STANDARDSMODE = Utils.IE8STANDARDSMODE;
    window.IE9STANDARDSMODE = Utils.IE9STANDARDSMODE;
    window.IE10STANDARDSMODE = Utils.IE10STANDARDSMODE;
    window.IE11STANDARDSMODE = Utils.IE11STANDARDSMODE;
    window.IE12STANDARDSMODE = Utils.IE12STANDARDSMODE;
    window.getHOSTMode = Utils.getHOSTMode;

    window.X86MODE = Utils.X86MODE;
    window.X64MODE = Utils.X64MODE;
    window.ARMMODE = Utils.ARMMODE;
    window.getIEArchitecture = Utils.getIEArchitecture;

    window.Utils = Utils;

    
    Utils.equiv = equiv;



    
    window.Chakra = {
        
        
        PathToDictionaryTransitionThreshold: 16
    }

    
    window.VBS_apglobal_init = function () {
        
        
        var proxy = new OldGlueProxy();
        window.apInitTest = proxy.apInitTest;
        window.apInitScenario = proxy.apInitScenario;
        window.apEndScenario = proxy.apEndScenario;
        window.apLogFailInfo = proxy.apLogFailInfo;
        window.apEndTest = proxy.apEndTest;
        window.apWriteDebug = proxy.apWriteDebug;
        window.VBS_apglobal_init = proxy.VBS_apglobal_init;
        window.apGetLocale = proxy.apGetLocale;
        proxy.VBS_apglobal_init();
    }

    
    
    if (typeof window.apGlobalObj == "undefined") {
        try {
            
            window.apGlobalObj = createActiveXObject("apgloballib.apglobal");
        } catch (e) {
            
            window.apGlobalObj = null;
        }
    }

})(this);


verify = _verify;
assert = _assert;
fail = _fail;


VBS_apglobal_init();
function ScriptEngineMajorVersion() { return 5; }
function ScriptEngineMinorVersion() { return 8; }
apGlobalObj.osSetIntlValue = function() { return 0; }
apGlobalObj.osGetIntlValue = function() { return 0; }
