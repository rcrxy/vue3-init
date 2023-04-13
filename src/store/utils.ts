/** 设置持久化
 * @param val     模块类型
 * @param module  模块名称
 */
export function setItem<T>(val: T, module = "main"): void {
   let store = localStorage.getItem(module);
   let info = store ? JSON.parse(store) : val;
   // if (val instanceof Array) {
   //    val.forEach(item => {
   //       info[item.item] = item.value;
   //    });
   // } else {
   //    info[val.item] = val.value;
   // }

   // 持久化
   localStorage.setItem("store", JSON.stringify(info));
}

/** 获取内容 */
export function getItem<T>(module = "main"): T {
   let pinia: any = localStorage.getItem(module);
   let info: T = pinia ? JSON.parse(pinia) : null;
   return info;
}
