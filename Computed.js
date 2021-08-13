new Vue({
el:'#vue-app',
data:{
    
    a:0,
    b:0
},
methods:{
    /*addtoA:function(){
        console.log('addtoA');
        return this.a+this.age;
    },
    addtoB:function(){
        console.log('addtoB');
        return this.b+this.age;
    }*/
},
computed:{
    addtoA:function(){
        console.log('addtoA');
        return this.a+this.age;
    },
    addtoB:function(){
        console.log('addtoB');
        return this.b+this.age;
    }
}
})