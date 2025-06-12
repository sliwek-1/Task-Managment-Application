import jwt from "jsonwebtoken";

export default async function auth(req, res, next) {
    try {
        
        const token = req.cookies.accessToken;
        
        if(token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
            if(err) return res.sendStatus(403);
            req.email = data.email;
            next();
        });
    } catch (error) {
        return res.status(500).send("Something went wrong");
    }
}