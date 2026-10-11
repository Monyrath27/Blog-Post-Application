window.onload = () => {
    const addPostBtn = document.getElementById("add-post-btn")
    addPostBtn.addEventListener("click", addTitle)

    const editTitleBtns = document.querySelectorAll(".edit-title-btn")
    editTitleBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            editTitle(e.target.parentElement.parentElement)
        })
    })

    const editContentBtns = document.querySelectorAll(".edit-content-btn")
    editContentBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            editContent(e.target.parentElement)
        })
    })

    const deleteBtns = document.querySelectorAll(".delete-post-btn")
    deleteBtns.forEach((button) => {
        button.addEventListener("click", (e) => {
            deletePost(e.target.parentElement)
        })
    })
    //note: those with s are for the existing buttons, not the newly created ones
}


const addTitle = () => {
    const title = prompt("Blog Title:")
    if (title !== null && title !== "") {
        addContent(title)
    }
}


const addContent = (title) => {
    const content = prompt("Blog Content:")
    if (content !== null && content !== "") {
        createPost(title, content)
    }
}


const createPost = (title, content) => {
    const blogPost = document.getElementById("blog-posts-container")

    const post = document.createElement("div")
    post.className = "blog-post"

    const postHeader = document.createElement("div")
    postHeader.className = "post-header"

    const postName = document.createElement("h3")
    postName.textContent = title

    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", (e) => {
        editTitle(e.target.parentElement.parentElement)
    })


    const postContent = document.createElement("p")
    postContent.textContent = content


    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"
    editContentBtn.addEventListener("click", (e) => {
        editContent(e.target.parentElement)
    })


    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete Post"
    deleteBtn.addEventListener("click", (e) => {
        deletePost(e.target.parentElement)
    })


    postHeader.appendChild(postName)
    postHeader.appendChild(editTitleBtn)

    post.appendChild(postHeader)
    post.appendChild(postContent)
    post.appendChild(editContentBtn)
    post.appendChild(deleteBtn)

    blogPost.appendChild(post)
}


const editTitle = (target) => {
    const newTitle = prompt("New Blog Title:")
    if (newTitle !== null && newTitle !== "") {
        target.querySelector("h3").textContent = newTitle
    }
}


const editContent = (target) => {
    const newContent = prompt("New Blog Content:")
    if (newContent !== null && newContent !== "") {
        target.querySelector("p").textContent = newContent
    }
}


const deletePost = (target) => {
    target.remove()
}