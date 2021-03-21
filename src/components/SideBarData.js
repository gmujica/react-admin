import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideBarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports',
                path: '/reports/resports1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Reports 2',
                path: '/reports/resports2',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Reports 3',
                path: '/reports/resports3',
                icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    {
        title: 'Team',
        path: '/products',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Team',
        path: '/team',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Team',
                path: '/team/team',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Desss',
                path: '/team/desss',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
]