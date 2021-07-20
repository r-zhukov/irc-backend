import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import * as uuid from 'uuid';
import * as fs from 'fs';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileFormat =
        file.originalname.split('.')[file.originalname.split('.').length - 1];
      const fileName = uuid.v4() + '.' + fileFormat;
      const filePath = './static';

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(filePath + '/' + fileName, file.buffer);
      return fileName;
    } catch (e) {
      throw new HttpException(
        'Error writing file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
