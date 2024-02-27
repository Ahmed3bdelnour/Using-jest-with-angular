import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should have a title jest-demo', () => {
    expect(fixture.title).toEqual('jest-demo');
  });
});
