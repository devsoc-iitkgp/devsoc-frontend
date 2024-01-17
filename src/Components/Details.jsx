import Details3 from '../assets/img/details-3.png';
import Details4 from '../assets/img/details-4.png';

export default function Details() {
    return (
        <section id="details" className="details">
            <div className="container">

                <div className="row content">
                    <div className="col-md-4" data-aos="fade-right">
                        <img src={Details4} className="img-fluid" alt="" style={{ width: "80%", height: "auto" }} />
                    </div>
                    <div className="col-md-8 pt-4" data-aos="fade-up">
                        <h1 style={{
                            fontFamily: '"Ubuntu", sans-serif',
                            fontSize: 50,
                            marginBottom: 90,
                            color: "#4233ff",
                            textAlign: "center"
                        }}><b>Launching a new world for developers</b></h1>
                        <p style={{ fontFamily: '"Ubuntu", sans-serif', fontSize: 20 }}>In light of the need to improve existing applications and the potential for automating vrious workflows on campus, the Developers' Society is an initiative to bring together a group of individuals who are motivated and interested in encouraging the development culture by taking various initiatives within the institute and developing new applications that benefit the entire KGP community.</p>
                    </div>
                </div>

                <div className="row content">
                    <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
                        <img src={Details3} className="img-fluid" alt="" style={{ width: "80%", height: "auto" }} />
                    </div>
                    <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
                        <h1 style={{
                            fontFamily: '"Ubuntu", sans-serif',
                            fontSize: 50,
                            marginBottom: 90,
                            color: "#4233ff",
                            textAlign: "center"
                        }}><b>Our aim</b></h1>
                        <p style={{ fontFamily: '"Ubuntu", sans-serif', fontSize: 20 }}>
                            <b>Community first</b> : Developers' Society will serve the student community as a group and as individuals.
                        </p>
                        <p style={{ fontFamily: '"Ubuntu", sans-serif', fontSize: 20 }}>
                            <b>Learn. Build. Share</b> : Developers' Society aims to promote and distribute new technologies while uplifting the students' developer community.
                        </p>
                        <p style={{ fontFamily: '"Ubuntu", sans-serif', fontSize: 20 }}>
                            <b>For KGP</b> : The Developers' Society will assist the Technology Students' Gymkhana in developing applications helpful to the student community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
