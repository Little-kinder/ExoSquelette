<template v-if="this.designItem.id">
    <tr  @click="setActive">
        <td>{{ designItem.id }}</td>
        <td>{{ designItem.name }}</td>
        <td>{{ designItem.thickness }}</td>
        <td><router-link :to="{name : 'order', params : {idItem : designItem.id} }" tag="button" style="margin-left:45px"> Order </router-link></td>
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