

<template>
    <div>
        <!-- formulaire de commande-->
        <Header />
        <form id="commande-form" @submit="checkForm" method="post" novalidate="true">
            
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

            <p>
                <label for="quantity">Quantité</label>
                <input type="number" name="quantity" id="quantity" v-model="quantity" min=1 :max="stock" onkeydown="return false">              
            </p>

            <p>
                <button type="button" @click="checkForm" class= "btn btn-danger"> 
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
            type:null,
            quantity:null,
            stock:null
        }
    },
    created() {
        this.idItem = this.$route.params.idItem;
        this.type = this.$route.params.typeItem;
        this.stock = this.$route.params.stock;
    },
    computed: {
    },
    methods: {
        
        
        checkOrder() {
            const form = document.getElementById('commande-form');
            form.addEventListener('submit', this.createOrder);
            
        },
        /**
         * récupération des données du formulaire et persistance de la commande dans la BDD
         */
        createOrder() {
            let order_info = [];
            order_info.push(this.firstname, this.lastname , this.email , this.quantity, this.idItem, this.type);
                OrderServices.createOrder(order_info).then(order => 
                {
                    console.log("commande enregistrée : " + order) 
                });  
            alert('Votre commande a bien été prise en compte');    
            this.$router.push('home');

        },
        /**
         * vérification de la bonne saisie des différents champs du formulaire
         */
        checkForm:function(e) {
            this.errors = [];
            if(this.firstname && this.lastname && this.email && this.quantity) {
                this.createOrder();
            }
            if(!this.firstname) this.errors.push("Veuillez remplir votre nom");
            if(!this.lastname) this.errors.push("Veuillez remplir votre prénom");
            if(!this.email) this.errors.push("Veuillez remplir votre email");
            if(!this.quantity) this.errors.push("Veuillez saisir la quantité");
            if(this.quantity > this.stock) this.errors.push("Veuillez saisir une quantité inferieure a : " + this.stock);
            e.preventDefault();
        }
    }
}

</script>
