import { useEffect, useState } from "react";
import { Card, Tag, Avatar, Spin, Button, Divider, Typography, Row, Col } from "antd";
import { ArrowLeftOutlined, CalendarOutlined, UserOutlined, CarOutlined } from "@ant-design/icons";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./style.scss";
import { AdapterService } from "../../../shared/Infraestructure/AdapterService";
import { EntityBlogDetail } from "../../../shared/Domain/Catalog/EntityBlogDetail";

const { Title, Paragraph } = Typography;

export const View = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<EntityBlogDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const service = new AdapterService();
      const res = await service.exec<EntityBlogDetail>("GET", `/blog/detail/${id}/`);
      setData(res);
    } catch (err) {
      console.error("Error al obtener el blog:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <Spin size="large" style={{ display: "block", margin: "80px auto" }} />;

  if (!data) return <p style={{ textAlign: "center" }}>No se encontró la publicación.</p>;

  return (
    <div className="blog-detail-container">
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        style={{ marginBottom: 20 }}
      >
        Volver
      </Button>

      <Card
        className="blog-detail-card"
        cover={
          data.cover_image ? (
            <img alt={data.title} src={`${import.meta.env.VITE_FILE_URL}${data.cover_image}`} />
          ) : (
            <div className="no-image">Sin imagen</div>
          )
        }
      >
        <Title level={2}>{data.title}</Title>
        <Paragraph type="secondary">{data.excerpt}</Paragraph>

        <div className="meta-info">
          <Avatar icon={<UserOutlined />} style={{ backgroundColor: "#00447b" }} />
          <span className="author-name">
            {data.author.first_name} {data.author.last_name}
          </span>
          <span className="date">
            <CalendarOutlined /> {new Date(data.created_at).toLocaleDateString()}
          </span>
          {data.category && (
            <Tag color="volcano" className="category-tag">{data.category.name}</Tag>
          )}
        </div>

        <Divider />

        <div className="content" dangerouslySetInnerHTML={{ __html: data.content }}/>

        <Divider />

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <div className="tags">
              {data.tags.map(tag => (
                <Tag key={tag.id} color="geekblue">
                  {tag.name}
                </Tag>
              ))}
            </div>
          </Col>
          {data.prediction && (
            <Col xs={24} md={12}>
              <div className="prediction-summary">
                <h4><CarOutlined /> Resumen del vehículo</h4>
                <p><b>Marca:</b> {data.prediction.brand_info.name}</p>
                <p><b>Modelo:</b> {data.prediction.model_info.name}</p>
                <p><b>Año:</b> {data.prediction.year_of_manufacture}</p>
                <p><b>Precio estimado:</b> ${data.prediction.valued_amount.toLocaleString()}</p>
                <Link
                  to={`/form-detail/${data.prediction.id}`}
                  target="_blank"
                  style={{ paddingLeft: 0 }}
                >
                  Ver detalle completo
                </Link>
              </div>
            </Col>
          )}
        </Row>
      </Card>
    </div>
  );
};
