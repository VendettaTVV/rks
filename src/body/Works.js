import ReactCompareImage from 'react-compare-image';
import Container from "react-bootstrap/esm/Container";
import compImg1 from '../pictures/our-work/VolgaBefore.jpg';
import compImg2 from '../pictures/our-work/VolgaAfter.jpg';
import compImg3 from '../pictures/our-work/OpelBefore.jpg';
import compImg4 from '../pictures/our-work/OpelAfter.jpg';
import compImg5 from '../pictures/our-work/Chaika.jpg';
import compImg6 from '../pictures/our-work/Honda.jpg';
import compImg7 from '../pictures/our-work/Mitsubishi.jpg';


function WorkComponent() {
    return (
        <>
            <p className="text-center fw-bolder mb-0 pt-5 fs-1 font-family-sans-serif bg-white container">A few examples of our work</p>
            <Container className='bg-white mt-0 mb-0 d-flex justify-content-around flex-wrap'>
                <Container className=' w-50 m-0 mt-5 '>
                    <ReactCompareImage
                        leftImage={compImg1}
                        rightImage={compImg2}
                    />
                </Container>
                <Container className=' w-50 m-0 mt-5'>
                    <ReactCompareImage
                        leftImage={compImg3}
                        rightImage={compImg4}
                    />
                </Container>
                <Container className="mt-0 mb-5 pt-5 d-flex justify-content-around flex-wrap">
                    <img
                        src={compImg5}
                        width="400"
                        height="400"
                        className='img-thumbnail'
                        alt='AutoChaika'
                    />
                    <img
                        src={compImg6}
                        width="400"
                        height="400"
                        className='img-thumbnail'
                        alt='AutoHonda'
                    />
                    <img
                        src={compImg7}
                        width="400"
                        height="400"
                        className='img-thumbnail'
                        alt='AutoMitsibishi'
                    />
                </Container>
            </Container>
        </>
    )
}

export default WorkComponent;