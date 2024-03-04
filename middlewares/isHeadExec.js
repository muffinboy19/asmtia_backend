const headExecMiddleware = (req, res, next) => {
    if (req.user.Role === 'head' || req.user.Role === 'executive') {
        next();
    } else {
        return res.status(403).json({ message: 'You are not authorized' });
    }
};

const executiveMiddleware = (req, res, next) => {
    if (req.user.Role === 'executive') {
        next();
    } else {
        return res.status(403).json({ message: 'You are not authorized' });
    }
};

const headMiddleware = (req, res, next) => {
    if (req.user.Role === 'head') {
        next();
    } else {
        return res.status(403).json({ message: 'You are not authorized' });
    }
};

export { userMiddleware, headMiddleware, executiveMiddleware };
