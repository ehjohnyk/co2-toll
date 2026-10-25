import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../services/api-gw/index.js', import.meta.url), 'utf8');
const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('package manifest is parseable and declares module semantics', () => {
  assert.equal(manifest.type, 'module');
  assert.equal(manifest.name, 'co2-toll');
});

test('API does not embed database credentials or insecure routing URL', () => {
  assert.doesNotMatch(source, /postgres(?:ql)?:\/\//i);
  assert.doesNotMatch(source, /http:\/\/router\.project-osrm\.org/i);
  assert.match(source, /https:\/\/router\.project-osrm\.org/);
});

test('provider failures are bounded and do not disclose internal errors to callers', () => {
  assert.match(source, /AbortSignal\.timeout\(10000\)/);
  assert.match(source, /ROUTING_PROVIDER_UNAVAILABLE/);
  assert.doesNotMatch(source, /send\(\{\s*error:\s*err\.message/);
});

test('prototype result is explicitly marked as non-authoritative', () => {
  assert.match(source, /isDemoEstimate:\s*true/);
  assert.match(source, /unverified flat rate/i);
});
