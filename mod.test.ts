import { handler } from './mod.ts';

Deno.test("env", () => {
  if(!handler) {
    throw Error('Missing module')
  }
});