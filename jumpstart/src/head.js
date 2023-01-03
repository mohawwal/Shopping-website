import React from "react"

export default function Heading() {
    return( 
        <div className="whole-topic">
            <div className="Topic">
                <div className="Topic-a">
                    <img src="/image/icon-menu.png" alt="" />
                    <p>MENU</p>
                </div>
                <div className="Topic-b">
                    <p>Gucci</p>
                </div>
                <div className="Topic-c">
                    <img src="/image/icons-shopping-bag.png" alt="" />
                    <img src="/image/icons-location.png" alt="" />
                    <img src="/image/icons-search.png" alt="" />
                </div>
            </div>
            <div className="Head">
                <p>YEAR OF THE RABBIT</p>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}