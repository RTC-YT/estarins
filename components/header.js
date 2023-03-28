import { Button } from 'reactstrap';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Header({classType}) {
  const navigate = useRouter()
  return (
    <div className={classType}>
      <Image src={"https://www.nftlotterytron.com/images/NFTLotteryTronLogo.svg"} alt='NFTLotteryTron Logo' />

      <div className='p-3'>
        <Button className='btn-primary myDeGodsBtn' onClick={() => navigate.push('/winners')}>
          Winners
        </Button>
      </div>
    </div>
  )
}