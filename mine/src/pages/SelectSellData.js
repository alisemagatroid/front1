import React from "react";
import '../App.css';
import './SelectSellData.css';
import { NavLink, nav } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector"
import { ERC20_ABI } from "../Blockchain/ERC20ABI";
import Web3 from 'web3'
import { ghddj_ABI } from "../Blockchain/ERC20ABI";
import carInsure from "../images/car_insurance.png";
import jungBi from "../images/Jungbi.png";
import map from "../images/map.png";




export const injected = new InjectedConnector();



function SelectSellData() {

    //네트워크 정보 호출: 웹3 네트워크 정의
    const web3 = new Web3(new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/"))
    let metamask

    const txConfirmation = async (txHash) => {
        let checkTxLoop = () => {
            return window.ethereum
                .request({ method: "eth_getTransactionReceipt", params: [txHash] })
                .then((res) => {
                    if (res !== null && res.status === "0x1")
                        return "Confirm";
                    else if (res !== null && res.status === "0x0")
                        return "Fail";
                    else
                        return checkTxLoop();
                });
        };

        return checkTxLoop();
    };



    const handleData = async () => {

        const connect = await window.ethereum.request({ method: "eth_requestAccounts" })
        //홍어 컨트랙트 정의
        const callGdhddj = new web3.eth.Contract(ghddj_ABI, "0xd6151e4420630d11C6aD1f9097e7AD5071386e06")
        //홍어 컨트랙트의 buy_data 함수 호출 정보
        const infoGhddj = callGdhddj.methods.buy_data().encodeABI()

        const transaction_ghddj = {
            from: connect[0],
            to: "0xd6151e4420630d11C6aD1f9097e7AD5071386e06",
            data: infoGhddj,
            value: 0
        }

        const callMetamask_01 = window.ethereum.request({ method: "eth_sendTransaction", params: [transaction_ghddj] }).then((txHash) => {            
                console.log(txHash)
                alert("데이터가 전송되었습니다.")            

        }
        )
    }

    const connectWalletHandler = async () => {
        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
            try {

                //메타마스크 연결
                const connect = await window.ethereum.request({ method: "eth_requestAccounts" })
                //console.log(connect)
                metamask = new Web3(window.ethereum)    // 메타마스크 연결

                /*
                //erc20 컨트랙트 정의
                const callErc20 = new web3.eth.Contract(ERC20_ABI, "0x3cbb7308007A46D3C04645E1bC68143DF967DAaA")
                //approve 호출 정보
                const infoErc20 = callErc20.methods.approve("0x17fd5B07722d1075274655B5406bF19dB8Ffe987", 100000).encodeABI()

                //보낼 트랜잭션의 정보(형식동일...)
                const transaction_Erc = {
                    from: connect[0],
                    to: "0x3cbb7308007A46D3C04645E1bC68143DF967DAaA",
                    data: infoErc20,
                    value: 0
                }
                */
                //메타마스크 서명을 위한 호출
            }
            catch {
                alert("메타마스크 연결에 실패했습니다.")
            }
        }

    }

    return (
        <>
            <div className="Select-Main">
                <div className="Select-Title">        
                    구매할 데이터를 선택하세요
                </div>
            </div>

            <div className="Select-Body">
                <div className="Select-Tag">
                    차량 운전습관 정보
                </div>
                <div className="Select-Tag">
                    차량 정비 정보
                </div><div className="Select-Tag">
                    위치 및 방문 기록 정보
                </div>

            </div>


            <div className="Select-Body">


                <div className="Select-Block" onClick={handleData}>
                    <img alt="car_insurance" className="Select-Images" src={carInsure}/>
                
                </div>
                <div className="Select-Block" onClick={connectWalletHandler}>
                    <img alt="jungbi" className="Select-Images" src={jungBi}/>
                </div>
                <div className="Select-Block" onClick={connectWalletHandler}>
                    <img alt="map" className="Select-Images" src={map}/>
                </div>
            </div>

        </>
    )
}

export default SelectSellData