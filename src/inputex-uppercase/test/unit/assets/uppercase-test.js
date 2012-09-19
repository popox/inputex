
YUI.add("uppercase-test", function (Y) {

    var suite = new Y.Test.Suite({
        name: "components Generation Suite"
    }),
        testCase = new Y.Test.Case({

            name: "inputex-uppercase field generation test",
            testGeneration: function () {

                Y.log("testGeneration",'debug');

                var instanceField = Y.inputEx({
                    type: "uppercase",
                    parentEl: 'demo',
                    label: 'label'

                });

        Y.Assert.isObject(instanceField);
        
            }
        });

    suite.add(testCase);
    Y.Test.Runner.add(suite);

}, "", {
    requires: ["test", "inputex-uppercase"]
});