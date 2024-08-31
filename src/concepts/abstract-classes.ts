
abstract class Command {
  abstract commandLine(): string;
  execute(): void {
    console.log('executing command: ' + this.commandLine());
  }
}

class GitResetCommand extends Command {
  commandLine(): string {
    return 'git reset';
  }
}

class GitAddCommand extends Command {
  commandLine(): string {
    return 'git add';
  }
} 

// new Command(); // Cannot create an instance of an abstract class.
new GitResetCommand().execute(); // executing command: git reset
new GitAddCommand().execute(); // executing command: git add