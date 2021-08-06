export const locale = 'ru';

export const WEEKDAYS_SHORT = {
    ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
};

export const MONTHS = {
    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
};

export const WEEKDAYS_LONG = {
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
};

export const FIRST_DAY_OF_WEEK = {
    ru: 1
};

export const LABELS = {
    ru: { nextMonth: 'следующий месяц', previousMonth: 'предыдущий месяц' }
};


export const maskDate = [/[0-9]/, /[0-9]/, '.',  /[0-9]/, /[0-9]/, '.', /[2]/, /[0]/, /[2]/, /[0-9]/];
export const maskTelephone = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
