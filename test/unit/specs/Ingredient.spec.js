import Ingredient from '@/components/Ingredient';
import { shallow } from 'vue-test-utils';

describe('Ingredient.vue default', () => {
  let cmp;

  beforeAll(() => {
    cmp = shallow(Ingredient, {});
  });

  it('should return undefined if no ingredient passed in', () => {
    expect(cmp.vm.ingredient).toEqual();
  });
});

describe('Ingredient.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(Ingredient, {
      propsData: {
        ingredient: 'potatoes'
      }
    });
  });

  it('should return ingredient "potatoes"', () => {
    expect(cmp.vm.ingredient).toEqual('potatoes');
  });
});
