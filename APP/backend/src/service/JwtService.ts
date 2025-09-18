import jwt from "jsonwebtoken";

export  class JwtService {
    constructor() {}

    generateToken = ({ email, role, userId }: { email: string; role: string; userId: string }) => {
        return jwt.sign({ email, role, userId }, "preptrack" as string, { expiresIn: '1h' });
    };
}