import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, Building2, Ruler, IndianRupee } from 'lucide-react';
import '../styles/projectcard.css';

const ProjectCard = ({ title, location, type, image, status, price, area, id }) => {
    return (
        <div className="project-card-premium" data-aos="fade-up">
            <div className="card-media">
                <img src={image} alt={title} className="media-img" loading="lazy" />
                <div className="media-overlay">
                    <span className={`badge status-${status.toLowerCase()}`}>{status}</span>
                </div>
            </div>

            <div className="card-body">
                <div className="card-top">
                    <span className="proj-type">{type}</span>
                    <div className="proj-loc">
                        <MapPin size={12} />
                        <span>{location}</span>
                    </div>
                </div>

                <h3 className="proj-title">{title}</h3>

                <div className="proj-meta">
                    <div className="meta-item">
                        <Ruler size={14} />
                        <span>{area || 'N/A'}</span>
                    </div>
                    <div className="meta-item">
                        <Building2 size={14} />
                        <span>Modern Elite</span>
                    </div>
                </div>

                <div className="card-bottom">
                    <div className="proj-pricing">
                        <span className="price-label">Starts from</span>
                        <div className="price-val">
                            <IndianRupee size={14} />
                            <span>{price || 'Price on Request'}</span>
                        </div>
                    </div>
                    <Link to={`/project/${id}`} className="proj-btn">
                        <ChevronRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
