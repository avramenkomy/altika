import React from 'react';
import {
  Paper, Container, Grid, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import EvaluationCard from './EvaluationCard';

import decoration0 from '../../resources/img/evaluations/evaluation_home.jpg';
import decoration1 from '../../resources/img/evaluations/evaluation_car.jpg';
import decoration2 from '../../resources/img/evaluations/evaluation_business.jpg';

const evaluations = [
  {id: 0, title: 'Оценка недвижимого имущества', url: decoration0, description: ['Оценка жилой недвижимости', 'Оценка загородной недвижимости (земельный участок, дом, дача, коттедж, строения на земельном участке, являющиеся неотъемлемыми улучшениями)', 'Оценка коммерческой недвижимости (торговые, офисные, производственно-складские здания, помещения и комплексы)', 'Оценка незавершённого строительства', 'Оценка сооружений', 'Оценка арендной платы коммерческой недвижимости', 'Оценка стоимости и аренды сервитутов' ]},
  {id: 1, title: 'Оценка движимого имущества', url: decoration1, description: ['Оценка транспортных средств', 'Оценка спецтехники', 'Оценка установленного и неустановленного оборудования', 'Оценка технологических линий, станков, конвейеров', 'Оценка аренды транспортных средств (долгосрочная и краткосрочная)']},
  {id: 2, title: 'Оценка бизнеса', url: decoration2, description: ['Оценка действующей организации для инвестиционных целей', 'Оценка чистых активов', 'Оценка ликвидационной стоимости', 'Оценка прав требования', 'Оценка имущества организации', 'Оценка финансового состояния']},
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  title: {
    textAlign: 'center',
  },
  wrapper: {
    textAlign: 'center',
  },
}));


function Evaluations() {
  const classes = useStyles();

  return (
    <Paper square className={classes.root}>
      <Container maxWidth={"lg"}>
        <Typography variant="h5" className={classes.title}>
          Оценочная деятельность
        </Typography>
        <Grid container>
          {
            evaluations.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <EvaluationCard evaluation={item} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Paper>
  )
}

export default Evaluations;
