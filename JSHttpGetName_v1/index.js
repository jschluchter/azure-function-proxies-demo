module.exports = function(context, req) {
    context.log("Retrieved records:", "500");
    context.res = {
        status: 200,
        body: { "name": req.name }
    };
    context.done();
};