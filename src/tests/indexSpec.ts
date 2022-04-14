import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

// 1st test
describe('Endpoint testing', () => {
  it('gets api endpoint', async (done) => {
    const response = await request.get('/api/images');
    console.log(response);
    expect(response.status).toBe(200);
    done();
  });
});

// Sharp functionality test
// describe('Test sharp functionality', () => {
//     it('If there is an image and image is resized', () => {
//         const response = resizeImage('image', 200, 300);
//         expect(response).toBeTrue();
//     });
// });
