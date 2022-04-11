/*
 * @Author: saber
 * @Date: 2022-04-11 16:41:48
 * @LastEditTime: 2022-04-11 16:41:49
 * @LastEditors: saber
 * @Description: 
 */
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}