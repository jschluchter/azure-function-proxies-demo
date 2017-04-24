var rp = require('request-promise');

module.exports = function(context, req) {
    context.log('All Users');

    var options = {
        uri: 'https://jsonplaceholder.typicode.com/users/',
        json: true
    };

    var response = {
        body: {},
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    };

    rp(options)
        .then(function(users) {
            context.log('Found %s users', users.length);
            response.body = users;
        })
        .catch(function(err) {
            context.log('Danger Will Robinson! Error=%s', err);
            response.status = 500;
        })
        .finally(function() {
            context.res = response;
            context.done();
        });


};