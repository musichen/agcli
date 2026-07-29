#!/usr/bin/env node

/**
 * AGCLI — Agent CLI
 * Lightweight command-line utilities for AI agent tooling.
 */

const args = process.argv.slice(2);
const command = args[0];

function showHelp(): void {
  console.log('AGCLI — Agent CLI\n');
  console.log('Usage:');
  console.log('  agcli echo <message>     Echo a message');
  console.log('  agcli date               Print current date/time');
  console.log('  agcli help               Show this help');
}

switch (command) {
  case 'echo':
    console.log(args.slice(1).join(' '));
    break;
  case 'date':
    console.log(new Date().toISOString());
    break;
  case 'help':
  default:
    showHelp();
    break;
}
