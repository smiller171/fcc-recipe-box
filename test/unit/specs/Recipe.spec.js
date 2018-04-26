import Recipe from '@/components/Recipe'
import { shallow } from '@vue/test-utils'

describe('Recipe.vue', () => {
  const cmp = shallow(Recipe, {
    scopedSlots: {
      name: '<h2 slot-scope="{value}" class="header">{{value}}</h2>',
      subtitle: '<h3 slot-scope="{value}" class="subtitle">{{value}}</h3>',
      deleteButton: '<button slot-scope="{value}" class="delete">{{value}}</button>',
      ingredients: `
        <div slot-scope="{value}" class="ingredientsList">
          <span v-for="item in value">{{item}}</span>
        </div>
      `
    }
  })

  it('should be wraped in a div', () => {
    const expected = expect.stringMatching(/^<div.*>.*<\/div>$/)
    expect(cmp.html()).toEqual(expected)
  })
  it('should have a slot called "name"', () => {
    const expected = expect.stringMatching(/<h2 class="header">/)
    expect(cmp.html()).toEqual(expected)
  })
  it('should have a prop called "name"', () => {
    expect(cmp.vm.name).toBeDefined()
  })
  it('should have correct value for "name" prop', () => {
    const name = 'header-test'
    cmp.setProps({name})
    expect(cmp.vm.name).toEqual(name)
  })
  it('shoud have a scoped header slot that passes the value of the header', () => {
    const header = 'header-test'
    const headerRegEx = new RegExp(`<h2.*>${header}</h2>`)
    const expected = expect.stringMatching(headerRegEx)
    expect(cmp.html()).toEqual(expected)
  })
  it('should have a div for the ingredients panel', () => {
    const expected = expect.stringContaining('<div class="detailsPanel">')
    expect(cmp.html()).toEqual(expected)
  })
  it('should have a slot called "subtitle"', () => {
    const expected = expect.stringContaining('<h3 class="subtitle">')
    expect(cmp.html()).toEqual(expected)
  })
  it('should have a data object called "subtitle"', () => {
    expect(cmp.vm.subtitle).toBeDefined()
  })
  it('should have a subtitle value of "Ingredients"', () => {
    expect(cmp.vm.subtitle).toEqual('Ingredients')
  })
  it('should pass "subtitle" value to slot', () => {
    const expected = expect.stringContaining('<h3 class="subtitle">Ingredients</h3>')
    expect(cmp.html()).toEqual(expected)
  })
  it('should have a slot called "ingredients"', () => {
    const expected = expect.stringContaining('<div class="ingredientsList">')
    expect(cmp.html()).toEqual(expected)
  })
  it('should have a prop called "ingredients"', () => {
    expect(cmp.vm.ingredients).toBeDefined()
  })
  it('list should have a default value of []', () => {
    expect(cmp.vm.ingredients).toEqual([])
  })
  it("ingredients value should reflect what's passed in", () => {
    const expected = ['potatoes', 'carrots']
    cmp.setProps({ingredients: expected})
    expect(cmp.vm.ingredients).toEqual(expected)
  })
  it('should pass ingredients value to ingredients slot', () => {
    const expectedVals = ['potatoes', 'carrots']
    cmp.setProps({ingredients: expectedVals})
    expectedVals.forEach((item) => {
      expect(cmp.html()).toContain(item)
    })
  })
  it('should have a "deleteButton" slot', () => {
    const expected = expect.stringContaining('<button class="delete">')
    expect(cmp.html()).toEqual(expected)
  })
})
