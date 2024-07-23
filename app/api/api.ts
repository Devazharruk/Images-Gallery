import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 6d5f973b4b50fa54080f8c8b2149e9329f991b843d435884c356bdd6b4e322da'
    }
})