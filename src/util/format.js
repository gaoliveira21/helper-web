import { parseISO, format } from 'date-fns'

export const formatPrice = (value) => {
  if (!value) return null

  return new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
export const formatDate = (date, formatString = 'dd/MM/yyyy') => {
  if (!date) return null

  return format(parseISO(date), formatString)
}
