import Container from 'react-bootstrap/esm/Container';
import certificat1 from '../pictures/about-us/certificat1.jpg';
import certificat2 from '../pictures/about-us/certificat2.jpg';
import certificat3 from '../pictures/about-us/certificat3.jpg';
import partn1 from '../pictures/about-us/partn1.jpg';
import partn2 from '../pictures/about-us/partn2.png';
import partn3 from '../pictures/about-us/partn3.png';
import partn4 from '../pictures/about-us/partn4.png';
import partn5 from '../pictures/about-us/partn5.png';
import partn6 from '../pictures/about-us/partn6.png';
import partn7 from '../pictures/about-us/partn7.png';
import partn8 from '../pictures/about-us/partn8.png';
import partn9 from '../pictures/about-us/partn9.png';
import partn10 from '../pictures/about-us/partn10.png';
import partn11 from '../pictures/about-us/partn11.png';
import partn12 from '../pictures/about-us/partn12.png';
import partn13 from '../pictures/about-us/partn13.png';
import partn14 from '../pictures/about-us/partn14.png';
import partn15 from '../pictures/about-us/partn15.png';



function InfoComponent() {
    return (
        <Container className="bg-white mt-0 mb-0">
            <Container className="mt-0 pt-5 d-flex justify-content-around">
                <img
                    src={certificat1}
                    width="200"
                    height="200"
                    className="img-thumbnail"
                    alt="Certificat1"
                />
                <img
                    src={certificat2}
                    width="200"
                    height="200"
                    className="img-thumbnail"
                    alt="Certificat1"
                />
                <img
                    src={certificat3}
                    width="200"
                    height="200"
                    className="img-thumbnail"
                    alt="Certificat1"
                />
            </Container>

            <p className="text-start pt-5 fs-4 font-family-sans-serif mb-0"> RKS OÜ (RKS LLC) is an industrial company that began its financial and economic activity in 2001. The main activity of the company comprises
                bodywork and automotive painting. We work with private customers, legal persons as well as all insurance companies. We offer a wide range of services,
                from small repairs (scratches on a car’s bodywork ) to repair of a damaged car. The following services are available at our workshop: auto glass replacement,
                bodywork, paintwork, towing services, air conditioner filling, repair of plastic parts, custom auto parts , welding, restoration of body geometry, tyre fitting.
                To establish the costs of repairs, vehicle inspection by a professional is required, if necessary, our specialist will come to the location of emergency transport.
                The main advantages of the services provided by RKS OÜ are high-quality work, individual customer approach as well as production and modern technology improvement.
                Our staff is actively involved in related training courses as repair technology is constantly changing. We only work with quality materials. Our body shop is
                equipped with the most modern equipment: a new paint booth and a stand for restoration of body geometry, resistance welding, welding on aluminum, repair of
                plastic parts, auto glass replacements. RKS OÜ is a member of AMTEL (International Organisation for Manufacturers of Motor Vehicles; www.amtel.ee), which allows
                us to share experiences with similar foreign companies and international organisations. For the convenience of our customers, there is a large guarded parking on
                the premises of the workshop.
            </p>
            <p className="fw-bolder pt-4 fs-4 font-family-sans-serif text-uppercase text-center">Our partners</p>
            <Container className="mt-0 pt-3 d-flex justify-content-around flex-wrap">
                <img
                    src={partn1}
                    width="150"
                    height="150"
                    className="img-thumbnail"
                    alt="Certificat1"
                />
                <img
                    src={partn2}
                    width="150"
                    height="150"
                    className="img-thumbnail"
                    alt="Certificat2"
                />
                <img
                    src={partn3}
                    width="150"
                    height="150"
                    className="img-thumbnail"
                    alt="Certificat3"
                />
                <img
                    src={partn4}
                    width="150"
                    height="150"
                    className="img-thumbnail"
                    alt="Certificat4"
                />
                <img
                    src={partn5}
                    width="150"
                    height="150"
                    className="img-thumbnail"
                    alt="Certificat5"
                />
                <img
                    src={partn6}
                    width="150"
                    height="150"
                    className="img-thumbnail"
                    alt="Certificat6"
                />
            </Container>
            <Container className="mt-0 pt-3 d-flex justify-content-around flex-wrap">
                <img
                    src={partn7}
                    width="130"
                    height="130"
                    className="img-thumbnail"
                    alt="Certificat7"
                />
                <img
                    src={partn8}
                    width="130"
                    height="130"
                    className="img-thumbnail"
                    alt="Certificat8"
                />
                <img
                    src={partn9}
                    width="130"
                    height="130"
                    className="img-thumbnail"
                    alt="Certificat9"
                />
                <img
                    src={partn10}
                    width="130"
                    height="130"
                    className="img-thumbnail"
                    alt="Certificat10"
                />
                <img
                    src={partn11}
                    width="130"
                    height="130"
                    className="img-thumbnail"
                    alt="Certificat11"
                />
                <img
                    src={partn12}
                    width="130"
                    height="130"
                    className="img-thumbnail"
                    alt="Certificat12"
                />
            </Container>
            <Container className="mt-0 pt-3 pb-5 d-flex justify-content-around flex-wrap">
                <img
                    src={partn13}
                    width="130"
                    height="130"
                    className="img-thumbnail"
                    alt="Certificat13"
                />
                <img
                    src={partn14}
                    width="130"
                    height="130"
                    className="img-thumbnail"
                    alt="Certificat14"
                />
                <img
                    src={partn15}
                    width="130"
                    height="130"
                    className="img-thumbnail"
                    alt="Certificat15"
                />
            </Container>
        </Container>
    )
}

export default InfoComponent;