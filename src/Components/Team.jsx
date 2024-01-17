import React from 'react'
import KunalVerma from "../assets/img/team/Kunal_Verma_1.jpg"
import NabhyaKhoria from "../assets/img/team/Nabhya_Khoria_2_1.jpg"
import GauravShresth from "../assets/img/team/gaurav_new.jpg"
import SaiKalyan from "../assets/img/team/Sai_Kalyan_2.jpg"
import TusharKanwaria from "../assets/img/team/Tushar_Kanwaria_2_1.jpg"
import NishakarKumar from "../assets/img/team/Nishakar_Kumar_1.jpg"
import VaibhavMohite from "../assets/img/team/Vaibhav_Mohite_1.jpg"
import Aman from "../assets/img/team/aman_new.jpg"
import NileshDas from "../assets/img/team/Cory_House.jpg"
import ShiveshChaturvedi from "../assets/img/team/Shivesh_Chaturvedi_1.jpg"
import TejasAmbhore from "../assets/img/team/Tejas_Ambhore_1.jpg"

export default function Team() {
    const members = [
        {
            position: "Executive Head",
            members: [
                {
                    name: "Kunal Verma",
                    image: KunalVerma,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                }
            ]
        },
        {
            position: "Finance & Operations Head",
            members: [
                {
                    name: "Nabhya Khoria",
                    image: NabhyaKhoria,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                },
                {
                    name: "Gaurav Shresth",
                    image: GauravShresth,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                }
            ]
        },
        {
            position: "Outreach Head",
            members: [
                {
                    name: "Sai Kalyan",
                    image: SaiKalyan,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                },
                {
                    name: "Tushar Kanwaria",
                    image: TusharKanwaria,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                }
            ]
        },
        {
            position: "Development Head",
            members: [
                {
                    name: "Nishakar Kumar",
                    image: NishakarKumar,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                },
                {
                    name: "Vaibhav Mohite",
                    image: VaibhavMohite,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                },
                {
                    name: "Aman",
                    image: Aman,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                },
                {
                    name: "Nilesh Das",
                    image: NileshDas,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                },
                {
                    name: "Shivesh Chaturvedi",
                    image: ShiveshChaturvedi,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                },
                {
                    name: "Tejas Ambhore",
                    image: TejasAmbhore,
                    email: "http://ircell.iitkgp.ac.in",
                    linkedinLink: "http://ircell.iitkgp.ac.in",
                    fbLink: "http://ircell.iitkgp.ac.in"
                }
            ]
        }
    ]
    return (
        <section id="team" className="team">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Team</h2>
                    <p>Our Great Team</p>
                </div>

                {
                    members.map((member) => (
                        <div className="row" data-aos="fade-left" id="cards">
                            <div className="twelve">
                                <h1>{member.position}{member.members.length > 1 ? 's' : ''}</h1>
                            </div>
                            {
                                member.members.map((member, _, { position }) => {
                                    position = member.position
                                    return (
                                        <div className="col-lg-3 col-md-6 card_child">
                                            <div className="member" data-aos="zoom-in" data-aos-delay="100">
                                                <div className="pic"><img src={member.image} className="img-fluid card-img" alt="" style={{ height: "300px", width: "300px" }} /></div>
                                                <div className="member-info">
                                                    <h4 style={{ fontFamily: "'Merriweather Sans', sans-serif;"}}>{member.name}</h4>
                                                <p style={{ fontFamily: "'Merriweather Sans', sans-serif;"}}>{position}</p>
                                                <div className="social">
                                                    <a href={member.fbLink} target="_blank"><i className="bi bi-facebook"></i></a>
                                                    <a href={member.emailLink} target="_blank"><i className="bi bi-envelope-fill"></i></a>
                                                    <a href={member.linkedinLink} target="_blank"><i className="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                    )
                                })
                            }
            </div>
            ))
                }
        </div>
        </section >
    )
}
