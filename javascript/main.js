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
                    apy_key: 'e99307154c6dfb0b4750f6603256716d',
                    query: this.research ,
                    language:'it-IT',
                },
            })
            .then( response => {
            console.log(response.data.results);
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