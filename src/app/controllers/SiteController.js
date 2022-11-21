class SiteController {
    home(req, res) {
        res.render('home');
    }

    search(req, res) {
        res.send('SEARCH');
    }
}

export default new SiteController();
