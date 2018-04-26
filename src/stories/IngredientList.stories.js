/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import { withKnobs, array } from '@storybook/addon-knobs/vue'

import Ingredient from '@/components/Ingredient'
import IngredientList from '@/components/IngredientList'
import '@/assets/styles/main.css'

storiesOf('IngredientList', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { IngredientList, Ingredient },
    data: () => ({
      list: array('ingredients', ['potatoes', 'onions', 'cucumber'])
    }),
    template: `
      <ingredient-list :ingredients="list">
        <ingredient slot="ingredient" slot-scope="{ ingredient }" :value="ingredient"/>
      </ingredient-list>
    `
  }))

/* eslint-enable react/react-in-jsx-scope */
