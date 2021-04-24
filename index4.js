let matched = student
    .map(học_sinh => ({ ...học_sinh, age: học_sinh.age === 11 ? 15 : học_sinh.age }));

document.body.innerHTML = matched.length ? `
<ul>
    ${matched.map(học_sinh => `<li>${học_sinh.name}<br>Tuổi: ${học_sinh.age}<br>Sở thích:<ul>${học_sinh.hobbies.map(h => `<li>${h}</li>`).join("")}</ul></li>`).join("")}
</ul>
` : "Không có học sinh có sở thích theo yêu cầu!";
