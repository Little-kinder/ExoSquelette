<template v-if="this.designItem.id">
    <tr  @click="setActive">
        <td>{{ designItem.id }}</td>
        <td>{{ designItem.name }}</td>
        <td>{{ designItem.thickness }}</td>
        <!--bouton de redirection vers la page commande-->
        <td><router-link :to="{name : 'order', params : {idItem : designItem.id, typeItem : designItem.type, stock : this.stockItem} }" tag="button" style="margin-left:45px"> Order </router-link></td>
    </tr>          
</template>

<script>
    import DesignService from '../services/DesignService'
    
    export default {
        name: 'DesignItem',
        data() {
            return {
                stockItem:null
            }    
        },
        methods: {
            /**
             * obtention du stock disponible lié au type de Design de la variable designItem
             */
            getDesignTypesStock() {
                DesignService.getDesignTypeStock(this.designItem.type).then(response => {
                    console.log(response);
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