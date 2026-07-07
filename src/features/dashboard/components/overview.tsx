import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Ja',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Fe',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Ma',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Ap',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'My',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Ju',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jy',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Ag',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Sp',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Ot',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Nv',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Dc',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          direction='ltr'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey='total'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='fill-primary'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
