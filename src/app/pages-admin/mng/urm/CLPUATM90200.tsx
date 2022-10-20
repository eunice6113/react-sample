import * as React from 'react';
import { BasePage } from '../../../shared/components/base/BasePage';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import './CLPUATM90200.css';
import NoData from '../../../shared/components/ui/NoData';
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';
import ViewTemplate from '../../../shared/components/template/ViewTemplate';
import { confirmDialog, InputNumber, RadioButton } from 'primereact';

const nodeDemo = [
    {
        key: '0',
        department: '기업고객그룹',
        children: [{
            key: '0-0',
            department: 'IT그룹',
            children: [
                { key: '0-0-0', department: 'IT그룹', name: '김디비'}, 
                { key: '0-0-1', department: 'IT그룹', name: '김자바'}]
        },
        {
            key: '0-1',
            department: '자산관리그룹',
            children: [{ key: '0-1-0', department: '자산관리그룹', name: '김자산'}]
        }]
    },
    {
        key: '1',
        department: '경영지원그룹',
        children: [
            { key: '1-0', department: '경영지원그룹', name: '김경영'},
            { key: '1-1', department: '경영지원그룹', name: '김파업'}],
    },
    {
        key: '3',
        department: '디지털그룹',
        children: []
    },
]
 
interface AutMenuNode {
    key: string;
    department: string;
    name?: string;
    children?: AutMenuNode[];
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
        department: '',
        name: '',
        children: [],
    });

    const authority = [
        {name: '일반사용자', key: 'user'}, 
        {name: '관리자', key: 'admin'}];
    const [selectedAuthority, setSelectedAuthority] = React.useState(authority[0]);

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

    //각 트리 노드 디자인
    const nodeTemplate = (node:any, options:any) => {

        {/* 트리 이름 - children 이 있으면 그룹 이름, 없으면 개인 이름을 뿌려준다 */}
        let label = <div className='treeNode'>
            <div className='nodeLabel' onClick={viewNode}>{
                node.children.length > 0 ? node.department : node.name
            }</div>
        </div>;

        return (
            <span className={options.className}>
                {label}
            </span>
        )
    }

     //선택한 메뉴 조회
     const viewNode = ( node:any ) => {
        console.log('viewNode', node.key as number, node)

    }

    //검색
    const search = () => {
        
    }

    //권한 변경
    const contentsInfo = {
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
                        key: '조직명', 
                        value: <span>{selectedNode?.department}</span>,
                    },
                ]
            },
            {
                showIf: selectedNode?.name !== null,
                cols: [
                    {
                        key: '성명', 
                        value: <span>{selectedNode.name}</span>,
                    },
                ]
            },
            {
                cols: [
                    {
                        key: '권한',
                        value: <>
                        {
                            authority.map((aut) => (
                                <span key={'aut' + aut.key} className='field-radiobutton mr20'>
                                    <RadioButton inputId={aut.key} name='auth' value={aut} onChange={(e) => setSelectedAuthority(e.value)} checked={selectedAuthority.key === aut.key} disabled={aut.key === 'R'} />
                                    <label htmlFor={aut.key}>{aut.name}</label>
                                </span>
                            ))
                        }
                        </>
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

                    <div className='d-flex'>
                        <InputText placeholder='조직명, 성명으로 검색하세요.' value='' />
                        <Button type='button' className='ml10' label='조회' onClick={search}  />
                    </div>
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
                <div className='box treeBox'>
                    {
                        selectedKey === null ?
                        <div className='treeNodata'>
                            <NoData isTriangleIcon={true} isVertical={true} message='좌측의 조직, 성명을 선택해주세요.' />
                        </div>
                        :
                        // 권한 수정
                        <ViewTemplate {...contentsInfo} className='mt0' />
                    }
                    <div className='text-center mt20'>
                        <Button className='md' label='확인' />
                    </div>
                </div>
            </div>
        </div>

    </BasePage>)
}
export default CLPUATM90200;
