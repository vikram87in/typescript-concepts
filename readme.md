In a terminal, run command "npx tsc -w" to run the typescript compiler in the watch mode. In other terminal, we can run "node lib/index.js" to execute the newly created/updated js file.

There is a concepts folder in src. Various topics are covered in that. corresponding js files would be created in the lib/concepts folder.

We have used 'ESNext' in the 'target' option in tsconfig.json. Originally, it was ES2016 when we initialized the file

Node is not able to directly execute the typescript files. So we needed 2 steps:
  * npx tsc: to run typescript compiler to create javascript files from typescript files
  * node ./lib/concepts/index.js: to execute the generated javascript file.

If we want to directly execute the typescript files, we need an npm package "ts-node": 
  * npx ts-node ./src/concepts/index.ts: to directly run ts-node from Internet (if not installed locally)