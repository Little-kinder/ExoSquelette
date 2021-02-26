<template>
    <div>
        <a>Commander un élément </a>
        <button type="button" @click='createOrder()' class="btn btn-danger">test</button>
    </div>
</template>

<script>
export default {
    name: 'CreateOrder',

    computed: {
        createOrder : function() {
            console.log("test");
            return null;
        }
    }
}

</script>
