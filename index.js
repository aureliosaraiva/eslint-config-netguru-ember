'use strict'

module.exports = {
  extends: [
    'airbnb-base'
  ],
  globals: {
  },
  plugins: [
    'netguru-ember'
  ],
  rules: {
    'func-names': 0,
    'space-before-function-paren': 0,
    'no-shadow': 0,
    'no-else-return': 0,
    'no-extend-native': 0,
    'no-underscore-dangle': 0,
    'arrow-body-style': 0,
    'prefer-arrow-callback': 0,
    'prefer-rest-params': 0,
    'consistent-return': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'generator-star-spacing': [2, "after"],
    'netguru-ember/local-modules': 2,
    'netguru-ember/no-observers': 2,
    'netguru-ember/no-side-effects': 2,
    'netguru-ember/jquery-ember-run': 2,
    'netguru-ember/named-functions-in-promises': 2,
    'netguru-ember/order-in-components': 2,
    'netguru-ember/order-in-models': 2,
    'netguru-ember/alias-model-in-controller': 2,
    'netguru-ember/query-params-on-top': 2,
    'netguru-ember/no-empty-attrs': 2,
    'netguru-ember/closure-actions': 1,
    'netguru-ember/routes-segments-snake-case': 2,
    'netguru-ember/no-function-prototype-extensions': 2,
    'netguru-ember/no-on-calls-in-components': 2,
  },
  env: {
    browser: true,
    jquery: true
  }
}
