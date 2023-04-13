/** 模块 main state 接口 */
declare interface MainStoreState {
   /** token */
   token: string;
   /** 当前页面 */
   nowPath: string;
}

/** 模块 main 接口 */
declare type MainStoreStateItem = keyof MainStoreState;

declare type MainStoreStateType = ValueOf<MainStoreStateItem>;

declare interface setItemType<T> {
   item: T;
   value: any;
}
