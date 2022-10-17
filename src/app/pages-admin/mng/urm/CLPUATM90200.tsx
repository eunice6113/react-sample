import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import './CLPUATM90200.css';
import NoData from '../../../shared/components/ui/NoData';
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import { confirmDialog, InputNumber } from 'primereact';

const nodeDemo = [
    {
        key: '0',
        order: '0',
        menuName: '본부',
        description: '본부 본부',
        link: '/stc',
        hideYn: 'N',
        children: [{
            key: '0-0',
            order: '0-0',
            menuName: '임원실',
            description: '임원실임원실',
            link: '/stc/mnm',
            hideYn: 'N',
            children: [
                { key: '0-0-0', order: '0-0-0', menuName: '기업고객그룹', description: 'Expenses Document', link: '/stc/mnm/list', hideYn: 'N' }, 
                { key: '0-0-1', order: '0-0-1', menuName: '혁신금융그룹', description: 'Resume Document', link: '/stc/mnm/0', hideYn: 'N' }]
        },
        {
            key: '0-1',
            order: '0-1',
            menuName: '그룹',
            description: '그룹그룹',
            link: '/stc/mnm',
            hideYn: 'N',
            children: [{ key: '0-1-0', order: '0-1-0', menuName: '자산관리그룹', description: 'Invoices for this month', link: '', hideYn: 'N' }]
        }]
    },
    {
        key: '1',
        order: '1',
        menuName: '경영지원그룹',
        description: '경영지원그룹경영지원그룹',
        link: '/stc/mnm',
        hideYn: 'N',
        children: [
            { key: '1-0', order: '1-0', menuName: '디지털그룹', description: 'Meeting', link: '/stc/mnm/list', hideYn: 'N' },
            { key: '1-1', order: '1-1', menuName: '여신운영그룹', description: 'Product Launch', link: '/stc/mnm/list', hideYn: 'N' }],
    },
    {
        key: '3',
        order: '3',
        menuName: 'Empty',
        description: 'Events Folder',
        hideYn: 'N',
        link: '/stc/mnm/list',
        children: []
    },
]
 
interface MenuNode {
    key: string;
    menuName: string;
    link: string;
    description?: string;
    order: string;
    hideYn: string;
    children?: MenuNode[];
}

//사용자 권한 관리
const CLPUATM90200: React.FC = () => {

    //기본 트리 노드 데이터
    const [nodes, setNodes] = React.useState<any>([]);

    //전체열기, 전체닫기
    const [expandedKeys, setExpandedKeys] = React.useState({});
    const [open, setOpen] = React.useState(true);

    //선택한 노드의 키 값
    const [selectedKey, setSelectedKey] = React.useState(null);

    //선택한 노드
    const [selectedNode, setSelectedNode] = React.useState<any>({
        key: '0',
        menuName: '',
        link: '',
        description: '',
        order: '0',
        hideYn: 'N',
    });

    //드롭다운 (관리자, 사용자)
    const [select, setSelect] = React.useState<any>(null);

    //선택모드 (조회, 수정, 등록)
    const [mode, setMode] = React.useState<'view' | 'edit' | 'register'>('view');

    //초기화, 트리 노드 데이터 불러와서 읽힘
    React.useEffect(() => {
        setNodes(nodeDemo);
    }, []);

    //왼쪽 선택한 트리의 key 값을 오른쪽 메뉴정보 영역에 메뉴 ID 값에 넣어준다
    React.useEffect(() => {
        console.log('selectedKey =>', selectedKey)

    }, [selectedKey]);

    //노드 선택시
    const handleNodeSelect = (e:any) => {
        console.log('handleNodeSelect =>', e.node, e)

        setSelectedNode( e.node )

    }

    const handleNodeUnselect = (node:any) => {
        console.log('handleNodeUnselect =>', node)
    }

    //전체열기
    const expandAll = () => {
        let _expandedKeys = {};
        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
        setOpen(!open);
    }

    //전체닫기
    const collapseAll = () => {
        setExpandedKeys({});
        setOpen(!open);
    }

    //노드 단건 열기
    const expandNode = (node:any, _expandedKeys:any) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    }

    //전체 메뉴 선택 옵션
    const options = [
        { name: '사용자 화면', value: 'user' },
        { name: '관리자 화면', value: 'admin' },
    ];

    //전체 메뉴 선택
    const handleChange = (e: { value: any}) => {
        setSelect(e.value);
    }

    //선택한 메뉴 조회
    const viewNode = ( node:any ) => {
        console.log('viewNode', node.key as number, node)

        setMode('view')
    }

    const [newNode, setNewNode] = React.useState<MenuNode>(
        {
            key: '0',
            menuName: '',
            link: '',
            description: '',
            order: '0',
            hideYn: 'N',
        })


    //선택한 메뉴 추가
    const addNode = ( node:any ) => {
        console.log('addNode', node.key as number, node)

        setNewNode({
            key: '0',
            menuName: '',
            link: '',
            description: '',
            order: '0',
            hideYn: 'N'
        })
        setMode('register')
    }

    //선택한 메뉴 수정
    const editNode = ( node:any ) => {
        console.log('editNode', node.key as number, node)
        
        setSelectedNode(node)
        setMode('edit')
    }

    let selectedNodeItem:any = null

    //선택한 메뉴 숨김처리
    const hideNode = ( node:any ) => {
        console.log('hideNode', node.key as number, node)

        setSelectedNode(node)
        selectedNodeItem = node;

        confirmDialog({
            message: '해당 메뉴를 숨김처리 하시겠습니까?',
            rejectLabel: '취소',
            acceptLabel: '확인',
            className: 'noHeader',
            accept: () => {},
            reject: () => {}
        })
    }

    //각 메뉴 노드 디자인
    const nodeTemplate = (node:any, options:any) => {

        let label = <div className='treeNode'>
            {/* 메뉴 이름 */}
            <div className='nodeLabel' onClick={viewNode}>{node.menuName}</div>
            <div className='ml-auto'>
                {/* 메뉴 추가 버튼 */}
                <Button onClick={(e) => {
                    e.preventDefault(); 
                    addNode(node)}} className='treeNodeBtn p-button-text' icon='pi pi-plus-circle' />
                
                {/* 메뉴 수정 버튼 */}
                <Button onClick={(e) => editNode(node)} className='treeNodeBtn p-button-text' icon='pi pi-file-edit' />

                {/* 메뉴 숨김 버튼 */}
                <Button onClick={(e) => hideNode(node)} className='treeNodeBtn p-button-text' icon={node.hide ? 'pi pi-eye-slash':'pi pi-eye'} />
            </div>
        </div>;

        return (
            <span className={options.className}>
                {label}
            </span>
        )
    }

    //등록
    const registerInfo = {
        mode: mode,
        hasRequired: false,
        colgroups: ['180px', '*'],
        rows: [
            {
                cols: [ 
                    {
                        key: '조직별 권한선택',
                        value: null,
                    },
                ]
            },
            {
                cols: [ 
                    {
                        key: null,
                        value: '이벤트 내용입니다',
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '조직명', 
                        value: <span>{newNode.menuName}</span>,
                        editingValue: <InputText placeholder='메뉴명을 입력해주세요.' value={newNode.menuName} onChange={(e) => {}} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '성명', 
                        value: <span>{newNode.link}</span>,
                        editingValue: <InputText placeholder='URI를 입력해주세요' value={newNode.link} onChange={(e) => {}} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '권한',
                        value: <span>{newNode.order}</span>,
                        editingValue: <InputText value={newNode.order} onChange={(e) => {}} />//<InputNumber value={newNode.order} onChange={(e) => {}} />,     
                    }
                ]
            },
        ]
    }

    //조회, 수정
    const contentsInfo = {
        mode: mode,
        hasRequired: true,
        colgroups: ['180px', '*'],
        rows: [
            {
                cols: [ 
                    {
                        key: '조직별 권한선택',
                        value: null,
                    },
                ]
            },
            {
                cols: [ 
                    {
                        key: null,
                        value: '이벤트 내용입니다',
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '조직명', 
                        value: <span>{selectedNode?.menuName}</span>,
                        editingValue: <InputText placeholder='메뉴명을 입력해주세요.' value={selectedNode?.menuName} onChange={(e) => {}} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '성명', 
                        value: <span>{selectedNode.link}</span>, /* /stc/ntc/list */
                        editingValue: <InputText placeholder='URI를 입력해주세요' value={selectedNode.link} onChange={(e) => {}} />,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '권한',
                        value: <span>{selectedNode.order}</span>,
                        editingValue: <InputText value={selectedNode.order} onChange={(e) => {}} />,//<InputNumber value={selectedNode.order} onChange={(e) => {}} />,     
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
                            <NoData isTriangleIcon={true} isVertical={true} message='좌측의 조직, 성명을 선택해주세요.' />
                        </div>
                        :
                        mode === 'register' ?
                        // 등록
                        <ViewTemplate {...registerInfo} className={mode === 'register' ? 'show mt0':'hide mt0'} />
                        :
                        // 조회, 수정
                        <ViewTemplate {...contentsInfo} className='mt0' />
                    }
                    {
                        mode !== 'view' &&
                        <div className='text-center mt20'>
                            <Button className='outline mr10 md' label='취소' />
                            <Button className='md' label='확인' />
                        </div>
                    }
                </div>
            </div>
        </div>

    </BasePage>)
}
export default CLPUATM90200;
