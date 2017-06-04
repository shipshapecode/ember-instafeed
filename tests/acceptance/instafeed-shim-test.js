import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Instafeed from 'instafeed';

moduleForAcceptance('Acceptance | instafeed shim');

test('testing shim import', function(assert) {
  assert.ok(Instafeed !== undefined && Instafeed !== null);
  assert.equal(Instafeed.toString().substr(0, 35), 'function Instafeed(params, context)');
});
