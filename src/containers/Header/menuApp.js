export const adminMenu = [
    { //Quản lý người dùng
        name: 'menu.admin.header', menus: [
            { name: 'menu.admin.crud-redux', link: '/system/user-redux' },
            { name: 'menu.admin.crud-user', link: '/system/user-manage' },
            { name: 'menu.admin.crud-doctor', link: '/system/user-manage' },
            { name: 'menu.admin.crud-admin', link: '/system/user-manage' },
            // subMenus: [
            //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
            //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },

            //     // { name: 'menu.system.system-administrator.product-manage', link: '/system/product-manage' },
            //     // { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
            // ]

            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
    { //Quản lý phòng khám
        name: 'menu.admin.clinic', menus: [
            { name: 'menu.admin.crud-clinic', link: '/system/user-redux' },
        ]
    },
    { //Quản lý chuyên khoa
        name: 'menu.admin.specialty', menus: [
            { name: 'menu.admin.crud-specialty', link: '/system/user-redux' },
        ]
    },
];