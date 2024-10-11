import React from "react";
import InformationCard from "./InformationCard";
import {faUserShield, faCalendarCheck,faStethoscope} from "@fortawesome/free-solid-svg-icons";
import "./Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
        icon={faUserShield}
        />

        <InformationCard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
        icon={faCalendarCheck}
              />

              
        <InformationCard
          title="Dental Care"
                  description="Search and book an appointment with a doctor in a clinic,
           hospital, home visit, or over the phone. You can also order medications, or book a service or operation at the best price."
        icon={faStethoscope}
        />
      </div>
    </div>
  );
}

export default Info;
