

// Add tag
let addTag = document.getElementById('add-tag');
addTag.addEventListener('click', (event) => {
    let tagInput = document.getElementById('tag-input');
    if (tagInput.value && tagInput.value != "") {
        let allTag = document.getElementById('all-tag');
        let tag = `<div  class="badge bg-info text-white p-2 mb-1 mr-2" style="font-weight: 600;font-size: 12px;">
                        <input type="text"  name="tags[]" value=${tagInput.value} class="d-none"> ${tagInput.value} 
                        <i class="remove fa fa-close" onclick="removeDiv(this);"></i>
                    </div>`;

        allTag.innerHTML += tag;

        tagInput.value = "";
    }
});

// Remove tag
function removeDiv(btn){
    ((btn.parentNode).parentNode).removeChild(btn.parentNode);
}
