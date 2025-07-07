import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import { TbDiamond, TbReportAnalytics } from "react-icons/tb";
import { SiOpenai } from "react-icons/si";


const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Deepak Dulal</strong>
        </h1>,
    titles: [
        "Your Go - To Data Guy",
        "Machine Learning Specialist",
        "An Open Source Contributor",
    ],
    about: {
        start: 
        
        "I have been working for over 5 years on data-driven projects. " +
            "I’m passionate about continuous learning, sharing knowledge, making an impact through data" +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, and more, " +
            "with a deep interest in solving problems with data."
    },
    workTimeline: [
        {
        id: "work-1",
        title: "Work Experience: Data Analyst",
        company: "Greative Soft Pvt. Ltd.",
        description: "Built ETL pipelines, dashboards, and SQL-based insights for 200K+ customers, improving credit assessments and boosting marketing ROI by 20%.",
        date: "2022-2023",
        icon: <BsClipboardData />,
        tags: ["etl", "sql", "airflow", "pentaho", "bi", "dashboard", "python", "data-cleaning"]
    },
    {
        id: "project-3",
        title: "Project: Sales Performance and Profitability Insights",
        company: "Power BI Project",
        description: "Created 2 interactive dashboards for 500K+ sales records using Power BI, DAX, and Power Query, cutting data processing time by 30%.",
        date: "2024",
        icon: <TbReportAnalytics />,
        tags: ["powerbi", "dax", "powerquery", "dashboard", "etl", "profitability"]
    },
    {
        id: "project-2",
        title: "Project: Automated Answer Retrieval with OpenAI + RAG",
        company: "OpenAI Project",
        description: "Built a web-based answer system using OpenAI LLMs and RAG, improving retrieval accuracy by 40% with automated scraping + NLP.",
        date: "2024",
        icon: <SiOpenai />,
        tags: ["openai", "llm", "rag", "nlp", "webscraping", "python", "qa-system"]
    },
    {
        id: "project-1",
        title: "Project: Diamond Price Estimation Model in R",
        company: "R Project",
        description: "Developed a regression model to predict diamond prices (R² = 95.39%) using WLS and feature selection, cutting LOOCV-RMSE to 0.134.",
        date: "2024",
        icon: <TbDiamond />,
        tags: ["r", "regression", "feature-selection", "wls", "loocv", "data-cleaning"]
    }

    ]
}


export default homeConfig