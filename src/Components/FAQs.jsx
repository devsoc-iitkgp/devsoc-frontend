import React from 'react'

export default function FAQs() {
    const faqs = [
        {
            question: "Which is the most popular programming language between developers ?",
            answer: "Javascript is the most popular language."
        },
        {
            question: "What all platforms is ApnaInsti app available in ?",
            answer: "Currently, ApnaInsti app is compatible for Android users and available in Google Play Store."
        },
        {
            question: "What is the aim of the Developers' Society ?",
            answer: "The foundation of the Developer's Society is led to ensure the following purposes: Community First - Developers' Society will serve the student community as a group and as individuals. Learn. Build. Share - Developers' Society aims to promote and distribute new technologies while uplifting the students' developer community. For KGP - The Developers' Society will assist the Technology Students' Gymkhana in developing applications helpful to the student community."
        },
        {
            question: "How to Sign Up in ApnaInsti ?",
            answer: "You can Sign Up in ApnaInsti using your institute email ID."
        }
    ]
    return (
        <section id="faq" className="faq section-bg">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>F.A.Q</h2>
                    <p>Frequently Asked Questions</p>
                </div>


                <div className="faq-list">
                    <ul>
                        {
                            faqs.map((faq, ind) => (
                                <li data-aos="fade-up" key={ind} >
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">{faq.question}<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-1" className="collapse" data-bs-parent=".faq-list">
                                        <p>{faq.answer}</p>
                                    </div>
                                </li>

                            ))
                        }
                    </ul>
                </div>

            </div>
        </section >
    )
}
