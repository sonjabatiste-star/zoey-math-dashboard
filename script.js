// Marks a lesson as complete and saves it to the browser
// so the dashboard's progress bar and badges can find it.
function markComplete(lessonName) {
    localStorage.setItem(lessonName, "complete");
}

// Used by any legacy "Open Lesson" buttons that pass a week number.
function openLesson(week) {
    window.location.href = "lesson" + week + ".html";
}