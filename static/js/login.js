(function() {

    var cookieName = 'user_name';
    
    if (!document.cookie || document.cookie.indexOf(cookieName) === -1) {
        return;
    }

    function read_cookie(k,r){return(r=RegExp('(^|; )'+encodeURIComponent(k)+'=([^;]*)').exec(document.cookie))?r[2]:null;};

    var name = read_cookie(cookieName).replace(/^"|"$/g, '');

    var s = document.getElementsByClassName('dapaas-signin');
    for (var i = 0, l = s.length; i < l; ++i) {
        s[i].lastChild.data = name;
    }

    var navigation = document.getElementById('header-navigation-area');
    if (!navigation) {
        return;
    }

    var signin = navigation.getElementsByClassName('dapaas-signin')[0];

    var links = [['Explore', 'catalogs/'], ['Dashboard', 'myassets/'], ['Publish', 'publish/'], ['Transform', 'transformations/']];
    for (i = 0, l = links.length; i < l; ++i) {
        var link = document.createElement('a');
        link.className = 'mdl-navigation__link';
        link.setAttribute('href', 'https://datagraft.net/pages/'+links[i][1]);
        link.appendChild(document.createTextNode(links[i][0]));
        navigation.insertBefore(link, signin);
    }

})();
