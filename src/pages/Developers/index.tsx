import React from 'react'
import Dao1 from '../../assets/images/home/dao1.png'
import Dao2 from '../../assets/images/home/dao2.png'
import Dao3 from '../../assets/images/home/dao3.png'
import Dao4 from '../../assets/images/home/dao4.png'
import Daos1 from '../../assets/images/product/daos1.png'
import Daos2 from '../../assets/images/product/daos2.png'
import Daos3 from '../../assets/images/product/daos3.png'
import Daos4 from '../../assets/images/product/daos4.png'
import './index.less'

const Developers: React.FC = () =>  {
    return <div className="developers">
                <div className="content">
                <h2>Build with Verse</h2>
                <h3>Developer tools</h3>
                <div className="tools content">
                    <div className="item">
                        <button>API Documentation</button>
                        <p>Learn how the API works with our docs</p>
                    </div>
                    <div className="item">
                        <button>Test Token</button>
                        <p>Claim testnet tokens and build</p>
                    </div>
                    <div className="item">
                        <button>Wallet</button>
                        <p>Download Verse desktop wallet</p>
                    </div>
                    <div className="item">
                        <button>Open Source Code</button>
                        <p>Learn our code base and start to contribute</p>
                    </div>
                </div>
            </div>
        </div>
}

export default Developers;