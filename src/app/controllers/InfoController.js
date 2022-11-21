class InfoController {
    // [GET] / info
    index(req, res) {
        res.render('info');
    }

    // [GET] / info/email
    email(req, res) {
        res.send('example@gmail.com');
    }

    phone(req, res) {
        res.send('(+84)981 227 712');
    }
}

export default new InfoController();
