import React, {useEffect, useState, useRef} from 'react'
import { Anchor, Layout, Row, Col, Button, Menu, Dropdown, Carousel, Modal } from 'antd';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import Logo from '../../assets/images/logo.png'
import Image1 from '../../assets/images/home/image1.jpg'
import Image1H5 from '../../assets/images/home/image1-h5.png'
import Image2 from '../../assets/images/home/image2.png'
import Image3 from '../../assets/images/home/image3.jpg'
import Image3H5 from '../../assets/images/home/image3-h5.png'
import Image4 from '../../assets/images/home/image4.png'
import Image6 from '../../assets/images/home/image6.jpg'
import Image6H5 from '../../assets/images/home/image6-h5.png'
import Image8 from '../../assets/images/home/image8.jpg'
import Image8H5 from '../../assets/images/home/image8-h5.jpg'
import Image10 from '../../assets/images/home/image10.png'
import Image10H5 from '../../assets/images/home/image10-h5.png'
import SmartChain1 from '../../assets/images/home/smartchain1.png'
import SmartChain2 from '../../assets/images/home/smartchain2.png'
import SmartChain3 from '../../assets/images/home/smartchain3.png'
import SmartChain4 from '../../assets/images/home/smartchain4.png'
import SmartChain5 from '../../assets/images/home/smartchain5.png'
import System1 from '../../assets/images/home/system1.png'
import System2 from '../../assets/images/home/system2.png'
import System3 from '../../assets/images/home/system3.png'
import System4 from '../../assets/images/home/system4.png'
import System5 from '../../assets/images/home/system5.png'
import Tools1 from '../../assets/images/home/tools1.png'
import Tools2 from '../../assets/images/home/tools2.png'
import Tools3 from '../../assets/images/home/tools3.png'
import Tools4 from '../../assets/images/home/tools4.png'
import Dao1 from '../../assets/images/home/dao1.png'
import Dao2 from '../../assets/images/home/dao2.png'
import Dao3 from '../../assets/images/home/dao3.png'
import Dao4 from '../../assets/images/home/dao4.png'
import Cube from '../../assets/images/home/cube.png'
import {ReactComponent as Infrastructure1} from '../../assets/images/home/svg/infrastructure1.svg'
import {ReactComponent as Infrastructure2} from '../../assets/images/home/svg/infrastructure2.svg'
import {ReactComponent as Infrastructure3} from '../../assets/images/home/svg/infrastructure3.svg'
import {ReactComponent as Infrastructure4} from '../../assets/images/home/svg/infrastructure4.svg'
import CubeSvg from '../../assets/images/dao/cube.png' 
import Boot from '../../assets/images/dao/boot_head.png'
import DaoTypes1 from '../../assets/images/dao/dao1.png'
import DaoTypes2 from '../../assets/images/dao/dao2.png'
import DaoTypes3 from '../../assets/images/dao/dao3.png'
import DaoTypes4 from '../../assets/images/dao/dao4.png'
import DaoTypes5 from '../../assets/images/dao/dao5.png'
import Bol1 from '../../assets/images/dao/bol1.png';
import Bol2Svg from '../../assets/images/dao/bol2.svg';
import Bol2 from '../../assets/images/dao/bol2.png';
import Bol3 from '../../assets/images/dao/bol3.png';
import Bol4 from '../../assets/images/dao/bol4.png';
import DaoBg from '../../assets/images/dao/daoBg.png';
import bootBG from '../../assets/images/dao/bg-boot.png'
import './index.less';

const { Header, Sider, Content } = Layout;
const HeaderContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;
    @media (max-width: 767px) {
        padding: 0 20px;
    }
`

const FirstContent = styled.div`
    // background: url(${CubeSvg}), url(${Boot});
    // background-repeat: no-repeat, no-repeat;
    // background-size: cover, cover;
    // background-position: center bottom, center center;
    // center center,bottom 10px center;
    background: url(${bootBG}) no-repeat;
    background-size: cover;
    background-position: center center;
    // height: calc(100vh - 200px);
    @media (max-width: 767px) {
        // margin-top: 64px;
        background: url(${CubeSvg}) no-repeat;
        // background-position: center center;
        background-size: cover;
    }
    &>div{
        position: relative;
        height: 100%;
        min-height: 400px;
        max-width: 1200px;
        padding: 0 50px;
        margin: 0 auto;
        padding: 0 50px;
        overflow: hidden;
        @media (max-width: 767px) {
            padding: 0 30px 300px;
        }
        &>div{
            &:first-of-type{
                position: relative;
                top: calc(50% - 100px);
                left: 19%;
                transform: translateY(-10%);
                @media (max-width: 767px) {
                    top: 145px;
                    left: 20px;
                    transform: translateY(0);
                }
            }
        }
    }
    p{
        color: #0D1DB4;
        width: 100%;
        font-size: 16px;
        @media (max-width: 767px) {
            font-size: 14px;
            line-height: 30px;
        }
        margin-bottom: 40px;
    }
    h1{
        min-width: 611px;
        margin-top: 120px;
        margin-bottom: 32px;
        margin-right: 260px;
        font-size: 56px;
        line-height: 80px;
        font-weight: 600;
        @media (max-width: 767px) {
            font-size: 40px;
            line-height: 48px;
            margin-top: -40px;
            margin-right: 0px;
            min-width: 240px;
            font-size: 32px;
        }
    }
    h3{
        color: #727272;
        font-size: 16px;
        display:inline-block;
        margin: 0;
    }
    .stpt{
        width: 150px;
        margin-left: 10px;
        @media (max-width: 767px) {
            width: 100px;
        }
    }
    .whereBuy{
        display: flex;
        justify-content: space-around;
        position: absolute;
        width: calc(100% - 120px);
        bottom: 40px;
        left: 50px;
        max-width: 1200px;
        magrin: 0 auto;
        h3{
            width: 240px;
        }
        @media (max-width: 767px) {
           display: none;
        }
    }
    .ant-btn{
        box-shadow: 5px 5px 20px #A3A3A3;
        &:hover{
            box-shadow: 5px 5px 20px #676767;
        }
    }
    .btns{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 200px;
        grid-gap: 20px;
        grid-auto-rows: 100px;
        @media (max-width: 767px) {
            // width: 100px;
        }
        .ant-btn{
            &:nth-of-type(1){
                // background: #3898FC;
                // border-color: #3898FC;
                @media (max-width: 767px) {
                    width: 100px;
                    font-size: 12px;
                    padding: 0;
                }
            }
            &:nth-of-type(2){
                // background: #3898FC;
                // border-color: #3898FC;
                @media (max-width: 767px) {
                    width: 130px;
                    font-size: 12px;
                    padding: 0;
                }
            }
        }
    }
`

const SecondContent = styled.div`
    // background: url(${Image2}) no-repeat, #fff;
    background: #FFFFFF;
    background-size: 50%;
    background-position: center right;
    .secondContent_main {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1200px;
        padding: 180px 0px 150px 0px;
        @media (max-width: 1100px) {
            padding: 180px 0px 150px 50px;
        }
        @media (max-width: 1020px) {
            padding: 180px 0px 150px 50px;
        }
        @media (max-width: 920px) {
            padding: 180px 0 150px 50px;
        }
        @media (max-width: 767px) {
            padding: 0px 50px 100px 50px;
            flex-direction: column;
        }
        .secondContent_info_box {
            flex: 1;
            // margin-right: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            .hrStyle {
                // background-color: #1E1E89;
                border-bottom: 1px solid #1E1E89;
                width: 54%;
                height: 2px;
                margin-right: 8%;
                @media (max-width: 1020px) {
                    width: 70%;
                }
                @media (max-width: 920px) {
                    width: 80%;
                    background-color: #1E1E89;
                }
                @media (max-width: 767px) {
                    margin-top: 18%;
                    width: 90%;
                }
            }
        }

        .secondContent_info {
            flex: 1;
            // margin-right: 150px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            // padding: 0px 30px 0px 30px;
            @media (max-width: 767px) {
                margin-right: 0;
                flex-direction: column;
            }
            p {
                max-width: 540px;
                height: 84px;
                text-align:left;
                margin-left: 36px;
                font-size: 16px;
                font-family: 'Popins';
                font-weight: 400;
                line-height: 28px;
                color: #6B6B6B;
                @media (max-width: 767px) {
                    margin-left: 0px;
                    text-align: left;
                    max-width: 100%;
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 28px;
                    margin-top: 20px;
                }
            }
            h2 {
                color: #111029;
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 48px;
                line-height: 32px;
            }
        }
        p {
            margin: 0;
        }
    }

    .whereBuy{
        display: none;
        width: 100%;
        padding: 30px;
        background: radial-gradient(75.22% 75.22% at 20.49% 12.79%, #FFFFFF 0%, rgba(228, 231, 233, 0.502295) 100%);
        @media (max-width: 767px) {
            display: block;
         }
        .stpt{
            width: 15px;
            margin-left: 10px;
        }
        h3{
            margin-top: 0;
            color: #727272;
            text-align: center;
        }
    }
    p{
        color: #727272;
        font-size: 18px;
        line-height: 24px;
        @media (max-width: 767px) {
            font-size: 12px;
            // padding-right: 60px;
            line-height: 20px;
        }
    }
    h2{
        color: #111029;
        font-size: 48px;
        line-height: 70px;
        font-weight: 800;
        margin-bottom: 0;
        @media (max-width: 767px) {
            font-size: 24px;
            line-height: 40px;
        }
    }
    hr{
        border-top: 1px solid #ECECEC;
        border-bottom: none;
        margin: 16px 0; 
        @media (max-width: 767px) {
            margin: 16px 80px 16px 0px;
        }
    }

    .video_content {
        width: 535px;
        height: 299px;

        @media (max-width: 767px) {
            width: 100%;
            padding: 30px 30px 0px 30px;
            /* height: 250px; */
        }

        iframe {
            border: none;
        }
    }
`

const ThirdContent = styled.div`
    background: url(${DaoBg}) no-repeat;
    // background: #1B1B87;
    background-size: cover;
    @media (max-width: 767px) {
        padding-bottom: 60px;
        background: url(${DaoBg}) no-repeat,#1b1b87;
        background-position: 50% 120%, center;
        background-size: 100%, 100%;
    }
    .types {
        display: flex;
        align-items: center;
        justify-content: space-around;
        @media (max-width: 767px) {
            flex-direction: column;

        }
        .defiTitle {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 48px;
            line-height: 60px;
            @media (max-width: 767px) {
                text-align: center;
            }
        }
    }
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 160px 50px;
        @media (max-width: 1200px) {
            padding: 100px 50px;
        }
        @media (max-width: 767px) {
            padding: 100px 30px 30px;
        }
    }
    p{
        font-size: 18px;
        color: #fff;
        margin-bottom: 50px;
        @media (max-width: 767px) {
            margin-bottom: 30px;
            font-size: 12px;
            width: 100%;
        }
    }
    h2{
        font-size: 48px;
        color:#fff;
        margin-bottom: 0;
        @media (max-width: 767px) {
            font-size: 24px;
        }
    }
    h3{
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        color: #fff; 
        margin-top: 0;
        // margin-bottom: 10px;
        @media (max-width: 767px) {
            font-size: 14px;
            line-height: 1.2;
            // margin-bottom: 5px;
        }
    }
    ul{
        list-style: none;
        font-size: 16px;
        line-height: 40px;
        color: #79869F;
        padding: 0;
        li{
            margin: 20px 0;
            background: #2436D9;
            padding: 16px 20px;
            border-radius: 16px; 
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 64px;
            img{
                width: 40px;
                margin-right: 15px;
            }
            box-shadow: 11px 10px 20px rgba(0, 0, 0, 0.6);
            &:first-of-type{
                width: 400px;
            }
            &:nth-of-type(2){
                width: 500px
            }
            &:nth-of-type(3){
                width: 300px
            }
            &:nth-of-type(4){
                width: 430px
            }
            &:nth-of-type(5){
                width: 270px
            }
            @media (max-width: 767px) {
                width: 100%!important;
                height: 64px;
                &:first-of-type{
                    width: 150px;
                }
                &:nth-of-type(2){
                    width: 160px;
                }
            }
        }
        p{
            font-size: 12px;
            margin-bottom: 0;
            width: 100%;
            @media (max-width: 767px) {
                font-size: 10px;
                line-height: 14px;
            }
        }
    }
`

const FourthContent = styled.div`
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 50px 100px;
        @media (max-width: 767px) {
            padding: 30px 0 80px;
        }
    }
    background: rgba(0, 0, 0, 0.05);
    background: url(${Image4}) no-repeat, radial-gradient(75.22% 75.22% at 20.49% 12.79%, #FFFFFF 0%, rgba(228, 231, 233, 0.502295) 100%);;
    background-size: 100%;
       
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029;
        padding: 0px 30px 30px;
        padding-top: 195px;
        @media (max-width: 767px) {
            font-size: 24px;
            padding-top: 80px;
            padding-bottom: 10px;
        }
    }
    h3{
        font-weight: 600;
    }
`
const FifthContent = styled.div`
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 50px;
        @media (max-width: 767px) {
            padding: 0 30px;
        }
    }
    padding: 10px 0 200px;
    @media (max-width: 767px) {
        padding: 65px 0 100px;
    }
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029; 
        padding-top: 150px;
        @media (max-width: 767px) {
            font-size: 24px;
            padding-top: 60px;
        }
    }
    h3{
        font-size: 20px;
        color: #111029;
        margin-top: 0;
        font-weight: 600;
        @media (max-width: 767px) {
            font-size: 16px;
        } 
    }
    p{
        font-size: 16px;
        text-align: center;
        color: #727272;
        padding: 0px 50px;
        line-height: 20px;
        @media (max-width: 767px) {
            font-size: 12px;
            padding: 0;
        }
    }
`
const SixthContent = styled.div`
    &>div{
        max-width: 1200px;
        margin: 0 auto;
    }
    background: url(${Image6}) no-repeat;
    background-size: 80%;
    background-position: center right;
    @media (max-width: 767px) {
        padding-bottom: 300px;
        background: url(${Image6H5}) no-repeat;
        background-position: 100% 210px;
        background-size: 80%;
    }
    &>div{
        margin: 0 auto;
        max-width: 1200px;
        padding: 180px 50px 50px 50px;
        @media (max-width: 1200px) {
            padding: 100px 50px;
        }
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029; 
        @media (max-width: 767px) {
            font-size: 24px;
        }
    }
    p{
        padding: 20px 100px;
        text-align: center;
        @media (max-width: 767px) {
            padding: 20px 30px;
        }
    }
    .ant-card-body{
        margin: 0 auto;
        text-align: center;
    }
`

const SeventhContent = styled.div`
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 150px 50px;
        @media (max-width: 767px) {
            padding: 20px 30px;
        }
    }
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029; 
        @media (max-width: 767px) {
            font-size: 24px;
        }
    }
    p{
        font-size: 16px;
        text-align: center;
        color: #727272;
        padding: 0px 50px;
        @media (max-width: 767px) {
            padding: 0;
            font-size: 12px;
        }
    }
    .ant-btn{
        margin: 0 auto;
        display: block;
        box-shadow: 5px 5px 20px #A3A3A3;
        &:hover{
            box-shadow: 5px 5px 20px #676767;
        }
    }
`
const EighthContent = styled.div`
    background: url(${Image8}) no-repeat;
    background-position-y: 150px;
    background-position-x: -10px;
    background-size: 100%;
    @media (max-width: 767px) {
        background: url(${Image8H5}) no-repeat;
        background-position: 10px 200px;
        background-size: 11%;
    }
    &>div{
        max-width: 1200px;
        margin: 50px auto 0;
        padding: 0 40px 0 60px;
        @media (max-width: 767px) {
            padding: 100px 30px;
            margin: 0 auto;
        }
    }
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029; 
        margin-bottom: 120px;
        padding-top: 32px;
        @media (max-width: 767px) {
            margin-top: 0;
            font-size: 24px;
            margin-bottom: 64px;
        }
    }
    h3{
        font-size: 16px;
        color: #151517;
        margin-top: 0;
        font-weight: 600;
        @media (max-width: 767px) {
            padding-left: 60px;
        }
    }
    ul{
        padding-left: 20px;
        @media (max-width: 767px) {
            padding-left: 80px;
        }
    }
    li{
        font-size: 12px;
        font-weight: 400;
        color: #727272;
        @media (max-width: 767px) {
            font-size: 10px;
            line-height: 15px;
        }
    }
`
const NinthContent = styled.div`
    background: url(${Image10}) no-repeat;
    background-position: center top; 
    background-size: cover;
    background-position-x: 100%;
    padding: 0px 0px 200px 0px; 
    margin-top: 150px;
    @media (max-width: 767px) {
        background: url(${Image10H5}) no-repeat;
        background-size: 100%;
        background-position: center top; 
        margin-top: 100px;
    }
    .inner {
        margin-top: -100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        .btns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            margin-top: 144px;
            @media (max-width: 767px) {
                grid-template-columns: 1fr;
                margin-top: 0px;
                justify-items: center;
            }
            .btn-w {
                height: 50px;
                background: #FFFFFF;
                box-shadow: 3px 3px 20px #A3A3A3;
                border-radius: 15px;
                color: #0D1DB4;
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                text-align: center;
                line-height: 1.5;
                cursor: pointer;
                padding: 12px 36px 12px 36px;
                &:nth-of-type(1) {
                    width: 180px;
                }
                &:nth-of-type(2) {
                    width: 210px;
                }
                &:hover {
                    background: #CCCCCC;
                }
                @media (max-width: 767px) {
                    font-size: 14px;
                    // min-width: 160px;
                }
            }
        }
    }
    .bols {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        // display: grid;
        // grid-template-columns: 1fr 1fr 1fr 1fr;
        // grid-gap: 23px;
        @media (max-width: 767px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 20px;
        }
        .bol {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.2);
            width: 190px;
            height: 190px;
            background: #FFFFFF;
            border-radius: 40px;
            margin-right: 43px;
            cursor: pointer;
            position: relative;
            @media (max-width: 767px) {
                width: 140px;
                height: 140px;
                flex-direction: column;
                margin-right: 0px;
                margin-bottom: 20px;
            }
            .imgBox {
                width: 80px;
                height: 80px;
                left: 59px;
                top: 0px;
                background: #FFFFFF;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                // position: absolute;
                margin-top: -50px;
                @media (max-width: 767px) {

                }
                img {
                    width: 27px;
                    height: 40px;
                    // transform: translateY(-1000px);
                    // filter: drop-shadow(#1B1B87 0 1000px);
                }
            }
            .text {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 30px;
                text-align: center;
                color: #727272;
                @media (max-width: 767px) {
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 21px;
                }
            }
        }
    }
    &>div{
        max-width: 1200px;
        margin: 0 auto;
        padding: 50px;
        @media (max-width: 767px) {
            padding: 20px;
        }
    }
    h2{
        font-size: 48px;
        text-align: center;
        color: #111029; 
        @media (max-width: 767px) {
            font-size: 24px;
            text-align: left;
        }
    }
    p{
        font-size: 16px;
        text-align: center;
        color: #727272;
        margin-bottom: 40px;
        @media (max-width: 767px) {
            font-size: 12px;
            text-align: left;
        }
    }
    .ant-btn{
        margin: 0 auto;
        display: block;
        box-shadow: 5px 5px 20px #A3A3A3;
        @media (max-width: 767px) {
            margin-left: 0;
        }
        &:hover{
            box-shadow: 5px 5px 20px #676767;
        }
    }
    ul{
        margin: 50px 0;
        padding-left: 0;
        li{
            color: #9f9fa9;
            display: inline-block;
            width: 20%;
            text-align: center;
            line-height: 20px;
            a{
                color: #9f9fa9; 
                display: flex;
                justify-content: center;
                align-items: center;
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


const Home: React.FC = () =>  {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [infrastructureActive, setInfrastructureActive] = useState(false);
    const [elementHeight, setElementHeight] = useState(568);
    const carouselRef = useRef<any>()
    const history = useHistory();

    const headerRef = useRef(null);
    const homeRef = useRef(null);
    const verseRef = useRef(null);
    const productsRef = useRef(null);
    const partnershipsRef = useRef(null);
    const resourcesRef = useRef(null);
    const learnRef = useRef(null);

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
  
  
    const sectionRefs = [
      { section: "Home", ref: homeRef },
      { section: "Verse", ref: verseRef },
      { section: "Products", ref: productsRef },
      { section: "Partnerships", ref: partnershipsRef },
      { section: "Resources", ref: resourcesRef },
      { section: "Learn", ref: learnRef },
    ];
    const getDimensions = (ele: any) => {
        if(!ele){
            return {}
        }
        const { height } = ele.getBoundingClientRect();
        const offsetTop = ele.offsetTop;
        const offsetBottom = offsetTop + height;
      
        return {
          height,
          offsetTop,
          offsetBottom,
        };
      };
      
    const scrollTo = (ele: any) => {
        if(!ele){
            return
        }
        ele.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    
    const getCustomPaging = (i: number) => {
        switch (i) {
            case 1: 
                return <><div><img src={Tools1}/></div><div>Clique</div></>
            case 2: 
                return <><div><img src={Tools3}/></div><div>Governance SDK</div></>
            case 3: 
                return <><div><img src={Tools4}/></div><div>Multi-modular blockchain architecture</div></>
        }
    }

    const settings = {
        customPaging: function(i: number) { return <a>{getCustomPaging(i+1)}</a> },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        nextArrow: <></>,
        prevArrow: <></>,
      };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        window.addEventListener("scroll", reveal);
        const revealElement = document.getElementById("infrastructure-list");
        if(revealElement){
            setElementHeight(revealElement.getBoundingClientRect().height)
        }  
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
            window.removeEventListener("scroll", reveal);
        };
    }, []);
  
    const handleMediaQueryChange = (mediaQuery: any) => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
  
    const toggleNav = () => {
      setNavVisibility(!isNavVisible);
    };

    const reveal = () => {
        const revealElement = document.getElementById("infrastructure-list");
        if(revealElement){
            const windowHeight = window.innerHeight;
            const elementTop = revealElement.getBoundingClientRect().top;
        
            if (elementTop < windowHeight - (elementHeight + 50)) {
                setInfrastructureActive(true)
            } else {
                setInfrastructureActive(false)
            }
        } 
    }
      
    const stpMenu = (
        <Menu>
            <Menu.Item>
                <a href="#About">About</a>
            </Menu.Item>
            <Menu.Item>
            <a href="#Features">
                Features
            </a>
            </Menu.Item>
      </Menu>
    )

    const productsMenu = (
        <Menu>
            <Menu.Item>
                <a href="#STPChain">
                    STP Chain
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="#Tools">
                    Tools
                </a>
            </Menu.Item>
        </Menu>
    )
    const ecosystemMenu = (
        <Menu>
            {/* <Menu.Item>
                <a href="#Ecosystem">
                    Ecosystem Projects
                </a>
            </Menu.Item> */}
            <Menu.Item>
                <a href="#Strategic">
                    Strategic Partners
                </a>
            </Menu.Item>
        </Menu>
    )
    const resourcesMenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" href="/Verse Network WP.pdf">
                Whitepaper
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="#Roadmap">
                Roadmap
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="mailto:contact@stp.network">
                    Build with STP
                </a>
            </Menu.Item>
        </Menu>
    )
    const learnMenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@versenetwork">
                    STP News
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://stp-network.gitbook.io">
                    Wiki
                </a>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout className="homePage">
            <Modal className="comingModal" visible={isModalVisible} footer={null} closable={false} width={320} centered>
                <img src={Cube} alt="" />
                <p>Coming Soon...</p>
            <Button type="primary" onClick={handleCancel}>Close</Button>
            </Modal>
                <FirstContent className="section" id="Home" ref={homeRef}>
                    <div>
                        <Row>
                            <Col md={18} sm={24}>
                                <h1>DAO Booster Program <br/></h1>
                                <p>
                                Empowering DAOs on Clique
                                </p>
                                <div className="btns">
                                    <Button type="primary"><a href="https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/rRQ7limbMglccq68gojGxh3Wbf4Hy2rTODHfkKragjA" target="_blank">Learn More</a></Button>
                                    <Button type="primary"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdSl2HuWLXMQDRjB4npQP0BoAcpGL2e3BQK9HldkU7TZMgSRQ/viewform">Apply for Grant</a></Button>
                                    {/* <Button type="primary"><Link to="/developers">Launch Verse Testnet</Link></Button> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </FirstContent>
                <div className="section" id="Verse" ref={verseRef}>
                    <SecondContent>
                        <div id="About" className='secondContent_main'>
                            <div className='secondContent_info_box'>
                                <div className='secondContent_info'>
                                    <h2 id="Finance">Mission</h2>
                                    <p>Native tools and infrastructure that facilitate more efficient decentralized decision-making for users, communities, and organizations.</p>
                                </div>
                                
                                <hr className='hrStyle'/>
                            </div>
                        </div>
                    </SecondContent> 
                    <ThirdContent>
                        <div id="Features" className='types'>
                            {/* <h2 id="Experience" className="defiTitle">Verse</h2> */}
                            <p className="defiTitle" id="Experience">DAO<br/>Types</p>
                            <ul>
                                <li>
                                    <div><img src={DaoTypes1} alt="" /></div>
                                    <div>
                                        <h3>Decentralized finance (DeFi)</h3>
                                    </div>
                                </li>
                                <li>
                                    <div><img src={DaoTypes2} alt="" /></div>
                                    <div>
                                        <h3>Cutting-edge technology, eg, AI, ZK, etc.</h3>
                                    </div>
                                </li>
                                <li>
                                    <div><img src={DaoTypes3} alt="" /></div>
                                    <div>
                                        <h3>Gaming and NFTs</h3>
                                    </div>
                                </li>
                                <li>
                                    <div><img src={DaoTypes4} alt="" /></div>
                                    <div>
                                        <h3>Social impact and sustainability</h3>
                                    </div>
                                </li>
                                <li>
                                    <div><img src={DaoTypes5} alt="" /></div>
                                    <div>
                                        <h3>Arts and culture</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </ThirdContent>
                </div>
                <NinthContent>
                    <div className='inner'>
                        <h2>Criteria</h2>
                        <div className='bols'>
                            <div className='bol'>
                                <div className='imgBox'>
                                    <img src={ Bol1 } alt="" />
                                </div>
                                <div className='text'>
                                Innovation and Creativity
                                </div>
                            </div>
                            <div className='bol'>
                                <div className='imgBox'>
                                    <img src={Bol2} alt="" />
                                </div>
                                <div className='text'>
                                Feasibility
                                </div>
                            </div>
                            <div className='bol'>
                                <div className='imgBox'>
                                    <img src={Bol3} alt="" />
                                </div>
                                <div className='text'>
                                Community Involvement
                                </div>
                            </div>
                            <div className='bol'>
                                <div className='imgBox'>
                                    <img src={Bol4} alt="" />
                                </div>
                                <div className='text'>
                                Sustainability
                                </div>
                            </div>
                        </div>
                        <div className="btns">
                            <div className='btn-w'>
                                <a href="https://mirror.xyz/0xB9d761AF53845D1F3C68f99c38f4dB6fcCfB66A1/rRQ7limbMglccq68gojGxh3Wbf4Hy2rTODHfkKragjA" target="_blank">Learn More</a>
                            </div>
                            <div className='btn-w'>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSl2HuWLXMQDRjB4npQP0BoAcpGL2e3BQK9HldkU7TZMgSRQ/viewform">Apply for Grant</a>
                            </div>
                            {/* <Button type="primary"><a href="https://myclique.io" target="_blank">Learn More</a></Button> */}
                            {/* <Button type="primary"><a href="https://stp-dao.gitbook.io/verse-network/dapps/clique">Apply for Grant</a></Button> */}
                        </div>
                    </div>
                    
                </NinthContent>  
        </Layout>
    )
}

export default Home;
