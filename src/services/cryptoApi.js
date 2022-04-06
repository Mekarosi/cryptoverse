import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '7ed2ce3f10mshc46fb3c2f56b5bap1145a7jsn4f5a2d713bc5'
}



const baseUrl = 'https://coinranking1.p.rapidapi.com'


const createRequest = (url) => ({url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
    }),
        getExchanges: builder.query({
        query: () => createRequest(`/exchanges`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`)
        })
        
})

})

export const {
    useGetCryptosQuery, useGetExchangesQuery,useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi