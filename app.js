// Define const with Vue.createApp
const app = Vue.createApp( {
    //data as a function -> takes object with return values
    data() {
        return {
            firstName : 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        //this keyword can acces data() object and overwrite props @ getUser function
        async getUser() {
            //fetches data from url, passes back results object @$results
            const res = await fetch('https://randomuser.me/api/')
            const {results} = await res.json()

            //look after data structure what to pass back
            //console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

//Mount it into index.html@div#app
app.mount('#app');