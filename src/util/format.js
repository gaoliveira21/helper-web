import { parseISO, format } from 'date-fns';

export const { format: formatPrice } = new Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL',
});

export const formatDate = (date, formatString = 'dd/MM/yyyy') =>
  format(parseISO(date), formatString);
