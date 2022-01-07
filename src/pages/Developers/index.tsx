import React, { useState} from 'react'
import { Modal, Button } from 'antd'
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
                        <button onClick={showModal}>API Documentation</button>
                        <p>Learn how the API works with our docs</p>
                    </div>
                    <div className="item">
                        <button onClick={showModal}>Test Token</button>
                        <p>Claim testnet tokens and build</p>
                    </div>
                    <div className="item">
                        <button onClick={showModal}>Wallet</button>
                        <p>Download Verse desktop wallet</p>
                    </div>
                    <div className="item">
                        <button onClick={showModal}>Open Source Code</button>
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