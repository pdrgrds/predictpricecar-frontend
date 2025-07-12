import { EntityRequestEntityBlogList } from "../../../shared/Domain/Catalog/EntityBlogList";
import { EntityLoadData } from "./utils";

export interface IPropsScreen {
    init(): void;
    redirectPage(key: string): void;
    dataList: EntityLoadData;
    onSubmitfilter: (params: EntityRequestEntityBlogList) => Promise<void>;
}