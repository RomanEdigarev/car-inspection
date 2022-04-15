import { FileServiceRepository } from './FileServiceRepository';
import { client } from '@/services/api/client';

class FileServiceRepositoryImpl implements FileServiceRepository {
  async fetchIdsForFiles(count: number): Promise<string[] | null> {
    try {
      const response = await client.post<string[]>('files/create', {
        count,
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }

  async sendFile(file: any): Promise<string[] | null> {
    const ids = await this.fetchIdsForFiles(1);
    const formData = new FormData();
    Object.defineProperty(file, 'name', {
      writable: true,
    });
    file.name = ids![0];
    formData.append('files', file.raw, ids![0]);

    const { data } = await client.put('files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  }

  async fetchFileThumbnail(fileId: any): Promise<any> {
    try {
      const response = await client.get(`files/${fileId}/thumbnail`, {
        responseType: 'arraybuffer',
      });
      const blob = new Blob([response.data]);
      return window.URL.createObjectURL(blob);
    } catch (error) {
      return null;
    }
  }

  async fetchFile(fileId: string): Promise<any> {
    try {
      const response = await client.get(`files/${fileId}`, {
        responseType: 'arraybuffer',
      });
      return response.data
    } catch (error) {
      return null;
    }
  }

}

export const fileRepo = new FileServiceRepositoryImpl();
