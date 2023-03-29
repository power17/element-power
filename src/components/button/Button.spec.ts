import Button from './Button.vue'
import { mount } from '@vue/test-utils'
describe('按钮测试', () => {
    it('按钮能够显示文本', () => {
        const content = '确定'
        const wrapper = mount(Button, {
            slots: {
                default: content
            }
        })
        expect(wrapper.text()).toBe(content)
    })
    it('通过size控制按钮大小', () => {
        const size = 'small'
        const wrapper = mount(Button, {
            props: {
                size
            }
        })
        expect(wrapper.classes()).toContain('el-button--small')
    })
    it('全局设置按钮默认大小', () => {
        const size = 'mini'
        const wrapper = mount(Button, {
            global: {
                config: {
                    globalProperties: {
                        $POWER: {
                            size
                        }

                    }
                }
            }
        })
        expect(wrapper.classes()).toContain(`el-button--${size}`)
    })
})


