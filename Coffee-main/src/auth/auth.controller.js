const authService =
    require('../auth/auth.service');

exports.register = async (req, res) => {
    try {

        const {
            username,
            password,
            role
        } = req.body;

        const result =
            await authService.register(
                username,
                password,
                role
            );

        res.status(201).json(result);

    } catch (error) {

        res.status(400).json({
            message: error.message
        });
    }
};