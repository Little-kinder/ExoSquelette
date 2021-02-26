<template>
    <div class="form-group col-md-6">
        <label htmlFor="exampleInputthickness1">{{activeParameter.label}}</label>
        <input
            v-bind:value="value"
            v-on:input="updateInpute($event)"
            class="form-control"
            :placeholder="activeParameter.default"
            :type="activeParameter.type"
        >
    </div>
</template>

<script>
export default {
  name: 'CreateDesignParamsItem',
  computed: {
  },
  methods: {
      updateInpute(event) {
          this.$emit('input', event.target.value);
      }
  },
  mounted(){
    //   debugger //eslint-disable-line
  },
  props: {
      activeParameter: Object,
      value: undefined
  }
}
</script>