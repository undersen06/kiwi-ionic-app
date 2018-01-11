
'use strict';

(function() {
  this.app.service('RegionsModel', ['$q', '$localStorage', function($q, $localStorage) {

    var region;

    return {

      getRegions: function() {
        return region = $localStorage.region;
      },
        setRegions: function(data) {
        $localStorage.region = data;
      },
        destroyRegions: function() {
        delete $localStorage.region;
        return true;
      }
    };

  }]);
}).call(this);
