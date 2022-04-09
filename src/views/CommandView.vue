<template>
  <div class="command">
<div class="container ">
  <h2>{{categorie[0]}}</h2>
</div>
  <table class="table table-bordered">
  <thead>
    <tr class="table-dark">
      <th scope="col" style="text-align:center">Numéro</th>
      <th scope="col" style="text-align:center">Nom </th>
      <th scope="col" style="text-align:center">Prix</th>
      <th scope="col" style="text-align:center">Actions</th>
      <th scope="col" style="text-align:center">Total</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="item in fruit " :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.name}}</td>
      <td>{{item.prix}}</td>
      <td>
				<input id="add-item-quantity" type="number" v-model.number="quantity" />
				<button class="btn btn-primary" @click="add(quantity)">
					Ajouter au panier
				</button></td>
    </tr>
    <tr class="bg-danger">
            <td colspan="4" style="text-align:center;text-size:50px;color:white">Totaux</td>

    </tr>
    
  </tbody>
</table>
<div class="container ">
  <h2>{{categorie[1]}}</h2>
</div>
<table class="table table-bordered">
  <thead>
    <tr class="table-dark">
      <th scope="col" style="text-align:center">Numéro</th>
      <th scope="col" style="text-align:center">Nom </th>
      <th scope="col" style="text-align:center">Prix</th>
      <th scope="col" style="text-align:center">Actions</th>
      <th scope="col" style="text-align:center">Total</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="item in legume " :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.name}}</td>
      <td>{{item.prix}}</td>
      <td>
				<input id="add-item-quantity" type="number"  />
				<button class="btn btn-primary" @click="updateCount">
					Ajouter au panier
				</button></td>
      <td>{{item.total}}</td>

    </tr>
    <tr class="bg-danger">
            <td colspan="4" style="text-align:center;text-size:50px;color:white">Totaux</td>

    </tr>
    
  </tbody>
</table>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['total'])
    },
    methods: {
            ...mapActions(['updateCount'])
    },
 name:'CommandView',
    data(){
        return{
            
    categorie:['Les fruits disponibles','Les légumes disponibles'],
    fruit:[
      {
        id:1,
        name:"Banane",
        prix:150,
        qtS:20,
        quantity:null,
        price:null,
        total:null
      },
       {
        id:2,
        name:"Orange",
        prix:150,
        qtS:20,
        quantity:null,
        price:null,
        total:null
      },
       {
        id:3,
        name:"Citron",
        prix:25,
        qtS:20,
        quantity:null,
        price:null,
        total:null
      }, {
        id:4,
        name:"Datte",
        prix:150,
        qtS:20,
        quantity:null,
        price:null,
        total:null
      },
       {
        id:5,
        name:"Ananas",
        prix:250,
        qtS:20,
        quantity:null,
        price:null,
        total:null
      }],
      legume:[
      {
        id:1,
        name:"Salade",
        prix:100,
        qtS:20,
        quantity:null,
        price:null,
        total:null
      },
       {
        id:2,
        name:"Concombre",
        prix:250,
        qtS:20,
        quantity:null,
        price:null,
        total:null
      },
       {
        id:3,
        name:"Choux",
        prix:200,
        qtS:20,
        quantity:null,
        price:null,
        total:null
      }, {
        id:4,
        name:"Oignon",
        prix:150,
        qtS:20,
        quantity:null,
        price:null,
        total:null
      },
       {
        id:5,
        name:"Poivre",
        prix:150,
        qtS:20,
        quantity:null,
        price:null,
        total:null
      },

    ]
               ,
    
            }
        }
    }
</script>

<style scoped>


</style>
<script>


</script>

