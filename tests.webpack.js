var unitTests = require.context('./src', true, /\.test\.js|$/)
unitTests.keys().forEach(unitTests)

var integrationTests = require.context('./tests', true, /\.js$/)
integrationTests.keys().forEach(integrationTests)
