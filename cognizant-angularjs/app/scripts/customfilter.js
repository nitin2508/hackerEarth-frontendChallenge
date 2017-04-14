'use strict';

angular.module('CodeCafeApp')
    .filter('custom', CustomFilter);

function CustomFilter() {
    return function(items, filtered) {
        if (!items) return items;

        var filteredArray = items.filter(filterFunction);

        function filterFunction(item) {
            if (!filtered.accepted && !filtered.skipped && !filtered.timeLimit && !filtered.runtime && !filtered.wronganswer) return true;

            var status = item.compiler_status;
            if (filtered.accepted && status === 'Accepted') {
                return true;
            } else if (filtered.skipped && status === 'Skipped') {
                return true;
            } else if (filtered.timeLimit && status.indexOf('Time limit') !== -1) {
                return true;
            } else if (filtered.runtime && status.indexOf('Runtime error') !== -1) {
                return true;
            } else if (filtered.wronganswer && status.indexOf('Wrong answer') !== -1) {
                return true;
            }

            return false;
        }

        return filteredArray;

    };
}