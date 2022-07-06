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


                function getUserName() {
                    var userprofilecomponent = container.getComponent("UserProfile");

                    userprofilecomponent.getUserProfile().then(function(profile) {
                        console.log(profile)
                    })
                    userprofilecomponent.getUserProfile().then(function(profile) {
                        let firstname = profile.firstname;
                        let lastname = profile.lastname;
                        var fullname = firstname + " " + lastname;

                        console.log("User: Full Name:!!! " + fullname);
                        // return fullname;

                        var layout = container.getComponent('Layout');

                        if (layout) {
                            layout.addChildView('', function() {
                                return new TestExtensionView({ container: fullname });
                            });
                        }
                    });
                }


                console.log("User: Full Name: " + getUserName());


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