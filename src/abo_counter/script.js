const key = "AIzaSyA2d0f6rE6fkmaes4YTY8a2idtGhYDVsP8";
const youtube_channel = "UCT6xwnAGSMfolhWrBIzW0lQ";
const youtube_sub_count = document.getElementById("youtube_counter");
const youtube_viedeo_counter = document.getElementById("youtube_viedeo_counter");
const youtube_view_count = document.getElementById("youtube_view_count");

let sub_count = document.querySelector(".sub_count");
let goal_box = document.getElementById("goal_box");

let goal_start = "13000";
let goal_max = "13099";


let get_youtube_subscribers = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtube_channel}&key=${key}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        youtube_sub_count.innerHTML = "подписчиков: " + data["items"][0].statistics.subscriberCount;
        youtube_viedeo_counter.innerHTML = "ролики: " + data["items"][0].statistics.videoCount;
        youtube_view_count.innerHTML = "Просмотры: " + data["items"][0].statistics.viewCount;
        
        youtube_count_for_goal = data["items"][0].statistics.subscriberCount;
        if (youtube_count_for_goal >= goal_start) {
            if (youtube_count_for_goal >= goal_max) {

            }
            else {
                console.log("GOAL!!!");
                sub_count.classList.add("goal");
                // goal_box.id = "";
            }
        } 
    })

}

function goal() {
    sub_count.classList.add("goal");
    // goal_box.id = "";
}

setInterval(get_youtube_subscribers(), 600)