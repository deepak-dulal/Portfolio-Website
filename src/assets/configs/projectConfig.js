import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import RAGs from "../images/RAGs.png"
import diamond from "../images/diamond.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Enhanced Answer Retrieval System Powered by OpenAI LLM and RAG",
        links: [
            {
                name: "repo",
                url: "https://github.com/deepak-dulal/Automated-Web-Based-Answer-Extraction-System",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/deepak-dulal/Automated-Web-Based-Answer-Extraction-System/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/deepak-dulal/Automated-Web-Based-Answer-Extraction-System/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://github.com/deepak-dulal/Automated-Web-Based-Answer-Extraction-System",
                icon: <ImBook/>,
            }
        ],
        image: RAGs,
        description: "Integrated OpenAI LLMs with RAG techniques to enhance answer relevance and contextual understanding, increasing retrieval accuracy by 40%.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Data-Driven Diamond Price Estimation Using R",
        links: [
            {
                name: "repo",
                url: "https://github.com/deepak-dulal/Predictive-Analytics-Model-for-Diamond-Price-Estimation-Using-R",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/deepak-dulal/Predictive-Analytics-Model-for-Diamond-Price-Estimation-Using-R/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/deepak-dulal/Predictive-Analytics-Model-for-Diamond-Price-Estimation-Using-R/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: diamond,
        description: "Built a regression model in R with AIC/BIC feature selection and WLS to address multicollinearity, achieving 95.39% R² and reducing LOOCV-RMSE to 0.134.",
        target: "_blank"
    }
]

export default projectConfig