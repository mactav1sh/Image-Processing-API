import { resizeImage } from '../utilities/sharp';

describe('Test sharp functionality', () => {
  it('In case of correct parameters, the output is an object containing information about the resized image', async (): Promise<void> => {
    const response = await resizeImage('car', 200, 300);
    console.log(response);
    expect(response).toEqual({
      format: 'jpeg',
      width: 200,
      height: 300,
      channels: 3,
      premultiplied: false,
      size: 17988,
    });
  });
  it('In case of wrong parameters the output is a false value', async (): Promise<void> => {
    const response = await resizeImage('fadkjsankfasf', 200, 300);
    expect(response).toBeFalse();
  });
});
