import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import '../styles/gallery.css';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryItems = [
        { id: 1, category: 'apartments', title: 'GreenCo Capetown — Exterior', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', desc: 'Premium apartment facade in Hyderabad.' },
        { id: 2, category: 'plots', title: 'GreenCo Habitat — Layout', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800', desc: 'Eco-luxe open plots in Hyderabad.' },
        { id: 3, category: 'construction', title: 'Site Progress', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800', desc: 'Construction in progress at GreenCo Sky View.' },
        { id: 4, category: 'interiors', title: 'Modern Interior Concepts', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800', desc: 'Elegant interior layout concepts for premium residences.' },
        { id: 5, category: 'apartments', title: 'GreenCo Sky View', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', desc: 'Luxury residences in Hyderabad.' },
        { id: 6, category: 'plots', title: 'Eco Valley Plots', image: 'https://images.unsplash.com/photo-1582407947304-fd86f28f7c2b?auto=format&fit=crop&q=80&w=800', desc: 'Eco-friendly sustainable plot development.' },
        { id: 7, category: 'interiors', title: 'Luxury Kitchen & Dining', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800', desc: 'Refined kitchen and dining space concepts.' },
        { id: 8, category: 'construction', title: 'Foundation & Structure', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800', desc: 'High-quality structural work ensuring lasting quality.' }
    ];

    const filters = [
        { id: 'all', label: 'All Photos' },
        { id: 'apartments', label: 'Apartments' },
        { id: 'plots', label: 'Open Plots' },
        { id: 'interiors', label: 'Interiors' },
        { id: 'construction', label: 'Construction' }
    ];

    // Pick 5 images for the strip hero
    const heroStrip = galleryItems.slice(0, 5);

    const filteredItems = activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <main className="gallery-page">

            {/* ── UNIQUE HERO: Image Strip ─────────────────── */}
            <section className="gallery-hero-strip">
                {/* 5 images fill the width */}
                <div className="gallery-strip-images">
                    {heroStrip.map((item, i) => (
                        <div key={i} className="gallery-strip-img">
                            <img src={item.image} alt={item.title} />
                        </div>
                    ))}
                    {/* Dark gradient over all */}
                    <div className="gallery-strip-overlay" />
                </div>

                {/* Centered title floating over strips */}
                <div className="gallery-strip-content">
                    <div className="gallery-strip-eyebrow" data-aos="fade-down">Visual Portfolio</div>
                    <h1 className="gallery-strip-title" data-aos="fade-up">
                        Our Journey in <em>Pictures</em>
                    </h1>
                    <p className="gallery-strip-desc" data-aos="fade-up" data-aos-delay="100">
                        {galleryItems.length} photographs across apartments, plots, interiors & construction
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section className="gallery-section">
                <div className="container">
                    <div className="gallery-controls" data-aos="fade-up">
                        <div className="gallery-tabs">
                            {filters.map(filter => (
                                <button
                                    key={filter.id}
                                    className={`gallery-tab ${activeFilter === filter.id ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(filter.id)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="gallery-grid">
                        {filteredItems.map((item, i) => (
                            <div key={item.id} className="gallery-item" data-aos="fade-up" data-aos-delay={i * 80} onClick={() => setSelectedImage(item)}>
                                <img src={item.image} alt={item.title} />
                                <div className="gallery-overlay">
                                    <div className="gallery-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="gallery-view-btn"><Maximize2 size={18} /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
                    <button className="lightbox-close" onClick={() => setSelectedImage(null)}><X size={28} /></button>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage.image} alt={selectedImage.title} />
                        <div className="lightbox-caption">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Gallery;
