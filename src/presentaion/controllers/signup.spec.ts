import { SignUpController } from "./signup";

describe('signup controller', () => {
  test('should return 400 if no name is provided', () => {
    const instance = new SignUpController()
    const httpRequest = {
      body: {
        // name: 'ahmed',
        email: 'ahmed@gmail.com',
        password: 'password',
        confirm_password: 'password'
      }
    }
    const httpResponse = instance.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
});