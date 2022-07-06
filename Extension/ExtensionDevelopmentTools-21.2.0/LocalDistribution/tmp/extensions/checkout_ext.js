var extensions = {};

extensions['FP.TestExtensionFolder.1.0.5'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/FP/TestExtensionFolder/1.0.5/' + asset;
}

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

// Model.js
// -----------------------
// @module Case
define("FP.TestExtensionFolder.TestExtension.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/TestExtension.Service.ss"
            )
        )
        
});
});


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


const { forEach } = require("underscore");

define(
    'FP.TestExtensionFolder.TestExtension', [
        'FP.TestExtensionFolder.TestExtension.View'
    ],
    function(
        TestExtensionView
    ) {
        'use strict';

        return {
            mountToApp: function mountToApp(container) {
                // using the 'Layout' component we add a new child view inside the 'Header' existing view 
                // (there will be a DOM element with the HTML attribute data-view="Header.Logo")
                // more documentation of the Extensibility API in
                // https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

                /** @type {LayoutComponent} */
                var itemCount = 0;

                function getBillAddress() {

                    var cart = container.getComponent("Cart");
                    cart.getBillAddress().then(function(billaddress) {
                        if (billaddress.isresidential == "53593") {
                            // Do work related to Sunday shipments for residential addresses.
                            // ...
                            console.log("true");
                        }
                        // console.log("Billing address");
                        // console.log(billaddress)

                    });

                }


                function getLatestAddition() {
                    var cart = container.getComponent('Cart');

                    return cart.getLatestAddition().then(function(line) {
                        if (line) {
                            var lastItemAddedId = line.internalid;
                            var lastItemAddedName = line.item.displayname;
                            // console.log("Line : ");
                            // console.log(line)
                            return line
                        }
                    });
                }

                function getShipAddress() {
                    var cart = container.getComponent("Cart");
                    cart.getShipAddress().then(function(shipaddress) {

                        if (shipaddress.country != "US") {
                            alert("Shipping of this item outside the US may incur delays due to export regulations.");
                        }
                        // console.log("Shipaddress:");

                        // console.log(shipaddress)
                    });
                }

                function getSummary() {
                    var cart = container.getComponent("Cart");
                    return cart.getSummary().then(function(summary) {
                        if (summary.total > 10000) {
                            throw new Error("Contact our sales team on 555-123-1234 for order amounts above 10,000 USD.");
                        }

                        itemCount = summary.extras.itemcount;;
                    });
                }

                function getLines() {
                    var cart = container.getComponent("Cart");

                    cart.getLines().then(function(lines) {

                        if (lines.length > 100) {
                            throw new Error("You are ordering a lot of stuff. For high-volume orders, contact our sales team on 555-123-1234.");
                        }
                        // if (lines.length < 100) {
                        //     lines.forEach(function myFunction(item) { console.log(item.item.displayname); })
                        // }
                        // console.log("loop over items: ");
                        // console.log(lines)
                    });

                }


                // getLatestAddition()

                // getSummary();
                // getLines();
                // getShipAddress();
                // getBillAddress();
                // const result = await getSummary();
                getSummary()
                console.log(itemCount);

                var userprofilecomponent = container.getComponent("UserProfile");

                userprofilecomponent.getUserProfile().then(function(profile) {

                    if (profile.firstname) {
                        let firstname = profile.firstname;
                        let lastname = profile.lastname;
                        var fullname = firstname + " " + lastname;
                    } else {
                        var fullname = profile.companyname
                    }

                    var _profileBalance = profile.balance
                        // var _myCart = getSummary();


                    // console.log("userProfile : profile");
                    // console.log(profile);
                    // console.log(profile.balance);

                    // console.log("-==-");
                    // return fullname;

                    var layout = container.getComponent('Layout');

                    if (layout) {
                        layout.addChildView('accountUserProfile', function() {
                            return new TestExtensionView({ CustomerName: fullname, myCart: itemCount, profileBalance: _profileBalance });
                        });
                    }
                });









                // var PLP = container.getComponent('PLP');

                // if (PLP) {
                //     PLP.addChildViews(PLP.PLP_VIEW, {
                //         'ItemViews.Price': {
                //             'CDRExample.View': {
                //                 childViewIndex: 0,
                //                 childViewConstructor: function() {
                //                     return new CDRExampleView({ PLP: PLP })
                //                 }
                //             }
                //         }
                //     })
                // }

            }
        };
    });

};

SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["FP.TestExtensionFolder.TestExtension.View","FP.TestExtensionFolder.TestExtension.Model","FP.TestExtensionFolder.TestExtension.SS2Model"];
try{
	extensions['FP.TestExtensionFolder.1.0.5']();
	SC.addExtensionModule('FP.TestExtensionFolder.TestExtension');
}
catch(error)
{
	console.error(error);
}

