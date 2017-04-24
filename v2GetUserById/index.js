var rp = require('request-promise');

module.exports = function(context, req) {

    var inputId = context.bindingData.id;
    context.log('Looking for user %s', inputId);

    var options = {
        uri: 'https://jsonplaceholder.typicode.com/users/' + inputId,
        json: true
    };

    var response = {
        body: {},
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    };

    rp(options)
        .then(function(user) {
            context.log('Found user %s', user);
            response.body = { name: user.name, email: user.email, username: user.username, phone: user.phone };
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