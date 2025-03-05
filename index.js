function myFnc(myCB) {
    for (var i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            continue;
        }
        myCB();
    }
}

function myCallBack() {
    console.log("hi");
}

myFnc(myCallBack);