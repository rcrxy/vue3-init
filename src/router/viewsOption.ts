import { RouteRecordRaw } from "vue-router";
import "vue-router";

declare module "vue-router" {
   interface RouteMeta {
      // 路由名称
      label: string;
      // 图标
      icon?: boolean;
   }
}

const viewsOptions: RouteRecordRaw[] = [];

export default viewsOptions;
