

<template>
    <div>
        <Header />
        <form id="commande" @submit="checkForm" action="/something" method="post" novalidate="true">
            
            <p v-if="errors.length > 0">
                <b>Please correct the following error(s):</b>
                <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
            </p>

            <p>
                <label for="firstname">Nom</label>
                <input type="text" name="firstname" id="firstname" v-model="firstname">                
            </p>

            <p>
                <label for="lastname">Prénom</label>
                <input type="text" name="lastname" id="lastname" v-model="lastname">                
            </p>

            <p>
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="email">                
            </p>

            <p>
                <label for="quantity">Quantité</label>
                <input type="number" name="quantity" id="quantity" v-model="quantity" min="1">              
            </p>

            <p>
                <input type="submit" value="Valider">  
            </p>

        </form>
    </div>        

</template>

<script>
import Vue from 'vue'
import Header from './Header.vue'
export default {
    name: 'CreateOrder',
    components: {
    Header
    },
    computed: {
    },
    methods: {
        createOrder() {
            this.console.log('test');
            return null;
        }
    }
}

new Vue({
    el: "#commande",
    data:{
        errors:[],
        firstname:null,
        lastname:null,
        email:null,
        quantity:null
    },

    methods: {
        checkForm:function(e) {
            this.errors = [];
            if(this.firstname && this.lastname && this.quantity) return true;
            if(!this.firstname) this.errors.push("Veuillez remplir votre nom");
            if(!this.lastname) this.errors.push("Veuillez remplir votre prénom");
            if(!this.quantity) this.errors.push("Veuillez saisir la quantité");
            e.preventDefault();
        }  
    }
})


</script>
