function showAlert() {
    alert("Form Submitted Successfully!");
}

function downloadFile() {
    alert("Download Started...");
}

function deleteItem() {
    let confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete) {
        alert("Item Deleted!");
    } else {
        alert("Cancelled");
    }
}