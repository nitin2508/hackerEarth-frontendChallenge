'use strict';

angular.module('springBoardApp')
    .constant("baseURL", "https://hackerearth.0x10.info/api/")
    .service('LearningPathsService', ['baseURL', '$http', function(baseURL, $http) {

        var courses = [];
        var totalVotes = { upvotes: 0, downvotes: 0 };
        var data = { "paths": [{ "id": "1", "name": "User Experience Design", "image": "https:\/\/d1v7bd3b0sjvlo.cloudfront.net\/uploads\/learning_path\/thumb\/ux_design_thumb.png", "tags": "design research, UI frameworks, wireframes, user centric approach", "learner": "26,093", "hours": "131+", "description": "This Learning Path is a curriculum of UX Design courses, videos and resources from across the internet, organized into a logical sequence that a beginner can follow.", "sign_up": "https:\/\/www.springboard.com\/accounts\/google\/login\/?process=login&next=\/learning-paths\/user-experience-design\/learn\/" }, { "id": "2", "name": "MBA Essentials", "image": "https:\/\/d1v7bd3b0sjvlo.cloudfront.net\/uploads\/learning_path\/thumb\/mba_thumb.png", "tags": "finance, accounting, opertions, strategy", "learner": "15,566", "hours": "505+", "description": "Learn core business skills and how to apply them professionally and in your personal life", "sign_up": "https:\/\/www.springboard.com\/accounts\/google\/login\/?process=login&next=\/learning-paths\/mba\/learn\/" }, { "id": "3", "name": "Android App Dev", "image": "https:\/\/d1v7bd3b0sjvlo.cloudfront.net\/uploads\/learning_path\/thumb\/android_thumb_hHLP9dL.png", "tags": "material design, sensors, maps, location service, studio", "learner": "22,887", "hours": "91+", "description": "Learn android programming by building apps from scratch. Learn how to design and build Android apps and take your ideas to millions of people.", "sign_up": "https:\/\/www.springboard.com\/accounts\/google\/login\/?process=login&next=\/learning-paths\/android\/learn\/" }, { "id": "4", "name": "Social Entrepreneurship", "image": "https:\/\/d1v7bd3b0sjvlo.cloudfront.net\/uploads\/learning_path\/thumb\/social_ent_thumb.png", "tags": "design solution, business plan, failing fast, learning quick", "learner": "1,715", "hours": "17+", "description": "A robust introduction to Social Entrepreneurship, Learn and build a roadmap to launch your very own social venture", "sign_up": "https:\/\/www.springboard.com\/accounts\/google\/login\/?process=login&next=\/learning-paths\/social-entrepreneurship\/learn\/" }, { "id": "5", "name": "Apply to Y Combinator", "image": "https:\/\/d1v7bd3b0sjvlo.cloudfront.net\/uploads\/learning_path\/thumb\/y_comb_thumb.png", "tags": "startups, hackernews, ycombinator,", "learner": "1,658", "hours": "3+", "description": "A set of resources from YC partners and alumni to help you turn in a strong YC application. This course is collection of Gautam Tambay, Founder, Springboard.", "sign_up": "https:\/\/www.springboard.com\/learning-paths\/apply-to-Ycombinator\/learn" }, { "id": "6", "name": "Data Analysis", "image": "https:\/\/d1v7bd3b0sjvlo.cloudfront.net\/uploads\/learning_path\/thumb\/data_analysis_thumb.png", "tags": "processing, wrangling, visualizations, prediction, analysys", "learner": "34,068", "hours": "310+", "description": "Learn statistics, data wrangling and visualization with this free curriculum By an Airbnb\/MIT alum. Learn how to manipulate and analyze data better with this free online curriculum", "sign_up": "https:\/\/www.springboard.com\/accounts\/google\/login\/?process=login&next=\/learning-paths\/data-analysis\/learn\/" }, { "id": "7", "name": "Backend: Py\/Django", "image": "https:\/\/d1v7bd3b0sjvlo.cloudfront.net\/uploads\/learning_path\/thumb\/web2.png", "tags": "python, django, backend", "learner": "16,830", "hours": "74+", "description": "Learn how to build websites and web-apps from scratch using Python and Django. Build and deploy fully functional web applications. Become a full-stack developer with the help of one of the founder Paul.", "sign_up": "https:\/\/www.springboard.com\/accounts\/google\/login\/?process=login&next=\/learning-paths\/web-development-python-django\/learn\/" }], "quote_max": "100000", "quote_available": "964" }

        if (!localStorage.voteStore) {
            var voteStore = {};
            localStorage.voteStore = JSON.stringify(voteStore);
        }

        // $http.get(baseURL + "learning-paths?type=json&query=list_paths")
        //     .then(function(response) {
        //         var coursesData = response.data.paths;
        //         courses.length = 0;
        //     var localcourse = JSON.parse(localStorage.voteStore);
        //     for (var i = 0; i < coursesData.length; i++) {
        //         var id = coursesData[i].id;
        //         if (localcourse[coursesData[i].id]) {
        //             totalVotes.upvotes = totalVotes.upvotes + localcourse[id].upvote;
        //             totalVotes.downvotes = totalVotes.downvotes + localcourse[id].downvote;
        //             coursesData[i].upvote = localcourse[id].upvote;
        //             coursesData[i].downvote = localcourse[id].downvote;
        //         } else {
        //             coursesData[i].upvote = 0;
        //             coursesData[i].downvote = 0;
        //         }
        //         var hours = coursesData[i].hours;
        //         coursesData[i].hours_int = parseInt(hours.substring(0, hours.length - 1));
        //         courses.push(coursesData[i]);
        //     }
        // }, function(response) {
        //     alert("Error: " + response.status + " " + response.statusText);
        // });

        this.getCourses = function() {

            var coursesData = data.paths;
            courses.length = 0;
            var localcourse = JSON.parse(localStorage.voteStore);
            for (var i = 0; i < coursesData.length; i++) {
                var id = coursesData[i].id;
                if (localcourse[coursesData[i].id]) {
                    totalVotes.upvotes = totalVotes.upvotes + localcourse[id].upvote;
                    totalVotes.downvotes = totalVotes.downvotes + localcourse[id].downvote;
                    coursesData[i].upvote = localcourse[id].upvote;
                    coursesData[i].downvote = localcourse[id].downvote;
                } else {
                    coursesData[i].upvote = 0;
                    coursesData[i].downvote = 0;
                }
                var hours = coursesData[i].hours;
                coursesData[i].hours_int = parseInt(hours.substring(0, hours.length - 1));
                courses.push(coursesData[i]);
            }
            return courses;
        };

        this.getTotalVotes = function() {
            return totalVotes;
        };

        this.upvote = function(course) {
            totalVotes.upvotes = totalVotes.upvotes + 1;
            course.upvote = course.upvote + 1;
            saveVote(course);
        };

        this.downvote = function(course) {
            totalVotes.downvotes = totalVotes.downvotes + 1;
            course.downvote = course.downvote + 1;
            saveVote(course);
        };

        function saveVote(course) {
            var voteStore = JSON.parse(localStorage.voteStore);
            var newVote = {
                upvote: course.upvote,
                downvote: course.downvote
            };
            voteStore[course.id] = newVote;

            localStorage.voteStore = JSON.stringify(voteStore);
        }
    }]);