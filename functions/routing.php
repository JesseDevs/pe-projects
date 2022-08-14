<?php

$page = 'home';
$pageData = null;

if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = "home";

}

if ($page == 'home') {
    $json = file_get_contents('data/pages/home.json');
    $pageData = json_decode($json, true);
}

if ($page == 'about') {
    $json = file_get_contents('data/pages/about.json');
    $pageData = json_decode($json, true);
}

if ($page == 'projects') {
    $jsonPage = file_get_contents('data/pages/projects.json');
    $pageData = json_decode($jsonPage, true);
    $json = file_get_contents('data/projects.json');
    $projectsData = json_decode($json, true);
}

if ($page == 'project') {
    $json = file_get_contents('data/projects.json');
    $projectsData = json_decode($json, true);
    foreach ($projectsData as $project) {
        if ($project['id'] == $_GET['id']) {
            $projectData = $project;
        }
    }

    $jsonPage = file_get_contents('data/pages/project.json');
    $pageData = json_decode($jsonPage, true);
}


if ($page == 'writing') {
    $json = file_get_contents('data/pages/writing.json');
    $pageData = json_decode($json, true);
}

if ($page == 'forms') {
    $json = file_get_contents('data/pages/forms.json');
    $pageData = json_decode($json, true);
}

if ($page == 'form') {
    $json = file_get_contents('data/form.json');
    $formFile = json_decode($json, true);
    foreach ($formFile as $form) {
        if ($form['id'] == $_GET['id']) {
            $formThing = $form;
        }
    }

    $json = file_get_contents('data/pages/form.json');
    $pageData = json_decode($json, true);
}


if ($page == 'style') {
    $json = file_get_contents('data/pages/style-guide.json');
    $pageData = json_decode($json, true);
}



function currentPage(){
    if (isset($_GET['page'])) {
        $page = $_GET['page'];
    } else {
        $page = "home";

    }

}

function activePage($name)
{
    if(isset($_GET['page'])){
        if ($_GET['page'] == $name) {
            echo "active";
        }
    }
}

function filterArrayByType($array, $type)
{
    $filteredArray = [];
    foreach ($array as $item) {
        if ($item["type"] == $type) {
            array_push($filteredArray, $item);
        }
    }
    return $filteredArray;
}


function renderList($array, $type)
{
    $list = filterArrayByType($array, $type);
    foreach ($list as $item) {
        include("templates/modules/resume-card/template.php");
    }
}