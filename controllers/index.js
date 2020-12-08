
module.exports = {

  getHome(req, res, next) {
    res.render('home', {});
  },

  async getProject(req, res, next) {
    // let projects = await projects.find({});
    res.render('projects', {});
  },

  async getAcheivments(req, res, next) {
    res.render('acheivments', {});
  },

  async getMember(req, res, next) {
    res.render('members', {});
  },

  async getNews(req, res, next) {
    res.render('news', {});
  },

  async getBlog(req, res, next) {
    res.render('blogs', {});
  },

}
