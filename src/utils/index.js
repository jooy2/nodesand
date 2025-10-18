/*
 * Use to compare execution times between specific functions.
 * The overall execution time of nodesand may be misleading when using this function.
 *
 * ------------------------------- Example
 *  runBenchmark([
 *   { name: 'indexOf', func: () => 'hello'.indexOf('h') },
 *   { name: 'regex:test', func: () => /h/g.test('hello') }
 *  ]);
 * ------------------------------- Results
 * ----------> Start Time: Thu Oct 19 2023 15:11:34 GMT+0900 (Korean Standard Time)
 * ----------> End   Time: Thu Oct 19 2023 15:11:35 GMT+0900 (Korean Standard Time)
 * ----------> Run  Times: 30,000,000
 * ----------> Results:
 * [
 *   { name: 'indexOf', time: '329.33062505722046 ms' },
 *   { name: 'regex:test', time: '848.7695000171661 ms' }
 * ]
 * */
export const runBenchmark = (testItems, runTimes = 30000000) => {
  if (!testItems || typeof testItems !== 'object') {
    throw new Error('testItems params must be specified correctly');
  }
  const testStart = new Date();
  const results = [];

  for (const item of testItems) {
    performance.now();
    for (let i = 0; i < runTimes; i += 1) {
      item.func?.call();
    }
    results.push({
      name: item.name,
      time: `${performance.now()} ms`
    });
  }

  const line = `${'-'.repeat(10)}> `;

  console.log(
    `\n${line}Start Time: ${testStart}\n${line}End   Time: ${new Date()}\n${line}Run  Times: ${Intl.NumberFormat().format(
      runTimes
    )}\n${line}Results: `
  );
  console.dir(results, { depth: null });
};

export default { runBenchmark };
