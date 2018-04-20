/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs/vue'

import Ingredient from '@/components/Ingredient'
import '@/assets/styles/main.css'

storiesOf('Ingredient', module)
  .addDecorator(withKnobs)
  .addDecorator(() => ({
    template: '<div><story/></div>'
  }))
  .add('default', () => ({
    components: { Ingredient },
    data: () => ({
      value: text('value', 'potatoes')
    }),
    template: '<ingredient :value="value"/>'
  }))

/* eslint-enable react/react-in-jsx-scope */
