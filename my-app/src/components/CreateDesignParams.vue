<template>
    <form>
        <div class="row">
          <create-design-params-item 
            v-for="(value, name) in designParameter.params"
            :key="name"
            v-model="dataDesign[name]"
            :activeParameter="value"
          />
        </div>
        <button type="button" @click='createDesign()' class="btn btn-danger">Create</button>
        <a v-if="activeDesign" :activeDesign ="activeDesign">
          <router-link to="/order" tag="button" style="margin-left:45px"> Order </router-link>
        </a>
        <a v-if="activeDesign" :href="activeDesign" target="_blank" class="btn btn-info float-right">Download</a>


    </form>
</template>

<script>
const initial_data = {
    dataDesign: {}
}
import CreateDesignParamsItem from './CreateDesignParamsItem'
export default {
  name: 'CreateDesign',
  data: () => {
    return initial_data;
  },
  components: {
    CreateDesignParamsItem
  },
  computed: {
  },
  methods: {
      createDesign() {
          let payload = this.dataDesign;
          payload.type = this.designParameter.id;
          this.$emit('createDesign', payload)
          this.clearForm();
      },

      orderDesign() {
        this.$router.push('order');
      },


      clearForm() {
          // for (var item in this.dataDesign){
          //   debugger//eslint-disable-line
          //   this.dataDesign[item] = this.designParameter[item].default;
          // }
        
          // this.dataDesign.firstName = initial_data.dataDesign.firstName;
          // this.dataDesign.lastName = initial_data.dataDesign.lastName;
          // this.dataDesign.thickness = initial_data.dataDesign.thickness;
      }
  },
  mounted(){
  },
  props: {
      activeDesign: String,
      designParameter: Object
  }
}
</script>