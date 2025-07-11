import {
  Layout,
  Menu,
  Card,
  Descriptions,
  Table,
  Avatar,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  CarOutlined,
  PlusOutlined,
  EditOutlined,
  EyeOutlined
} from "@ant-design/icons";
import { IPropsScreen } from "../Domain/IPropsScreen";
import { InputInternComponent } from "../../../shared/Components/Input/InputIntern";
import { AdapterGenerico } from "../../../shared/Infraestructure/AdapterGenerico";
import { Link } from "react-router-dom";

const { Sider, Content } = Layout;

export const View = (props: IPropsScreen) => {

  return (
    <Layout
      style={{
        background: "transparent",
        maxWidth: 1200,
        margin: "40px auto",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}
    >
      {/* Lateral */}
      <Sider
        width={230}
        style={{
          background: "#ffffff",
          borderRight: "1px solid #f0f0f0",
        }}
      >
        <div
          style={{
            padding: "24px",
            textAlign: "center",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Avatar
            size={64}
            style={{ backgroundColor: "#00447b" }}
            icon={<UserOutlined />}
          />
          <div style={{ marginTop: "8px", fontWeight: "bold", color: "#888"  }}>{props.user.first_name} {props.user.last_name}</div>
          <div style={{ fontSize: "12px", color: "#888" }}>Miembro desde {new Date(props.user.date_joined).getUTCFullYear()}</div>
          <div style={{ marginTop: 10 }}> <button style={{ background: "#27598a" }} onClick={props.onLogout}>Cerrar sesión</button> </div>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[props.selectedTab]}
          onClick={(e) => props.onChangeSelectTab(e.key)}
          style={{ borderRight: 0, paddingTop: "12px" }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            Información General
          </Menu.Item>
          <Menu.Item key="2" icon={<MailOutlined />}>
            Datos de Contacto
          </Menu.Item>
          <Menu.Item key="3" icon={<LockOutlined />}>
            Cambiar Contraseña
          </Menu.Item>
          <Menu.Item key="4" icon={<CarOutlined />}>
            Vehículos Predichos
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Contenido */}
      <Content style={{ padding: 24, background: "#f9f9f9", minHeight: 600 }}>
        {props.selectedTab === "1" && (
          <Card
            title="Información General"
            bordered={false}
            style={{ borderRadius: 8 }}
          >
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Usuario">{props.user.username}</Descriptions.Item>
              <Descriptions.Item label="Correo">{props.user.email}</Descriptions.Item>
              <Descriptions.Item label="Nombre">{props.user.first_name}</Descriptions.Item>
              <Descriptions.Item label="Apellido">{props.user.last_name}</Descriptions.Item>
              <Descriptions.Item label="Teléfono">+51 {props.user.phone}</Descriptions.Item>
            </Descriptions>
          </Card>
        )}

        {props.selectedTab === "2" && (
          <Card
            title="Actualizar Datos de Contacto"
            bordered={false}
            style={{ borderRadius: 8 }}
          >
            <form onSubmit={props.formContact.handleSubmit}>

              <InputInternComponent
                form={props.formContact}
                label='Nombres'
                name='nombres'
                icon='fa-solid fa-user'
              />

              <InputInternComponent
                form={props.formContact}
                label='Apellidos'
                name='apellidos'
                icon='fa-solid fa-user'
              />

              <InputInternComponent
                form={props.formContact}
                label='Correo Electrónico'
                name='correo'
                icon='fa-solid fa-envelope'
              />

              <InputInternComponent
                form={props.formContact}
                label='Teléfono'
                name='phone'
                icon='fa-solid fa-phone'
              />

              <button type="submit" disabled={props.formContact.isSubmitting} className="login-button">
                Guardar Cambios
              </button>
            </form>
          </Card>
        )}

        {props.selectedTab === "3" && (
          <Card
            title="Cambiar Contraseña"
            bordered={false}
            style={{ borderRadius: 8 }}
          >
            <form onSubmit={props.formChangePassword.handleSubmit}>
              <InputInternComponent
                form={props.formChangePassword}
                label='Contraseña Actual'
                name='currentPassword'
                type='password'
                icon='fa-solid fa-key'
              />

              <InputInternComponent
                form={props.formChangePassword}
                label='Nueva Contraseña'
                name='newPassword'
                type='password'
                icon='fa-solid fa-key'
              />

              <InputInternComponent
                form={props.formChangePassword}
                label='Confirmar Nueva Contraseña'
                name='confirmNewPassword'
                type='password'
                icon='fa-solid fa-key'
              />

              <button type="submit" disabled={props.formChangePassword.isSubmitting} className="login-button">
                Cambiar contraseña
              </button>
            </form>
          </Card>
        )}

        {props.selectedTab === "4" && (
          <Card
            title="Vehículos Predichos"
            bordered={false}
            style={{ borderRadius: 8 }}
          >
            <Table
              columns={[
                { title: "Marca", dataIndex: "brand", render: (value, data) => <Link className="ButtonTableUnderline" to={`/form-detail/${data.id}`} target="_blank">{value}</Link> },
                { title: "Modelo", dataIndex: "model" },
                { title: "Año", dataIndex: "year_of_manufacture" },
                { title: "Precio Estimado", dataIndex: "valued_amount", render: (value) => <>{AdapterGenerico.formatCurrentMoney(value)}</> },
                { title: "Fecha Predicción", dataIndex: "created_at", render: (value) => <>{AdapterGenerico.formatDate(value, "DD de MM del YYYY")}</> },
                { title: 'Publicar', dataIndex: 'idPublish', render: (value, record) =>
                  value ?
                  <div style={{ display: 'flex', flexDirection: 'row', gap: 14 }}>
                    <button onClick={() => props.openModalPublish(record)} className="button-system"> <EditOutlined /> Editar</button>
                    <div className="button-system">
                      <Link to={`/blog/${record.id}`}> <EyeOutlined /> Ver </Link>
                    </div>
                  </div>
                  :
                  <button onClick={() => props.openModalPublish(record)} className="button-system"> <PlusOutlined /> Publicar</button>
                }
              ]}
              dataSource={props.dataTableVehicles}
              size="small"
              pagination={{ pageSize: 10 }}
              bordered
            />
          </Card>
        )}
      </Content>
    </Layout>
  );
};
