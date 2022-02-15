import React from 'react'
import styled from 'styled-components'
import {ReactComponent as TwitterLogo} from '../../assets/images/home/svg/Twitter.svg'
import {ReactComponent as MediumLogo} from '../../assets/images/home/svg/Medium.svg'
import {ReactComponent as TelegramLogo} from '../../assets/images/home/svg/Telegram.svg'
import {ReactComponent as Email} from '../../assets/images/home/svg/Email.svg'
import {ReactComponent as Wechat} from '../../assets/images/home/svg/WeChat.svg'
import {ReactComponent as Discord} from '../../assets/images/home/svg/discord.svg'
import {ReactComponent as Mirror} from '../../assets/images/home/svg/Mirror.svg'
import WechatQR from '../../assets/images/home/QR.jpeg'

const FooterContent = styled.div`
    background: #00113B;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        height: 48px;
    }
    ul{
        padding-left: 0;
        margin: 0;
        height: 48px;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        li{
            color: #9f9fa9;
            display: inline-block;
            text-align: center;
            line-height: 48px;
            height: 48px;
            a{
                color: #9f9fa9; 
                display: flex;
                justify-content: center;
                align-items: center;
                height: 48px;
            }
            span{
                margin-left: 10px;
                @media (max-width: 767px) {
                    display: none;
                }
            }
        }
    }
`

const Footer: React.FC = () =>  {
    return <FooterContent>
        <div>
            <ul>
                <li>
                    <a target="_blank" href="https://t.me/STPofficial"><TelegramLogo/><span>Telegram</span></a>
                </li>
                <li>
                    <a target="_blank" href="https://twitter.com/STP_Networks"><TwitterLogo/><span>Twitter</span></a>
                </li>
                {/* <li>
                    <a target="_blank" href="https://medium.com/@versenetwork"><MediumLogo/><span>Medium</span></a>
                </li> */}
                <li>
                    <a target="_blank" href="https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1"><Mirror/><span>Mirror</span></a>
                </li>
                <li>
                    <a target="_blank" href="https://discord.gg/H23QnaMRTT"><Discord/><span>Discord</span></a>
                </li>
                <li>
                    <a target="_blank" href={WechatQR}><Wechat/><span>Wechat</span></a>
                </li>
                <li>
                    <a href="mailto:contact@stp.network"><Email/><span>Email</span></a>
                </li>
            </ul>
        </div>
    </FooterContent>
}

export default Footer