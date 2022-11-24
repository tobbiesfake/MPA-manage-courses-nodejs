class InfoController {
    // [GET] / info
    index(req, res) {
        res.render('./info/info');
    }

    // [GET] / info/email
    email(req, res) {
        res.render('./info/email');
    }

    phone(req, res) {
        res.render('./info/phone');
    }
}

export default new InfoController();
