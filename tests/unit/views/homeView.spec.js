import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import PostsView from '@/views/PostsView.vue'

describe('HomeView.vue', () => {
  it('renders home view correctly', () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        stubs: {
          PostsView: true
        }
      }
    })
    expect(wrapper.find('.home').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        stubs: {
          PostsView: true
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
