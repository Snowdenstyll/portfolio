<?php

app()->get('/', function () {
    render('index');
});

app()->get('/contact', function () {
    render('contact');
});

app()->get('/projects', function () {
    render('contact');
});

app()->get('/resume', function () {
    render('contact');
});
