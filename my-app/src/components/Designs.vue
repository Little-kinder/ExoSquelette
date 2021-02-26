<template >
    
    <div class="container">
        
        <h2>Designs</h2>
        <table class="table table-bordered  table-hover">
            <thead>
            <tr>
                <th>Design Id</th>
                <th>Name</th>
                <th>Thickness</th>
            </tr>
            </thead>
            <tbody>
                <design-item 
                    v-for="item in designs" :designItem="item" :key="item.id"
                    @setActiveDesign="setActiveDesign($event)"
                />
            </tbody>
        </table>
        <!-- <button>
            <router-link to="/order">order</router-link>
        </button> -->
    </div>
</template>

<script>
import DesignItem from './DesignItem.vue'
/*eslint-disable vue/no-shared-component-data */
export default {
    name: 'Designs',
    components: {
        DesignItem
    },
    // created() {
    //     this.$router.options.routes.forEach(route => {
    //         this.items.push({
    //             name: route.name
    //             , path: route.path
    //         })
    //     })
    // },
    data(){ return {
        isActive: false,
        error: null,
        items: []
    }},
    computed: {
        // classObject: () => {
        //     debugger; // eslint-disable-line no-debugger
        //     return {
        //     active: this.isActive && !this.error,
        //     'text-danger': this.error && this.error.type === 'fatal'
        //     }
        // }
    },
    methods: {
        setActiveDesign(payloads) {
            // debugger; // eslint-disable-line no-debugger
            this.isActive = payloads.activeDesign;
            // some code to filter designs
            this.$emit("setActiveDesign", payloads);
        }
    },
    props: ['designs']
}
</script>