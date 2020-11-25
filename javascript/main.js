// vue start 

const app = new Vue({
    el:"#app",
    data: {
        catalog: [],
        research: '',
    },
    methods: {
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
    // end methods
    },
// end vue
});