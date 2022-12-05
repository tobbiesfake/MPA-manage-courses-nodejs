import Course from '../models/Course.js';
import {
    mongooseToObject,
    multipleMongooseToObject,
} from '../../utility/mongoose.js';

class CoursesController {
    // [GET] /courses
    courses(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = multipleMongooseToObject(courses);
                res.render('./course/all-courses', { courses });
            })
            .catch(next);
    }

    // [GET] /courses/:slug
    index(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                mongooseToObject(course);
                if (course) {
                    res.render('./course/course-detail', course);
                } else {
                    res.render('page-not-found');
                }
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('./course/create');
    }

    // [POST] /courses/save
    save(req, res, next) {
        new Course({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            videoId: req.body.videoId,
        })
            .save()
            .then(res.redirect('/courses/manage'))
            .catch(next);
    }

    // [GET] /courses/manage
    manage(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => {
                res.render('./course/manage', {
                    courses: multipleMongooseToObject(courses),
                    deletedCount,
                });
            })
            .catch(next);
    }

    // [GET] /courses/edit/:id
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((course) => {
                mongooseToObject(course);
                if (course) {
                    res.render('./course/edit', course);
                } else {
                    res.render('page-not-found');
                }
            })
            .catch(next);
    }

    // [PUT] /:id
    update(req, res, next) {
        Course.updateOne(
            { _id: req.params.id },
            {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                videoId: req.body.videoId,
            },
        )
            .then(res.redirect('/courses/manage'))
            .catch(next);
    }

    // [DELETE] courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(res.redirect('/courses/manage'))
            .catch(next);
    }

    // [GET] courses/deleted
    deleted(req, res, next) {
        Promise.all([Course.findDeleted({}), Course.countDocuments()])
            .then(([coursesDeleted, coursesCount]) => {
                res.render('./course/deleted-courses', {
                    courses: multipleMongooseToObject(coursesDeleted),
                    coursesCount,
                });
            })
            .catch(next);
    }

    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(res.redirect('back'))
            .catch(next);
    }

    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(res.redirect('back'))
            .catch(next);
    }

    mutipleDelete(req, res, next) {
        Course.delete({ _id: { $in: req.body.courseIds } })
            .then(res.redirect('/courses/manage'))
            .catch(next);
    }

    mutipleRestore(req, res, next) {
        Course.restore({ _id: { $in: req.body.courseIds } })
            .then(res.redirect('/courses/deleted'))
            .catch(next);
    }

    multipleforceDelete(req, res, next) {
        Course.deleteMany({ _id: { $in: req.body.courseIds } })
            .then(res.redirect('/courses/deleted'))
            .catch(next);
    }
}

export default new CoursesController();
