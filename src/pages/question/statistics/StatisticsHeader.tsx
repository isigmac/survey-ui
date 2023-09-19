import { FC, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

//ui
import styles from "./StatisticsHeader.module.scss";
import { Button, Input, InputRef, Popover, Space, Tooltip, Typography, message } from "antd";
import { CopyOutlined, LeftOutlined, QrcodeOutlined } from "@ant-design/icons";
import useGetPageInfo from "../../../hooks/useGetPageInfo";

import QRCode from "qrcode.react";

const { Title } = Typography;

const StatisticsHeader: FC = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const { title, isPublished } = useGetPageInfo();

  //copy url
  const urlInputRef = useRef<InputRef>(null);
  function copyLink() {
    const urlInput = urlInputRef.current;
    if (urlInput === null) return;

    urlInput.select();
    document.execCommand("copy");
    message.success("Text copied to clipboard");
  }

  //
  const QRCodeElement = (
    <div style={{ textAlign: "center" }}>
      <QRCode value="url" size={250} />
    </div>
  );

  function getLinkAndORCodeElement() {
    if (!isPublished) return null;

    const url = `http://localhost:5174/survey/${id}`;

    return (
      <Space>
        <Input value={url} style={{ width: "300px" }} ref={urlInputRef}></Input>
        <Tooltip title="Copy link">
          <Button icon={<CopyOutlined />} onClick={copyLink}></Button>
        </Tooltip>
        <Popover content={QRCodeElement}>
          <Button icon={<QrcodeOutlined />}></Button>
        </Popover>
      </Space>
    );
  }

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
              Return
            </Button>
            <Title>{title}</Title>
          </Space>
        </div>
        <div className={styles.main}>{getLinkAndORCodeElement()}</div>
        <div className={styles.right}>
          <Button type="primary" onClick={() => nav(`/question/edit/${id}`)}>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatisticsHeader;
