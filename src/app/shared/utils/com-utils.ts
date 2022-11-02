export const updateItemInList = ( 
    id:any, 
    type:any, 
    typeValue:any, 
    items:any, 
    setItemsFunction:Function, 
    key?:any
) => {

    key = key === undefined ? 'id' : key;

    const updateItems:any[] = items.map((item:any) => {
        // console.log('updateItems item.id', item.id, 'id', id)
        
        if (item[key] === id) {
          return {
            ...item,
            [type]: typeValue
          };
        } else {
            return item
        }
    });
    
    // console.log('updateItems', updateItems)

    //상태 업데이트
    setItemsFunction(updateItems);
}
