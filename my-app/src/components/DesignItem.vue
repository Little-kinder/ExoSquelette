<template v-if="this.designItem.id">
    <tr  @click="setActive">
        <td>{{ designItem.id }}</td>
        <td>{{ designItem.name }}</td>
        <td>{{ designItem.thickness }}</td>
        <td> 
            <router-link :to = '{name:'order', params:{' . {{this.designItem.id}} . '}' class="btn btn-info float-right">Order</router-link>
        </td>
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
            },
            orderDesign() {
            this.$router.push('order');
            }
        },
        props: ['designItem']
     }
</script>