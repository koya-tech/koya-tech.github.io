import * as React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface CareerCardProps {
    companyName: string;
    companyLink: string;
    position: string;
    startDate: string;
    endDate: string;
    bodyText: {
        para1: string;
        para2: string;
    };
    imagePath: string;
    reference: string;
}

// TODO
// interface ExpandMoreProps extends IconButtonProps {
//     expand: boolean;
// }
// const ExpandMore = styled((props: ExpandMoreProps) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme }) => ({
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// variants: [
//     {
//         props: ({ expand }) => !expand,
//         style: {
//             transform: 'rotate(0deg)',
//         },
//     },
//     {
//         props: ({ expand }) => !!expand,
//         style: {
//             transform: 'rotate(180deg)',
//         },
//     },
// ],
// }));

function CareerCard(props: CareerCardProps) {
    return (
        <div className='flex items-stretch pb-10'>
            <div className="mb-10 ml-4 w-3/4 pr-3">
                <div className="absolute w-3 h-3 bg-emerald-800 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{props.startDate} - {props.endDate}</time>
                <a href={props.companyLink} className=''><h3 className="text-xl font-semibold w-48">{props.companyName}</h3></a>
                <p className="text-base font-normal pb-5">- {props.position}</p>
                <p className="text-base font-normal">{props.bodyText.para1}</p>
                <p className="text-base font-normal">{props.bodyText.para2}</p>
                <br />
                <a href={props.reference}>{props.reference}</a>
                {/* <a href="#" className="text-emerald-800 hover:underline">Read more →</a> */}

            </div>
            <div className='w-1/4'>
                <img src={props.imagePath} alt="" className='rounded-lg h-full object-contain' />
            </div>
        </div>
    )
}


export default function Career() {

    // TODO
    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    const careerData = [
        {
            companyName: "Hitachi, Ltd.",
            companyLink: "https://www.hitachi.com/",
            position: "Software Engineer (Permanent)",
            startDate: "2022/04/01",
            endDate: "2024/07/26",
            bodyText: {
                para1: "As a software engineer, developing management software applications for hardware products.",
                para2: "Experienced in Scrum and Agile development methods. Experienced a wide range of front-end, back-end, and testing processes. Also participated in a generative AI project."
            },
            imagePath: "/Hitachi-Logo.jpg",
            reference: ""
        },
        {
            companyName: "University of Tokyo",
            companyLink: "https://www.u-tokyo.ac.jp/en/",
            position: "Student (Master of Science)",
            startDate: "2020/04/01",
            endDate: "2022/03/31",
            bodyText: {
                para1: "Research theme is [Three-dimensional hand guidance by midair haptic display].",
                para2: " Proposed a method of guidance to an arbitrary 3D location using ultrasonic tactile sensation for visually impaired people and in situations where visibility is poor. I have presented his research at several academic conferences."
            },
            imagePath: "/hapticsPaper.png",
            reference: "https://arxiv.org/abs/2304.11413"
        },
        {
            companyName: "Kyushu University",
            companyLink: "https://www.kyushu-u.ac.jp/en/",
            position: "Student (Bachelor of Engineering)",
            startDate: "2016/04/01",
            endDate: "2020/03/31",
            bodyText: {
                para1: "Studied mechanical engineering, especially marine engineering.",
                para2: "Research theme was on the application of image recognition technology using Machine Learning to the factory (the content of this research was undisclosed because it was conducted in collaboration with a company). Experienced in design drawing and simulation of large offshore structures."
            },
            imagePath: "/shipDesign.jpg",
            reference: ""
        },
    ]

    return (
        <div>
            <div className="pl-4">
                <div className="text-4xl font-bold py-1">
                    <h2>Carrier</h2>
                </div>
            </div>
            <div className="p-8 min-h-screen">
                <div className="relative border-l">
                    {careerData.map((data, index) => {
                        return (
                            <div key={index}>
                                <CareerCard
                                    companyName={data.companyName}
                                    companyLink={data.companyLink}
                                    position={data.position}
                                    startDate={data.startDate}
                                    endDate={data.endDate}
                                    bodyText={data.bodyText}
                                    imagePath={data.imagePath}
                                    reference={data.reference} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
