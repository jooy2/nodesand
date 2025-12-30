export const benchConfiguration = { name: 'Benchmark', time: 100 };

export default function defineBenchmarks(bench) {
  bench
    .add('faster task', () => {
      console.log('I am faster');
    })
    .add('slower task', async () => {
      await new Promise((resolve) => setTimeout(resolve, 1)); // we wait 1ms :)
      console.log('I am slower');
    });
}
