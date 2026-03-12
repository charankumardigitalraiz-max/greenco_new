import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Clock, MessageCircle, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { api } from '../../apiService/api';
import '../styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');

        try {
            await api.post('/contact', formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 4000);
        } catch (error) {
            console.error('Contact Form Submit Error:', error);
            setErrorMsg(error.response?.data?.message || 'Something went wrong. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const contactCards = [
        { icon: <Phone size={24} />, title: 'Call Us', content: '+91 97003 58140', subtext: '9AM–7PM IST', link: 'tel:+919700358140' },
        { icon: <Mail size={24} />, title: 'Email Us', content: 'info@greencoestate.in', subtext: 'Response in 24h', link: 'mailto:info@greencoestate.in' },
        { icon: <MapPin size={24} />, title: 'Visit Us', content: '37B, Ameerpet', subtext: 'Hyderabad, Telangana', link: 'https://maps.google.com' }
    ];

    return (
        <main className="contact-page">

            {/* ── UNIQUE HERO: Inverted Light Hero ──────────── */}
            <section className="contact-hero-light">
                <div className="contact-hero-deco-year">GET IN TOUCH</div>

                <div className="container">
                    <div className="contact-hero-grid">
                        {/* Left: Typography */}
                        <div className="contact-hero-text" data-aos="fade-right">
                            <span className="contact-hero-label">Contact GreenCo</span>
                            <h1 className="contact-hero-heading">
                                Let's Start Your<br />
                                <span>New Journey.</span>
                            </h1>
                            <p className="contact-hero-sub">
                                Ready to find your perfect home? Our dedicated team is here to provide professional guidance and transparent insights for your next real estate investment.
                            </p>

                            <div className="contact-hero-pills-mobile">
                                {/* Only visible on mobile in the hero */}
                                {contactCards.slice(0, 2).map((card, i) => (
                                    <a key={i} href={card.link} className="contact-pill-mini">
                                        {card.icon}
                                        <span>{card.content}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right: Floating Contact Cards */}
                        <div className="contact-hero-visual" data-aos="fade-left">
                            <div className="contact-cards-stack">
                                {contactCards.map((card, i) => (
                                    <div key={i} className={`contact-visual-card delay-${i}`} data-aos="fade-left" data-aos-delay={i * 150}>
                                        <div className="contact-visual-icon">{card.icon}</div>
                                        <div className="contact-visual-info">
                                            <strong>{card.title}</strong>
                                            <p>{card.content}</p>
                                            <span>{card.subtext}</span>
                                        </div>
                                        <a href={card.link} className="contact-visual-link">
                                            <ArrowRight size={18} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Interaction Section */}
            <section className="contact-main-interaction">
                <div className="container">
                    <div className="contact-interaction-grid">

                        {/* Left: Narrative & Social */}
                        <div className="contact-narrative" data-aos="fade-right">
                            <div className="narrative-header">
                                <span className="section-tag">Direct Lines</span>
                                <h2 className="section-title">We're built on <span>Accessibility.</span></h2>
                                <p className="narrative-lead">
                                    Whether you're looking for luxury apartments or strategic land layouts in Hyderabad, we're here to help you navigate every detail.
                                </p>
                            </div>

                            <div className="connect-blocks">
                                <div className="connect-block">
                                    <div className="connect-icon"><Clock size={22} /></div>
                                    <div className="connect-info">
                                        <h4>Operational Hours</h4>
                                        <p>Monday — Sunday<br />9:00 AM to 7:00 PM</p>
                                    </div>
                                </div>
                                <div className="connect-block">
                                    <div className="connect-icon"><MessageCircle size={22} /></div>
                                    <div className="connect-info">
                                        <h4>Live Consultation</h4>
                                        <p>Schedule a site visit or virtual tour via WhatsApp.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-social-box">
                                <h3>Follow the Progress</h3>
                                <div className="social-pill-group">
                                    <a href="#" className="social-pill"><Facebook size={18} /> <span>Facebook</span></a>
                                    <a href="#" className="social-pill"><Instagram size={18} /> <span>Instagram</span></a>
                                    <a href="#" className="social-pill"><Linkedin size={18} /> <span>LinkedIn</span></a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Modern Form Card */}
                        <div className="contact-form-card" data-aos="fade-left">
                            <div className="form-card-inner">
                                <div className="form-heading">
                                    <h3>Send Enquiry</h3>
                                    <p>Our specialists will reach out shortly.</p>
                                </div>

                                {isSubmitted && (
                                    <div className="form-success-alert">
                                        <CheckCircle size={20} />
                                        <span>Your message has been received.</span>
                                    </div>
                                )}
                                {errorMsg && (
                                    <div className="form-error-alert" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#dc2626', marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
                                        <AlertCircle size={20} />
                                        <span>{errorMsg}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="premium-form">
                                    <div className="form-group-flat">
                                        <label>Full Name</label>
                                        <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group-grid">
                                        <div className="form-group-flat">
                                            <label>Email</label>
                                            <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="form-group-flat">
                                            <label>Phone</label>
                                            <input type="tel" name="phone" placeholder="+91 99876 54321" value={formData.phone} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="form-group-flat">
                                        <label>Enquiry Type</label>
                                        <select name="subject" value={formData.subject} onChange={handleChange}>
                                            <option value="">Select an option</option>
                                            <option value="enquiry">Project Details</option>
                                            <option value="visit">Book Site Visit</option>
                                            <option value="investment">Partnership</option>
                                        </select>
                                    </div>
                                    <div className="form-group-flat">
                                        <label>Message</label>
                                        <textarea name="message" rows="4" placeholder="How can we assist you today?" value={formData.message} onChange={handleChange} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary form-submit-btn" disabled={isLoading} style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}>
                                        {isLoading ? 'Sending...' : 'Send Message'} {!isLoading && <Send size={16} />}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Full-Width Map Integration */}
            <section className="map-integrated-section">
                <div className="map-wrapper" data-aos="zoom-out">
                    <iframe
                        title="GreenCo Estate Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.447548!2d78.397123!3d17.411624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cea0000001%3A0x0!2zMTfCsDI0JzQxLjkiTiA3OMKwMjMnNDkuNiJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="map-overlay-card" data-aos="fade-up">
                        <MapPin size={24} />
                        <h4>Corporate Office</h4>
                        <p>37B, Ameerpet, Hyderabad</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
