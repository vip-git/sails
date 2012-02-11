var api = require('./services/api');
var _ = require('underscore');

// Set up routing table
exports.mapUrls = function mapUrls (app) {

    /**
     * Respond with content for a load context request
     * (update cache)
     */
    app.get("/load*",function(req, res) {

        // Get context based on request
        var context = api.getContext(req);

        // Look up content schema for this context
        api.getContentSchema(context, function (content){
            console.log("Answered read request.",content);

            // Return that information to crud client
            api.respond(content,req,res);
        });

    });


    /**
     * Respond to read request for a specific node
     */
    app.get("/read*", function(req, res) {

        // Get context based on request
        var context = api.getContext(req);

        // Look up content schema for this context
        api.getNode(context, function (content) {
            console.log("Answered read request.",content);

            // Return that infomration to crud client
            api.respond(content,req,res);
        });

    });

}