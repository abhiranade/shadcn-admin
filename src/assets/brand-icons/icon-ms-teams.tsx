import { type SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function IconMsTeams({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      className={cn('[&>path]:stroke-current', className)}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <title>MS Teams</title>
      <path strokeWidth='0' d='M0 0h24v24H0z' fill='none' />
      <path d='M9.5 12.5v6a2.5 2.5 0 0 0 5 0v-6h4v6.5a1 1 0 0 1 -1 1h-3' />
      <path d='M9.5 12.5h-4a1 1 0 0 0 -1 1v4a3 3 0 0 0 5.874 .872' />
      <path d='M13.5 5.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M5.5 9.5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 12.5a2.5 2.5 0 0 0 2.5 -2.5v-3a1 1 0 0 0 -1 -1h-3.5v6.5h2' />
    </svg>
  )
}
