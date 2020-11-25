// vue start 

const app = new Vue({
    el:"#app",
    data: {
        catalog: [],
        catalogtv: [],
        research: '',
    },
    methods: {
        request() {
            this.requestmovie();
            this.requesttv();
        },



        requesttv() {
            axios.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: 'e99307154c6dfb0b4750f6603256716d',
                    query: this.research ,
                    language:'it-IT',
                },
            })
            .then( response => {
            this.catalogtv = response.data.results;
            console.log(this.catalogtv);
            })
            .catch( error => {
            console.log(error);
            })
        // end request series    
        },
        
        requestmovie() {
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'e99307154c6dfb0b4750f6603256716d',
                    query: this.research ,
                    language:'it-IT',
                },
            })
            .then( response => {
            this.catalog = response.data.results;
            console.log(this.catalog);
            })
            .catch( error => {
            console.log(error);
            })
    // end requestmovie
        },
        getvote(vote) {
            return Math.ceil(vote / 2);    
    // end getvote         
        },
    // end methods
    },
// end vue
});