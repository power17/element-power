import { getCurrentInstance, ComponentInternalInstance } from 'vue'
export function useGlobalConfig() {
    const instance: ComponentInternalInstance | null = getCurrentInstance()
    if (!instance) {
        console.log('useGlobelConfig must be seting in setup in script tag')
        return
    }
    return instance.appContext.config.globalProperties.$POWER || {}
}