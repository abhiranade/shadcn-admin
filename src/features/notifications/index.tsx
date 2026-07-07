import { type ChangeEvent, useState } from 'react'
import { BellOff } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { notifications } from './data/notifications'

type ReadFilter = 'all' | 'unread' | 'read'

const readFilterText = new Map<ReadFilter, string>([
  ['all', 'All'],
  ['unread', 'Unread'],
  ['read', 'Read'],
])

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
})

export function Notifications() {
  const [readFilter, setReadFilter] = useState<ReadFilter>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const unreadCount = notifications.filter((n) => !n.read).length

  const filteredNotifications = notifications
    .filter((notification) =>
      readFilter === 'unread'
        ? !notification.read
        : readFilter === 'read'
          ? notification.read
          : true
    )
    .filter(
      (notification) =>
        notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        notification.message.toLowerCase().includes(searchTerm.toLowerCase())
    )

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search className='me-auto' />
        <ThemeSwitch />
        <ConfigDrawer />
        <ProfileDropdown />
      </Header>

      {/* ===== Content ===== */}
      <Main fixed>
        <div className='flex items-center gap-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Notifications</h1>
          {unreadCount > 0 && (
            <Badge variant='default' className='rounded-full'>
              {unreadCount} unread
            </Badge>
          )}
        </div>
        <p className='text-muted-foreground'>
          Here&apos;s a list of your recent notifications!
        </p>

        <div className='my-4 flex flex-col gap-4 sm:my-0 sm:flex-row sm:items-center sm:justify-between'>
          <Input
            placeholder='Search notifications...'
            className='h-9 w-full sm:w-62.5'
            value={searchTerm}
            onChange={handleSearch}
          />
          <Select
            value={readFilter}
            onValueChange={(value: ReadFilter) => setReadFilter(value)}
          >
            <SelectTrigger className='w-36'>
              <SelectValue>{readFilterText.get(readFilter)}</SelectValue>
            </SelectTrigger>
            <SelectContent align='end'>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='unread'>Unread</SelectItem>
              <SelectItem value='read'>Read</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator className='shadow-sm' />

        {filteredNotifications.length === 0 ? (
          <div className='flex flex-col items-center justify-center gap-2 py-16 text-muted-foreground'>
            <BellOff size={36} />
            <p>No notifications found.</p>
          </div>
        ) : (
          <ul className='faded-bottom no-scrollbar flex flex-col gap-2 overflow-auto pt-4 pb-16'>
            {filteredNotifications.map((notification) => (
              <li
                key={notification.id}
                className='flex items-start gap-3 rounded-lg border p-4 hover:shadow-md'
              >
                <span
                  className={`mt-1.5 size-2 shrink-0 rounded-full ${
                    notification.read ? 'bg-transparent' : 'bg-primary'
                  }`}
                />
                <div className='flex-1'>
                  <div className='flex items-center justify-between gap-2'>
                    <h2 className='font-semibold'>{notification.title}</h2>
                    <span className='shrink-0 text-xs text-muted-foreground'>
                      {dateFormatter.format(new Date(notification.createdAt))}
                    </span>
                  </div>
                  <p className='text-muted-foreground'>
                    {notification.message}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Main>
    </>
  )
}
