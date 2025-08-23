import { Worker, isMainThread } from 'worker_threads';

// Simulate an async function (e.g., fetching from a database or API)
async function fetchUser(id: number): Promise<{ id: number; name: string; age: number }> {
  return new Promise((resolve, reject) => {
    // reject(new Error("User not found"));
    setTimeout(() => {
      resolve({ id, name: "Alice" , age:32});
    }, 1000);
  });
}



import path from 'path';
console.log('>> isMainThread:', isMainThread);
if (isMainThread) {
  // Main thread: offload blocking task to a worker
  function runBlockingTask(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      const worker = new Worker(
        path.resolve(__dirname, 'fibonacci-worker.ts'),
        {
          workerData: n,
          execArgv: [
            '--require',
            require.resolve('ts-node/register')
          ]
        }
      );
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  }

  async function main() {
    console.log("Fetching user...");
    const user = await fetchUser(1);
    console.log("User fetched:", user);

    // Start two heavy tasks in parallel
    console.log("Offloading two blocking tasks to workers in parallel...");
    const heavyInput1 = 2; // Adjust to take ~5-6 seconds
    const heavyInput2 = 3; // Adjust to take ~5-6 seconds
    const [result1, result2] = await Promise.all([
      runBlockingTask(heavyInput1),
      runBlockingTask(heavyInput2)
    ]);
    console.log(`Fibonacci result from worker 1 (n=${heavyInput1}):`, result1);
    console.log(`Fibonacci result from worker 2 (n=${heavyInput2}):`, result2);
    console.log("Both workers finished in parallel.");
  }

  main();
}