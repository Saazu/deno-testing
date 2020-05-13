import { assert, equal } from 'https://deno.land/std/testing/asserts.ts';

Deno.test('the truth', () => {
  assert(1 === 1);
})

Deno.test('the whole truth', () => {
  equal(1, 1);
})