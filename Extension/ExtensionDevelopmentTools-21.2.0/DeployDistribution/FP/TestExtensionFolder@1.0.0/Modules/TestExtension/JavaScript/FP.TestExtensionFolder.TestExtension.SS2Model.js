// Model.js
// -----------------------
// @module Case
define("FP.TestExtensionFolder.TestExtension.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/TestExtension/SuiteScript2/TestExtension.Service.ss"
            ),
            true
        )
});
});
