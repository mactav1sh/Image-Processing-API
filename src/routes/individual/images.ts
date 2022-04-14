import express from 'express';
import { resizeImage } from '../../utilities/sharp';
import url from 'url';
import { promises as fsPromises } from 'fs';
import validateNumber from '../../utilities/validateNumber';
import path from 'path';

// 1. Create route object
const imagesRoute = express.Router();

// 2. Define router
imagesRoute.get('/', async (req: express.Request, res: express.Response) => {
  // 1. Getting the image options using url module
  const { query } = url.parse(req.url, true);
  const filename: string = query.filename as string;
  const height: number = parseFloat(query.height as string);
  const width: number = parseFloat(query.width as string);
  const thumbnailsAbsolutePath = path.resolve(`./examples/thumbnails`);

  // 2. INITIAL STATE WITHOUT ANY PARAMETERS
  if (!filename || !height || !width) {
    return res.send(
      '<h3 style="color:#1e293b">Please enter your data in this format <span style="background-color:#f1f5f9; font-style:italic"> ?filename=YOUR_FILE_NAME&height=HEIGHT_VALUE&width=WIDTH_VALUE</span> <br> and add it to the end of the url. </h3><h4 style="color:#1e293b">Example: http://localhost:3000/api/images?filename=car&width=200&height=300 </h4>'
    );
  }

  // 3. VALIDATION
  // 3.1 Fullimage existance validation
  // Check if image doesn't exist in the full folder, send error if image doesn't exist
  const fullImageExists = await fsPromises
    .readFile(`./examples/full/${filename}.jpg`)
    .catch((err) => {
      if (err) return false;
    });
  if (fullImageExists === false) {
    return res.status(404).send(
      `<h2 style="color:#dc2626
        ; text-align:center">Image doesn't exist, please make sure your image is in the full folder and filename is written without extension (.jpg)</h2>`
    );
  }
  // 3.2 Height validation
  if (!validateNumber(height)) {
    return res
      .status(400)
      .send(
        '<h2 style="color:#dc2626; text-align:center">Height Must be a positive number</h2>'
      );
  }
  // 3.3 Width validation
  if (!validateNumber(width)) {
    return res
      .status(400)
      .send(
        '<h2 style="color:#dc2626; text-align:center">Width Must be a positive number</h2>'
      );
  }

  // 4. CHECKING IF IMAGE IS RESIZED OR NOT
  const isResized = await fsPromises
    .readFile(`./examples/thumbnails/${filename}-${width}-${height}.jpg`)
    .catch((err) => {
      if (err) return false;
    });

  // Case 1 image isn't resized
  // Resize image and return image
  if (isResized === false) {
    await resizeImage(filename, width, height);
    return res.sendFile(
      `${thumbnailsAbsolutePath}/${filename}-${width}-${height}.jpg`
    );
  }
  // Case 2 image is already resized.
  // Return image from local storage
  return res.sendFile(
    `${thumbnailsAbsolutePath}/${filename}-${width}-${height}.jpg`
  );
});

export default imagesRoute;
