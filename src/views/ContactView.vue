<template>
 
	<div class="">
		<div class="jumbotron jumbotron-sm">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <h1 class="h1">
                   Contactez nous <small> Sans gène</small></h1>
            </div>
        </div>
    </div>
</div>
<div class="container new">
    <div class="row">
        <div class="col-md-8">
            <div class="well well-sm">
                <form>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">
                                Nom</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" v-model="user.username"/>
                        </div>
                        <div class="form-group">
                            <label for="email">
                                Adresse email</label>
                            <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                </span>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" v-model="user.mail"/></div>
                        </div>
                        <div class="form-group">
                            <label for="subject">
                                Objet</label>
                            <select id="subject" name="subject" class="form-control" required="required" v-model="user.opt">
                                <option value="na" selected="">Choisissez une option:</option>
                                <option value="service"> Service Général</option>
                                <option value="suggestions">Suggestions</option>
                                <option value="product">Support de production</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">
                                Message</label>
                            <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                placeholder="Message" v-model="user.message"></textarea>
                        </div>
                    </div>
                  <!-- <div class="col-md-12">
                        <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">
                            Send Message</button>
                    </div>-->
                </div>
                </form>
            </div>
        </div>
        <div class="col-md-4">
            <form>
            <legend><span class="glyphicon glyphicon-globe"></span>Nos contacts</legend>
            <address>
                <strong>Twitter, Inc.</strong><br>
                {{addresse}}<br>
                {{github}}<br>
                <abbr title="Phone">
                    Téléphone:</abbr>
                {{tel}}
            </address>
            <address>
                <strong>Full Name</strong><br>
                <a href="mailto:#">{{email}}</a>
            </address>
            </form>
        </div>
    </div>
</div>
<div>
    
        <div class="d-inline">Ton nom est: {{user.username}}</div>
        <div class="d-inline">Ton email est: {{ user.mail}}</div>
        <div class="d-inline">Ton choix est: {{user.opt}}</div>
        <div class="d-inline">Ton message est :<p>{{user.message}}</p></div>
        <div class="d-inline">La date du jour est: {{formattedDate}}</div>
    
</div>
	</div>
</template>

<style>

.d-inline{
    padding-right: 15px;
    padding-left: 30px;
    margin-bottom: 50px;
    margin-top: 50px;

}
</style>

<script>
import { mapGetters } from "vuex"

export default {
    name:'ContactView',
        computed:
        {
            ...mapGetters(["formattedDate"])
        },
    data(){
        return{
            adresse:'Zogbo , Rintio',
            email:'mhdakn@gmail.com',
            github:'mhdakn',
            tel:'62 52 54 85',
            user:{
                username:'',
                mail:'',
                opt:'',
                message:''
            }
        }

    }
}
</script>
<style scoped>
.jumbotron {
background: #358CCE;
color: #FFF;
border-radius: 0px;
}
.jumbotron-sm { padding-top: 24px;
padding-bottom: 24px; }
.jumbotron small {
color: #FFF;
}
.h1 small {
font-size: 24px;
}
.new{
    padding-top: 150px;
}
</style>