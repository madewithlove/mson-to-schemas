#!/usr/bin/env node

process.title = 'mson2schema';

try {
    require('../dist/index');
} catch (error) {
    process.exit(1);
}
