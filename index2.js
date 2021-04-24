let hobby = prompt("Nhập sở thích cần tìm?");

let matched = student
    .filter(học_sinh => học_sinh.hobbies.indexOf(hobby) + 1);

document.body.innerHTML = matched.length ? `
<ul>
    ${matched.map(học_sinh => `<li>${học_sinh.name}<br>Sở thích:<ul>${học_sinh.hobbies.map(h => `<li>${h}</li>`).join("")}</ul></li>`).join("")}
</ul>
` : "Không có học sinh có sở thích theo yêu cầu!";
