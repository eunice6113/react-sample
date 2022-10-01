import * as React from "react";
import { GNB } from "./sidebar/GNB";
import { Link, Outlet } from "react-router-dom";
import { PanelMenu } from 'primereact/panelmenu';

const FullLayout: React.FC = () => {

    const items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark',
                        url: '/notice/list'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video',
                        url: '/notice/list'
                    }
                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash',
                    url: '/notice/list'
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link',
                    url: '/notice/list'
                }
            ]
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                }
            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus'
                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        }
    ];

    React.useEffect(() => {

    }, [])

  
    return(
    <>
        <GNB />
        <div style={{display:'flex'}}>
            <div style={{display:'fixed'}}>
                <PanelMenu model={items} style={{ width: '22rem' }}/>
            </div>
            <div>
                <h1>hello</h1>
                <Outlet />
            </div>
        </div>
    </>
    )
}

export default FullLayout
