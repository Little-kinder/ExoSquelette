<template v-if="this.designItem.id">
    <tr  @click="setActive">
        <td>{{ designItem.id }}</td>
        <td>{{ designItem.name }}</td>
        <td>{{ designItem.thickness }}</td>
        <td><router-link :to="{name : 'order', params : {idItem : designItem.id, typeItem : designItem.type} }" tag="button" style="margin-left:45px"> Order </router-link></td>
    </tr>          
</template>

<script>
    let  stockItem = 0;
    import DesignService from '../services/DesignService'

    export default {
        name: 'DesignItem',
        methods: {
            getDesignTypesStock() {
                DesignService.getDesignTypeStock(this.designItem.type).then(response => {
                    console.log(response);
                    // let designtype = response;
                    this.stockItem = response[1];
                    

                });
            },
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
        created() {
            this.getDesignTypesStock();
        },
        props: ['designItem']
     }
</script>