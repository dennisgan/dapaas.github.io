(function() {

    var cookieName = "user_name";
    
    if (!document.cookie && document.cookie.indexOf(cookieName) === -1) {
        return;
    }

    function read_cookie(k,r){return(r=RegExp('(^|; )'+encodeURIComponent(k)+'=([^;]*)').exec(document.cookie))?r[2]:null;};

    var name = read_cookie(cookieName);

    var s = document.getElementsByClassName("dapaas-signin");
    for (var i = 0, l = s.length; i < l; ++i) {
        s[i].lastChild.data = name;
    }
    // https://datagraft.net/pages/myassets/

})();
