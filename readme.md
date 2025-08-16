
# typescript-concepts

## Dependency Management

This project uses [pnpm](https://pnpm.io/) instead of npm for managing dependencies.

### Getting Started

1. Install pnpm globally (if you haven't already):
   ```sh
   npm install -g pnpm
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Run scripts (example):
   ```sh
   pnpm run build
   ```

## Why pnpm?
- Faster installs
- Disk space efficient
- Strict dependency isolation

---

## TypeScript Usage

In a terminal, run command `pnpm tsc -w` to run the TypeScript compiler in watch mode. In another terminal, you can run `node lib/index.js` to execute the newly created/updated JS file.

There is a `concepts` folder in `src`. Various topics are covered in that. Corresponding JS files will be created in the `lib/concepts` folder.

We have used `'ESNext'` in the `target` option in `tsconfig.json`. Originally, it was `ES2016` when we initialized the file.

Node is not able to directly execute the TypeScript files. So we need 2 steps:
  * `pnpm tsc`: to run the TypeScript compiler to create JavaScript files from TypeScript files
  * `node ./lib/concepts/index.js`: to execute the generated JavaScript file.

If you want to directly execute the TypeScript files, you need the package `ts-node`:
  * `pnpm ts-node ./src/concepts/index.ts`: to directly run ts-node (if installed locally)

You can update the file name in the `build` script and run command: `pnpm run build` to execute that particular file.


## Running with nodemon (Auto-restart on changes)

You can use [nodemon](https://nodemon.io/) to automatically restart your TypeScript app when files change. This project supports two ways to configure nodemon:

### 1. CLI-based configuration

- Script: `pnpm run start-cli`
- Command: 
   ```sh
   pnpm run start-cli
   ```
- This runs nodemon with options directly in the script:
   - Watches the `src` folder
   - Restarts on `.ts` file changes
   - Uses `ts-node` to run `./src/index.ts`
- **Advantage:**
   - Quick to set up for simple use cases
   - All configuration is visible in `package.json` under scripts

### 2. Config file-based configuration (`nodemon.json`)

- Script: `pnpm run start`
- Command:
   ```sh
   pnpm start
   ```
- This uses the `nodemon.json` file for configuration:
   - Watches the `src` folder
   - Restarts on `.ts` file changes
   - Ignores `dist` and `lib` folders
   - Uses `ts-node` to run `./src/index.ts`
- **Advantage:**
   - Cleaner `package.json` scripts
   - Easier to manage and update complex or multiple nodemon options
   - Keeps configuration in a dedicated file, which is useful for teams or larger projects

---

See `package.json` and `nodemon.json` for details and customization options.

---