import { createReadStream, createWriteStream } from 'node:fs';
import { access } from 'node:fs/promises';
import { createGzip, createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { Transform } from 'node:stream'

async function getUniqueFilePath(filePath) {
  let fileExists = true;

  try {
    await access(filePath);
  } catch {
    fileExists = false;
  }

  if (!fileExists) {
    return filePath;
  }

  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const name = path.basename(filePath, ext);

  return path.join(
    dir,
    `${name}_${Date.now()}${ext}`
  );
}

async function compressFile(filePath) {
  try {
    const outputPath = await getUniqueFilePath(`${filePath}.zip`);

    const readStream = createReadStream(filePath);
    const gzip = createGzip();
    const writeStream = createWriteStream(outputPath);

    await pipeline(
      readStream,
      gzip,
      writeStream
    );

    return outputPath;
  } catch (err) {
    throw new Error(`Compression error: ${err.message}`);
  }
}

async function decompressFile(compressedFilePath, destinationFilePath) {
  try {
    const outputPath = await getUniqueFilePath(destinationFilePath);

    // const myTranformStream = new Transform({
    //   transform: function (chunk, encoding, callback) {
    //     const data = chunk.toString().replaceAll('і', '1').toUpperCase();
    //     this.push(data);
    //     callback();
    //   }
    // })

    const readStream = createReadStream(compressedFilePath);
    const gunzip = createGunzip();
    const writeStream = createWriteStream(outputPath);

    await pipeline(
      readStream,
      gunzip,
      // myTranformStream,
      writeStream
    );

    return outputPath;
  } catch (err) {
    throw new Error(`Decompression error: ${err.message}`);
  }
}

compressFile('./source.txt');
// decompressFile('./source.txt.gz', 'source22.txt')
