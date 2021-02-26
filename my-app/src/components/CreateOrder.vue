

<template>

    <div>
        <Header />
        <a>Commander un élément </a>
        <button type="button" @click='createOrder()' class="btn btn-danger">test</button>
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    name: 'CreateOrder',
     components: {
    Header
  },
    computed: {
        createOrder : function() {
            console.log("test");
            return null;
        }
    }
}

</script>
