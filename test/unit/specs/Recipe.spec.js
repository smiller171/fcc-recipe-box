import Recipe from '@/components/Recipe'
import { shallow } from '@millergeek/test-utils'

describe('Recipe.vue', () => {
  const cmp = shallow(Recipe, {
    scopedSlots: {
      header: '<h2 slot-scope="header">{{header.value}}</h2>'
    }
  })

  it('should be wraped in a div', () => {
    const expected = expect.stringMatching(/^<div.*>.*<\/div>$/)
    expect(cmp.html()).toEqual(expected)
  })
  it('should have a slot called "header"', () => {
    const expected = expect.stringMatching(/<h2.*>.*<\/h2>/)
    expect(cmp.html()).toEqual(expected)
  })
  it('should have a prop called "header"', () => {
    expect(cmp.vm.header).toBeDefined()
  })
  it('should have correct value for "header" prop', () => {
    const header = 'header-test'
    cmp.setProps({header})
    expect(cmp.vm.header).toEqual(header)
  })
  it('shoud have a scoped header slot that passes the value of the header', () => {
    const header = 'header-test'
    const headerRegEx = new RegExp(`<h2.*>${header}</h2>`)
    const expected = expect.stringMatching(headerRegEx)
    expect(cmp.html()).toEqual(expected)
  })
})
