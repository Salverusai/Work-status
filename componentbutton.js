Vue.component('greeting',{
    template:'<p> Hey there, I am {{name}}. <button v-on:click="changeName">Change button</button></p>',
    data:function(){
        return{
            name:'Yoshi'
        }
    },
    methods:{
        changeName:function(){
            this.name='Mario';
        }
    }
});





new Vue({
    el:'#vue-app one'
});

new Vue({
    el:'#vue-app two'
    
    
    });