(function($) {
    appcan.button("#nav-left", "btn-act", function() {
        appcan.window.open('queryByPage', 'queryByPage.html', 10);
    });
    appcan.button("#nav-right", "btn-act", function() {
    });

    // appcan.ready(function() {
    // $.scrollbox($("body")).on("releaseToReload",
    // function() { //After Release or call reload function,we reset the bounce
    // $("#ScrollContent").trigger("reload", this);
    // }).on("onReloading",
    // function(a) { //if onreloading status, drag will trigger this event
    // }).on("dragToReload",
    // function() { //drag over 30% of bounce height,will trigger this event
    // }).on("draging",
    // function(status) { //on draging, this event will be triggered.
    // }).on("release",
    // function() { //on draging, this event will be triggered.
    // }).on("scrollbottom",
    // function() { //on scroll bottom,this event will be triggered.you should get data from server
    // $("#ScrollContent").trigger("more", this);
    // }).hide();
    // })

    function getTableData() {
        var startTime = appcan.locStorage.getVal("startTime");
        var acceptTime = appcan.locStorage.getVal("acceptTime");
        var pageSize = appcan.locStorage.getVal("pageSize");
        var pageIndex = appcan.locStorage.getVal("pageIndex");
        appcan.request.ajax({
            url : "http://47.98.37.235:8080/airconditioner/rest/basic/binds/st/2019-07-01 00:00:00/et/2019-08-01 00:00:00/ps/20/pi/0?tm=" + (new Date()).getTime(),
            type : 'GET',
            success : function(res) {
                var obj = JSON.parse(res);
                for (var i = 0; i < obj.count; i++) {
                    $('<div class="ub ub-hor ub-f1 ulev-1 uinn ub-ac bc-border ubt ubb c-gra1 umh4"><div class="ub-f1 ub-con ub-ac ub-pc ub">'+obj.pageList[i].bindId+'</div><div class="umw1"></div><div class="ub-f1 ub-con ub-ac ub-pc ub">'+obj.pageList[i].assetnum+'</div><div class="umw1"></div><div class="ub-f1 ub-con ub-ac ub-pc ub">'+obj.pageList[i].bluetoothCode+'</div><div class="umw1"></div><div class="ub-f1 ub-con ub-ac ub-pc ub">'+obj.pageList[i].bindTime+'</div><div class="umw1"></div><div class="ub-f1 ub-con ub-ac ub-pc ub">'+obj.pageList[i].bindUserId+'</div></div>').appendTo('.jyh');
                }
            }
        });
    }

    getTableData();
})($);
