import { Link } from 'react-router-dom';
import './style.scss';

interface IBreadcrumbProps {
    items: { label: string; link?: string }[];
}

export const BreadcrumbComponent = ({ items }: IBreadcrumbProps) => {
    return (
        <nav className="BreadcrumbComponent" aria-label="breadcrumb">
            <ul className="breadcrumb-list">
                {items.map((item, index) => (
                    <li key={index} className={`breadcrumb-item ${!item.link ? 'active' : ''}`}>
                        {item.link ? (
                            <Link to={item.link} className="breadcrumb-link">
                                {item.label}
                            </Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
