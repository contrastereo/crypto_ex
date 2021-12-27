import { useEffect, useState } from 'react'
import Axios from "axios"
import { assertTSTypeAliasDeclaration } from '@babel/types'

export default function Home() {
    const apiData, setApiData = useState([])
    const search, setSearch = useState("")

    useEffect(() => {
        loadContent();
    }, [])

    const loadContent = () => {
        Axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((res) => {
                setApiData(res.data)
            })
    }

    return (
        <div>


        </div>
    )
}
