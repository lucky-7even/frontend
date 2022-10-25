import RequestService from "./request.service";

class AuthService extends RequestService {
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string
  ) {
    return await this.postRequest("회원가입 API 주소", {
      email,
      password,
      name,
      phoneNumber,
    }).then((res) => res.data);
  }

  async login(email: string, password: string) {
    return this.postRequest("로그인 API 주소", {
      email,
      password,
    }).then((res) => res.data);
  }
}

export default new AuthService();
