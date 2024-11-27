import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  it('renders about page content', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.find('h1').text()).toBe('About Page')
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
