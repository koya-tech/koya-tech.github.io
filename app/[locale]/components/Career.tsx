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
    // const [expanded, setExpanded] = React.useState(false);
    const locale = useLocale();

    // Set the locale to enable static rendering
    unstable_setRequestLocale(locale);
    const t = useTranslations('Carrier');

    // TODO
    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    const careerData = [
        {
            companyName: t('hitachi.companyName'),
            companyLink: t('hitachi.companyLink'),
            position: t('hitachi.position'),
            startDate: t('hitachi.startDate'),
            endDate: t('hitachi.endDate'),
            bodyText: {
                para1: t('hitachi.bodyText.para1'),
                para2: t('hitachi.bodyText.para2'),
            },
            imagePath: t('hitachi.imagePath'),
            reference: t('hitachi.reference')
        },
        {
            companyName: t('universityOfTokyo.companyName'),
            companyLink: t('universityOfTokyo.companyLink'),
            position: t('universityOfTokyo.position'),
            startDate: t('universityOfTokyo.startDate'),
            endDate: t('universityOfTokyo.endDate'),
            bodyText: {
                para1: t('universityOfTokyo.bodyText.para1'),
                para2: t('universityOfTokyo.bodyText.para2'),
            },
            imagePath: t('universityOfTokyo.imagePath'),
            reference: t('universityOfTokyo.reference')
        },
        {
            companyName: t('kyushuUniversity.companyName'),
            companyLink: t('kyushuUniversity.companyLink'),
            position: t('kyushuUniversity.position'),
            startDate: t('kyushuUniversity.startDate'),
            endDate: t('kyushuUniversity.endDate'),
            bodyText: {
                para1: t('kyushuUniversity.bodyText.para1'),
                para2: t('kyushuUniversity.bodyText.para2'),
            },
            imagePath: t('kyushuUniversity.imagePath'),
            reference: t('kyushuUniversity.reference')
        },
    ]

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
