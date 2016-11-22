/**
 * Created by Nikhil S on 14-Nov-16.
 */

module.exports = function () {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}]
    }, {collection: "user"});
    return UserSchema;
};