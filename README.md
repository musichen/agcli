# AGCLI — Agent CLI

Lightweight command-line utilities for AI agent tooling.

## Usage

```bash
agcli --help
```

### Commands

| Command | Description | Example |
| --- | --- | --- |
| `agcli echo <message>` | Echo a message back to the terminal | `agcli echo hello agents` prints `hello agents` |
| `agcli date` | Print the current date and time in ISO format | `agcli date` prints e.g. `2026-10-22T17:00:00.000Z` |
| `agcli help` | Show the help text | `agcli help` |

Running `agcli` with no command, an unknown command, or `--help` also shows the help text. The implementation lives in a single file, [`src/cli.ts`](src/cli.ts).

## Development

The whole CLI is a single file, [`src/cli.ts`](src/cli.ts), with no build config in this repo. When you add or rename a command:

1. Implement it in the `switch` in `src/cli.ts`.
2. Add it to the `showHelp()` output in the same file.
3. Add it to the Commands table in this README, so all three stay in sync.

Test by running the CLI with your TypeScript runner and checking `help`, `echo`, and `date` from the table above.

## License

MIT
