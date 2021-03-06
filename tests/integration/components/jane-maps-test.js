import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | jane-maps', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{jane-maps}}`);

    assert.equal(this.element.textContent.trim(), 'Missing Mapbox GL JS CSS');

    // Template block usage:
    await render(hbs`
      {{#jane-maps}}
        template block text
      {{/jane-maps}}
    `);

    assert.equal(this.element.textContent.trim(), 'Missing Mapbox GL JS CSS');
  });
});
