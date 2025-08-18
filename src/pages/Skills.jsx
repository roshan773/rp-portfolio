import React from 'react'
import "./Skills.css"
import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaReact, FaNodeJs } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import { IoLogoJavascript, IoLogoFirebase, IoLogoVercel } from 'react-icons/io5'
import { SiCanva, SiRedux, SiExpress, SiMongoose, SiNetlify } from 'react-icons/si'
import { RiRobot2Line } from 'react-icons/ri'
import { TbBrandNextjs } from "react-icons/tb"
import { BiLogoMongodb } from "react-icons/bi"

const Skills = () => {
    return (
        <div className='container-fluid py-5'>
            <h1 className='display-3 text-center mb-3'>Code Ingredients</h1>
            <p className='text-center fs-4 mb-5'>The secret recipe behind my projects.</p>

            <div className="container=fluid">

                {/* Frontend Skills */}
                <div className="row  mb-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-4 mb-md-0">
                        <h1 className="display-4 text-center">Frontend Skills</h1>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="row">
                            <SkillItem icon={<FaHtml5 />} name="HTML" />
                            <SkillItem icon={<FaCss3Alt />} name="CSS" />
                            <SkillItem icon={<FaBootstrap />} name="Bootstrap" />
                            <SkillItem icon={<DiJqueryLogo />} name="jQuery" />
                            <SkillItem icon={<IoLogoJavascript />} name="JavaScript" />
                            <SkillItem icon={<FaReact />} name="ReactJS" />
                            <SkillItem icon={<SiRedux />} name="Redux" />
                            <SkillItem icon={<TbBrandNextjs />} name="NextJS" />
                        </div>
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="row  mb-5">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-4 mb-md-0">
                        <h1 className="display-4 text-center">Backend Skills</h1>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="row">
                            <SkillItem icon={<IoLogoFirebase />} name="Firebase" />
                            <SkillItem icon={<FaNodeJs />} name="Node.js" />
                            <SkillItem icon={<SiExpress />} name="Express.js" />
                            <SkillItem icon={<BiLogoMongodb />} name="MongoDB" />
                            <SkillItem icon={<SiMongoose />} name="Mongoose" />
                        </div>
                    </div>
                </div>

                {/* Tools & Extras */}
                <div className="row ">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-4 mb-md-0">
                        <h1 className="display-4 text-center">Tools / Extras</h1>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="row">
                            <SkillItem icon={<RiRobot2Line />} name="Prompt Engineering" />
                            <SkillItem icon={<SiCanva />} name="Canva" />
                            <SkillItem icon={<FaGithub />} name="GitHub" />
                            <SkillItem icon={<IoLogoVercel />} name="Vercel" />
                            <SkillItem icon={<SiNetlify />} name="Netlify" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const SkillItem = ({ icon, name }) => (
    <div className="col-6 col-sm-4 col-lg-3 mb-4 d-flex justify-content-center">
        <div className="text-center skill-item">
            <div className="icon-wrapper img-fluid" style={{ fontSize: "150px" }}>
                {icon}
            </div>
            <p className="mt-2 fs-4">{name}</p>
        </div>
    </div>
)

export default Skills
