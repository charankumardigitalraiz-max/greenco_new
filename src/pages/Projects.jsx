import React, { useState } from 'react';
import { Filter, Search, MapPin, Home, ArrowRight, CheckCircle, Star, Award, Users, TrendingUp } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import '../styles/projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const projects = [
        {
            id: 'greenco-glow',
            title: 'GreenCo Glow',
            location: 'Pothireddipally, Hyderabad',
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
            status: 'Upcoming',
            area: 'Luxury Living'
        },
        {
            id: 'greenco-capetown',
            title: 'GreenCo Capetown',
            location: 'Kandi, Hyderabad',
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1545243424-0ce743321e11?auto=format&fit=crop&q=80&w=800',
            status: 'Ongoing',
            area: 'Premium Residences'
        },
        {
            id: 'greenco-skyview',
            title: 'GreenCo Sky View',
            location: 'Kandi, Hyderabad',
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
            status: 'Upcoming',
            area: 'Luxury Suites'
        },
        {
            id: 'greenco-grace',
            title: 'GreenCo Grace',
            location: 'Tolichowki, Hyderabad',
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800',
            status: 'Upcoming',
            area: 'Luxury Living'
        },
        {
            id: 'greenco-abode',
            title: 'GreenCo Abode',
            location: 'Malkapur, Hyderabad',
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
            status: 'Ongoing',
            area: 'Premium Living'
        },
        {
            id: 'greenco-bliss',
            title: 'GreenCo Bliss',
            location: 'Malkapur, Hyderabad',
            type: 'Apartment',
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
            status: 'Completed',
            area: 'Modern Living'
        },
        // Layouts
        {
            id: 'greenco-habitat-layout',
            title: 'GreenCo Habitat',
            location: 'Malkapur, Hyderabad',
            type: 'Land Layout',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
            status: 'Completed',
            area: 'Gated Community'
        },
        {
            id: 'greenco-serene',
            title: 'GreenCo Serene',
            location: 'Kohir, Hyderabad',
            type: 'Land Layout',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
            status: 'Completed',
            area: 'Premium Plots'
        },
        {
            id: 'greenco-meadows',
            title: 'GreenCo Meadows',
            location: 'Bachepally, Shankrampet',
            type: 'Land Layout',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
            status: 'Completed',
            area: 'Gated Community'
        },
        {
            id: 'greenco-ecovalley',
            title: 'GreenCo Eco Valley',
            location: 'Sadasivapet, Hyderabad',
            type: 'Land Layout',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
            status: 'Completed',
            area: 'Sustainable Living'
        },
        {
            id: 'greenco-tadlapally',
            title: 'Tadlapally Village Layout',
            location: 'Hyderabad',
            type: 'Land Layout',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
            status: 'Completed',
            area: 'Residential Plots'
        },
        // Commercial
        {
            id: 'motimahal',
            title: 'Motimahal Complex',
            location: 'Market Road, Hyderabad',
            type: 'Commercial',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
            status: 'Completed',
            area: 'Premium Retail'
        },
        // Interiors
        {
            id: 'pink-pearl',
            title: 'Pink Pearl Boutique',
            location: 'Hyderabad',
            type: 'Interior',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
            status: 'Completed',
            area: 'Designer Interiors'
        },
        {
            id: 'al-zabihah',
            title: 'Al-Zabihah Meat Mart',
            location: 'Tolichowki, Hyderabad',
            type: 'Interior',
            image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
            status: 'Completed',
            area: 'Premium Commercial'
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'apartment', label: 'Apartments', count: projects.filter(p => p.type === 'Apartment').length },
        { id: 'land', label: 'Land Layouts', count: projects.filter(p => p.type === 'Land Layout').length },
        { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.type === 'Commercial').length },
        { id: 'interior', label: 'Interiors', count: projects.filter(p => p.type === 'Interior').length }
    ];

    const investPoints = [
        {
            icon: <CheckCircle size={32} />,
            title: 'Prime Location',
            desc: 'Strategically located in Hyderabad with excellent connectivity and infrastructure.'
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'High ROI',
            desc: 'Consistent appreciation in property values with strong rental yields.'
        },
        {
            icon: <Award size={32} />,
            title: 'Quality Construction',
            desc: 'Premium materials and modern construction techniques ensuring longevity.'
        },
        {
            icon: <Users size={32} />,
            title: 'Trusted Developer',
            desc: '6+ years of experience with 500+ satisfied families and 98% client satisfaction.'
        },
        {
            icon: <Home size={32} />,
            title: 'Modern Amenities',
            desc: 'State-of-the-art facilities including parks, gyms, and community spaces.'
        },
        {
            icon: <Star size={32} />,
            title: 'After Sales Support',
            desc: 'Comprehensive maintenance and support services post possession.'
        }
    ];

    const filtered = projects.filter(project => {
        const matchesFilter = activeFilter === 'all' ||
            (activeFilter === 'apartment' && project.type === 'Apartment') ||
            (activeFilter === 'land' && project.type === 'Land Layout') ||
            (activeFilter === 'commercial' && project.type === 'Commercial') ||
            (activeFilter === 'interior' && project.type === 'Interior');

        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.location.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    return (
        <main className="projects-page">
            {/* Hero Section */}
            <section className="projects-hero" style={{ backgroundImage: 'url("/images/projects/projects.jpg")' }}>
                <div className="hero-overlay" />
                <div className="container">
                    <div className="hero-inner" data-aos="fade-up">
                        <span className="hero-tag">Our Portfolio</span>
                        <h1 className="hero-title">
                            Crafting Dreams into <span>Reality</span>
                        </h1>
                        <p className="hero-desc">
                            Discover our portfolio of premium residential and commercial projects
                            designed to exceed expectations and create lasting value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            {/* <div className="hero-stats">
                    <div className="container">
                        <div className="hero-stats-inner">
                            <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="0">
                                <div className="hero-stat-number">2018</div>
                                <div className="hero-stat-label">Established Year</div>
                            </div>
                            <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="100">
                                <div className="hero-stat-number">500+</div>
                                <div className="hero-stat-label">Happy Families</div>
                            </div>
                            <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="200">
                                <div className="hero-stat-number">120+</div>
                                <div className="hero-stat-label">Acres Developed</div>
                            </div>
                            <div className="hero-stat-item" data-aos="fade-up" data-aos-delay="300">
                                <div className="hero-stat-number">6+</div>
                                <div className="hero-stat-label">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* Projects Section */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Explore Our Portfolio</span>
                        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
                        <div className="section-divider"></div>
                    </div>

                    {/* Search and Filters */}
                    <div className="projects-controls-wrapper" data-aos="fade-up">
                        <div className="search-bar-container">
                            <div className="search-box">
                                <Search size={20} />
                                <input
                                    type="text"
                                    placeholder="Search projects by name or location..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="filter-tabs-container">
                            <div className="filter-tabs">
                                {filters.map((filter) => (
                                    <button
                                        key={filter.id}
                                        className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                                        onClick={() => setActiveFilter(filter.id)}
                                    >
                                        <span>{filter.label}</span>
                                        <span className="filter-count">{filter.count}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="projects-grid">
                        {filtered.map((project, i) => (
                            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="no-results" data-aos="fade-up">
                            <div className="no-results-icon">🏗️</div>
                            <h3>No projects found</h3>
                            <p>Try adjusting your search or filter criteria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Investment Benefits */}
            <section className="invest-section">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-tag">Why Choose Us</span>
                        <h2 className="section-title">Investment <span className="highlight">Benefits</span></h2>
                        <div className="section-divider"></div>
                        <p className="section-desc">
                            Discover why thousands of families trust us with their investment decisions
                        </p>
                    </div>

                    <div className="invest-grid">
                        {investPoints.map((item, i) => (
                            <div key={i} className="invest-card" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="invest-card-inner">
                                    <div className="invest-number">0{i + 1}</div>
                                    <div className="invest-icon-box">
                                        {item.icon}
                                    </div>
                                    <h3 className="invest-title">{item.title}</h3>
                                    <p className="invest-desc">{item.desc}</p>
                                </div>
                                <div className="invest-accent-line"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="projects-cta-section">
                <div className="wide-banner-overlay" />
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <span className="section-tag" style={{ color: 'var(--secondary)' }}>Investment Hub</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Ready to Invest in Your <span className="highlight">Future?</span></h2>
                        <p>
                            Join hundreds of satisfied families who have made the smart choice.
                            Let's discuss your investment options today.
                        </p>
                        <div className="cta-buttons">
                            <a href="/contact" className="btn btn-primary">
                                Schedule Site Visit <ArrowRight size={18} />
                            </a>
                            <a href="tel:+919322222821" className="btn btn-outline-white">
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Projects;
