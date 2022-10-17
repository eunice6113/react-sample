import * as React from 'react';
import { BasePage } from '../../../../shared/components/base/BasePage';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import './CLPMNUM90900.css';
import NoData from '../../../../shared/components/ui/NoData';
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';
import TreeNodeShowBtn from '../../../../shared/components/ui/TreeNodeShowBtn';
import ViewTemplate from '../../../../shared/components/template/ViewTemplate';
import { confirmDialog, InputNumber } from 'primereact';

const nodeDemo = [
    {
        'key': '0',
        'label': 'Documents',
        'data': 'Documents Folder',
        'hide': false,
        'children': [{
            'key': '0-0',
            'label': 'Work',
            'data': 'Work Folder',
            'hide': false,
            'children': [{ 'key': '0-0-0', 'label': 'Expenses.doc', 'data': 'Expenses Document', 'hide': false }, 
            { 'key': '0-0-1', 'label': 'Resume.doc', 'data': 'Resume Document', 'hide': false }]
        },
        {
            'key': '0-1',
            'label': 'Home',
            'data': 'Home Folder',
            'hide': false,
            'children': [{ 'key': '0-1-0', 'label': 'Invoices.txt', 'data': 'Invoices for this month', 'hide': false }]
        }]
    },
    {
        'key': '1',
        'label': 'Events',
        'data': 'Events Folder',
        'hide': false,
        'children': [
            { 'key': '1-0', 'label': 'Meeting', 'data': 'Meeting', 'hide': false },
            { 'key': '1-1', 'label': 'Product Launch', 'data': 'Product Launch', 'hide': false },
            { 'key': '1-2', 'label': 'Report Review', 'data': 'Report Review', 'hide': false }]
    },
    {
        'key': '2',
        'label': 'Movies',
        'data': 'Movies Folder',
        'hide': false,
        'children': [{
            'key': '2-0',
            'label': 'Al Pacino',
            'data': 'Pacino Movies',
            'hide': false,
            'children': [
                { 'key': '2-0-0', 'label': 'Scarface', 'data': 'Scarface Movie', 'hide': false }, 
                { 'key': '2-0-1', 'label': 'Serpico', 'data': 'Serpico Movie', 'hide': false }]
        },
        {
            'key': '2-1',
            'label': 'Robert De Niro',
            'data': 'De Niro Movies',
            'hide': false,
            'children': [{ 'key': '2-1-0', 'label': 'Goodfellas', 'data': 'Goodfellas Movie', 'hide': false }, 
            { 'key': '2-1-1', 'label': 'Untouchables', 'data': 'Untouchables Movie', 'hide': false }]
        }]
    },
    {
        'key': '3',
        'label': 'Empty',
        'data': 'Events Folder',
        'hide': false,
        'children': []
    },
]
 
interface MenuNode {
    menuId: number;
    menuName: string;
    link: string;
    description: string;
    order: number;
}

//메뉴 관리
const CLPMNUM90900: React.FC = () => {

    const [nodes, setNodes] = React.useState<any>([]);
    const [expandedKeys, setExpandedKeys] = React.useState({});
    const [open, setOpen] = React.useState(true);

    const [selectedKey, setSelectedKey] = React.useState(null);
    const [select, setSelect] = React.useState<any>(null);

    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');

    const [values, setValues] = React.useState<MenuNode>(
        {
            menuId: 0,
            menuName: '',
            link: '',
            description: '',
            order: 0
        })

    //초기화, 트리 노드 데이터 불러와서 읽힘
    React.useEffect(() => {
        setNodes(nodeDemo);
    }, []);


    // const handleChange = (prop: keyof PopupContent, value:any) => {
    //     setValues({ ...values, [prop]: value });
    // };
    React.useEffect(() => {
        console.log('selectedKey =>', selectedKey)

        if(selectedKey !== null) {
            setValues({ ...values, 'menuId': selectedKey })
        }

    }, [selectedKey]);

    const handleNodeSelect = (e:any) => {
        console.log('handleNodeSelect =>', e.node, e)
        
    }

    const handleNodeUnselect = (node:any) => {
        console.log('handleNodeUnselect =>', node)
    }

    const expandAll = () => {
        let _expandedKeys = {};
        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
        setOpen(!open);
    }

    const collapseAll = () => {
        setExpandedKeys({});
        setOpen(!open);
    }

    const expandNode = (node:any, _expandedKeys:any) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    }

    const options = [
        { name: '사용자 화면', value: 'user' },
        { name: '관리자 화면', value: 'admin' },
    ];

    const handleChange = (e: { value: any}) => {
        setSelect(e.value);
    }

    const viewNode = ( node:any ) => {
        console.log('viewNode', node.key as number, node)

        setMode('view')
    }

    const addNode = ( node:any ) => {
        console.log('addNode', node.key as number, node)

        setValues({
            menuId: 0,
            menuName: '',
            link: '',
            description: '',
            order: 0
        })
        setMode('register')
    }

    const editNode = ( node:any ) => {
        console.log('editNode', node.key as number, node)
        setMode('edit')
    }

    const hideNode = ( node:any ) => {
        console.log('hideNode', node.key as number, node)

        confirmDialog({
            message: '해당 메뉴를 숨김처리 하시겠습니까?',
            rejectLabel: '취소',
            acceptLabel: '확인',
            className: 'noHeader',
            accept: () => {},
            reject: () => {}
        })
    }

    const nodeTemplate = (node:any, options:any) => {

        let label = <div className='treeNode'>
            <div className='nodeLabel' onClick={viewNode}>{node.label}</div>
            <div className='ml-auto'>
                <Button onClick={(e) => {
                    e.preventDefault(); 
                    addNode(node)}} className='treeNodeBtn p-button-text' icon='pi pi-plus-circle' />
                <Button onClick={(e) => editNode(node)} className='treeNodeBtn p-button-text' icon='pi pi-file-edit' />
                <Button onClick={(e) => hideNode(node)} className='treeNodeBtn p-button-text' icon='pi pi-eye' />
                {/* <Button className='treeNodeBtn p-button-text' icon='pi pi-eye-slash' /> */}
                {/* <TreeNodeShowBtn handleClick={(e:any) => hideNode(node)} /> */}
            </div>
        </div>;

        return (
            <span className={options.className}>
                {label}
            </span>
        )
    }

    // <InputText className="" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />

    const contentsInfo = {
        mode: mode,
        hasRequired: true,
        colgroups: ['180px', '*'],
        rows: [
            {
                cols: [
                    {
                        key: '메뉴ID', 
                        value: <span> {values.menuId} </span>,
                        editingValue: <InputText disabled value={values.menuId} onChange={(e) => {}} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '메뉴명', 
                        value: <span> 클라우드 추진 Cell 소개 </span>,
                        editingValue: <InputText placeholder="메뉴명을 입력해주세요." value={''} onChange={(e) => {}} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        required: true,
                        key: '화면링크', 
                        value: <span> /stc/ntc/list </span>,
                        editingValue: <InputText placeholder="URI를 입력해주세요" value={''} onChange={(e) => {}} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '메뉴설명', 
                        value: <span> 클라우드 추진 cell소개 콘텐츠 노출 메뉴 </span>,
                        editingValue: <InputText placeholder="메뉴에 대한 설명을 입력해주세요" value={''} onChange={(e) => {}} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '노출순서',
                        value: <span> 1 </span>,
                        editingValue: <InputNumber value={0} onChange={(e) => {}} />,     
                    }
                ]
            },
        ]
    }
    return(
    <BasePage className='CLPMNUM90900'>

        <div className='treeContainer mt30'>
            <div className='treeLeftContainer mr10'>
                <h5 className='mb10'>전체 메뉴</h5>
                <div className='box treeBox'>
                    <Dropdown value={select} options={options} onChange={handleChange} optionLabel='name' placeholder='전체' />
                    <hr className='innerLine'/>

                    <div className='d-flex'>
                        <Button type='button' className='grayBtn mb10 ml-auto' label={open ? '전체열기':'전체닫기'} onClick={open ? expandAll : collapseAll}  />
                    </div>
                    <Tree 
                        value={nodes} 
                        expandedKeys={expandedKeys} 
                        onToggle={(e:any) => setExpandedKeys(e.value)} 
                        nodeTemplate={nodeTemplate}
                        selectionMode='single' 
                        selectionKeys={selectedKey} 
                        onSelectionChange={(e:any) => setSelectedKey(e.value)}
                        onSelect={handleNodeSelect} 
                        onUnselect={handleNodeUnselect}
                    />
                </div>
            </div>
            <div className='treeRightContainer ml10'>
                <h5 className='mb10'>메뉴정보</h5>
                <div className='box treeBox'>
                    {
                        selectedKey === null ?
                        <div className='treeNodata'>
                            <NoData isTriangleIcon={true} isVertical={true} message='좌측의 메뉴를 선택해주세요.' />
                        </div>
                        :
                        // mode === 'register' ?
                        //새 메뉴 등록일 경우
                        // <ViewTemplate {...contentsInfo} />
                        // :
                        //mode == view, edit 인 경우 표출
                        <ViewTemplate {...contentsInfo} />
                    }
                </div>
            </div>
        </div>

    </BasePage>)
}
export default CLPMNUM90900;
