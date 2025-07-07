import {
    SiPython,
    SiMicrosoftsqlserver,
    SiMicrosoftazure,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50} />,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiMicrosoftsqlserver size={50} />,
            text: "SQL"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: (
                <img
                    src="https://www.r-project.org/logo/Rlogo.png"
                    alt="R"
                    style={{ width: 50, height: 50 }}
                />
            ),
            text: "R"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiMicrosoftazure size={50} />,
            text: "Azure"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <FaGitAlt size={50} />,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <GrMysql size={50} />,
            text: "MySQL"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50} />,
            text: "Bash"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiSnowflake size={50} />,
            text: "Snowflake"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiApacheairflow size={50} />,
            text: "Airflow"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiApachekafka size={50} />,
            text: "Kafka"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiPowerbi size={50} />,
            text: "Power BI"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <span style={{ fontSize: 32 }}>🔥</span>,
            text: "PyTorch"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <span style={{ fontSize: 32 }}>🔗</span>,
            text: "LangChain"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <span style={{ fontSize: 32 }}>💬</span>,
            text: "OpenAI API"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <span style={{ fontSize: 32 }}>📚</span>,
            text: "FAISS"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <span style={{ fontSize: 32 }}>📓</span>,
            text: "Jupyter"
        }
    ]
};

export default skillsConfig;
