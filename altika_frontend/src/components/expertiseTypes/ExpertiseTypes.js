import React from 'react';
import { Container, Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ExpertiseCard from './ExpertiseCard';

import decoration0 from '../../resources/img/types_of_expertise/handwriting_expertise.jpg';
import decoration1 from '../../resources/img/types_of_expertise/auto_technical_expertise.jpg';
import decoration2 from '../../resources/img/types_of_expertise/fire_technical_expertise.jpg';
import decoration3 from '../../resources/img/types_of_expertise/finance_econimic_expertise.jpg';
import decoration4 from '../../resources/img/types_of_expertise/linguistic_expertise.jpg';
import decoration5 from '../../resources/img/types_of_expertise/engineering_technical_expertise.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
  },
}));


const expertiseTypes = [
  {id: 0, title: 'Почерковедческая экспертиза', url: decoration0, description: 'Исследовании почерка, которое проводят эксперты-почерковеды в соответствии со своими специальными познаниями, уголовно-процессуальным, гражданско-процессуальным и арбитражно-процессуальным законодательством, чтобы установить фактические данные, входящие в предмет судебно-почерковедческой экспертизы.'},
  {id: 1, title: 'Автотехническая экспертиза', url: decoration1, description: 'Исследование обстоятельств дорожно-транспортного происшествия. Исследование технического состояния транспортных средств. Исследование следов на транспортных средствах и месте дорожно-транспортного происшествия (транспортно-трасологическая диагностика). Исследование транспортных средств в целях определения их стоимости и стоимости восстановительного ремонта.'},
  {id: 2, title: 'Пожарно-техническая экспертиза', url: decoration2, description: 'Исследование технологических, технических, организационных и иных причин, условий возникновения, характера протекания пожара и его последствий'},
  {id: 3, title: 'Экономическая и финансово-экономическая экспертиза', url: decoration3, description: 'Исследование записей бухгалтерского учета. Исследование показателей финансового состояния и финансово-экономической деятельности хозяйствующего субъекта. Исследование финансово-хозяйственной деятельности компании.'},
  {id: 4, title: 'Лингвистическая экспертиза', url: decoration4, description: 'Исследование продуктов речевой деятельности.'},
  {id: 5, title: 'Инженерно-техническая экспертиза', url: decoration5, description: 'Исследование инженерных конструкций, сооружений, оборудований, механизмов, инженерных сетей, работ по их производству и эксплуатации, а также выявления и устранения причин возникновения недостатков, аварий и т.д.'},
];

function ExpertiseTypes() {
  const classes = useStyles();

  return (
    <Paper square className={classes.root}>
      <Container maxWidth={"lg"}>
        <Typography variant="h5" className={classes.title}>
          Виды экспертиз
        </Typography>
        <Grid container spacing={2}>
          {
            expertiseTypes.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <ExpertiseCard {...item} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Paper>
  )
}

export default ExpertiseTypes;
