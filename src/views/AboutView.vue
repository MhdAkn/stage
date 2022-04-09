<template>
  <div class="about">
    <h1>A propos</h1>
   <div class="text-justify "> 
     <h3>Bonjour 🤝 </h3>
     <h4>J'ai commencé récemment à apprendre la plateforme Node et j'ai aboutit a ce premier résultat</h4>
   </div> 
    
    <div class="card-group">
      <h2>Légumes racines, tubercules et tiges</h2>
          <div class="card" v-for="item in lot1" :key=item.alt>
                <img class="card-img-top" :src=item.src :alt=item.alt >
                <div class="card-body">
                  <h5 class="card-title">{{ item.name}}</h5>
                  
                  <p class="card-text"><small class="text-muted">{{item.prix}}</small></p>
                </div>
          </div>
    </div>     
    
    <div class="card-group">
        <div class="card" v-for="item in lot2" :key=item.alt>
                    <img class="card-img-top" :src=item.src :alt=item.alt >
                    <div class="card-body">
                      <h5 class="card-title">{{ item.name}}</h5>
                      
                      <p class="card-text" style="color:red;"><b class="text-muted" >{{item.prix}}</b></p>
                    </div>
          </div>
    </div>


  </div>
</template>
<script>
export default {
 name:'AboutView',
    data(){
        return{
            
            lot1:[
              {
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FhyexYny_1VAszSEkPVV1iOoi7-esSCzw&usqp=CAU',
                alt:'ma voiture',
                name:'BMW auto',
                prix:'1 500 000'
              },
              {
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FhyexYny_1VAszSEkPVV1iOoi7-esSCzw&usqp=CAU',
                alt:'ma voiture',
                name:'BMW auto',
                prix:'1 500 000'
              },{
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FhyexYny_1VAszSEkPVV1iOoi7-esSCzw&usqp=CAU',
                alt:'ma voiture',
                name:'BMW auto',
                prix:'1 500 000'
              },{
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FhyexYny_1VAszSEkPVV1iOoi7-esSCzw&usqp=CAU',
                alt:'ma voiture',
                name:'BMW auto',
                prix:'1 500 000'
              },{
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FhyexYny_1VAszSEkPVV1iOoi7-esSCzw&usqp=CAU',
                alt:'ma voiture',
                name:'BMW auto',
                prix:'1 500 000'
              },
              
            ],
            lot2:[
              {
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FhyexYny_1VAszSEkPVV1iOoi7-esSCzw&usqp=CAU',
                alt:'ma voiture',
                name:'BMW auto',
                prix:'1 500 000'
              },
              {
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FhyexYny_1VAszSEkPVV1iOoi7-esSCzw&usqp=CAU',
                alt:'ma voiture',
                name:'BMW auto',
                prix:'1 500 000'
              },{
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FhyexYny_1VAszSEkPVV1iOoi7-esSCzw&usqp=CAU',
                alt:'ma voiture',
                name:'BMW auto',
                prix:'1 500 000'
              },{
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FhyexYny_1VAszSEkPVV1iOoi7-esSCzw&usqp=CAU',
                alt:'ma voiture',
                name:'BMW auto',
                prix:'1 500 000'
              },{
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2FhyexYny_1VAszSEkPVV1iOoi7-esSCzw&usqp=CAU',
                alt:'ma voiture',
                name:'BMW auto',
                prix:'1 500 000'
              },
              
            ],

               
            }
        }
    }
</script>

<style scoped>

h1{
  text-align: center;
  
}
.card-text{
  color:red;
}
.card{
  padding:10px;
}
.card-group{
  padding:10px 10px;
}
</style>
<script>


</script>

