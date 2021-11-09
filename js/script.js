Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        emailList: [],
        apiCounter:10

    },

    methods: {

    },
    mounted() {

        let tempList=[];
        for (let index = 0; index < 10; index++) {

            

            axios.get(this.apiUrl).then((ApiObj) => {

      
               
                tempList.push(ApiObj.data.response);

                this.apiCounter--;

                if (this.apiCounter === 0) {
                    this.emailList = [...tempList];
                    console.log("sono nel then");

                  }

            }
            );
        }

        console.log("ho eseguito For");
    }
});

