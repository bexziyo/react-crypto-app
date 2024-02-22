import {cryptoData, cryptoAssets} from '../../data'

export function fakeFetchCrypto(){
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(cryptoData)
        }, 1000)
    })
}

export function fetchAssets(){
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(cryptoAssets)
        }, 1000)
    })
}