import Ingredient from '@/components/Ingredient';
import { shallow } from '@millergeek/test-utils';

describe('Ingredient.vue', () => {
  const cmp = shallow(Ingredient, {});
  const valArray = [
    'potatoes',
    'onions'
  ];

  it('should be wrapped in a div', () => {
    const expected = expect.stringMatching(/^<div.*>.*<\/div>$/);
    expect(cmp.html()).toEqual(expected);
  });

  it('should have "ingredient" class on div', () => {
    const expected = expect.stringMatching(/^<div class="ingredient">/);
    expect(cmp.html()).toEqual(expected);
  });

  valArray.forEach((item) => {
    it(`should return ingredient "${item}"`, () => {
      cmp.setProps({ value: item });
      expect(cmp.vm.value).toEqual(item);
    });

    it(`should render a span with "${item}" and "ingredientText" class`, () => {
      cmp.setProps({ value: item });
      expect(cmp.html()).toContain(`<span class="ingredientText">${item}</span>`);
    });
  });
});
