import { reactive } from 'vue'

export default function useActiveToggler() {

    const activeConfig = reactive({
        id: '',
        status: false
    })

    const toggleConfig = (configId) => {
        if(configId.toLowerCase() === activeConfig.id.toLowerCase()) {
            activeConfig.status = !activeConfig.status
            return 
        } 
        activeConfig.id = configId
        activeConfig.status = true
    }

    const isActiveConfig = (id) => {
        return id.toLowerCase() === activeConfig.id.toLowerCase() && activeConfig.status === true
    }

    return {
        toggleConfig,
        isActiveConfig,
        activeConfig
    }

}