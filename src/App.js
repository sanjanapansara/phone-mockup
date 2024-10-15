import React, { useState } from "react";
import "./App.css";
import {
  Input,
  List,
  Avatar,
  Layout,
  Row,
  Col,
  Typography,
  ConfigProvider,
  Card,
  Image,
  Flex,
  Space,
} from "antd";
import {
  PaperClipOutlined,
  LeftOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import notch from "../src/image/notch.svg";
import line from "../src/image/line.svg";
import wifi from "../src/image/wifi.svg";
import battry from "../src/image/battry.SVG";
import time from "../src/image/time.svg";
import nothch2 from "../src/image/notch2.svg";
import video from "../src/image/video.svg";
import audio from "../src/image/audio.svg";
import msg from "../src/image/msg.svg";
import camera from "../src/image/camera.svg";
import call from "../src/image/call.svg";
import zxc from "../src/image/switch.svg";
import abc from"../src/image/volume.svg";

const { Header, Footer, Content } = Layout;
const { TextArea } = Input;

function App() {
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "Hallo, hallo",
      time: "12:54",
      type: "text",
    },
    {
      id: 2,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 3,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 4,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 5,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 6,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 7,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 8,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 9,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 10,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 11,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 12,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
    {
      id: 13,
      sender: "André Westphal",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "File: OF55...png (19.8 MB)",
      time: "13:44",
      type: "file",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#ffffffe0",
            footerBg: "rgb(255,255,255)",
            headerHeight: 70,
            headerPadding: 3,
          },
          Card: {
            colorBorderSecondary: "rgb(25,24,24)",
            borderRadiusLG: 40,
            colorBgContainer: "rgba(255,255,255,0)",
          },
        },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f0f2f5",
        }}
      >
          {/* <Image src={zxc} width={20}/> */}
          <Image src={abc} width={4} style={{position:"absolute",top:-310}}/>

        <Card
          bodyStyle={{ padding: "5px" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}

        >
           <Card
            bodyStyle={{ padding: "1px" }}
            type="inner"
            style={{
              width: 375,
              height: 805,
              display: "flex",
              flexDirection: "column",
              overflow: "scroll",
            }}
          >
            <Layout
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%",
                minHeight:"95vh"
              }}
            >
              {/* Sticky Header */}
              <Header
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
                  backgroundColor: "#FFFFFF",
                }}
              >
                {/* First Row */}
                <Row
                  align="middle"
                  justify="space-between"
                  style={{ width: "100%" }}
                >
                  <Col span={7} align="center">
                    <Image src={time} preview={false} width={30} />
                  </Col>
                  <Col span={10} style={{ textAlign: "center" }}>
                    <Image src={notch} preview={false} width={80} />
                  </Col>
                  <Col span={7}>
                    <Flex align="center" justify="space-evenly">
                      <Image src={line} preview={false} width={20} />
                      <Image src={wifi} preview={false} width={20} />
                      <Image src={battry} preview={false} width={20} />
                      <Image src={""} preview={false} width={10} />
                    </Flex>
                  </Col>
                </Row>
                {/* Second Row */}
                <Row align="middle" style={{ width: "100%" }}>
                  <Col span={2}>
                    <LeftOutlined />
                  </Col>
                  <Col span={3}>
                    <Avatar />
                  </Col>
                  <Col span={14}>
                    <Typography.Text style={{ fontWeight: "bold" }}>
                      André Westphal
                    </Typography.Text>
                  </Col>
                  <Col span={4} style={{ textAlign: "right" }}>
                    <Flex align="end" justify="space-evenly" gap={10}>
                      <Image src={video} preview={false} width={20} />
                      <Image src={audio} preview={false} width={20} />
                    </Flex>
                  </Col>
                </Row>
              </Header>
              {/* Scrollable Content */}
              <Content
                style={{
                  flexGrow: 1,
                  padding: "20px",
                  overflowY: "auto",
                }}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={messages}
                  renderItem={(message) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={message.avatar} />}
                        title={
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span>{message.sender}</span>
                            <span style={{ fontSize: "12px", color: "#999" }}>
                              {message.time}
                            </span>
                          </div>
                        }
                        description={
                          message.type === "text" ? (
                            <Typography.Text>{message.content}</Typography.Text>
                          ) : (
                            <Typography.Text>
                              <PaperClipOutlined
                                style={{ marginRight: "8px" }}
                              />
                              {message.content}
                            </Typography.Text>
                          )
                        }
                      />
                    </List.Item>
                  )}
                />
              </Content>
              {/* Footer */}
              <Footer
                style={{
                  bottom: 0,
                  position: "sticky",
                  padding: "10px 10px 0px 10px",
                }}
              >
                <Space
                  direction="vertical"
                  size="small"
                  style={{
                    width: "100%",
                  }}
                >
                  <Row align="middle">
                    <Col span={2}>
                      <PlusOutlined />
                    </Col>
                    <Col span={17}>
                      <TextArea
                        rows={1}
                        placeholder="Message"
                        style={{
                          borderRadius: "20px",
                          width: "100%",
                        }}
                        value={message}
                        disabled
                      />
                      <div
                        style={{
                          position: "absolute",
                          right: "20px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          display: "flex",
                          gap: "1px",
                        }}
                      >
                        <Image
                          src={msg}
                          preview={false}
                          width={20}
                          style={{ marginLeft: "10px" }}
                        />
                      </div>
                    </Col>
                    <Col span={5}>
                      <Flex align="end" justify="space-evenly">
                        <Image src={camera} preview={false} width={21} />
                        <Image src={call} preview={false} width={15} />
                      </Flex>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={3}></Col>
                    <Col span={18} style={{ textAlign: "center" }}>
                      <Image src={nothch2} width={80} preview={false} />
                    </Col>
                    <Col span={3}></Col>
                  </Row>
                </Space>
              </Footer>
            </Layout>
          </Card>

        </Card>
          <Image src={zxc} width={4} style={{position:"absolute",top:-180}}/>

      </div>
    </ConfigProvider>
  );
}
export default App;
