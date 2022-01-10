import dayjs from 'dayjs';

export const getData = (data) => {
  return dayjs(data).format('DD.MM.YYYY');
}