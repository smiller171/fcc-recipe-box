/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import { withKnobs, array, text } from '@storybook/addon-knobs/vue'

import Ingredient from '@/components/Ingredient'
import IngredientList from '@/components/IngredientList'
import Recipe from '@/components/Recipe'
import '@/assets/styles/main.css'

storiesOf('Recipe', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { IngredientList, Ingredient, Recipe },
    data: () => ({
      recipe: {
        name: text('name', 'Apple Pie'),
        ingredients: array('ingredients', [
          'Apples',
          'Sugar',
          'Flour'
        ])
      }
    }),
    template: `
      <recipe
        :name="recipe.name"
        :ingredients="recipe.ingredients"
      >
        <h2 slot="name" slot-scope="{value}">{{value}}</h2>
        <div slot="subtitle" slot-scope="{value}">
          <h3>{{value}}</h3>
          <hr>
        </div>
        <ingredient-list slot="ingredients" slot-scope="{value}" :ingredients="value">
          <ingredient slot="ingredient" slot-scope="{ ingredient }" :value="ingredient"/>
        </ingredient-list>
      </recipe>
      
    `
  }))

/* eslint-enable react/react-in-jsx-scope */
