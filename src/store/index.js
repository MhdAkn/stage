import { createStore } from 'vuex'

export default createStore({
  state: {
    month:4,
    year:2022,
    day:7,
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

    ],
  },
  getters: {
    formattedDate(state){
      return state.day + " / "+ state.month + " / "+ state.year
    }
  },
  mutations: {
    add(state,quantity)
    {
      state.quantity+= Number(quantity);
    },
    prices(state,quantity,prix){
      state.total = Number(quantity) * prix
    }
  },
  actions: {
    updateCount({commit},quantity){
      if(quantity >= 0 )
      commit('prices',quantity)
    } 
  },
  modules: {
  }
})
