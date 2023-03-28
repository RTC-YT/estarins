import Head from 'next/head'
import Image from 'next/image';
import { Button, Card, CardImg, Col, Input, Row } from 'reactstrap';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Banner from '../components/banner';
import _const from '../const';
import Header from '../components/header';

export default function Mints() {

  const navigate = useRouter()
  const [mintAmount, setMintAmount] = useState(1);
  const [walletStatus, setWalletStatus] = useState("Loading...");
  const [mintBtnStat, setMintBtnStat] = useState(true)

  const [max, setMax] = useState(25);
  const [totalMinted, setTotalMinted] = useState(0);

  const [err, setErr] = useState('')

  const [TronWeb, setTronWeb] = useState(null);
  const [contract, setContract] = useState(null)
  const CONTRACT_ADDRESS = _const.CONTRACT_ADDRESS

  const Minted = async () => {
    if (contract != null) {
      contract.totalSupply().call().then(res => {
        setTotalMinted(res.toNumber())
        setMax(10000 - totalMinted >= 25 ? 25 : 10000 - totalMinted)
      })
    }
  }


  const _mint = async () => {
    setMintBtnStat(true)
    setWalletStatus("Loading...")
    let cost = mintAmount * 33000000;
    if (contract != null) {
      await contract.mint(mintAmount)
      .send({ callValue: cost })
      .then(res => navigate.push( '/my-degods' ) )
      .catch(err => {
        setErr(err)
        setMintBtnStat(false)
        setWalletStatus("Mint")
      });
    Minted()
    }
  }

  const extension = ()=> open('https://chrome.google.com/webstore/detail/tron-wallet/ibnejdfjmmkpcnlpebklmnkoeoihofec')

  useEffect(() => {
    const interval = setInterval(async ()=> {
      if (window.tronWeb) {
        if (window.tronWeb.ready) {
          setWalletStatus("Mint");
          setMintBtnStat(false)
          Minted();
          setTronWeb(window.tronWeb);
          setContract(await window.tronWeb.contract().at(CONTRACT_ADDRESS)); 
        } else setWalletStatus("Login your TronLink wallet");
      } else setWalletStatus("Tron Link not Installed");
      clearInterval(interval);
    }, 2000);
  }, []);


  const trxIcon = <Image src='/trx-red.svg' alt="trx" className='trxIcon' />;

  return (
    <div>
      <Header classType='Header'/>
      <Banner />
      <div className="containers">
        <Head>
          <title>DeGods - Mint</title>
          <meta name="description" content="Mint your DeGods, and win awesome prizes in TRX." />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <Card className='priceDisplay card-body'>
          <Row>
            <Col md={6}>
              <CardImg src='/Mint_Degod.gif' alt='DeGod Display' autoPlay={true} loop={true} />
            </Col>
            <Col md={6} className='verticalCenter' id='mint'>
              <h3><strong>{trxIcon} Price 33 TRX {trxIcon}</strong></h3>
              <h5><strong>Total Minted: {totalMinted}/10000</strong></h5>
            </Col>
          </Row>
        </Card>
        <Card className='ammountSelect card-body' id='mint'>
          <Row>
            <Col className='oneLine' md={6}>
              <Button onClick={() => { if (mintAmount >= 2) setMintAmount(mintAmount - 1) }} >-</Button>
              <Input type='number' value={mintAmount} className='align-center'/>
              <Button onClick={() => { if (mintAmount > 0 && mintAmount <= max - 1) setMintAmount(mintAmount + 1) }} >+</Button>
            </Col>
            <Col className='verticalCenter' md={6}><h5>{max} Max</h5></Col>
          </Row>
        </Card>
        <Col className='totalDisplay'>
          <h5><strong>Total Price:</strong></h5> <h5><strong>{mintAmount * 33} TRX {trxIcon} </strong></h5>
        </Col>
        <Col> <p className='text-center' >{err}</p> </Col>
        <Col>{contract ? <Button block onClick={() => _mint()} disabled={mintBtnStat} > {walletStatus} </Button> : <Button block onClick={() => extension()}> {walletStatus} </Button>} </Col>
      </div>
    </div>
  )
}
