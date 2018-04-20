import App from '@/App'
import { shallow } from '@millergeek/test-utils'

describe('App.vue', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(App, {
      data: {

      }
    })
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
