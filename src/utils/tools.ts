
export function getSome(target:{},str:string):any{
  return str.split('.').reduce((o,s) => (<NodeArr>o)[s],target)
}

/**
 * 对象clone
 * @param target 
 * @returns 
 */
export function deepClone(target:any):any{
  let result:any
  if(getType(target) === 'object'){
    result = {}
    for(const i in target){
      result[i] = deepClone(target[i])
    }
  } else if(getType(target) === 'array'){
    result = []
    for(const i in target){
      result.push(deepClone(target[i]))
    }
  }else{
    result = target
  }
  return result
}

/**
 * 数组扁平化（广度优先）
 * @param data 
 * @param options 
 * @returns 
 */
export function flatArr(data:Arr, options:FlatOptions={fields:'children'}):Arr{
    const cloneData = deepClone(data)
    const list:any[] = []
    let node
    while((node = cloneData.shift())){
      (<NodeArr>list).push(node)
      (<NodeArr>node)[options.fields] && cloneData.push(...(<NodeArr>node)[options.fields])
    }
    return list
}

/**
 * 获取变量类型
 * @param target 
 * @returns 
 */
export function getType(target:any):string{
  return Object.prototype.toString.call(target).slice(8,-1).toLowerCase()
}

/**
 * 防抖
 * @param fn 
 * @param delay 
 * @returns 
 */
export function debounce(fn:Function,delay:number = 300):Fn{
  let timer:number
  return function(){
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => fn(), delay);
  }
}