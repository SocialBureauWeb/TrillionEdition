import React from 'react';
import '../css/Company.css';

const socials = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/12345678901',
    icon: 'assets/whatsapp.png',
    handle: '+1 234 567 8901',
    contact: {
      name: 'Amit Kumar',
      photo: 'assets/profile.png',
      number: '+1 234 567 8901',
      mail: 'amit.kumar@yourcompany.com',
      title: 'WhatsApp Support'
    }
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/yourinstagramid',
    icon:'assets/instagram.png',
    handle: '@yourinstagramid',
    contact: {
      name: 'Sara Lee',
      photo: 'assets/profile.png',
      id: 'yourinstagramid',
      mail: 'sara.lee@yourcompany.com',
      title: 'Instagram Manager'
    }
  },
  {
    name: 'Mail',
    url: 'mailto:info@yourcompany.com',
    icon: 'assets/mail.png',
    handle: 'info@yourcompany.com',
    contact: {
      name: 'General Enquiries',
      photo: 'assets/profile.png',
      mail: 'info@yourcompany.com',
      title: 'Email Desk'
    }
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/yourfacebookid',
    icon: 'assets/facebook.png',
    handle: '/yourfacebookid',
    contact: {
      name: 'John Smith',
      photo: 'assets/profile.png',
      id: 'yourfacebookid',
      mail: 'john.smith@yourcompany.com',
      title: 'Facebook Manager'
    }
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourlinkedinid',
    icon: 'assets/linkedin.png',
    handle: '/yourlinkedinid',
    contact: {
      name: 'Priya Patel',
      photo: 'assets/profile.png',
      id: 'yourlinkedinid',
      mail: 'priya.patel@yourcompany.com',
      title: 'LinkedIn Specialist'
    }
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourtwitterid',
    icon: 'assets/twitter.png',
    handle: '@yourtwitterid',
    contact: {
      name: 'Jane Doe',
      photo: 'assets/profile.png',
      id: 'yourtwitterid',
      mail: 'jane.doe@yourcompany.com',
      title: 'Twitter Lead'
    }
  }
];

const Company = () => {
  return (
    <section className="container contact-us-section">
      <h2 className="contact-us-heading">Contact Us</h2>
      <div className="contact-cards-wrapper horizontal-scroll">
        {socials.map((social, idx) => (
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass contact-card"
            style={{ '--r': `${-15 + idx * 20}` }}
            key={social.name}
            aria-label={social.name}
          >
            <div className="contact-icon"><img
                  src={social.icon}
                  alt={social.name}
                  className="contact-photo"
                /></div>
            <div className="contact-info">
              <span className="contact-name">{social.name}</span>
              <span className="contact-handle">{social.handle}</span>
            </div>
            {social.contact && (
              <div className="person-in-charge">
                <img
                  src={social.contact.photo}
                  alt={social.contact.name}
                  className="contact-photo"
                />
                <div className="person-details">
                  <span className="person-name">{social.contact.name}</span>
                  <span className="person-title">{social.contact.title}</span>
                  <div className="person-contact-details">
                    {social.name === 'WhatsApp' && (
                      <a href={`https://wa.me/${social.contact.number.replace(/[^0-9]/g, '')}`} className="person-phone">
                        {social.contact.number}
                      </a>
                    )}
                    {social.name === 'Instagram' && (
                      <a href={`https://instagram.com/${social.contact.id}`} className="person-instagram">
                        @{social.contact.id}
                      </a>
                    )}
                    {social.name === 'Facebook' && (
                      <a href={`https://facebook.com/${social.contact.id}`} className="person-facebook">
                        /{social.contact.id}
                      </a>
                    )}
                    {social.name === 'LinkedIn' && (
                      <a href={`https://linkedin.com/in/${social.contact.id}`} className="person-linkedin">
                        /in/{social.contact.id}
                      </a>
                    )}
                    {social.name === 'Twitter' && (
                      <a href={`https://twitter.com/${social.contact.id}`} className="person-twitter">
                        @{social.contact.id}
                      </a>
                    )}
                    {social.contact.mail && (
                      <a href={`mailto:${social.contact.mail}`} className="person-email">
                        {social.contact.mail}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Company;