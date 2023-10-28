const timeWord = require('./timeWord');



describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

  const testCases = [ 
    { input: '00:00', expectedOutput: 'midnight' },
    { input: '00:12', expectedOutput: 'twelve twelve am' },
    { input: '01:00', expectedOutput: 'one o\'clock am' },
    { input: '06:01', expectedOutput: 'six oh one am' },
    { input: '06:10', expectedOutput: 'six ten am' },
    { input: '06:18', expectedOutput: 'six eighteen am' },
    { input: '06:30', expectedOutput: 'six thirty am' },
    { input: '10:34', expectedOutput: 'ten thirty four am' },
    { input: '12:00', expectedOutput: 'noon' },
    { input: '12:09', expectedOutput: 'twelve oh nine pm' },
    { input: '23:23', expectedOutput: 'eleven twenty three pm' }
  ];

testCases.forEach((testCases, index) => {
  const { input, expectedOutput } = testCases;
  const output = convertTimeWords(input);
  console.log(`Test Case ${index + 1}:`, output === expectedOutput ? "Passed" : "Failed");
});