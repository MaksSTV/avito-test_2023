import { IGameId } from "types/games.types";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Typography from '@mui/material/Typography';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


type Props = {
    data: IGameId
}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .25)'
            : 'rgba(0, 0, 0, .05)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .25)'
            : 'rgba(0, 0, 0, .05)',
}));

function ContentGame({ data }: Props) {

    const navigate = useNavigate()

    return (
        <div className="container">
            <Button variant="outlined" onClick={() => navigate(-1)}>Назад</Button>
            <div className="card">
                <img src={data.thumbnail} alt="" className="card__img" />
                <div className="card__info">
                    <Typography gutterBottom variant="h4" component="div">
                        {data.title}
                    </Typography>
                    <Typography>
                        Дата релиза: {data.release_date.split('-').reverse().join('.')}
                    </Typography>
                    <Typography>
                        Разработчик: {data.developer}
                    </Typography>
                    <Typography>
                        Издатель: {data.publisher}
                    </Typography>
                    <Typography>
                        Жанр: {data.genre}
                    </Typography>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data.screenshots.map((value) => (
                    <SwiperSlide key={value.id}>
                        <img src={value.image} alt="screen" />
                    </SwiperSlide>
                ))}
            </Swiper>
            {
                data.minimum_system_requirements ? (
                    <Accordion style={{ marginBottom: '20px' }}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Typography>Системные требования</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2">
                                Graphics: {data.minimum_system_requirements.graphics}
                            </Typography>
                            <Typography variant="body2">
                                Memory: {data.minimum_system_requirements.memory}
                            </Typography>
                            <Typography variant="body2">
                                OS: {data.minimum_system_requirements.os}
                            </Typography>
                            <Typography variant="body2">
                                Processor: {data.minimum_system_requirements.processor}
                            </Typography>
                            <Typography variant="body2">
                                Storage: {data.minimum_system_requirements.storage}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ) : null
            }
        </div>
    );
}

export default ContentGame;