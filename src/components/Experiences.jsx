import React from "react";
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";
import "../index.css"

import Wrapper from './SectionWrap';
import { fadeIn, textVariant } from '../constants/motion';
import { experiences } from '../constants';

const Card = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "black",
                color: "black",
                borderRadius: "8px"
            }}
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid #000000" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full hover:cursor-pointer'>
                <img
                    src={experience.icon}
                    alt={experience.company}
                    className='object-contain rounded-full'
                />
                </div>
            }
            iconOnClick={() => window.open(experience.link, "_blank")}
            >
            <div>
                <h3 className='font-sub text-primary-200 text-md md:text-[22px] font-normal'>{experience.title}</h3>
                <p
                className='font-sub text-[16px] font-semibold text-primary-300'
                style={{ margin: 0 }}
                >
                {experience.company}
                </p>
            </div>

            <ul className='mt-6 list-disc ml-5 space-y-2 md:pb-2'>
                {experience.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className='font-text text-primary-200 text-xs md:text-sm pl-1 tracking-wider'
                >
                    {point}
                </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}

const Experiences = () => {
    return (
        <div className='relative flex flex-col w-full mx-auto'>

             <motion.div variants={textVariant()} className="flex flex-col items-center">
                <p className="font-sub text-sm md:text-md text-primary-400 justify-end">PAST WORK</p>
                <p className="font-title font-normal text-lg md:text-xl">EXPERIENCES.</p>
            </motion.div>
      
            <motion.span 
                className="relative flex items-stretch mb-8 pt-10 h-3 md:h-5 bg-transparent border-y-[1px] border-primary-400"
                variants={fadeIn('left', 'spring', 0.3, 1.5)}>
            </motion.span>

            <div className='md:mt-5 flex flex-col'>
                <VerticalTimeline lineColor="#e6dfd9" className="vertical-timeline-custom-line">
                    {experiences.map((experience, index) => (
                        <Card
                        key={`experience-${index}`}
                        experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>

        </div>
    )
}

export default Wrapper(Experiences, 'experiences')