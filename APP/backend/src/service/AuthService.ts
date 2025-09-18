import { User } from "../model/UserModel";
import { JwtService } from "./JwtService";
import { UserService } from "./UserService";
import bcrypt from "bcrypt";
import { sign } from "crypto";

export class AuthService {
  private userService: UserService;
  private jwtService: JwtService;

  constructor() {
    this.userService = new UserService();
    this.jwtService = new JwtService();
  }

  async signUp(signUpRequest: User): Promise<User | null> {
    const user = await this.userService.findByEmail(signUpRequest.email);

    if (user) {
      return null;
    }

    const hashedPassword = await bcrypt.hash(signUpRequest.password, 10);

    const createdUser = await this.userService.saveUser({
      name: signUpRequest.name,
      email: signUpRequest.email,
      password: hashedPassword,
    });
    return createdUser;
  }

async signIn(signInRequest: User): Promise<string | null> {
  const user = await this.userService.findByEmail(signInRequest.email);

  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(
    signInRequest.password,
    user.password
  );

  if (isPasswordValid) {
      return this.jwtService.generateToken({
    email: user.email,
    role: user.role || "user",
    userId: user.id,
  });
  }



  return null;
}
}