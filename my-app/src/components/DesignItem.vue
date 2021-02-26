<template v-if="this.designItem.id">
    <tr  @click="setActive">
        <td>{{ designItem.id }}</td>
        <td>{{ designItem.name }}</td>
        <td>{{ designItem.thickness }}</td>
    </tr>          
</template>

<script>

    export default {
        name: 'DesignItem',
        methods: {
            setActive() {
                // debugger //  eslint-disable-line no-debugger
                let payload = {
                    activeDesign: this.designItem.id,
                };
                this.$emit('setActiveDesign', payload)
            }
        },
        props: ['designItem']
     }
</script>