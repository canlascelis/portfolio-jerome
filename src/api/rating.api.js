import axios from "axios";
import { resolve } from './resolve';

const BASE_URL = 'https://jeres-api-pb.herokuapp.com';
const auth = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmVyZXMiLCJpYXQiOjE2NTgyODg1MTB9.dU_7u7oxM_94RjfGcTHfv0n-VvjrQ5RnwQletJBzLb4';

export async function getRatings() {
    return (
        await resolve(axios.get(`${BASE_URL}/rating`, {
            headers: {
                'Authorization': auth
            }
        })
            .then(res => res.data)
        )
    )
}

export async function postRating(count, value) {
    return (
        await resolve(
            axios({
                url: '/rating',
                baseURL: BASE_URL,
                headers: { 'Authorization': auth },
                method: 'post',
                data: {
                    rate_count: count,
                    user_name_rating: value
                }
            })
                .then(res => res.data)
        )
    )
}