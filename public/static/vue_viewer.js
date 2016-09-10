/**
 * Created by Виталий on 09.09.2016.
 */
//var Vue = require('vue');
// import vueResource from 'vue-resource';
// Vue.use(require('vue-resource'));
window.onload = function() {
    new Vue({
        el: '#app',
        data: {
            message: '',
            first: false,
            second: false,
            third: false
        },
        ready: function() {
            // vue in node ********************************************************
            this.$http.get('/aaa').then(function (response)
            {
                console.log(response.body);
            }, function (response) {
                console.log(response.body)
            });
            //*********************************************************************
        },

    })
}