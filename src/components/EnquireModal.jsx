import React, { useState } from 'react';
import { X, Send, User, Phone, Mail, MessageSquare, Building, Users } from 'lucide-react';
import '../styles/enquire-modal.css';

const EnquireModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Auto close after success
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: '', phone: '', email: '', message: '' });
                onClose();
            }, 3000);
        }, 1500);
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className={`modal-container ${isOpen ? 'modal-open' : ''}`} onClick={e => e.stopPropagation()}>

                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className="modal-content-wrapper">
                    {/* Left Pane - Brand Info */}
                    <div className="modal-side-pane">
                        <div className="side-pane-overlay"></div>
                        <div className="side-pane-content">
                            <div className="side-logo-mini">
                                <img src="/logo.png" alt="GreenCo Estate" />
                            </div>
                            <h3>Exclusive <span>Consultation</span></h3>
                            <p>Connecting you to premium real estate opportunities in Hyderabad's most sought-after locations.</p>

                            <ul className="side-benefits">
                                <li>
                                    <div className="benefit-icon"><Building size={16} /></div>
                                    <span>Premium DTCP Layouts</span>
                                </li>
                                <li>
                                    <div className="benefit-icon"><Phone size={16} /></div>
                                    <span>Instant Expert Callback</span>
                                </li>
                                <li>
                                    <div className="benefit-icon"><Users size={16} /></div>
                                    <span>Top Rated Developer</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Pane - Form */}
                    <div className="modal-form-pane">
                        <div className="modal-header">
                            <h2>Get in <span>Touch</span></h2>
                            <p>Fill out the form below and we'll reach out to you within 24 hours.</p>
                        </div>

                        {isSuccess ? (
                            <div className="modal-success-anim">
                                <div className="success-icon-wrapper">
                                    <Send size={40} className="success-icon" />
                                </div>
                                <h3>Thank You!</h3>
                                <p>We've received your request and will contact you shortly.</p>
                            </div>
                        ) : (
                            <form className="modal-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div className="input-icon-wrapper">
                                        <User size={18} className="input-icon" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name *"
                                        className="modal-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <div className="input-icon-wrapper">
                                        <Phone size={18} className="input-icon" />
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Mobile Number *"
                                        className="modal-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <div className="input-icon-wrapper">
                                        <Mail size={18} className="input-icon" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="modal-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <div className="input-icon-wrapper">
                                        <MessageSquare size={18} className="input-icon textarea-icon" />
                                    </div>
                                    <textarea
                                        name="message"
                                        placeholder="I'm interested in..."
                                        className="modal-input modal-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="2"
                                    ></textarea>
                                </div>

                                <button type="submit" className={`modal-submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                                    <span>{isSubmitting ? 'Sending...' : 'Request Callback'}</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnquireModal;
