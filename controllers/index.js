const Project = require('../models/projects');


module.exports = {

  getHome(req, res, next) {
    res.render('home', {});
  },

  async getProject(req, res, next) {
    let projects = await Project.find({});
    res.render('projects', {projects});
  },

  getCreateProject(req, res, next) {
    res.render('createProject',{});
  },

  async postCreateProject(req,res,next) {
    let { path , filename } = req.file;
    req.body.image = { path , filename };
    if(req.body.tags == undefined) req.body.tags = [];
    let project = new Project(req.body);
    await project.save();
    res.redirect('/projects');
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
