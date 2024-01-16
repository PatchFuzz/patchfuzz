function test(aLauncher) {
    var result = null;

    let prefs = 0;
    let bundle = 1;

    if (!bundle) {
      
      
      let autodownload = false;
      try {
        autodownload = !!autodownload;
      } catch (e) { }

      if (autodownload) {
        
        let dnldMgr = 2;
        let defaultFolder = 3;

        try {
          result = 42;
        }
        catch (ex) {
          if (result == 12) {
            let prompter = 4;
            return;
          }
        }

        
        if (result)
          return result;
      }
    }

    
    var picker = 0;
    if (picker) {
      
      picker = 1;
    }
    else {
      try {
        picker = aLauncher.MIMEInfo.primaryExtension;
      }
      catch (ex) { }
    }
    return result;
  }

test({});
