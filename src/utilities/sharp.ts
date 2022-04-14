import sharp from 'sharp';

export const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<boolean | sharp.OutputInfo> => {
  const response = await sharp(`./examples/full/${filename}.jpg`)
    .resize(width, height)
    .toFile(`./examples/thumbnails/${filename}-${width}-${height}.jpg`)
    .catch(() => {
      return false;
    });
  return response;
};
