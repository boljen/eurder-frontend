import {
  HttpRequest,
} from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

describe('AuthInterceptor', () => {
  it('should add a token to a request', (done) => {
    const authService = new AuthService();
    authService.authToken = 'test-token';

    const interceptor = new AuthInterceptor(authService);
    const req = new HttpRequest('GET', 'localhost');

    const asserter = {
      handle: (request: HttpRequest<any>) => {
        expect(request.headers.get('Authorization')).toBe('test-token');
        done();
      }
    };

    interceptor.intercept(req, asserter as any);
  });
});
