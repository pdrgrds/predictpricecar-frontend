import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Select, Switch, Upload, Button, DatePicker, Steps, message } from "antd";
import { UploadOutlined, FileTextOutlined } from "@ant-design/icons";
import { RcFile } from "antd/es/upload";
import { useForm } from "antd/es/form/Form";
import { IPropsScreen } from "../../Domain/IPropsScreen";
import { IServiceBlogRequest } from "../../Domain/Service/IServiceBlog";
const { TextArea } = Input;

let payloadFirsStep = {};
export const ModalPublishBlog: React.FC<IPropsScreen> = (props) => {
  const [form] = useForm();
  const [current, setCurrent] = useState(0);
  const [fileList, setFileList] = useState<RcFile[]>([]);

  useEffect(() => {
    if (props.configPublish.form.id) {
      form.setFieldsValue(props.configPublish.form)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setFileList(() => [props.configPublish.form.cover_image as any])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.configPublish.form.id])

  const next = () => {
    form.validateFields(current === 0 ? ["title", "slug", "excerpt", "content"] : undefined).then(() => {
    });
    payloadFirsStep = form.getFieldsValue();
    setCurrent(current + 1);
  };

  const prev = () => setCurrent(current - 1);

  const handleFinish = async (values: IServiceBlogRequest) => {
    const data = { ...payloadFirsStep, ...values };

    const result = await props.onSubmitSaveBlog({
      id: props.configPublish.form?.id || 0,
      title: data.title,
      content: data.content,
      slug: data.slug,
      tags: data.tags,
      category: data.category,
      cover_image: fileList[0],
      excerpt: data.excerpt,
      is_featured: false,
      prediction: props.configPublish.form.prediction,
      published: data.published,
      published_at: data.published_at
    });

    if (!result) return;

    form.resetFields();
    setFileList([]);
    setCurrent(0);
    props.closeModalPublish();
    message.success("Publicación guardada correctamente.");
  };

  const steps = [
    {
      title: "Contenido",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Form.Item
            label="Título"
            name="title"
            rules={[{ required: true, message: "Ingrese un título" }]}
          >
            <Input placeholder="Ej. Predicción de precios de Toyota Yaris" />
          </Form.Item>

          <Form.Item
            label="Slug"
            name="slug"
            rules={[{ required: true, message: "Ingrese un slug único" }]}
          >
            <Input placeholder="Ej. toyota-yaris-2025" />
          </Form.Item>

          <Form.Item
            label="Descripción breve"
            name="excerpt"
            rules={[{ required: true, message: "Ingrese un resumen breve" }]}
          >
            <TextArea rows={2} placeholder="Resumen de la publicación" />
          </Form.Item>

          <Form.Item
            label="Contenido detallado"
            name="content"
            rules={[{ required: true, message: "Ingrese el contenido completo" }]}
          >
            <TextArea rows={4} placeholder="Texto principal" />
          </Form.Item>
        </div>
      )
    },
    {
      title: "Configuración",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Form.Item label="Imagen de portada">
            <Upload.Dragger
              beforeUpload={(file) => {
                setFileList([file]);
                return false;
              }}
              fileList={fileList}
              onRemove={() => setFileList([])}
              listType="picture"
              maxCount={1}
            >
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text">Haga clic o arrastre el archivo</p>
              <p className="ant-upload-hint">Solo una imagen de portada</p>
            </Upload.Dragger>
          </Form.Item>

          <Form.Item
            label="Categoría"
            name="category"
            rules={[{ required: true, message: "Seleccione una categoría" }]}
          >
            <Select placeholder="Seleccione categoría">
              {
                props.configPublish.options.category.map(row => (
                  <Select.Option value={row.id}>{row.name}</Select.Option>
                ))
              }
            </Select>
          </Form.Item>

          <Form.Item label="Etiquetas" name="tags">
            <Select mode="multiple" placeholder="Seleccione etiquetas" allowClear>
              {
                props.configPublish.options.tag.map(row => (
                  <Select.Option value={row.id}>{row.name}</Select.Option>
                ))
              }
            </Select>
          </Form.Item>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Form.Item
              label="Publicado"
              name="published"
              valuePropName="checked"
            >
              <Switch
                checkedChildren="Sí"
                unCheckedChildren="No"
                style={{ backgroundColor: "#00447b" }}
              />
            </Form.Item>

            <Form.Item label="Fecha publicación" name="published_at">
              <DatePicker style={{ width: "100%" }} onChange={(_, datetime) => form.setFieldValue('published_at', datetime)} />
            </Form.Item>
          </div>
        </div>
      )
    }
  ];

  return (
    <Modal
      open={props.configPublish.show}
      title={
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "#00447b"
        }}>
          <FileTextOutlined style={{ fontSize: 22 }} />
          <span style={{ fontSize: 17, fontWeight: 600 }}>
            {props.configPublish.form.id ? 'Editar' : 'Crear'} publicación
          </span>
        </div>
      }
      onCancel={() => {
        form.resetFields();
        setFileList([]);
        setCurrent(0);
        props.closeModalPublish();
      }}
      footer={null}
      width={700}
      centered
      bodyStyle={{ padding: "30px" }}
    >
      <Steps
        current={current}
        size="small"
        style={{ marginBottom: 24 }}
        items={steps.map((s) => ({ title: s.title }))}
      />

      <Form form={form} layout="vertical" onFinish={handleFinish}>
        {steps[current].content}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 24
          }}
        >
          <div>
            {current > 0 && (
              <Button onClick={prev} style={{ marginRight: 8 }}>
                Anterior
              </Button>
            )}
          </div>
          <div>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={next} style={{ background: "#00447b", borderColor: "#00447b" }}>
                Siguiente
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                icon={<FileTextOutlined />}
                style={{ background: "#00447b", borderColor: "#00447b" }}
              >
                Guardar publicación
              </Button>
            )}
          </div>
        </div>
      </Form>
    </Modal>
  );
};
