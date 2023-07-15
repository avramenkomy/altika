import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Button, Typography, Container, Paper} from '@material-ui/core';

import EvaluationProcess from './EvaluationProcess';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: '5px'
  },
  title: {
    textAlign: 'center'
  },
}));

function getSteps() {
  return [
    'Шаг 1: Запрос',
    'Шаг 2: Гарантийное письмо',
    'Шаг 3: Отправка письма', 
    'Шаг 4: Коммуникация с судом', 
    'Шаг 5: Подготовка перед началом работы над заключением эксперта',
    'Шаг 6: Выездные мероприятия',
    'Шаг 7: Дополнительные материалы',
    'Шаг 8: Формирование заключения эксперта',
    'Шаг 9: Отправка в суд',
    'Шаг 10: Участие в судебном заседании',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Запрос гарантийного письма от суда и/или от адвоката с перечнем вопросов,
              которые могут быть поставлены на разрешение эксперта.`;
    case 1:
      return `Составление гарантийного письма, содержащего в себе информацию о
              возможности проведения экспертного исследования, в котором указывается
              компетенция специалистов, которым будет поручено проведение исследования,
              сроки и стоимость проведения исследования, а также необходимые документы
              для проведения всестороннего и обоснованного исследования в рамках
              поставленных вопросов.`;
    case 2:
      return `Отправка гарантийного письма с указанием суда, в котором планируется
              назначение судебной экспертизы, судьи и номера дела, в рамках которого
              требуется проведение судебного исследования.`;
    case 3:
      return `Получение определения, томов и/или материалов дела, требуемых эксперту для
              проведения исследования в рамках поставленных в определение судом вопросов`;
    case 4:
      return `Разъяснение руководителем организации экспертам, которые назначена
              экспертиза, прав и обязанностей эксперта, а также предупреждение об уголовной
              ответственности по ст. 307 УК РФ за дачу заведомо ложного заключения под
              подписку перед началом ознакомления с материалами дела и составлением заключения
              эксперта.`;
    case 5:
      return `Назначение и проведение осмотра объектов исследования (при необходимости и возможности)
              в рамках судебного исследования.`;
    case 6:
      return `Запрос дополнительных материалов, требуемых экспертам для проведения исследования
              (при необходимости).`;
    case 7:
      return `Составление заключения эксперта, при наличии необходимого и достаточного количества
              документов для полного, обоснованного и всестороннего исследования вопросов,
              поставленных на разрешение судом экспертам.`;
    case 8:
      return `Отправка томов и/или материалов дела вместе с заключением эксперта обратно в суд.`;
    case 9:
      return `Дача показаний (в случае вызова в суд) для пояснений по заключению эксперта строго
              в рамках исследований по вопросам в заключении эксперта.`;
    default:
      return 'Unknown step';
  }
}

function StepByWork() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (    
    <Paper className={classes.root}>
      <Container maxWidth={"md"}>
      <Typography variant="h5" className={classes.title}>
        Процесс проведения судебной экспертизы
      </Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    variant="outlined"
                  >
                    Назад
                  </Button>
                  {activeStep < (steps.length - 1) &&
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Далее
                    </Button>
                  }
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === (steps.length - 1) && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Чтобы начать просмотр заново, нажмите:</Typography>
          <Button onClick={handleReset} className={classes.button} variant="outlined">
            В начало
          </Button>
        </Paper>
      )}
      </Container>
      <EvaluationProcess />
    </Paper>    
  );
}

export default StepByWork;
