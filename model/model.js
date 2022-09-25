export function changePage(pageId) {
    $.get(`../pages/${pageId}.html`, function (data) {
        console.log(data);
        $("#app").html(data);
    }).fail((error) => {
        if(error.status == "404") {
            alert("Page can't be found. Please check your url. Thank you!");
        }
        console.log("error", error.status);
    });
}