import { useEffect, useState } from 'react';
import { EntityBlogList } from '../../Domain/Catalog/EntityBlogList';
import { AdapterService } from '../../Infraestructure/AdapterService';
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { AdapterGenerico } from '../../Infraestructure/AdapterGenerico';

export const CardBlogComponents = () => {
    const [list, setList] = useState<EntityBlogList[]>([]);
    const navigate = useNavigate();

    const getBlogList = async () => {
        try {
            const service = new AdapterService();
            const response = await service.exec<EntityBlogList[]>('GET', `/blog/list-filtered/`, {}, "NoAuth").catch(() => []);
            setList(response.slice(0, 2))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBlogList();
    }, [])

    return (
        list.map(row =>
            <div className='CardBlogComponents' onClick={() => navigate(`/blog/${row.id}`)}>
                <div className='background-card'>
                    <img src={`${row.cover_image}`} height={300} width={390} />
                    <div className='categoria-blog'>{row.category.name}</div>
                </div>
                <p className='date-blog'>
                    <span>{row.author.first_name} {row.author.last_name}</span> - <span>{AdapterGenerico.formatDate(row.created_at, 'DD de MM del YYYY')}</span>
                </p>
                <p className='description-blog'>
                    {row.excerpt}
                </p>
            </div>
        )
    )
}