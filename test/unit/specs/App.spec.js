import App from '@/App';
import { shallow } from 'vue-test-utils';
// import HelloWorld from '@/components/HelloWorld';

// jest.mock('HelloWorld');


describe('App.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallow(App, {
      data: {

      }
    });
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot();
  });
});
