import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router";
import Chainlink from '../../assets/images/ecosystem/Chainlink.png';
import GnosisSafe from '../../assets/images/ecosystem/GnosisSafe.png';
import Thegraph from '../../assets/images/ecosystem/Thegraph.png';
import Polygon from '../../assets/images/ecosystem/Polygon.png';
import Klaytn from '../../assets/images/ecosystem/Klaytn.png';
import Rai from '../../assets/images/ecosystem/raiFinance.png';
import Vee from '../../assets/images/ecosystem/Vee.png';
import Cere from '../../assets/images/ecosystem/Cere.png';
import Define from '../../assets/images/ecosystem/Define.png';
import Deesse from '../../assets/images/ecosystem/Deesse.png';
import Layer3 from '../../assets/images/ecosystem/Layer3.png';
import Meter from '../../assets/images/ecosystem/Meter.png';
import Voltswap from '../../assets/images/ecosystem/Voltswap.png';
import Cobak from '../../assets/images/ecosystem/cobak.png';
import MovieBloc from '../../assets/images/ecosystem/moviebloc.png';
import Search from '../../assets/images/ecosystem/Search.png';
import Binance from '../../assets/images/ecosystem/binance.png';
import BinanceListf from '../../assets/images/ecosystem/binanceList.png';
import Bithumb from '../../assets/images/ecosystem/bithumb.png';
import CoinDCX from '../../assets/images/ecosystem/coinDCX.png';
import CoinOne from '../../assets/images/ecosystem/coinOne.png';
import DeepDAO from '../../assets/images/ecosystem/deepDAO.png';
import Gate from '../../assets/images/ecosystem/gate.png';
import Her from '../../assets/images/ecosystem/her.png';
import HuoBi from '../../assets/images/ecosystem/huobi.png';
import Immunefi from '../../assets/images/ecosystem/immunefi.png';
import Jenny from '../../assets/images/ecosystem/Jenny.png';
import Knn from '../../assets/images/ecosystem/knn.png';
import MapPro from '../../assets/images/ecosystem/mapPro.png';
import Poloniex from '../../assets/images/ecosystem/poloniex.png';
import PolygonDAO from '../../assets/images/ecosystem/polygonDAO.png';
import PushPro from '../../assets/images/ecosystem/pushPro.png';
import UpBit from '../../assets/images/ecosystem/upbit.png';
import Zeta from '../../assets/images/ecosystem/zeta.png';
import ZkEVM from '../../assets/images/ecosystem/Polygon_zkEVM.png';
import CoingeckoImg from '../../assets/images/home/coingecko.svg';
import Base from '../../assets/images/home/base.svg';
import './index.less'
import { Button, Typography, Input } from 'antd'
const { Paragraph } = Typography;
export const EcosystemDataList = [
  {
    img: Base,
    website: 'https://base.org',
    category: 'Integration',
    sector: 'Infrastructure',
    desc: 'Base',
    name: 'Base'
  },
  {
    img: Binance,
    website: 'https://www.bnbchain.org/',
    category: 'Integration',
    sector: 'Infrastructure',
    desc: 'BNB Chain',
    name: 'BNB Chain'
  },
  {
    img: Polygon,
    website: 'https://polygon.technology/',
    category: 'Integration',
    sector: 'Infrastructure',
    desc: 'Decentralised Ethereum scaling platform',
    name: 'Polygon'
  },
  {
    img: Klaytn,
    website: 'https://www.klaytn.foundation/',
    category: 'Integration',
    sector: 'Infrastructure',
    desc: 'An open-source public blockchain for all who wish to build, work, or play in the metaverse.',
    name: 'klaytn'
  },
  {
    img: ZkEVM,
    website: 'https://polygon.technology/polygon-zkevm',
    category: 'Integration',
    sector: 'Infrastructure',
    desc: 'Polygon zkevm',
    name: 'Polygon zkevm'
  },
  {
    img: Chainlink,
    website: 'https://chain.link/',
    category: 'Partnership',
    sector: 'Infrastructure',
    desc: 'Chainlink is the oracle to source external information on-chain ',
    name: 'Chainlink'
  },
  {
    img: Thegraph,
    website: 'https://thegraph.com/en/',
    category: 'Partnership',
    sector: 'Infrastructure',
    desc: 'The Graph',
    name: 'The Graph'
  },
  {
    img: PolygonDAO,
    website: 'https://polygon.community/#/',
    category: 'Partnership',
    // sector: '',
    desc: 'Polygon DAO',
    name: 'Polygon DAO'
  },
  {
    img: Zeta,
    website: 'https://www.zetachain.com/',
    category: 'Partnership',
    desc: 'Zetachain',
    name: 'Zetachain'
  },
  {
    img: GnosisSafe,
    website: 'https://gnosis-safe.io/',
    category: 'Partnership',
    sector: 'Infrastructure',
    desc: 'Gnosis Safe',
    name: 'Gnosis Safe'
  },
  {
    img: Layer3,
    website: 'https://beta.layer3.xyz/',
    category: 'Partnership',
    sector: 'Social',
    desc: 'Web3 discovery platform.',
    name: 'layer3'
  },
  {
    img: Rai,
    website: 'https://rai.finance/',
    category: 'Partnership',
    sector: 'DeFi',
    desc: 'DEX/IDO Platforms',
    name: 'rai'
  },
  {
    img: MapPro,
    website: 'https://www.mapprotocol.io/',
    category: 'Partnership',
    desc: 'Map Protocol',
    name: 'Map Protocol'
  },
  {
    img: Meter,
    website: 'https://meter.io/',
    category: 'Partnership',
    sector: 'Infrastructure',
    desc: 'Cross-chain Bridge',
    name: 'Meter'
  },
  {
    img: Define,
    website: 'https://www.define.one/',
    category: 'Partnership',
    sector: 'NFT',
    desc: 'NFT Marketplaces',
    name: 'define'
  },
  {
    img: Immunefi,
    website: 'https://immunefi.com/',
    category: 'Partnership',
    desc: 'Immunefi',
    name: 'Immunefi'
  },
  {
    img: Cobak,
    website: 'https://cobak.co/',
    category: 'Partnership',
    sector: 'Social',
    desc: 'Community Projects',
    name: 'Cobak'
  },
  {
    img: MovieBloc,
    website: 'https://www.moviebloc.com/',
    category: 'Partnership',
    sector: 'Social',
    desc: 'Entertainment Projects',
    name: 'MovieBloc'
  },
  {
    img: Deesse,
    website: 'https://deesse.art/',
    category: 'Partnership',
    sector: 'NFT',
    desc: 'Gamefi Projects',
    name: 'deesc'
  },
  {
    img: Cere,
    website: 'https://cere.network/',
    category: 'Partnership',
    sector: 'Infrastructure',
    desc: 'Decentralized Storage Projects',
    name: 'Cere'
  },
  {
    img: DeepDAO,
    website: 'https://deepdao.io/',
    category: 'Partnership',
    desc: 'Deep DAO',
    name: 'Deep DAO'
  },
  {
    img: Jenny,
    website: 'https://www.jennynft.io/',
    category: 'Partnership',
    desc: 'Jenny DAO',
    name: 'Jenny DAO'
  },
  {
    img: Her,
    website: 'https://www.her-dao.xyz/',
    category: 'Partnership',
    desc: 'H.E.E DAO',
    name: 'H.E.R DAO'
  },
  {
    img: Knn,
    website: 'https://www.knn3.xyz/',
    category: 'Partnership',
    desc: 'Knn3 Network',
    name: 'Knn3 Network'
  },
  {
    img: Voltswap,
    website: 'https://voltswap.finance/#/swap',
    category: 'Partnership',
    sector: 'DeFi',
    desc: 'Voltswap',
    name: 'Voltswap'
  },
  {
    img: PushPro,
    website: 'https://push.org/',
    category: 'Partnership',
    desc: 'Push protocol',
    name: 'Push protocol'
  },
  {
    img: BinanceListf,
    website: 'https://www.binance.com/',
    category: 'Listed Exchanges',
    desc: 'Binance',
    name: 'Binance'
  },
  {
    img: UpBit,
    website: 'https://www.upbit.com/',
    category: 'Listed Exchanges',
    desc: 'Upbit',
    name: 'Upbit'
  },
  {
    img: Bithumb,
    website: 'https://www.bithumb.com/',
    category: 'Listed Exchanges',
    desc: 'Bithumb',
    name: 'Bithumb'
  },
  {
    img: HuoBi,
    website: 'https://www.huobi.com/',
    category: 'Listed Exchanges',
    desc: 'Huobi',
    name: 'Huobi'
  },
  {
    img: Gate,
    website: 'https://www.gate.io/',
    category: 'Listed Exchanges',
    desc: 'Gate',
    name: 'Gate'
  },
  {
    img: CoinOne,
    website: 'https://coinone.co.kr/',
    category: 'Listed Exchanges',
    desc: 'Coinone',
    name: 'Coinone'
  },
  {
    img: Poloniex,
    website: 'https://poloniex.com/',
    category: 'Listed Exchanges',
    desc: 'Poloniex',
    name: 'Poloniex'
  },
  {
    img: CoinDCX,
    website: 'https://coindcx.com/',
    category: 'Listed Exchanges',
    desc: 'CoinDCX',
    name: 'CoinDCX'
  },
  {
    img: CoingeckoImg,
    website: 'https://coingecko.com/',
    category: '',
    sector: 'Infrastructure',
    desc: 'CoinGecko',
    name: 'CoinGecko'
  },

]
export const categoryFilterDataList = [
  'All',
  'Partnership',
  'Integration',
  'Listed Exchanges'
]

export const sectorFilterDataList = [
  'All',
  'DeFi',
  'Social',
  'NFT',
  'Infrastructure',
]
const Ecosystem: React.FC = () => {
  const [categorySelect, setCategorySelect] = useState('All')
  const [sectorSelect, setSectorSelect] = useState('All')
  const [ecosystemDisplay, setEcosystemDisplay] = useState(EcosystemDataList)
  const [resultNum, setResultNum] = useState(ecosystemDisplay.length)
  const history = useHistory();
  function existOneIncludeTwo(oneStr: string, twoStr: string) {

    return oneStr.toUpperCase().includes(twoStr.toUpperCase());
  }
  const onSearch = (value: string) => {
    console.log(value);
    const result = []
    for (let i in EcosystemDataList) {
      let arr = Object.values(EcosystemDataList[i])

      if (arr.some(item => {
        return existOneIncludeTwo(item, value)
      })) {
        result.push(EcosystemDataList[i])
      }
    }

    setEcosystemDisplay(result)

  }
  useEffect(() => {
    setEcosystemDisplay(EcosystemDataList.filter((item) => {
      return (categorySelect !== 'All' ? item.category === categorySelect : true) && (sectorSelect !== 'All' ? item.sector === sectorSelect : true)
    }))
  }, [categorySelect, sectorSelect])
  useEffect(() => {
    setResultNum(ecosystemDisplay.length)

  }, [ecosystemDisplay])

  return <div className="ecosystem">
    <div className="banner">
      <div className="content">
        <h2>Ecosystem</h2>
        <p>The initial launch is supported by the existing 15,000 on-chain token holder community</p>
        <div className='go' onClick={() => history.push('/dao')}>DAO Booster Program</div>
      </div>
    </div>
    <div className='filter'>
      <div className='category_filter'>
        <div className='filter_name'>category</div>
        {
          categoryFilterDataList.map((item) => {
            return (
              <div onClick={() => {
                setCategorySelect(item)
              }} className={categorySelect === item ? 'filter_item filter_item_active' : 'filter_item'}>{item}</div>
            )
          })
        }
      </div>
      <div className='sector_filter'>
        <div className='filter_name'>sector</div>
        {
          sectorFilterDataList.map((item) => {
            return (
              <div onClick={() => {
                setSectorSelect(item)
              }} className={sectorSelect === item ? 'filter_item filter_item_active' : 'filter_item'}>{item}</div>
            )
          })
        }
      </div>
    </div>
    <div className='serach'>
      <div className='serach_box'>
        <Input size="large" onPressEnter={(event: any) => {
          onSearch(event.target.value)
        }} placeholder="Project’s name/keywords" prefix={<img src={Search} alt="" />} />
      </div>
    </div>
    <div className="content">
      <h3>{resultNum} results</h3>
      <div className="list list2">
        {ecosystemDisplay.map((item: any) => {
          return <div className='Ecosystem_item'>
            <div className='item_img'>
              <img src={item.img} alt="" style={{ maxWidth: '70%' }} />
            </div>
            <div className='item_type'>
              {item.category && <div className='type_category'>{item.category}</div>}
              {item.sector && <div className='type_sector'>{item.sector}</div>}
            </div>
            {/* <div className='item_desc'>{item.desc}</div> */}
            <div className='item_desc'>
              <Paragraph ellipsis={{ rows: 2, tooltip: item.desc }}>
                {item.desc}
              </Paragraph>
            </div>

            <div className="item_btn">
              <Button onClick={() => {
                window.open(item.website)
              }} type="primary" >Website</Button>
            </div>
          </div>
        })}
      </div>
    </div>
  </div>
}

export default Ecosystem;
