import React, { useState} from 'react'
import { Modal, Button } from 'antd'
import { Link } from "react-router-dom";
import Cube from '../../assets/images/home/cube.png'
import './index.less'

const Developers: React.FC = () =>  {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return <div className="developers">
                <div className="content">
                <h2>Build with Verse</h2>
                <h3>Developer tools</h3>
                <div className="tools content">
                    <div className="item">
                        <button><a href="https://wallet.stp.network/">Wallet</a></button>
                        <p>Paticipate with Verse web wallet</p>
                    </div>
                    <div className="item">
                        <button><a href="https://faucet.stp.network/">Test Token</a></button>
                        <p>Claim testnet tokens and build</p>
                    </div>
                    <div className="item">
                        <button><a href="https://stp-dao.gitbook.io/verse-network/verse-network/master" target="_blank">Documentation</a></button>
                        <p>Learn how it works with our document</p>
                    </div>
                    <div className="item">
                        <button><a href="https://github.com/STPDevteam/verse-pov" target="_blank">Github</a></button>
                        <p>Learn our code base and start to contribute</p>
                    </div>
                </div>
            </div>
            <Modal className="comingModal" visible={isModalVisible} footer={null} closable={false} width={320} centered>
                <img src={Cube} alt="" />
                <p>Coming Soon...</p>
            <Button type="primary" onClick={handleCancel}>Close</Button>
            </Modal>
        </div>
}

export default Developers;