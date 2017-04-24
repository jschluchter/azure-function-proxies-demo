module.exports = function(context, req) {

    var inputName = context.bindingData.name;

    context.log("Retrieved records:", "500");
    context.res = {
        status: 200,
        body: { name: inputName }
    };
    context.done();
};