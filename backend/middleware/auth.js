import jwtmod from "jsonwebtoken";

export default async (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    const token = bearerHeader && bearerHeader.split(" ")[1];
    if (token === null) return res.sendStatus(401);

    const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLIC_KEY}\n-----END PUBLIC KEY-----`

    const decodedToken = jwtmod.verify(token, public_key, {
        algorithms: ["RS256"],
    });


    const name = decodedToken.preferred_username; 

    if(name != 'admin'){
        return 'error, you are not permit'
    } else {
        next();
    }
}