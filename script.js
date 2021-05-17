const app = new Vue({

    el: "#app",

    data: {

        arrMail: [], 

    },

    methods: {

        callApi(url){
            axios.get(url)
            .then((resp) => {

                this.arrMail.push(resp.data.response);
                if(this.arrMail.length < 10){

                    this.callApi(url);

                }

            })
        }

    },

    mounted(){

        this.callApi("https://flynn.boolean.careers/exercises/api/random/mail");

    }

})