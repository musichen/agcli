#!/usr/bin/env node

/**
 * AXI - Agent eXperience Interface
 * Lightweight CLI utilities for AI agent tooling.
 */

const args = process.argv.slice(2);
const command = args[0];

function showHelp(): void {
  console.log('AXI - Agent eXperience Interface\n');
  console.log('Usage:');
  console.log('  axi echo <message>     Echo a message');
  console.log('  axi date               Print current date/time');
  console.log('  axi help               Show this help');
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
