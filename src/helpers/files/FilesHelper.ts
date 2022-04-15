import { ContractsHelperRepository } from '@/helpers/contracts/ContractsHelperRepository';
import { FilesHelperRepository } from '@/helpers/files/FilesHelperRepository';
import { fileRepo } from '@/services/api/file-service/FileServiceRepositoryImpl';
import { filesHelper } from '@/helpers/files/FilesHelperRepositoryImpl';

class FilesHelper {
  private repository: FilesHelperRepository;

  constructor(repository: FilesHelperRepository) {
    this.repository = repository;
  }

  async sendFile(file: any) {
    await this.repository.sendFile(file);
  }
}

export default new FilesHelper(filesHelper);
