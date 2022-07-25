import { ReversePipe } from './reverse.pipe';



describe('UserComponent', () => {
    it('should create reverse the value', () => {
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');
      });
});