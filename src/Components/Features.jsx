import StoreLineIcon from "remixicon-react/StoreLineIcon";
import BarChartBoxLineIcon from "remixicon-react/BarChartBoxLineIcon";
import CalendarTodoLineIcon from "remixicon-react/CalendarTodoLineIcon";
import ContactsLineIcon from "remixicon-react/ContactsLineIcon";
import BuildingLineIcon from "remixicon-react/BuildingLineIcon";
import MicLineIcon from "remixicon-react/MicLineIcon";
import FileList3LineIcon from "remixicon-react/FileList3LineIcon";
import MenuLineIcon from "remixicon-react/MenuLineIcon";

export default function Features() {
    return (
        <section id="features" className="features">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Features</h2>
                    <p>Check The Features</p>
                </div>

                <div className="row" data-aos="fade-left">
                    <div className="col-lg-3 col-md-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <div className="icon">
                                <StoreLineIcon style={{ color: "#ffbb2c" }} />
                            </div>
                            <h3><a href="">Buy and sell</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon">
                                <BarChartBoxLineIcon style={{ color: "#5578ff" }} />
                            </div>
                            <h3><a href="">Results</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
                            <div className="icon">
                                <CalendarTodoLineIcon style={{ color: "#e80368" }} />
                            </div>
                            <h3><a href="">Slot booking</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon">
                                <ContactsLineIcon style={{ color: "#e361ff" }} />
                            </div>
                            <h3><a href="">Contacts</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="250">
                            <div className="icon">
                                <BuildingLineIcon style={{ color: "#47aeff" }} />
                            </div>
                            <h3><a href="">Halls</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon">
                                <MicLineIcon style={{ color: "#ffa76e" }} />
                            </div>
                            <h3><a href="">Announcements</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="350">
                            <div className="icon">
                                <FileList3LineIcon style={{ color: "#11dbcf" }} />
                            </div>
                            <h3><a href="">Events</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4">
                        <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon">
                                <MenuLineIcon style={{ color: "#4233ff" }} />
                            </div>
                            <h3><a href="">Mess menu</a></h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
