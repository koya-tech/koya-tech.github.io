import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { careerData } from './data';
import { useTranslations } from 'next-intl';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

interface CareerCardProps {
    companyName: string;
    companyLink: string;
    position: string;
    startDate: string;
    endDate: string;
    bodyText: string;
    imagePath: string;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
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
}));

function CareerCard(props: CareerCardProps) {
    return (
        <div className='flex items-stretch pb-10'>
            <div className="mb-10 ml-4 w-3/4 pr-3">
                <div className="absolute w-3 h-3 bg-emerald-800 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{props.startDate} - {props.endDate}</time>
                <a href={props.companyLink} className=''><h3 className="text-xl font-semibold w-48">{props.companyName}</h3></a>
                <p className="text-base font-normal pb-5">- {props.position}</p>
                <p className="text-base font-normal">{props.bodyText}</p>
                <a href="#" className="text-emerald-800 hover:underline">Read more →</a>
            </div>
            <div className='w-1/4'>
                <img src={props.imagePath} alt="" className='rounded-lg h-full object-fill' />
            </div>
        </div>
    )
}


export default function Career() {
    const [expanded, setExpanded] = React.useState(false);
    const t = useTranslations('Carrier');

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className="pl-4">
                <div className="text-4xl font-bold py-1">
                    <h2>{t('title')}</h2>
                </div>
            </div>
            <div className="p-8 min-h-screen">
                <div className="relative border-l">
                    {careerData.map((data, index) => {
                        return (
                            <div key={index}>
                                <CareerCard
                                    companyName={data.companyname}
                                    companyLink={data.companyLink}
                                    position={data.position}
                                    startDate={data.startDate}
                                    endDate={data.endDate}
                                    bodyText={data.bodyText}
                                    imagePath={data.imagePath} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
