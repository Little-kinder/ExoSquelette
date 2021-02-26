<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 mrgnbtm">
            <h2 class="mb-4">{{currentDesignLabel}}</h2>
            <select class="custom-select" @change='selectDesign($event)' v-model="dataDesign.type">
                <option v-for="item in allDesignsParameters" :key="item.id" :value="item.id">{{item.label}}</option>
            </select>
            <hr />
            <CreateDesignParams 
                v-if="currentDesign"
                @createDesign="createDesign($event)"
                :activeDesign="activeDesign"
                :designParameter="currentDesign" 
            />
        </div>
    </div>
    </div>
</template>

<script>
const initial_data = {
    dataDesign: {
      type: ""
    },
    currentDesign: null,
    designsTypes: [
        {id: "name_writehand", label: "Nom écrit à la main"},
        {id: "name_plate", label: "Badge"}
    ]
}
import CreateDesignParams from './CreateDesignParams'

export default {
  name: 'CreateDesign',
  data: () => {
    return initial_data;
  },
  components: {
      CreateDesignParams
  },
  computed: {
      currentDesignLabel: function() {
          let initialLabel = "Selectionner un design";
          this.designsTypes.forEach(item => {
              if (item.id == this.dataDesign.type){
                  initialLabel = item.label;
                  return initialLabel
              }
          });
          return initialLabel;
      }
  },
  methods: {
      selectDesign(event) {
          console.log(event.target.value);
          this.currentDesign = this.allDesignsParameters.find(item => item.id == event.target.value);
        //   debugger//eslint-disable-line
          console.log(this.currentDesign); //eslint-disable-line
      },
      createDesign(event) {
        //   debugger//eslint-disable-line
          this.$emit('createDesign', event)
        //   this.clearForm();
      }
  },
  props: {
      activeDesign: String,
      allDesignsParameters: Array
  }
}
</script>