import { useState } from "react";
import { Card, Tag, Select, Row, Col, Spin, Button, Empty, Tooltip } from "antd";
import { EyeOutlined, CalendarOutlined } from "@ant-design/icons";
import "./style.scss";
import { IPropsScreen } from "../Domain/IPropsScreen";

const { Option } = Select;

export const View = (props: IPropsScreen) => {
  const [loading, setLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<number | undefined>();
  const [tagFilter, setTagFilter] = useState<number[] | undefined>();

  const onSubmitFilter = async () => {
    console.log(categoryFilter, tagFilter);
    setLoading(true)
    props.onSubmitfilter({ category: categoryFilter, tags: tagFilter });
    setLoading(false)
  }

  return (
    <div className="blog-list-container">
      <div className="filters">
        <Select
          allowClear
          placeholder="Filtrar por categoría"
          style={{ width: 200, marginRight: 10 }}
          onChange={(value) => setCategoryFilter(value)}
        >
          {props.dataList.category.map((c) => (
            <Option key={c.id} value={c.id}>{c.name}</Option>
          ))}
        </Select>
        <Select
          mode="multiple"
          allowClear
          placeholder="Filtrar por etiqueta"
          style={{ width: 200, marginRight: 10 }}
          onChange={(value) => setTagFilter(value)}
        >
          {props.dataList.tag.map((t) => (
            <Option key={t.id} value={t.id}>{t.name}</Option>
          ))}
        </Select>
        <Button type="primary" onClick={onSubmitFilter}>
          Aplicar filtros
        </Button>
      </div>

      {loading ? (
        <Spin size="large" style={{ marginTop: 50 }} />
      ) : props.dataList.result.length === 0 ? (
        <Empty description="No se encontraron publicaciones" />
      ) : (
        <Row gutter={[24, 24]}>
          {props.dataList.result.map((blog) => (
            <Col xs={24} sm={12} md={8} lg={6} key={blog.id}>
              <Card
                hoverable
                className="blog-card"
                cover={
                  blog.cover_image ? (
                    <img alt={blog.title} src={blog.cover_image} />
                  ) : (
                    <div className="no-image">Sin imagen</div>
                  )
                }
              >
                <div className="card-content">
                  <h3 className="title">{blog.title}</h3>
                  <p className="excerpt">{blog.excerpt}</p>
                  <div className="tags">
                    {blog.tags.map((tag) => (
                      <Tag key={tag.id} color="processing">
                        {tag.name}
                      </Tag>
                    ))}
                  </div>
                  <div className="metadata">
                    <Tooltip title="Vistas">
                      <EyeOutlined /> {blog.views_count || 0}
                    </Tooltip>
                    <Tooltip title="Fecha de publicación">
                      <CalendarOutlined /> {new Date(blog.created_at).toLocaleDateString()}
                    </Tooltip>
                  </div>
                  <Button
                    type="primary"
                    block
                    href={`/blog/${blog.id}`}
                  >
                    Ver detalle
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
