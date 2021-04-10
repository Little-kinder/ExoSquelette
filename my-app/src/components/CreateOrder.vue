

<template>
    <div>
        <Header />
        <form id="commande-form" @submit="checkForm" method="get" novalidate="true">
            
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
            <ul>
             <li v-for="error in errors" :key="error">{{ error }}</li>
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
                <label for="designID">DesignID : {{ idItem }}</label>           
            </p>

            <div id='stock-item'>
            <p>
                <label for="quantity">Quantité</label>
                <input type="number" name="quantity" id="quantity" v-model="quantity" min="1" :max="stock">              
            </p>
            </div>
            <p>
                <button type="button" @click='checkOrder(), updateStock()' class= "btn btn-danger"> 
                    <input type="submit" value="Valider"> 
                </button>
                 
            </p>

        </form>
    </div>        

</template>

<script>
import Header from './Header.vue'
import OrderServices from '../services/OrderService'

export default {
    name: 'CreateOrder',
    components: {
    Header
    },
    data() {
        return {
            errors:[],
            firstname:null,
            lastname:null,
            email:null,
            idItem:null,
            stock:null,
            quantity:null
        }
    },
    created() {
        this.idItem = this.$route.params.idItem;
        this.stock = this.$route.params.stock;
    },
    computed: {
    },
    methods: {
        checkOrder() {
            const form = document.getElementById('commande-form');
            form.addEventListener('submit', this.createOrder);
            
        },
        createOrder() {
            let order_info = [];
            order_info.push(this.firstname, this.lastname, this.email, this.quantity, this.idItem);
                OrderServices.createOrder(order_info).then(order => 
                {
                    console.log("commande enregistrée : " + order) 
                });  
            this.$router.push('home');

        },
        updateStock() {
            this.$emit('updateStock', this.stock-this.quantity);
        },
        checkForm:function(e) {
            this.errors = [];
            if(this.firstname && this.lastname && this.email && this.quantity) return true;
            if(!this.firstname) this.errors.push("Veuillez remplir votre nom");
            if(!this.lastname) this.errors.push("Veuillez remplir votre prénom");
            if(!this.email) this.errors.push("Veuillez remplir votre email");
            if(!this.quantity) this.errors.push("Veuillez saisir la quantité");
            e.preventDefault();
        }
    },
    props : {
        stockItem : Number
    }
}

</script>
