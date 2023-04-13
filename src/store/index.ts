import { defineStore } from "pinia";
import { getItem, setItem } from "./utils";

const mainStore = defineStore("main", {
   state: () => ({} as MainStoreState),
   getters: {
      /** 获取 state */
      // getStoreItem: state => {
      //    return function <T extends MainStoreStateItem>(
      //       item: T | { [index: number]: T }
      //    ): MainStoreStateType[T] | { [index: number]: MainStoreStateType[T] } {
      //       // 获取当前持久化值
      //       let data = getItem<MainStoreState>();
      //       // 如果当前取得多个数据
      //       if (item instanceof Array) {
      //          let arr: { [index: number]: MainStoreStateType[T] } = [];
      //          for (let i = 0; i < item.length; i++) {
      //             arr[i] = state[item[i]];
      //          }
      //       } else {
      //       }
      //    };
      // },
   },
   actions: {
      /** 设置 main store 数据并永久化*/
      // setStoreItems(val: setItemType<MainStoreStateItem> | Array<setItemType<MainStoreStateItem>>) {
      //    // 当前内容为多个时
      //    if (val instanceof Array) {
      //       val.forEach(item => {
      //          this = { ...this.pinia, [item.item]: item.value };
      //       });
      //       setItem<MainStoreState>(this.pinia);
      //    } else {
      //       this.pinia = { ...this.pinia, [val.item]: val.value };
      //       setItem(val.item, val.value);
      //    }
      // },
   },
});

export default mainStore;
