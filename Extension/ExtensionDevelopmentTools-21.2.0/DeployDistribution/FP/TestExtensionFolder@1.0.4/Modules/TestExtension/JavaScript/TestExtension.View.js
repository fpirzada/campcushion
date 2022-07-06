// @module FP.TestExtensionFolder.TestExtension
define('FP.TestExtensionFolder.TestExtension.View', [
    'fp_testextensionfolder_testextension.tpl'

    , 'FP.TestExtensionFolder.TestExtension.SS2Model'

    , 'Backbone', 'SCView'
], function(
    fp_testextensionfolder_testextension_tpl

    , TestExtensionSS2Model

    , Backbone, SCViewModule
) {
    'use strict';

    // @class FP.TestExtensionFolder.TestExtension.View @extends Backbone.View
    return Backbone.View.extend({

        template: fp_testextensionfolder_testextension_tpl,
        initialize: function(options) {
            console.log(options)
            this.CustomerName = options.CustomerName
            this.myCart = options.myCart
            this.profileBalance = options.profileBalance

            /*  Uncomment to test backend communication with an example service
            	(you'll need to deploy and activate the extension first)
            */

            // this.model = new TestExtensionModel();
            // var self = this;
            // this.model.fetch().done(function(result) {
            // 	self.message = result.message;
            // 	self.render();
            // });
        }

        ,
        events: {}

        ,
        bindings: {}

        ,
        childViews: {

        }

        //@method getContext @return FP.TestExtensionFolder.TestExtension.View.Context
        ,
        getContext: function getContext() {
            //@class FP.TestExtensionFolder.TestExtension.View.Context

            this.message = this.message || { CustomerName: this.CustomerName, myCart: this.myCart, profileBalance: this.profileBalance }

            return {
                message: this.message
            };
        }
    });

    // var SCView = SCViewModule.SCView;

    // function TestExtensionView(options) {
    //     SCView.call(this, options);

    //     this.template = fp_testextensionfolder_testextension_tpl;
    //     this.contextDataRequest = ['item'];
    //     this.displayType = options.PLP.getDisplay().id;
    // }

    // TestExtensionView.prototype = Object.create(SCView.prototype);
    // TestExtensionView.prototype.constructor = TestExtensionView;

    // TestExtensionView.prototype.render = function() {
    //     if (this.displayType == 'list') {
    //         SCView.prototype.render.call(this);
    //     }
    // }

    // TestExtensionView.prototype.getContext = function() {
    //     return {
    //         storedetaileddescription: this.contextData.item().storedetaileddescription
    //     }
    // }

    // return TestExtensionView
});