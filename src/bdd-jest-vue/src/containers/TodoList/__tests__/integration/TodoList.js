import { mount } from '@vue/test-utils'
import { findTestWrapper } from '../../../../utils/testUtils'
import TodoList from '../../TodoList.vue'
import store from '../../../../store'

it(`
1、用户会在header输入框输入内容
2、用户会点击回车按钮
3、列表项应该增加用户输入内容的列表项
`, () => {
  const wrapper = mount(TodoList,{store})
  const inputs = findTestWrapper(wrapper, 'header-input')
  const inputElem = inputs.at(0)
  const content = 'jacksplwxy'
  inputElem.setValue(content)
  inputElem.trigger('keyup.enter')
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(1)
    expect(listItems.at(0).text()).toContain(content)
  })
})
