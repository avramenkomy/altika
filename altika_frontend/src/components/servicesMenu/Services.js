import React from 'react';
import { Container, Paper, Typography, Hidden} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ServiceCard from './ServiceCard';
import ServicesAccordion from './ServiceAccordion';

import decoration0 from '../../resources/img/types_of_expertise/handwriting_expertise.jpg';
import decoration1 from '../../resources/img/types_of_expertise/handwriting_expertise.jpg';
import decoration2 from '../../resources/img/types_of_expertise/handwriting_expertise.jpg';
import decoration3 from '../../resources/img/types_of_expertise/handwriting_expertise.jpg';
import decoration4 from '../../resources/img/types_of_expertise/handwriting_expertise.jpg';
import decoration5 from '../../resources/img/types_of_expertise/handwriting_expertise.jpg';

const serviceTypes = [
  {id: 0, title: 'Заключение эксперта', price: 'от 10 000 руб.', url: decoration0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 1, title: 'Отчет об оценке', price: 'от 10 000 руб.', url: decoration1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 2, title: 'Заключение специалиста', price: 'от 10 000 руб.', url: decoration2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 3, title: 'Рецензия', price: 'от 10 000 руб.', url: decoration3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 4, title: 'Гарантийное письмо в суд', price: 'от 10 000 руб.', url: decoration4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
  {id: 5, title: 'Предварительный расчет', price: 'от 10 000 руб.', url: decoration5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac euismod justo. Duis consequat nibhvel est dignissim consequat. Mauris lobortis lobortis convallis. Pellentesque hendrerit iaculis justo, nec rhoncus eros. Nam id leo nec eros dignissim posuere.'},
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
  },
  wrapper: {
    textAlign: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Services({darkMode}) {
  const classes = useStyles();
  return (
    <>
      <Paper square className={classes.root}>
        <Container maxWidth={"lg"}>
          <Typography variant="h5" className={classes.title}>
            Услуги
          </Typography>

          {/** Этот блок виден только на маленьких экранах */}
          <Hidden mdUp>
            <ServicesAccordion serviceTypes={serviceTypes} />
          </Hidden>

          {/** Этот блок виден только на больших экранах */}
          <Hidden smDown>
            {
              serviceTypes.map(service => {
                return (
                  <ServiceCard {...service} darkMode={darkMode} key={service.id}/>
                )
              })
            }
          </Hidden>
        </Container>
      </Paper>
    </>
  )
}

export default Services;
