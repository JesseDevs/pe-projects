import WorkoutApp from"./workoutapp.js";const view=document.querySelector(".main-container");function buildDayDisplay(){var t=new Date,e=(new Date).getTime();new Date(e-864e5);["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][t.getDay()]}function renderPage(t){view.innerHTML=t}buildDayDisplay();const homeTemplate="\n<output-block class='home'>\n    <text-content>\n        <h2 class='loud-voice'>Let's Build A <span>Routine!</span></h2>\n        <h6 class=\"small-voice\">Everyday is a new opportunity</h6>\n    </text-content>\n\n    <action-block>\n\n        <button class='route-link' data-route=\"list\">Build</button>\n        \n    </action-block>\n</output-block>\n",listTemplate='\n<form class=\'main-form\'>\n    <field>\n        <label for="x" class=\'loud-voice\'>Add A Workout..</label>\n        <input id=\'x\' class=\'attention-voice\' type="text" autocomplete="off" placeholder="ex. Bench Press" required>\n\n        <div class="select-container">\n            <select name="workoutType" id="workoutType" class=\'attention-voice\'>\n                <option value="">-- Workout Type --</option>\n                <option value="chest">Chest</option>\n                <option value="back">Back</option>\n                <option value="legs">Legs</option>\n                <option value="shoulders">Shoulders</option>\n                <option value="cardio">Cardio</option>\n            </select>\n        </div>\n    </field>\n\n    <action-block>\n\n        <button class=\'route-link\' data-route="home">Home</button>\n        <button type="submit" class=\'route-link\'>Add</button>\n    </action-block>\n\n</form>\n<output>\n\n</output>\n',routes={home:homeTemplate,list:listTemplate};renderPage(homeTemplate),window.addEventListener("click",(function(t){if(t.target.matches("[data-route]")){var e=t.target.dataset.route;if(renderPage(routes[e]),t.preventDefault(),"list"==e){new WorkoutApp("Workouts");localStorage.setItem("template",JSON.stringify(routes.list,null,2))}}}));