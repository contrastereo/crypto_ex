import React from 'react'

export default function Coin(props) {
    const { icon,
        coinName,
        coinSymbol,
        price,
        marketCap,
        priceChange,
        id, } = props
    return (
        <div className="CoinContainer">
            <div className="CoinContainer__Row">
                <div className="CoinContainer__Row__Data">
                    <div className="CoinContainer__Row__Data__Coin">
                        <img src={icon} className="CoinContainer__Row__Data__Img" />
                        <h4 className="CoinContainer__Row__Data__Coin__Name">{coinName}</h4>
                        <p className="CoinContainer__Row__Data__Coin__Symbol">{coinSymbol}</p>
                        <p className="CoinContainer__Row__Data__Coin__Price">$ {price.toFixed(2)}</p>

                    </div>
                </div>

            </div>


        </div>
    )
}
