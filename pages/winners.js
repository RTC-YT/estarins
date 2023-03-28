import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import {
  Button, Card, CardBody,
  CardFooter, CardImg, Col, Row,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import { useRouter } from 'next/router';
import _const from '../const';
import Header from '../components/header';

export default function Accounts() {

  const [open, setOpen] = useState(false)
  const [content, setContent] = useState(false)
  const [type, setType] = useState(false)

  const noRefCheck = ()=> setOpen(!open)


  

  return (

    <div>
      <Modal
        centered
        isOpen={open}
        toggle={noRefCheck} >

        <ModalHeader toggle={noRefCheck}>
          {type ? 'Success' : 'Error'}
        </ModalHeader>
        <ModalBody className="text-center">
          {/* {type ? 'Success' : 'Error'} <br /> */}
          <div dangerouslySetInnerHTML={{__html: content} }/>
        </ModalBody>
        <ModalFooter>
          <Button onClick={noRefCheck}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <Header classType='Header' />
      <Col className='approvalbar'>
        <Row>
          <Col md={6} className='right'>
            <h1>
              Get your DeGods and <strong>WIN!</strong>
            </h1>
            <div className="p">
              <p>
                <b>Are you ready to participate in NFTLotteryTron???
                </b>
                <br />
                It is time to win with NFTs.
              </p>
            </div>
          </Col>
          <Col md={6} className='left f-left'>
            <div className='d-flex gap-3 flex-column'>
            <Link className='btn btn-light myDeGodsBtn' href='/'>
              Mint Now
            </Link>
            <Link className='btn btn-light myDeGodsBtn' href='https://apenft.io/#/collection/TBisqdYPw6Yt4KWWmpJuvgmE318EqHFLim'>
             APENFT 
            </Link>
            </div>
          </Col>
        </Row>
      </Col>

      <div className="containers">
        <Head>
          <title>DeGods - My DeGods</title>
          <meta name="description" content="Start your journey in our metaverse by acquiring your first Cubie NFT, breeding it, and playing with him in one of our games." />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className="Banner">
          <h2><strong>WINNER LIST</strong></h2>
          <p>waiting complete first stage (1250 degods minted)</p>
        </div>



        <Col><Button block href="/">Mint More</Button></Col>

      </div>
    </div>
  )
}
