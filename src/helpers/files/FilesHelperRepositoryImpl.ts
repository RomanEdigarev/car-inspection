import {FilesHelperRepository} from "@/helpers/files/FilesHelperRepository";
import store from "@/store";

class FilesHelperRepositoryImpl implements FilesHelperRepository {
    async sendFile(file: any): Promise<void> {
        await store.dispatch('files/sendFile', file)
    }
}

export const filesHelper = new FilesHelperRepositoryImpl()
