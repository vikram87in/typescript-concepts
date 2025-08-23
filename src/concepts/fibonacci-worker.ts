import { isMainThread, parentPort, workerData } from 'worker_threads';

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// ts-node worker: process.argv[2] is the script path, workerData is passed as normal
const n: number = workerData;
console.log('>> isMainThread:', isMainThread);
const result = fibonacci(n);
if (parentPort) {
  parentPort.postMessage(result);
} else {
  // fallback for direct run
  console.log(result);
}
