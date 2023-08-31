import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IGames } from 'types/games.types';
import { NavLink } from 'react-router-dom';

type Props = {
    value: IGames,
    index: number
}


function ItemOfList({ value, index }: Props) {

    return (
        
            <Grid item xs="auto" sm="auto" md="auto" lg="auto" xl="auto" key={index}>
                <NavLink to={`/game/${value.id}`}>
                <Card sx={{ width: 320, height: 320 }} style={{ background: 'none' }}>
                    <CardActionArea
                        style={{
                            background: 'rgb(0, 64, 64)',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={value.thumbnail}
                            alt={value.title}
                            style={{ objectFit: 'fill' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {value.title}
                            </Typography>
                            <Typography variant="body2" >
                                Дата выхода: {value.release_date.split('-').reverse().join('.')}
                            </Typography>
                            <Typography variant="body2" mb={1}>
                                Издатель: {value.publisher}
                            </Typography>
                            <Chip label={value.genre} color="info" size="small" variant="outlined" />
                        </CardContent>
                    </CardActionArea>
                </Card>
                </NavLink>
            </Grid>
        
    )
}

export default ItemOfList