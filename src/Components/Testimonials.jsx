import LinusTorvalds from '../assets/img/LinusTorvalds.jpeg';
import CoryHouse from '../assets/img/CoryHouse.jpg';
import FilipeFortes from '../assets/img/FilipeFortes.jpeg';
import MartinFowler from '../assets/img/MartinFowler.jpg';
import HalAbelsonandGeraldSussman from '../assets/img/HalAbelsonandGeraldSussman.jpg';

export default function Testimonials() {
    const swiperSlides = [
        {
            name: "Linus Torvalds",
            img: LinusTorvalds,
            quote: "Talk is cheap. Show me the code."
        },
        {
            name: "Cory House",
            img: CoryHouse,
            quote: "Code is like humor. When you have to explain it, it's bad."
        },
        {
            name: "Filipe Fortes",
            img: FilipeFortes,
            quote: "Debugging is like being a detective in a crime movie where you are also the murderer."
        },
        {
            name: "Martin Fowler",
            img: MartinFowler,
            quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
        },
        {
            name: "Hal Abelson and Gerald Sussman",
            img: HalAbelsonandGeraldSussman,
            quote: "Programs must be written for people to read, and only incidentally for machines to execute."
        }
    ];
    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">
                        {
                            swiperSlides.map((obj, ind) => (
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <img src={obj.img} className="testimonial-img" alt="" />
                                        <h3>{obj.name}</h3>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            {obj.quote}
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
    )
}
