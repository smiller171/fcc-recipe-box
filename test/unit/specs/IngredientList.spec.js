import IngredientList from '@/components/IngredientList'
import { shallow } from '@millergeek/test-utils'

describe('Ingredient.vue', () => {
  const cmp = shallow(IngredientList, {
    scopedSlots: {
      ingredient: '<span slot-scope="item">{{item.ingredient}}</span>'
    }
  })

  const valArray = [
    ['potatoes', 'onions'],
    ['apples', 'sugar', 'flour']
  ]

  it('should be wrapped in a div', () => {
    const expected = expect.stringMatching(/^<div.*>.*<\/div>$/)
    expect(cmp.html()).toEqual(expected)
  })
  it('should have a prop called "list" that accepts an array', () => {
    expect(cmp.vm.list).toBeDefined()
  })
  it('should be empty by default', () => {
    expect(cmp.vm.list).toEqual([])
  })
  it('should have a slot named "item"', () => {
    cmp.setProps({ list: ['test'] })
    const expected = expect.stringMatching(/<span.*>.*<\/span>/)
    expect(cmp.html()).toEqual(expected)
  })
  it('should have an item slot that is a div', () => {
    cmp.setProps({ list: ['test'] })
    const expected = expect.stringMatching(/<div.*><span.*>.*<\/span><\/div>/)
    expect(cmp.html()).toEqual(expected)
  })
  it('should have class "ingredientList"', () => {
    const expected = expect.stringMatching(/^<div class="\w*\s*ingredientList\w*\s*">/)
    expect(cmp.html()).toEqual(expected)
  })
  valArray.forEach((item) => {
    it('should have list prop matching input', () => {
      cmp.setProps({ list: item })
      expect(cmp.vm.list).toEqual(item)
    })
    it('should have items matching data', () => {
      cmp.setProps({ list: item })
      item.forEach((val) => {
        expect(cmp.html()).toContain(val)
      })
    })
  })
})
