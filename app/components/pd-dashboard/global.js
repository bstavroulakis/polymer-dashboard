String.prototype.contains = function (it) { return this.indexOf(it) != -1; };
String.prototype.replaceAll = function(find, replace) {
    return this.replace(new RegExp(find, 'g'), replace);
}

var PDDashboard = {
    utils:{
        getUrlVars: function () {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
                function(m,key,value) {
                    vars[key] = value;
                });
            return vars;
        }
    }
}