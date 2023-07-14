import React from 'react';
import { Typography, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import decoration from '../../resources/img/background_image/natural-paper.png';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  root_light: {
    backgroundImage: `url(${decoration})`,
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  title: {
    textAlign: 'center',
  },
  content: {
    textAlign: 'justify',
    lineHeight: '1.8rem',
  },
  list: {
    margin: 0,
    listStyleType: "none",
    '& > li:before': {
      content: "-",
    },
  },
  item_key_word: {
    fontWeight: 'bolder'
  }
}));


export default function About(props) {
  const classes = useStyles();

  const rootStyle = clsx({
    [classes.root] : true,
    [classes.root_light] : !props.darkTheme
  });

  const listStyle = clsx({
    [classes.root]: true,
    [classes.list]: true,
  })

  return (
    <Paper className={rootStyle} square>
      <Container maxWidth={"md"}>
        <Typography variant="h4" gutterBottom className={classes.title}>
          О нашей компании
        </Typography>

        <Typography variant="subtitle1" component="p" className={classes.content}>
          &#137;&#137;&#137;Автономная некоммерческая организация «Центр инженерно-технических и финансово-экономических
          экспертиз «ЭКСПЕРТНОЕ БЮРО АЛЬТИКА» занимается проведением исследований в самых различных областях
          судебно-экспертной деятельности, в частности в сферах экономики, лингвистики, фоноскопии,
          исследования документов, трасологии, автотехнических, пожарно-технических и строительно-технических
          и многих других видов экспертиз.
        </Typography>

        <Typography variant="subtitle1" component="p" className={classes.content}>
          &#137;&#137;&#137;Специалисты Экспертного бюро Альтика – это коллектив профессиональных судебных экспертов, имеющих
          в т.ч. и два высших образования, в том числе по специальности «судебная экспертиза» с присвоенной
          квалификацией «судебный эксперт». Специалисты постоянно проходят необходимую в работе сертификацию
          и аккредитацию, а также повышают свой профессиональный уровень на курсах повышения квалификации и
          семинарах по актуальным практическим и научным вопросам применения специальных знаний в ведущих
          учебных заведениях страны.
        </Typography>

        <Typography variant="subtitle1" component="p" className={classes.content}>
          &#137;&#137;&#137;Сотрудники Экспертного бюро Альтика обладают богатым опытом экспертной практики и высокой степень
          квалификации для проведения исследований в рамках судебных и внесудебных исследований в вопросах,
          требующих применений специальных знаний. 
        </Typography>

        {/* TODO: обновить верстку списка с маркером "-" */}

        <Typography variant="subtitle1" component="ul" className={listStyle}>
          &#137;&#137;&#137;Преимущества сотрудничества с АНО «Центр инженерно-технических и финансово-экономических
          экспертиз «ЭКСПЕРТНОЕ БЮРО АЛЬТИКА»:
          <Typography variant="subtitle1" component="li" className={classes.content}>
            <span className={classes.item_key_word}>Законность.</span> Все виды работ в Экспертном бюро Альтика проводятся с соблюдением всех
            актуальных нормативно правовых актов, методик исследования, разработанных Минюстом РФ,
            МВД РФ с учетом особенностей их применения, а также в соответствие с существующими
            стандартами оформления документации.
          </Typography>

          <Typography variant="subtitle1" component="li" className={classes.content}>
            <span className={classes.item_key_word}>Профессионализм.</span> Все виды работ проводятся специалистами строго в соответствие с их
            компетентностью. При этом, в связи с наличием специалистов с различным профильным
            образованием, имеется возможность проведения комплексного исследования по различным
            направлениям судебно-экспертной деятельности.
          </Typography>

          <Typography variant="subtitle1" component="li" className={classes.content}>
            <span className={classes.item_key_word}>Коммуникабельность.</span> Специалисты бюро обладают большим опытом общения с представителями
            различных структур, которые являются пользователями итоговой документации (заключение
            эксперта, заключение специалиста, отчет об оценке и пр.). В том числе, защита своих заключений
            в рамках судебно-процессуальных действий в различных инстанциях и поддержка отчетов об оценке
            при необходимости получения Экспертизы на отчет.
          </Typography>

          <Typography variant="subtitle1" component="li" className={classes.content}>
            <span className={classes.item_key_word}>Оперативность.</span> Все виды предоставляемых услуг могут быть оказаны с разумным
            учетом дефицита времени для принятия управленческих решений.
          </Typography>
        </Typography>

      </Container>
    </Paper>
  )
}
