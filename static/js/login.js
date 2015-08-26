(function() {

    if (!document.cookie && document.cookie.indexOf("dapaas_user_login_ever=") === -1) {
        return;
    }

    function read_cookie(k,r){return(r=RegExp('(^|; )'+encodeURIComponent(k)+'=([^;]*)').exec(document.cookie))?r[2]:null;};

    var name = read_cookie("dapaas_user_login_ever");

    var s = document.getElementsByClassName("dapaas-signin");
    for (var i = 0, l = s.length; i < l; ++i) {
        s[i].lastChild.data = name;
    }
    // https://datagraft.net/pages/myassets/

})();
