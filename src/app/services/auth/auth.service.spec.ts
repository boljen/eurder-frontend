import { AuthService } from './auth.service';

describe('AuthService', () => {

  it('should set and return the auth token', () => {
    const service = new AuthService();
    expect(service.authToken).toBe("user-id-1");

    service.authToken = "new token";
    expect(service.authToken).toBe("new token");
  });

});
