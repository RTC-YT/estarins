
import { Col, Row } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner(){
  return(
    <Col className='footbanner'>
    <Row>
      <Col md={6} className='left'>
        <h1>
          We are <strong>DeGods Tron</strong> by <strong>NFTLotteryTron</strong>
        </h1>
        <div className="p">
          <p>
            <b>DeGods are more than simple NFT, get your lottery ticket to win TRX.</b>
            <br /> You can check the prizes in <Link href="https://nftlotterytron.com/">NFTLotteryTron Site</Link>
          </p>
          <div className='py-3'>
            <Link className='btn btn-light myDeGodsBtn' href='#mint'>
              Mint Now
            </Link>
          </div>
        </div>
      </Col>
      <Col md={6} className='right'>
        <Image src='/degods-min.png' data-degod="1" alt='DeGod Banner' className='active' />
      </Col>
    </Row>
  </Col>
  )
}