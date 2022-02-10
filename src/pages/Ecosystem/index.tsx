import React from 'react'
import Chainlink from '../../assets/images/ecosystem/Chainlink.png';
import GnosisSafe from '../../assets/images/ecosystem/GnosisSafe.png';
import Thegraph from '../../assets/images/ecosystem/Thegraph.png';
import Rai from '../../assets/images/ecosystem/RAI.png';
import Vee from '../../assets/images/ecosystem/Vee.png';
import Cere from '../../assets/images/ecosystem/Cere.png';
import Define from '../../assets/images/ecosystem/Define.png';
import Deesse from '../../assets/images/ecosystem/Deesse.png';
import Meter from '../../assets/images/ecosystem/Meter.png';
import Voltswap from '../../assets/images/ecosystem/Voltswap.png';
import Cobak from '../../assets/images/ecosystem/cobak.png';
import MovieBloc from '../../assets/images/ecosystem/moviebloc.png';

import './index.less'

const Ecosystem: React.FC = () =>  {
    return <div className="ecosystem">
        <div className="banner">
            <div className="content">
                <h2>Ecosystem</h2>
                <p>The initial launch is supported by the existing 15,000 on-chain token holder community</p>
            </div>
        </div>
        <div className="content">
            <h3>Integrated Key Infrastructure</h3>
            <div className="list list1">
                <div className="item">
                    <h4>Oracles</h4>
                    <img src={Chainlink} alt="" />
                    <p>Chainlink is the oracle to source external information on-chain </p>
                </div>
                <div className="item">
                    <h4>Multi-Sig</h4>
                    <img src={GnosisSafe} alt="" />
                    <p>Gnosis Safe </p>
                </div>
                <div className="item">
                    <h4>Infrastructure</h4>
                    <img src={Thegraph} alt="" />
                    <p>The Graph</p>
                </div>
            </div>
            <h3>Token Projects on Verse represent over $5B in value</h3>
            <div className="list list2">
                <div className="item">
                    <h4>DeFi Projects</h4>
                    <img src={Rai} alt="" />
                    <p>DEX/IDO Platforms</p>
                </div>
                <div className="item">
                    <h4>DeFi Projects</h4>
                    <img src={Vee} style={{height: '55px', margin: '8px auto'}} alt="" />
                    <p>Lending Platforms</p>
                </div>
                <div className="item">
                    <h4>NFT Projects</h4>
                    <img src={Define} alt="" />
                    <p>NFT Marketplaces</p>
                </div>
                <div className="item">
                    <h4>NFT Projects</h4>
                    <img src={Deesse} alt="" />
                    <p>Gamefi Projects</p>
                </div>
                <div className="item">
                    <h4>Decentralized<br/>Storage Projects</h4>
                    <img src={Cere} alt="" />
                </div>
                <div className="item">
                    <h4>Community<br/>Projects</h4>
                    <img src={Cobak} style={{height: '35px'}} alt="" />
                </div>
                <div className="item">
                    <h4>Entertainment<br/>Projects</h4>
                    <img src={MovieBloc} alt="" />
                </div>
                <div className="item">
                    <h4>Cross-chain Bridge</h4>
                    <img src={Meter} alt="" />
                    <p>Meter Passport</p>
                </div>
                <div className="item">
                    <h4>AMM</h4>
                    <img src={Voltswap} alt="" />
                    <p>Voltswap</p>
                </div>
            </div>
        </div>
    </div>
}

export default Ecosystem;