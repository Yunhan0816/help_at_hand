<template>
    <v-container>
        <h1>Nearby Hospitals</h1>
        <gmap/>
    </v-container>
    
</template>
<script>
import gmap from '../components/gmap' 
export default {
    name: 'Hospital',
    components: {
        gmap
    }
}
</script>