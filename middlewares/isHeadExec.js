const headExecMiddleware = (req, res, next) => {
    const user = JSON.parse(req.cookies.user);
    console.log("=====================================\n\n");
    console.log("user: ", user);
    console.log("=====================================\n\n");
    if (user.role === "head" || user.role === "executive") {
        req.user = { id: user.id, role: user.role };

        next();
    } else {
        return res.status(403).json({ message: "You are not authorized" });
    }
};

const executiveMiddleware = (req, res, next) => {
    const user = JSON.parse(req.cookies.user);
    if (user.role === "executive") {
        req.user = { id: user.id, role: user.role };

        next();
    } else {
        return res.status(403).json({ message: "You are not authorized" });
    }
};

const headMiddleware = (req, res, next) => {
    const user = JSON.parse(req.cookies.user);
    if (user.role === "head") {
        req.user = { id: user.id, role: user.role };
        next();
    } else {
        return res.status(403).json({ message: "You are not authorized" });
    }
};

export { headExecMiddleware, headMiddleware, executiveMiddleware };
