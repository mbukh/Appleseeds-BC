const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const ol = document.createElement("ol");
ol.style.listStyle = "none";
users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.firstName} ${user.lastName}`;
    li.setAttribute("data-id", user.id);
    ol.appendChild(li);
});
document.body.appendChild(ol);
