<template>
    
    <div class="sidebar text-black">

        <asideSection />
    </div>

</template>

<script>

/* eslint-disable */

import useActiveToggler from '@/composables/useActiveToggler'

import asideSection from './aside-section.vue'

export default {

    name: 'sidebar',
    components: {
        asideSection,
    },

    setup() {

        const { toggleConfig, isActiveConfig } = useActiveToggler()
        return {
            toggleConfig,
            isActiveConfig 
        }

    }

}
</script>