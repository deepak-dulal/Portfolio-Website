import React from 'react'
import {SiMedium} from "react-icons/si";
import PCA from "../images/PCA.jpg"

const blogConfig = [
    {
        id: "blog-8",
        title: "Why is Principal Component Analysis Important?",
        links: [
            {
                name: "article",
                url: "#",
                icon: <SiMedium/>
            }
        ],
        image: PCA,
        description: "This blog post explains the importance of Principal Component Analysis (PCA) in reducing dimensionality, eliminating redundancy, and improving model performance in data analysis.",
        target: "_blank"
    },
    {
        id: "blog-7",
        title: "What I Learned From My First Data Analysis Project",
        links: [
            {
                name: "article",
                url: "#",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/max/700/1*DeZYSLcMdF58BeqemGhUhg.jpeg",
        description: "This blog post shares key lessons and practical skills gained from completing my first data analysis project, covering data cleaning, exploration, modeling, and interpretation.",
        target: "_blank"
    }
]

export default blogConfig