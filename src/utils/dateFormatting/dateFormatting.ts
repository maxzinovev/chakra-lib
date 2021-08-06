import moment from 'moment';
import momentTimezone from 'moment-timezone';

export const DATE_FORMAT = 'DD.MM.YYYY';
export const TIME_FORMAT = 'HH:mm';
export const DATE_TIME_FORMAT = 'DD.MM.YYYY HH:mm';

export const getTimeZoneMoment = () => {
    const timeZoneName = momentTimezone.tz.guess()
    return momentTimezone.tz(timeZoneName).format('Z')
}

export const isInvalidDate = (date: string) => {
    return moment(date, DATE_FORMAT, true).isValid();
}

export const isValidTime = (value: string) => {
    return moment(value, TIME_FORMAT, true).isValid();
    //return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
}


export const getDiffDateDays = (start: string, end: string) => {
    const startMoment = moment(start ? start : undefined);
    const endMoment = moment(end ? end : undefined);
    return startMoment.diff(endMoment, 'days')
}

export const getDiffDateHours = (start: string, end: string) => {
    const startMoment = moment(start ? start : undefined);
    const endMoment = moment(end ? end : undefined);
    return startMoment.diff(endMoment, 'hours')
}

export const getDiffDateMinutes = (start: string, end: string) => {
    const startMoment = moment(start ? start : undefined);
    const endMoment = moment(end ? end : undefined);
    return startMoment.diff(endMoment, 'minutes')
}

export const getDateToPicker = (value: any) => {
    return moment(value, DATE_FORMAT).toDate();
}

export const getDateToSubmit = (value: string) => {
    if (value === null || value === '') {
        return null
    }
    return moment(value, DATE_FORMAT).format();
}

export const getDateTimeToSubmit = (value: string) => {
    if (value === null || value === '') {
        return null
    }
    return moment(value, `${DATE_FORMAT} ${TIME_FORMAT}`).format();
}

export const getMoment = (utc = getTimeZoneMoment()) => {
    return moment().utcOffset(utc).format();
}

export const getDateReadFormat = (value: string): any => {
    if (value === null || value === '') {
        return null
    }
    return moment(value).format(DATE_FORMAT);
};

export const getTimeReadFormat = (value: string) => {
    return moment(value).format(TIME_FORMAT);
};

export const getDateTimeReadFormat = (value: string) => {
    if (value === null || value === '') {
        return null
    }
    return moment(value).format(DATE_TIME_FORMAT);
};

export const twoDigits = (num: string) => {
    return ('0' + num).slice(-2);
}

export const getDateWeek = ():any => {
    return moment().subtract(7, 'day');
}

export const getDateMonth = () => {
    return moment().subtract(1, 'months');
}

export const getDateYear = () => {
    return moment().subtract(1, 'year');
}

export const getPrevMonthLastDay = () => {
    return moment().subtract(1, 'months').endOf('month');
}

