function browser(BrowserName){
    if (BrowserName === "chrome"){
        console.log("launching a chrome browser");
    }
    else{
        console.log("launching a firefox browser");
    }
        
}

function testType (testingmode){
    switch (testingmode){
        case "smoke":
        console.log("running smoke test");
        break
        case "sanity":
        console.log("running sanity test");
        break
        case "regression":
        console.log("running regression test");
        break
        default:
        console.log("running default smoke");
        
        
        
        
    }
}

browser("chrome")
browser("firefox")

testType("sanity")

