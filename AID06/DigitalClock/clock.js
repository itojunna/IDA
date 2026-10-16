//時計の描画処理スタート
clock();

function clock () {
    //現在日時を取得
    let d = new Date();

    //デジタル時計を更新
    updateDigitalClock(d);
    
    //次の「0ミリ秒」に実行されるよう、次の描画処理を予約
    let delay = 1000 - new Date().getMilliseconds();
    setTimeout(clock, delay);
}
    
function updateDigitalClock (d) {
    const AA_str = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let YY = d.getFullYear().toString().slice(-2);
    let MM = d.getMonth() + 1;
    let DD = d.getDate();
    let AA= d.getDay();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    
    //桁あわせ
    if(MM < 10) { MM = "0" + MM; }
    if(DD < 10) { DD = "0" + DD; }
    if(hh < 10) { hh = "0" + hh; }
    if(mm < 10) { mm = "0" + mm; }
    if(ss < 10) { ss = "0" + ss; }
    
    let textJP = YY + "/" + MM + "/" + DD + " (" + AA_str[AA] + ")<br>" + hh + ":"+ mm + ":" + ss;


    let nyDateStr = d.toLocaleString("en-US", { timeZone: "America/New_York" });
    let ny = new Date(nyDateStr);
    
    let nyYY = ny.getFullYear().toString().slice(-2);
    let nyMM = ny.getMonth() + 1;
    let nyDD = ny.getDate();
    let nyAA = ny.getDay();
    let nyhh = ny.getHours();
    let nymm = ny.getMinutes();
    let nyss = ny.getSeconds();
    
    // 桁あわせ
    if(nyMM < 10) { nyMM = "0" + nyMM; }
    if(nyDD < 10) { nyDD = "0" + nyDD; }
    if(nyhh < 10) { nyhh = "0" + nyhh; }
    if(nymm < 10) { nymm = "0" + nymm; }
    if(nyss < 10) { nyss = "0" + nyss; }
    
    let textNY = nyYY + "/" + nyMM + "/" + nyDD + " (" + AA_str[nyAA] + ")<br>" + nyhh + ":"+ nymm + ":" + nyss;


    let lonDateStr = d.toLocaleString("en-US", { timeZone: "Europe/London" });
    let lon = new Date(lonDateStr);
    
    let lonYY = lon.getFullYear().toString().slice(-2);
    let lonMM = lon.getMonth() + 1;
    let lonDD = lon.getDate();
    let lonAA = lon.getDay();
    let lonhh = lon.getHours();
    let lonmm = lon.getMinutes();
    let lonss = lon.getSeconds();
    
    // 桁あわせ
    if(lonMM < 10) { lonMM = "0" + lonMM; }
    if(lonDD < 10) { lonDD = "0" + lonDD; }
    if(lonhh < 10) { lonhh = "0" + lonhh; }
    if(lonmm < 10) { lonmm = "0" + lonmm; }
    if(lonss < 10) { lonss = "0" + lonss; }
    
    let textLon = lonYY + "/" + lonMM + "/" + lonDD + " (" + AA_str[lonAA] + ")<br>" + lonhh + ":"+ lonmm + ":" + lonss;


    let options = { timeZone: 'America/Los_Angeles', hour12: false };
    let laxDateStr = new Date().toLocaleString('en-US', options);
    let lax = new Date(laxDateStr);
    
    let laxYY = lon.getFullYear().toString().slice(-2);
    let laxMM = lon.getMonth() + 1;
    let laxDD = lon.getDate();
    let laxAA = lon.getDay();
    let laxhh = lon.getHours();
    let laxmm = lon.getMinutes();
    let laxss = lon.getSeconds();
    
    // 桁あわせ
    if(lonMM < 10) { lonMM = "0" + lonMM; }
    if(lonDD < 10) { lonDD = "0" + lonDD; }
    if(lonhh < 10) { lonhh = "0" + lonhh; }
    if(lonmm < 10) { lonmm = "0" + lonmm; }
    if(lonss < 10) { lonss = "0" + lonss; }
    
    let textLax = laxYY + "/" + laxMM + "/" + laxDD + " (" + AA_str[laxAA] + ")<br>" + laxhh + ":"+ laxmm + ":" + laxss;


    let text = "【JP】<br>" + textJP + "<br><br>【NY】<br>" + textNY + "<br><br>【London】<br>" + textLon + "<br><br>【Los_Angeles】<br>" + textLax;
    document.getElementById("digital_clock").innerHTML = text;
}