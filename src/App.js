
import iconArrowDown from './images/icon-arrow-down.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index) => {
    if (activeItem === index) {
      setActiveItem(null); // Collapse the item if it's already open
    } else {
      setActiveItem(index); // Expand the clicked item
    }
  };

  const accordionData = [
    {
      question: "How many team members can I invite?",
      answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer: "Click 'Forgot password' from the login page or 'Change password' from your profile page. A reset link will be emailed to you.",
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes! Send us a message, and we'll process your request, no questions asked.",
    },
    {
      question: "Do you provide additional support?",
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  return (
    <div className="container">
      <div className="card">
        {/* image background -> desktop */}
        <div className="card_image">
          {/* main images -> desktop and mobile */}
          <div className="card_image_mobile"></div>
          <div className="card_image_desktop">
            {/* box svg  */}
            <div className="card_image_box_svg"></div>
          </div>
        </div>
        <article className="card_info">
          <h1 className="card_info_title">FAQ</h1>

          {accordionData.map((item, index) => (
            <section
              key={index}
              className={`card_info_item ${activeItem === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <h2 className={`card_info_item_title ${activeItem === index ? 'bold' : ''}`}>
                {item.question}
              </h2>
              <img
                src={iconArrowDown}
                alt="icon"
                className={`card_info_item_icon ${activeItem === index ? 'rotate' : ''}`}
              />
              <p className={`card_info_item_para ${activeItem === index ? 'show_info' : ''}`}>
                {item.answer}
              </p>
              <hr className="card_info_divider" />
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
export default App;
