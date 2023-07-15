import React from 'react';
import {
  Container, Typography, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';

import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIcon from '@material-ui/icons/Assignment';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DescriptionIcon from '@material-ui/icons/Description';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import GavelIcon from '@material-ui/icons/Gavel';

const desc_1 = 'Обращение в организацию с помощью звонка или формы обратной связи.';
const desc_2 = 'Проведение предварительного расчета диапазона рыночной (или иной) стоимости объекта оценки.';
const desc_3 = 'Согласование Договора на оказание оценочных услуг с Заданием на оценку.';
const desc_4 = 'Получение всех требуемых документов от Заказчика, необходимых для составления Отчета об оценке.';
const desc_5 = 'Осмотр объекта оценки.';
const desc_6 = 'Составление текста и оформление Отчета об оценке в соответствие с законодательством об оценочной деятельности, актуальным на дату проведения оценки.';
const desc_7 = 'Создание электронного документа (при необходимости), заверенного квалифицированной электронной подписью оценщика.';
const desc_8 = 'Подписание акта приёмо-передачи о выполненных работах и отправка Отчета об оценке Заказчику удобным способом: курьером, почтой, службой доставки.';
const desc_9 = 'Дальнейшее сопровождение результатов, полученных в Отчете об оценке, в СРО и/или суде (при необходимости).';


function EvaluationProcess() {
  return (
    <React.Fragment>
      <Container maxWidth={"md"}>
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          Процесс оказания оценочных услуг
        </Typography>

        <List>
          <ListItem>
            <ListItemIcon>
              <PhoneForwardedIcon />
            </ListItemIcon>
            <ListItemText primary={desc_1} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary={desc_2} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={desc_3} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary={desc_4} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            <ListItemText primary={desc_5} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={desc_6} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChromeReaderModeIcon />
            </ListItemIcon>
            <ListItemText primary={desc_7} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary={desc_8} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GavelIcon />
            </ListItemIcon>
            <ListItemText primary={desc_9} />
          </ListItem>
        </List>
      </Container>
    </React.Fragment>
  )
}

export default EvaluationProcess;
