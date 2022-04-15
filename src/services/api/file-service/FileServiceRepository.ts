export interface FileServiceRepository {
  fetchIdsForFiles(count: number) : Promise<string[] | null>
  sendFile(file: any): Promise<string[] | null>
  fetchFileThumbnail(fileId: string) : Promise<any | null>
  fetchFile(fileId: string) : Promise<any | null>
}
