import React from 'react'
import TechImg from '../../assets/images/tech/tech.jpg'
import './index.less'

const Tech: React.FC = () =>  {
    return <div className="tech">
                <div className="side"></div>
                <div className="content">
                    <h2>Verse</h2>
                    <h3>The Verse Network</h3>
                    <p>
                        Verse Network brings an all-in-one DAO creation and management ecosystem to your fingertips. Running a DAO has never been easier thanks to the range of DAO tooling, native dApps and third party integrations available on the Verse. Verse Network supports a range of EVM compatible chains that comprise the vast majority of all DAO activity. 
                        Our ecosystem was built with the goal of scaling DAOs by lowering barriers to on-chain DAO activity. Centralized DAO tooling on the Verse removes barriers to entry such as high gas fees while also simplifying the user experiences and streamlining DAO governance. Verse Network is optimized for both new and existing DAOs, and projects of all sizes across the range of DAO use cases. 
                    </p>
                    <h3>Verse Network Architecture</h3>
                    <p>Clique is a native dApp on the Verse serving as a centralized dashboard for a range of DAO activity.</p>
                    <p><b>DAO Participation:</b> Clique allows DAO members to browse, govern and socially participate in their projects through this aggregated dashboard. Community members can view asset holdings, proposals, and ongoing events through their dashboard. Clique empowers users to easily participate in multiple DAOs where they have membership. At any time, users are able to:</p>
                    <ul>
                        <li>Participate in public token offerings for open DAO projects</li>
                        <li>Manage DAO community memberships</li>
                        <li>View holders and governance structure within DAOs</li>
                        <li>Vote on open proposals, and view results of closed proposals </li>
                    </ul>
                    <p><b>DAO Creation:</b> Tools and infrastructure for projects to build DAOs using Verse. All aspects of DAO creation can be executed on Verse </p>
                    <ul>
                        <li>Issue new tokens, or bridge existing tokens (cross-chain)</li>
                        <li>Implement custom token distribution schedule with reserved token allocation and vesting</li>
                        <li>Customize and execute whitelist and public sale</li>
                        <li> Optimize DAO parameters for DAO use case, including: Membership DAO, Project DAO, or Investment DAO </li>
                    </ul>

                    <p><b>DAO Governance and Management:</b> Verse Network provides efficient decentralized decision-making for communities. DAOs can configure onchain governance parameters including:</p>
                    <ul>
                        <li>Token holding requirements for voting and proposal creation</li>
                        <li>Community voting customization including voting duration and minimum total votes </li>
                    </ul>
                    <p>
                    Cross-chain governance is possible with Clique, enabling proposal creation and cross-chain voting for DAOs on Ethereum to the Polygon network.
                    </p>
                    <p>
                    The cross-chain governance solution comes without the need for projects to issue new tokens or bridge existing tokens to the Polygon. The low gas fees are an advantage for DAOs implementing on-chain governance. Gas fees on Polygon are dramatically reduced compared to Ethereum for all governance activities, including voting and proposal creation.
                    </p>   
                    <div>
                        <img src={TechImg} alt="" />
                    </div>    
                </div>
            </div>
}

export default Tech;