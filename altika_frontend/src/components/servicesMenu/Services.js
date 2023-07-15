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
  {id: 0, title: 'Заключение эксперта', price: 'от 10 000 руб.', url: decoration0, description: 'В процессе судебного разбирательства часто возникает необходимость проведения различных экспертиз (финансовая, автотехническая, строительная, лингвистическая и др.) для установления всех значимых обстоятельств с целью правильного установления обстоятельств дела, требующих специальных познаниях в определенных областях. Экспертное заключение является одним из доказательств по делу, которое учитывается судом в совокупности с другими имеющимися доказательствами (ст.80 УПК РФ, ч. 2 ст. 64, 71 АПК РФ, ч. 3 ст. 86 ГПК РФ, ст.26.4 КОАП РФ).'},
  {id: 1, title: 'Отчет об оценке', price: 'от 5 000 руб.', url: decoration1, description: 'Отчет об оценке объекта оценки представляет собой документ, содержащий профессиональное суждение оценщика относительно итоговой стоимости объекта оценки, сформулированное на основе собранной информации, проведенного анализа и расчетов в соответствии с заданием на оценку. Отчет об оценке стоимости— это документ, составленный независимой оценочной компанией в соответствии с Федеральным законом № 135-ФЗ «Об оценочной деятельности в РФ».'},
  {id: 2, title: 'Заключение специалиста', price: 'от 10 000 руб.', url: decoration2, description: 'Заключение специалиста представляет собой документ в письменном виде, содержащие суждение по вопросам, поставленным перед специалистом, обладающим специальными знаниями, в котором изложены развернутые ответы на поставленные стороной и/или сторонами вопросы. Заключение специалиста является внесудебным исследованием, необходимым для установления обстоятельств в рамках спорных ситуаций, для оказания помощи дознавателю, следователю, прокурору или суду для объективной и правильной оценки результатов судебной экспертизы, также для консультаций и оказание непосредственной помощи при исследовании доказательств и совершении иных процессуальных действий, требующих соответствующих знаний и (или) навыков.'},
  {id: 3, title: 'Рецензия', price: 'от 10 000 руб.', url: decoration3, description: 'Рецензия представляет собой документ, который анализирует заключение эксперта с точки зрения его научной и методической обоснованности, соответствия рекомендациям, выработанным общей теорией судебной экспертизы, соблюдения требований законодательства, регулирующего судебно-экспертную деятельность. Специалист, выполняющий рецензию высказывает свое профессиональное мнение, основывающее на специальных знания и входящее в его компетенцию.'},
  {id: 4, title: 'Гарантийное письмо в суд', price: null, url: decoration4, description: 'Гарантийное письмо это документ, содержащий в себе информацию о возможности проведения экспертного исследования в рамках рассмотрения дела (административного, уголовного, гражданского), в котором указывается компетенция специалистов, которым будет поручено проведение исследования, сроки и стоимость проведения исследования, а также необходимые документы для проведения всестороннего и обоснованного исследования в рамках поставленных вопросов.'},
  {id: 5, title: 'Предварительный расчет', price: 'от 3 000 руб.', url: decoration5, description: 'Предварительный расчет это вид консультационной услуги, который помогает принимать решение о необходимости и целесообразности проведения дальнейшего исследования в рамках управленческих решений, судебного и внесудебного исследований, а также для оперативного реагирования в рамках спорных ситуаций.'},
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
