export type Notification = {
  id: string
  title: string
  message: string
  read: boolean
  createdAt: string
}

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'New comment on your task',
    message: 'satnaing left a comment on "Update landing page copy".',
    read: false,
    createdAt: '2026-07-07T09:15:00Z',
  },
  {
    id: '2',
    title: 'Task assigned to you',
    message: 'You were assigned to "Fix sidebar responsive layout".',
    read: false,
    createdAt: '2026-07-07T08:02:00Z',
  },
  {
    id: '3',
    title: 'Weekly summary is ready',
    message: 'Your team completed 12 tasks this week.',
    read: false,
    createdAt: '2026-07-06T18:30:00Z',
  },
  {
    id: '4',
    title: 'New user registered',
    message: 'Jane Cooper just created an account.',
    read: true,
    createdAt: '2026-07-06T14:45:00Z',
  },
  {
    id: '5',
    title: 'Deployment succeeded',
    message: 'Production deployment for "shadcn-admin" completed successfully.',
    read: true,
    createdAt: '2026-07-05T21:10:00Z',
  },
  {
    id: '6',
    title: 'Password changed',
    message: 'Your account password was changed successfully.',
    read: true,
    createdAt: '2026-07-05T11:05:00Z',
  },
  {
    id: '7',
    title: 'New message from support',
    message: 'Support replied to your ticket #4821.',
    read: true,
    createdAt: '2026-07-04T16:40:00Z',
  },
  {
    id: '8',
    title: 'Storage almost full',
    message: 'Your workspace has used 90% of its storage quota.',
    read: true,
    createdAt: '2026-07-03T10:00:00Z',
  },
]
