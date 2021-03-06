Feature('Test scenario types');

Scenario('Simple test', () => {
  console.log('It\'s usual test');
});

Scenario('Simple generator test', function* (I) {
  const text = yield I.stringWithScenarioType('generator');
  console.log(text);
});

Scenario('Simple async/await test', async (I) => {
  const text = await I.stringWithScenarioType('async/await');
  console.log(text);
});

// eslint-disable-next-line arrow-parens
Scenario('Should understand async without brackets', async I => {
  const text = await I.stringWithScenarioType('asyncbrackets');
  console.log(text);
});
