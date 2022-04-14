import validateNumber from '../utilities/validateNumber';

describe('Test the validate number utility functionality', () => {
  it('In case of of positive number the output is true', async (): Promise<void> => {
    expect(validateNumber(10)).toBeTrue();
  });
  it('In case of of negative number the output is false', async (): Promise<void> => {
    expect(validateNumber(-5)).toBeFalse();
  });
});
