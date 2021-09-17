# Project Overview

## Project Name

FootieClub

## Project Description


<b><i>FootieClub is an airtable and React build that will bring soccer fanatics together. In this app you can se socer standings for the English Premier League as well as news from the perspective fantasy league. In FootieClub, users who visit the page can submit post to the page feed and express their feelings regarding the EPL or the FPL. The home page will include standings and FPL news and the feed page will include posts and the post tab will help a user create a post that can be viewed by anyone who visits the page. <i> <b>


## Wireframes

The Wireframes below depict how all my pages will look. The home page includes EPL standings and fpl news, while the feed page includes all post and the post page will contain a form where a user can upload thier own post to be viewed by one. Each post will have a edit and delete button. 

![Wireframe](https://res.cloudinary.com/desk8znsq/image/upload/v1631904612/FootieClub_-_Window_oafkaj.png) 
![Wireframe](https://res.cloudinary.com/desk8znsq/image/upload/v1631904606/FootieClub_-_Window_1_kdqp5k.png)
![Wireframe](https://res.cloudinary.com/desk8znsq/image/upload/v1631904599/FootieClub_-_Window_2_mdrxuk.png)
![Wireframe](https://res.cloudinary.com/desk8znsq/image/upload/v1631904595/FootieClub_-_Phone_X_hm6tmm.png)
![Wireframe](https://res.cloudinary.com/desk8znsq/image/upload/v1631904589/FootieClub_-_Phone_X_1_zrg7yu.png)
![Wireframe](https://res.cloudinary.com/desk8znsq/image/upload/v1631904583/FootieClub_-_Phone_X_2_iechdw.png)



## Components Hierarchy

![Wireframe](https://res.cloudinary.com/desk8znsq/image/upload/v1631904564/FootieClub_oj5hsw.png)


### API and Data Samples

<i>The API I will be using is from airtable,epl api, and fpl api<i>
https://fantasy.premierleague.com/api/fixtures/
```josn


    [
        {
        "code": 2210271,
        "event": 1,
        "finished": true,
        "finished_provisional": true,
        "id": 1,
        "kickoff_time": "2021-08-13T19:00:00Z",
        "minutes": 90,
        "provisional_start_time": false,
        "started": true,
        "team_a": 1,
        "team_a_score": 0,
        "team_h": 3,
        "team_h_score": 2
        
    },
        

```
https://data.football-api.com/v3/standings/1204?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b
```json

{
    "events": [
        {
            "id": 1,
            "name": "Gameweek 1",
            "deadline_time": "2021-08-13T17:30:00Z",
            "average_entry_score": 69,
            "finished": true,
            "data_checked": true,
            "highest_scoring_entry": 5059647,
            "deadline_time_epoch": 1628875800,
            "deadline_time_game_offset": 0,
            "highest_score": 150,
            "is_previous": false,
            "is_current": false,
            "is_next": false,

```
https://airtable.com/appSZfBB304lCRzUK/api/docs#curl/table:table%201:list
```json
{
    "records": [
        {
            "id": "recOnFid3iCXdrBj9",
            "fields": {
                "firstname": "Miguel",
                "lastname": "Galindo",
                "favoriteteam": "Chelsea",
                "profile pic": "https://wallpaperaccess.com/full/82955.jpg",
                "post": "Chelsea will win the league!"
            },
            "createdTime": "2021-09-17T18:55:44.000Z"
        },
        {
            "id": "recpsbjV44Qpt5ENJ",
            "fields": {},
            "createdTime": "2021-09-17T18:55:44.000Z"
        },
        {
            "id": "recz5mpE0Xe8p4C3c",
            "fields": {},
            "createdTime": "2021-09-17T18:55:44.000Z"
        }
    ],
    "offset": "recz5mpE0Xe8p4C3c"
}
```
  

#### MVP 


- Home page with two external api's
- a navbar that includes three tabs and a search box
- route to multiple parts of the site
- able to get data from airtable, and post to it 
- able to create,edit and delete posts
- able to search post by person who wrote it
- CSS styling and flex box to allow for responsive design
- Media queries for responsiveness on smaller screen resolutions

#### PostMVP  


- Add a third api to include other soccer league standings
- include a dark mode version of the site
- make each post into a modal when clicked on an enlarge button
- add a background that has animations
- collaborte with UX design student to make the styling even   better
-add a feature that lets you create an actual profile where you can add favorite team, favorite player, lineups, and score predictions. 

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|September 16| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|September 17| Project Approval | complete
|September 18| Set up github, project files, axios calls for all api's | 
|September 19| Pseudocode for each component | 
|September 20| build out each component  | 
|September 21| route each component properly | 
|September 22| use tachyons to make site pretty | 
|September 23| continue working on styling |
|September 24| project presentation |


## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning workflow | L | 3hrs|  |  |
| Working w/ React | L | 2hrs|  |  |
|pseudocoding | M | 3 hrs |    |  |
| CSS styling | L | 2hrs|  ||
| JSX Code first call | H | 3hrs| |  |
| JSX Code second call | H | 3hrs| |  |
| airtable API call| H | 3hrs|     |      |
| retrieving all data| H | 3hrs|     |     |
| clickable buttons| H |3 hrs|     | |
|creating a form | H | 3hrs | | 
| Responsive design | H | 3hrs |  |    |
|Responsive for mobile| M | 3hrs | | |
|Total|     |  34  |    |   |



## SWOT analysis

Strengths
- I have a good idea of what I want my project to look like. All of the labs and exercises done in class will help my road to project complettion be alot smoother

Weaknesses
- I may have some issues implementing some concepts into my project, such as the search feature. Still have some confusion with params, setStates and props and may come to some trouble of not knowing which to use. 

Opportunities
- This project will help me understand React alot better and help become a better software engineer. After this project I hope to make my weaknesses into strengths

Threats
- Sometimes when I encounter a problem, I spend toom much time on it rather than getting help from classmates or instructors. I hope I can use my resources better for this project and not spend alot of time on some issues. 

