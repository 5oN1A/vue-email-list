Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        emailList: [],

    },

    methods: {

    },
    mounted() {


        for (let index = 0; index < 10; index++) {

            axios.get(this.apiUrl).then((ApiObj) => {
     
               
                this.emailList.push(ApiObj.data.response);

          

            }
            );
        }
    }
});

