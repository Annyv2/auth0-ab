(function() {
  "use strict";

  var auth0ab = new Auth0AB({
    experiments: [
      {
        name: 'experiment-1',
        variants: [
          {
            name: 'variant-1',
            settings: {
              weight: 1
            },
            properties: {
              'title': 'Title on EXPERIMENT 1',
              'grettings': {
                type: 'js',
                args: ['name'],
                body: 'alert("Hello " + name + "! Nice to meet you! This is the variant-1")'
              }
              //...
            }
          },
          {
            name: 'variant-2',
            settings: {
              // There is the double of probability of getting variant-2 than of getting variant-1.
              // You can "play" with this numbers and see the result.
              weight: 2
            },
            properties: {
              'title': 'Title on EXPERIMENT 2',
              'grettings': {
                type: 'js',
                args: ['name'],
                body: 'alert("Hello " + name + "! Great you are here again! This is the variant-2")'
              }
              //...
            }
          }
        ]
      }
    ]
  });

  Auth0ABExamples.auth0ab = auth0ab;
})();