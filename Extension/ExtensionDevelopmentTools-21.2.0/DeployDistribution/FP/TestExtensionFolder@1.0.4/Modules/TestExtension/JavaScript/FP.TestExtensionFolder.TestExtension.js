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
                        layout.addChildView('ProfileChanges.Notifications', function() {
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