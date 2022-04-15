import {Inspection, InspectionFormBlock} from "@/helpers/inspection/model";

export interface FilesHelperRepository {
 sendFile(file: any): Promise<void>
}
