class InfoController {
    // [GET] / info
    index(req, res) {
        res.render('./me/info');
    }

    // [GET] / info/email
    email(req, res) {
        res.render('./me/email');
    }

    phone(req, res) {
        res.render('./me/phone');
    }
}

export default new InfoController();
