import { useState } from 'react'
import macroBackground from '../assets/images/macro.png'
import '../assets/styles/main.css'
import '../assets/styles/responsive.css'
import { Link } from 'react-router-dom';
import { Card, Row, Col, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

const topics = [
  {
    title: "Macro",
    image: macroBackground,
    link: "/macro",
  },
  {
    title: "Fundamental",
    image: "https://source.unsplash.com/1600x900/?finance",
    link: "/fundamental",
  },
  {
    title: "Technical",
    image: "https://source.unsplash.com/1600x900/?stock",
    link: "/technical",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 0, padding: 0 }}>
      {topics.map((item) => (
        <div
          key={item.title}
          onClick={() => navigate(item.link)}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <h1
            style={{
              // backgroundColor: "rgba(0,0,0,0.5)",
              color: "#fff",
              padding: "1rem 2rem",
              borderRadius: "8px",
              fontSize: "2.5rem",
              textAlign: "center",
            }}
          >
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
}