var one=  new Vue({
el:'#vue-app-one',
data:{
title:'Vue App One'
},
methods:{

},
computed:{
greet:function(){
    return 'this is from app1';
}
}

});

var two=  new Vue({
    el:'#vue-app-two',
    data:{
        title:'Vue App two'
    },
    methods:{
    changeTitle:function(){
        one.title='app1 title has been changed';
    }
    },
    computed:{
        greet:function(){
            return 'this is from app2';
        }
    }
    
    });