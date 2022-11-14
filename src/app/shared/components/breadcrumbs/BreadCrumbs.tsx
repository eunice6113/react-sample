import * as React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link, useLocation, useMatch } from 'react-router-dom';
import './bread-crumbs.css';
import adminRoutes from '../../../routes/admin-routes';

const BreadCrumbs: React.FC = () => {

    const location = useLocation();
    const matches = useMatch;
    const routes = adminRoutes;
    
    let list:any = []
    let flatList:any = []
    

    console.log(location, location.pathname, matches)

    const setList = () => {
        list = routes[1]?.children?.map((item:any, i) => {
            // console.log(item, i)

            let obj = {
                label: item?.path,
                items: item?.children?.map((sitem:any) => {
                    return { label: sitem.name, url: `/${item.path}/${sitem.path}` }
                })
            }

            console.log('obj', obj)
            return obj;
            // list.push(obj)
        })

        console.log('list =>', list)

        return list
    }

    // const setFlatList = () => {
    //     flatList = routes[1]?.children?.map((item:any, i) => {
    //         // console.log(item, i)

    //         let obj = {
    //             label: item?.path,
    //             items: item?.children?.map((sitem:any) => {
    //                 return { label: sitem.name, url: `/${item.path}/${sitem.path}` }
    //             })
    //         }
    //         console.log('obj', obj)
    //         return obj;
    //     })

    //     console.log('flatList =>', flatList)

    //     return flatList
    // }


    const lists = React.useMemo(() => setList(), [list])
    // const lists2 = React.useMemo(() => setFlatList(), [flatList])

    console.log('lists ===>', lists)

    React.useEffect(() => {

        console.log('BreadCrumbs routes', routes)



    }, [])

    const items = [
        {
            label: 'menu1',
            items: [
                {
                    label: 'Left',
                    url: '',
                },
                {
                    label: 'Right',
                    url: '',
                },
                {
                    label: 'Center',
                    url: '',
                },
                {
                    label: 'Justify',
                    url: '',
                },

            ]
        },
    ];

    const items2 = [
        {
            label: 'menu2',
            items: [
                {
                    label: 'Left',
                    url: '',
                },
                {
                    label: 'Right',
                    url: '',
                },

            ]
        },
    ];

    const items3 = [
        {
            label: 'menu3',
            items: [
                {
                    label: 'Left',
                    url: '',
                },
                {
                    label: 'Right',
                    url: '',
                },

            ]
        },
    ];

    return(
        <>
            <BreadCrumbs />

            <div className='breadCrumbs'>zz
                <Link to='/' className='menuTxt'>Home</Link> 
                <i className='pi pi-chevron-right' />
                <Menubar model={items} />
                <i className='pi pi-chevron-right' />
                <Menubar model={items2} />
                <i className='pi pi-chevron-right' />
                <Menubar model={items3} />
            </div>
        </>
        
    )
}
export default BreadCrumbs

