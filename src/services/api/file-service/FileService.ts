import { FileServiceRepository } from './FileServiceRepository';
import { fileRepo } from './FileServiceRepositoryImpl';

class FileService {
  private repository: FileServiceRepository;

  constructor(repository: FileServiceRepository) {
    this.repository = repository;
  }

  async sendFile(file: any) {
   return await this.repository.sendFile(file)
  }

  async fetchFileThumbnail(fileId: string) {
    return await this.repository.fetchFileThumbnail(fileId)
  }

  async fetchFile(fileId: string) {
    return await this.repository.fetchFile(fileId)
  }

}

export default new FileService(fileRepo);
