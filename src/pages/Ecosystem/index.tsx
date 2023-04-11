import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router";
import Chainlink from '../../assets/images/ecosystem/Chainlink.png';
import GnosisSafe from '../../assets/images/ecosystem/GnosisSafe.png';
import Thegraph from '../../assets/images/ecosystem/Thegraph.png';
import Polygon from '../../assets/images/ecosystem/Polygon.png';
import Klaytn from '../../assets/images/ecosystem/Klaytn.png';
import Rai from '../../assets/images/ecosystem/RAI.png';
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
import './index.less'
import { Button, Typography, Input } from 'antd'
const { Paragraph } = Typography;
const EcosystemDataList = [
    {
        img: Chainlink,
        website: 'https://chain.link/',
        category: 'Integration',
        sector: 'Infrastructure',
        desc: 'Chainlink is the oracle to source external information on-chain ',
        name: 'Chainlink'
    },
    {
        img: GnosisSafe,
        website: 'https://gnosis-safe.io/',
        category: 'Integration',
        sector: 'Infrastructure',
        desc: 'Gnosis Safe',
        name: 'Gnosis Safe'
    },
    {
        img: Thegraph,
        website: 'https://thegraph.com/en/',
        category: 'Integration',
        sector: 'Infrastructure',
        desc: 'The Graph',
        name: 'The Graph'
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
        img: Polygon,
        website: 'https://polygon.technology/',
        category: 'Partnership',
        sector: 'Infrastructure',
        desc: 'Decentralised Ethereum scaling platform',
        name: 'Polygon'
    },
    {
        img: Rai,
        website: 'https://rai.finance/',
        category: 'Incubated project',
        sector: 'DeFi',
        desc: 'DEX/IDO Platforms',
        name: 'rai'
    },
    {
        img: Define,
        website: 'https://www.define.one/',
        category: 'Incubated project',
        sector: 'NFT',
        desc: 'NFT Marketplaces',
        name: 'define'
    },
    {
        img: Deesse,
        website: 'https://deesse.art/',
        category: 'Incubated project',
        sector: 'NFT',
        desc: 'Gamefi Projects',
        name: 'deesc'
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
        img: Cere,
        website: 'https://cere.network/',
        category: 'Partnership',
        sector: 'Infrastructure',
        desc: 'Decentralized Storage Projects',
        name: 'Cere'
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
        img: Voltswap,
        website: 'https://voltswap.finance/#/swap',
        category: 'Partnership',
        sector: 'DeFi',
        desc: 'Voltswap',
        name: 'Voltswap'
    }
]
const categoryFilterDataList = [
    'All',
    'Partnership',
    'Integration',
    'Incubated project'
]

const sectorFilterDataList = [
    'All',
    'DeFi',
    'Social',
    'NFT',
    'Infrastructure'
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

            if(arr.some(item=>{
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
    useEffect(()=>{
        setResultNum(ecosystemDisplay.length)
        
    },[ecosystemDisplay])

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
                            <img src={item.img} alt="" />
                        </div>
                        <div className='item_type'>
                            <div className='type_category'>{item.category}</div>
                            <div className='type_sector'>{item.sector}</div>
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