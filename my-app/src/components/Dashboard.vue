<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-6">
                <CreateDesign @createDesign="userCreate($event)" :activeDesign="activeDesign" :allDesignsParameters="allDesignsParameters"/>
            </div>
            <div class="col-md-6">
              <model-viewer v-if="activeDesign" :activeDesign="activeDesign" />
            </div>
            <div class="col-md-12 mt-4">
                <DisplayBoard :numberOfDesigns="numberOfDesigns" @getAllDesigns="getAllDesigns()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Designs v-if="designs.length > 0" :designs="designs" @setActiveDesign="setActiveDesign($event)"/>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateDesign from './CreateDesign.vue'
import DisplayBoard from './DisplayBoard.vue'
import ModelViewer from './ModelViewer.vue'
import Designs from './Designs.vue'
import DesignServices from '../services/DesignService'
// { getAllDesigns, getAllDesignsParameters, createDesign, model3dUrl }
export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateDesign,
    ModelViewer,
    DisplayBoard,
    Designs
  },
  data() {
      return {
          designs: [],
          numberOfDesigns: 0,
          activeDesign: null,
          allDesignsParameters: []
      }
  },
  methods: {
    getAllDesigns() {
      DesignServices.getAllDesigns().then(response => {
        console.log(response)
        this.designs = response
        this.numberOfDesigns = this.designs.length
      });
      DesignServices.getAllDesignsParameters().then(response => {
        console.log(response)
        this.allDesignsParameters = response
        // this.numberOfDesigns = this.designs.length
      });
    },
    userCreate(data) {
      console.log('data:::', data)
      DesignServices.createDesign(data).then(designItem => {
        // debugger//eslint-disable-line
        this.getAllDesigns();
        this.setActiveDesign({activeDesign: designItem.id});
      });
    },
    setActiveDesign(data) {
      // debugger // eslint-disable-line
      this.activeDesign = DesignServices.model3dUrl(data.activeDesign);
    }
  },
  mounted () {
    this.getAllDesigns();
  }
}
</script>