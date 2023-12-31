import { MyMulPipe } from './my-mul.pipe';

describe('MyMulPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMulPipe();
    expect(pipe).toBeTruthy();
  });
});
