import { useState } from "react";
import { IPropsScreen } from "../Domain/IPropsScreen";
import { useNavigate } from "react-router-dom";
import { EntityLoadData } from "../Domain/Utils";
import { useDispatch } from "react-redux";
import { addLoading, removeLoading } from "../../../shared/Infraestructure/SliceGeneric";
import { RepositoryImpl } from "./RepositoryImpl";
import { EntityRequestEntityBlogList } from "../../../shared/Domain/Catalog/EntityBlogList";

export const Controller = (): IPropsScreen => {
    const [dataList, setDataList] = useState<EntityLoadData>({ category: [], result: [], tag: [] });
    const repository = new RepositoryImpl();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const init = async () => {
        try {
            dispatch(addLoading());
            const [tag, category, result] = await Promise.all([
                repository.getTagBlog().catch(() => []),
                repository.getCategoryBlog().catch(() => []),
                repository.getBlog({}).catch(() => [])
            ])
            setDataList(() => ({
                tag,
                category,
                result,
            }))
        } catch(err) {
            console.log(err);
        } finally {
            dispatch(removeLoading());
        }
    }

    const redirectPage = (url: string) => {
        navigate(url)
    }

    const onSubmitfilter = async (params: EntityRequestEntityBlogList) => {
        try {
            const result = await repository.getBlog(params);
            setDataList((prev) => ({
                ...prev,
                result
            }));
        } catch(error) {
            console.log(error)
        }
    }

    return ({
        init,
        redirectPage,
        dataList,
        onSubmitfilter,
    })
}